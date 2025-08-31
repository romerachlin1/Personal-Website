// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Initialize the map
    initializeMap();
    
    // Set up event listeners after a short delay to ensure DOM is ready
    setTimeout(function() {
        setupEventListeners();
    }, 100);
});

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');
    const navBtns = document.querySelectorAll('.nav-btn');
    const mapRegions = document.querySelectorAll('.map-region');

    console.log('Found elements:', {
        modal: !!modal,
        modalBody: !!modalBody,
        closeBtn: !!closeBtn,
        navBtns: navBtns.length,
        mapRegions: mapRegions.length
    });

    // Event listeners
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // Navigation button events (only for resume PDF now)
    navBtns.forEach(btn => {
        if (btn.getAttribute('data-action')) {
            btn.addEventListener('click', function() {
                const action = this.getAttribute('data-action');
                handleNavigation(action);
            });
        }
    });

    // Map region click events
    mapRegions.forEach((region, index) => {
        console.log(`Setting up region ${index}:`, {
            section: region.getAttribute('data-section'),
            project: region.getAttribute('data-project')
        });
        
        region.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const section = this.getAttribute('data-section');
            const project = this.getAttribute('data-project');
            
            console.log('Map region clicked:', { section, project });
            
            if (section) {
                showResumeSection(section);
            } else if (project) {
                showProject(project);
            } else {
                console.log('No section or project found for this region');
            }
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

function initializeMap() {
    // Add some animation to map regions
    const regions = document.querySelectorAll('.map-region');
    regions.forEach((region, index) => {
        region.style.animationDelay = `${index * 0.1}s`;
        region.classList.add('fade-in');
    });
}

function showResumeSection(sectionKey) {
    console.log('showResumeSection called with:', sectionKey); // Debug log
    console.log('Available resume sections:', Object.keys(portfolioData.resume)); // Debug log
    const section = portfolioData.resume[sectionKey];
    if (!section) {
        console.log('Resume section not found:', sectionKey); // Debug log
        return;
    }

    const content = `
        <div class="content-section">
            <h2>${section.title}</h2>
            <div class="section-content">
                ${section.content}
            </div>
        </div>
    `;
    
    showModal(content);
}

function showProject(projectKey) {
    console.log('showProject called with:', projectKey); // Debug log
    console.log('Available projects:', Object.keys(portfolioData.projects)); // Debug log
    const project = portfolioData.projects[projectKey];
    if (!project) {
        console.log('Project not found:', projectKey); // Debug log
        return;
    }

    const technologies = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    const features = project.features.map(feature => `<li>${feature}</li>`).join('');

    const content = `
        <div class="content-section">
            <h2>${project.title}</h2>
            <div class="project-item">
                <p><strong>Status:</strong> <span class="status-${project.status.toLowerCase().replace(' ', '-')}">${project.status}</span></p>
                <p>${project.description}</p>
                
                ${project.about ? `
                <h3>About This Project</h3>
                <p>${project.about}</p>
                ` : ''}
                
                <h3>Technologies Used</h3>
                <div class="technologies">
                    ${technologies}
                </div>
                
                <h3>Key Features</h3>
                <ul>
                    ${features}
                </ul>
                
                ${project.screenshot ? `<img src="${project.screenshot}" alt="${project.title} Screenshot" class="project-screenshot">` : ''}
                ${project.screenshot2 ? `<img src="${project.screenshot2}" alt="${project.title} Screenshot 2" class="project-screenshot">` : ''}
                ${project.screenshot3 ? `<img src="${project.screenshot3}" alt="${project.title} Screenshot 3" class="project-screenshot">` : ''}
                
                <div class="project-links">
                    ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-demo">Live Demo</a>` : ''}
                    ${project.github ? `<a href="${project.github}" target="_blank" class="project-demo">View Code</a>` : ''}
                </div>
            </div>
        </div>
    `;
    
    showModal(content);
}

function showModal(content) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) {
        console.error('Modal elements not found');
        return;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add fade-in animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (!modal) {
        console.error('Modal element not found');
        return;
    }
    
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

function handleNavigation(action) {
    let content = '';
    
    switch(action) {
        case 'show-all':
            content = generateOverviewContent();
            break;
        case 'resume':
            content = generateResumeOverview();
            break;
        case 'projects':
            content = generateProjectsOverview();
            break;
    }
    
    showModal(content);
}

function generateOverviewContent() {
    const resumeSections = Object.keys(portfolioData.resume);
    const projects = Object.keys(portfolioData.projects);
    
    let resumeList = resumeSections.map(section => 
        `<li><strong>${portfolioData.resume[section].title}</strong></li>`
    ).join('');
    
    let projectsList = projects.map(project => 
        `<li><strong>${portfolioData.projects[project].title}</strong> - ${portfolioData.projects[project].status}</li>`
    ).join('');

    return `
        <div class="content-section">
            <h2>Portfolio Overview</h2>
            <p>Welcome to my interactive portfolio! Click on any region of the map above to explore different sections of my resume and projects.</p>
            
            <h3>Resume Sections</h3>
            <ul>
                ${resumeList}
            </ul>
            
            <h3>Featured Projects</h3>
            <ul>
                ${projectsList}
            </ul>
            
            <h3>How to Navigate</h3>
            <ul>
                <li><strong>Blue regions</strong> contain resume information</li>
                <li><strong>Purple regions</strong> showcase my projects</li>
                <li>Click any region to view detailed information</li>
                <li>Use the navigation buttons for quick access</li>
            </ul>
        </div>
    `;
}

function generateResumeOverview() {
    const sections = Object.keys(portfolioData.resume);
    let content = '<div class="content-section"><h2>Complete Resume</h2>';
    
    sections.forEach(section => {
        content += `
            <div class="resume-section">
                <h3>${portfolioData.resume[section].title}</h3>
                <div class="section-preview">
                    ${portfolioData.resume[section].content.substring(0, 200)}...
                </div>
                <button class="view-full-btn" onclick="showResumeSection('${section}')">View Full Section</button>
            </div>
        `;
    });
    
    content += '</div>';
    return content;
}

function generateProjectsOverview() {
    const projects = Object.keys(portfolioData.projects);
    let content = '<div class="content-section"><h2>All Projects</h2>';
    
    projects.forEach(project => {
        const projectData = portfolioData.projects[project];
        const technologies = projectData.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
        
        content += `
            <div class="project-item">
                <h3>${projectData.title}</h3>
                <p><strong>Status:</strong> <span class="status-${projectData.status.toLowerCase().replace(' ', '-')}">${projectData.status}</span></p>
                <p>${projectData.description}</p>
                <div class="technologies">${technologies}</div>
                <button class="view-full-btn" onclick="showProject('${project}')">View Full Project</button>
            </div>
        `;
    });
    
    content += '</div>';
    return content;
}

// Utility functions for data management
function addNewResumeSection(key, title, content) {
    addResumeSection(key, { title, content });
    console.log(`Added new resume section: ${title}`);
}

function addNewProject(key, projectData) {
    addProject(key, projectData);
    console.log(`Added new project: ${projectData.title}`);
}

function updateExistingResumeSection(key, updates) {
    updateResumeSection(key, updates);
    console.log(`Updated resume section: ${key}`);
}

function updateExistingProject(key, updates) {
    updateProject(key, updates);
    console.log(`Updated project: ${key}`);
}

// Add CSS for additional styles
const additionalStyles = `
    .fade-in {
        animation: fadeIn 0.6s ease-in-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .modal.show {
        opacity: 1;
    }
    
    .modal {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .tech-tag {
        display: inline-block;
        background: linear-gradient(135deg, #3498db, #2980b9);
        color: white;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8rem;
        margin: 2px;
    }
    
    .status-completed {
        color: #27ae60;
        font-weight: bold;
    }
    
    .status-in-development {
        color: #f39c12;
        font-weight: bold;
    }
    
    .view-full-btn {
        background: linear-gradient(135deg, #d4af37, #b8941f);
        color: #1a1a2e;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
        margin-top: 10px;
        transition: all 0.3s ease;
    }
    
    .view-full-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
    }
    
    .resume-section, .project-item {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid #4a4a6a;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px;
    }
    
    .section-preview {
        color: #b8b8b8;
        font-style: italic;
        margin: 10px 0;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
