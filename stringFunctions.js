let string1 = "indium";
console.log("the string ",string1);
// finding length of string

console.log("length of string is ",string1.length);
let str2 = " ";
// reversing the string

console.log("reversing string using char at function");
for(let i = 0 ; i< string1.length; i++){
    str2 = string1.charAt(i) + str2 ;
}
console.log("the reverse of string  ",str2);

// reversing string using split and array
let str3 = string1.split("");
str3 = str3.reverse();
str3 = str3.join("");
console.log("reversing string using array function ",str3);

// other string function
str2 = string1.toUpperCase();
console.log("converting main string to upper case ", str2);
console.log("converting to lower case ", string1.toLocaleLowerCase());
console.log("splitting the string ",string1.split(""));

//finding index of a letter in string
console.log("finding index of u", string1.indexOf("u"));

//finding last index of letter
console.log("last index of i ",string1.lastIndexOf("i"));