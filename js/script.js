// Language translations object
const translations = {
    en: {
        "name": "Xun Fu",
        "title": "Academic Profile",
        "menu.about": "About Me",
        "menu.publications": "Publications",
        "menu.education": "Education",
        "menu.research": "Research",
        "menu.skills": "Skills",
        "menu.experience": "Experience",
        "section.about": "About Me",
        "section.publications": "Publications",
        "publications.note": "Note: * indicates corresponding author",
        "section.education": "Education",
        "section.research": "Research",
        "section.skills": "Skills",
        "section.experience": "Experience",
        "about.intro": "I am Xun Fu, a researcher specializing in data mining and artificial intelligence. My work focuses on developing active learning and semi-supervised learning algorithms, as well as neural network applications, and my research results have been published in various international conferences and journals.",
        "about.research_goal": "",
        "contact.email": "Email:",
        "contact.phone": "Phone:",
        "photos.group": "Daily Life Photos",
        "publications.accepted": "Accepted",
        "publications.under_review": "Under Review",
        "education.master": "Master in Computer Science and Technology",
        "education.dissertation": "Thesis Title:",
        "education.advisors": "Advisors:",
        "education.professor": "Professor",
        "education.assistant_professor": "Associate Professor",
        "education.homepage": "Professor's Homepage",
        "education.bachelor": "Bachelor in Electrical and Computer Engineering",
        "education.honor1": "Honor:",
        "education.honor1_content": "Excellent graduates from Sichuan Province",
        "education.honor2": "Honor:",
        "education.honor2_content": "Postgraduate Recommendation",
        "education.master_honor1": "Honor:",
        "education.master_honor1_content": "Excellent Master's Thesis of Southwest Petroleum University",
        "education.master_honor2": "Honor:",
        "education.master_honor2_content": "Outstanding Graduate, Outstanding Postgraduate of Southwest Petroleum University",
        "education.master_honor3": "Honor:",
        "education.master_honor3_content": "National Scholarship for Postgraduates 2024",
        "education.location": "Study Location (Google Map)",
        "education.advisor1": "Xin Wang",
        "education.advisor2": "Wen-Bo Xie",
        "education.university": "Southwest Petroleum University",
        "research.demonstration": "Demonstration of Active Clustering Application (YouTube)",
        "research.timeline": "Timeline:",
        "research.advisors": "Advisors:",
        "research.advisor": "Advisor:",
        "research.focus": "Research Focus:",
        "research.details": "View Details",
        "research.abstract": "Abstract:",
        "research.result": "Results:",
        "research.hierarchical.title": "Hierarchical Clustering for Large-Scale Data",
        "research.dynamic.title": "Dynamic Constraint Selection for Active Clustering",
        "research.automation.title": "Automation of Constraint Annotation",
        "research.evaluation.title": "Evaluation of Pattern Interestingness",
        "research.scalability.title": "Scalability and Quality Optimization in Constrained Clustering",
        "skills.programming": "Programming Languages:",
        "skills.languages": "Languages: Chinese (Native), English (IELTS: 6.5)",
        "skills.sports": "Sports: Basketball, Table Tennis, Soccer, Swimming, Billiards",
        "experience.it_specialist": "Information Technology Specialist",
        "experience.it_specialist_intern": "Information Technology Specialist (Internship)",
        "experience.it_specialist_desc": "Managed data security and performance optimizations for the bank's large-scale data warehouse systems.",
        "experience.ta": "Teaching Assistant in Big Data Analysis",
        "experience.ta_intern": "Teaching Assistant in Big Data Analysis (Internship)",
        "experience.ta_desc": "Assisted in teaching and grading for undergraduate students in Big Data Analysis.",
        "experience.web_dev": "Web Developer",
        "experience.web_dev_intern": "Web Developer (Internship)",
        "experience.web_dev_desc": "Implemented visual designs into live environments, enhancing user interactions and functionality.",
        "experience.it_specialist_company": "Industrial and Commercial Bank of China (ICBC), Chengdu China",
        "experience.ta_company": "Southwest Petroleum University, Chengdu China",
        "experience.web_dev_company": "Sichuan Aoyi Media Advertising Co. Ltd., Chengdu China"
    },
    zh: {
        "name": "付勋",
        "title": "学术档案",
        "menu.about": "关于我",
        "menu.publications": "发表论文",
        "menu.education": "教育背景",
        "menu.research": "研究工作",
        "menu.skills": "专业技能",
        "menu.experience": "工作实习",
        "section.about": "关于我",
        "section.publications": "发表论文",
        "publications.note": "注：* 表示通讯作者",
        "section.education": "教育背景",
        "section.research": "研究工作",
        "section.skills": "专业技能",
        "section.experience": "工作实习",
        "about.intro": "我是付勋，专注于数据挖掘和人工智能领域的研究者。我的工作重点是开发主动学习和半监督学习算法，以及神经网络应用，我的研究成果已在多个国际会议和期刊上发表。",
        "about.research_goal": "",
        "contact.email": "邮箱:",
        "contact.phone": "电话:",
        "photos.group": "生活照片",
        "publications.accepted": "已接收",
        "publications.under_review": "审稿中",
        "education.master": "计算机科学与技术硕士",
        "education.dissertation": "论文题目:",
        "education.advisors": "导师:",
        "education.professor": "教授",
        "education.assistant_professor": "副教授",
        "education.homepage": "教授主页",
        "education.bachelor": "电气与计算机工程学士",
        "education.honor1": "荣誉:",
        "education.honor1_content": "四川省优秀毕业生",
        "education.honor2": "荣誉:",
        "education.honor2_content": "推免研究生",
        "education.master_honor1": "荣誉:",
        "education.master_honor1_content": "西南石油大学优秀硕士学位论文",
        "education.master_honor2": "荣誉:",
        "education.master_honor2_content": "西南石油大学优秀毕业生，优秀研究生",
        "education.master_honor3": "荣誉:",
        "education.master_honor3_content": "2024年研究生国家奖学金",
        "education.location": "学习地点 (谷歌地图)",
        "education.advisor1": "王欣",
        "education.advisor2": "谢文波",
        "education.university": "西南石油大学",
        "research.demonstration": "主动聚类应用演示 (YouTube)",
        "research.timeline": "时间线:",
        "research.advisors": "导师:",
        "research.advisor": "导师:",
        "research.focus": "研究重点:",
        "research.details": "查看详情",
        "research.abstract": "摘要:",
        "research.result": "成果:",
        "research.hierarchical.title": "大规模数据的层次聚类",
        "research.dynamic.title": "主动聚类的动态约束选择",
        "research.automation.title": "约束标注自动化",
        "research.evaluation.title": "模式趣味性评估",
        "research.scalability.title": "约束聚类中的可扩展性和质量优化",
        "skills.programming": "编程语言:",
        "skills.languages": "语言能力: 中文（母语），英文（雅思：6.5）",
        "skills.sports": "体育运动: 乒乓球，羽毛球，足球",
        "experience.it_specialist": "信息技术专员",
        "experience.it_specialist_intern": "信息技术专员(实习)",
        "experience.it_specialist_desc": "负责银行大规模数据仓库系统的数据安全和性能优化。",
        "experience.ta": "大数据分析助教",
        "experience.ta_intern": "大数据分析助教(实习)",
        "experience.ta_desc": "协助本科生大数据分析课程的教学和评分工作。",
        "experience.web_dev": "网页开发员",
        "experience.web_dev_intern": "网页开发员(实习)",
        "experience.web_dev_desc": "将视觉设计实现到实际环境中，增强用户交互和功能。",
        "experience.it_specialist_company": "中国工商银行，中国成都",
        "experience.ta_company": "西南石油大学，中国成都",
        "experience.web_dev_company": "四川奥艺传媒广告有限公司，中国成都"
    }
};

// Show section function with dynamic loading and smooth scroll
function showSection(sectionId) {
    console.log('Loading section:', sectionId);
    
    // Update menu buttons with animation first
    const buttons = document.querySelectorAll('.menu button');
    buttons.forEach(button => {
        button.classList.remove('active');
        button.style.transition = 'all 0.3s ease';
    });
    const activeButton = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    activeButton.classList.add('active');
    activeButton.style.transform = 'translateX(5px)';
    setTimeout(() => {
        activeButton.style.transform = 'translateX(0)';
    }, 300);
    
    // Debug section loading
    console.log('Loading section:', sectionId);
    // Ensure sectionId is lowercase (case-sensitive on some systems)
    const normalizedSectionId = sectionId.toLowerCase();
    const url = `sections/${normalizedSectionId}.html`;
    console.log('Fetch URL:', url);
    
    // Check network status
    if (!navigator.onLine) {
        console.error('Offline - cannot fetch section content');
        const contentContainer = document.getElementById('content-container');
        contentContainer.innerHTML = `<div class='error-message'>
            <h3>Network Error</h3>
            <p>You are offline. Please check your internet connection.</p>
        </div>`;
        return;
    }
    
    // Check if section file exists in the project
    // This is a debug check - normally you would just fetch and handle errors
    fetch(url, { method: 'HEAD' })
        .then(headResponse => {
            console.log('HEAD request status:', headResponse.status);
            if (headResponse.ok) {
                console.log('Section file exists:', url);
            } else {
                console.warn('Section file might not exist:', url);
                // Log available files in sections directory
                fetch('sections/')
                    .then(dirResponse => dirResponse.text())
                    .then(dirHtml => {
                        console.log('Sections directory content:', dirHtml);
                    })
                    .catch(e => console.error('Cannot fetch sections directory:', e));
            }
            
            // Then load the section content
            return fetch(url);
        })
        .then(response => {
            console.log('GET request status:', response.status);
            if (!response.ok) {
                throw new Error(`Failed to load section: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            console.log('Received HTML for', sectionId, ':', html.length, 'characters');
            console.log('HTML content preview:', html.substring(0, 100));
            const contentContainer = document.getElementById('content-container');
            
            // Clear previous content
            contentContainer.innerHTML = '';
            console.log('Content container cleared');
            
            // Create a new div to hold the section
            const sectionDiv = document.createElement('div');
            sectionDiv.innerHTML = html;
            contentContainer.appendChild(sectionDiv);
            console.log('Section content appended to container');
            
            // Apply language translations
            updateContent();
            console.log('Language translations applied');
            
            // Ensure the section is visible
            const activeSection = document.getElementById(sectionId);
            if (activeSection) {
                console.log('Found active section:', sectionId);
                // Reset any previous styles
                activeSection.style.display = 'block';
                activeSection.style.opacity = 1;
                activeSection.style.transform = 'translateY(0)';
                console.log('Reset styles for active section');
                
                // Add animation
                setTimeout(() => {
                    activeSection.style.opacity = 0;
                    activeSection.style.transform = 'translateY(30px)';
                    activeSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    console.log('Set animation start styles');
                    
                    // Trigger reflow
                    void activeSection.offsetWidth;
                    
                    setTimeout(() => {
                        activeSection.style.opacity = 1;
                        activeSection.style.transform = 'translateY(0)';
                        console.log('Animation completed');
                    }, 50);
                }, 50);
            } else {
                console.error('Section element not found:', sectionId);
                // Debug: Show available elements
                const allSections = document.querySelectorAll('.section');
                console.log('Available sections:', allSections.length);
                allSections.forEach(section => {
                    console.log('Section id:', section.id);
                });
            }
        })
        .catch(error => {
            console.error('Error loading section:', error);
            const contentContainer = document.getElementById('content-container');
            contentContainer.innerHTML = `<div class='error-message'>
                <h3>Error loading section</h3>
                <p>${error.message}</p>
            </div>`;
        });
}

// Current language setting
let currentLang = 'en';

// Function to switch language
function switchLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    document.documentElement.lang = currentLang;
    updateContent();
    updateLanguageButton();
}

// Update language switch button text
function updateLanguageButton() {
    const button = document.getElementById('lang-switch');
    button.textContent = currentLang === 'en' ? '中文 / English' : 'English / 中文';
}

// Update page content based on current language
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// Toggle research details
function toggleDetails(detailId) {
    const detailElement = document.getElementById(detailId);
    if (detailElement.style.display === 'none') {
        detailElement.style.display = 'block';
    } else {
        detailElement.style.display = 'none';
    }
}

// Initialize page
window.addEventListener('DOMContentLoaded', function() {
    // Set initial language based on browser preference
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.includes('zh')) {
        currentLang = 'zh';
        document.documentElement.lang = 'zh';
        updateLanguageButton();
    }
    
    // Load default section
    showSection('about');
    
    // Gallery functionality will be initialized after section is loaded
    // using MutationObserver
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            const gallery = document.querySelector('.gallery-container');
            if (gallery) {
                // Initialize gallery functionality
                initGallery(gallery);
                observer.disconnect();
            }
        });
    });
    
    observer.observe(document.getElementById('content-container'), {
        childList: true,
        subtree: true
    });
});

// Initialize gallery with auto-scroll and manual scroll detection
function initGallery(gallery) {
    let galleryInterval;
    let scrollTimeout;
    
    // Start auto-scroll function
    const startGalleryAutoScroll = () => {
        // Clear existing interval
        if (galleryInterval) clearInterval(galleryInterval);
        
        // For 3 images, we don't need to scroll automatically
        galleryInterval = null;
    };
    
    // Handle manual scroll
    const handleManualScroll = () => {
        // Not needed for 3 images
    };
    
    // Pause auto-scroll on mouse hover
    gallery.addEventListener('mouseenter', () => {
        if (galleryInterval) clearInterval(galleryInterval);
    });
    
    // Resume auto-scroll when mouse leaves
    gallery.addEventListener('mouseleave', () => {
        startGalleryAutoScroll();
    });
    
    // Initialize gallery
    startGalleryAutoScroll();
}
