$(document).ready(function () {

  // 처음엔 흰 로고 보이게, 검정 로고 숨김
  $('.logo_w').show();
  $('.logo_b').hide();

  // 메인 메뉴 li에 마우스 진입
  $('.main_menu > ul > li').on('mouseenter', function () {
    if (!$('.header_box').hasClass('active')) {
      $('.header_box').addClass('active');
      $('.logo_w').hide();
      $('.logo_b').show();
      $('.main_menu > ul > li > a').css('color', '#000');
    }
  });

  // 헤더 전체에서 마우스 벗어남
  $('.header_box').on('mouseleave', function () {
    if ($('.header_box').hasClass('active')) {
      $('.header_box').removeClass('active');
      $('.logo_b').hide();
      $('.logo_w').show();
      $('.main_menu > ul > li > a').css('color', '#fff');
    }
  });

});