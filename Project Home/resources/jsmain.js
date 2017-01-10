$('#facebook').hover(function() { //add hover changes to facebook logo
  $(this).attr('src', '/Project Home/resources/images/facebookLinkHover.png');
  $('#facebook').addClass("img-hover");
}, function() {
  $(this).attr('src', '/Project Home/resources/images/facebookLink.png');
  $('#facebook').removeClass("img-hover");
});

$('#linkedin').hover(function() { //add hover changes to linkedin logo
  $(this).attr('src', '/Project Home/resources/images/LinkedinHover.png');
    $('#linkedin').addClass("img-hover");
}, function() {
  $(this).attr('src', '/Project Home/resources/images/Linkedin.png');
    $('#linkedin').removeClass("img-hover");
});

$('#github').hover(function() { //add hover changes to github logo
  $(this).attr('src', '/Project Home/resources/images/GithubHover.png');
  $('#github').addClass("img-hover");
}, function() {
  $(this).attr('src', '/Project Home/resources/images/Github.png');
    $('#github').removeClass("img-hover");
});

$('.logo').hover(function() { //add hover changes to github logo
  $(this).attr('src', '/Project Home/resources/images/logo-hover.gif');
}, function() {
  $(this).attr('src', '/Project Home/resources/images/logo1.gif');
});