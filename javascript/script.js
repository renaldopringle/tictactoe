$(document).ready(function () {
    var turn = 0;
    var win = 0;
    $(".box").bind("click", function () {
        if ($(this).has("div").length ? true : false ) {
            console.log("already has div");
        }else{
            if (turn == 0) {
                $(this).append('<div class="clickx">X</div>');
                turn = 1;
            }else{
                $(this).append('<div class="clicko"></div>');
                turn = 0;
            }
        }
        /*************************************** Check if game is won *******************************************************/
        
        /*CSS version*/
        //Check if each row, column or diagonal has a winner.
        /*first row*/
        if (($("#one").has(".clicko").length ? true : false) && ($("#two").has(".clicko").length ? true : false) && ($("#three").has(".clicko").length ? true : false)) {
            alert("Player2 wins!");
            location.reload();
        }
        if (($("#one").has(".clickx").length ? true : false) && ($("#two").has(".clickx").length ? true : false) && ($("#three").has(".clickx").length ? true : false)) {
            alert("Player1 wins!");
            location.reload();
        }
        /*second row*/
        if (($("#four").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#six").has(".clicko").length ? true : false)) {
            alert("Player2 wins!");
            location.reload();
        }
        if (($("#four").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#six").has(".clickx").length ? true : false)) {
            alert("Player1 wins!");
            location.reload();
        }
        /*third*/
        if (($("#seven").has(".clicko").length ? true : false) && ($("#eight").has(".clicko").length ? true : false) && ($("#nine").has(".clicko").length ? true : false)) {
            alert("Player2 wins!");
            location.reload();
        }
        if (($("#seven").has(".clickx").length ? true : false) && ($("#eight").has(".clickx").length ? true : false) && ($("#nine").has(".clickx").length ? true : false)) {
            alert("Player1 wins!");
            location.reload();
        }
        /*first column*/
        if (($("#one").has(".clickx").length ? true : false) && ($("#four").has(".clickx").length ? true : false) && ($("#seven").has(".clickx").length ? true : false)) {
            alert("Player1 wins!");
            location.reload();
        }
        if (($("#one").has(".clicko").length ? true : false) && ($("#four").has(".clicko").length ? true : false) && ($("#seven").has(".clicko").length ? true : false)) {
            alert("Player2 wins!");
            location.reload();
        }
        /*second column*/
        if (($("#eight").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#two").has(".clickx").length ? true : false)) {
            alert("Player1 wins!");
            location.reload();
        }
        if (($("#eight").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#two").has(".clicko").length ? true : false)) {
            alert("Player2 wins!");
            location.reload();
        }
        /*third column*/
        if (($("#nine").has(".clickx").length ? true : false) && ($("#six").has(".clickx").length ? true : false) && ($("#three").has(".clickx").length ? true : false)) {
            alert("Player1 wins!");
            location.reload();
        }
        if (($("#nine").has(".clicko").length ? true : false) && ($("#six").has(".clicko").length ? true : false) && ($("#three").has(".clicko").length ? true : false)) {
            alert("Player2 wins!");
            location.reload();
        }
        /*diagonal start with one end with nine*/
        if (($("#one").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#nine").has(".clicko").length ? true : false)) {
            alert("Player2 wins!");
            location.reload();
        }
        if (($("#one").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#nine").has(".clickx").length ? true : false)) {
            alert("Player1 wins!");
            location.reload();
        }
        /*diagonal start with seven end with three*/
        if (($("#seven").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#three").has(".clicko").length ? true : false)) {
            alert("Player2 wins!");
            location.reload();
        }
        if (($("#seven").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#three").has(".clickx").length ? true : false)) {
            alert("Player1 wins!");
            location.reload();
        }
        
        /*Object version*/
        //an array prints out all the boxes that were instanciated as objects
        //each box has a clicked variable which is a boolean that turns true when a box is clicked
        
        /*Array version*/
        //create an array and initialize all nine values to 0. If a box is clicked it turns to 1 in the array.
    });
});
