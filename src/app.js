import './css/style.css'

import * as THREE from 'three'
// import gsap from 'gsap'
import * as GaussianSplats3D from './libs/gaussian-splats-3d.module';

const viewer = new GaussianSplats3D.Viewer({
    'cameraUp': [0, -1, -0.6],
    'initialCameraPosition': [-1, -4, 6],
    'initialCameraLookAt': [0, 4, 0],
    'ignoreDevicePixelRatio': false
});
viewer.init();

let path = '/models/burg_gallenstein_converted_for_threejs.splat';
// let path = '/models/burg_seebenstein.splat';
// let path = '/models/burg_gallenstein_edited_with_super_splash.ply';

// console.log('path =', path);

// path += isMobile() ? '.splat' : '_high.splat';

viewer.loadFile(path, {
    'splatAlphaRemovalThreshold': 5, // out of 255
    'halfPrecisionCovariancesOnGPU': true
})
.then(() => {
    viewer.start();
});