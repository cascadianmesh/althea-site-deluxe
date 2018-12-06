document.addEventListener("DOMContentLoaded", function(event) { 
  $(window).scroll(() => {
    let pos = $(window).scrollTop()

    let wh = $(window).height()
    let ih = $('#images').height()

    let start = $('#start').offset().top - ((wh - ih) / 2)
    let end = $('#start img:last').offset().top - ((wh - ih) / 2)

    let offset = $('.container').offset()
    $('.container img').css('visibility', 'hidden')
    
    if (pos > start && pos < end) {
      $('#images').show()
      $('#images').css('position', 'fixed')
      $('#images').css('top', wh / 2 - ih / 2)
      $('#images').css('left', offset.left + 12)
    } else if (pos <= start) {
      $('.container img:first').css('visibility', 'visible')
      $('#images').hide()
    } else {
      $('.container img:last').css('visibility', 'visible')
      $('#images').hide()
    } 

    let norm = (1 - (end - pos) / (end -start)) * 8
    for (let i = 1; i < 8; i++) {
      $(`#img${i+1}`).css('opacity', norm - i)
    } 
  })

  $('#img1').css('opacity', 1)
  $(window).scroll()
  $(window).resize(function () {
    $(window).scroll()
  })
});
