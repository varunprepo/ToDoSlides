import React from 'react';

function Slides({ slides, slideIndex, prevSlide, nextSlide, resetSlides }) {

    const item = slides[slideIndex];
    const index = slideIndex;

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    data-testid="button-restart"
                    className="small outlined"
                    onClick={resetSlides}
                    disabled={index === 0}>
                    Restart
                    </button>
                <button
                    data-testid="button-prev"
                    className="small"
                    onClick={prevSlide}
                    disabled={index === 0}
                >
                    Prev
                      </button>
                <button
                    data-testid="button-next"
                    className="small"
                    onClick={nextSlide}
                    disabled={index === slides.length - 1}
                >Next
                 </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{item.title}</h1>
                <p data-testid="text">{item.text}</p>
            </div>
        </div>
    );

}

export default Slides;
