const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

const updateIcon = (theme) => {
  toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
};

const stored = localStorage.getItem('theme');
if (stored) {
  root.setAttribute('data-theme', stored);
  updateIcon(stored);
} else {
  root.setAttribute('data-theme', 'dark');
  updateIcon('dark');
}

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', current);
  localStorage.setItem('theme', current);
  updateIcon(current);
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('action-btn').addEventListener('click', () => {
  alert('Stop clicking me. This is a demo.'); 
});
