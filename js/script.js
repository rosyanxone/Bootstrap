// (function() {

// })();

// Event pada link di klik
$('.page-scroll').on('click', function() {

    // console.log("Ok");

    // Ambil isi href
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    console.log(elemenTujuan);

});