/* ============================================================
   GÜVENLİK PROTOKOLÜ: TESİS 42
   JavaScript Dosyası - Oyun Mantığı (42 Soru Versiyonu)
   ============================================================ */

// ========== 42 OYUN SORUSU - KİMYA GÜVENLİĞİ ==========

const gameQuestions = [
    { id: 1, tehlikeMetni: "Yerde fokurdayan ve metali eriten bir sıvı var! Koyu renkte. Cildimize değerse şiddetli yanık yapar.", hazardEmoji: "🧪", dogruPiktogram: "Korozif (Aşındırıcı)", yanlisPiktogramlar: ["Yanıcı", "Toksik/Zehirli"], dogruEkipman: "Aside dayanıklı eldiven", yanlisEkipmanlar: ["Koruyucu gözlük", "Solunum cihazı"] },
    { id: 2, tehlikeMetni: "Masa üzerinde açık bir benzin bidonunun yanında bir ateş kaynağı var. Alevler her an tutuşabilir!", hazardEmoji: "🔥", dogruPiktogram: "Yanıcı", yanlisPiktogramlar: ["Korozif (Aşındırıcı)", "Radyoaktif"], dogruEkipman: "Yangın söndürücü", yanlisEkipmanlar: ["Eldiven", "Maske"] },
    { id: 3, tehlikeMetni: "Laboratuvarda kapalı olmayan toksik buharlar yayılıyor! Nefes almaktan kaçınmalıyız. Sinir sistemine zarar verir.", hazardEmoji: "☠️", dogruPiktogram: "Toksik/Zehirli", yanlisPiktogramlar: ["Patlayıcı", "Korozif (Aşındırıcı)"], dogruEkipman: "Solunum cihazı (Gaz maskesi)", yanlisEkipmanlar: ["Eldiven", "Ayakkabı"] },
    { id: 4, tehlikeMetni: "Kapalı bir kap üzerinde radyasyon uyarı işareti var. Genetik hasara neden olabilir! Dokunmak ölümcül!", hazardEmoji: "☢️", dogruPiktogram: "Radyoaktif", yanlisPiktogramlar: ["Yanıcı", "Toksik/Zehirli"], dogruEkipman: "Kurşun önlük", yanlisEkipmanlar: ["Eldiven", "Gözlük"] },
    { id: 5, tehlikeMetni: "Basınçlı gazlar içeren kapalı oda. Sistem tutuşmak üzere. Her an patlamaya hazır!", hazardEmoji: "💥", dogruPiktogram: "Patlayıcı", yanlisPiktogramlar: ["Korozif (Aşındırıcı)", "Toksik/Zehirli"], dogruEkipman: "Ağır koruyucu kask", yanlisEkipmanlar: ["Eldiven", "Solunum cihazı"] },
    { id: 6, tehlikeMetni: "Depo alanında sentetik kimyasal bileşikler var. Etiketinde tehlike işareti var. İnsan sağlığı tehlike altında!", hazardEmoji: "⚠️", dogruPiktogram: "Tehlikeli", yanlisPiktogramlar: ["Yanıcı", "Radyoaktif"], dogruEkipman: "Tam vücut koruma giysisi", yanlisEkipmanlar: ["Eldiven", "Gözlük"] },
    { id: 7, tehlikeMetni: "Tesisin akaryakıt deposu ısınmaya başlamış. Acil tahliye yapmalıyız!", hazardEmoji: "🔥", dogruPiktogram: "Yanıcı", yanlisPiktogramlar: ["Korozif (Aşındırıcı)", "Toksik/Zehirli"], dogruEkipman: "Yangın söndürücü", yanlisEkipmanlar: ["Eldiven", "Kask"] },
    { id: 8, tehlikeMetni: "Ölüme sebep olabilecek gaz bulutu! Koruma gerekli!", hazardEmoji: "☠️", dogruPiktogram: "Toksik/Zehirli", yanlisPiktogramlar: ["Yanıcı", "Patlayıcı"], dogruEkipman: "Aktif karbon filtreli maske", yanlisEkipmanlar: ["Gözlük", "Eldiven"] },
    { id: 9, tehlikeMetni: "Radyoaktif izotoplar taşınır! Ölümcül dozda radyasyon alabilirsiniz.", hazardEmoji: "☢️", dogruPiktogram: "Radyoaktif", yanlisPiktogramlar: ["Yanıcı", "Korozif"], dogruEkipman: "Kurşun kalkan", yanlisEkipmanlar: ["Eldiven", "Maske"] },
    { id: 10, tehlikeMetni: "Kaynama tankı patlamak üzere olan basınçlı gazla dolmuş! Patlama riski var!", hazardEmoji: "💥", dogruPiktogram: "Patlayıcı", yanlisPiktogramlar: ["Korozif (Aşındırıcı)", "Yanıcı"], dogruEkipman: "Ağır koruyucu kaskı", yanlisEkipmanlar: ["Eldiven", "Gözlük"] },
    { id: 11, tehlikeMetni: "Bilinmeyen bir kimyasal maddede sadece 'KİMYASAL TEHLİKE' yazısı var.", hazardEmoji: "⚠️", dogruPiktogram: "Tehlikeli", yanlisPiktogramlar: ["Yanıcı", "Radyoaktif"], dogruEkipman: "Latex eldiven ve önlük", yanlisEkipmanlar: ["Kask", "Maske"] },
    { id: 12, tehlikeMetni: "Benzin bölümünde elektrik tesisatında arıza var. Kıvılcımlar yangın çıkaracak!", hazardEmoji: "🔥", dogruPiktogram: "Yanıcı", yanlisPiktogramlar: ["Patlayıcı", "Korozif"], dogruEkipman: "Yangın söndürücü", yanlisEkipmanlar: ["Eldiven", "Maske"] },
    { id: 13, tehlikeMetni: "Sinir gazı sızdırıyor! Kas felcine neden olur. Ölümcül!", hazardEmoji: "☠️", dogruPiktogram: "Toksik/Zehirli", yanlisPiktogramlar: ["Yanıcı", "Radyoaktif"], dogruEkipman: "Tam yüz maskeli solunum cihazı", yanlisEkipmanlar: ["Eldiven", "Gözlük"] },
    { id: 14, tehlikeMetni: "Plutonyum depolanıyor! Alfa parçacıkları yayıyor. Çok tehlikeli!", hazardEmoji: "☢️", dogruPiktogram: "Radyoaktif", yanlisPiktogramlar: ["Korozif", "Toksik/Zehirli"], dogruEkipman: "Kurşun eldiven ve elbise", yanlisEkipmanlar: ["Maske", "Gözlük"] },
    { id: 15, tehlikeMetni: "Nitrogliserin türü patlayıcı madde! Minimum şok dahi patlamaya yol açabilir!", hazardEmoji: "💥", dogruPiktogram: "Patlayıcı", yanlisPiktogramlar: ["Yanıcı", "Toksik/Zehirli"], dogruEkipman: "Anti-statik eldive", yanlisEkipmanlar: ["Maske", "Kask"] },
    { id: 16, tehlikeMetni: "Laboratuvar depolarında organik peroksit! Bilinmeyen tehlike!", hazardEmoji: "⚠️", dogruPiktogram: "Tehlikeli", yanlisPiktogramlar: ["Yanıcı", "Toksik/Zehirli"], dogruEkipman: "Nitrile eldiven", yanlisEkipmanlar: ["Kask", "Maske"] },
    { id: 17, tehlikeMetni: "Laboratuvarda alkol duvarı tutuşmuş! Alevler yayılıyor!", hazardEmoji: "🔥", dogruPiktogram: "Yanıcı", yanlisPiktogramlar: ["Korozif", "Patlayıcı"], dogruEkipman: "Yangın söndürücü ve eldiven", yanlisEkipmanlar: ["Maske", "Gözlük"] },
    { id: 18, tehlikeMetni: "Manganese dioksit sızıyor! Tehlikeli buharlar yayılıyor!", hazardEmoji: "☠️", dogruPiktogram: "Toksik/Zehirli", yanlisPiktogramlar: ["Yanıcı", "Radyoaktif"], dogruEkipman: "Solunum cihazı ve eldiven", yanlisEkipmanlar: ["Gözlük", "Kask"] },
    { id: 19, tehlikeMetni: "Ura madeninden çıkarılan cevher! Radyoaktif atık ile kirlenmiş. Genetik hasara sebep olabilir!", hazardEmoji: "☢️", dogruPiktogram: "Radyoaktif", yanlisPiktogramlar: ["Toksik/Zehirli", "Korozif"], dogruEkipman: "Kurşun kalkan ve eldiven", yanlisEkipmanlar: ["Maske", "Gözlük"] },
    { id: 20, tehlikeMetni: "Laboratuvar deposunda dinamit bulunmuş! Patlayıcı maddeler var.", hazardEmoji: "💥", dogruPiktogram: "Patlayıcı", yanlisPiktogramlar: ["Korozif", "Yanıcı"], dogruEkipman: "Kask ve eldiven", yanlisEkipmanlar: ["Maske", "Gözlük"] },
    { id: 21, tehlikeMetni: "Etiketlenmemiş bir alet! Piktogram göstermesi gereken bir madde ama bilinmiyor.", hazardEmoji: "⚠️", dogruPiktogram: "Tehlikeli", yanlisPiktogramlar: ["Yanıcı", "Korozif"], dogruEkipman: "Emniyet eldiveni", yanlisEkipmanlar: ["Kask", "Maske"] },
    { id: 22, tehlikeMetni: "Gazyağı var. Açık alev veya kıvılcım yakınında yangın çıkabilir.", hazardEmoji: "🔥", dogruPiktogram: "Yanıcı", yanlisPiktogramlar: ["Patlayıcı", "Toksik/Zehirli"], dogruEkipman: "Yangın söndürücü", yanlisEkipmanlar: ["Eldiven", "Maske"] },
    { id: 23, tehlikeMetni: "Karbon monoksit sensörü yüksek uyarı veriyor! Zehirli gaz kaçıyor.", hazardEmoji: "☠️", dogruPiktogram: "Toksik/Zehirli", yanlisPiktogramlar: ["Yanıcı", "Radyoaktif"], dogruEkipman: "Solunum cihazı", yanlisEkipmanlar: ["Eldiven", "Gözlük"] },
    { id: 24, tehlikeMetni: "Kobalt-60 saklanıyor! Gama ışınları yayıyor. Çok tehlikeli!", hazardEmoji: "☢️", dogruPiktogram: "Radyoaktif", yanlisPiktogramlar: ["Korozif", "Yanıcı"], dogruEkipman: "Kurşun elbise", yanlisEkipmanlar: ["Eldiven", "Maske"] },
    { id: 25, tehlikeMetni: "Nitro amonyak gübresi mevcut. Yangın ve patlama tehlikesi vardır!", hazardEmoji: "💥", dogruPiktogram: "Patlayıcı", yanlisPiktogramlar: ["Yanıcı", "Toksik/Zehirli"], dogruEkipman: "Ağır koruyucu kask", yanlisEkipmanlar: ["Eldiven", "Maske"] },
    { id: 26, tehlikeMetni: "Kaynama ocağının yanında belirtilemeyen kimyasal var. Bilinmeyen tehlike!", hazardEmoji: "⚠️", dogruPiktogram: "Tehlikeli", yanlisPiktogramlar: ["Yanıcı", "Radyoaktif"], dogruEkipman: "Lateks eldiven ve önlük", yanlisEkipmanlar: ["Kask", "Gözlük"] },
    { id: 27, tehlikeMetni: "Propan gazı kaçağı! Odoratı kalmış. Ateş yakın! Anında alev çıkabilir!", hazardEmoji: "🔥", dogruPiktogram: "Yanıcı", yanlisPiktogramlar: ["Korozif", "Patlayıcı"], dogruEkipman: "Yangın söndürücü", yanlisEkipmanlar: ["Eldiven", "Maske"] },
    { id: 28, tehlikeMetni: "Arsenik tozu saçılmış! Dermal absorpsiyon ve solunum tehlikesi var.", hazardEmoji: "☠️", dogruPiktogram: "Toksik/Zehirli", yanlisPiktogramlar: ["Yanıcı", "Patlayıcı"], dogruEkipman: "Tam yüz solunum maskesi", yanlisEkipmanlar: ["Eldiven", "Gözlük"] },
    { id: 29, tehlikeMetni: "Stronisyum-90 kontaminasyonu! Beta emitter. Yayılıyor.", hazardEmoji: "☢️", dogruPiktogram: "Radyoaktif", yanlisPiktogramlar: ["Toksik/Zehirli", "Yanıcı"], dogruEkipman: "Anti-kontaminasyon elbisesi", yanlisEkipmanlar: ["Eldiven", "Gözlük"] },
    { id: 30, tehlikeMetni: "Peroksit tahmine bağlı patlama mümkün! Kontrol sıcaklık aşılmış. Risk yüksek!", hazardEmoji: "💥", dogruPiktogram: "Patlayıcı", yanlisPiktogramlar: ["Korozif", "Toksik/Zehirli"], dogruEkipman: "Anti-statik kask", yanlisEkipmanlar: ["Eldiven", "Maske"] },
    { id: 31, tehlikeMetni: "Endüstriyel havuzda madde belirsiz siyah tortu var. Uyarı işareti var ama tür bilinmiyor.", hazardEmoji: "⚠️", dogruPiktogram: "Tehlikeli", yanlisPiktogramlar: ["Yanıcı", "Korozif"], dogruEkipman: "Nitrile eldiven", yanlisEkipmanlar: ["Kask", "Solunum cihazı"] },
    { id: 32, tehlikeMetni: "Naftamat bölümünde açık alev! Kontrol kaybı riskli!", hazardEmoji: "🔥", dogruPiktogram: "Yanıcı", yanlisPiktogramlar: ["Patlayıcı", "Korozif"], dogruEkipman: "Yangın söndürücü", yanlisEkipmanlar: ["Maske", "Eldiven"] },
    { id: 33, tehlikeMetni: "Klorin gazı sızıyor! Acı ve boğucu. Akciğerleri yakıyor. Ölümcül!", hazardEmoji: "☠️", dogruPiktogram: "Toksik/Zehirli", yanlisPiktogramlar: ["Yanıcı", "Radyoaktif"], dogruEkipman: "Klorin-spesifik gaz maskesi", yanlisEkipmanlar: ["Eldiven", "Gözlük"] },
    { id: 34, tehlikeMetni: "Tritium su kaynağından sızıntı! Beta emitter. Kontaminasyon yayılıyor.", hazardEmoji: "☢️", dogruPiktogram: "Radyoaktif", yanlisPiktogramlar: ["Toksik/Zehirli", "Korozif"], dogruEkipman: "Kurşun eldiven", yanlisEkipmanlar: ["Maske", "Gözlük"] },
    { id: 35, tehlikeMetni: "Organik peroksit oto-katalize hazır! Dakikalar içinde patlamaya hazır.", hazardEmoji: "💥", dogruPiktogram: "Patlayıcı", yanlisPiktogramlar: ["Yanıcı", "Toksik/Zehirli"], dogruEkipman: "Ağır kaskı ve kalkan", yanlisEkipmanlar: ["Eldiven", "Solunum cihazı"] },
    { id: 36, tehlikeMetni: "Bilinmeyen eczema-indükleyici madde! Paketi saklanmış. Tehlike!", hazardEmoji: "⚠️", dogruPiktogram: "Tehlikeli", yanlisPiktogramlar: ["Yanıcı", "Radyoaktif"], dogruEkipman: "Elastik eldiven", yanlisEkipmanlar: ["Kask", "Maske"] },
    { id: 37, tehlikeMetni: "Toluene buharlandığında yangın çıkabilir! Ateş yakın!", hazardEmoji: "🔥", dogruPiktogram: "Yanıcı", yanlisPiktogramlar: ["Korozif", "Radyoaktif"], dogruEkipman: "Yangın söndürücü", yanlisEkipmanlar: ["Eldiven", "Maske"] },
    { id: 38, tehlikeMetni: "Sianür tuzu tozu var! Gastrointestinal absorpsiyon hızlı ve ölümcül!", hazardEmoji: "☠️", dogruPiktogram: "Toksik/Zehirli", yanlisPiktogramlar: ["Yanıcı", "Patlayıcı"], dogruEkipman: "Sianür-antidotlu maskesi", yanlisEkipmanlar: ["Eldiven", "Gözlük"] },
    { id: 39, tehlikeMetni: "Technetium-99m koleksiyonu! Meta stabil izotop. Kontaminasyon var!", hazardEmoji: "☢️", dogruPiktogram: "Radyoaktif", yanlisPiktogramlar: ["Korozif", "Toksik/Zehirli"], dogruEkipman: "Kurşun şort pantalonlu terlik", yanlisEkipmanlar: ["Maske", "Eldiven"] },
    { id: 40, tehlikeMetni: "Pikrinik asidi kristalli hale çekti! Hafif şok'a cevap verir. İstikrarsız!", hazardEmoji: "💥", dogruPiktogram: "Patlayıcı", yanlisPiktogramlar: ["Yanıcı", "Korozif"], dogruEkipman: "Ağır kaskı", yanlisEkipmanlar: ["Eldiven", "Maske"] },
    { id: 41, tehlikeMetni: "Isı değiştiricinin sigortası defektif! Başlangıç malzemesi bulunmuş. Piktogramı görülmüyor!", hazardEmoji: "⚠️", dogruPiktogram: "Tehlikeli", yanlisPiktogramlar: ["Yanıcı", "Korozif"], dogruEkipman: "Genel koruma eldiveni", yanlisEkipmanlar: ["Kask", "Gözlük"] },
    { id: 42, tehlikeMetni: "SON ODA! Ana kontrol merkezi. Tüm tehlikelerin merkezi. Tesis 42'nin kapısını aç!", hazardEmoji: "🏆", dogruPiktogram: "Tehlikeli", yanlisPiktogramlar: ["Yanıcı", "Korozif"], dogruEkipman: "Tam koruma elbisesi", yanlisEkipmanlar: ["Eldiven", "Maske"] }
];

// ========== OYUN DURUMU ==========

const gameState = {
    currentRoomIndex: 0,
    hearts: 3,
    timeRemaining: 180,
    totalTime: 180,
    gameActive: false,
    timerInterval: null,
    pictogramSelected: false,
    equipmentSelected: false,
    selectedPictogram: null,
    selectedEquipment: null,
    fiftyUsed: false,
    freezeUsed: false,
    isFrozen: false,
    frozenTimeoutId: null,
    correctAnswers: 0,
    wrongAnswers: 0
};

// ========== DOM ELEMANLARI ==========

const screens = {
    start: document.getElementById('startScreen'),
    game: document.getElementById('gameScreen'),
    gameOver: document.getElementById('gameOverScreen')
};

const buttons = {
    start: document.getElementById('startBtn'),
    help: document.getElementById('helpBtn'),
    reset: document.getElementById('resetBtn'),
    restart: document.getElementById('restartBtn'),
    closeHelp: document.getElementById('closeHelpBtn'),
    fifty: document.getElementById('fiftyBtn'),
    freeze: document.getElementById('freezeBtn'),
    submitName: document.getElementById('submitNameBtn')
};

const displays = {
    hearts: document.getElementById('heartsDisplay'),
    questionCount: document.getElementById('questionCountDisplay'),
    timer: document.getElementById('timerDisplay'),
    question: document.getElementById('questionText'),
    hazardEmoji: document.getElementById('hazardEmoji'),
    pictogramContainer: document.getElementById('pictogramContainer'),
    equipmentContainer: document.getElementById('equipmentContainer'),
    gameOverMessage: document.getElementById('gameOverMessage'),
    completedQuestions: document.getElementById('completedQuestions'),
    correctAnswers: document.getElementById('correctAnswers'),
    wrongAnswers: document.getElementById('wrongAnswers'),
    elapsedTime: document.getElementById('elapsedTime'),
    successRate: document.getElementById('successRate'),
    progressBar: document.getElementById('progressBar'),
    toastContainer: document.getElementById('toastContainer'),
    nameInputForm: document.getElementById('nameInputForm'),
    playerNameInput: document.getElementById('playerNameInput'),
    leaderboardBody: document.getElementById('leaderboardBody')
};

const helpModal = document.getElementById('helpModal');

// ========== OYUN BAŞLATMA ==========

function startGame() {
    gameState.currentRoomIndex = 0;
    gameState.hearts = 3;
    gameState.timeRemaining = 180;
    gameState.totalTime = 180;
    gameState.gameActive = true;
    gameState.pictogramSelected = false;
    gameState.equipmentSelected = false;
    gameState.selectedPictogram = null;
    gameState.selectedEquipment = null;
    gameState.fiftyUsed = false;
    gameState.freezeUsed = false;
    gameState.isFrozen = false;
    gameState.correctAnswers = 0;
    gameState.wrongAnswers = 0;

    buttons.fifty.disabled = false;
    buttons.fifty.style.opacity = '1';
    buttons.fifty.style.cursor = 'pointer';
    buttons.freeze.disabled = false;
    buttons.freeze.style.opacity = '1';
    buttons.freeze.style.cursor = 'pointer';

    shuffleArray(gameQuestions);

    screens.start.classList.remove('active');
    screens.gameOver.classList.remove('active');
    screens.game.classList.add('active');

    loadQuestion();
    startTimer();
}

// ========== SORU YÜKLEME ==========

function loadQuestion() {
    if (gameState.currentRoomIndex >= gameQuestions.length) {
        endGame(true);
        return;
    }

    const question = gameQuestions[gameState.currentRoomIndex];

    displays.question.textContent = question.tehlikeMetni;
    displays.hazardEmoji.textContent = question.hazardEmoji;

    updateHUD();
    updateProgressBar();

    gameState.pictogramSelected = false;
    gameState.equipmentSelected = false;
    gameState.selectedPictogram = null;
    gameState.selectedEquipment = null;

    createAnswerButtons(question.dogruPiktogram, question.yanlisPiktogramlar, 'pictogramContainer', 'pictogram');
    createAnswerButtons(question.dogruEkipman, question.yanlisEkipmanlar, 'equipmentContainer', 'equipment');
}

// ========== CEVAP BUTONLARI ==========

function createAnswerButtons(correctAnswer, wrongAnswers, containerId, type) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const allAnswers = [correctAnswer, ...wrongAnswers];
    shuffleArray(allAnswers);

    allAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.dataset.answer = answer;
        button.dataset.correct = (answer === correctAnswer);
        button.dataset.type = type;

        button.addEventListener('click', () => handleAnswerClick(button, answer, type));

        container.appendChild(button);
    });
}

function handleAnswerClick(button, answer, type) {
    const isCorrect = button.dataset.correct === 'true';

    if (type === 'pictogram') {
        if (gameState.pictogramSelected) return;

        gameState.pictogramSelected = true;
        gameState.selectedPictogram = answer;
        button.classList.add('selected');

        if (isCorrect) {
            if (gameState.equipmentSelected) checkAnswers();
        } else {
            handleWrongAnswer(type);
        }
    } else if (type === 'equipment') {
        if (gameState.equipmentSelected) return;

        gameState.equipmentSelected = true;
        gameState.selectedEquipment = answer;
        button.classList.add('selected');

        if (isCorrect) {
            if (gameState.pictogramSelected) checkAnswers();
        } else {
            handleWrongAnswer(type);
        }
    }
}

function checkAnswers() {
    const question = gameQuestions[gameState.currentRoomIndex];

    const pictogramCorrect = gameState.selectedPictogram === question.dogruPiktogram;
    const equipmentCorrect = gameState.selectedEquipment === question.dogruEkipman;

    if (pictogramCorrect && equipmentCorrect) {
        gameState.correctAnswers++;
        showToast('✅ DOĞRU! Sonraki odaya geçiliyor...', 'success');
        setTimeout(() => {
            gameState.currentRoomIndex++;
            gameState.pictogramSelected = false;
            gameState.equipmentSelected = false;
            gameState.selectedPictogram = null;
            gameState.selectedEquipment = null;
            loadQuestion();
        }, 500);
    }
}

function handleWrongAnswer(type) {
    gameState.wrongAnswers++;
    showToast('❌ YANLIŞ CEVAP! -1 Can, -5 Saniye', 'error');

    gameState.hearts--;
    gameState.timeRemaining = Math.max(0, gameState.timeRemaining - 5);

    triggerAlarmEffect();
    updateHUD();

    if (gameState.hearts <= 0 || gameState.timeRemaining <= 0) {
        endGame(false);
    } else {
        setTimeout(() => {
            gameState.pictogramSelected = false;
            gameState.equipmentSelected = false;
            gameState.selectedPiktogram = null;
            gameState.selectedEquipment = null;
            loadQuestion();
        }, 600);
    }
}

function triggerAlarmEffect() {
    document.body.classList.add('alarm');
    const gameContainer = document.querySelector('.game-container');
    gameContainer.classList.add('shake');

    setTimeout(() => {
        document.body.classList.remove('alarm');
        gameContainer.classList.remove('shake');
    }, 400);
}

// ========== ZAMANLAYICI ==========

function startTimer() {
    gameState.timerInterval = setInterval(() => {
        if (gameState.gameActive && !gameState.isFrozen) {
            gameState.timeRemaining--;
            updateHUD();

            if (gameState.timeRemaining <= 0) {
                gameState.gameActive = false;
                clearInterval(gameState.timerInterval);
                endGame(false);
            }
        }
    }, 1000);
}

// ========== HUD GÜNCELLEME ==========

function updateHUD() {
    let heartsDisplay = '';
    for (let i = 0; i < gameState.hearts; i++) {
        heartsDisplay += '❤️ ';
    }
    displays.hearts.textContent = heartsDisplay || '❌ YOK';

    displays.questionCount.textContent = `${gameState.currentRoomIndex + 1}/${gameQuestions.length}`;

    displays.timer.textContent = `${gameState.timeRemaining}s`;

    if (gameState.timeRemaining <= 10 && gameState.timeRemaining > 5) {
        displays.timer.classList.remove('danger');
        displays.timer.classList.add('warning');
    } else if (gameState.timeRemaining <= 5) {
        displays.timer.classList.remove('warning');
        displays.timer.classList.add('danger');
    } else {
        displays.timer.classList.remove('warning', 'danger');
    }
}

function updateProgressBar() {
    const progress = ((gameState.currentRoomIndex + 1) / gameQuestions.length) * 100;
    displays.progressBar.style.width = progress + '%';
}

// ========== BİLDİRİMLER ==========

function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    displays.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease';
    }, 10);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, duration);
}

// ========== JOKERLER ==========

function useFiftyLifeline() {
    if (gameState.fiftyUsed) {
        showToast('⚠️ %50 Jokeri zaten kullanıldı!', 'warning');
        return;
    }

    gameState.fiftyUsed = true;
    buttons.fifty.disabled = true;
    buttons.fifty.style.opacity = '0.5';
    buttons.fifty.style.cursor = 'not-allowed';

    const pictogramButtons = document.querySelectorAll('#pictogramContainer .answer-btn');
    const wrongPictogramButtons = Array.from(pictogramButtons).filter(btn => btn.dataset.correct === 'false');

    if (wrongPictogramButtons.length > 0) {
        const randomIndex = Math.floor(Math.random() * wrongPictogramButtons.length);
        wrongPictogramButtons[randomIndex].style.display = 'none';
    }

    const equipmentButtons = document.querySelectorAll('#equipmentContainer .answer-btn');
    const wrongEquipmentButtons = Array.from(equipmentButtons).filter(btn => btn.dataset.correct === 'false');

    if (wrongEquipmentButtons.length > 0) {
        const randomIndex = Math.floor(Math.random() * wrongEquipmentButtons.length);
        wrongEquipmentButtons[randomIndex].style.display = 'none';
    }

    showToast('🎪 %50 Jokeri Kullanıldı!', 'info');
}

function useFreezeLifeline() {
    if (gameState.freezeUsed) {
        showToast('⚠️ Zaman Dondurma Jokeri zaten kullanıldı!', 'warning');
        return;
    }

    if (gameState.isFrozen) {
        showToast('⚠️ Zaman şu anda zaten dondurulmuş!', 'warning');
        return;
    }

    gameState.freezeUsed = true;
    buttons.freeze.disabled = true;
    buttons.freeze.style.opacity = '0.5';
    buttons.freeze.style.cursor = 'not-allowed';

    gameState.isFrozen = true;
    displays.timer.classList.add('blinking');

    showToast('⏱️ ZAMAN DONDURULDU! 10 saniye', 'success');

    gameState.frozenTimeoutId = setTimeout(() => {
        gameState.isFrozen = false;
        displays.timer.classList.remove('blinking');
        showToast('⏱️ Zaman akışı yeniden başladı!', 'info');
    }, 10000);
}

// ========== OYUN BİTİŞİ ==========

function endGame(victory) {
    gameState.gameActive = false;
    clearInterval(gameState.timerInterval);

    if (gameState.frozenTimeoutId) {
        clearTimeout(gameState.frozenTimeoutId);
    }

    screens.game.classList.remove('active');
    screens.gameOver.classList.add('active');

    const elapsedTime = gameState.totalTime - gameState.timeRemaining;
    const totalAnswered = gameState.correctAnswers + gameState.wrongAnswers;
    const successRate = totalAnswered > 0 ? Math.round((gameState.correctAnswers / totalAnswered) * 100) : 0;

    if (victory) {
        displays.gameOverMessage.textContent = `✅ TESİSİ BAŞARIYLA TAHLIYE ETTİNİZ!\n\nTesis 42'den güvenli bir şekilde çıktınız.\nTüm kimyasal tehlikeleri başarıyla aştınız!`;
        displays.gameOverMessage.classList.remove('defeat');
        displays.gameOverMessage.classList.add('victory');
    } else {
        displays.gameOverMessage.textContent = `❌ TAHLIYE EŞİM BAŞARISIZ OLDU!\n\nTesiste yeterli güvenlik protokolü uygulamadınız.`;
        displays.gameOverMessage.classList.remove('victory');
        displays.gameOverMessage.classList.add('defeat');
    }

    displays.completedQuestions.textContent = gameState.currentRoomIndex;
    displays.correctAnswers.textContent = gameState.correctAnswers;
    displays.wrongAnswers.textContent = gameState.wrongAnswers;
    displays.elapsedTime.textContent = elapsedTime;
    displays.successRate.textContent = successRate;

    displays.nameInputForm.style.display = 'block';
    displays.playerNameInput.focus();
}

// ========== LEADERBOARD ==========

function saveScore(playerName, completionTime, correctCount, wrongCount) {
    if (!playerName.trim()) {
        playerName = 'Anonim Oyuncu';
    }

    const leaderboard = loadLeaderboard();
    const totalAnswered = correctCount + wrongCount;
    const successRate = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

    const newScore = {
        name: playerName,
        time: completionTime,
        correct: correctCount,
        wrong: wrongCount,
        successRate: successRate,
        date: new Date().toLocaleString('tr-TR')
    };

    leaderboard.push(newScore);
    leaderboard.sort((a, b) => a.time - b.time);
    const topScores = leaderboard.slice(0, 10);

    localStorage.setItem('leaderboard', JSON.stringify(topScores));
    displayLeaderboard(topScores);

    showToast('🏆 Skorun leaderboard\'a eklendi!', 'success');
}

function loadLeaderboard() {
    const stored = localStorage.getItem('leaderboard');
    return stored ? JSON.parse(stored) : [];
}

function displayLeaderboard(scores) {
    displays.leaderboardBody.innerHTML = '';

    if (scores.length === 0) {
        displays.leaderboardBody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 20px;">Henüz skor yok. Oyuna başla!</td></tr>';
        return;
    }

    scores.forEach((score, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${score.name}</td>
            <td>${score.time}s</td>
            <td>${score.correct}</td>
            <td>${score.wrong}</td>
            <td>${score.successRate}%</td>
        `;
        displays.leaderboardBody.appendChild(row);
    });
}

// ========== YARDIMCI FONKSİYONLAR ==========

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function toggleHelpModal() {
    helpModal.classList.toggle('active');
}

// ========== EVENT LİSTENER'LAR ==========

buttons.start.addEventListener('click', startGame);
buttons.help.addEventListener('click', toggleHelpModal);
buttons.reset.addEventListener('click', () => {
    clearInterval(gameState.timerInterval);
    if (gameState.frozenTimeoutId) clearTimeout(gameState.frozenTimeoutId);
    screens.game.classList.remove('active');
    screens.start.classList.add('active');
    screens.gameOver.classList.remove('active');
});
buttons.restart.addEventListener('click', () => {
    screens.gameOver.classList.remove('active');
    screens.start.classList.add('active');
    displayLeaderboard(loadLeaderboard());
});
buttons.closeHelp.addEventListener('click', toggleHelpModal);
buttons.fifty.addEventListener('click', useFiftyLifeline);
buttons.freeze.addEventListener('click', useFreezeLifeline);

buttons.submitName.addEventListener('click', () => {
    const playerName = displays.playerNameInput.value.trim() || 'Anonim Oyuncu';
    const elapsedTime = gameState.totalTime - gameState.timeRemaining;
    saveScore(playerName, elapsedTime, gameState.correctAnswers, gameState.wrongAnswers);
    displays.nameInputForm.style.display = 'none';
});

displays.playerNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buttons.submitName.click();
    }
});

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (screens.start.classList.contains('active')) {
            buttons.start.click();
        } else if (screens.gameOver.classList.contains('active') && (!displays.nameInputForm.style.display || displays.nameInputForm.style.display === 'none')) {
            buttons.restart.click();
        }
    }
});

// ========== BAŞLANGIÇ ==========

window.addEventListener('load', () => {
    displayLeaderboard(loadLeaderboard());
});
