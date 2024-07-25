const eBtn = document.getElementById('btn');
const text = document.getElementById('text');

eBtn.addEventListener('click', () => {

    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});