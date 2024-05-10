var domains = [
    "hotmail.com",
    "gmail.com",
    "outlook.com",
    "yahoo.com"
];

$(function () {
    $("#d").datepicker({
        maxDate: 0
    });

    $("#e").autocomplete({
        source: function (request, response) {
            var term = request.term;
            var matches = $.map(domains, function (domain) {
                return term +"@" +domain;
            });
            response(matches);
        }
    });

    $("#p").on("input", function () {
        var phone = $(this).val().replace(/\D/g, ''); 
    
        if (phone[0] === '0') {
            alert("Lütfen telefon numaranızı başında 0 olmadan giriniz!");
            phone = phone.substring(1); 
        }
    
       
        if (phone.length > 10) {
            phone = phone.substring(0, 10); 
            alert("Telefon numarası en fazla 10 hane olabilir");
        }
        var formattedPhone = phone.replace();
    
        $(this).val(formattedPhone)

    });
  $('#kedi').mouseenter(function () {
    $(this).animate({
        'border-radius': '30%',
        'background-color': '#904E40',
        'color': '#007bb6',
        'box-shadow': '0 0 10px rgba(0, 0, 0, 0.5)', 
        'font-size': '10px', 
        'padding': '10px'
    }, 200);
});
$('#kedi').mouseleave(function() {
    $(this).stop().animate({
        width: '250px', 
        height: '20rem', 
        'object-fit': 'cover', 
        'border-radius': '4rem', 
        
    }, 200);
});
$('#kedi2').mouseenter(function () {
    $(this).animate({
        'border-radius': '30%',
        'background-color': '#904E40',
        'color': '#007bb6',
        'box-shadow': '0 0 10px rgba(0, 0, 0, 0.5)', 
        'font-size': '10px', 
        'padding': '10px'
    }, 200);
});
$('#kedi2').mouseleave(function() {
    $(this).stop().animate({
        width: '250px', 
        height: '20rem', 
        'object-fit': 'cover', 
        'border-radius': '4rem', 
        
    }, 200);
});
$('#kedi3').mouseenter(function () {
    $(this).animate({
        'border-radius': '30%',
        'background-color': '#904E40',
        'color': '#007bb6',
        'box-shadow': '0 0 10px rgba(0, 0, 0, 0.5)', 
        'font-size': '10px', 
        'padding': '10px'
    }, 200);
});
$('#kedi3').mouseleave(function() {
    $(this).stop().animate({
        width: '250px', 
        height: '20rem', 
        'object-fit': 'cover', 
        'border-radius': '4rem', 
        
    }, 200);
});
$('#kedi4').mouseenter(function () {
    $(this).animate({
        'border-radius': '30%',
        'background-color': '#904E40',
        'color': '#007bb6',
        'box-shadow': '0 0 10px rgba(0, 0, 0, 0.5)', 
        'font-size': '10px', 
        'padding': '10px' 
    }, 200);
});
$('#kedi4').mouseleave(function() {
    $(this).stop().animate({
        width: '250px', 
        height: '20rem', 
        'object-fit': 'cover', 
        'border-radius': '4rem', 
        'border-color' : 'none'
        
    }, 200);
});
$('#metin').mouseenter(function() {
    $(this).stop().animate({ 
        'letter-spacing': '3px', 
        'transform': 'rotate(360deg)', 
        'font-size': '18px', 
        'opacity': '0.8',
        'background-color': '#BA4A00', 
        'margin-left': '10px' 
    }, 1000); 
}).mouseleave(function() {
    $(this).stop().animate({ 
        'letter-spacing': '0px', 
        'transform': 'rotate(0deg)', 
        'font-size': 'inherit', 
        'opacity': '1',
        'background-color': 'transparent', 
    }, 1000); 
});

$('#lin').hover(function() {
    $(this).stop().animate({
        'background-color': 'black',
        'color': 'white' 
    });
}, function() {
    $(this).stop().animate({
        'background-color': 'transparent', 
        'color': 'black' 
    });
});

$('#ins').hover(function() {
    $(this).stop().animate({
        'background-color': 'black',
        'color': 'white' 
    });
}, function() {
    $(this).stop().animate({
        'background-color': 'transparent', 
        'color': 'black' 
    });
});

$('#tw').hover(function() {
    $(this).stop().animate({
        'background-color': 'black',
        'color': 'white' 
    });
}, function() {
    $(this).stop().animate({
        'background-color': 'transparent', 
        'color': 'black' 
    });
});

$('#pin').hover(function() {
    $(this).stop().animate({
        'background-color': 'black',
        'color': 'white' 
    });
}, function() {
    $(this).stop().animate({
        'background-color': 'transparent', 
        'color': 'black' 
    });
});

$('#face').hover(function() {
    $(this).stop().animate({
        'background-color': 'black',
        'color': 'white' 
    });
}, function() {
    $(this).stop().animate({
        'background-color': 'transparent',
        'color': 'black' 
    });
});
   
});
