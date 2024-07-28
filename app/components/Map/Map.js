'use client';
import React, { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import Image from 'next/image';
import LocationIcon1 from '@/app/assets/images/location-icon1.svg';
import LocationIcon2 from '@/app/assets/images/location-icon2.svg';
import LocationIcon3 from '@/app/assets/images/location-icon3.svg';
import LocationIcon4 from '@/app/assets/images/location-icon4.svg';

const SearchResultItem = ({ item }) => {
  const addressParts = [item.address, item.state, item.city, item.zip].filter(part => part); // Filter out any falsy values

  const addressString = addressParts.join(', '); // Join the parts with a comma

  return (
    <div className="flex items-center gap-[20px]">
      <div className="h-[70px] min-w-[70px] w-[70px] rounded-[11px] object-cover sm:block hidden bg-slate-200 animate-pulse"></div>
      <div>
        <h5 className="text-[20px] font-medium text-black mb-[8px]">{item.city}</h5>
        <p className="text-[16px]">{addressString}</p>
      </div>
    </div>
  );
};

const Map = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(0);
  const [userLocation, setUserLocation] = useState({ latitude: '', longitude: '' });
  const [searchData, setSearchData] = useState([]);

  const getRegistrationPoint = async () => {
    try {
      const response = await fetch('/api/registration-point', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          latitude: userLocation.latitude,
          longitude: userLocation.longitude
        })
      });
      const data = await response.json();
      setSearchData(data);
      if (data.length > 0) {
        setIsLoading(3);
      } else {
        setIsLoading(2);
      }
    } catch (error) {
      console.error('Error fetching registration points:', error);
    }
  };

  const onChangeSearch = async e => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    setIsLoading(1);

    try {
      const response = await fetch('/api/map', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ searchQuery: newQuery })
      });
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lng } = data[0].geometry.location;
        setUserLocation({ latitude: lat, longitude: lng });
        if (lat && lng) {
          await getRegistrationPoint();
        }
      }
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  };

  return (
    <>
      <section className="md:pt-[160px] pt-[120px] md:pb-[100px]">
        <div className="container">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-x-[50px]">
            <div className="relative z-10">
              <p className="font-inter mb-[20px] text-black">Finden Sie einen Registrierungsort in Ihrer Nähe</p>
              <div className="mb-[20px]">
                <div className="form-group relative">
                  <span className="absolute left-[25px] top-[18px] text-[20px]">
                    <IoIosSearch />
                  </span>
                  <input className="leading-[53px] border border-[#E0DDDD] rounded-[9px] w-full pl-[60px] px-[25px] text-[16px] font-inter bg-[#F9F9F9]" type="search" name="search" id="search" placeholder="Stadt, Postleitzahl suchen" value={searchQuery} onChange={e => onChangeSearch(e)} />
                </div>
              </div>
              <div className="bg-white md:pt-[60px] pt-[30px] md:pb-[50px] pb-[30px] md:px-[40px] px-[15px] border border-[#ECECEC] xl:rounded-[23px] rounded-[12px] xl:w-[80%] sm:w-[90%] absolute xl:left-0 sm:left-[5%] top-[130px] z-10">
                <p className="mb-[25px]">Standortvorschläge</p>
                <div className="flex flex-col gap-[20px]">{isLoading === 1 ? <div>Suchen...</div> : isLoading === 2 ? <div>Leider keine Ergebnisse gefunden.</div> : isLoading === 3 ? searchData && searchData.map((item, i) => <SearchResultItem key={i} item={item} />) : null}</div>
              </div>
            </div>
            <div className="sm:ml-0 -ml-[16px] sm:mr-0 -mr-[16px] lg:mt-0 mt-[100px]">
              <iframe
                className="xl:rounded-[35px] lg:rounded-[12px] md:h-[850px] h-[630px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.983684777575!2d-73.87364197910917!3d40.72360945437124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e394b6cc0b9%3A0xf15c2215b49863c4!2sRego%20Park%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1720777329834!5m2!1sen!2sbd"
                width="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;
