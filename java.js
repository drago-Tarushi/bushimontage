// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the fade-in class to elements in the viewport
function addFadeInClass() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('fade-up');
        }
    });
}

// Event listener to trigger animations on scroll
window.addEventListener('scroll', addFadeInClass);
window.addEventListener('resize', addFadeInClass);

// Initial check to add animations to elements in view on page load
addFadeInClass();
