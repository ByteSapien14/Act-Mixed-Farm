// Add any interactive features here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Home page loaded');
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');

    const tourForm = document.getElementById('tour-form');
    const contactForm = document.getElementById('contact-form');

    if (tourForm) {
        tourForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Tour booking submitted!');
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Message sent!');
        });
    }
});
