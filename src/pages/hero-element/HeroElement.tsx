import { DetailsCard } from "@@pages/hero-element/components/DetailsCard";
import Rb19Background from "@@assets/images/hero-element/background.png";
import Rb19Foreground from "@@assets/images/hero-element/foreground.png";
import { useParallax } from "react-scroll-parallax";

export const HeroElement = () => {
  const { ref: backgroundRef } = useParallax<HTMLImageElement>({
    speed: -10,
    translateY: [-100, 100],
  });
  const { ref: foregroundRef } = useParallax<HTMLImageElement>({
    speed: 10,
  });

  return (
    <main className="overflow-x-hidden">
      <div className="relative h-screen w-screen">
        <img
          ref={backgroundRef}
          src={Rb19Background}
          alt="Monaco Background"
          className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
        />

        <img
          ref={foregroundRef}
          src={Rb19Foreground}
          alt="Red Bull Car"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />

        <div className="absolute mt-32 flex h-full px-10 py-10 text-white lg:mt-0 lg:flex-col lg:justify-around">
          <div>
            <h1 className="font-bullsBold text-7xl lg:text-9xl">Monaco</h1>
            <h1 className="font-bullsBold text-7xl lg:text-9xl">Grand Prix</h1>
          </div>
          <DetailsCard
            date="24 - 27 Nov 2023"
            location="Monaco"
            className="hidden lg:flex"
          />
        </div>

        <div className="to- absolute bottom-0 h-[180px] w-full bg-gradient-to-t from-[#00162BFF]"></div>
      </div>

      <div className="-mt-2 bg-[#00162BFF] px-6 py-16">
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          pharetra nunc elit, sit amet ultricies elit tristique nec. Morbi ut
          consectetur felis, vitae eleifend dui. Nunc ac dignissim neque, eu
          convallis ipsum. Nunc nec nisi augue. Quisque sit amet quam nisi.
          Quisque vulputate risus neque, nec lobortis mauris volutpat dignissim.
          Phasellus in erat consequat quam scelerisque ultrices. Duis justo
          nunc, convallis sed sollicitudin vel, imperdiet vel tellus. Integer
          purus nulla, cursus a maximus varius, rhoncus in eros. Phasellus non
          lacus et mi luctus sodales. Nullam blandit vestibulum volutpat. Sed at
          augue at nibh maximus eleifend. Praesent nisi diam, vehicula in urna
          vitae, fermentum suscipit nulla. Nulla dictum pulvinar elit, a varius
          sapien hendrerit id. Maecenas nec euismod nulla. Maecenas pretium
          tincidunt malesuada. Proin lacinia, mauris et tempus commodo, nisi
          nisl congue arcu, non congue justo ex ac neque. Nam vitae tincidunt
          elit. Fusce sed erat vel arcu sodales molestie. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Suspendisse sit amet congue
          mi. Ut sagittis hendrerit nisi, a hendrerit elit pretium et. Aliquam
          in justo lobortis, commodo felis et, dapibus turpis. Maecenas ligula
          lacus, eleifend in nibh et, porta ultricies sem. Pellentesque eget
          nulla nisl. Vestibulum aliquam laoreet eros, ut consequat est
          vestibulum eu. Aliquam erat volutpat. Nunc id turpis sed mauris
          maximus blandit eu eget urna. Nulla fermentum ipsum et dolor euismod
          laoreet. Suspendisse ut lectus laoreet libero placerat sollicitudin.
          Nulla facilisi. Sed non diam sodales, aliquam tellus non, dapibus
          ligula. Maecenas interdum dapibus mi ornare auctor. Cras eleifend at
          tortor vel luctus. Curabitur venenatis sollicitudin sollicitudin.
          Pellentesque ullamcorper tristique nunc id cursus. Nam id sodales
          quam. Nulla a fringilla dolor, pulvinar tempus ex. Cras posuere
          lobortis odio at interdum. Fusce maximus metus nec velit vehicula
          pretium. Sed sed lacus elit. Morbi eleifend convallis arcu vitae
          accumsan. Vivamus interdum aliquam sodales. Proin vitae ex accumsan,
          aliquet ipsum at, dapibus risus. Donec at turpis sagittis, vehicula
          eros sit amet, fringilla mi. Mauris semper volutpat purus et bibendum.
          Sed vitae mi nec ex rhoncus dignissim in sit amet orci. Nullam ac
          justo sed ex ultrices dignissim a nec neque. Suspendisse ac varius
          felis. Ut in ullamcorper elit, et rhoncus risus. Praesent ultricies
          nulla urna. Quisque molestie pharetra metus, in rutrum nunc pretium
          non.
        </p>
      </div>
    </main>
  );
};
