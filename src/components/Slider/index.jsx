import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { Container, SliderSec, SlideCard } from "./style"; 

import { ButtonQuant } from "../ButtonQuant";
import { Button } from "../Button";

import heart from "../../assets/Heart.svg";
import heartFill from "../../assets/HeartFill.svg";
import pencil from "../../assets/Pencil.svg";
import caretLeft from "../../assets/CaretLeft.svg";
import caretRight from "../../assets/CaretRight.svg";

export function Slider({ title, data }) {
  const [hoveredStates, setHoveredStates] = useState({});
  const sliderRef = useRef(null);
  const { role } = useAuth();
  const navigate = useNavigate();

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
            data.map(({ id, imageUrl, name, desc, price }, index) => {
              const isHovered = hoveredStates[index];

              return(
                <SlideCard key={id} >
                  {
                    role === USER_ROLE.ADMIN ?
                    <img
                      className="pencil"
                      src={pencil} 
                      alt="Wishlist fill" 
                      onClick={() => navigate(`/update-meal/${id}`)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    /> :

                    isHovered ? 
                    <img 
                      className="favFill" 
                      src={heartFill} 
                      alt="Wishlist fill" 
                      onMouseLeave={() => handleMouseLeave(index)}
                    /> :

                    <img 
                      className="fav"   
                      src={heart} 
                      alt="Wishlist" 
                      onMouseEnter={() => handleMouseEnter(index)}
                    />
                  }
                  
                  <div className="meal-info">
                    <img 
                      className="meal" 
                      src={imageUrl}
                      alt={`${name} image`} 
                    />

                    <h3 
                      onClick={() => navigate(`/meal/${id}`)}
                      className="poppins-300-bold" 
                    >
                      {name + " >"}
                    </h3>

                    <span className="roboto-200-regular desc" >
                      { desc }
                    </span>

                    <span className="roboto-600-regular price">
                      {`$ ${Number.isInteger(price) ? 
                        price.toFixed(2) : 
                        price}`}
                    </span>
                    
                    {
                      role === USER_ROLE.USER &&
                      <div className="buttons">
                        <ButtonQuant />

                        <Button text="add" />
                      </div>
                    }
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