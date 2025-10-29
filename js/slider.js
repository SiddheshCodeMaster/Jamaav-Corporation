class EventsSlider {
    constructor() {
        this.track = document.querySelector('.slider-track');
        this.slides = document.querySelectorAll('.slide');
        this.currentIndex = 0;
        
        document.querySelector('.prev-btn').addEventListener('click', () => this.slide('prev'));
        document.querySelector('.next-btn').addEventListener('click', () => this.slide('next'));
        
        // Optional: Auto-slide
        setInterval(() => this.slide('next'), 5000);
    }
    
    slide(direction) {
        const slideWidth = this.slides[0].offsetWidth;
        
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        } else {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        }
        
        this.track.style.transform = `translateX(-${slideWidth * this.currentIndex}px)`;
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EventsSlider();
});