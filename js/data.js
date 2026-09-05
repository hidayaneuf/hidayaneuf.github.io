/**
 * =====================================================================
 * PORTFOLIO PENYELIDIK - KAWASAN KEMAS KINI DATA (BILINGUAL)
 * Sunting objek ini untuk mengemas kini sebarang maklumat laman web anda!
 * =====================================================================
 */
const SITE_CONFIG = {
    // KEMAS KINI STRUKTUR BILINGUAL UI & SECTION LABELS
    ui: {
        metaDescription: {
            en: "Academic & Policy Researcher Portfolio - Hidayaneu Farchatunnisa - Researcher in Islamic Social Finance, Zakat Governance, and Poverty Alleviation at BAZNAS Indonesia.",
            id: "Portofolio Peneliti Akademik & Kebijakan - Hidayaneu Farchatunnisa - Peneliti Islamic Social Finance, Tata Kelola Zakat, dan Pengentasan Kemiskinan di BAZNAS Indonesia."
        },
        nav: {
            about: { en: "About", id: "Tentang" },
            areas: { en: "Research Areas", id: "Bidang Riset" },
            projects: { en: "Projects", id: "Proyek" },
            publications: { en: "Publications", id: "Publikasi" },
            journey: { en: "Journey", id: "Jejak Karir" },
            engagement: { en: "Engagement", id: "Keterlibatan" },
            contact: { en: "Contact", id: "Kontak" }
        },
        hero: {
            viewResearch: { en: "View Research", id: "Lihat Riset" },
            downloadCv: { en: "Download CV", id: "Unduh CV" },
            fallbackTitle: { en: "BAZNAS Researcher", id: "Peneliti BAZNAS" }
        },
        about: {
            title: { en: "Professional Biography", id: "Biografi Profesional" },
            subtitle: { 
                en: "Bridging academic measurement frameworks and socio-economic welfare policies.", 
                id: "Menjembatani kerangka pengukuran akademik dan kebijakan kesejahteraan sosio-ekonomi." 
            },
            philosophyTitle: { en: "Research Philosophy", id: "Falsafah Riset" }
        },
        areas: {
            title: { en: "Research Areas", id: "Bidang Riset Utama" },
            subtitle: { 
                en: "Core domains of study focusing on institutional governance, poverty metrics, and welfare outcome evaluation.", 
                id: "Domain studi utama yang berfokus pada tata kelola institusi, metrik kemiskinan, dan evaluasi dampak kesejahteraan." 
            }
        },
        projects: {
            title: { en: "Featured Research Projects", id: "Proyek Riset Unggulan" },
            subtitle: { 
                en: "Key policy-oriented research initiatives, indices, and analytical frameworks.", 
                id: "Inisiatif riset berorientasi kebijakan, indeks nasional, dan kerangka analitis utama." 
            },
            detailsBtn: { en: "Details", id: "Detail" }
        },
        publications: {
            title: { en: "Publications & Policy Papers", id: "Publikasi & Kertas Kebijakan" },
            subtitle: { 
                en: "Academic papers, policy monographs, research reports, and institutional books.", 
                id: "Jurnal akademik, monograf kebijakan, laporan riset, dan buku institusional." 
            },
            filters: {
                all: { en: "All", id: "Semua" },
                journal: { en: "Journal Articles", id: "Artikel Jurnal" },
                book: { en: "Books", id: "Buku" },
                report: { en: "Research Reports", id: "Laporan Riset" },
                policy: { en: "Policy Papers", id: "Kertas Kebijakan" }
            }
        },
        journey: {
            title: { en: "Professional Journey", id: "Jejak Profesional" },
            subtitle: { 
                en: "Academic background and research career progression.", 
                id: "Latar belakang akademik dan rekam jejak karir penelitian." 
            }
        },
        engagement: {
            title: { en: "Knowledge Sharing & Engagement", id: "Berbagi Pengetahuan & Keterlibatan" },
            subtitle: { 
                en: "Conferences, capacity building workshops, and academic dissemination.", 
                id: "Konferensi, lokakarya peningkatan kapasitas, dan diseminasi akademik." 
            }
        },
        skills: {
            title: { en: "Research Expertise", id: "Keahlian Riset" },
            subtitle: { 
                en: "Methodological tools and thematic competencies.", 
                id: "Alat metodologis dan kompetensi tematik." 
            }
        },
        contact: {
            title: { en: "Get in Touch", id: "Hubungi Saya" },
            subtitle: { 
                en: "Interested in research collaboration, policy discussions, or academic inquiries?", 
                id: "Tertarik pada kolaborasi riset, diskusi kebijakan, atau pertanyaan akademik?" 
            },
            emailBtn: { en: "Email Researcher", id: "Kirim Email" },
            cvBtn: { en: "Download Full CV", id: "Unduh CV Lengkap" }
        },
        footer: {
            rights: { en: "All rights reserved.", id: "Hak cipta dilindungi undang-undang." }
        }
    },

    // KEMAS KINI PROFIL DI SINI
    profile: {
        fullName: "Hidayaneu Farchatunnisa",
        brandShort: "Hidayaneu F.",
        tagline: {
            en: "Academic & Policy Research",
            id: "Riset Akademik & Kebijakan"
        },
        headline: {
            en: "Researcher in Islamic Social Finance, Zakat Governance, and Poverty Alleviation",
            id: "Peneliti Islamic Social Finance, Tata Kelola Zakat, dan Pengentasan Kemiskinan"
        },
        institution: {
            en: "Badan Amil Zakat Nasional (BAZNAS), Indonesia",
            id: "Badan Amil Zakat Nasional (BAZNAS), Indonesia"
        },
        institutionIcon: "fa-building-columns",
        
        photoUrl: "assets/images/1713933742117.jpeg", 
        cvUrl: "assets/documents/CV HIDAYANEU FARCHATUNNISA.docx.pdf",
        
        heroBio: {
            en: "Hidayaneu Farchatunnisa is a researcher at Badan Amil Zakat Nasional (BAZNAS), Indonesia, focusing on evidence-based research, measurement frameworks, and policy development in Islamic social finance and social welfare.",
            id: "Hidayaneu Farchatunnisa adalah seorang peneliti di Badan Amil Zakat Nasional (BAZNAS), Indonesia, yang berfokus pada riset berbasis bukti, kerangka pengukuran, dan pengembangan kebijakan dalam keuangan sosial Islam serta kesejahteraan masyarakat."
        },
        
        aboutBio: {
            en: [
                "Hidayaneu Farchatunnisa is a researcher at Badan Amil Zakat Nasional (BAZNAS), Indonesia, contributing to research and policy development in Islamic social finance and zakat management.",
                "Since joining BAZNAS in 2018, she has been involved in research initiatives related to zakat governance, institutional performance measurement, poverty assessment, and social impact evaluation.",
                "Her research focuses on developing evidence-based frameworks that strengthen zakat management and support sustainable social development."
            ],
            id: [
                "Hidayaneu Farchatunnisa adalah peneliti di Badan Amil Zakat Nasional (BAZNAS), Indonesia, yang berkontribusi dalam riset dan pengembangan kebijakan keuangan sosial Islam serta tata kelola zakat.",
                "Sejak bergabung dengan BAZNAS pada tahun 2018, beliau terlibat dalam berbagai inisiatif riset terkait tata kelola zakat, pengukuran kinerja institusi, asesmen kemiskinan, dan evaluasi dampak sosial.",
                "Fokus penelitiannya berpusat pada penyusunan kerangka kerja berbasis bukti untuk memperkuat pengelolaan zakat serta mendukung pembangunan sosial yang berkelanjutan."
            ]
        },

        researchPhilosophy: {
            en: "My research focuses on transforming Islamic social finance into an evidence-based instrument for social development through measurement, governance, and impact evaluation.",
            id: "Riset saya berfokus pada transformasi keuangan sosial Islam menjadi instrumen pembangunan sosial berbasis bukti melalui pengukuran, tata kelola, dan evaluasi dampak."
        }
    },

    // MAKLUMAT HUBUNGI
    contacts: {
        email: "hidayaneu.farchatunnisa@baznas.go.id",
        linkedin: "https://linkedin.com/in/",
        github: "https://github.com/hidayaneuf",
        googleScholar: "https://scholar.google.com/"
    },

    researchAreas: [
        {
            title: { en: "Islamic Social Finance", id: "Keuangan Sosial Islam" },
            icon: "fa-coins",
            desc: {
                en: "Zakat, waqf, Islamic philanthropy, and the broader social finance ecosystem for sustainable development.",
                id: "Zakat, wakaf, filantropi Islam, dan ekosistem keuangan sosial yang lebih luas untuk pembangunan berkelanjutan."
            }
        },
        {
            title: { en: "Zakat Governance", id: "Tata Kelola Zakat" },
            icon: "fa-scale-balanced",
            desc: {
                en: "Institutional performance, transparency, accountability, regulatory compliance, and governance frameworks.",
                id: "Kinerja institusional, transparansi, akuntabilitas, kepatuhan regulasi, dan kerangka tata kelola."
            }
        },
        {
            title: { en: "Poverty & Welfare Measurement", id: "Pengukuran Kemiskinan & Kesejahteraan" },
            icon: "fa-chart-line",
            desc: {
                en: "Poverty indicators, Had Kifayah (basic needs threshold) framework, and beneficiary needs assessment.",
                id: "Indikator kemiskinan, kerangka Had Kifayah (ambang batas kebutuhan pokok), dan asesmen kebutuhan mustahik."
            }
        },
        {
            title: { en: "Social Impact Evaluation", id: "Evaluasi Dampak Sosial" },
            icon: "fa-bullseye",
            desc: {
                en: "Evaluating zakat distribution programs, empirical impact assessment, and contribution toward social welfare goals.",
                id: "Evaluasi program pendistribusian zakat, penilaian dampak empiris, dan kontribusi terhadap tujuan kesejahteraan sosial."
            }
        }
    ],

    // PROJEK PENYELIDIKAN
    projects: [
        {
            title: { en: "National Zakat Index (IZN)", id: "Indeks Zakat Nasional (IZN)" },
            year: "2018 - Present",
            badge: { en: "National Index", id: "Indeks Nasional" },
            category: { en: "Zakat Governance", id: "Tata Kelola Zakat" },
            desc: {
                en: "A standard national framework to measure the performance, impact, and institutional development of zakat management across provinces in Indonesia.",
                id: "Kerangka kerja standar nasional untuk mengukur kinerja, dampak, dan perkembangan institusional pengelolaan zakat di seluruh provinsi Indonesia."
            },
            detailsUrl: "#"
        },
        {
            title: { en: "Zakat & Poverty Alleviation Measurement", id: "Pengukuran Zakat & Pengentasan Kemiskinan" },
            year: "2020 - 2023",
            badge: { en: "Measurement Framework", id: "Kerangka Pengukuran" },
            category: { en: "Poverty & Impact", id: "Kemiskinan & Dampak" },
            desc: {
                en: "Empirical frameworks assessing the direct impact of zakat distribution programs in moving mustahik households above poverty thresholds.",
                id: "Kerangka empiris yang menilai dampak langsung program pendistribusian zakat dalam mengentaskan rumah tangga mustahik dari garis kemiskinan."
            },
            detailsUrl: "#"
        },
        {
            title: { en: "Had Kifayah Framework", id: "Kerangka Kerja Had Kifayah" },
            year: "2021 - 2024",
            badge: { en: "Standard Setting", id: "Penetapan Standar" },
            category: { en: "Welfare Metrics", id: "Metrik Kesejahteraan" },
            desc: {
                en: "Formulation and updates of the basic adequacy standard (Had Kifayah) for calculating household eligibility for Islamic social assistance.",
                id: "Formulasi dan pembaruan standar kecukupan kelayakan hidup (Had Kifayah) untuk menghitung kelayakan bantuan sosial Islam bagi rumah tangga."
            },
            detailsUrl: "#"
        },
        {
            title: { en: "Zakat Transparency Index", id: "Indeks Transparansi Zakat" },
            year: "2022",
            badge: { en: "Governance Tool", id: "Instrumen Tata Kelola" },
            category: { en: "Governance", id: "Tata Kelola" },
            desc: {
                en: "An evaluation model designed to measure financial reporting standards, public disclosure, and governance compliance in zakat institutions.",
                id: "Model evaluasi yang dirancang untuk mengukur standar pelaporan keuangan, keterbukaan publik, dan kepatuhan tata kelola di lembaga zakat."
            },
            detailsUrl: "#"
        },
        {
            title: { en: "Zakatomics Research Framework", id: "Kerangka Riset Zakatomics" },
            year: "2023",
            badge: { en: "Analytical Model", id: "Model Analitis" },
            category: { en: "Macroeconomics", id: "Makroekonomi" },
            desc: {
                en: "An integrative research model analyzing the macroeconomic contribution of zakat within national income and fiscal policies.",
                id: "Model penelitian integratif yang menganalisis kontribusi makroekonomi zakat dalam pendapatan nasional dan kebijakan fiskal."
            },
            detailsUrl: "#"
        },
        {
            title: { en: "Urban Poverty Study", id: "Studi Kemiskinan Perkotaan" },
            year: "2023 - 2024",
            badge: { en: "Empirical Study", id: "Studi Empiris" },
            category: { en: "Urban Welfare", id: "Kesejahteraan Perkotaan" },
            desc: {
                en: "In-depth field assessment analyzing urban poverty dynamics and targeted zakat interventions in major metropolitan areas in Indonesia.",
                id: "Asesmen lapangan mendalam yang menganalisis dinamika kemiskinan perkotaan dan intervensi zakat terfokus di wilayah metropolitan Indonesia."
            },
            detailsUrl: "#"
        }
    ],

    // PENERBITAN / PUBLICATIONS
    publications: [
        {
            title: {
                en: "Measuring the Governance Index of Zakat Institutions: An Empirical Study in Indonesia",
                id: "Mengukur Indeks Tata Kelola Lembaga Zakat: Studi Empiris di Indonesia"
            },
            year: "2023",
            category: "journal",
            badgeText: { en: "Journal Article", id: "Artikel Jurnal" },
            badgeClass: "badge-primary",
            desc: {
                en: "This study develops a multi-dimensional measurement framework to evaluate accountability and governance practices in Islamic social finance organizations.",
                id: "Studi ini menyusun kerangka pengukuran multidimensi untuk mengevaluasi akuntabilitas dan praktik tata kelola pada organisasi keuangan sosial Islam."
            },
            links: [
                { label: "DOI Link", url: "#", icon: "fa-link" },
                { label: "Download PDF", url: "assets/documents/governance-index.pdf", icon: "fa-file-pdf" },
                { label: "Google Scholar", url: "#", icon: "fa-graduation-cap" }
            ]
        },
        {
            title: {
                en: "Indeks Zakat Nasional (IZN) Annual Measurement Report",
                id: "Laporan Pengukuran Tahunan Indeks Zakat Nasional (IZN)"
            },
            year: "2023",
            category: "report",
            badgeText: { en: "Research Report", id: "Laporan Riset" },
            badgeClass: "badge-gold",
            desc: {
                en: "Comprehensive national measurement report analyzing the institutional, macroeconomic, and microeconomic impact of zakat across 34 provinces.",
                id: "Laporan pengukuran nasional komprehensif yang menganalisis dampak kelembagaan, makroekonomi, dan mikroekonomi zakat di 34 provinsi."
            },
            links: [
                { label: "BAZNAS Official Report", url: "#", icon: "fa-globe" },
                { label: "PDF Download", url: "assets/documents/izn-2023.pdf", icon: "fa-file-pdf" }
            ]
        },
        {
            title: {
                en: "Had Kifayah Estimation: Policy Guidelines for Beneficiary Standardisation",
                id: "Estimasi Had Kifayah: Panduan Kebijakan Standarisasi Mustahik"
            },
            year: "2022",
            category: "policy",
            badgeText: { en: "Policy Paper", id: "Kertas Kebijakan" },
            badgeClass: "badge-primary",
            desc: {
                en: "Technical policy brief formulating regional adjustments for basic living requirement calculations in zakat distribution programs.",
                id: "Ringkasan kebijakan teknis yang memformulasikan penyesuaian regional untuk perhitungan kebutuhan hidup minimum pada program penyaluran zakat."
            },
            links: [
                { label: "Policy Brief PDF", url: "assets/documents/had-kifayah-2022.pdf", icon: "fa-file-pdf" },
                { label: "Institutional Library", url: "#", icon: "fa-building-columns" }
            ]
        },
        {
            title: {
                en: "Framework and Management of Islamic Social Finance in Indonesia",
                id: "Kerangka Kerja dan Pengelolaan Keuangan Sosial Islam di Indonesia"
            },
            year: "2021",
            category: "book",
            badgeText: { en: "Book / Monograph", id: "Buku / Monograf" },
            badgeClass: "badge-gold",
            desc: {
                en: "Co-authored reference book addressing structural governance models, legal foundations, and socio-economic measurements of Islamic philanthropy.",
                id: "Buku referensi kolaboratif yang membahas model tata kelola struktural, landasan hukum, dan pengukuran sosio-ekonomi filantropi Islam."
            },
            links: [
                { label: "Publisher Catalogue", url: "#", icon: "fa-book" }
            ]
        }
    ],

    // TIMELINE / JOURNEY
    timeline: [
        {
            date: "2018 - Present",
            title: { en: "Researcher", id: "Peneliti" },
            institution: {
                en: "Badan Amil Zakat Nasional (BAZNAS), Indonesia",
                id: "Badan Amil Zakat Nasional (BAZNAS), Indonesia"
            },
            desc: {
                en: "Lead research initiatives focusing on national zakat indexing, institutional governance models, poverty thresholds, and socio-economic evaluation.",
                id: "Memimpin inisiatif riset berfokus pada pengindeksan zakat nasional, model tata kelola institusional, ambang batas kemiskinan, dan evaluasi sosio-ekonomi."
            }
        },
        {
            date: "2022 - 2024",
            title: { en: "Master of Sharia Economics", id: "Magister Ekonomi Syariah" },
            institution: {
                en: "Universitas Islam Negeri (UIN) Syarif Hidayatullah Jakarta",
                id: "Universitas Islam Negeri (UIN) Syarif Hidayatullah Jakarta"
            },
            desc: {
                en: "Specialized research in Islamic social finance instruments, economic policy, and quantitative governance frameworks.",
                id: "Riset terdistingsi dalam instrumen keuangan sosial Islam, kebijakan ekonomi, dan kerangka kerja tata kelola kuantitatif."
            }
        },
        {
            date: "2013 - 2017",
            title: { en: "Bachelor of Sharia Economics", id: "Sarjana Ekonomi Syariah" },
            institution: {
                en: "IPB University (Institut Pertanian Bogor)",
                id: "IPB University (Institut Pertanian Bogor)"
            },
            desc: {
                en: "Foundational studies in applied economics, development policies, and quantitative evaluation methods.",
                id: "Studi dasar dalam ekonomi terapan, kebijakan pembangunan, dan metode evaluasi kuantitatif."
            }
        }
    ],

    // ENGAGEMENT
    engagement: [
        {
            type: { en: "Conference Speaker", id: "Pembicara Konferensi" },
            icon: "fa-comments",
            title: {
                en: "International Islamic Social Finance Forum",
                id: "Forum Keuangan Sosial Islam Internasional"
            },
            desc: {
                en: "Disseminating findings on Had Kifayah and poverty reduction frameworks.",
                id: "Mendiseminasikan temuan tentang Had Kifayah dan kerangka pengentasan kemiskinan."
            }
        },
        {
            type: { en: "Training & Workshop", id: "Pelatihan & Lokakarya" },
            icon: "fa-chalkboard-user",
            title: {
                en: "Zakat Index Measurement Training",
                id: "Pelatihan Pengukuran Indeks Zakat"
            },
            desc: {
                en: "Conducting capacity building for provincial BAZNAS researchers and analysts.",
                id: "Menyelenggarakan peningkatan kapasitas bagi peneliti dan analis BAZNAS provinsi."
            }
        },
        {
            type: { en: "Research Dissemination", id: "Diseminasi Riset" },
            icon: "fa-users-rectangle",
            title: {
                en: "National Policy Roundtable",
                id: "Diskusi Meja Bundar Kebijakan Nasional"
            },
            desc: {
                en: "Presenting policy papers to government bodies and social development agencies.",
                id: "Mempresentasikan kertas kebijakan kepada lembaga pemerintah dan badan pembangunan sosial."
            }
        }
    ],

    // SKILLS
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