// Settings Panel Logic
const settingsBtn = document.getElementById('settings-btn');
const settingsPanel = document.getElementById('settings-panel');
let settingsOpen = false;

settingsBtn.onclick = () => {
  settingsOpen = !settingsOpen;
  if (settingsOpen) {
    settingsPanel.classList.add('open');
  } else {
    settingsPanel.classList.remove('open');
  }
};

// Close settings if clicking outside
document.addEventListener('mousedown', (e) => {
  if (
    settingsOpen &&
    !settingsPanel.contains(e.target) &&
    e.target !== settingsBtn &&
    !settingsBtn.contains(e.target)
  ) {
    settingsPanel.classList.remove('open');
    settingsOpen = false;
  }
});

// 12/24 hour toggle
const toggle12h = document.getElementById('toggle-12h');
toggle12h.checked = localStorage.getItem('clock12h') === 'true';
toggle12h.onchange = function() {
  localStorage.setItem('clock12h', this.checked);
  if (typeof updateClock === 'function') updateClock();
};

// Mystery option
const mysteryOption = document.getElementById('mystery-option');
mysteryOption.checked = localStorage.getItem('mysteryOption') === 'true';
mysteryOption.onchange = function() {
  localStorage.setItem('mysteryOption', this.checked);
  // Mystery logic here
  if (this.checked) {
    document.body.classList.add('mystery');
  } else {
    document.body.classList.remove('mystery');
  }
};
if (mysteryOption.checked) document.body.classList.add('mystery');

// Shuffle background logic
let imagesCache = null;
function setRandomBg() {
  if (imagesCache) {
    pickAndSetBg(imagesCache);
  } else {
    fetch('images/images.json')
      .then(res => res.json())
      .then(images => {
        imagesCache = images;
        pickAndSetBg(images);
      });
  }
}
function pickAndSetBg(images) {
  var imgName = images[Math.floor(Math.random() * images.length)];
  var img = new Image();
  img.onload = function() {
    $('#background').css({ 'background-image': 'url(images/' + imgName + ')' });
  };
  img.src = 'images/' + imgName;
}
document.getElementById('shuffle-bg').onclick = setRandomBg;