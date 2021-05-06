alert('hello' + 'world');

var str1 = "hello";
var str2 = "world"
alert(str1 + str2);

var orange = 100;
var apple = 120;
if (orange < apple) {
    alert('みかんの値段がりんごより安い');
} else if (orange == apple) {
    alert('みかんとりんごの値段は同じ');
} else {
    alert('みかんの値段よりりんごより高い');
}

var num = 1;
var max = 100;
var count = 0;

while (num < max) {
    num *= 2;
    count++;
}

alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回であった');

var i;
var num = 0;

for (i = 1; i < 11; i++) {
    num += i;
}

alert('1から10まで足し算した結果は' + num + 'です');