/**
 * =====================================================================
 * PORTFOLIO PENYELIDIK - KAWASAN KEMAS KINI DATA
 * Sunting objek ini untuk mengemas kini sebarang maklumat laman web anda!
 * =====================================================================
 */
const SITE_CONFIG = {
    // KEMAS KINI PROFIL DI SINI
    profile: {
        fullName: "Hidayaneu Farchatunnisa",
        brandShort: "Hidayaneu F.",
        tagline: "Academic & Policy Research",
        headline: "Researcher in Islamic Social Finance, Zakat Governance, and Poverty Alleviation",
        institution: "Badan Amil Zakat Nasional (BAZNAS), Indonesia",
        institutionIcon: "fa-building-columns",
        
        // Gantikan fail assets/images/profile.jpg untuk kemas kini foto profil
        photoUrl: "assets/images/profile.jpg", 
        
        // Gantikan fail assets/documents/cv.pdf untuk kemas kini fail CV
        cvUrl: "assets/documents/cv.pdf",
        
        // Ringkasan biodata di bahagian Hero
        heroBio: "Hidayaneu Farchatunnisa is a researcher at Badan Amil Zakat Nasional (BAZNAS), Indonesia, focusing on evidence-based research, measurement frameworks, and policy development in Islamic social finance and social welfare.",
        
        // Perenggan biografi profesional
        aboutBio: [
            "Hidayaneu Farchatunnisa is a researcher at Badan Amil Zakat Nasional (BAZNAS), Indonesia, contributing to research and policy development in Islamic social finance and zakat management.",
            "Since joining BAZNAS in 2018, she has been involved in research initiatives related to zakat governance, institutional performance measurement, poverty assessment, and social impact evaluation.",
            "Her research focuses on developing evidence-based frameworks that strengthen zakat management and support sustainable social development."
        ],

        researchPhilosophy: "My research focuses on transforming Islamic social finance into an evidence-based instrument for social development through measurement, governance, and impact evaluation."
    },

    // KEMAS KINI MAKLUMAT HUBUNGI DI SINI
    contacts: {
        email: "hidayaneu.farchatunnisa@baznas.go.id",
        linkedin: "https://linkedin.com/in/", // [Tambah pautan LinkedIn]
        github: "https://github.com/hidayaneuf", // [Tambah pautan GitHub]
        googleScholar: "https://scholar.google.com/" // [Tambah pautan Google Scholar]
    },

    researchAreas: [
        {
            title: "Islamic Social Finance",
            icon: "fa-coins",
            desc: "Zakat, waqf, Islamic philanthropy, and the broader social finance ecosystem for sustainable development."
        },
        {
            title: "Zakat Governance",
            icon: "fa-scale-balanced",
            desc: "Institutional performance, transparency, accountability, regulatory compliance, and governance frameworks."
        },
        {
            title: "Poverty & Welfare Measurement",
            icon: "fa-chart-line",
            desc: "Poverty indicators, Had Kifayah (basic needs threshold) framework, and beneficiary needs assessment."
        },
        {
            title: "Social Impact Evaluation",
            icon: "fa-bullseye",
            desc: "Evaluating zakat distribution programs, empirical impact assessment, and contribution toward social welfare goals."
        }
    ],

    // TAMBAH PROJEK PENYELIDIKAN BAHARU DI SINI
    projects: [
        {
            title: "National Zakat Index (IZN)",
            year: "2018 - Present",
            badge: "National Index",
            category: "Zakat Governance",
            desc: "A standard national framework to measure the performance, impact, and institutional development of zakat management across provinces in Indonesia.",
            detailsUrl: "#" // [Tambah pautan butiran projek]
        },
        {
            title: "Zakat & Poverty Alleviation Measurement",
            year: "2020 - 2023",
            badge: "Measurement Framework",
            category: "Poverty & Impact",
            desc: "Empirical frameworks assessing the direct impact of zakat distribution programs in moving mustahik households above poverty thresholds.",
            detailsUrl: "#" // [Tambah pautan butiran projek]
        },
        {
            title: "Had Kifayah Framework",
            year: "2021 - 2024",
            badge: "Standard Setting",
            category: "Welfare Metrics",
            desc: "Formulation and updates of the basic adequacy standard (Had Kifayah) for calculating household eligibility for Islamic social assistance.",
            detailsUrl: "#" // [Tambah pautan butiran projek]
        },
        {
            title: "Zakat Transparency Index",
            year: "2022",
            badge: "Governance Tool",
            category: "Governance",
            desc: "An evaluation model designed to measure financial reporting standards, public disclosure, and governance compliance in zakat institutions.",
            detailsUrl: "#" // [Tambah pautan butiran projek]
        },
        {
            title: "Zakatomics Research Framework",
            year: "2023",
            badge: "Analytical Model",
            category: "Macroeconomics",
            desc: "An integrative research model analyzing the macroeconomic contribution of zakat within national income and fiscal policies.",
            detailsUrl: "#" // [Tambah pautan butiran projek]
        },
        {
            title: "Urban Poverty Study",
            year: "2023 - 2024",
            badge: "Empirical Study",
            category: "Urban Welfare",
            desc: "In-depth field assessment analyzing urban poverty dynamics and targeted zakat interventions in major metropolitan areas in Indonesia.",
            detailsUrl: "#" // [Tambah pautan butiran projek]
        }
    ],

    // TAMBAH PENERBITAN BAHARU DI SINI
    // Kategori: 'journal', 'report', 'policy', 'book'
    publications: [
        {
            title: "Measuring the Governance Index of Zakat Institutions: An Empirical Study in Indonesia",
            year: "2023",
            category: "journal",
            badgeText: "Journal Article",
            badgeClass: "badge-primary",
            desc: "This study develops a multi-dimensional measurement framework to evaluate accountability and governance practices in Islamic social finance organizations.",
            links: [
                { label: "DOI Link", url: "#", icon: "fa-link" }, // [Tambah pautan DOI]
                { label: "Download PDF", url: "assets/documents/governance-index.pdf", icon: "fa-file-pdf" },
                { label: "Google Scholar", url: "#", icon: "fa-graduation-cap" } // [Tambah pautan Scholar]
            ]
        },
        {
            title: "Indeks Zakat Nasional (IZN) Annual Measurement Report",
            year: "2023",
            category: "report",
            badgeText: "Research Report",
            badgeClass: "badge-gold",
            desc: "Comprehensive national measurement report analyzing the institutional, macroeconomic, and microeconomic impact of zakat across 34 provinces.",
            links: [
                { label: "BAZNAS Official Report", url: "#", icon: "fa-globe" }, // [Tambah pautan Laporan]
                { label: "PDF Download", url: "assets/documents/izn-2023.pdf", icon: "fa-file-pdf" }
            ]
        },
        {
            title: "Had Kifayah Estimation: Policy Guidelines for Beneficiary Standardisation",
            year: "2022",
            category: "policy",
            badgeText: "Policy Paper",
            badgeClass: "badge-primary",
            desc: "Technical policy brief formulating regional adjustments for basic living requirement calculations in zakat distribution programs.",
            links: [
                { label: "Policy Brief PDF", url: "assets/documents/had-kifayah-2022.pdf", icon: "fa-file-pdf" },
                { label: "Institutional Library", url: "#", icon: "fa-building-columns" }
            ]
        },
        {
            title: "Framework and Management of Islamic Social Finance in Indonesia",
            year: "2021",
            category: "book",
            badgeText: "Book / Monograph",
            badgeClass: "badge-gold",
            desc: "Co-authored reference book addressing structural governance models, legal foundations, and socio-economic measurements of Islamic philanthropy.",
            links: [
                { label: "Publisher Catalogue", url: "#", icon: "fa-book" } // [Tambah pautan Buku]
            ]
        }
    ],

    timeline: [
        {
            date: "2018 - Present",
            title: "Researcher",
            institution: "Badan Amil Zakat Nasional (BAZNAS), Indonesia",
            desc: "Lead research initiatives focusing on national zakat indexing, institutional governance models, poverty thresholds, and socio-economic evaluation."
        },
        {
            date: "2022 - 2024",
            title: "Master of Sharia Economics",
            institution: "Universitas Islam Negeri (UIN) Syarif Hidayatullah Jakarta",
            desc: "Specialized research in Islamic social finance instruments, economic policy, and quantitative governance frameworks."
        },
        {
            date: "2013 - 2017",
            title: "Bachelor of Sharia Economics",
            institution: "IPB University (Institut Pertanian Bogor)",
            desc: "Foundational studies in applied economics, development policies, and quantitative evaluation methods."
        }
    ],

    engagement: [
        {
            type: "Conference Speaker",
            icon: "fa-comments",
            title: "International Islamic Social Finance Forum",
            desc: "Disseminating findings on Had Kifayah and poverty reduction frameworks."
        },
        {
            type: "Training & Workshop",
            icon: "fa-chalkboard-user",
            title: "Zakat Index Measurement Training",
            desc: "Conducting capacity building for provincial BAZNAS researchers and analysts."
        },
        {
            type: "Research Dissemination",
            icon: "fa-users-rectangle",
            title: "National Policy Roundtable",
            desc: "Presenting policy papers to government bodies and social development agencies."
        }
    ],

    skills: [
        "Research Methodology",
        "Policy Analysis",
        "Islamic Social Finance",
        "Zakat Management",
        "Social Impact Evaluation",
        "Program Evaluation",
        "Academic Writing",
        "Data Analysis"
    ]
};