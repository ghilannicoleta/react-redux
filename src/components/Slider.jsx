// export const Slider = (props) => {
//     return(
//         <div className='flex'>
//         {props.slides.map((el, index) => {
//             return (
//                 <img alt="logo"
//                     key={index}
//                     src={el.img}
//                     className={props.getActiveSlideIndex() === index ? "block" : "hidden"} />

//             )
//         })}

//         <button
//             className="absolute top-80 pl-80 text-7xl"
//             onClick={() => propsgoToSlide(activeSlideIndex - 1, slides, setActiveSlideIndex)}
//         > &#10094;</button>
//         <button
//         className="absolute flex top-80 right-80 text-7xl"
//         onClick={() => goToSlide(activeSlideIndex + 1, slides, setActiveSlideIndex)}> &#10095; </button>
//     </div>
//     )
// }
//  export default Slider