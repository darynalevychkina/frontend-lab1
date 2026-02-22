let n = 0;
const out = document.getElementById('out');

document.getElementById('addBtn').addEventListener('click', () => {
  const p = document.createElement('p');
  p.textContent = 'Item #' + (++n) + ' was added';
  out.appendChild(p);
});

document.getElementById('clearBtn').addEventListener('click', () => {
  out.innerHTML = '';
  n = 0;
});

const themeBtn = document.getElementById('themeBtn');
const themeStatus = document.getElementById('theme-status');

themeBtn.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  themeBtn.textContent = dark ? 'Light theme' : 'Dark theme';
  themeStatus.innerHTML = 'Current theme: <strong>' + (dark ? 'Dark' : 'Light') + '</strong>';
});
