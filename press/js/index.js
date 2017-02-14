$(document).ready(function(){



// LOGOTYPE

$('.one').on("mouseenter",function() {

/* $(this).animate({
          backgroundColor: "white",
          color: "#B8E3E5"
        }, 100 ); */


$('.change1').fadeOut(50, function() {

 $(this).html("<a href='http://soflowband.com/media/logo.zip'>DOWNLOAD (.zip)</a>").fadeIn(50);
    });
  });




$('.one').on("mouseleave",function() {

/* $(this).animate({
          backgroundColor: "#B8E3E5",
          color: "white"
        }, 100 ); */


$('.change1').fadeOut(50, function() {

	$(this).html("LOGOTYPE").fadeIn(50);
    });
 });



//PRESSNOTE

$('.two').on("mouseenter",function() {

/* $(this).animate({
          backgroundColor: "white",
          color: "#C6B695"
        }, 100 ); */


$('.change2').fadeOut(50, function() {

 $(this).html("DOWNLOAD<br><a href='http://soflowband.com/media/so-flow-notka-prasowa.pdf' target='_blank'>PL</a> / <a href='http://soflowband.com/media/so-flow-press-note.pdf' target='_blank'>EN<a/>").fadeIn(50);
    });
  });



$('.two').on("mouseleave",function() {

/* $(this).animate({
          backgroundColor: "#C6B695",
          color: "white"
        }, 100 ); */

$('.change2').fadeOut(50, function() {
      $(this).html("PRESS NOTE").fadeIn(50);
    });
    });




// PHOTOS/COVERS

$('.three').on("mouseenter",function() {

/* $(this).animate({
          backgroundColor: "white",
          color: "#484F5A"
        }, 100 ); */


$('.change3').fadeOut(50, function() {
      $(this).html("<a href='http://soflowband.com/media/photos_so_flow.zip'>DOWNLOAD (.zip, 5.4MB)</a>").fadeIn(50);
    });
  });




$('.three').on("mouseleave",function() {

/* $(this).animate({
          backgroundColor: "#484F5A",
          color: "white"
        }, 100 ); */

$('.change3').fadeOut(50, function() {
      $(this).html("PHOTOS / COVERS").fadeIn(50);
    });
 });




// TECHNICAL RIDER

$('.four').on("mouseenter",function() {

/*  $(this).animate({
          backgroundColor: "white",
          color: "#7EA5A5"
        }, 100 ); */


$('.change4').fadeOut(50, function() {


$(this).html("DOWNLOAD<br><a href='http://soflowband.com/media/So-Flow-Rider-PL-2016.pdf' target='_blank'>PL</a> / <a href='http://soflowband.com/media/So-Flow-Rider-EN-2016.pdf' target='_blank'>EN<a/>").fadeIn(50);
    });
    });



$('.four').on("mouseleave",function() {

/* $(this).animate({
          backgroundColor: "#7EA5A5",
          color: "white"
        }, 100 ); */

$('.change4').fadeOut(50, function() {
      $(this).html("TECHNICAL RIDER").fadeIn(50);
    });
 });





//SOCIAL

$('.five').on("mouseenter",function() {


    $('.change5').hide(50, function(){

      $('.icons').show(50);
    });
  });



$('.five').on("mouseleave",function() {


   $('.icons').hide(50, function(){

      $('.change5').show(50);

});



    });

  });
