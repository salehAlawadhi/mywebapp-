import base64
import re
import os

svg_path = r'c:\saleh\mywebapp\icon1.svg'
output_path = r'c:\saleh\mywebapp\public\extracted_icon.png'

with open(svg_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the first base64 png data
match = re.search(r'data:image/png;base64,([^"]+)', content)
if match:
    base64_data = match.group(1)
    img_data = base64.b64decode(base64_data)
    with open(output_path, 'wb') as f:
        f.write(img_data)
    print(f"Successfully extracted icon to {output_path}")
else:
    print("No base64 PNG data found in SVG")
