jQuery(document).ready(function(){
    $("#generate").on("click", function(){
        
        var newline;
        var os = navigator.appVersion;
        if (os.indexOf("Win")!=-1) newline="\r\n";
        else if (os.indexOf("Mac")!=-1) newline="\r";
        else newline="\n";
            
        
        var uni = $("#university").val();
        if( uni == ""){
            uni = $("#university").attr("placeholder");
        }
        
        var text = "\\documentclass{artcl}"+ newline;
            text += "test = " + uni + newline;
        var base = btoa(text);
        $("#screen").text(text);
        var download = $('#download');
        download.removeAttr("Disabled");
        $(download).attr("download", "test.txt");
        $(download).attr("href","data:application/octet-stream;charset=utf-8;base64," + base);
    });
});