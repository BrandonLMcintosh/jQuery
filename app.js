$(() => console.log("Let’s get ready to party with jQuery!"));
$('article img').addClass('image-center');
$('article p').last().remove();
$('#title').css('font-size', `${Math.floor(Math.random() * 101)}px`);
$('ol').append($('<li>').text('this is SOOOOOOO great...'));
$('.form-control').on('keyup blur change', () => {
    $('body').css('background-color', `rgb(${$('.form-control').eq(0).val()},${$('.form-control').eq(1).val()},${$('.form-control').eq(2).val()})`);
});
$('.image-center').on('click', (evt) => evt.target.remove());
