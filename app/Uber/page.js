import React from "react";
import AboutBanner from "@/app/components/AboutBanner/AboutBanner";
import MediaBox from "@/app/components/MediaBox/MediaBox";
import MediaBox2 from "@/app/components/MeidaBox2/MediaBox2";
import Products2 from "@/app/components/Products2/Products2";
import GetInTouch from "@/app/components/GetInTouch/GetInTouch";

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <MediaBox />
      <MediaBox2 />
      <Products2 />
      <GetInTouch />
    </div>
  );
};

export default AboutPage;