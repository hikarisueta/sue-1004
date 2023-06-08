$(function(){
    $('.nemu-right').on('click', function() {
      hamburger();
    });
    $('#navi a').on('click', function() {
      hamburger();
    });
  });

  function hamburger() {
    $('.nemu-right').toggleClass('active');

    if($('.nemu-right').hasClass('active')) {
      $('#navi').addClass('active');
      $(".circle-bg").addClass('circleactive');
    } else {
      $('#navi').removeClass('active');
      $(".circle-bg").removeClass('circleactive');
    }
  }

const photo = document.querySelector('.photo01-img01');

photo.addEventListener('click', () => {
  photo.classList.toggle('scale');
});

const photo2 = document.querySelector('.photo01-img02');

photo2.addEventListener('click', () => {
  photo2.classList.toggle('scale');
});

const photo3 = document.querySelector('.photo01-img03');

photo3.addEventListener('click', () => {
  photo3.classList.toggle('scale');
});

const photo4 = document.querySelector('.photo02-img01');

photo4.addEventListener('click', () => {
  photo4.classList.toggle('scale');
});

const photo5 = document.querySelector('.photo02-img02');

photo5.addEventListener('click', () => {
  photo5.classList.toggle('scale');
});

const photo6 = document.querySelector('.photo03-img01');

photo6.addEventListener('click', () => {
  photo6.classList.toggle('scale');
});
