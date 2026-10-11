const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
      nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
// Prefill the request form from service/destination links.
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  const select = document.getElementById('serviceSelect');
  if (select) select.value = link.dataset.service;
}));
document.querySelectorAll('[data-destination]').forEach(link => link.addEventListener('click', () => {
  const input = document.getElementById('destinationInput');
  if (input) input.value = link.dataset.destination;
}));
const form = document.getElementById('requestForm');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const value = key => (data.get(key) || '').toString().trim();
  const message = [
    'Halo Bintang Mulia Tour Travel, saya ingin meminta informasi perjalanan.', '',
    'Nama: ' + value('name'),
    'Nomor WhatsApp: ' + value('phone'),
    'Jenis layanan: ' + value('service'),
    'Destinasi/tujuan: ' + value('destination'),
    'Tanggal berangkat: ' + (value('date') || 'Belum ditentukan'),
    'Jumlah peserta: ' + (value('people') || 'Belum ditentukan'),
    'Catatan: ' + (value('notes') || '-'), '',
    'Mohon informasi paket, ketersediaan, fasilitas, dan estimasi biayanya. Terima kasih.'
  ].join('\n');
  window.open('https://wa.me/6285876300013?text=' + encodeURIComponent(message), '_blank', 'noopener');
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', event => {
  const target = document.querySelector(anchor.getAttribute('href'));
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}));
