
$.fn.delayedInput = function(options){
    var default_options = {
        timeout    : 200,
        keyupCallback    : function(){},
        afterCallback    : function(){}
    };
    var op = $.extend(default_options, options);
    
    return $(this).each(function(){
        var _self        = this;
        var _timeout     = null;
        var _last_val    = $(this).val();
        
        $(this).keyup(function(){
            op.keyupCallback(_self);
            clearTimeout(_timeout);
            if(_last_val != $(this).val()){
                _timeout = setTimeout(function(){
                    op.afterCallback(_self);
                }, op.timeout);
            }
        });
        
    });
} 