const projects = document.querySelectorAll('.project');


document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
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

    project.addEventListener('mouseenter', () => {
        const skills = project.getAttribute('data-skill');
        if (skills) {
            const skillArray = skills.split(' ');
            skillArray.forEach(skillName => {
                const tag = document.querySelector(`.skill-tag[data-skill="${skillName}"]`);
                if (tag) tag.classList.add('active-skill');
            });
        }
    });


    project.addEventListener('mouseleave', () => {
        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.classList.remove('active-skill');
        });
    });
});
const skillsSection = document.querySelector('#skills-overview');

const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle('is-pinned', e.intersectionRatio < 1),
    { threshold: [1] }
);

observer.observe(skillsSection);