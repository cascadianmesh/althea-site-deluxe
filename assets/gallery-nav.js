document.addEventListener("DOMContentLoaded", function(event) { 
  let count = 0

  $('.gallery-nav a').click(function(e) {
    e.preventDefault()
    let left = $('.gallery').css('left').replace('px', '')
    let adjust = 525

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
