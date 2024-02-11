document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section-1, .section-2, .section-3');

    sections.forEach(section => {
        section.addEventListener('click', function() {
            sections.forEach(s => {
                s.classList.remove('selected-section');
                const proDetails = s.querySelector('.pro-details-size-color');
                if (proDetails) {
                    proDetails.style.display = 'none';
                }
                const card = s.querySelector('.card');
                if (card) {
                    card.style.backgroundColor = ''; // Reset card background color
                }
            });

            // Apply styles for the clicked section
            this.classList.add('selected-section');
            const proDetails = this.querySelector('.pro-details-size-color');
            if (proDetails) {
                proDetails.style.display = 'flex';
            }

            const radioButton = this.querySelector('.custom-radio');
            if (radioButton) {
                radioButton.checked = true;
            }

            // Change the card's background color
            const card = this.querySelector('.card');
            if (card) {
                card.style.backgroundColor = 'rgba(255, 249, 249, 1)';
            }
        });
    });
});
