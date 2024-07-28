import React from 'react';
import Image from 'next/image';
import ProductShape from '@/app/assets/images/product-shape.png';
import ProductBgShape from '@/app/assets/images/product-bg.png';
import ProductEggShape from '@/app/assets/images/egg-shape2.png';

export default function Products() {
  return (
    <>
      <section className="product-area bg-cover bg-no-repeat bg-bottom md:pt-[120px] pt-[0] md:pb-[90px] pb-[60px]" style={{ backgroundImage: `url(${ProductBgShape.src})` }}>
        <div className="container">
          <div className="grid lg:grid-cols-[4fr_8fr] gap-x-[30px]">
            <div className="relative z-10 lg:mb-0 mb-[30px]">
              <Image className="absolute -left-[100px] top-[25%] -z-10 lg:block hidden" src={ProductShape} alt="Produkt Form" />
              <div className="subtitle">
                <span></span>
                <p>Unsere Produkte</p>
              </div>
              <h2 className="section-title">
                <span className="font-normal">Entdecken Sie unsere</span> Produkte
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 xl:gap-[50px] gap-[30px]">
              {/* einzelnes Feld */}
              <div className="bg-white md:rounded-[37px] rounded-[20px] lg:pt-[50px] md:pt-[30px] pt-[20px] lg:px-[40px] md:px-[25px] px-[20px] lg:pb-[50px] md:pb-[30px] pb-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
                <h1 className="2xl:text-[48px] md:text-[36px] text-[26px] font-light mb-[15px] relative z-10 lg:pl-[25px] pl-0">
                  <Image className="absolute lg:-left-[30px] -left-[5px] lg:-top-[40px] md:-top-[10px] -top-[15px] -z-10 lg:max-w-[50%] md:max-w-[25%] max-w-[60px]" src={ProductEggShape} alt="Ei Form" />
                  Alice 1
                </h1>
                <p className="text-[#525050] md:text-[20px] text-[14px]">Verfügbar für die Nutzung durch alle Cetirc-Partner, Nutzer und Händler weltweit.</p>
              </div>
              {/* einzelnes Feld */}
              <div className="bg-white md:rounded-[37px] rounded-[20px] lg:pt-[50px] md:pt-[30px] pt-[20px] lg:px-[40px] md:px-[25px] px-[20px] lg:pb-[50px] md:pb-[30px] pb-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] lg:translate-y-[55px]">
                <h1 className="2xl:text-[48px] md:text-[36px] text-[26px] font-light mb-[15px] relative z-10 lg:pl-[25px] pl-0">
                  <Image className="absolute lg:-left-[30px] -left-[5px] lg:-top-[40px] md:-top-[10px] -top-[15px] -z-10 lg:max-w-[50%] md:max-w-[25%] max-w-[60px]" src={ProductEggShape} alt="Ei Form" />
                  Alice 2
                </h1>
                <p className="text-[#525050] md:text-[20px] text-[14px]">Verfügbar für die Nutzung durch Cetirc-Partner und Organisationen weltweit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
