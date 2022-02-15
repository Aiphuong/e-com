import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import moreProducts from "../../../assets/icons/more-products.svg";
import CustomerCard from "../../../componens/CustomerCard";
import mockData from "../../../core/mockData/mock";

SwiperCore.use([Autoplay]);

const OurCustomer = (props) => {
  const blog = mockData.data.blog;
  return (
    <>
      <h3 className="heading">Our customer says</h3>
      <Swiper slidesPerView={4} spaceBetween={30} className="customer__swiper">
        <div className="customer__item-wrap">
          {blog?.map((item) => (
            <SwiperSlide key={item.id}>
              <CustomerCard data={item} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default OurCustomer;
