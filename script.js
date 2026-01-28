document.addEventListener('DOMContentLoaded', () => {

  const phases = [
    document.getElementById('phase1'),
    document.getElementById('phase2'),
    document.getElementById('phase3'),
    document.getElementById('phase4')
  ];

  function showPhase(i) {
    phases.forEach(p => p.classList.remove('active'));
    phases[i].classList.add('active');
  }

  // Phase navigation
  document.getElementById('toPhase2').onclick = () => showPhase(1);
  document.getElementById('yesBtn').onclick = () => showPhase(2);
  document.getElementById('replayBtn').onclick = () => showPhase(0);

  // Envelope interaction
  const envelopeArea = document.getElementById('envelopeArea');
  const photo1 = document.getElementById('photo1');
  const photo2 = document.getElementById('photo2');

  envelopeArea.addEventListener('click', () => {
    envelopeArea.classList.add('letter-open');

    setTimeout(() => photo1.classList.add('show'), 800);
    setTimeout(() => photo2.classList.add('show'), 1100);

    setTimeout(() => showPhase(3), 2800);
  });

  // Music toggle
  const bgMusic = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');
  let playing = false;

  musicToggle.onclick = () => {
    if (!playing) {
      bgMusic.play();
      musicToggle.textContent = 'Pause music';
    } else {
      bgMusic.pause();
      musicToggle.textContent = 'Play music';
    }
    playing = !playing;
  };
});
