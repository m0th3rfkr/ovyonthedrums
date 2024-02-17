// Asumiendo que tienes un elemento de audio en tu HTML con id="miAudio"
var miAudio = new Audio('https://github.com/m0th3rfkr/ovyonthedrums/raw/main/Quevedo,%20Yandel,%20Ovy%20On%20The%20Drums%20-%20GANGSTER%20(PQFNEDG)%20(Official%20Video).mp3');

// Función para el botón Play
document.getElementById('btn-play').addEventListener('click', function() {
    miAudio.play();
});

// Función para el botón Pause
document.getElementById('btn-pause').addEventListener('click', function() {
    miAudio.pause();
});

// Función para el control de volumen
document.getElementById('volumen').addEventListener('input', function() {
    miAudio.volume = this.value / 100;
});
