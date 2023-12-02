// var str = 'god is great!'
// console.log(str);
// console.log(str.length);
// for (i = 0; i < str.length - 1; i++) 
// {
//     console.log(str[i]);
// }

// //slice
// var str = 'god is great!'
// console.log(str.slice(0,12));
// console.log(str.slice(-12,-8));
// console.log(str.slice(-5,12));
// console.log(str.slice(-1,-8));
// console.log(str.slice(-4));

// //substring
// console.log(str.substring(3,8));
// console.log(str.substring(-12,-11));
// console.log(str.substring(-3,3));

// var str='god is great! i m the god'
// console.log(str.indexOf('g',6));
// console.log(str.lastIndexOf('G'));
// console.log(str.indexOf("god",1));

// var str=' god is great! i m the god '
// console.log(str)
// console.log(str.length);
// var str1=str.trim();
// console.log(str1);
// console.log(str1.length);

// var str2=str.trimStart();
// console.log(str2,str2.length);

// var str3=str.trimEnd();
// console.log(str3,str3.length);


var str = ' god is great! i m the god '
console.log(str);
str = str.replaceAll("god", "abc");
console.log(str);

var str = ' she sells seashells ny the seashore the shells she sells are surely seashells. so if she sells shells on the seashore,i am sure she sells seashore shells '
console.log(str);
str = str.replaceAll("sells", "dont sell");
console.log(str);

