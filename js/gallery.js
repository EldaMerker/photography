// $(function(){
//   var nH = $('.topnav').innerHeight();// ナビの高さを取得
//
//   var wH = $(window).height();// 表示画面の高さを取得
//
//   var hH = wH - nH;// 表示画面とナビエリアの差分を算出
//
//   $('.mainvidual').css('height', hH + 'px');// 算出した差分をヘッダーエリアの高さに指定
// });

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
