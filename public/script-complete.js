
// Toggling can also be done through javascript
$('#toggle').on('click', function (){
    $(this).button('toggle');
  });

// Activating the loading state
$('#loadingButton').on('click', function(){
  var $btn = $(this).button('loading');
  console.log('click');
  //simulating a timeout
  setTimeout(function () {
      $btn.button('reset');
  }, 1000);
});

// Swap out the text
$('#newText').on('click', function (){
    $(this).attr('data-complete-text', 'Thank you!').button('complete');
  });
