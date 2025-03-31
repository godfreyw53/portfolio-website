// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
// Skill Progress Bars
document.querySelectorAll('.progress-bar').forEach(bar => {
    const skillLevel = bar.getAttribute('data-skill');
    const progress = bar.querySelector('.progress');
    progress.style.width = skillLevel;
});
// Filterable Portfolio
const filters = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project-card');

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        const category = filter.getAttribute('data-filter');
        projects.forEach(project => {
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});
