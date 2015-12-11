$(window).load(function() {
    mCustomScrollbars();
});

function mCustomScrollbars(){
    /* 
    Параметры плагина CustomScrollbar: 
    1) Тип прокрутки (значение: "vertical" или "horizontal")
    2) Величина перемещения со сглаживанием (0 - сглаживание не используется) 
    3) Тип сглаживания перемещений 
    4) Дополнительное место снизу, только для вертикального типа прокрутки (минимальное значение: 1)
    5) Настройка высоты/ширины панели прокрутки (значение: "auto" или "fixed")
    6) Поддержка прокрутки колесиком мыши (значение: "yes" или "no")
    7) Прокрутка с помощью клавиш (значения: "yes" или "no")
    8) Скорость прокрутки (значение: 1-20, 1 соответствует самой медленной скорости)
    */
    $("#mcs_container").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",20); 
}

/* Функция для обхода ошибки с 10000 px для jquery.animate */
$.fx.prototype.cur = function(){
    if ( this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null) ) {
      return this.elem[ this.prop ];
    }
    var r = parseFloat( jQuery.css( this.elem, this.prop ) );
    return typeof r == 'undefined' ? 0 : r;
}

/* Функция для динамической загрузки содержания */
function LoadNewContent(id,file){
    $("#"+id+" .customScrollBox .content").load(file,function(){
        mCustomScrollbars();
    });
}