document.addEventListener('DOMContentLoaded', () => {
    // 1. Dance Styles Category Filter
    const filterBtns = document.querySelectorAll('.tab-btn');
    const danceCards = document.querySelectorAll('.dance-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            danceCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || (category && category.includes(filter))) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.4s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });



    // 3. Glossary Search Filter
    const searchInput = document.getElementById('glossarySearch');
    const glossaryCards = document.querySelectorAll('.glossary-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            glossaryCards.forEach(card => {
                const term = card.querySelector('.glossary-term').textContent.toLowerCase();
                const def = card.querySelector('.glossary-def').textContent.toLowerCase();
                if (term.includes(query) || def.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
