const readline = require("readline");

const reader = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})



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

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i == arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps);
        return;
    }

    askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan) {
        if (isGreaterThan) {
            const temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;

            madeAnySwaps = true;
        }

        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
    });

};

// function dummyMethod() {
//     console.log("In outer bubble Sort")
// }
// innerBubbleSortLoop([2,4,1,5], 0, true, dummyMethod);

function absurdBubbleSort (arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr)
        }
    }

    outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});


