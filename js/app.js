$(document).foundation()

//start of underlined menu script
$("[data-menu-underline-from-center] a").addClass("underline-from-center");

//start sticky nav bar


  $(document).foundation();

$('.title-bar').on('sticky.zf.stuckto:top', function(){
  $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function(){
  $(this).removeClass('shrink');
})

//end sticky nav bar