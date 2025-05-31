export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function getRandomCoords(elementSize) {
    const x = Math.random() * (window.innerWidth - elementSize);
    const y = Math.random() * (window.innerHeight - elementSize);
    return { x, y };
}

export function createOverlay(callback) {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      callback();
      document.body.removeChild(overlay);
    }
  });
  return overlay;
}

export function getButton(callback) {
  const button = document.createElement('button');
  button.style.display = 'block';
  button.style.padding = '10px';
  button.style.color = '#DCDCDC';
  button.style.backgroundColor = '#000000';
  button.style.cursor = 'pointer';
  button.addEventListener('click', (e) => {
    if (e.target === button) {
      callback();
    }
  });
  return button;
}
