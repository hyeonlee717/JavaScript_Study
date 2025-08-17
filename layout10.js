$('.tab-button').on('click', function () {
    let idx = $(this).index();
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(idx).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(idx).addClass('show');
})