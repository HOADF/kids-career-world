let selectedColor = null;

document.querySelectorAll('.color').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedColor = btn.dataset.color;
    document.querySelectorAll('.color').forEach(c => c.style.outline = '');
    btn.style.outline = '3px solid #000';
  });
});

const svgObject = document.getElementById('scene-svg');
svgObject.addEventListener('load', () => {
  const svgDoc = svgObject.contentDocument;
  const colorable = svgDoc.querySelectorAll('[data-part]');
  
  colorable.forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      if (selectedColor) {
        el.style.fill = selectedColor;
        checkCompletion();
      }
    });
  });

  function checkCompletion() {
    const allColored = Array.from(colorable).every(el => el.style.fill && el.style.fill !== 'none');
    if (allColored) {
      document.getElementById('success-message').classList.remove('hidden');
    }
  }
});
