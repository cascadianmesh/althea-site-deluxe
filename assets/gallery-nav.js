document.addEventListener("DOMContentLoaded", function(event) { 
  $('.gallery-nav a').click(function(e) {
    e.preventDefault()
    let left = $('.gallery').css('left').replace('px', '')
    let adjust = 553 - 28
    console.log(left, adjust)
    if ($(this).attr('id') === 'prev') adjust = 0 - adjust
    $('.gallery').css('left', left - adjust)
  })
})
