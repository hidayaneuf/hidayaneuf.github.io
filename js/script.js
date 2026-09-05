/**
 * =====================================================================
 * LOGIK DINAMIK LAMAN WEB (PROSES RENDERING DATA & LANGUAGE SWITCHER)
 * =====================================================================
 */

// State Global Laman Web
let currentLanguage = 'en';
let activePublicationFilter = 'all';

// Fungsi Pembantu Ambil Nilai Berdasarkan Bahasa
function getI18n(data) {
    if (!data) return '';
    if (typeof data === 'string') return data;
    return data[currentLanguage] || data['en'] || '';
}

// Set & Tukar Bahasa Laman Web
function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'id') return;
    currentLanguage = lang;

    // 1. Kemas kini atribut <html lang="...">
    document.documentElement.lang = currentLanguage;

    // 2. Kemas kini Meta Description
    const metaDesc = document.getElementById('metaDescription');
    if (metaDesc && SITE_CONFIG?.ui?.metaDescription) {
        metaDesc.setAttribute('content', getI18n(SITE_CONFIG.ui.metaDescription));
    }

    // 3. Kemas kini Butang Switcher Active State
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 4. Render Semula Seluruh Section
    renderAll();
}

// Fungsi Render Utama
function renderAll() {
    if (typeof SITE_CONFIG === 'undefined') {
        console.error('Pemberitahuan: SITE_CONFIG tidak ditemui dalam data.js');
        return;
    }

    const { ui, profile, contacts, researchAreas, projects, publications, timeline, engagement, skills } = SITE_CONFIG;

    // --- RENDER NAVBAR UI ---
    if (ui?.nav) {
        document.getElementById('navAbout').textContent = getI18n(ui.nav.about);
        document.getElementById('navAreas').textContent = getI18n(ui.nav.areas);
        document.getElementById('navProjects').textContent = getI18n(ui.nav.projects);
        document.getElementById('navPublications').textContent = getI18n(ui.nav.publications);
        document.getElementById('navJourney').textContent = getI18n(ui.nav.journey);
        document.getElementById('navEngagement').textContent = getI18n(ui.nav.engagement);
        document.getElementById('navContact').textContent = getI18n(ui.nav.contact);
    }

    // --- RENDER PROFIL (HERO & ABOUT) ---
    if (profile) {
        // Logo Brand Navigasi
        document.getElementById('navBrandLogo').innerHTML = `${profile.brandShort || 'Hidayaneu F.'} <span>.</span>`;
        
        // Tajuk & Info Hero
        document.getElementById('heroTag').innerHTML = `<i class="fa-solid fa-microscope"></i> ${getI18n(profile.tagline)}`;
        document.getElementById('heroTitle').textContent = profile.fullName;
        document.getElementById('heroHeadline').textContent = getI18n(profile.headline);
        document.getElementById('heroBio').textContent = getI18n(profile.heroBio);

        // Butang Hero CTA
        const heroCtaContainer = document.getElementById('heroCta');
        const viewResearchText = ui?.hero?.viewResearch ? getI18n(ui.hero.viewResearch) : 'View Research';
        const downloadCvText = ui?.hero?.downloadCv ? getI18n(ui.hero.downloadCv) : 'Download CV';

        heroCtaContainer.innerHTML = `
            <a href="#projects" class="btn btn-primary"><i class="fa-solid fa-book-open"></i> ${viewResearchText}</a>
            <a href="${profile.cvUrl || 'assets/documents/cv.pdf'}" target="_blank" class="btn btn-outline"><i class="fa-solid fa-file-pdf"></i> ${downloadCvText}</a>
            ${contacts?.linkedin ? `<a href="${contacts.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 0.75rem 1rem;"><i class="fa-brands fa-linkedin"></i></a>` : ''}
        `;

        // Institusi
        document.getElementById('heroInstitution').innerHTML = `
            <i class="fa-solid ${profile.institutionIcon || 'fa-building-columns'}" style="color: var(--accent);"></i>
            <span>${getI18n(profile.institution)}</span>
        `;

        // Gambar Profil & Fallback
        const heroImg = document.getElementById('heroImage');
        const heroFallback = document.getElementById('heroImageFallback');
        
        if (heroImg) {
            heroImg.src = profile.photoUrl || 'assets/images/profile.jpg';
            heroImg.onerror = function() {
                heroImg.style.display = 'none';
                if (heroFallback) {
                    heroFallback.style.display = 'flex';
                    document.getElementById('fallbackName').textContent = profile.fullName;
                    document.getElementById('fallbackTitle').textContent = ui?.hero?.fallbackTitle ? getI18n(ui.hero.fallbackTitle) : "Researcher";
                }
            };
        }

        // About Section Header
        if (ui?.about) {
            document.getElementById('aboutTitle').textContent = getI18n(ui.about.title);
            document.getElementById('aboutSubtitle').textContent = getI18n(ui.about.subtitle);
            document.getElementById('philosophyTitle').textContent = getI18n(ui.about.philosophyTitle);
        }

        // Biografi Profesional (About)
        const aboutContainer = document.getElementById('aboutBioContainer');
        const bioParagraphs = profile.aboutBio ? (profile.aboutBio[currentLanguage] || profile.aboutBio['en'] || []) : [];
        if (aboutContainer && Array.isArray(bioParagraphs)) {
            aboutContainer.innerHTML = bioParagraphs.map(paragraph => `<p>${paragraph}</p>`).join('');
        }

        // Falsafah Penyelidikan
        document.getElementById('researchPhilosophy').textContent = `"${getI18n(profile.researchPhilosophy)}"`;

        // Footer Text
        document.getElementById('footerName').textContent = profile.fullName;
        document.getElementById('footerInstitution').textContent = getI18n(profile.institution);
        if (ui?.footer?.rights) {
            document.getElementById('footerRights').textContent = getI18n(ui.footer.rights);
        }
    }

    // --- RENDER RESEARCH AREAS ---
    if (ui?.areas) {
        document.getElementById('areasTitle').textContent = getI18n(ui.areas.title);
        document.getElementById('areasSubtitle').textContent = getI18n(ui.areas.subtitle);
    }
    const areasContainer = document.getElementById('areasContainer');
    if (areasContainer && researchAreas) {
        areasContainer.innerHTML = researchAreas.map(area => `
            <div class="area-card">
                <div class="area-icon">
                    <i class="fa-solid ${area.icon}"></i>
                </div>
                <h3>${getI18n(area.title)}</h3>
                <p>${getI18n(area.desc)}</p>
            </div>
        `).join('');
    }

    // --- RENDER PROJECTS ---
    if (ui?.projects) {
        document.getElementById('projectsTitle').textContent = getI18n(ui.projects.title);
        document.getElementById('projectsSubtitle').textContent = getI18n(ui.projects.subtitle);
    }
    const projectsContainer = document.getElementById('projectsContainer');
    const detailsLabel = ui?.projects?.detailsBtn ? getI18n(ui.projects.detailsBtn) : 'Details';
    if (projectsContainer && projects) {
        projectsContainer.innerHTML = projects.map(project => `
            <div class="project-card">
                <div class="project-body">
                    <div class="project-header">
                        <span class="badge badge-primary">${getI18n(project.badge)}</span>
                        <span class="project-year">${project.year}</span>
                    </div>
                    <h3 class="project-title">${getI18n(project.title)}</h3>
                    <p class="project-desc">${getI18n(project.desc)}</p>
                    <div class="project-footer">
                        <span class="badge badge-gold">${getI18n(project.category)}</span>
                        <a href="${project.detailsUrl || '#'}" class="btn btn-outline btn-sm">${detailsLabel} <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // --- RENDER PUBLICATIONS & FILTERS ---
    if (ui?.publications) {
        document.getElementById('pubTitle').textContent = getI18n(ui.publications.title);
        document.getElementById('pubSubtitle').textContent = getI18n(ui.publications.subtitle);
    }
    
    // Render Butang Filter
    const filterContainer = document.getElementById('filterContainer');
    if (filterContainer && ui?.publications?.filters) {
        const filters = ui.publications.filters;
        const filterKeys = ['all', 'journal', 'book', 'report', 'policy'];
        filterContainer.innerHTML = filterKeys.map(key => `
            <button class="filter-btn ${activePublicationFilter === key ? 'active' : ''}" data-filter="${key}">${getI18n(filters[key])}</button>
        `).join('');

        // Semula Attach Event Listener Butang Filter
        const filterBtns = filterContainer.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                activePublicationFilter = this.getAttribute('data-filter');
                applyPublicationFilter();
            });
        });
    }

    // Render Senarai Publikasi
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
                        <span class="badge ${pub.badgeClass}">${getI18n(pub.badgeText)}</span>
                    </div>
                    <h3 class="pub-title">${getI18n(pub.title)}</h3>
                    <p class="pub-desc">${getI18n(pub.desc)}</p>
                    <div class="pub-links">
                        ${linksHtml}
                    </div>
                </div>
            `;
        }).join('');
        
        // Terapkan penapis yang sedang aktif
        applyPublicationFilter();
    }

    // --- RENDER TIMELINE / JOURNEY ---
    if (ui?.journey) {
        document.getElementById('journeyTitle').textContent = getI18n(ui.journey.title);
        document.getElementById('journeySubtitle').textContent = getI18n(ui.journey.subtitle);
    }
    const timelineContainer = document.getElementById('timelineContainer');
    if (timelineContainer && timeline) {
        timelineContainer.innerHTML = timeline.map(item => `
            <div class="timeline-item">
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <h3>${getI18n(item.title)}</h3>
                    <div class="timeline-institution">${getI18n(item.institution)}</div>
                    <p>${getI18n(item.desc)}</p>
                </div>
            </div>
        `).join('');
    }

    // --- RENDER ENGAGEMENT ---
    if (ui?.engagement) {
        document.getElementById('engagementTitle').textContent = getI18n(ui.engagement.title);
        document.getElementById('engagementSubtitle').textContent = getI18n(ui.engagement.subtitle);
    }
    const engagementContainer = document.getElementById('engagementContainer');
    if (engagementContainer && engagement) {
        engagementContainer.innerHTML = engagement.map(item => `
            <div class="engagement-card">
                <div class="engagement-type"><i class="fa-solid ${item.icon}"></i> ${getI18n(item.type)}</div>
                <h3>${getI18n(item.title)}</h3>
                <div class="engagement-meta">${getI18n(item.desc)}</div>
            </div>
        `).join('');
    }

    // --- RENDER SKILLS ---
    if (ui?.skills) {
        document.getElementById('skillsTitle').textContent = getI18n(ui.skills.title);
        document.getElementById('skillsSubtitle').textContent = getI18n(ui.skills.subtitle);
    }
    const skillsContainer = document.getElementById('skillsContainer');
    if (skillsContainer && skills) {
        skillsContainer.innerHTML = skills.map(skill => `
            <div class="skill-pill">
                <i class="fa-solid fa-check"></i> ${getI18n(skill)}
            </div>
        `).join('');
    }

    // --- RENDER CONTACT SECTION ---
    if (ui?.contact) {
        document.getElementById('contactTitle').textContent = getI18n(ui.contact.title);
        document.getElementById('contactSubtitle').textContent = getI18n(ui.contact.subtitle);
    }
    const contactLinksContainer = document.getElementById('contactLinksContainer');
    if (contactLinksContainer && contacts) {
        const emailText = ui?.contact?.emailBtn ? getI18n(ui.contact.emailBtn) : 'Email Researcher';
        const cvText = ui?.contact?.cvBtn ? getI18n(ui.contact.cvBtn) : 'Download Full CV';

        contactLinksContainer.innerHTML = `
            ${contacts.linkedin ? `<a href="${contacts.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-btn"><i class="fa-brands fa-linkedin"></i> LinkedIn Profile</a>` : ''}
            ${contacts.github ? `<a href="${contacts.github}" target="_blank" rel="noopener noreferrer" class="contact-btn"><i class="fa-brands fa-github"></i> GitHub Profile</a>` : ''}
            ${contacts.googleScholar ? `<a href="${contacts.googleScholar}" target="_blank" rel="noopener noreferrer" class="contact-btn"><i class="fa-solid fa-graduation-cap"></i> Google Scholar</a>` : ''}
            ${contacts.email ? `<a href="mailto:${contacts.email}" class="contact-btn"><i class="fa-solid fa-envelope"></i> ${emailText}</a>` : ''}
            <a href="${profile?.cvUrl || 'assets/documents/cv.pdf'}" target="_blank" class="contact-btn"><i class="fa-solid fa-file-arrow-down"></i> ${cvText}</a>
        `;
    }
}

// Menapis Kad Publikasi Mengikut Filter Aktif
function applyPublicationFilter() {
    const pubCards = document.querySelectorAll('.pub-card');
    pubCards.forEach(card => {
        if (activePublicationFilter === 'all' || card.getAttribute('data-category') === activePublicationFilter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Inisialisasi Event Listener Utama
document.addEventListener('DOMContentLoaded', function () {
    // 1. Kemas kini Tahun di Footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // 2. Set Up Event Listener Language Switcher Buttons
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function(e) {
            const btn = e.target.closest('.lang-btn');
            if (btn) {
                const targetLang = btn.getAttribute('data-lang');
                if (targetLang && targetLang !== currentLanguage) {
                    setLanguage(targetLang);
                }
            }
        });
    }

    // 3. Render Laman Kali Pertama (Default: English)
    setLanguage('en');

    // 4. Navigasi Mobil (Mobile Menu Toggle)
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

    // 5. Kesan Scroll Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});