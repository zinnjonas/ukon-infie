jQuery(document).ready(function(){
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

        var text = "\\documentclass[a4paper]{article}"+ newline+ newline;

            text += "\\usepackage[" +lang + "]{ukon-infie}" + newline +newline;

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
        $(download).attr("download", "test.txt");
        $(download).attr("href","data:application/octet-stream;charset=utf-8;base64," + base);
    });
    jQuery('#deadline').datetimepicker();
});
