var allArray = [10, 4, 6, 8, 9, -20, 30];
var positiveArray = 0;
for (var i = 0; i < allArray.length; i++) {
    var element = allArray[i];
    if (element >= 0) {
        positiveArray = element;
    }
    else {
        break;
    }
    console.log(positiveArray);
}
