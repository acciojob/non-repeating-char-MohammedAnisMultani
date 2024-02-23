function firstNonRepeatedChar(str) {
for(let i=0 ; i<str.length-1; i++){
    let value = str.charAt(i);
    let isfound = false;
    for(let j=0; j<str.length-1; j++){
        if(i!=j && value == str.charAt(j)){
            isfound = true;
        }
       
    }
    if(isfound == false){
        return value; 
       
    }
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
