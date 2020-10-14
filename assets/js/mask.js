$(document).ready(function() {

    $("#inputAddress").mask("00.000-000", {
        reverse: true
    });

    $("#inputPhone").mask("(00)00000-0000", {
        
    });

    $("#mac").mask("SS-SS-SS-SS-SS-SS", {
        translation: {
            'S': {
                pattern: /^[A-Za-z0-9]/
            }
        },
        reverse: true
    })
    $("#ip").mask("00.00.00.999")
});