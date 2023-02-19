var vid = document.getElementById("myVideo");
var image = document.getElementById('hero-image');
vid.addEventListener('ended', function() {
    vid.style.display = 'none';
    image.style.display = 'inline';
}, false);