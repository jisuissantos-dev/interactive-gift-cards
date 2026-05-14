window.addEventListener('load', () => {
    const duration = 5 * 1000; // duração em ms (5 segundos)
    const end = Date.now() + duration;

    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval);
            return;
        }

        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }, // chuva vindo da esquerda
            colors: ['#470391', '#d1acf6', '#ffffff', '#ff69b4']
        });

        confetti({ 
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }, // chuva vindo da direita
            colors: ['#470391', '#d1acf6', '#ffffff', '#ff69b4']
        });

    }, 250);
});

document.querySelectorAll('.vale').forEach(vale => {
    vale.addEventListener('click', () => {
        vale.classList.toggle('virado');
    });
});