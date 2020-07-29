$(document).mousemove(function (event) { 
    let X = event.pageX; 
    let Y = event.pageY; 
    $(".spotlight").css( 
        "background", 
        "radial-gradient(circle at " + 
        X + 
        "px " + 
        Y + 
        "px, transparent, #000 20%)" 
    );
});

