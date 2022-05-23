function goToSlide(slideIndex, slidesArr, stateChangeCb) {
    if(slideIndex < 0) {
        stateChangeCb(slidesArr.length - 1)
    } else if (slideIndex > slidesArr.length - 1){
        stateChangeCb(0)
    } else {
        stateChangeCb(slideIndex)
    }
}

export default goToSlide