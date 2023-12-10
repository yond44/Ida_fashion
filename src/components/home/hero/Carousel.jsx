import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import SearchItems from "./SearchItems";
import { products } from "../../assets/data/data";


const Carousel = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onSearch = (key) => {
    setValue(key)
    console.log('search',key);
  }
  return (
    <>
      <section class="carousel" aria-label="Gallery">
        <ol class="carousel__viewport">
          <li id="carousel__slide1" tabindex="0" class="carousel__slide">
            <div class="carousel__snapper">
              <img
                src="https://images.f2fcdn.net/files/niken2/kebaya-1-.png"
                alt=""
              />
            </div>
          </li>
          <li id="carousel__slide2" tabindex="0" class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide1" class="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide3" class="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide3" tabindex="0" class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide2" class="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide4" class="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide4" tabindex="0" class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide3" class="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide1" class="carousel__next">
              Go to first slide
            </a>
          </li>
        </ol>
        <aside class="carousel__navigation">
          <ol class="carousel__navigation-list">
            <li class="carousel__navigation-item">
              <a href="#carousel__slide1" class="carousel__navigation-button">
                Go to slide 1
              </a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide2" class="carousel__navigation-button">
                Go to slide 2
              </a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide3" class="carousel__navigation-button">
                Go to slide 3
              </a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide4" class="carousel__navigation-button">
                Go to slide 4
              </a>
            </li>
          </ol>
        </aside>
      </section>
    </>
  );
};

export default Carousel;
