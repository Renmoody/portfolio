/* ============ SKILL TAG <-> PROJECT LINKING ============ */

const projects  = document.querySelectorAll('.project');
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
        skillTags.forEach(t => t.classList.remove('active-skill'));
        projects.forEach(p => p.classList.remove('active-project'));

        const projectID = tag.getAttribute('proj');
        if (projectID) {
            document.querySelectorAll(`.skill-tag[proj="${projectID}"]`)
                .forEach(s => s.classList.add('active-skill'));
            document.getElementById(projectID)?.classList.add('active-project');
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
            skills.split(' ').forEach(name => {
                document.querySelector(`.skill-tag[data-skill="${name}"]`)
                    ?.classList.add('active-skill');
            });
        }

        project.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});

/* ============ STICKY SKILLS SECTION ============ */

const sentinel     = document.querySelector('#skills-sentinel');
const skillsSection = document.querySelector('#skills-overview');

if (sentinel && skillsSection) {
    const stickyObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            skillsSection.classList.toggle('is-pinned', !entry.isIntersecting);
        });
    }, { threshold: [0] });

    stickyObserver.observe(sentinel);
}

/* ============ SCROLL-TRIGGERED FADE-UP ANIMATIONS ============ */

const fadeEls = document.querySelectorAll('.fade-up');

const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Stagger items within the same parent (timeline cards, project cards)
const staggerGroups = {};

fadeEls.forEach(el => {
    const parent = el.parentElement;
    const key = parent ? parent.className : 'root';
    if (!staggerGroups[key]) staggerGroups[key] = [];
    staggerGroups[key].push(el);
});

Object.values(staggerGroups).forEach(group => {
    group.forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.08}s`;
    });
});

fadeEls.forEach(el => fadeObserver.observe(el));
