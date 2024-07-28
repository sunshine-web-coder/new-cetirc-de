import React from 'react';
import GetStartedBanner from '../components/GetStartedBanner/GetStartedBanner';
import GetStartedDetails from '../components/GetStartedDetails/GetStartedDetails';
import WhyUs from '@/app/components/WhyUs/WhyUs';
import AliceWork1 from '@/app/components/AliceWork1/AliceWork1';
import AliceWork2 from '@/app/components/AliceWork2/AliceWork2';
import Security from '@/app/components/Security/Security';
import Cta from '@/app/components/Cta/Cta';

const GetStartedPage = () => {
  return (
    <div>
      <GetStartedBanner />
      <GetStartedDetails />
      <WhyUs />
      <div id="alice-1" className="pt-3">
        <AliceWork1 />
      </div>
      <div id="alice-2">
        <AliceWork2 />
      </div>
      <Security />
      <Cta />
    </div>
  );
};

export default GetStartedPage;
