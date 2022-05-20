// 버튼
$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);


// 카운트
$(function() {
    var count0 = count1 = count2 = 0;

    timeCounter();

    function timeCounter() {

        id0 = setInterval(count0Fn, 100);
        function count0Fn() {
            count0++;
            if (count0 > 29) {
                clearInterval(id0);
            } else {
                $(".number").eq(0).text(count0);
            }
        }

        id1 = setInterval(count1Fn, 20);
        function count1Fn() {
            count1++;
            if (count1 > 148) {
                clearInterval(id1);
            } else {
                $(".number").eq(1).text(count1);
            }
        }

        id2 = setInterval(count2Fn, 200);
        function count2Fn() {
            count2++;
            if (count2 > 5) {
                clearInterval(id2);
            } else {
                $(".number").eq(2).text(count2);
            }
        }
    }
    });