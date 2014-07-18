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
        /*first row*/
        if (($("#one").has(".clicko").length ? true : false) && ($("#two").has(".clicko").length ? true : false) && ($("#three").has(".clicko").length ? true : false)) {
            alert("clicko wins!");
        }
        if (($("#one").has(".clickx").length ? true : false) && ($("#two").has(".clickx").length ? true : false) && ($("#three").has(".clickx").length ? true : false)) {
            alert("clickx wins!");
        }
        /*second row*/
        if (($("#four").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#six").has(".clicko").length ? true : false)) {
            console.log("clicko wins!");
        }
        if (($("#four").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#six").has(".clickx").length ? true : false)) {
            console.log("clickx wins!");
        }
        /*third*/
        if (($("#seven").has(".clicko").length ? true : false) && ($("#eight").has(".clicko").length ? true : false) && ($("#nine").has(".clicko").length ? true : false)) {
            console.log("clicko wins!");
        }
        if (($("#seven").has(".clickx").length ? true : false) && ($("#eight").has(".clickx").length ? true : false) && ($("#nine").has(".clickx").length ? true : false)) {
            console.log("clickx wins!");
        }
        /*first column*/
        if (($("#one").has(".clickx").length ? true : false) && ($("#four").has(".clickx").length ? true : false) && ($("#seven").has(".clickx").length ? true : false)) {
            console.log("clickx wins!");
        }
        if (($("#one").has(".clicko").length ? true : false) && ($("#four").has(".clicko").length ? true : false) && ($("#seven").has(".clicko").length ? true : false)) {
            console.log("clicko wins!");
        }
        /*second column*/
        if (($("#eight").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#two").has(".clickx").length ? true : false)) {
            console.log("clickx wins!");
        }
        if (($("#eight").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#two").has(".clicko").length ? true : false)) {
            console.log("clicko wins!");
        }
        /*third column*/
        if (($("#nine").has(".clickx").length ? true : false) && ($("#six").has(".clickx").length ? true : false) && ($("#three").has(".clickx").length ? true : false)) {
            console.log("clickx wins!");
        }
        if (($("#nine").has(".clicko").length ? true : false) && ($("#six").has(".clicko").length ? true : false) && ($("#three").has(".clicko").length ? true : false)) {
            console.log("clicko wins!");
        }
        /*diagonal start with one end with nine*/
        if (($("#one").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#nine").has(".clicko").length ? true : false)) {
            console.log("clicko wins!");
        }
        if (($("#one").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#nine").has(".clickx").length ? true : false)) {
            console.log("clickx wins!");
        }
        /*diagonal start with seven end with three*/
        if (($("#seven").has(".clicko").length ? true : false) && ($("#five").has(".clicko").length ? true : false) && ($("#three").has(".clicko").length ? true : false)) {
            console.log("clicko wins!");
        }
        if (($("#seven").has(".clickx").length ? true : false) && ($("#five").has(".clickx").length ? true : false) && ($("#three").has(".clickx").length ? true : false)) {
            console.log("clickx wins!");
        }
    });
});
