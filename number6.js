var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var temp = friends[0];
for (var i = 0; i < friends.length; i++) {
    for (var j = i + 1; j < friends.length; j++) {
        if (friends[j].length > friends[i].length) {
            temp = friends[j];
}
    }
}
    console.log(temp);