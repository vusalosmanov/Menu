"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const CategoryFilter = ({ breakfastCategory, setSelectedCategory }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative w-full mt-[40px]">
            <Swiper
                modules={[Navigation]}
                spaceBetween={15}
                slidesPerView={4}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 7 },
                }}
                className="w-full"
            >
                {breakfastCategory.map((category) => (
                    <SwiperSlide key={category.id}>
                        <button
                            onClick={() => setSelectedCategory(category.id)}
                            className="w-[150px] flex flex-col items-center justify-center"
                        >
                            <Image
                                src={category.image}
                                alt={category.name}
                                className="h-[150px] object-cover relative rounded-lg"
                            />
                            <span className="mt-2 text-[24px] font-semibold absolute text-white">
                                {category.name}
                            </span>
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CategoryFilter;
