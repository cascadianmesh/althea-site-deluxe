document.addEventListener("DOMContentLoaded", function(event) { 
  $('.posts div:gt(5)').hide()
  $('#load-more').click(function(e) {
    e.preventDefault()
    $('.posts div').show()
    $('hr').hide()
    $(this).hide()
  })
})
