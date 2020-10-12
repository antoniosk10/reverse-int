module.exports = function reverse(n) {
    let arr = n.toString().split("").reverse();
    if (arr[arr.length - 1] === "-") arr.pop();
    return arr.join("");
}