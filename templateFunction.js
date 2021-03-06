// Create your own `template` function:
//
// • the `template` function should accept
//    1. a string of the template to parse
//    2. an `options` object for custom delimiters
//        - an `open` property for the open delimiter
//        - a `close` property for the close delimiter
// • the default delimiters the `template` function should use are:
//    1. `*(` for the opening delimiter
//    2. `)*` for the closing delimiter
// • the `template` function should return a function
// • the returned function should accept:
//    1. one argument for each placeholder in the original string
//    2. a number - this is how many times the string should be logged to the console
//
// EXAMPLE:
// in the example below `*(` is my default opening delimiter and `)*` is the default closing delimiter
// var string = "Hi, my name is Richard. And I *( emotion )* this *( thing )*!";
// var logResult = template( string );
// logResult( 'love', 'ice cream', 2 ); // logs the message "Hi, my name is Richard. And I love this ice cream!", twice
//
//
// var string = "Is <<! thing !>> healthy to <<! action !>>?";
// var logResult = template( string, {open: '<<!', close: '!>>'} );
// logResult( 'ice cream', 'consume', 7 ); // logs the message "Is ice cream healthy to consume?", seven times
//
//
// Now it's your turn!

var template = function(str, delimiter={open:'*(', close:')*'}) {

    if (delimiter) {
        open = delimiter.open;
        close = delimiter.close;
    }

    var tmpStr = str.split(open);
    var parts = [];
    parts.push(tmpStr[0]);

    for (var part of tmpStr) {
        if (part.split(close).length > 1) {
            parts.push(part.split(close)[1]);
        }
    }


    var res = function(...args){
        var res = parts[0];

        for (var i = 0; i < args.length-1; i++) {
            res += args[i];
            console.log(args[i]);
            res += parts[i+1];
            console.log(parts[i+1]);
        }

        for (var j = 0; j < args[args.length-1]; j++) {
            console.log(res);
        }

    };

    return res;
};
