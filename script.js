document.addEventListener('DOMContentLoaded', () => {

    /* --- Hacker Intro Logic --- */
    const hackerIntro = document.getElementById('hacker-intro');
    const terminalText = document.getElementById('terminal-text');
    const skipBtn = document.getElementById('skip-intro-btn');
    const commandLine = document.getElementById('command-line');
    const hackerInput = document.getElementById('hacker-input');
    const mainCursor = document.getElementById('main-cursor');
    const terminalContainer = document.querySelector('.terminal-container');

    function autoScroll() {
        terminalContainer.scrollTop = terminalContainer.scrollHeight;
    }

    // Phase 1: Thrill & Lock
    const phase1Lines = [
        "Initializing Secure Connection...",
        "Tracing IP Address...",
        "Biometric Scan Initiated...",
        "Subject Identified: ROY TIRAMISU RIYA D/o Priya Malhotra.",
        "ACCESS RESTRICTED. SYSTEM LOCKED.",
        "Enter Passphrase to Decrypt:"
    ];

    // Phase 2: Success Message
    const phase2Lines = [
        "Passphrase Accepted.",
        "Decrypting Heartbeat Protocol...",
        "Hello, you have come to one year journey of Tiramisuuu & Sanchuuu...",
        "Happy 1 Year to the most amazing person in my world!",
        "Today isn't just about celebrating another year of our life, it's about celebrating everything we are.",
        "Your kindness, your laugh, the way you light up every room you enter.",
        "I'm so grateful I get to be part of your journey.",
        "Here's to new adventures, beautiful memories, and all the happiness you deserve.",
        "May this next year bring you everything your heart desires!"
    ];

    let lineIndex = 0;
    let charIndex = 0;
    const typingSpeed = 40;
    const lineDelay = 600;

    function typePhase1() {
        if (lineIndex < phase1Lines.length) {
            if (charIndex < phase1Lines[lineIndex].length) {
                // Remove cursor from end if it exists (visually)
                // Actually, just append char BEFORE the cursor if we were doing it that way.
                // But current structure is: terminalText (div) + cursor (span)
                // The cursor is AFTER the terminalText div in HTML structure?
                // No: 
                /* <div id="terminal-text"></div> 
                   <span class="cursor">_</span> 
                */
                // So the cursor is always at the bottom. 
                // To make it follow text, we should append the cursor TO terminalText.

                terminalText.innerHTML += phase1Lines[lineIndex].charAt(charIndex);
                charIndex++;
                autoScroll();
                setTimeout(typePhase1, typingSpeed);
            } else {
                terminalText.innerHTML += "<br>";
                lineIndex++;
                charIndex = 0;
                autoScroll();
                setTimeout(typePhase1, lineDelay);
            }
        } else {
            // Phase 1 Done: Show Input
            enableInput();
        }
    }

    function enableInput() {
        mainCursor.style.display = 'none'; // Hide main cursor
        commandLine.classList.remove('hidden');
        hackerInput.focus();

        // Show Hint
        const hint = document.getElementById('hacker-hint');
        hint.classList.remove('hidden');
        setTimeout(() => {
            hint.classList.add('visible');
        }, 1000); // Slight delay for effect
    }

    // Input Logic
    hackerInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const val = hackerInput.value.trim().toLowerCase();
            // Append user's command to history
            terminalText.innerHTML += `<span style='color:#fff'>root@corino:~$ ${hackerInput.value}</span><br>`;
            hackerInput.value = '';

            if (val === 'i love you') {
                // SUCCESS
                commandLine.classList.add('hidden'); // Hide input
                mainCursor.style.display = 'inline-block'; // Show cursor again

                // Play Intro Music
                const introAudio = document.getElementById('bgm-intro');
                if (introAudio) {
                    introAudio.volume = 0.5;
                    introAudio.play().catch(e => console.log("Audio play failed:", e));
                }

                lineIndex = 0; // Reset for phase 2
                charIndex = 0;
                setTimeout(typePhase2, 500);
            } else {
                // FAIL
                terminalText.innerHTML += "<span style='color:red'>Access Denied. Incorrect Passphrase.</span><br>";
                // Keep input open
                // Auto scroll to bottom
                autoScroll();
            }
        }
    });

    function typePhase2() {
        if (lineIndex < phase2Lines.length) {
            if (charIndex < phase2Lines[lineIndex].length) {
                terminalText.innerHTML += phase2Lines[lineIndex].charAt(charIndex);
                charIndex++;
                autoScroll();
                setTimeout(typePhase2, typingSpeed);
            } else {
                terminalText.innerHTML += "<br>";
                lineIndex++;
                charIndex = 0;
                autoScroll();
                setTimeout(typePhase2, lineDelay);
            }
        } else {
            // All Done
            showAccessButton();
        }
    }

    function showAccessButton() {
        skipBtn.classList.remove('hidden');
        skipBtn.classList.add('visible');
        setTimeout(autoScroll, 100);
    }

    function endHackerIntro() {
        // 1. Immediately Unlock Scroll (Priority)
        document.body.classList.remove('locked');
        document.body.style.overflowY = 'auto'; // Force enable vertical scroll
        document.body.style.overflowX = 'hidden'; // Keep horizontal hidden

        // 2. Hide Intro Overlay
        hackerIntro.classList.add('hidden');

        // 3. Start Animations (Safe Mode)
        try {
            startBalloons();
        } catch (e) { console.error("Balloon fail", e); }

        try {
            startHeartAnimation();
        } catch (e) { console.error("Heart fail", e); }
    }

    if (skipBtn) {
        skipBtn.addEventListener('click', endHackerIntro);
    }

    // Start Animation (Intro)
    document.body.classList.add('locked'); // Lock scroll initially
    setTimeout(typePhase1, 1000);


    /* --- Balloon Logic --- */
    const balloonContainer = document.getElementById('balloons-container');
    const colors = ['#fce4ec', '#f8bbd0', '#f48fb1', '#d4af37', '#fff']; // Rose gold/Pink palette

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');

        // Randomize
        const randomLeft = Math.random() * 100;
        const randomDuration = 10 + Math.random() * 10;
        const randomDelay = Math.random() * 5;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        balloon.style.left = randomLeft + 'vw';
        balloon.style.animationDuration = randomDuration + 's';
        balloon.style.animationDelay = randomDelay + 's';
        balloon.style.backgroundColor = randomColor;

        balloonContainer.appendChild(balloon);

        setTimeout(() => { balloon.remove(); }, (randomDuration + randomDelay) * 1000);
    }

    function startBalloons() {
        for (let i = 0; i < 40; i++) { createBalloon(); }
    }
    // Note: We removed the auto-start line. Balloons now start via endHackerIntro()


    /* --- Constellation Text Animation: "YESHU" --- */
    function startConstellationAnimation() {
        const heroSection = document.getElementById('constellation-hero');
        heroSection.style.display = 'flex';

        const canvas = document.getElementById('constellation-canvas');
        const ctx = canvas.getContext('2d');

        let width, height;
        let stars = [];

        let mouse = { x: -1000, y: -1000 };
        function updateMouse(x, y) { mouse.x = x; mouse.y = y; }
        window.addEventListener('mousemove', e => updateMouse(e.clientX, e.clientY));
        window.addEventListener('touchstart', e => updateMouse(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
        window.addEventListener('touchmove', e => updateMouse(e.touches[0].clientX, e.touches[0].clientY), { passive: true });

        class Star {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.size = Math.random() * 2.5 + 1;
                this.density = (Math.random() * 20) + 1;
                this.opacity = 1;
                this.twinkleFactor = Math.random() * 0.05;
                this.twinkleDir = 1;
            }

            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                if (this.opacity > 1 || this.opacity < 0.3) {
                    this.twinkleDir *= -1;
                }
                this.opacity += this.twinkleFactor * this.twinkleDir;

                let dx = mouse.x - this.baseX;
                let dy = mouse.y - this.baseY;
                let distance = Math.sqrt(dx * dx + dy * dy);

                const maxDist = 80;
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let force = (maxDist - distance) / maxDist;

                if (distance < maxDist) {
                    this.x -= forceDirectionX * force * this.density;
                    this.y -= forceDirectionY * force * this.density;
                } else {
                    if (this.x !== this.baseX) { this.x -= (this.x - this.baseX) / 10; }
                    if (this.y !== this.baseY) { this.y -= (this.y - this.baseY) / 10; }
                }
            }
        }

        function init() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            stars = [];

            // 1. Draw Text
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Check for Mobile Portrait
            const isPortrait = height > width;

            ctx.save();
            if (isPortrait) {
                // Vertical Text (Rotated 90 degrees)
                ctx.translate(width / 2, height / 2);
                ctx.rotate(Math.PI / 2);
                let fontSize = Math.min(height * 0.18, 200);
                ctx.font = '700 ' + fontSize + 'px "Playfair Display", serif';
                ctx.fillText('RIYA', 0, 0);
            } else {
                // Standard Landscape
                let fontSize = Math.min(width * 0.18, 200);
                ctx.font = '700 ' + fontSize + 'px "Playfair Display", serif';
                ctx.fillText('RIYA', width / 2, height / 2);
            }
            ctx.restore();

            // 2. Scan
            const data = ctx.getImageData(0, 0, width, height).data;
            ctx.clearRect(0, 0, width, height);

            // Denser sampling
            const gap = 5;

            for (let y = 0; y < height; y += gap) {
                for (let x = 0; x < width; x += gap) {
                    if (data[(y * width + x) * 4 + 3] > 128) {
                        if (Math.random() < 0.9) {
                            stars.push(new Star(x, y));
                        }
                    }
                }
            }
        }

        function connect() {
            for (let a = 0; a < stars.length; a++) {
                for (let b = a; b < stars.length; b++) {
                    let dx = stars[a].x - stars[b].x;
                    let dy = stars[a].y - stars[b].y;
                    let distance = dx * dx + dy * dy;

                    if (distance < 900) {
                        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(stars[a].x, stars[a].y);
                        ctx.lineTo(stars[b].x, stars[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < stars.length; i++) {
                stars[i].update();
                stars[i].draw();
            }
            connect();
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', init);
        setTimeout(() => { init(); animate(); }, 100);
    }


    /* --- Trivia Logic --- */
    const questions = [
        {
            id: 1,
            text: "1. Which top do I like the most?",
            options: ["Maroon (Bandra)", "Lil Flea", "Black"],
            correctIndex: 1
        },
        {
            id: 2,
            text: "2. What contact name have I saved for you in my phone?",
            options: ["Riya", "Riya Malhotra", "Bbg"],
            correctIndex: 2
        },
        {
            id: 3,
            text: "3. Who said 'I love you' first?",
            options: ["Riya", "Sanshray", "Both"],
            correctIndex: 0
        },
        {
            id: 4,
            text: "4. Who is my favourite cricket player?",
            options: ["Rohit", "Virat", "Dhoni"],
            correctIndex: 2
        },
        {
            id: 5,
            text: "5. Whose birthday did I skip when we kissed first?",
            options: ["Kaashvi", "Jainit", "Sia"],
            correctIndex: 2
        }

    ];

    const quizContainer = document.getElementById('quiz-questions');
    const userAnswers = new Array(questions.length).fill(null);
    const feedbackMsg = document.getElementById('feedback-msg');
    const gate = document.getElementById('trivia-gate');
    const unlockBtn = document.getElementById('unlock-btn');
    const protectedContent = document.getElementById('protected-content');

    // STRICT SECURITY: Lock Body Scroll Immediately
    document.body.style.overflow = 'hidden';

    window.showTrivia = function () {
        gate.classList.remove('hidden');
        // Force scroll to top of questions
        const qContainer = document.getElementById('quiz-questions');
        if (qContainer) qContainer.scrollTop = 0;
        // Body is already locked, so we don't need to add a class
    };

    function renderQuiz() {
        quizContainer.innerHTML = '';
        questions.forEach((q, qIndex) => {
            const block = document.createElement('div');
            block.classList.add('question-block');
            block.dataset.index = qIndex;

            const title = document.createElement('h3');
            title.innerText = q.text;
            block.appendChild(title);

            const optionsGrid = document.createElement('div');
            optionsGrid.classList.add('options-grid');

            q.options.forEach((opt, optIndex) => {
                const btn = document.createElement('button');
                btn.classList.add('option-btn');
                btn.innerText = opt;
                btn.onclick = () => selectOption(qIndex, optIndex, btn);
                optionsGrid.appendChild(btn);
            });

            block.appendChild(optionsGrid);
            quizContainer.appendChild(block);
        });
    }

    function selectOption(qIndex, optIndex, btnElement) {
        userAnswers[qIndex] = optIndex;
        const block = quizContainer.children[qIndex];
        const allBtns = block.querySelectorAll('.option-btn');
        allBtns.forEach(b => { b.classList.remove('selected', 'wrong-mark'); });
        btnElement.classList.add('selected');
    }

    window.submitQuiz = function () {
        if (userAnswers.includes(null)) {
            feedbackMsg.innerHTML = "<span class='error-txt'>Please answer all questions first! ❤️</span>";
            return;
        }

        let correctCount = 0;
        const blocks = quizContainer.children;

        userAnswers.forEach((ans, index) => {
            const correctAnswer = questions[index].correctIndex;
            const block = blocks[index];
            const btns = block.querySelectorAll('.option-btn');
            if (ans === correctAnswer) {
                correctCount++;
            } else {
                if (btns[ans]) btns[ans].classList.add('wrong-mark');
            }
        });

        if (correctCount === questions.length) {
            // SUCCESS!
            feedbackMsg.innerHTML = "<span class='success-txt'>Access Granted. Happy 1 Love! ✨</span>";

            // Audio Transition: Fade Out Intro, Play Main
            const introAudio = document.getElementById('bgm-intro');
            const mainAudio = document.getElementById('bgm-main');

            if (introAudio) {
                // Simple fade out logic could be added here, but for now just pause
                introAudio.pause();
                introAudio.currentTime = 0;
            }
            if (mainAudio) {
                mainAudio.volume = 0.6;
                mainAudio.play().catch(e => console.log("Main audio play failed:", e));
            }

            setTimeout(() => {
                // 1. Fade out Trivia
                gate.classList.add('unlocked');
                unlockBtn.style.display = 'none';

                // 2. Trigger Royal Night Theme 🌑✨
                document.body.classList.add('night-mode');

                // 3. Reveal STAGE 1 (Cake + Jigsaw)
                protectedContent.style.display = 'block';

                // 4. Enable Scroll
                document.body.style.overflow = 'auto'; // Re-enable scroll
                document.body.classList.remove('locked');

                // 5. Smooth Scroll to Memory Lane
                setTimeout(() => {
                    const memoryLane = document.getElementById('memory-lane');
                    if (memoryLane) memoryLane.scrollIntoView({ behavior: 'smooth' });
                }, 500);

            }, 1500);
        } else {
            feedbackMsg.innerHTML = "<span class='error-txt'>IMPOSTER WARNING! 🚨 Access Denied. Try again!</span>";
        }
    };

    if (quizContainer) { renderQuiz(); }


    /* --- Jigsaw Puzzle Logic (Drag & Drop) --- */
    const sourceContainer = document.getElementById('puzzle-source-container');
    const puzzleBoard = document.getElementById('puzzle-board'); // Target
    const puzzleMsg = document.getElementById('puzzle-message');

    // Config
    const rows = 3;
    const cols = 3;
    const tileWidth = 96;  // 288 / 3
    const tileHeight = 512 / 3; // 512 / 3

    // We need to track where each piece belongs
    // IDs: 0 to 15

    function initJigsaw() {
        if (!sourceContainer || !puzzleBoard) return;

        sourceContainer.innerHTML = '';
        puzzleBoard.innerHTML = '';

        // 1. Create Drop Zones (Target)
        // 2. Create Pieces (Source)

        // Create Drop Zones 0-15
        for (let i = 0; i < rows * cols; i++) {
            const zone = document.createElement('div');
            zone.classList.add('drop-zone');
            zone.dataset.index = i;

            // Click Event for Tap-to-Place
            zone.addEventListener('click', handleZoneClick);

            puzzleBoard.appendChild(zone);
        }

        // Allow clicking source container to return piece
        sourceContainer.addEventListener('click', handleZoneClick);

        // Create Pieces 0-15
        const pieces = [];
        for (let i = 0; i < rows * cols; i++) {
            const piece = document.createElement('div');
            piece.classList.add('puzzle-piece');
            // piece.draggable = true; // No longer needed
            piece.id = `piece-${i}`;
            piece.dataset.index = i; // The correct home

            // Background Calc
            const row = Math.floor(i / cols);
            const col = i % cols;
            piece.style.backgroundPosition = `-${col * tileWidth}px -${row * tileHeight}px`;

            // Click Event
            piece.addEventListener('click', handlePieceClick);

            // Remove Drag/Touch events
            // piece.addEventListener('dragstart', ...);
            // piece.addEventListener('touchstart', ...);

            pieces.push(piece);
        }

        // Shuffle Pieces and add to Source
        shuffleArray(pieces);
        pieces.forEach(p => sourceContainer.appendChild(p));
    }

    // --- Unified Tap-to-Place Logic ---
    let selectedPiece = null;

    function handlePieceClick(e) {
        e.stopPropagation();
        const piece = e.target;

        // Deselect if already selected
        if (selectedPiece === piece) {
            deselectAll();
            return;
        }

        // Select
        deselectAll();
        selectedPiece = piece;
        selectedPiece.classList.add('selected-piece');

        // Visual
        selectedPiece.style.boxShadow = '0 0 15px var(--secondary-color)';
        selectedPiece.style.transform = 'scale(1.1)';
        selectedPiece.style.zIndex = '100';
    }

    function handleZoneClick(e) {
        if (!selectedPiece) return;

        // Target can be a zone OR the source container
        let target = e.target.closest('.drop-zone') || e.target.closest('#puzzle-source-container');

        if (target) {
            dropLogic(target);
            deselectAll();
        }
    }

    function deselectAll() {
        if (selectedPiece) {
            selectedPiece.classList.remove('selected-piece');
            selectedPiece.style.boxShadow = '';
            selectedPiece.style.transform = '';
            selectedPiece.style.zIndex = '';
            selectedPiece = null;
        }
    }

    function dropLogic(targetElement) {
        if (!targetElement || !selectedPiece) return;

        // 1. Drop into a Zone (Board)
        const zone = targetElement.closest('.drop-zone');
        if (zone) {
            // If zone is empty, allow drop
            if (!zone.hasChildNodes()) {
                zone.appendChild(selectedPiece);
                selectedPiece.classList.add('placed');
                checkJigsawWin();
            }
            return;
        }

        // 2. Drop back to Source (Basket)
        const source = targetElement.closest('#puzzle-source-container');
        if (source) {
            source.appendChild(selectedPiece);
            selectedPiece.classList.remove('placed');
            return;
        }
    }

    function checkJigsawWin() {
        // Win if ALL zones have the CORRECT piece
        const zones = document.querySelectorAll('.drop-zone');
        let correctCount = 0;

        zones.forEach(zone => {
            const piece = zone.firstChild;
            if (piece && piece.dataset.index === zone.dataset.index) {
                correctCount++;
            }
        });

        if (correctCount === (rows * cols)) {
            if (puzzleMsg) puzzleMsg.classList.remove('hidden');

            // Remove grid lines for clean look
            puzzleBoard.style.border = 'none';
            puzzleBoard.style.gap = '0';
            document.querySelectorAll('.drop-zone').forEach(z => {
                z.style.border = 'none';
            });

            // UNLOCK STAGE 2
            const stage2 = document.getElementById('protected-content-2');
            const footer = document.getElementById('footer');

            if (stage2) {
                stage2.style.display = 'block';
                setTimeout(() => {
                    stage2.scrollIntoView({ behavior: 'smooth' });
                }, 1000);
            }
            if (footer) footer.style.display = 'block';

            // Start Slideshow
            if (window.startSlideshow) window.startSlideshow();
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function endHackerIntro() {
        hackerIntro.classList.add('hidden');
        // startBalloons(); // MOVED: Now triggers when Cake Section is reached
        startConstellationAnimation();
        document.body.style.overflow = 'auto'; // Unlock scroll
    }

    // --- Balloon Trigger on Scroll ---
    const balloonTriggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startBalloons();
                balloonTriggerObserver.disconnect(); // Only start once
            }
        });
    }, { threshold: 0.1 });

    // Watch the Main Hero Section (Title) - ID is 'hero', not class 'hero'
    const heroSection = document.getElementById('hero');
    if (heroSection) balloonTriggerObserver.observe(heroSection);




    // Initialize
    initJigsaw();


    /* --- Memory Reveal --- */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); }
        });
    }, { threshold: 0.2 });

    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach(card => { observer.observe(card); });

    /* --- Finale Slideshow Logic (Photos Only) --- */
    function startSlideshow() {
        const container = document.getElementById('finale-slideshow-container');
        if (!container) return;

        container.innerHTML = '';

        const images = [
            'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg',
            'img5.jpg', 'img6.jpg', 'img7.jpg','img8.jpg', 'img9.jpg', 'img10.jpg', 'img11.jpg',
            'img12.jpg', 'img13.jpg', 'img14.jpg', 'img15.jpg', 'img16.jpg'
        ];

        // Create persistent Image Element
        const imgEl = document.createElement('img');
        imgEl.className = 'slideshow-content';
        imgEl.style.objectFit = 'contain'; // Ensure full photo visible
        container.appendChild(imgEl);

        let pIndex = 0;

        function showNextPhoto() {
            // Set source
            imgEl.style.opacity = '0'; // Optional: fade out

            setTimeout(() => {
                imgEl.src = images[pIndex];
                imgEl.style.opacity = '1'; // fade in

                // Next index
                pIndex = (pIndex + 1) % images.length;
            }, 500); // Wait for fade out

            // Schedule next switch
            setTimeout(showNextPhoto, 3000);
        }

        // Init
        imgEl.style.transition = 'opacity 0.5s ease-in-out';
        imgEl.src = images[0];
        pIndex = 1;

        // Start Loop
        setTimeout(showNextPhoto, 3000);
    }

    window.startSlideshow = startSlideshow;

});
