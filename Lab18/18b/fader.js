$(document).ready(function() {
    $('li').css('margin', '10px');
    $('li').attr('id', 'uw');

    $('#p1 li').click(function() {
        console.log("$(this): " + $(this));
        $(this).fadeOut(2000, function() {
            console.log("Fadeout complete!");
        });
    });

    $('#p2-card').click(function() {
        console.log("$(this): " + $('#p2 li'));
        $('#p2 li').css('visibility', 'visible').hide().fadeIn(2000, function() {
            console.log("FadeIn complete!");
        });
    });

    $('#p3 li').click(function() {
        console.log("$(this): " + $(this));
        $(this).fadeTo(2000, 0.50);
    });

    $('Button').click(function() {
        console.log("$(this): " + $(this));
        $('#p4 li').fadeToggle(2000, function() {
            console.log("Fade toggle complete!");
        });
    });
});