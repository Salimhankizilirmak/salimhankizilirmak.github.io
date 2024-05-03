var programmingLanguages = [
    "Java",
    "C#",
    "Kotlin",
    "C++",
    "C",
    "JS",
    "PHP",
    "Ruby",
    "Python",
    "Groovy",
    "TypeScript",
    "Dart",
    "Vue",
    "R",
]

$(function () {

    
    $("#birthday").datepicker({
        maxDate : 0
    });


   
    $("#pl").autocomplete({
        source:programmingLanguages
    })
});