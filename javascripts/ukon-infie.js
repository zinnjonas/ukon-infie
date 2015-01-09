jQuery(document).ready(function(){
    var text;
    var header;

    $("#generate").on("click", function(){
        // Getting the newline style of the current OS
        var newline;
        var os = navigator.appVersion;
        if (os.indexOf("Win")!=-1) newline="\r\n";
        else if (os.indexOf("Mac")!=-1) newline="\r";
        else newline="\n";

        // define all the Variables
        var lang = $("#lang").val();
        var uni = $("#university").val();
        var department = $('#department').val();
        var course = $('#course').val();
        var short = $('#short_course').val();
        var term = $('#term').val();
        var group = $('#group').val();
        var names = $('#names').val();
        var number = $('#assignment_number').val();
        var deadline = $('#deadline').val();
        var table = $("#table").val();

        if( uni == ""){
            uni = $("#university").attr("placeholder");
        }
        if( department == ""){
            department = $("#department").attr("placeholder");
        }
        if( names == ""){
            names = $("#names").attr("placeholder");
        }
        if( number == ""){
            number = "0";
        }

        text = "\\documentclass[a4paper]{article}"+ newline + newline;
        text += "\\usepackage[";
        if( $('#multilang')[0].checked){
            text  +="lang=";
        }
        text += lang;
        if( $('#linebreak')[0].checked){
            text += ",break";
        }
        if($('#draft')[0].checked){
            text += ",draft";
        }
        if($('#head')[0].checked){
            text += ",topExercise";
        }
        if($('#noPoints')[0].checked){
            text += ",noPoints";
        }
        if($('#bubble')[0].checked){
            text += ",bubble";
        }
        text += "," + table;
        text += "]{ukon-infie}" + newline +newline;

            text += "\\University{" + uni +"}" + newline;
            text += "\\Department{" + department +"}" + newline;
        if( short != "" && course != ""){
            text += "\\Lecture["+ short +"]{" + course +"}" +newline;
        }else if(course != ""){
            text += "\\Lecture{" + course +"}" +newline;
        }
        if( term != ""){
            text += "\\Term{"+term+"}" + newline;
        }
        if( group != ""){
            text += "\\Group{" + group +"}" + newline;
        }
        text += "\\Names{" + names + "}" + newline + newline;

        text += "\\begin{document}" + newline;

        text += "\t\\begin{ukon-infie}";
        if( deadline != ""){
            text += "[" + deadline + "]";
        }
        text += "{" + number + "}" +newline;
        text += "\t\\end{ukon-infie}" + newline;

        text += "\\end{document}" + newline;


        var base = btoa(text);
        $("#screen").text(text);

        $("#screen").each(function(i,block){
            hljs.highlightBlock(block);
        });
        var download = $('#download');
        download.removeAttr("Disabled");
        $('#work').removeAttr("Disabled");
    });
    jQuery('#download').on("click", function(){
        $.savefile({
            'filename': 'custom_content',
            'extension': 'tex',
            'content': text
        })
    });
    jQuery('#deadline').datetimepicker();
    jQuery('#work').on("click", function(){
        $.get("https://raw.githubusercontent.com/zinnjonas/ukon-infie/master/ukon-infie.sty", function(data){
            header = data;
        });
        var file = $.fileURL("test.tex", text);
        var header_url = $.fileURL("header.tex", header);
        var action = "https://www.overleaf.com/docs?snip_uri="+file+"&snip_name=test.tex";
        //+"&snip_uri[]="+header_url+"&snip_name[]=test.tex&snip_name[]=header.tex";
        $('#overleaf').attr("action", action);
    });
});
