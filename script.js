const projects = document.querySelectorAll('.project');
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('click', (e) => {
        skillTags.forEach(t => t.classList.remove('active-skill'));
        projects.forEach(p => p.classList.remove('active-project'));
        const projectID = tag.getAttribute('proj');
        if (projectID) {
            const siblingTags = document.querySelectorAll(`.skill-tag[proj="${projectID}"]`);
            siblingTags.forEach(sibling => {
                sibling.classList.add('active-skill');
            });

            document.getElementById(projectID).classList.add('active-project');
        }
    });
});

projects.forEach(project => {
    project.addEventListener('click', () => {
        projects.forEach(p => p.classList.remove('active-project'));
        project.classList.add('active-project');
        skillTags.forEach(t => t.classList.remove('active-skill'));
        const skills = project.getAttribute('data-skill');
        if (skills) {
            const skillArray = skills.split(' ');
            skillArray.forEach(skillName => {
                const tag = document.querySelector(`.skill-tag[data-skill="${skillName}"]`);
                if (tag) tag.classList.add('active-skill');
            });

        }
        project.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

});

const skillsSection = document.querySelector('#skills-overview');
const sentinel = document.querySelector('#skills-sentinel');



// AI is so amazing for fixing js and css issues
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // When the sentinel moves out of the top of the viewport
        // entry.isIntersecting will be false
        skillsSection.classList.toggle('is-pinned', !entry.isIntersecting);
    });
}, {
    threshold: [0],
    rootMargin: '0px 0px 0px 0px' 
});

observer.observe(sentinel);

