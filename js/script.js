// Event pada link di klik
$('.page-scroll').on('click', function(e) {

    // Ambil isi href
    var tujuan = $(this).attr('href');

    // Tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // Pindahkan scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 99
    }, 1000, 'linier');

    e.preventDefault();

});