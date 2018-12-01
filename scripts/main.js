$(function(){
  console.log("DOM is ready!")
  var windowHeight = $(window).height();
  //this ensures that the "header" will take the window's height
  $('.header').height(windowHeight);
  console.debug("\"Header\"\'s height has been set to ",windowHeight,"px.");
});
