import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true, // Shows navigation dots
    arrows: false,
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // How many slides to show at once
    slidesToScroll: 1, // How many slides to scroll at once
    autoplay: true, // Auto-play slides
    autoplaySpeed: 2000, // Auto-play speed
    pauseOnHover: false,
    cssEase: "ease-in-out",
    initialSlide: 2,
  };

  return (
    <div className="  flex-row object-contain " style={{ width: "100%", margin:'0 auto '}}>
      <Slider className="h-[540px]  object-contain " {...settings}>
        <div className="h-full object-cover relative ">
        <h1 className="absolute text-9xl mobile:text-6xl  capitalize text-blue-500 tracking-widest font-bold opacity-80 top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Avenger</h1>
          <img className="h-[540px] "
            src="https://wallpaperaccess.com/full/555988.jpg"
            alt="Slide 1"
            style={{ width: "100%" }}
          />
        </div>
        <div className="h-full object-cover relative"> 
        <h1 className="absolute text-9xl mobile:text-6xl capitalize text-blue-500 tracking-widest font-bold opacity-80 top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%]">batman</h1>
          <img className="h-[540px]"
            src="https://c4.wallpaperflare.com/wallpaper/502/419/818/the-dark-knight-batman-movies-wallpaper-preview.jpg"
            alt="Slide 2"
            style={{ width: "100%" }}
          />
        </div>
        <div className="h-full object-cover relative">
        <h1 className="absolute text-9xl mobile:text-6xl capitalize text-blue-500 tracking-widest font-bold opacity-80 top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%]">avatar</h1>
          <img className="h-[540px]"
            src="https://c4.wallpaperflare.com/wallpaper/123/991/646/avatar-blue-skin-james-cameron-s-movie-avatar-movie-poster-wallpaper-preview.jpg"
            alt="Slide 3"
            style={{ width: "100%" }}
          />
        </div>
        <div className="h-full object-cover relative">
        <h1 className="absolute text-9xl mobile:text-6xl capitalize text-blue-500 tracking-widest font-bold opacity-80 top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%]">dune</h1>
          <img className="h-[540px]"
            src="https://c4.wallpaperflare.com/wallpaper/304/589/139/dune-movie-denis-villeneuve-digital-art-movie-poster-hd-wallpaper-preview.jpg"
            alt="Slide 4"
            style={{ width: "100%" }}
          />
        </div >
        <div className="h-full object-cover relative">
        <h1 className="absolute text-9xl mobile:text-6xl capitalize text-blue-500 tracking-widest font-bold opacity-80 top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%]">thor</h1>
          <img className="h-[540px]"
            src="https://c4.wallpaperflare.com/wallpaper/156/167/750/movies-thor-chris-hemsworth-black-background-wallpaper-preview.jpg"
            alt="Slide 5"
            style={{ width: "100%" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;