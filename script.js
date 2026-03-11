// ── HAMBURGER MENU ──
const ham = document.getElementById('ham');
const mob = document.getElementById('mobNav');

ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mob.classList.toggle('open');
});

function closeMenu() {
  ham.classList.remove('open');
  mob.classList.remove('open');
}

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('on'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── FORM SUBMIT ──
function submitForm(btn) {
  const inputs = btn.closest('.form-box').querySelectorAll('input, select');
  let valid = true;
  inputs.forEach(i => { if (!i.value.trim()) valid = false; });

  if (!valid) {
    btn.textContent = '⚠ Lengkapi form terlebih dahulu';
    btn.style.background = '#c1121f';
    setTimeout(() => {
      btn.textContent = 'Kirim Pendaftaran →';
      btn.style.background = '';
    }, 2500);
    return;
  }

  btn.textContent = '✓ Pendaftaran Terkirim!';
  btn.style.background = '#198754';
  setTimeout(() => {
    btn.textContent = 'Kirim Pendaftaran →';
    btn.style.background = '';
    btn.closest('.form-box').querySelectorAll('input, select, textarea').forEach(el => el.value = '');
  }, 3000);
}
