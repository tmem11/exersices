function checkExists(arr, number) {
    for (let index in arr) {
        if (arr[index] === number) {
            return true;
        }
    }
    return false
}
console.log(checkExists([1, 2, 3], 2))