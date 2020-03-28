
// 1.LOOPING FOR
console.log('LOOPING PERTAMA')
for(var i=1; i <= 20; i += 1){
    console.log(i + '- I love coding')
} 
console.log('LOOPING KEDUA')
for(var j=20; j >= 1; j -=1){
    console.log(j + '- I will become fullstack developer')
}

// 2.WHILE FOR
console.log('LOOPING PERTAMA')
var i=2;
while(i<=20){
    console.log(i +'- I love coding')
    i += 2
}
console.log('LOOPING KEDUA')
var j=20;
while(j>=2){
    console.log(j +'- I will become fullstack developer')
    j -= 2
}
// 3.A Ganjil Genap
for(var i=1; i <= 100; i += 1){
    if ( i % 2 == 0) {
        console.log('Genap');
    }else{
        console.log('Ganjil');
    }
}
//* B.Kelipatan 3
for(var x=1; x<= 100; x += 2){
    if(x % 3==0){
        console.log(x +' kelipatan ' + x)
    }else{
        console.log(`${''}`)
    }
}
// * C.Kelipatan 6
for(var y=1; y<= 100; y += 5){
    if(y % 6==0){
        console.log(y+' kelipatan ' + y)
    }else{
        console.log('\'\'')
    }
}
// * D.Kelipatan 10
for(var k=1; k<= 100; k += 9){
    if(k % 10==0){
        console.log(k +' kelipatan ' + k)
    }else{
        console.log('\'\'')
    }
}