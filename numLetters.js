// Create the numLetters constructor function. This function should:
//
// 1. accept a letter (either an integer or a decimal number)
// 2. return a function
// 3. the returned function should accept a number
// 4. calling the returned function with a number should log out that many letters
//

var numLetters = function(letter) {
    return new Function('integer',
        "if (integer < 0 ) {return '';}\
        var result = '';\
        for (var i = 0; i < integer; i++) {\
            result += '" + letter + "';\
        }\
        return result;"
    );
};

console.log(numLetters('a')(3.8));
// output => 'aaaa'
