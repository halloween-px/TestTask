const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
    return (seconds) => {
        const h = Math.floor(seconds / (60 * 60)).toString().padStart(2, '0')
        const m = Math.floor(seconds % (60 * 60) / 60).toString().padStart(2, '0')
        const s = Math.floor(seconds % 60).toString().padStart(2, '0')
        timerEl.innerHTML = `${h}:${m}:${s} - ${h} часов, ${m} минут, ${s} секунд`
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', function () {
    this.value = this.value.replace(/[^\d.]/g, '');
});

let startInterval;
buttonEl.addEventListener('click', () => {
    clearInterval(startInterval);
    let seconds = Number(inputEl.value);
    timerEl.innerHTML = '';

    startInterval = setInterval(() => {
        animateTimer(seconds);
        seconds += 1
    }, 1000);

    inputEl.value = '';
});