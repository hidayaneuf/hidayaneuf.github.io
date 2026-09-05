/**
 * =====================================================================
 * LOGIK DINAMIK LAMAN WEB (PROSES RENDERING DATA DARI DATA.JS)
 * =====================================================================
 */
document.addEventListener('DOMContentLoaded', function () {
    // 1. Kemas kini Tahun di Footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Verify SITE_CONFIG
    if (typeof SITE_CONFIG === 'undefined') {
        console.error('Pemberitahuan: SITE_CONFIG tidak ditemui dalam data.js');
        return;
    }

    const { profile, contacts, researchAreas, projects, publications, timeline, engagement, skills } = SITE_CONFIG;

    // 2. Render Maklumat Profil Utama (Hero & About)
    if (profile) {
        // Logo Jenama Navigation
        document.getElementById('navBrandLogo').innerHTML = `${profile.brandShort || 'Hidayaneu F.'} <span>.</span>`;
        
        // Tajuk & Maklumat Hero
        document.getElementById('heroTag').innerHTML = `<i class="fa-solid fa-microscope"></i> ${profile.tagline || 'Academic Research'}`;
        document.getElementById('heroTitle').textContent = profile.fullName;
        document.getElementById('heroHeadline').textContent = profile.headline;
        document.getElementById('heroBio').textContent = profile.heroBio;

        // Butang Hero CTA
        const heroCtaContainer = document.getElementById('heroCta');
        heroCtaContainer.innerHTML = `
            <a href="#projects" class="btn btn-primary"><i class="fa-solid fa-book-open"></i> View Research</a>
            <a href="${profile.cvUrl || 'assets/documents/cv.pdf'}" target="_blank" class="btn btn-outline"><i class="fa-solid fa-file-pdf"></i> Download CV</a>
            ${contacts?.linkedin ? `<a href="${contacts.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 0.75rem 1rem;"><i class="fa-brands fa-linkedin"></i></a>` : ''}
        `;

        // Institusi
        document.getElementById('heroInstitution').innerHTML = `
            <i class="fa-solid ${profile.institutionIcon || 'fa-building-columns'}" style="color: var(--accent);"></i>
            <span>${profile.institution}</span>
        `;

        // Gambar Profil & Sistem Fallback Jika Gambar Tiada
        const heroImg = document.getElementById('heroImage');
        const heroFallback = document.getElementById('heroImageFallback');
        
        if (heroImg) {
            heroImg.src = profile.photoUrl || 'assets/images/profile.jpg';
            heroImg.onerror = function() {
                heroImg.style.display = 'none';
                if (heroFallback) {
                    heroFallback.style.display = 'flex';
                    document.getElementById('fallbackName').textContent = profile.fullName;
                    document.getElementById('fallbackTitle').textContent = "BAZNAS Researcher";
                }
            };
        }

        // Biografi Profesional (About)
        const aboutContainer = document.getElementById('aboutBioContainer');
        if (aboutContainer && profile.aboutBio) {
            aboutContainer.innerHTML = profile.aboutBio.map(paragraph => `<p>${paragraph}</p>`).join('');
        }

        // Falsafah Penyelidikan
        document.getElementById('researchPhilosophy').textContent = `"${profile.researchPhilosophy}"`;

        // Text Footer
        document.getElementById('footerName').textContent = profile.fullName;
        document.getElementById('footerInstitution').textContent = profile.institution;
    }

    // 3. Render Bidang Penyelidikan (Research Areas)
    const areasContainer = document.getElementById('areasContainer');
    if (areasContainer && researchAreas) {
        areasContainer.innerHTML = researchAreas.map(area => `
            <div class="area-card">
                <div class="area-icon">
                    <i class="fa-solid ${area.icon}"></i>
                </div>
                <h3>${area.title}</h3>
                <p>${area.desc}</p>
            </div>
        `).join('');
    }

    // 4. Render Projek Penyelidikan (Featured Projects)
    const projectsContainer = document.getElementById('projectsContainer');
    if (projectsContainer && projects) {
        projectsContainer.innerHTML = projects.map(project => `
            <div class="project-card">
                <div class="project-body">
                    <div class="project-header">
                        <span class="badge badge-primary">${project.badge}</span>
                        <span class="project-year">${project.year}</span>
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.desc}</p>
                    <div class="project-footer">
                        <span class="badge badge-gold">${project.category}</span>
                        <a href="${project.detailsUrl || '#'}" class="btn btn-outline btn-sm">Details <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // 5. Render Penerbitan (Publications)
    const pubContainer = document.getElementById('pubContainer');
    if (pubContainer && publications) {
        pubContainer.innerHTML = publications.map(pub => {
            const linksHtml = pub.links ? pub.links.map(link => `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="pub-link-item">
                    <i class="fa-solid ${link.icon}"></i> ${link.label}
                </a>
            `).join('') : '';

            return `
                <div class="pub-card" data-category="${pub.category}">
                    <div class="pub-meta">
                        <span class="pub-year">${pub.year}</span>
                        <span class="badge ${pub.badgeClass}">${pub.badgeText}</span>
                    </div>
                    <h3 class="pub-title">${pub.title}</h3>
                    <p class="pub-desc">${pub.desc}</p>
                    <div class="pub-links">
                        ${linksHtml}
                    </div>
                </div>
            `;
        }).join('');
    }

    // 6. Penapis Kategori Penerbitan
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            const pubCards = document.querySelectorAll('.pub-card');

            pubCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 7. Render Garis Masa Kerjaya (Professional Journey)
    const timelineContainer = document.getElementById('timelineContainer');
    if (timelineContainer && timeline) {
        timelineContainer.innerHTML = timeline.map(item => `
            <div class="timeline-item">
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <h3>${item.title}</h3>
                    <div class="timeline-institution">${item.institution}</div>
                    <p>${item.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // 8. Render Engagement & Knowledge Sharing
    const engagementContainer = document.getElementById('engagementContainer');
    if (engagementContainer && engagement) {
        engagementContainer.innerHTML = engagement.map(item => `
            <div class="engagement-card">
                <div class="engagement-type"><i class="fa-solid ${item.icon}"></i> ${item.type}</div>
                <h3>${item.title}</h3>
                <div class="engagement-meta">${item.desc}</div>
            </div>
        `).join('');
    }

    // 9. Render Kemahiran Penyelidikan (Skills)
    const skillsContainer = document.getElementById('skillsContainer');
    if (skillsContainer && skills) {
        skillsContainer.innerHTML = skills.map(skill => `
            <div class="skill-pill">
                <i class="fa-solid fa-check"></i> ${skill}
            </div>
        `).join('');
    }

    // 10. Render Pautan Hubungi (Contact Section)
    const contactLinksContainer = document.getElementById('contactLinksContainer');
    if (contactLinksContainer && contacts) {
        contactLinksContainer.innerHTML = `
            ${contacts.linkedin ? `<a href="${contacts.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-btn"><i class="fa-brands fa-linkedin"></i> LinkedIn Profile</a>` : ''}
            ${contacts.github ? `<a href="${contacts.github}" target="_blank" rel="noopener noreferrer" class="contact-btn"><i class="fa-brands fa-github"></i> GitHub Profile</a>` : ''}
            ${contacts.googleScholar ? `<a href="${contacts.googleScholar}" target="_blank" rel="noopener noreferrer" class="contact-btn"><i class="fa-solid fa-graduation-cap"></i> Google Scholar</a>` : ''}
            ${contacts.email ? `<a href="mailto:${contacts.email}" class="contact-btn"><i class="fa-solid fa-envelope"></i> Email Researcher</a>` : ''}
            <a href="${profile?.cvUrl || 'assets/documents/cv.pdf'}" target="_blank" class="contact-btn"><i class="fa-solid fa-file-arrow-down"></i> Download Full CV</a>
        `;
    }

    // 11. Navigasi Mobil (Mobile Menu Toggle)
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Tutup Menu Mobil Selepas Pautan Ditekan
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks) navLinks.classList.remove('active');
            if (mobileToggle) {
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // 12. Kesan Scroll Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});