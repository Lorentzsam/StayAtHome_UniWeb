// 视图切换功能
window.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#main-nav .nav-link');
    const viewContents = document.querySelectorAll('.view-content');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('main-nav');

    // 轮播功能
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        currentSlide = index;
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    if (carouselNext) {
        carouselNext.addEventListener('click', nextSlide);
    }

    if (carouselPrev) {
        carouselPrev.addEventListener('click', prevSlide);
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
    });

    // 自动轮播
    if (slides.length > 0) {
        setInterval(nextSlide, 5000);
    }

    // 视图切换逻辑
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetViewId = link.getAttribute('data-target');
            
            // 更新导航状态
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // 切换显示内容
            viewContents.forEach(view => {
                view.classList.remove('active');
                if (view.id === targetViewId) {
                    view.classList.add('active');
                }
            });

            // 滚动到顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // 关闭移动端菜单
            if (mainNav) {
                mainNav.classList.remove('active');
            }
        });
    });

    // 移动端菜单切换
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            // 切换按钮动画
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (mainNav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // 聊天窗口功能
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // 聊天窗口切换
    const toggleChat = () => {
        if (chatWindow) {
            const isVisible = chatWindow.style.display === 'flex';
            chatWindow.style.display = isVisible ? 'none' : 'flex';
            if (!isVisible && chatInput) {
                chatInput.focus();
            }
        }
    };

    if (chatToggle) {
        chatToggle.addEventListener('click', toggleChat);
    }

    if (closeChat) {
        closeChat.addEventListener('click', () => {
            if (chatWindow) {
                chatWindow.style.display = 'none';
            }
        });
    }

    // 添加消息到聊天窗口
    const appendMessage = (text, isUser = false) => {
        if (!chatMessages) return;
        
        const msgDiv = document.createElement('div');
        msgDiv.className = isUser 
            ? 'chat-message user' 
            : 'chat-message bot';
        msgDiv.textContent = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return msgDiv;
    };

    // 发送消息处理
    const handleSend = async () => {
        if (!chatInput || !sendBtn) return;
        
        const text = chatInput.value.trim();
        if (!text) return;
        
        appendMessage(text, true);
        chatInput.value = '';

        // 显示加载状态
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'chat-message bot loading-dots';
        loadingDiv.innerHTML = '教授正在通过加密隧道传输回应<span>.</span><span>.</span><span>.</span>';
        chatMessages.appendChild(loadingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // 模拟AI回复（可以替换为实际的API调用）
        setTimeout(() => {
            if (chatMessages.contains(loadingDiv)) {
                chatMessages.removeChild(loadingDiv);
            }
            
            const responses = [
                '根据加利顿大学的最新研究，您的问题涉及多个学科领域。建议您查阅我们的数字图书馆资源，或联系相关院系。',
                '作为STU的教授，我必须指出，这个问题需要从多个维度进行分析。首先，我们需要考虑网络延迟对学术研究的影响...',
                '根据《卧室科学》期刊的最新研究，您提到的现象确实存在。我们建议您申请使用高性能计算集群进行进一步分析。',
                '这是一个非常有趣的问题。在加利顿大学，我们鼓励跨学科研究。建议您联系我们的科研资源中心获取更多信息。'
            ];
            
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            appendMessage(randomResponse);
        }, 1500);
    };

    if (sendBtn && chatInput) {
        sendBtn.addEventListener('click', handleSend);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSend();
            }
        });
    }

    // 导航栏滚动效果
    const mainHeader = document.querySelector('.main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (mainHeader) {
            if (currentScroll > 100) {
                mainHeader.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                mainHeader.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
            }
        }
        
        lastScroll = currentScroll;
    });

    // 卡片悬停效果增强
    const serviceCards = document.querySelectorAll('.service-card, .service-card-small, .portal-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // 点击外部关闭移动菜单
    document.addEventListener('click', (e) => {
        if (mainNav && mainNav.classList.contains('active')) {
            if (!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mainNav.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === 'javascript:location.reload()') {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 初始化：确保首页视图显示
    const homeView = document.getElementById('home-view');
    if (homeView) {
        homeView.classList.add('active');
    }

    console.log('Stay at Home University website loaded successfully!');
});
