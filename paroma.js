
viewer = pannellum.viewer('panorama', {
    "default": {
        "firstScene": "circle",
        "author": "Matthew Petroff",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
    },

    "scenes": {
        "circle": {
            "title": "Mason Circle",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://images.unsplash.com/photo-1552288092-76e7d732366c?q=80&w=2171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 132.9,
                    "type": "scene",
                    "text": "Spring House or Dairy",
                    "sceneId": "house"
                }
            ]
        },

        "house": {
            "title": "Spring House or Dairy",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "https://pannellum.org/images/bma-0.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "text": "Mason Circle",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
});
pannellum.viewer('panorama1', {
    "type": "equirectangular",
    "panorama": "https://pannellum.org/images/alma.jpg",
    "autoLoad": true,
});
pannellum.viewer('panorama2', {
    "type": "equirectangular",
    "panorama": "https://pannellum.org/images/alma.jpg",
    "autoLoad": true,
});
pannellum.viewer('panorama3', {
    "type": "equirectangular",
    "panorama": "https://pannellum.org/images/alma.jpg",
    "autoLoad": true,
});
pannellum.viewer('panorama4', {
    "type": "equirectangular",
    "panorama": "https://pannellum.org/images/alma.jpg",
    "autoLoad": true,
});
pannellum.viewer('panorama5', {
    "type": "equirectangular",
    "panorama": "https://pannellum.org/images/alma.jpg",
    "autoLoad": true,
});
// Make buttons work
document.getElementById('pan-up').addEventListener('click', function (e) {
    viewer.setPitch(viewer.getPitch() + 10);
});
document.getElementById('pan-down').addEventListener('click', function (e) {
    viewer.setPitch(viewer.getPitch() - 10);
});
document.getElementById('pan-left').addEventListener('click', function (e) {
    viewer.setYaw(viewer.getYaw() - 10);
});
document.getElementById('pan-right').addEventListener('click', function (e) {
    viewer.setYaw(viewer.getYaw() + 10);
});
document.getElementById('zoom-in').addEventListener('click', function (e) {
    viewer.setHfov(viewer.getHfov() - 10);
});
document.getElementById('zoom-out').addEventListener('click', function (e) {
    viewer.setHfov(viewer.getHfov() + 10);
});
document.getElementById('fullscreen').addEventListener('click', function (e) {
    viewer.toggleFullscreen();
});