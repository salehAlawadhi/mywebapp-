"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CityCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. SCENE & ATMOSPHERIC FOG
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060A14, 0.0035);

    const camera = new THREE.PerspectiveCamera(
      52,
      container.clientWidth / container.clientHeight,
      1,
      1600
    );
    // Camera positioned with an imposing upward angle framing the whole tower
    camera.position.set(-15, 105, 275);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance" 
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.6;
    container.appendChild(renderer.domElement);

    // 2. ILLUMINATION
    const ambientLight = new THREE.AmbientLight(0x1e3a5f, 2.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0x7dd3fc, 3.5);
    mainLight.position.set(80, 240, 160);
    scene.add(mainLight);

    const cyanRim = new THREE.DirectionalLight(0x00f5ff, 3.2);
    cyanRim.position.set(-160, 140, -60);
    scene.add(cyanRim);

    // 3. VIVID PROCEDURAL NEON WINDOW TEXTURE GENERATOR
    const createGlowingTexture = (density = 0.6) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      // Dark steel backdrop
      ctx.fillStyle = '#060d1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const rows = 40;
      const cols = 10;
      const cellW = canvas.width / cols;
      const cellH = canvas.height / rows;

      // Draw horizontal floor divisions
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
      ctx.lineWidth = 1;
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        ctx.moveTo(0, r * cellH);
        ctx.lineTo(canvas.width, r * cellH);
        ctx.stroke();

        for (let c = 0; c < cols; c++) {
          if (Math.random() < density) {
            const isGold = Math.random() < 0.15;
            const isBright = Math.random() < 0.4;
            
            if (isGold) {
              ctx.fillStyle = isBright ? '#fef08a' : '#f59e0b';
            } else {
              ctx.fillStyle = isBright ? '#38bdf8' : '#0284c7';
            }

            ctx.fillRect(c * cellW + 3, r * cellH + 3, cellW - 6, cellH - 6);
          }
        }
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      return texture;
    };

    const towerTexture = createGlowingTexture(0.72);
    const cityTexture = createGlowingTexture(0.5);

    // 4. CENTRAL MAJESTIC SKYSCRAPER (HELYRO MONOLITH)
    // Positioned at X: -35 so it's fully visible and framed in open space
    const towerGroup = new THREE.Group();
    towerGroup.position.set(-45, 0, 10);

    const towerMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: towerTexture,
      emissive: 0x0284c7,
      emissiveMap: towerTexture,
      emissiveIntensity: 0.9,
      roughness: 0.15,
      metalness: 0.85,
    });

    // Tier 1 (Base Monolith)
    const tier1Geo = new THREE.BoxGeometry(38, 110, 38);
    const tier1 = new THREE.Mesh(tier1Geo, towerMat);
    tier1.position.y = 55;
    towerGroup.add(tier1);

    const tier1Edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(tier1Geo),
      new THREE.LineBasicMaterial({ color: 0x00f5ff, transparent: true, opacity: 0.9 })
    );
    tier1.add(tier1Edges);

    // Tier 2 (Mid Architectural Crown)
    const tier2Geo = new THREE.BoxGeometry(26, 75, 26);
    const tier2 = new THREE.Mesh(tier2Geo, towerMat);
    tier2.position.y = 145;
    towerGroup.add(tier2);

    const tier2Edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(tier2Geo),
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.95 })
    );
    tier2.add(tier2Edges);

    // Tier 3 (High Spire Base)
    const tier3Geo = new THREE.BoxGeometry(16, 45, 16);
    const tier3Mat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.8,
      metalness: 0.95,
      roughness: 0.1
    });
    const tier3 = new THREE.Mesh(tier3Geo, tier3Mat);
    tier3.position.y = 205;
    towerGroup.add(tier3);

    const tier3Edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(tier3Geo),
      new THREE.LineBasicMaterial({ color: 0x67e8f9, transparent: true, opacity: 1.0 })
    );
    tier3.add(tier3Edges);

    // Needle Antenna
    const needleGeo = new THREE.CylinderGeometry(0.7, 1.6, 50, 8);
    const needleMat = new THREE.MeshBasicMaterial({ color: 0xe0f2fe });
    const needle = new THREE.Mesh(needleGeo, needleMat);
    needle.position.y = 250;
    towerGroup.add(needle);

    // Beacon Light & Orb
    const beaconLight = new THREE.PointLight(0x00ffff, 8, 300);
    beaconLight.position.set(0, 275, 0);
    towerGroup.add(beaconLight);

    const beaconGeo = new THREE.SphereGeometry(3.5, 16, 16);
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const beaconOrb = new THREE.Mesh(beaconGeo, beaconMat);
    beaconOrb.position.y = 275;
    towerGroup.add(beaconOrb);

    // Dual Halo Rings around Spire
    const ringGeo1 = new THREE.TorusGeometry(20, 0.5, 16, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.65 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2;
    ring1.position.y = 182;
    towerGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(12, 0.4, 16, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.5 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 2;
    ring2.position.y = 215;
    towerGroup.add(ring2);

    scene.add(towerGroup);

    // 5. SURROUNDING LUMINOUS METROPOLIS (INSTANCED MESH)
    const buildingCount = 90;
    const cityBaseGeo = new THREE.BoxGeometry(1, 1, 1);
    const cityMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: cityTexture,
      emissive: 0x0284c7,
      emissiveMap: cityTexture,
      emissiveIntensity: 0.7,
      metalness: 0.8,
      roughness: 0.25,
    });
    const cityInstanced = new THREE.InstancedMesh(cityBaseGeo, cityMat, buildingCount);

    const dummy = new THREE.Object3D();
    const cityGridRadius = 450;
    let idx = 0;

    for (let i = 0; i < buildingCount; i++) {
      const angle = (i / buildingCount) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
      const dist = 55 + Math.random() * (cityGridRadius - 55);
      const x = Math.cos(angle) * dist - 30; // Centered near tower
      const z = Math.sin(angle) * dist;

      const w = 18 + Math.random() * 26;
      const d = 18 + Math.random() * 26;
      const h = 35 + Math.random() * 130;

      dummy.position.set(x, h / 2, z);
      dummy.scale.set(w, h, d);
      dummy.rotation.y = (Math.floor(Math.random() * 4) * Math.PI) / 2;
      dummy.updateMatrix();

      cityInstanced.setMatrixAt(idx++, dummy.matrix);
    }
    cityInstanced.instanceMatrix.needsUpdate = true;
    scene.add(cityInstanced);

    // 6. CYBER GRID HIGHWAY & GROUND REFLECTION
    const gridHelper = new THREE.GridHelper(900, 90, 0x00f5ff, 0x133e69);
    gridHelper.position.y = 0.5;
    scene.add(gridHelper);

    const groundGeo = new THREE.PlaneGeometry(1000, 1000);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x040812,
      roughness: 0.05,
      metalness: 0.98,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    scene.add(ground);

    // Moving Highway Traffic Beams
    const trafficCount = 40;
    const trafficGeo = new THREE.BoxGeometry(1.6, 0.5, 30);
    const trafficMatCyan = new THREE.MeshBasicMaterial({ color: 0x22d3ee });
    const trafficMatRed = new THREE.MeshBasicMaterial({ color: 0xf43f5e });

    const trafficStreams: { mesh: THREE.Mesh; speed: number; axis: 'x' | 'z'; limit: number }[] = [];

    for (let t = 0; t < trafficCount; t++) {
      const isCyan = t % 2 === 0;
      const mesh = new THREE.Mesh(trafficGeo, isCyan ? trafficMatCyan : trafficMatRed);
      const axis = Math.random() > 0.5 ? 'x' : 'z';
      const offset = (Math.floor(Math.random() * 18) - 9) * 45;

      if (axis === 'z') {
        mesh.position.set(offset, 0.8, (Math.random() - 0.5) * 700);
        mesh.rotation.y = 0;
      } else {
        mesh.position.set((Math.random() - 0.5) * 700, 0.8, offset);
        mesh.rotation.y = Math.PI / 2;
      }

      scene.add(mesh);
      trafficStreams.push({
        mesh,
        speed: (isCyan ? 1 : -1) * (1.6 + Math.random() * 2.5),
        axis,
        limit: 400
      });
    }

    // 7. LUMINOUS STARFIELD PARTICLES
    const particleCount = 800;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount * 3; p += 3) {
      particlePos[p] = (Math.random() - 0.5) * 800;
      particlePos[p + 1] = Math.random() * 360;
      particlePos[p + 2] = (Math.random() - 0.5) * 800;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 2.4,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 8. INTERACTIVE REAL 3D PARALLAX (MOUSE & TOUCH)
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = -25;
    let targetCameraY = 75;

    const onMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseX = normX * 75; // Expressive 3D camera pan
      mouseY = normY * 45; // Camera height tilt
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const normX = (touch.clientX / window.innerWidth) * 2 - 1;
        const normY = -(touch.clientY / window.innerHeight) * 2 + 1;
        mouseX = normX * 55;
        mouseY = normY * 35;
      }
    };
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // 9. ANIMATION LOOP (60 FPS)
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Pulsing Beacon Light & Ring rotations
      beaconLight.intensity = 6 + Math.sin(elapsedTime * 4) * 3;
      beaconOrb.scale.setScalar(1 + Math.sin(elapsedTime * 4) * 0.3);

      ring1.rotation.z = elapsedTime * 0.5;
      ring2.rotation.z = -elapsedTime * 0.7;

      // Gentle Tower Rotation
      towerGroup.rotation.y = Math.sin(elapsedTime * 0.25) * 0.08;

      // Traffic movement
      for (let s = 0; s < trafficStreams.length; s++) {
        const item = trafficStreams[s];
        if (item.axis === 'z') {
          item.mesh.position.z += item.speed;
          if (Math.abs(item.mesh.position.z) > item.limit) {
            item.mesh.position.z = -item.mesh.position.z;
          }
        } else {
          item.mesh.position.x += item.speed;
          if (Math.abs(item.mesh.position.x) > item.limit) {
            item.mesh.position.x = -item.mesh.position.x;
          }
        }
      }

      // Star Particles drift
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += 0.25;
        if (positions[i] > 360) {
          positions[i] = 0;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Camera smooth 3D interpolation
      targetCameraX = -15 + mouseX;
      targetCameraY = 105 - mouseY * 0.45;

      camera.position.x += (targetCameraX - camera.position.x) * 0.05;
      camera.position.y += (targetCameraY - camera.position.y) * 0.05;
      camera.lookAt(-25, 135, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      towerTexture?.dispose();
      cityTexture?.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full pointer-events-auto z-0 overflow-hidden" 
      style={{ touchAction: 'none' }}
    />
  );
}
