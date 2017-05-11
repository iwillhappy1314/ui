jQuery(document).ready(function ($) {

    // ---------------------------------------------------------
    // 滚动缩小导航菜单
    // ---------------------------------------------------------
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 20) {
            $(".site-header").addClass("small");
        } else {
            $(".site-header").removeClass("small");
        }
    });


    // ---------------------------------------------------------
    // 图片遮罩，鼠标滑过显示隐藏的元素
    // ---------------------------------------------------------
    $(".ui-hover li").each(function () {
        $(this).hover(function () {
            $(this).find(".hide").fadeIn('slow');
        }, function () {
            $(this).find(".hide").fadeOut('fast');
        });
    });

    // ---------------------------------------------------------
    // 回到顶部功能
    // ---------------------------------------------------------
    var scrollDiv = $(".scroll-to-top");

    if ($(window).scrollTop() !== "0") {
        scrollDiv.fadeIn(1200);
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() === "0") {
            scrollDiv.fadeOut(350);
        } else {
            scrollDiv.fadeIn(1200);
        }

    });

    scrollDiv.click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });


    // ---------------------------------------------------------
    // 添加更多
    // ---------------------------------------------------------
    $('#add-row').on('click', function () {
        var row = $('.repeatable-fieldset:last').clone(true);
        row.addClass('new-row');
        row.insertAfter('.repeatable-fieldset:last');
        return false;
    });

    // 移除添加的元素
    $('.remove-row').on('click', function () {
        $(this).parents('tr.new-row').remove();
        return false;
    });


    // ---------------------------------------------------------
    // 在线客服
    // ---------------------------------------------------------
    $(function () {
        $(function () {
            $(".cs-div").css({
                "top": 200 + $(window).scrollTop(),
                "right": "0"
            });
            // 滚动
            $(window).scroll(function () {
                var offsetTop = 200 + $(window).scrollTop() + "px";
                $(".cs-div").animate({
                        top: offsetTop,
                        "right": "0"
                    },
                    {
                        duration: 500,
                        queue: false
                    });
            });
            // 展开
            $(window).resize(function () {
                var offsetTop = 200 + $(window).scrollTop() + "px";
                $(".cs-div").animate({
                        top: offsetTop,
                        "right": "0"
                    },
                    {
                        duration: 500,
                        queue: false
                    });
            });
            // 展开关闭
            $("#cs-close").click(function () {
                $(".cs-inner").toggle();
                $(".cs-div").toggleClass("cs-bar");
            });
        });
    });

    // ---------------------------------------------------------
    // 结束功能
    // ---------------------------------------------------------

});
