function executeParticles() {
    particlesJS.load('particles-js', 'assets/particlesjs.json', function () {
        console.log('callback - particles.js config loaded');
    });
}
$(window).load(function () {
    // Animate loader off screen
    $('.se-pre-con').fadeOut('slow');
});
