// --- PUNYA PAK DHIKA ---
// Event pada link di klik
$('.page-scroll').on('click', function(e) {

    // Ambil isi href
    var tujuan = $(this).attr('href');

    // Tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // Pindahkan scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

});

// PARALLAX

// About
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll + '%)'
    });


    // Portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {

        $('.portfolio .img-thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });

    }

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