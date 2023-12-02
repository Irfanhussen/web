var str = 'god is great!'
console.log(str);
console.log(str.length);
for (i = 0; i < str.length - 1; i++) 
{
    console.log(str[i]);
}


var str = 'god is great!'
console.log(str.slice(0,12));
console.log(str.slice(-12,-8));
console.log(str.slice(-5,12));
console.log(str.slice(-1,-8));
console.log(str.slice(-4));

console.log(str.substring(3,8));
console.log(str.substring(-12,-11));
console.log(str.substring(-3,3));