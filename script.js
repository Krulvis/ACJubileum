$(function (document) {
    setRandomColors();
    window.setInterval(setRandomColors, 200);
});

function setRandomColors() {
    var landing = $('.landing');
    var hex = getRandomColor();
    var color = new RGBColor(hex);
    $('body').css('background-color', hex);
    $('.landing h1').css('color', 'rgb(' + (255 - color.r) + ', ' + (255 - color.g) + ',' + (255 - color.b) + ')');
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
