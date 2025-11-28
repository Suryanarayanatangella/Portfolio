import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

/**
 * Screenshot Carousel Component
 * Professional image slider for portfolio screenshots
 */
const ScreenshotCarousel = ({ screenshots = [], projectName = "Project" }) => {
  // Default placeholder if no screenshots provided
  const defaultScreenshots = [
    {
      url: "/portfolio/placeholder-1.jpg",
      title: "Homepage",
      description: "Main landing page"
    }
  ];

  const images = screenshots.length > 0 ? screenshots : defaultScreenshots;

  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={images.length > 1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="w-full h-full rounded-xl shadow-2xl"
      >
        {images.map((screenshot, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
              {/* Image */}
              <img
                src={screenshot.url}
                alt={screenshot.title || `${projectName} Screenshot ${index + 1}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              
              {/* Overlay with info */}
              {screenshot.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h4 className="text-white font-bold text-lg mb-1">
                    {screenshot.title}
                  </h4>
                  {screenshot.description && (
                    <p className="text-gray-200 text-sm">
                      {screenshot.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styling for Swiper navigation */}
      <style jsx>{`
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: #f6b519;
          background: rgba(17, 62, 89, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }

        :global(.swiper-button-next:after),
        :global(.swiper-button-prev:after) {
          font-size: 18px;
        }

        :global(.swiper-pagination-bullet) {
          background: #113e59;
          opacity: 0.5;
        }

        :global(.swiper-pagination-bullet-active) {
          background: #f6b519;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ScreenshotCarousel;
