var member_lists = $('.member li:nth-child(n+2 )');
var menu_items = $('.menu-item');
var btn_menu = $('.btn-menu');
var submenu_lists = $('.sub-menu li');
var sections = $('.board section');
var tabs = $('.tab');
member_lists.prepend('<span aria-hidden="true">:</span>');
btn_menu.attr('role', 'button'); /* role="button"*/
submenu_lists.addClass('icon-dot-circled');

// btn_menu.click
btn_menu.on('click', function(e){
  //e.preventDefault(); //클릭 이벤트 값을 e로 받고, 기본이벤트를 취소
  // menu_items.removeClass('menu-act');//화면에 뿌려주기 전에 지워주기
  // $(this).parent().addClass('menu-act');// this:이벤트가 발생한 객체, 부모 객체를 찾아가서 menu-act 클래스를 추가

  // var current_menu_item= $(e.parent());
  // console.log(current_menu_item);
  

  /*토글기능*/
  var current_menu_item = $(this).parent().hasClass('menu-act');
  e.preventDefault(); //클릭 이벤트 값을 e로 받고, 기본이벤트를 취소
  if(current_menu_item){
    $(this).parent().removeClass('menu-act');
  } else{
    menu_items.removeClass('menu-act');
    $(this).parent().addClass('menu-act');
  } 
})

tabs.on('click', function(e){
  e.preventDefault();
  sections.removeClass('tab-act');
  $(this).parent().parent().addClass('tab-act');
});