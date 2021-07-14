

let arraySize = 40;
let min = 3;
let max = 250;
let array = [arraySize];
generateArray();
function generateArray() {
    for (var i = 0; i < arraySize; i++) {
        array[i] = generateArrayValue(min, max);
        if (array[i] == array[i - 1]) {
            array[i] = generateArrayValue(min, max)
        }
    }
}


function generateArrayValue() {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log("generated array", array);

//merge sort
//insertion sort



bubbleSort(array);
function bubbleSort(array) {
    sortedArray = Array.from(array);
    for (i = 0; i <= arraySize; i++) {
        for (var j = 0; j < arraySize - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                let x = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = x;
            }
        }
    }
}
console.log("bubbleSort", sortedArray);

selectionSort(array);
function selectionSort(array) {
    sortedArray1 = Array.from(array);
    for (i = 0; i < arraySize; i++) {
        var min = i;
        for (var j = i + 1; j < arraySize; j++) {
            if (sortedArray1[j] < sortedArray1[min]) {
                min = j;
            }
        }
        if (min != i) {
            var temp = sortedArray1[min];
            sortedArray1[min] = sortedArray1[i];
            sortedArray1[i] = temp;
        }

    }
}
console.log("selection", sortedArray1);

insertionSort(array);
function insertionSort(array) {
    sortedArray2 = Array.from(array);
    var j = 0;
    var key = 0;
    for (i = 1; i < arraySize; i++) {
        key = sortedArray2[i];
        j = i - 1;
        while (j >= 0 && sortedArray2[j] > key) {
            sortedArray2[j + 1] = sortedArray2[j];
            j = j - 1;
        }
        sortedArray2[j + 1] = key;
    }
}
console.log("insertion", sortedArray2)