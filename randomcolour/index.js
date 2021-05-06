function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function colour() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    $(".colour").css("background-color", `rgb(${r}, ${g}, ${b})`);
    $(".colour-data").html(`R: ${r} G: ${g} B: ${b}, ${rgbToHex(r, g, b)}`);
}

$(document).ready(function() {
    let random = Math.floor(Math.random() * 2);
    switch(random) {
        case 0:
            $(".switcher").html("olour");
            document.title = "Ethan Bennett / Random Colour Generator";
            break;
        case 1:
            $(".switcher").html("olor");
            document.title = "Ethan Bennett / Random Color Generator";
            break;
    }
});