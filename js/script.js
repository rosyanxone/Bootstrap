// --- PUNYA PAK DHIKA ---
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


// -- PUNYA YT TRAVERSY MEDIA ---
// $('.page-scroll').on('click', function(e) {

//     if (this.hash !== '') {
//         e.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate({
//             scrollTop: $(hash).offset.top
//         }, 800);
//     }
// });


// -- PUNYA YT DEV ED ---
// function smoothScroll(target, duration) {
//     var target = document.querySelector(target);
//     var targetPosition = target.getBoundingClientRect();

//     console.log(targetPosition);
// }

// smoothScroll('.page-scroll', 1000);