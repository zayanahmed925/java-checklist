function bestFriend(name) {
    var allName = '';
    for (var i = 0; i < name.length; i++) {
        var element = name[i];
        if (element.length > allName.length) {
            allName = element
        }

    }
    return allName;

}
var friendName = ['Hridoy khan', 'Shakibul Khan', 'Ahmed sharif']
var checkname = bestFriend(friendName);
console.log(checkname);