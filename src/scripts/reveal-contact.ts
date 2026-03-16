const buttons = document.querySelectorAll<HTMLButtonElement>('.reveal-contact');

buttons.forEach((button) => {
  button.addEventListener(
    'click',
    () => {
      const parts = (button.dataset.phoneParts || '').split('|').filter(Boolean);
      const value = parts.join(' ');
      button.innerHTML = `<a href="tel:${value.replace(/\s+/g, '')}" class="font-semibold">${value}</a>`;
    },
    { once: true }
  );
});
