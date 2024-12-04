const countdownElement = document.getElementById("countdown");
const cakeWrapper = document.querySelector(".cake-wrapper");
const birthdayText = document.getElementById("birthday-text");
const envelopeContainer = document.getElementById("envelope-container");
const paper = document.getElementById("paper");
const loveSection = document.getElementById("love-section");

const targetDate = new Date(new Date().getTime() + 10000).getTime();  // Simulasi countdown (10 detik)

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        clearInterval(countdownInterval);
        countdownElement.style.display = "none";
        cakeWrapper.style.display = "block";
        setTimeout(() => {
            birthdayText.style.display = "block";
        }, 2000);
    }
}, 1000);

function showEnvelope() {
    envelopeContainer.style.display = "block";  // Menampilkan amplop
    setTimeout(() => {
        paper.style.display = "block";  // Menampilkan kertas setelah amplop
    }, 2000);
}

function showPaper() {
    paper.style.display = "block";  // Menampilkan kertas
    setTimeout(() => {
        loveSection.classList.remove("hidden");  // Menampilkan "I love you"
    }, 2000);
}

