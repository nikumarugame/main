// 添加语言切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 语言数据
    const i18n = {
        en: {
            home: "Home",
            contact: "Contact",
            language: "Language",
            slogan: "Games Create Joy for Life",
            about_title: "About Us",
            about_text: "We create joyful gaming experiences",
            our_games: "Our Games",
            contact_us: "Contact Us",
            colorsort_title: "Color Sort",
            colorsort_desc: "Sort colorful blocks create beautiful patterns. Challenge yourself relax offline",
            roadblast_title: "Road Blast",
            roadblast_desc: "Build bridges for cars to cross the ocean in this challenging puzzle game.",
            download: "Download",
            category_puzzle: "Puzzle",
            category_action: "Action",
            coming_soon: "Coming Soon",
            coming_desc: "New game in development",
            category_coming: "Coming Soon",
            social_media: "Social Media",
            copyright: "© 2025 NikumaruGames All rights reserved.",
            terms_title: "Terms of Service",
            terms_button: "Terms of Service",
            terms_content: `
                <p><strong>1. Acceptance</strong></p>
                <p>By using our services, you agree to be bound by these Terms of Service.</p>
                <p><strong>2. Use of Services</strong></p>
                <p>You agree to use the services in compliance with all applicable laws and these terms. You are responsible for your account and any activity that occurs under it.</p>
                <p><strong>3. Intellectual Property</strong></p>
                <p>All content provided by NikumaruGames is protected by copyright and other intellectual property laws.</p>
                <p><strong>4. Limitation of Liability</strong></p>
                <p>To the maximum extent permitted by law, NikumaruGames is not liable for any indirect, incidental, or consequential damages arising from your use of the services.</p>
                <p><strong>5. Changes</strong></p>
                <p>We may modify these terms from time to time. Continued use of the service after changes constitutes acceptance of the updated terms.</p>
                <p><strong>6. Contact</strong></p>
                <p>If you have questions about these Terms, please contact us via the Contact page.</p>
            `
        },
        zh: {
            home: "首页",
            contact: "业务联络",
            language: "语言",
            slogan: "游戏创造生活乐趣",
            about_title: "关于我们",
            about_text: "我们致力于创造带来欢乐的游戏体验",
            our_games: "我们的游戏",
            contact_us: "联系我们",
            colorsort_title: "颜色排序拼图",
            colorsort_desc: "给彩色方块排序，让它们看起来更和谐",
            roadblast_title: "造了个桥",
            roadblast_desc: "一个充满挑战性的益智游戏，建造桥梁让汽车渡过海洋。",
            download: "���即下载",
            category_puzzle: "益智",
            category_action: "动作",
            coming_soon: "敬请期待",
            coming_desc: "全新游戏正在开发中",
            category_coming: "即将推出",
            social_media: "社交媒体",
            copyright: "© 2025 NikumaruGames All rights reserved.",
            terms_title: "服务条款",
            terms_button: "服务条款",
            terms_content: `
                <p><strong>1. 接受条款</strong></p>
                <p>使用我们的服务即表示您同意受这些服务条款的约束。</p>
                <p><strong>2. 服务使用</strong></p>
                <p>您同意按照所有适用法律和本条款使用服务。您对您的账户及其下发生的所有活动负责。</p>
                <p><strong>3. 知识产权</strong></p>
                <p>由 NikumaruGames 提供的所有内容受版权及其他知识产权法律保护。</p>
                <p><strong>4. 责任限制</strong></p>
                <p>在法律允许的最大范围内，NikumaruGames 对因您使用本服务而产生的任何间接、附带或后果性损害不承担责任。</p>
                <p><strong>5. 条款变更</strong></p>
                <p>我们可能会不时修改这些条款。您在变更后继续使用服务即表示接受更新后的条款。</p>
                <p><strong>6. 联系方式</strong></p>
                <p>如对这些条款有疑问，请通过联系页面与我们联系。</p>
            `
        },
        ja: {
            home: "ホーム",
            contact: "お問い合わせ",
            language: "言語",
            slogan: "ゲームが人生に喜びを",
            about_title: "私たちについて",
            about_text: "楽しいゲーム体験を創造します",
            our_games: "私たちのゲーム",
            contact_us: "お問い合わせ",
            colorsort_title: "カラーパズル",
            colorsort_desc: "カラフルなブロックを並べると美しい模様が生まれます。オフラインでリラックスして自分に挑戦してみよう",
            roadblast_title: "ロードブラスト",
            roadblast_desc: "この挑戦的なパズルゲームで、車が海を渡るための橋を作ろう。",
            download: "ダウンロード",
            category_puzzle: "パズル",
            category_action: "アクション",
            coming_soon: "近日公開",
            coming_desc: "新作ゲーム開発中",
            category_coming: "近日公開",
            social_media: "ソーシャルメディア",
            copyright: "© 2025 NikumaruGames All rights reserved.",
            terms_title: "利用規約",
            terms_button: "利用規約",
            terms_content: `
                <p><strong>1. 同意</strong></p>
                <p>当社のサービスを利用することで、本利用規約に同意したものとみなされます。</p>
                <p><strong>2. サービスの利用</strong></p>
                <p>利用者は、適用される法律および本規約に従ってサービスを利用するものとします。アカウントおよびその下で行われる活動については利用者が責任を負います。</p>
                <p><strong>3. 知的財産</strong></p>
                <p>NikumaruGames が提供するすべてのコンテンツは、著作権およびその他の知的財産法によって保護されています。</p>
                <p><strong>4. 免責</strong></p>
                <p>法律で許される最大の範囲で、NikumaruGames はサービス利用に起因する間接的・付随的・結果的損害について責任を負いません。</p>
                <p><strong>5. 規約の変更</strong></p>
                <p>当社は本規約を随時変更することがあります。変更後にサービスを継続して利用することで、更新された規約に同意したものとみなされます。</p>
                <p><strong>6. お問い合わせ</strong></p>
                <p>本規約に関する質問は、お問い合わせページからご連絡ください。</p>
            `
        }
    };

    // 更新页面语言
    function updateLanguage(lang) {
        // 更新所有带data-i18n属性的元素
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            el.textContent = i18n[lang][key] || key;
        });
        
        // 更新html标签的lang属性
        document.documentElement.lang = lang;
        
        // 保存到本地存储
        localStorage.setItem('preferredLang', lang);

        // 更新 Terms 模态内容（如果元素存在）
        if (tosButton) {
            tosButton.textContent = i18n[lang].terms_button || i18n[lang].terms_title || 'Terms';
        }
        if (tosModalTitle) {
            tosModalTitle.textContent = i18n[lang].terms_title || 'Terms';
        }
        if (tosModalBody) {
            tosModalBody.innerHTML = i18n[lang].terms_content || ''; 
        }
    }

    // 绑定语言切换事件
    document.querySelectorAll('[data-lang]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            updateLanguage(lang);
        });
    });

    // 初始化语言
    const getBrowserLang = () => {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('zh')) { // 所有中文变体
            return 'zh';
        } else if (browserLang.startsWith('ja')) { // 日语
            return 'ja';
        } else { // 其他情况默认英文
            return 'en';
        }
    };
    
    const savedLang = localStorage.getItem('preferredLang') || getBrowserLang();

    // --- 背景音乐相关（保留原有逻辑） ---
    const bgm = document.getElementById('bgm');
    let isFirstInteraction = true;

    // 用户首次交互后播放音乐
    document.addEventListener('click', function handleFirstInteraction() {
        if (isFirstInteraction) {
            if (bgm && typeof bgm.play === 'function') {
                bgm.play().catch(e => console.log('自动播放失败:', e));
            }
            isFirstInteraction = false;
            document.removeEventListener('click', handleFirstInteraction);
        }
    }, { once: true });

    // 尝试自动播放（需要服务器环境）
    if (bgm && typeof bgm.play === 'function') {
        bgm.play().catch(() => {
            // 如果自动播放失败，显示提示
            const playHint = document.createElement('div');
            playHint.textContent = 'Click anywhere to play music';
            playHint.style.cssText = `
                position: fixed;
                bottom: 70px;
                right: 20px;
                background: rgba(0,255,136,0.2);
                padding: 8px 15px;
                border-radius: 20px;
                backdrop-filter: blur(5px);
                color: var(--accent);
                font-size: 0.9rem;
                z-index: 9999;
            `;
            document.body.appendChild(playHint);
            setTimeout(() => playHint.remove(), 5000);
        });
    }

    // 添加音乐控制按钮（可选）
    const musicToggle = document.createElement('button');
    musicToggle.id = 'music-toggle';
    musicToggle.textContent = '🎵';
    document.body.appendChild(musicToggle);

    musicToggle.addEventListener('click', () => {
        if (!bgm) return;
        if (bgm.paused) {
            bgm.play();
            musicToggle.textContent = '🔊';
        } else {
            bgm.pause();
            musicToggle.textContent = '🔇';
        }
    });

    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
    #music-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(0,255,136,0.2);
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        backdrop-filter: blur(5px);
        color: var(--accent);
        z-index: 9999;
        transition: all 0.3s ease;
    }
    #music-toggle:hover {
        transform: scale(1.2);
        background: rgba(0,255,136,0.3);
    }

    /* Terms of Service 按钮（放在左下方） */
    #tos-button {
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: rgba(0,0,0,0.6);
        color: #fff;
        border: none;
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        z-index: 9999;
        font-size: 0.9rem;
        backdrop-filter: blur(4px);
    }
    #tos-button:hover {
        opacity: 0.95;
        transform: translateY(-2px);
    }

    /* Terms Modal 样式 */
    .tos-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
    }
    .tos-dialog {
        background: #fff;
        width: min(900px, 95%);
        max-height: 85vh;
        overflow: auto;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.4);
        color: #111;
    }
    .tos-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 8px;
    }
    .tos-title {
        font-size: 1.25rem;
        font-weight: 600;
    }
    .tos-close {
        background: transparent;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
    }
    .tos-body p { margin: 0.6rem 0; line-height: 1.5; }
    `;
    document.head.appendChild(style);

    // 在DOMContentLoaded事件监听器中添加
    document.addEventListener('click', function(e) {
        // 排除音乐控制按钮的点击
        if (!e.target.closest('#music-toggle')) {
            const clickSound = document.getElementById('clickSound');
            if (clickSound) {
                try {
                    clickSound.currentTime = 0;
                    clickSound.play().catch(() => {});
                } catch (err) {}
            }
        }
    });

    // 添加全局点击效果
    const clickStyle = document.createElement('style');
    clickStyle.textContent = `
    body {
        cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="%2300ff88" opacity="0.5"/></svg>') 1 1, auto;
    }

    .click-effect {
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(0,255,136,0.3);
        border-radius: 50%;
        pointer-events: none;
        animation: clickScale 0.5s ease-out;
    }

    @keyframes clickScale {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(3); opacity: 0; }
    }
    `;
    document.head.appendChild(clickStyle);

    document.addEventListener('click', function(e) {
        const effect = document.createElement('div');
        effect.className = 'click-effect';
        effect.style.left = `${e.pageX - 10}px`;
        effect.style.top = `${e.pageY - 10}px`;
        document.body.appendChild(effect);
        setTimeout(() => effect.remove(), 500);
    });

    // ----------------- Terms of Service Modal 功能实现 -----------------
    // 创建按钮
    const tosButton = document.createElement('button');
    tosButton.id = 'tos-button';
    tosButton.type = 'button';
    // 文本在 updateLanguage 时更新
    tosButton.textContent = 'Terms';
    document.body.appendChild(tosButton);

    // 创建模态 DOM（初始隐藏）
    let tosOverlay = null;
    let tosModalTitle = null;
    let tosModalBody = null;

    function createTosModal() {
        // 如果已存在，直接返回引用
        if (tosOverlay) return tosOverlay;

        tosOverlay = document.createElement('div');
        tosOverlay.className = 'tos-overlay';
        tosOverlay.setAttribute('role', 'dialog');
        tosOverlay.setAttribute('aria-modal', 'true');
        tosOverlay.style.display = 'none';

        const dialog = document.createElement('div');
        dialog.className = 'tos-dialog';
        dialog.setAttribute('role', 'document');

        const header = document.createElement('div');
        header.className = 'tos-header';

        tosModalTitle = document.createElement('div');
        tosModalTitle.className = 'tos-title';
        tosModalTitle.textContent = i18n[savedLang].terms_title || 'Terms';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'tos-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.setAttribute('aria-label', 'Close Terms');
        closeBtn.addEventListener('click', closeTosModal);

        header.appendChild(tosModalTitle);
        header.appendChild(closeBtn);

        tosModalBody = document.createElement('div');
        tosModalBody.className = 'tos-body';
        tosModalBody.innerHTML = i18n[savedLang].terms_content || '';

        dialog.appendChild(header);
        dialog.appendChild(tosModalBody);
        tosOverlay.appendChild(dialog);

        // 点击遮罩关闭（点击 dialog 内部不关闭）
        tosOverlay.addEventListener('click', function(e) {
            if (e.target === tosOverlay) {
                closeTosModal();
            }
        });

        document.body.appendChild(tosOverlay);
        return tosOverlay;
    }

    function openTosModal() {
        createTosModal();
        tosOverlay.style.display = 'flex';
        // 更新语言内容（以防在打开前切换语言）
        const lang = localStorage.getItem('preferredLang') || savedLang;
        tosModalTitle.textContent = i18n[lang].terms_title || 'Terms';
        tosModalBody.innerHTML = i18n[lang].terms_content || '';
        // 将焦点移至关闭按钮以便键盘可用性
        const closeEl = tosOverlay.querySelector('.tos-close');
        if (closeEl) closeEl.focus();
        // 阻止页面滚动（简易方案）
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    }

    function closeTosModal() {
        if (!tosOverlay) return;
        tosOverlay.style.display = 'none';
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        // 恢复焦点到按钮
        tosButton.focus();
    }

    // 绑定按钮事件
    tosButton.addEventListener('click', function() {
        openTosModal();
    });

    // 支持 Esc 关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && tosOverlay && tosOverlay.style.display === 'flex') {
            closeTosModal();
        }
    });

    // ----------------- 初始化语言并应用 -----------------
    updateLanguage(savedLang);
});