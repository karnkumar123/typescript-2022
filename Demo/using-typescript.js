var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var addButton = document.getElementById('btn');
var sumFunc = function (num1, num2) {
    return +num1 + +num2;
};
addButton.addEventListener('click', function () {
    var sum = sumFunc(+num1.value, +num2.value);
    console.log(sum);
});
