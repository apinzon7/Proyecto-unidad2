$(function() {
    $('#box').dialog( { modal:true, resizable:false } ).parent().find('.ui-dialog-titlebar-close').hide();
    
    for (var i = 0; i < 2; i++) {
        $( "#elem"+i ).mouseover(function() {
            $( ".box"+i ).dialog( "open" );
        });
    
        $( "#elem"+i ).mouseout(function() {
            $( ".box"+i ).dialog( "close" );
        });
    }
    });