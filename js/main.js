$(document).ready(function () {
    // 메뉴작업
    $(".navi>li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(500);
    });

    $(".navi>li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp(500);
    });

    // image 슬라이드 작업
    var imgs = 2; //이미지 개수,0,1,2까지 총3개를 imgs 변수에 저장
    var now = 0; // 0번째부터 출발, now 변수에 저장

    start(); //start() 함수 구동

    //start() 함수 만들기


    //fadeIn/fadeOut
    /*
        첫번재 요소와 형제들에게 fadeOut() 함수로 이미지를 사라지게 함
        변수 now와 변수 imgs의 값이 같다면 now에 0을
        아니면 now의 값에 1을 더한 값을 대입
        now-1 번째 이미지를 사라지게 하고
        now 번재 이미지를 나타나게 함.
    */
    /*
     function start() {
         $(".imgslide>a").eq(0).siblings().fadeOut("slow");
         setInterval(function () { slide(); }, 3000);
     }
     function slide() {
         now = now == imgs ? 0 : now += 1;
         $(".imgslide>a").eq(now - 1).fadeOut("slow");
         $(".imgslide>a").eq(now).fadeIn("slow");
     }
     */


    //좌우 구동
    /*
    function start() {
        $(".imgslide>a").eq(0).siblings().css({ "margin-left": "-800px" });
        setInterval(function () { slide(); }, 3000);
    }
    function slide() {
        now = now == imgs ? 0 : now += 1;
        $(".imgslide>a").eq(now - 1).css({ "margin-left": "-800px" });
        $(".imgslide>a").eq(now).css({ "margin-left": "0px" });
    }
    */

    //상하 구동
    function start() {
        $(".imgslide>a").eq(0).siblings().css({ "margin-tpp": "-300px" });
        setInterval(function () { slide(); }, 3000);
    }
    function slide() {
        now = now == imgs ? 0 : now += 1;
        $(".imgslide>a").eq(now - 1).css({ "margin-top": "-300px" });
        $(".imgslide>a").eq(now).css({ "margin-top": "0px" });
    }

    // 모달작업
    $(".notice li:first").click(function () {
        $("#modal").addClass("active");
    });
    /*
        $(".notice li:eq(0)").click(function () {
            $("#modal").addClass("active");
        });
    */

    /*
    $(".notice li:nth-of-type(1)").click(function () {
        $("#modal").addClass("active");
    });
    */
    //모달작업 해제
    $(".btn").click(function () {
        $("#modal").removeClass("active");
    });

});