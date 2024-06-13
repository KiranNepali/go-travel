"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
type Props = {};

function AllTrekCard({}: Props) {
  const [visibleCount, setVisibleCount] = useState(9);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Increase visible count by 8
  };

  return (
    <>
      <div className="w-9/12 pb-[5rem] grid grid-cols-3  gap-10 mx-auto place-content-center place-items-center">
        {/* CARD  */}
        {PopularTrekData.slice(0, visibleCount).map((item, index) => (
          <CardContainer
            key={index}
            className="w-full   flex justify-start items-center rounded-xl cursor-pointer"
          >
            <Link
              href="/product_detail"
              className="w-full h-full flex justify-start items-start"
            >
              <CardBody className="flex w-full h-[30rem] flex-col gap-2">
                <CardItem
                  translateZ="100"
                  className="w-full h-[95%] rounded-3xl overflow-hidden"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={1000}
                    height={1000}
                    className="md:w-[40vw] w-[100vw] h-full object-cover object-center  group-hover/card:shadow-xl"
                  ></Image>
                </CardItem>
                <div className="flex gap-2 justify-between w-full">
                  {/* desc  */}
                  <div className="flex flex-col justify-between gap-1">
                    <span className="font-semibold text-nowrap text-zinc-50 text-sm">
                      {item.name}
                    </span>
                    {/* distance  */}
                    <span className="text-[12px] font-semibold text-zinc-300">
                      {item.distance}
                    </span>
                    {/* days */}
                    <span className="text-[10px] font-semibold text-zinc-300">
                      7 days
                    </span>
                    {/* rating  */}
                    <div className="flex gap-1 text-zinc-50 w-full justify-start items-center">
                      <Icon icon="material-symbols:star" />
                      <Icon icon="material-symbols:star" />
                      <Icon icon="material-symbols:star" />
                      <Icon icon="material-symbols:star" />
                    </div>
                  </div>
                  <div className="flex justify-between flex-col">
                    {/* price  */}
                    <span className="w-full text-end text-[12px] font-semibold text-zinc-500  justify-center  items-end">
                      {item.price}
                    </span>

                    <div className="flex gap-1 justify-end relative">
                          <button type="submit" className="bg-zinc-900/10 text-[12px] font-medium rounded-full px-4 hover:bg-white border-2 py-2 text-zinc-50   border-zinc-900 duration-300">
                            View details
                          </button>
                          <button type="submit" className="bg-zinc-900/10 text-[12px] font-medium rounded-full px-4 hover:bg-white border-2 py-2 text-zinc-50   border-zinc-900 duration-300">
                            Book now
                          </button>
                        </div>
                  </div>
                </div>
              </CardBody>
            </Link>
          </CardContainer>
        ))}
      </div>
      <div className="mx-auto w-full flex justify-center items-center">
        <button
          onClick={loadMore}
          className="bg-zinc-300 flex justify-center items-center gap-1 h-[2.8rem] text-sm font-medium rounded-full w-[8rem] hover:bg-white border-2 text-black  hover:border-white border-black duration-300"
        >
          <span>Load more</span>
          <Icon icon="mdi:arrow-down-drop" className="w-[1rem] h-[1rem]" />
        </button>
      </div>
    </>
  );
}

export default AllTrekCard;

const PopularTrekData = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/4b/76/cb/4b76cb130e193c6b38b5f6d626850013.jpg",
    name: "Annapurna Base Camp",
    distance: "120 km",
    rating: "5",
    price: "Rs. 25000",
    discount: "Rs. 2500", // 10% of 25000
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/af/1e/d5/af1ed5d91e1a18772a1627eea0218682.jpg",
    name: "Everest Base Camp",
    distance: "130 km",
    rating: "4.8",
    price: "Rs. 30000",
    discount: "Rs. 4500", // 15% of 30000
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/0b/5c/0c/0b5c0c2b46fd34c32e7033d1adcec783.jpg",
    name: "Manaslu Circuit",
    distance: "177 km",
    rating: "4.7",
    price: "Rs. 22000",
    discount: "Rs. 2640", // 12% of 22000
  },
  {
    id: 4,
    img: "https://i.pinimg.com/564x/8b/65/62/8b6562e9c1f5e60d45384f6955df228b.jpg",
    name: "Langtang Valley",
    distance: "75 km",
    rating: "4.5",
    price: "Rs. 18000",
    discount: "Rs. 1440", // 8% of 18000
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/f7/a8/c9/f7a8c98c77627e8ab6e2c5e97d4a232d.jpg",
    name: "Gokyo Lakes Trek",
    distance: "92 km",
    rating: "4.6",
    price: "Rs. 27000",
    discount: "Rs. 2700", // 10% of 27000
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/f7/a8/c9/f7a8c98c77627e8ab6e2c5e97d4a232d.jpg",
    name: "Gokyo Lakes Trek",
    distance: "92 km",
    rating: "4.6",
    price: "Rs. 27000",
    discount: "Rs. 2700", // 10% of 27000
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/f7/a8/c9/f7a8c98c77627e8ab6e2c5e97d4a232d.jpg",
    name: "Gokyo Lakes Trek",
    distance: "92 km",
    rating: "4.6",
    price: "Rs. 27000",
    discount: "Rs. 2700", // 10% of 27000
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/f7/a8/c9/f7a8c98c77627e8ab6e2c5e97d4a232d.jpg",
    name: "Gokyo Lakes Trek",
    distance: "92 km",
    rating: "4.6",
    price: "Rs. 27000",
    discount: "Rs. 2700", // 10% of 27000
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/f7/a8/c9/f7a8c98c77627e8ab6e2c5e97d4a232d.jpg",
    name: "Gokyo Lakes Trek",
    distance: "92 km",
    rating: "4.6",
    price: "Rs. 27000",
    discount: "Rs. 2700", // 10% of 27000
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/f7/a8/c9/f7a8c98c77627e8ab6e2c5e97d4a232d.jpg",
    name: "Gokyo Lakes Trek",
    distance: "92 km",
    rating: "4.6",
    price: "Rs. 27000",
    discount: "Rs. 2700", // 10% of 27000
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/f7/a8/c9/f7a8c98c77627e8ab6e2c5e97d4a232d.jpg",
    name: "Gokyo Lakes Trek",
    distance: "92 km",
    rating: "4.6",
    price: "Rs. 27000",
    discount: "Rs. 2700", // 10% of 27000
  },
];
