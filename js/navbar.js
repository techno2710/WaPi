document.addEventListener('DOMContentLoaded', function()
{
  const burger= document.querySelector('.burger');
  const navLinks= document.querySelector('.nav-links');

  burger.addEventListener('click', function()
  {
    if (navLinks.classList.contains('active'))
    {
      navLinks.style.animation = 'slideUp 0.3s ease-out forwards';
      setTimeout(() =>
      {
        navLinks.classList.remove('active');
        navLinks.style.animation = '';
      }, 300);
    }
    else
    {
      navLinks.classList.add('active');
      navLinks.style.animation = 'slideDown 0.3s ease-out';
    }
  });
});
