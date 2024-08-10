document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('heading');
    const button = document.getElementById('changeTextButton');

    button.addEventListener('click', () => {
        heading.textContent = 'Changed Heading';
    });
});
