let string1 = "indium";
console.log("the string ",string1);
console.log("length of string is ",string1.length);
let str2 = " ";
console.log("reversing string using char at function");
for(let i = 0 ; i< string1.length; i++){
    str2 = string1.charAt(i) + str2 ;
}
console.log("the reverse of string  ",str2);
let str3 = string1.split("");
str3 = str3.reverse();
str3 = str3.join("");
console.log("reversing string using array function ",str3);
str2 = string1.toUpperCase();
console.log("converting main string to upper case ", str2);
console.log("converting to lower case ", string1.toLocaleLowerCase());
console.log("splitting the string ",string1.split(""));