$(function () {

    var num=0
    var timer=null;

     $('.page').eq(num).removeClass('active').siblings('.page').addClass('active')
    $(window).mousewheel(function (event) {

        clearTimeout(timer)

        console.log(num);
        //阻止它一滚动就会发生很多次，叫做函数截流，只能每隔三百毫秒触发一次
        timer=setTimeout(function () {
            //event.deltaY监听鼠标滚动，乡下滚动一次为-1，向上滚动一次为1
            // 因为滚动的元素索引值其实为0所以先定义一个变量为0 再根据鼠标的滚动改变这个索引

            num=num-event.deltaY

            if (num>$('.page').length-1){
                num=0
            }
            if (num<0){
                num=0
            }
            fun()
        }, 400)
        })

    $('.nav span').click(function () {
        num=$(this).index()

        fun()
    })

    function fun() {

        if (num==0){
            $('.header').css('visibility','hidden')
        }else {
            $('.header').css('visibility','visible')
        }

        //因为它的兄弟元素太多会收到影响，所以要让指定的兄弟元素消失
        $('.page').eq(num).show().siblings('section').hide()

        //排它思想
        $('.nav span').eq(num).addClass('active').siblings().removeClass('active')
        setTimeout(function () {
            $('.page').eq(num).removeClass('active').siblings('.page').addClass('active')
        },1)
        $('.page').eq(num).show().siblings('.page').hide()


    }



})