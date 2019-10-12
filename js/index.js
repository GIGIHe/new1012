$(function(){
     var copyright_date = new Date();
    //获取当前年
    var copyright_year=copyright_date.getFullYear();
    $(".year").html(copyright_year);

    // 判断游览器的类型是否为ie6 7 8 9
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    }
    if ((/msie [9|10]/i.test(navigator.userAgent))){
        // $(".c4conboxstep").show();
        // $(".c4conbox").css({
        //     borderWidth: '1px',
        //     borderStyle: 'dashed',
        //     borderColor: '#b4daf8'
        // })
    }

    var wow = new WOW({
        boxClass: 'wow', 
        animateClass: 'animated', 
        offset: 20, 
        mobile: true, 
        live: true 
    })
    //增加wow方法
    $.fn.extend({
        animateCss: function (animationName, callback) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                if (callback) {
                    callback();
                }
            });
            return this;
        }
    });
    $('.infofenshunav .item').mouseenter(function(){
        $('.infofenshucon').animateCss('jello');
    })
    $('.lookbtn a').mouseenter(function(){
        $('.time p').animateCss('jello');
    })
    // 右侧
    $('.close').click(function () {
        $(this).parent().slideUp(300, function () {
            $('.online').slideDown();
        });
    });
    $('.online').click(function () {
        $('.online').slideUp(300, function () {
            $('.fixed_r').slideDown();
        });

    });
    under();//国考考情早知道随机
    fixedl();//左侧边栏随机
    infofenshunav();//课表随机
	//返回顶部
	$(".fixedtop").click(function(){
                $("html,body").animate({scrollTop:0}, 500);
    })
    // a href 对应跳转位置的id
    $('.fixed a,.banner_box a').click(function () {
        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
        });
    // top的固定
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop>1200){
            $(".zgHead").addClass('fixed');
        }else{
            $(".zgHead").removeClass('fixed');
        }
    })

    $(".fenbunav li").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('li').removeClass('hover');
             $(".fenbucon").hide().eq(index).slideDown(500);
             // .find('.xilie li').mouseenter(function(){
             //        $(this).addClass('hover').siblings('li').removeClass('hover');
             //        $(this).parent('.xilie').siblings('.keshow').find('.table').eq($(this).index()).slideDown(500)
             // })
        })
    })
    // 二级切换
    // $(".xilie li").each(function(index){
    //     $(this).click(function(){
    //          $(this).addClass("hover").siblings("li").removeClass("hover");
    //          $(this).parents(".xilie").siblings('.keshow').find('.tablew').hide().eq(index).slideDown();
    //          console.log($(this).parents(".xilie").siblings('.keshow').find('table'))
    //     })
    // })

        $(".xilie li").click(function(){
             $(this).addClass("hover").siblings("li").removeClass("hover");
             $(this).parents(".xilie").siblings('.keshow').find('.tablew').hide().eq($(this).index()).slideDown();
             console.log($(this).parents(".xilie").siblings('.keshow').find('table'))
        })
    $(".tabdl a").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('a').removeClass('hover');
             $(".table").hide().eq(index).fadeIn(200);
        })
    })
    $(".infofenshunav .item").each(function(index){
        $(this).mouseenter(function(){
            $(this).addClass('hover').siblings('.item').removeClass('hover');
             $(".infofenshucon").hide().eq(index).show(0);
        })
    })
    $(".topp").click(function(){
        $("html , body").animate({scrollTop:0},800);
    });
    $(".guan").click(function(){
        $(".fixedl").hide();
    });

function under() {
  var num = $(".under .aa").length;
  var btnLight = setInterval(function(){
    $(".under .aa").removeClass("active");
    var random = Math.floor(Math.random()*num);
    $(".under .aa").eq(random).addClass("active");
  },1500)
  $(".under .aa").mouseenter(function(){
    $(".under .aa").removeClass("active");
    $(this).addClass("active");
    clearInterval(btnLight);
  }).mouseout(function(){
    btnLight = setInterval(function(){
      $(".under .aa").removeClass("active");
      var random = Math.floor(Math.random()*num);
      $(".under .aa").eq(random).addClass("active");
    },1500)
  })
}
function fixedl() {
      var num = $(".dl a").length;
    var btnLight = setInterval(function(){
      $(".dl a").removeClass("hover");
      var random = Math.floor(Math.random()*num);
      $(".dl a").eq(random).addClass("hover");
    },1500)
    $(".dl a").mouseenter(function(){
      $(".dl a").removeClass("hover");
      $(this).addClass("hover");
      clearInterval(btnLight);
    }).mouseout(function(){
      btnLight = setInterval(function(){
        $(".dl a").removeClass("hover");
        var random = Math.floor(Math.random()*num);
        $(".dl a").eq(random).addClass("hover");
      },1500)
    })
}
function infofenshunav() {
      var num = $(".infofenshunav .item").length;
      var btnLight = setInterval(function(){
      $(".infofenshunav .item").removeClass("hover");
      var random = Math.floor(Math.random()*num);
      $(".infofenshunav .item").eq(random).addClass("hover");
      $(".infofenshucon").hide().eq(random).show(0);
      $('.infofenshucon').animateCss('jello');
    },8000)
    $(".infofenshunav .item").mouseenter(function(){
      $(".infofenshunav .item").removeClass("hover");
      $(this).addClass("hover");

      clearInterval(btnLight);
    }).mouseout(function(){
      btnLight = setInterval(function(){
        $(".infofenshunav .item").removeClass("hover");
        var random = Math.floor(Math.random()*num);
        $(".infofenshunav .item").eq(random).addClass("hover");
        $(".infofenshucon").hide().eq(random).show(0);
        $('.infofenshucon').animateCss('jello');
      },8000)
    })
}
$(".add_nav span").each(function(index){
    $(this).mouseenter(function(){
        $(this).addClass('add').siblings('span').removeClass('add');
         $(".add_tab").hide().eq(index).fadeIn(200);
    })
})
})

