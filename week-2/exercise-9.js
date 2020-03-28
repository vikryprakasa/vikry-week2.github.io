// A.
function shoutout() {
    console.log('Hello Function!');
  }
shoutout()

function calculateMultiply(num1,num2){
    return num1 * num2
}
//B.
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30
//C.
function processSentence(name,age,address,hobby){
    return (`Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan 
hobby saya adalah ${hobby}`)
    
}
processSentence('Agus',30,"Jln. Malioboro, Yogjakarta","gaming")
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);