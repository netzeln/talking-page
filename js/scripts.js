$(document).ready(function() {

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hi!</li>");
    $("ul#webpage").prepend("<li>Hi, yourself</li>");
    $("ul#user").children("li").first().css('background-color', 'green');
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Bye-bye!</li>");
    $("ul#webpage").prepend("<li>Later!</li>");
    $("ul#user").children("li").first().css('background-color', 'blue');
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop Copying Me!</li>");
    $("ul#webpage").prepend("<li>Stop Copying Me!</li>");
    $("ul#user").children("li").first().css('background-color', 'red');
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
  });

//Cat and Dog scripts

$("button#meow").click(function() {
  $("img#catImg").show();
  $("img#dogImg").hide();
  $("ul#cat").prepend("<li>Meow?</li>");
  $("ul#dog").prepend("<li>BARK!!!</li>");

  $("ul#user").children("li").first().click(function(){
    $(this).remove();
  });
});

$("button#bark").click(function() {
  $("img#catImg").hide();
  $("img#dogImg").show();
  $("ul#cat").prepend("<li>HISSSSSSSSSSS!</li>");
  $("ul#dog").prepend("<li>Bark?</li>");

  $("ul#user").children("li").first().click(function(){
    $(this).remove();
  });
});


});
