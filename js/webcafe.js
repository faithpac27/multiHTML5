var member_lists = $('.member li:nth-child(n+2 )');
var btn_menu = $('.btn-menu');
var submenu_lists = $('.sub-menu li');

member_lists.prepend('<span aria-hidden="true">:</span>');
btn_menu.attr('role', 'button'); /* role="button"*/
submenu_lists.addClass('icon-dot-circled');