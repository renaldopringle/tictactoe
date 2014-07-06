$(document).ready(function () {
    $turn = 0;
    $(".box").bind("click", function () {
        if ($(this).has("div").length ? true : false ) {
            console.log("already has div");
        }else{
            if ($turn == 0) {
                $(this).append('<div class="clickx">X</div>');
                $turn = 1;
            }else{
                $(this).append('<div class="clicko"></div>');
                $turn = 0;
            }
        }
    });
});