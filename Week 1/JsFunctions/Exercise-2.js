function isEven(number) {
    if (number % 2 == 0) {
        return true
    }
    return false;
}
const printOddNumbers = function (arr) {
    for (let index = 0; index < arr.length; index++) {
        if (isEven(arr[index])) {
            console.log(arr[index])
        }

    }
}



const array = [1, 2, 3, 4]
printOddNumbers(array)
