// 문서가 준비되면 함수 실행
$(function () {

    // 내비게이션바
    $('.main > li > a').mouseenter(function (e) {
        // a태그 기본 이벤트 제거
        e.preventDefault();
        $('.sub').stop().slideDown(400);
        $('.nav_bg').stop().animate({ height: 180 }, 400);
    });
    $('nav').mouseleave(function () {
        $('.sub').stop().slideUp(400);
        $('.nav_bg').stop().animate({ height: 0 }, 400);
    });

    // 섹션1 - 비디오 자동플레이
    // $('video').get(0).play();

    // 섹션1 - 캐로셀
    $('.slider').bxSlider({
        //자동 실행
        auto: true,
        stopAutoOnClick: true
        // 일지정지와 재실행 버튼
        // autoControls: true,
        // pager: false,
        // slideWidth: 1400
      });

    // 풀페이지 레이아웃
    $('html').stop().animate({scrollTop: 0});

    $('#indicator a').click(indicator);

    function indicator() {
        let idx = $(this).parent().index();
        console.log(idx);
        let posY = $('.section').eq(idx).offset().top;
        $('html,body').stop().animate({scrollTop: posY});
        tooltip(idx);
    }

    function tooltip(index) {
        $('#indicator a').removeClass('on');
        $('#indicator a').eq(index).addClass('on');
    }

    $('.section').mousewheel(function (e, delta) {
        if (delta > 0) {
            // 마우스휠을 위로 올림
            try {
                tooltip($(this).index() - 1);
                let prev = $(this).prev().offset().top;
                console.log(prev);
                $('html').stop().animate({ scrollTop: prev });
            } catch (err) {
                return false;
            }
        } else if (delta < 0) {
            // 마우스휠을 아래로 내림
            try {
                tooltip($(this).index() + 1);
                let next = $(this).next().offset().top;
                console.log(next);
                $('html').stop().animate({ scrollTop: next });
            } catch (err) {
                return false;
            }
        }
    });
});