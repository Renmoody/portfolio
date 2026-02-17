// Select all project containers
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('click', () => {
        // This updates the URL to #projectid, triggering the CSS :target
        window.location.hash = project.id;
    });
});