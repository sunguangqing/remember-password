$(function(){
    (function(){
        $(".check").on("click", function(e){
            var _checked = $(this).prop("checked");
            if(_checked){
                $(this).siblings(".btn").addClass("on");
            }else {
                $(this).siblings(".btn").removeClass("on");
            }
        });
    })();
});