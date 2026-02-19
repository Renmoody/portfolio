const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('click', (e) => {
        if (e.target.closest('.video-container')) {
            return; 
        }
        window.location.hash = project.id;
    });
});
