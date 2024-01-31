document.addEventListener('DOMContentLoaded', function () {
    var gearIcon = document.getElementById('gear-icon');
    var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var rotationAngle = 0;
    
    window.addEventListener('scroll', function () {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        var scrollDelta = currentScroll - lastScrollTop;
        
        // Adjust rotation angle based on scroll direction and speed
        rotationAngle += scrollDelta * 0.6; // Adjust the multiplier to control the rotation speed
        
        // Apply the rotation transformation to the gear icon
        gearIcon.style.transform = 'rotate(' + rotationAngle + 'deg)';
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);
});