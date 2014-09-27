var GlobalStrore = function(){
        var globalStore = {
            onReady: function(callback){
                callback();
            },
            init:function(){},
            loadValues:function(){},
            getValue:function(name){
                return localStorage.getItem(name);
            },
            setValue:function(name,value){
                if (typeof value == 'object'){
                    value = JSON.stringify(value);
                }
                return localStorage.setItem(name,value);
            },
            removeOption:function(name){
                return localStorage.removeItem(name);
            }
        }
    return globalStore;
}


