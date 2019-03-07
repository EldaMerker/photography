$(function(){
  var nH = $('.topnav').innerHeight();// ナビの高さを取得

  var wH = $(window).height();// 表示画面の高さを取得

  var hH = wH - nH;// 表示画面とナビエリアの差分を算出

  $('.mainvidual').css('height', hH + 'px');// 算出した差分をヘッダーエリアの高さに指定
});
