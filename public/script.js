//BUTTON DEMO

// Activating the loading state
$('#loadingButton').on('click', function() {
  var $btn = $(this).button('loading');
  console.log('click');
  //simulating a timeout
  setTimeout(function () {
      $btn.button('reset');
  }, 1000);
});


// Toggling
$('#myStateButton').on('click', function () {
    $(this).button('toggle') // button text will be "finished!"
  });

// // Resetting
// $('#myStateButton').on('click', function () {
//     $(this).button('reset') // button text will be "finished!"
//   });
//
// // Swap out the text
// $('#myStateButton').on('click', function () {
//     $(this).button('complete') // button text will be "finished!"
//   });


  // .on('click',function(d){
  //    d3.select(this).classed('highlight',true);
  // });
