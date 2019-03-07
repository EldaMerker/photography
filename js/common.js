$(function () {

    // bodyにdivを追加
    $('body').append('<div id="mainvidual">');

    // 追加したdivを塗りつぶしてから透明化アニメーション
    $('#mainvidual').css({
        position: 'absolute',
        left: 0, top: 0,
        width: '100%', height: '100%',
        backgroundColor: '#000',
        opacity: 100
    }).animate({
        opacity: 0
    }, 3000, function () {
        // アニメーション終了後に自身を消す
        $(this).remove();
    });

});

$(function(){
  $('.sp-menu').click(function(){
    $('.sp-menu,.topnav li').toggleClass('on');
  });
});
