// Exercise 10
/* function bandingkanAngka(angka1, angka2) {
    if(angka1 < angka2){
        return true
    }else if(angka1 === angka2){
        return -1
    }else {
        return false
    }
}
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); //false

 menit=''
  function konversiMenit(menit){
      hasil = Math.floor(menit/60)
      detik = menit % 60;
      if(detik > 10){
       return hasil + ':' + detik
    }else{
        return hasil + ':0' + detik
    }
}
 
    // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

 function xo(str) {
     if(str[0] === 'x'){
         return true

     }
     return false
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxooo')); // true
  console.log(xo('xoxooxxo')); // true
  */
  // TEST CASES
  function balikKata(kata){
    kataBalik=''
      for( i = kata.length - 1; i >= 0; i--){
        kataBalik = kataBalik + kata[i]
      }
      return kataBalik
}
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS