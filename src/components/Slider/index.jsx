import { useState, useRef } from "react";

import { Container, SliderSec, SlideCard } from "./style"; 

import { ButtonQuant } from "../ButtonQuant";
import { Button } from "../Button";

import heart from "../../assets/Heart.svg";
import heartFill from "../../assets/HeartFill.svg";
import caretLeft from "../../assets/CaretLeft.svg";
import caretRight from "../../assets/CaretRight.svg";

export function Slider({ title, data }) {
  const [hoveredStates, setHoveredStates] = useState({});
  const sliderRef = useRef(null);

  const handleMouseEnter = index => {
    setHoveredStates({ ...hoveredStates, [index]: true });
  };

  const handleMouseLeave = index => {
    setHoveredStates({ ...hoveredStates, [index]: false });
  };

  const handlePreviousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 304;
    }
  };

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 304;
    }
  };

  return(
    <Container>
      <h2 className="poppins-400-medium" >
        { title && title.charAt(0).toUpperCase() + title.slice(1) }
      </h2>

      
      <div className="slider-wrapper" >
        <img src={caretRight} id="right" onClick={handleNextSlide} />
        <img src={caretLeft} id="left" onClick={handlePreviousSlide} />

        <div className="shadow-left"></div>
        <div className="shadow-right"></div>

        <SliderSec ref={sliderRef}>
          {
            data.map((slide, index) => {
              const isHovered = hoveredStates[index];

              return(
                <SlideCard key={index} >
                  {
                    isHovered ? 
                    (<img 
                      className="favFill" 
                      src={heartFill} 
                      alt="Wishlist fill" 
                      onMouseLeave={() => handleMouseLeave(index)}
                    />) :
                    (<img 
                      className="fav"   
                      src={heart} 
                      alt="Wishlist" 
                      onMouseEnter={() => handleMouseEnter(index)}
                    />)
                  }

                  <img 
                    className="meal" 
                    src={slide.img} 
                    alt={`${slide.name} image`} 
                  />

                  <h3 className="poppins-300-bold" >{slide.name + " >"}</h3>

                  <span className="roboto-200-regular desc" >
                    { slide.desc }
                  </span>

                  <span className="roboto-600-regular price">
                    {`$ ${Number.isInteger(slide.price) ? 
                      slide.price.toFixed(2) : 
                      slide.price}`}
                  </span>

                  <div className="buttons">
                    <ButtonQuant />

                    <Button text="add" />
                  </div>
                </SlideCard>
              );
            })
          }
        </SliderSec>
      </div>
    </Container>
  );
}