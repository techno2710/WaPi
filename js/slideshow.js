document.addEventListener('DOMContentLoaded', function()
{
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) //nächste, vorherige Buttons
  {
    showSlides(slideIndex += n);
  }

  function showSlides(n)
  {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > 3)
    {
      slideIndex = 1
    }
    if (n < 1)
    {
      slideIndex = 3
    }
    for (i = 0; i < 3; i++)
    {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

  setInterval(function()
  {
    plusSlides(1);
  }, 3000);

  window.plusSlides = plusSlides;
});
