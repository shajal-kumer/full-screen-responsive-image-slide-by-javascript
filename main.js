(function(global) {

    let mySlider = function(...paras) {
       
        
        const slides = Array.from(document.querySelector("." + paras[0].container).children);
        const next = document.querySelector("#next");
        const prev = document.querySelector("#prev");
        const auto = paras[0].autoPlay;
        const intervalTime = 5000;
        let slideInterval;

        const nextSlide = () => {
            // Get Current class
            const current = document.querySelector(".current");
            // Remove current class
            current.classList.remove("current");
            // Check for next slide 
            if (current.nextElementSibling) {
                // Add current to next sibling
                current.nextElementSibling.classList.add("current");
            } else {
                // Add current to the start
                slides[0].classList.add("current");
            }
            // setTimeout(() => {
            //     current.classList.remove("current");
            // }, 200)
        }

        const prevSlide = () => {
            // Get Current class
            const current = document.querySelector(".current");
            // Remove current class
            current.classList.remove("current");
            // Check for prev slide 
            if (current.previousElementSibling) {
                // Add current to prev sibling
                current.previousElementSibling.classList.add("current");
            } else {
                // Add current to the last
                slides[slides.length - 1].classList.add("current");
            }

            // setTimeout(() => {
            //     current.classList.remove("current");
            // }, 200)
        }

        // Button Events
        next.addEventListener('click', () => {
            nextSlide();
            if (auto) {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, intervalTime)
            }
        })
        prev.addEventListener('click', () => {
            prevSlide();
            if (auto) {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, intervalTime)
            }
        })

        // auto slide 
        if (auto) {
            // Run next slide at interval time 
            slideInterval = setInterval(nextSlide, intervalTime)
        }       
    }

    global.suvo = mySlider;
   
}(window))


suvo({
    container: 'slider',
    autoPlay: false
})


    