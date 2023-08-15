// Image Slide Show
const slides = document.querySelectorAll(".sliderImages");
let imageCounter = 0;
let autoSlideInterval; // Store the interval ID

// INDEX
slides.forEach(
    (slides, index) => {
        slides.style.left = `${index * 100}%`;
    }
)

// NEXT BUTTON
const nextImage = () => {
    if (imageCounter >=0 && imageCounter <=1) {
        imageCounter++;
        console.log(`N imageCounter value ${imageCounter}`) 
        slideTheimage();
    } else {
        console.log(`imageCounter value ${imageCounter}`);
    }
}

// PREVIUOS BUTTON
const prevImage = () => {
    if (imageCounter >0 && imageCounter <=2) {
        imageCounter--;
        console.log(`P imageCounter value ${imageCounter}`)
        slideTheimage();
    } else {
        console.log(`imageCounter value ${imageCounter}`);
        // imageCounter = 0
    }
}

// AUTO MOVE 5Sec
setInterval(() => {
    if (imageCounter < 2) {
        imageCounter++;
        slideTheimage();
    } else {
        imageCounter = 0;
        slideTheimage();
    }
}, 5000);


// The funtion slideTheImage
const slideTheimage = () => {
    slides.forEach(
        (slides) => {
            slides.style.transform = `translateX(-${imageCounter * 100}%)`;
        }
    )
}
