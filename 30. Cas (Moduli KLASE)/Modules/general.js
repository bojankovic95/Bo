function generateImage(src) {
    let img = document.createElement("img");
    img.setAttribute("src", src);
    img.style.height = "300px"

    return img;
}
//generateImage("slike/slika1.jpeg");

export default generateImage;

