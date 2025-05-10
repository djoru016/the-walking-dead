// Season tabs functionality
const seasonTabs = document.querySelectorAll('.season-tab');
const seasonContents = document.querySelectorAll('.season-content');

seasonTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const season = tab.getAttribute('data-season');

        // Remove active class from all tabs and contents
        seasonTabs.forEach(t => t.classList.remove('active'));
        seasonContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab and matching content
        tab.classList.add('active');
        document.querySelector(`.season-content[data-season="${season}"]`).classList.add('active');
    });
});

// Gallery modal functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeModal = document.querySelector('.close-modal');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        modalImg.src = imgSrc;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Blood splatter effect
function createBloodSplatter() {
    const body = document.querySelector('body');
    const blood = document.createElement('div');
    blood.classList.add('blood-splatter');

    // Random position
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;

    // Random size
    const size = 30 + Math.random() * 100;

    blood.style.width = `${size}px`;
    blood.style.height = `${size}px`;p
    blood.style.left = `${posX}px`;
    blood.style.top = `${posY}px`;
    blood.style.backgroundColor = '#8a0303';
    blood.style.borderRadius = '50%';
    blood.style.filter = 'blur(5px)';

    body.appendChild(bloo)
}