document.addEventListener("DOMContentLoaded", function(event) { 
   $('.category, .tab-content').swipe({
     swipeLeft: $('#next-category').click,
     swipeRight: $('#prev-category').click
  });

  $('#next').click(() => $('.carousel').carousel('next'));
  $('#prev').click(() => $('.carousel').carousel('prev'));
  $('.carousel').bcSwipe({ threshold: 50 });

  var navArrows = document.querySelectorAll('.gallery-nav');
  var categories = ['Gateway Nodes', 'Intermediary Nodes', 'User Nodes']
  var keys = ['gateway', 'intermediary', 'user']

  function showtab () { 
    $('#category').html(categories[0]);
    $(`.tabs div[href="#${keys[0]}"]`).tab('show');
  }

  $('#prev-category').click(() => {
    categories.unshift(categories.pop());
    keys.unshift(keys.pop());
    showtab();
  });

  $('#next-category').click(() => {
    categories.push(categories.shift());
    keys.push(keys.shift());
    showtab();
  });
});
