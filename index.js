$(document).ready(function () {
    $.getJSON("sample0915.json", function(data){
        for(var i in data){
            $("#dictionary").append("<li>" + data[i].title + "（" + data[i].meaning + "）</li>");
        }
    });
});
