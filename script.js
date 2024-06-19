document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.event-btn');
    const contents = document.querySelectorAll('.content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const number = button.getAttribute('data-number');

            contents.forEach(content => {
                if (content.getAttribute('data-number') === number) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });
});