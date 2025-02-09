document.addEventListener('DOMContentLoaded', () => {
  const projectsToggle = document.getElementById('projects-toggle');
  const profileMain = document.getElementById('profile-main');
  const projectContent = document.getElementById('project-content');
  const projectsContainer = document.querySelector('.projects-container');
  const backBtn = document.querySelector('.back-btn');
  const projectsList = document.querySelector('.projects-list');

  const projects = [
    {
      title: 'Test',
      description: 'just testing lol.',
      link: '/'
    }
  ];

  function createProjectsList() {
    projectsList.innerHTML = '';

    projects.forEach(project => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
      `;  
      li.addEventListener('click', () => {
        window.location.href = project.link;
      });
      projectsList.appendChild(li);
    });

    profileMain.classList.add('hidden');
    projectsContainer.style.display = 'block';
  }

  function resetView() {
    profileMain.classList.remove('hidden');
    projectsContainer.style.display = 'none';
  }

  projectsToggle.addEventListener('click', createProjectsList);
  backBtn.addEventListener('click', resetView);
});