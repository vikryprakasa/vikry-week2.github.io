/* Nama dan Posisi 
var nama ='Jason';
var posisi = 'Penjaga gawang';
if(nama=='', posisi==''){
    console.log('Harap NAMA dan PERAN DIISI!!');
}else if(nama == 'Bambang', posisi == '') {
    console.log(`Halo ${nama}, Pilih posisimu untuk memulai game!`);
} else if (posisi == 'Penyerang') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${nama}, kamu menjadi ${posisi} di Hacktiv8 FC! hasilkan goal untuk team mu menang`);  
} else if (posisi == 'Penjaga gawang') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${nama}, kamu menjadi ${posisi} di Hacktiv8 FC! lindungi gawang mu dari serangan lawan!`); 
} else if (posisi == 'Lini pertahanan') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${nama}, kamu menjadi ${posisi} di Hacktiv8 FC jaga lini pertahanan team mu!`);
} else if (posisi == 'Lini tengah') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${nama}, kamu menjadi ${posisi} di Hacktiv8 FC atur permainan team mu!`);
}else if (posisi == 'Pelatih') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${nama}, kamu menjadi ${posisi} di Hacktiv8 FC atur taktik team mu!`);
}else {
    console.log(`Nama harap diisi!`);
}

//Exercise 4
Switch Case Tanggal
var tanggal = 1
var bulan = 9
var tahun = 2200

switch(true){
    case (tahun < 1900):
    case (tahun > 2200):
    console.log('Tahun hanya mulai dari 1900-2200')
    break;
    default:
    switch(true){
        case (tanggal < 1):
        case(tanggal > 31):
        console.log('Tanggal hanya mulai dari 1-31')
        break;
        default:
        switch(bulan){
            case 1:
            console.log(`${tanggal} January ${tahun}`);
            break;
            case 2:
            console.log(`${tanggal} February ${tahun}`);
            break;
            case 3:
            console.log(`${tanggal} March ${tahun}`);
            break;
            case 4:
            console.log(`${tanggal} April ${tahun}`);
            break;
            case 5:
            console.log(`${tanggal} May ${tahun}`);
            break;
            case 6:
            console.log(`${tanggal} June ${tahun}`);
            break;
            case 7:
            console.log(`${tanggal} July ${tahun}`);
            break;
            case 8:
            console.log(`${tanggal} August ${tahun}`);
            break;
            case 9:
            console.log(`${tanggal} September ${tahun}`);
            break;
            case 10:
            console.log(`${tanggal} October ${tahun}`);
            break;
            case 11:
            console.log(`${tanggal} November ${tahun}`);
            break;
            case 12:
            console.log(`${tanggal} December ${tahun}`);
            break;  
            default:
            console.log('System not found')
            break;
        }
        break;
    }
    break;
}
*/