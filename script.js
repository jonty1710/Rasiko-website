const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const form = document.getElementById('contactForm');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || '';
  const phone = data.get('phone') || '';
  const date = data.get('date') || 'Not specified';
  const guests = data.get('guests') || 'Not specified';
  const location = data.get('location') || 'Not specified';
  const message = data.get('message') || 'No additional message';

  const text = `Hi Rasiko, I'd like to enquire about catering.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEvent date: ${encodeURIComponent(date)}%0AGuests: ${encodeURIComponent(guests)}%0ALocation: ${encodeURIComponent(location)}%0AEvent details: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/919749661020?text=${text}`, '_blank', 'noopener');
});
