"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CityCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. SCENE & RIYADH NOCTURNAL ATMOSPHERE
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060A14, 0.0028);

    const camera = new THREE.PerspectiveCamera(
      48,
      container.clientWidth / container.clientHeight,
      1,
      1800
    );
    // Cinematic camera angle framing the Riyadh skyline
    camera.position.set(-20, 85, 235);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance" 
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 2. LIGHTING & RIYADH AMBIENCE
    const ambientLight = new THREE.AmbientLight(0x0d1b2a, 2.2);
    scene.add(ambientLight);

    const moonLight = new THREE.DirectionalLight(0x7dd3fc, 2.6);
    moonLight.position.set(120, 260, 160);
    scene.add(moonLight);

    const cyanRim = new THREE.DirectionalLight(0x00f5ff, 2.2);
    cyanRim.position.set(-160, 140, -40);
    scene.add(cyanRim);

    // 3. ARCHITECTURAL MATERIALS (Sleek Glass & Metallic Curtain Walls)
    const glassTowerMat = new THREE.MeshStandardMaterial({
      color: 0x0e2238,
      metalness: 0.92,
      roughness: 0.12,
      emissive: 0x0369a1,
      emissiveIntensity: 0.35,
    });

    const faisaliahMat = new THREE.MeshStandardMaterial({
      color: 0x0a1626,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x0284c7,
      emissiveIntensity: 0.3,
    });

    // 4. LANDMARK 1: KINGDOM CENTRE (برج المملكة - الرياض)
    const kingdomGroup = new THREE.Group();
    kingdomGroup.position.set(-42, 0, 5);

    // Build the iconic parabolic curved silhouette of Kingdom Tower
    const ktShape = new THREE.Shape();
    const baseW = 25;
    const totalH = 220;
    const topW = 10;

    ktShape.moveTo(-baseW, 0);
    ktShape.lineTo(-baseW * 1.04, 45);
    ktShape.quadraticCurveTo(-baseW * 0.88, 130, -topW, totalH);
    ktShape.lineTo(topW, totalH);
    ktShape.quadraticCurveTo(baseW * 0.88, 130, baseW * 1.04, 45);
    ktShape.lineTo(baseW, 0);
    ktShape.closePath();

    // The iconic Parabolic Opening cutout
    const arch = new THREE.Path();
    const archBaseY = 135;
    const archTopW = 7;
    arch.moveTo(0, archBaseY);
    arch.quadraticCurveTo(-archTopW * 0.55, 175, -archTopW, totalH - 6);
    arch.lineTo(archTopW, totalH - 6);
    arch.quadraticCurveTo(archTopW * 0.55, 175, 0, archBaseY);
    ktShape.holes.push(arch);

    const ktGeo = new THREE.ExtrudeGeometry(ktShape, {
      depth: 18,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 2,
      bevelSize: 1.2,
      bevelThickness: 1.2
    });
    ktGeo.center();

    const kingdomTower = new THREE.Mesh(ktGeo, glassTowerMat);
    kingdomTower.position.y = totalH / 2;
    kingdomGroup.add(kingdomTower);

    // Glowing Neon Edges for Kingdom Tower
    const ktEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(ktGeo, 24),
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85 })
    );
    kingdomTower.add(ktEdges);

    // The Famous SkyBridge (جسر المشاهدة المعلق بأعلى برج المملكة)
    const skybridgeGeo = new THREE.CylinderGeometry(1.4, 1.4, 15, 16);
    const skybridgeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const skybridge = new THREE.Mesh(skybridgeGeo, skybridgeMat);
    skybridge.rotation.z = Math.PI / 2;
    skybridge.position.set(0, totalH - 4, 0);
    kingdomGroup.add(skybridge);

    // Signature Arch Uplight (إضاءة قوس المملكة الداخلية اللامعة)
    const archSpot = new THREE.PointLight(0x00f5ff, 5, 90);
    archSpot.position.set(0, 145, 0);
    kingdomGroup.add(archSpot);

    const archGlow = new THREE.PointLight(0x38bdf8, 4, 110);
    archGlow.position.set(0, 180, 0);
    kingdomGroup.add(archGlow);

    scene.add(kingdomGroup);

    // 5. LANDMARK 2: AL FAISALIAH TOWER (برج الفيصلية - الرياض)
    const faisaliahGroup = new THREE.Group();
    faisaliahGroup.position.set(65, 0, -45);

    const fHeight = 175;
    const fBaseW = 28;

    // 4-sided pyramid
    const fGeo = new THREE.ConeGeometry(fBaseW, fHeight, 4);
    fGeo.center();
    const faisaliahTower = new THREE.Mesh(fGeo, faisaliahMat);
    faisaliahTower.position.y = fHeight / 2;
    faisaliahTower.rotation.y = Math.PI / 4;
    faisaliahGroup.add(faisaliahTower);

    const fEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(fGeo, 15),
      new THREE.LineBasicMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.75 })
    );
    faisaliahTower.add(fEdges);

    // The Iconic Golden Globe (الكرة الذهبية في أعلى برج الفيصلية)
    const globeGeo = new THREE.SphereGeometry(6.2, 24, 24);
    const globeMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.95,
      roughness: 0.08,
      emissive: 0xd97706,
      emissiveIntensity: 0.75,
    });
    const goldenGlobe = new THREE.Mesh(globeGeo, globeMat);
    goldenGlobe.position.set(0, 145, 0);
    faisaliahGroup.add(goldenGlobe);

    const globeLight = new THREE.PointLight(0xf59e0b, 4, 70);
    globeLight.position.set(0, 145, 0);
    faisaliahGroup.add(globeLight);

    // Faisaliah Spire Needle
    const fNeedleGeo = new THREE.CylinderGeometry(0.5, 1.2, 35, 8);
    const fNeedleMat = new THREE.MeshBasicMaterial({ color: 0xe0f2fe });
    const fNeedle = new THREE.Mesh(fNeedleGeo, fNeedleMat);
    fNeedle.position.set(0, 168, 0);
    faisaliahGroup.add(fNeedle);

    // Aviation Beacon on Faisaliah Spire
    const fBeacon = new THREE.PointLight(0xf43f5e, 3, 50);
    fBeacon.position.set(0, 185, 0);
    faisaliahGroup.add(fBeacon);

    scene.add(faisaliahGroup);

    // 6. SURROUNDING RIYADH TOWERS (KAFD & Olaya District Modern Architecture)
    const cityCount = 65;
    const cityGroup = new THREE.Group();

    for (let i = 0; i < cityCount; i++) {
      const angle = (i / cityCount) * Math.PI * 2;
      const radius = 65 + Math.random() * 320;
      const x = Math.cos(angle) * radius - 15;
      const z = Math.sin(angle) * radius - 20;

      // Avoid placing right on top of Kingdom or Faisaliah
      const distToKT = Math.hypot(x - (-42), z - 5);
      const distToFT = Math.hypot(x - 65, z - (-45));
      if (distToKT < 45 || distToFT < 40) continue;

      const w = 15 + Math.random() * 22;
      const d = 15 + Math.random() * 22;
      const h = 30 + Math.random() * 115;

      const bGeo = new THREE.BoxGeometry(w, h, d);
      const bMat = new THREE.MeshStandardMaterial({
        color: 0x07111e,
        metalness: 0.88,
        roughness: 0.22,
        emissive: 0x0284c7,
        emissiveIntensity: 0.25,
      });

      const bMesh = new THREE.Mesh(bGeo, bMat);
      bMesh.position.set(x, h / 2, z);
      bMesh.rotation.y = (Math.floor(Math.random() * 4) * Math.PI) / 2;
      cityGroup.add(bMesh);

      // Fine architectural roof edges
      const bEdges = new THREE.LineSegments(
        new THREE.EdgesGeometry(bGeo, 20),
        new THREE.LineBasicMaterial({ color: 0x0284c7, transparent: true, opacity: 0.4 })
      );
      bMesh.add(bEdges);
    }
    scene.add(cityGroup);

    // 7. KING FAHD ROAD (طريق الملك فهد - شريان الرياض المتدفق)
    // Dark desert base plane
    const groundGeo = new THREE.PlaneGeometry(1200, 1200);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x040810,
      roughness: 0.1,
      metalness: 0.9,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    scene.add(ground);

    // Subtle modern highway grid
    const highwayGrid = new THREE.GridHelper(1000, 50, 0x0284c7, 0x08182b);
    highwayGrid.position.y = 0.2;
    scene.add(highwayGrid);

    // Dynamic Traffic Light Streams (حركة السيارات السريعة على الطريق)
    const streamCount = 45;
    const streamGeo = new THREE.BoxGeometry(1.6, 0.4, 28);
    const matAmber = new THREE.MeshBasicMaterial({ color: 0xf59e0b }); // Front headlights
    const matRed = new THREE.MeshBasicMaterial({ color: 0xf43f5e });   // Taillights
    const matCyan = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });  // Luxury EV glow

    const streams: { mesh: THREE.Mesh; speed: number; axis: 'x' | 'z'; limit: number }[] = [];

    for (let s = 0; s < streamCount; s++) {
      let chosenMat = matCyan;
      if (s % 3 === 0) chosenMat = matAmber;
      if (s % 3 === 1) chosenMat = matRed;

      const mesh = new THREE.Mesh(streamGeo, chosenMat);
      const isZAxis = Math.random() > 0.4;
      const offset = (Math.floor(Math.random() * 14) - 7) * 45;

      if (isZAxis) {
        mesh.position.set(offset, 0.6, (Math.random() - 0.5) * 800);
        mesh.rotation.y = 0;
        streams.push({ mesh, speed: (s % 2 === 0 ? 1 : -1) * (1.8 + Math.random() * 2.4), axis: 'z', limit: 450 });
      } else {
        mesh.position.set((Math.random() - 0.5) * 800, 0.6, offset);
        mesh.rotation.y = Math.PI / 2;
        streams.push({ mesh, speed: (s % 2 === 0 ? 1 : -1) * (1.8 + Math.random() * 2.4), axis: 'x', limit: 450 });
      }
      scene.add(mesh);
    }

    // 8. RIYADH NIGHT STARS & GLOW PARTICLES
    const particleCount = 700;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount * 3; p += 3) {
      particlePos[p] = (Math.random() - 0.5) * 900;
      particlePos[p + 1] = Math.random() * 380;
      particlePos[p + 2] = (Math.random() - 0.5) * 900;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x7dd3fc,
      size: 2.2,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 9. INTERACTIVE REAL 3D PARALLAX (MOUSE & TOUCH)
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = -20;
    let targetCameraY = 85;

    const onMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseX = normX * 60; // Parallax pan
      mouseY = normY * 35; // Parallax tilt
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const normX = (touch.clientX / window.innerWidth) * 2 - 1;
        const normY = -(touch.clientY / window.innerHeight) * 2 + 1;
        mouseX = normX * 45;
        mouseY = normY * 25;
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

    // 10. ANIMATION LOOP (60 FPS)
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Breathing Arch Uplight Pulse (Kingdom Tower)
      archSpot.intensity = 4.5 + Math.sin(elapsed * 2.5) * 2;
      archGlow.intensity = 3.5 + Math.sin(elapsed * 2.5) * 1.5;

      // Faisaliah Golden Globe Glow
      globeLight.intensity = 3 + Math.sin(elapsed * 3) * 1.5;

      // Faisaliah Aviation Red Beacon Blink
      fBeacon.intensity = Math.sin(elapsed * 4) > 0.4 ? 4 : 0.2;

      // Subtle Majestic Sway
      kingdomGroup.rotation.y = Math.sin(elapsed * 0.18) * 0.04;
      faisaliahGroup.rotation.y = Math.PI / 4 + Math.sin(elapsed * 0.15) * 0.03;

      // Traffic movement along highway
      for (let s = 0; s < streams.length; s++) {
        const item = streams[s];
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

      // Star Particles slow drift
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += 0.2;
        if (positions[i] > 380) {
          positions[i] = 0;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Smooth Camera LERP with Mouse Physics
      targetCameraX = -20 + mouseX;
      targetCameraY = 85 - mouseY * 0.4;

      camera.position.x += (targetCameraX - camera.position.x) * 0.045;
      camera.position.y += (targetCameraY - camera.position.y) * 0.045;
      camera.lookAt(-10, 110, 0);

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
      ktGeo.dispose();
      fGeo.dispose();
      globeGeo.dispose();
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
