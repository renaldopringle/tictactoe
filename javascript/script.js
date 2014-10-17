$(document).ready(function () {
    /*Set Player 1 as first player*/
    var turn = 0;
    /*Count the number of plays made*/
    var play = 0;
    /*If win is true, the game will stop*/
    var win;
    
    /*Checks if all plays have been made and declare a draw*/
    function draw () {
        if ((play == 9) && (!win)) {
            alert("Draw!");
            location.reload();
        }
    }
    
    /*Checks if a game is won and displays the winner before reloading to start a new game*/
    function reloadpage () {
        function rel() {
            location.reload();
        }
        if (win) {
            window.setTimeout(rel,1000);
        }
    }
    
    /*Displays the winner*/
    function winner(player) {
        function displaywinner1() {
            alert("Player1 wins!");
        }
        function displaywinner2() {
            alert("Player2 wins!");
        }
        if (player == 1) {
            window.setTimeout(displaywinner1,850);
        }else{
            window.setTimeout(displaywinner2,850);
        }
        win = true;
    }
    
    $(".box").bind("click", function () {
        if ($(this).has("div").length ? true : false ) {
            console.log("already has div");
        }else{
            if (turn == 0) {
                $(this).append('<div class="clickx"><object><embed src="images/clickx.svg""></object></div>');
                turn = 1;
            }else{
                $(this).append('<div class="clicko"><object><embed src="images/clicko.svg"></object></div>');
                turn = 0;
            }
            play++;
        
        /*************************************************** Check if game is won ****************************************************************/
        
            /*CSS version*/
            //Check if each row, column or diagonal has a winner.
            /*first row*/
            if (($("#one").has(".clicko").length ? true : false) && ($("#two").has(".clicko").length ? true : false) && ($("#three").has(".clicko").length ? true : false)) {
                //alert("Player2 wins!");
                winner(2);
            }
            if (($("#one").has(".clickx").length ? true : false) && ($("#two").has(".clickx").length ? true : false) && ($("#three").has(".clickx").length ? true : false)) {
                //alert("Player1 wins!");
                winner(1);
            }
            /*second row*/
            if (($("#four").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#six").has(".clicko").length ? true : false)) {
                winner(2);
            }
            if (($("#four").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#six").has(".clickx").length ? true : false)) {
                winner(1);
            }
            /*third*/
            if (($("#seven").has(".clicko").length ? true : false) && ($("#eight").has(".clicko").length ? true : false) && ($("#nine").has(".clicko").length ? true : false)) {
                winner(2);
            }
            if (($("#seven").has(".clickx").length ? true : false) && ($("#eight").has(".clickx").length ? true : false) && ($("#nine").has(".clickx").length ? true : false)) {
                winner(1);
            }
            /*first column*/
            if (($("#one").has(".clickx").length ? true : false) && ($("#four").has(".clickx").length ? true : false) && ($("#seven").has(".clickx").length ? true : false)) {
                winner(1);
            }
            if (($("#one").has(".clicko").length ? true : false) && ($("#four").has(".clicko").length ? true : false) && ($("#seven").has(".clicko").length ? true : false)) {
                winner(2);
            }
            /*second column*/
            if (($("#eight").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#two").has(".clickx").length ? true : false)) {
                winner(1);
            }
            if (($("#eight").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#two").has(".clicko").length ? true : false)) {
                winner(2);
            }
            /*third column*/
            if (($("#nine").has(".clickx").length ? true : false) && ($("#six").has(".clickx").length ? true : false) && ($("#three").has(".clickx").length ? true : false)) {
                winner(1);
            }
            if (($("#nine").has(".clicko").length ? true : false) && ($("#six").has(".clicko").length ? true : false) && ($("#three").has(".clicko").length ? true : false)) {
                winner(2);
            }
            /*diagonal start with one end with nine*/
            if (($("#one").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#nine").has(".clicko").length ? true : false)) {
                winner(2);
            }
            if (($("#one").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#nine").has(".clickx").length ? true : false)) {
                winner(1);
            }
            /*diagonal start with seven end with three*/
            if (($("#seven").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#three").has(".clicko").length ? true : false)) {
                winner(2);
            }
            if (($("#seven").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#three").has(".clickx").length ? true : false)) {
                winner(1);
            }
            /*Check if game is drawn*/
            draw();
            reloadpage();
        }
        /*Object version*/
        //an array prints out all the boxes that were instanciated as objects
        //each box has a clicked variable which is a boolean that turns true when a box is clicked
        
        /*Array version*/
        //create an array and initialize all nine values to 0. If a box is clicked it turns to 1 in the array.
    });
});
