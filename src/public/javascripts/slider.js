$(document).ready(() => {
  $('.slider').each(() => {
    const $group = $('.slider').find('.slide_group');
    const $slides = $('.slider').find('.slide');
    const bulletArray = [];
    let currentIndex = 0;

    function move(newIndex) {
      let animateLeft;
      let slideLeft;
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft,
      });
      $group.animate({
        left: animateLeft,
      }, () => {
        $slides.eq(currentIndex).css({
          display: 'none',
        });
        $slides.eq(newIndex).css({
          left: 0,
        });
        $group.css({
          left: 0,
        });
        currentIndex = newIndex;
      });
    }

    $('.next_btn').on('click', () => {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });

    $('.previous_btn').on('click', () => {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move($slides.length - 1);
      }
    });

    $.each($slides, (index) => {
      const $button = $('<a class="slide_btn">&bull;</a>');

      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', () => {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
  });
});
