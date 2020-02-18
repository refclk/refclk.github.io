/*
type your custom JavaScript here
在本文件中键入您的自定义JS脚本
升级主题文件时请注意保护本文件，防止意外覆盖。
*/
function folder_switch(div_id){
     j_id="#"+div_id;
     f_id="#f_"+div_id;
     if ($(j_id).css("display") ==="none"){
        $(j_id).css({"display":"block"});
        $(f_id).removeClass("fa-folder");
        $(f_id).addClass("fa-folder-open");
     }else{
        $(j_id).css({"display":"none"});
        $(f_id).removeClass("fa-folder-open");
        $(f_id).addClass("fa-folder");
     }
}

