// ------複数の指定---------------------
// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });
// --------------------------------------

// 上から下にスライド  (cssにdisplay: none; が必要)
// $(function(){
//     $('.box1').slideDown();
// });

// // 下から上にスライド
// $(function(){
//     $('.box1').slideUp();
// });

// 非表示を表示させる　(cssにdisplay: none; があるものとする)
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// 表示を非常時にする　（一瞬だけ表示される）
// $(function(){
//   $('.box1').hide();
// });

// 確認問題
// 1. 要素を上から下へスライドさせた後、赤色の正方形を青色の長方形（幅200px、高さ100px）に変更してください。
// 2. 1.の後、下から上へスライドされるようにしてください。
// $(function (){
//   $('.box1').slideDown(1000, function (){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp();
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });

// マウスオーバーとマウスアウト
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// マウスクリックすると枠線が色が変わる
// $(function(){
//   $('.box1').on('click', function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });


// ---------------this-------------------------
// １つ１つ記述した例
// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   })

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   })

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });


// // thisを使用した書き換え
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });
// ----------------------------------------------

// -------------------------------------------------


$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});