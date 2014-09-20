$(document).ready(function () {
    var turn = 0;
    var play = 0;
    var win;
    function draw () {
        if ((play == 9) && (!win)) {
            alert("Draw!");
            location.reload();
        }
    }
    function reloadpage () {
        if (win) {
            location.reload();
        }
    }
    $(".box").bind("click", function () {
        if ($(this).has("div").length ? true : false ) {
            console.log("already has div");
        }else{
            if (turn == 0) {
                $(this).append('<div class="clickx"><img src="images/clickx.svg"></div>');
                turn = 1;
            }else{
                $(this).append('<div class="clicko"><img src="images/clicko.svg"></div>');
                turn = 0;
            }
            play ++;
        
        /*************************************** Check if game is won *******************************************************/
        
            /*CSS version*/
            //Check if each row, column or diagonal has a winner.
            /*first row*/
            if (($("#one").has(".clicko").length ? true : false) && ($("#two").has(".clicko").length ? true : false) && ($("#three").has(".clicko").length ? true : false)) {
                alert("Player2 wins!");
                win = true;
            }
            if (($("#one").has(".clickx").length ? true : false) && ($("#two").has(".clickx").length ? true : false) && ($("#three").has(".clickx").length ? true : false)) {
                alert("Player1 wins!");
                win = true;
            }
            /*second row*/
            if (($("#four").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#six").has(".clicko").length ? true : false)) {
                alert("Player2 wins!");
                win = true;
            }
            if (($("#four").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#six").has(".clickx").length ? true : false)) {
                alert("Player1 wins!");
                win = true;
            }
            /*third*/
            if (($("#seven").has(".clicko").length ? true : false) && ($("#eight").has(".clicko").length ? true : false) && ($("#nine").has(".clicko").length ? true : false)) {
                alert("Player2 wins!");
                location.reload();
                win = true;
            }
            if (($("#seven").has(".clickx").length ? true : false) && ($("#eight").has(".clickx").length ? true : false) && ($("#nine").has(".clickx").length ? true : false)) {
                alert("Player1 wins!");
                win = true;
            }
            /*first column*/
            if (($("#one").has(".clickx").length ? true : false) && ($("#four").has(".clickx").length ? true : false) && ($("#seven").has(".clickx").length ? true : false)) {
                alert("Player1 wins!");
                win = true;
            }
            if (($("#one").has(".clicko").length ? true : false) && ($("#four").has(".clicko").length ? true : false) && ($("#seven").has(".clicko").length ? true : false)) {
                alert("Player2 wins!");
                win = true;
            }
            /*second column*/
            if (($("#eight").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#two").has(".clickx").length ? true : false)) {
                alert("Player1 wins!");
                win = true;
            }
            if (($("#eight").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#two").has(".clicko").length ? true : false)) {
                alert("Player2 wins!");
                win = true;
            }
            /*third column*/
            if (($("#nine").has(".clickx").length ? true : false) && ($("#six").has(".clickx").length ? true : false) && ($("#three").has(".clickx").length ? true : false)) {
                alert("Player1 wins!");
                win = true;
            }
            if (($("#nine").has(".clicko").length ? true : false) && ($("#six").has(".clicko").length ? true : false) && ($("#three").has(".clicko").length ? true : false)) {
                alert("Player2 wins!");
                win = true;
            }
            /*diagonal start with one end with nine*/
            if (($("#one").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#nine").has(".clicko").length ? true : false)) {
                alert("Player2 wins!");
                win = true;
            }
            if (($("#one").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#nine").has(".clickx").length ? true : false)) {
                alert("Player1 wins!");
                win = true;
            }
            /*diagonal start with seven end with three*/
            if (($("#seven").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#three").has(".clicko").length ? true : false)) {
                alert("Player2 wins!");
                win = true;
            }
            if (($("#seven").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#three").has(".clickx").length ? true : false)) {
                alert("Player1 wins!");
                win = true;
            }
            /*Check if game is drawn*/
            reloadpage();
            draw();
        }
        /*Object version*/
        //an array prints out all the boxes that were instanciated as objects
        //each box has a clicked variable which is a boolean that turns true when a box is clicked
        
        /*Array version*/
        //create an array and initialize all nine values to 0. If a box is clicked it turns to 1 in the array.
    });
});
