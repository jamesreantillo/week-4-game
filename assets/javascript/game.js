var game = {
  ranNum : "",
  ranNum1 : "",
  ranNum2 : "",
  ranNum3 : "",
  ranNum4 : "",
  total : [],
  wins : "",
  losses : "",
  reset : function () {
    game.ranNum = Math.floor(Math.random() * 80) + 20;
    $('.randomNumber').html(game.ranNum);
    game.ranNum1 = Math.floor(Math.random() * 12) +1;
    game.ranNum2 = Math.floor(Math.random() * 12) +1;
    game.ranNum3 = Math.floor(Math.random() * 12) +1;
    game.ranNum4 = Math.floor(Math.random() * 12) +1;
    game.total = 0;
    $('.counter-counter').html(game.total);
  }
}





$(document).ready(function() {




function win() {

  alert("You win!");
  game.wins ++;
  $(".wins-counter").html(game.wins);
  reset();
}

function lose() {

  alert("You lose!");
  game.losses ++;
  $(".losses-counter").html(game.losses);
  reset();
}

$(".instructions").on('click', function() {
  $(".instructions").html('james')
});

   
  
 


  // random number 
$('.randomNumber').on('click',function() {
  game.ranNum = Math.floor(Math.random() * 80) + 20;
  $('.randomNumber').html(game.ranNum);
  game.total = 0;
  $('.counter-counter').html(game.total);
  // $('.counter-counter').html(game.total);
  // console.log(game.ranNum);
  // random number for the images
  game.ranNum1 = Math.floor(Math.random() * 12) +1;
  // $(".lbj").val(game.ranNum1);
  // console.log("ranNum 1 is: " + game.ranNum1);
  game.ranNum2 = Math.floor(Math.random() * 12) +1;
  // $(".love").val(game.ranNum2);
  // console.log("ranNum 2 is: " + game.ranNum2);
  game.ranNum3 = Math.floor(Math.random() * 12) +1;
  // $(".isiah").val(game.ranNum3);
  // console.log("ranNum 3 is: " + game.ranNum3);
  game.ranNum4 = Math.floor(Math.random() * 12) +1;
  // $(".jr").val(game.ranNum4);
  // console.log("ranNum 4 is: " + game.ranNum4);


});
  
  // assigning random number to player
$('.lbj').on('click', function() {
        game.total = parseInt(game.total + game.ranNum1);
        $('.counter-counter').html(game.total);
        // console.log(game.ranNum1);
        // console.log(game.total)

        if (game.total === game.ranNum) {
          win ();
        } else if (game.total > game.ranNum) {
          lose ();
        }
        

    });
$('.love').on('click', function() {
        game.total = parseInt(game.total + game.ranNum2);
        $('.counter-counter').html(game.total);
        // console.log(game.ranNum2);
        // console.log(game.total)

        if (game.total === game.ranNum) {
          win ();
        } else if (game.total > game.ranNum) {
          lose ();
        }
        

    });
$('.isiah').on('click', function() {
        game.total = parseInt(game.total + game.ranNum3);
        $('.counter-counter').html(game.total);
        // console.log(game.ranNum3);
        // console.log(game.total)

        if (game.total === game.ranNum) {
          win ();
        } else if (game.total > game.ranNum) {
          lose ();
        }
       

    });
$('.jr').on('click', function() {
        game.total = parseInt(game.total + game.ranNum4);
        $('.counter-counter').html(game.total);
        // console.log(game.ranNum4);
        // console.log(game.total)

        if (game.total === game.ranNum) {
          win ();
        } else if (game.total > game.ranNum) {
          lose ();
        }
        

    });



// reset game
function reset() {
  game.ranNum = Math.floor(Math.random() * 80) + 20;
  $('.randomNumber').html(game.ranNum);
  game.ranNum1 = Math.floor(Math.random() * 12) +1;
  game.ranNum2 = Math.floor(Math.random() * 12) +1;
  game.ranNum3 = Math.floor(Math.random() * 12) +1;
  game.ranNum4 = Math.floor(Math.random() * 12) +1;
  game.total = 0;
  $('.counter-counter').html(game.total);

};


$('.reset').on('click', function() {
  reset();
});



});



 


















