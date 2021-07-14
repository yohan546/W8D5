const readline = require("readline");

const reader = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

function absurdBubbleSort (arr, sortCompletionCallback) {

}

function askIfGreaterThan (el1, el2, callback) {
    reader.question ("is " + el1 + " greater than " + el2 + "?", function(input) {
        if (input === "yes") {
            callback(true);
        } else {
            callback(false);
        };
    });
};

// askIfGreaterThan(5, 10, function(answer) {
//     console.log(answer)
//     reader.close();
// }) 

function innerBubbleSort(arr, i, madeAnySwaps, outerBubbleSortLoop) {

}