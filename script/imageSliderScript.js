// Image Slide Show
const slides = document.querySelectorAll(".sliderImages");
let imageCounter = 0;
let autoSlideInterval;
let intervalTime = 5000;

// INDEX
slides.forEach(
    (slides, index) => {
        slides.style.left = `${index * 100}%`;
    }
);

// Function to start the auto-slide interval
const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        if (imageCounter < 2) {
            imageCounter++;
        } else {
            imageCounter = 0;
        }
        slideTheimage();
    }, intervalTime);
};

// Function to reset the interval
const resetAutoSlideInterval = () => {
    clearInterval(autoSlideInterval);
    startAutoSlide();
};

// NEXT BUTTON
const nextImage = () => {
    if (imageCounter == 2 ) {
        imageCounter = 0;
        slideTheimage();
    } else if (imageCounter >=0 && imageCounter <=1) {
        imageCounter++;
        slideTheimage();
    }
    resetAutoSlideInterval();
};

// PREVIUOS BUTTON
const prevImage = () => {
    if (imageCounter ==  0 ) {
        imageCounter = 2;
        slideTheimage();
    } else if (imageCounter > 0 && imageCounter <=2) {
        imageCounter--;
        slideTheimage();
    }
    resetAutoSlideInterval();
};

// Start the auto-slide interval initially
startAutoSlide();


// The funtion slideTheImage
const slideTheimage = () => {
    slides.forEach(
        (slides) => {
            slides.style.transform = `translateX(-${imageCounter * 100}%)`;
        }
    )
};