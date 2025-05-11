# 3D Models for AR View

This directory should contain the following 3D model files for each painting:

- `.glb` files for Android devices (Scene Viewer)
- `.usdz` files for iOS devices (Quick Look)

## Required Files

For each painting, you need to create two files:
1. `painting-name.glb` - For Android devices
2. `painting-name.usdz` - For iOS devices

The filenames should match the painting names in lowercase with spaces replaced by hyphens. For example:
- `eyes-dont-lie.glb` and `eyes-dont-lie.usdz`
- `lakeside.glb` and `lakeside.usdz`
- etc.

## Model Requirements

- Models should be optimized for mobile viewing
- Recommended size: under 10MB per model
- Models should be properly UV mapped and textured
- Models should be oriented correctly for wall mounting
- Include a virtual frame around the painting

## Supported Formats

- GLB (GL Binary) for Android
- USDZ (Universal Scene Description) for iOS

## Model Creation

You can create these models using:
1. Blender
2. Maya
3. 3ds Max
4. Or any other 3D modeling software that can export to GLB and USDZ formats 