# OpenPBR-viewer
An example implementation of the [OpenPBR Surface](https://github.com/AcademySoftwareFoundation/OpenPBR) shading model in a simple WebGL  pathtracer. This is intended as an example of an "as simple as possible" implementation from scratch. Note, it is still a work-in-progress, so still missing some features.

Run the live app [here](https://portsmouth.github.io/OpenPBR-viewer).

To build locally, install [npm](https://www.npmjs.com/) and run:

    npm install
    npm run build
    npm run preview

And navigate in a browser to http://localhost:8080/OpenPBR-viewer.

<img src="https://github.com/portsmouth/OpenPBR-viewer/blob/main/images/metal.png" width="49%"> <img src="https://github.com/portsmouth/OpenPBR-viewer/blob/main/images/absorption.png" width="49%">

<img src="https://github.com/portsmouth/OpenPBR-viewer/blob/main/images/dispersion2.png" width="49%"> <img src="https://github.com/portsmouth/OpenPBR-viewer/blob/main/images/bubbles.png" width="49%">

<img src="https://github.com/portsmouth/OpenPBR-viewer/blob/main/images/honey.png" width="49%"> <img src="https://github.com/portsmouth/OpenPBR-viewer/blob/main/images/subsurface.png" width="49%">

This project uses the [Standard Shader Ball](https://github.com/usd-wg/assets/tree/main/full_assets/StandardShaderBall) asset.
