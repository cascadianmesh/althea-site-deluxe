document.addEventListener("DOMContentLoaded", function(event) { 
  let count = 0

  $('.gallery-item').swipe({
     swipeLeft: $('.gallery-nav #next').click,
     swipeRight: $('.gallery-nav #prev').click
  });

  $('.gallery-nav a').click(function(e) {
    e.preventDefault()
    let left = $('.gallery').css('left').replace('px', '')
    let adjust = $('.gallery img').outerWidth(true)

    if ($(this).attr('id') === 'prev') {
      if (count <= 0) return
      adjust = 0 - adjust
      count--
    } else {
      if (count >= $('.gallery img').length - 1) return
      count++
    } 

    $('.gallery').css('left', left - adjust)
  })
})
