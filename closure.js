let z= 56;
function outerFunction(outer){
    function innferFunction(inner){
        console.log(outer);
        console.log(inner);
        console.log(z);
    }
    return innferFunction;
}

let fun = outerFunction("outer");
fun("inner");