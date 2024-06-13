"use client";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
type Props = {};

function TrekDetailMain({ }: Props) {
  const [openToggleDesc, setOpenToggleDesc] = useState(false);

  // refs
  const itineraryRef = useRef(null);
  const routeRef = useRef(null);
  const inclusionRef = useRef(null);
  const exclusionRef = useRef(null);

  const toggleOpen = (index: number) => {
    if (!openToggleDesc) {
      gsap.to(`.toggle2-${index}`, {
        rotate: "180deg",
        top: "50%",
        duration: 0.5,
        transformOrigin: "center",
      });
      gsap.to(`.open-desc-${index}`, {
        opacity: 1,
        height: "5rem",
        duration: 0.5,
        ease: "power3.inOut",
      });
      setOpenToggleDesc(true);
    } else {
      gsap.to(`.toggle2-${index}`, {
        rotate: "90deg",
        top: "50%",
        duration: 0.5,
        transformOrigin: "center",
      });
      gsap.to(`.open-desc-${index}`, {
        opacity: 0,
        height: "0",
        duration: 0.5,
        ease: "power3.inOut",
      });
      setOpenToggleDesc(false);
    }
  };

  return (
    <>
      <div className="w-full h-full bg-zinc-950 text-zinc-50">
        {/* TOP IMAGE  */}
        <div className="w-full text-zinc-50 h-[40vh] relative">
          <div className="w-full z-0 absolute h-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/14989389/pexels-photo-14989389/free-photo-of-landscape-photography-of-phewa-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="hero-background-image"
              className="w-full h-full object-cover object-center"
            ></img>
            <div className="absolute top-0 left-0 opacity-[0.3]  w-full h-full bg-zinc-950 z-10"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[10rem] bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-[10rem] bg-gradient-to-b from-black to-transparent"></div>

          <div className="w-full h-full flex justify-center relative  items-center">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-[4rem]  font-semibold">Mount Manaslu</h1>
              {/* nav small  */}
              <div className="flex justify-center w-full items-center text-[13px] font-bold text-primary-200  gap-2">
                <Link href="/" className="hover:text-primary-400 text-zinc-400">
                  Home
                </Link>{" "}
                <span>·</span>{" "}
                <span className="hover:text-primary-400">
                  Mount Manaslu
                </span>
              </div>
              <span className="mt-2">Book now</span>
            </div>
          </div>
        </div>

        <div className="py-[5rem] w-full  lg:w-11/12 flex flex-col gap-5 mx-auto">
          {/* tab  link  */}
          <div className="mx-auto  w-full backdrop-blur-sm sticky top-[4rem] left-0 overflow-x-scroll md:overflow-visible lg:w-full flex justify-between font-medium items-center">
            <div className="md:w-8/12 mx-auto h-[5rem] w-11/12 overflow-x-scroll md:overflow-visible flex justify-between font-medium items-center">
              {buttonLabels.map((item) => (
                <a
                  href={`#${item.label.replace(/\s+/g, '-').toLowerCase()}`}
                  key={item.id}
                  className={`cursor-pointer text-nowrap text-zinc-300  hover:text-zinc-50 duration-200 flex justify-center items-center rounded-3xl px-5 bg-zinc-900 h-[2.5rem] text-sm`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          {/* detail  */}

          <div id="overview" className="w-11/12 lg:w-10/12 mx-auto p-3 md:p-10   bg-zinc-900 rounded-3xl">
            <div className="font-semibold mb-3 text-3xl">Overview</div>
            <div className="w-full  text-zinc-300">
              Dhaulagiri Circuit Trek, also known as Dhaulagiri Round Trek, is a classic expedition-style trek around the world’s seventh highest peak, Dhaulagiri 8167m and its broad massif of 7000m peaks. Dhaulagiri Circuit is a challenging trek in the western part of Nepal, offering full adventure and off the beaten path experience in the remote and unspoilt region of Nepal. Dhaulagiri circuit trek itinerary travels through serene, isolated regions full of natural beauty, crossing through highlands and high passes with astonishing viewpoints. The route offers constant mountains views while passing through remote villages and astonishing landscape including several high passes, dense forests and glaciers. Our 20 days Dhaulagiri circuit trek is a fully guided and supported trek with camping accommodation throughout the trek. Our journey to Dhaulagiri round trek starts with a short flight to Pokhara and then followed by an off-road drive to Darbang the next day. Our actual trek commences from Darbang as we follow the well-paced itinerary which we have meticulously devised keeping every important aspect in mind.
            </div>
          </div>

          {/* iternary  */}
          <div id="itinerary" className="w-11/12 lg:w-10/12 mx-auto p-3 md:p-10   bg-zinc-900 rounded-3xl">
            {/* tile  */}
            <div className="font-semibold mb-3 text-3xl">Itinerary</div>
            <div className="w-full h-full flex flex-col gap-2">
              {ItineraryData.map((item, index) => (
                <div
                  key={index}
                  className="w-full rounded-3xl py-4 md:py-2  overflow-hidden bg-zinc-950   items-center flex flex-col justify-between px-3 md:px-10"
                >
                  <div className="w-full h-[4rem] flex  justify-between items-center">
                    <div className="flex gap-10 items-center">
                      {/* day */}
                      <div className="font-bold justify-center items-center w-[3rem] leading-none h-[3rem] rounded-full overflow-hidden bg-clip-text text-transparent bg-gradient-to-t from-[#97efe9]  via-[#e34df4] to-[#6e5ce9]  text-[12px] flex flex-col gap-1">
                        <span>Day</span>
                        <span>{item.day}</span>
                      </div>
                      {/* title */}
                      <span className="text-sm font-medium">
                        {item.title}
                      </span>
                    </div>
                    {/* open */}
                    <div
                      onClick={() => toggleOpen(index)}
                      className="relative w-[3rem] h-[3rem]   overflow-hidden cursor-pointer"
                    >
                      <span className="absolute toggle1 bg-zinc-50 h-[2px] top-[50%] w-[15px] left-[50%] -translate-x-[50%] inline-block"></span>
                      <span
                        className={`absolute toggle2-${index} bg-zinc-50 h-[2px] top-[50%] rotate-90 w-[15px] left-[50%] -translate-x-[50%] inline-block`}
                      ></span>
                    </div>
                  </div>

                  {/* desc  */}
                  <div
                    className={`open-desc-${index} w-full border-t border-zinc-700 h-0 text-sm flex justify-start text-zinc-300 items-center  opacity-0`}
                  >
                    <span className="">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="route-map" className="w-11/12 lg:w-10/12 mx-auto p-3 md:p-10   bg-zinc-900 rounded-3xl">
            <div className="font-semibold mb-3 text-3xl">Route Map</div>
            <img src="https://res.cloudinary.com/dubzpy7hn/image/upload/v1710439884/epeak-uploads/20240314T181123722Z_dhaulagiri-circuit-trek-map.jpg" className="rounded-3xl overflow-hidded w-full h-full object-cover object-center" alt="" />
          </div>
          <div id="inclusions" className="w-11/12 lg:w-10/12 mx-auto p-3 md:p-10   bg-zinc-900 rounded-3xl">
            <div className="font-semibold mb-3 text-3xl">Inclusion</div>
            <div className="w-full h-full flex flex-col gap-2">
              {Inclusion.map((item, index) => (
                <div
                  key={index}
                  className="w-full rounded-3xl py-4 md:py-2  overflow-hidden bg-zinc-950  flex justify-center items-center  px-3 md:px-10"
                >
                  <div className=" w-full flex justify-start gap-5 items-center">
                    {/* day */}
                    <div className="font-bold justify-center items-center min-w-[3rem] p-3 leading-none min-h-[3rem] rounded-full overflow-hidden ">
                      <Icon icon="subway:tick" className="text-blue-600 w-full h-full object-cover object-center" />
                    </div>
                    {/* title */}
                    <div className="font-medium text-[15px]">
                      <span className="font-semibold">{item.title}:</span>{" "}
                      <span className="text-zinc-300">{item.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="exclusions" className="w-11/12 lg:w-10/12 mx-auto p-3 md:p-10   bg-zinc-900 rounded-3xl">
            <div className="font-semibold mb-3 text-3xl">Exclusions</div>
            <div className="w-full h-full flex flex-col gap-2">
              {Exclusion.map((item, index) => (
                <div
                  key={index}
                  className="w-full rounded-3xl py-4 md:py-2  overflow-hidden bg-zinc-950  flex justify-center items-center  px-3 md:px-10"
                >

                  <div className=" w-full flex justify-start gap-5 items-center">
                    {/* day */}
                    <div className="font-bold justify-center items-center min-w-[3rem] p-3 leading-none min-h-[3rem] rounded-full overflow-hidden ">
                      <Icon icon="fluent-emoji-flat:cross-mark" className="text-blue-600 w-full h-full object-cover object-center" />
                    </div>
                    {/* title */}
                    <div className="font-medium text-[15px]">
                      <span className="font-semibold">{item.title}:</span>{" "}
                      <span className="text-zinc-300">{item.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="fixed-dates" className="w-11/12 lg:w-10/12 mx-auto p-3 md:p-10   bg-zinc-900 rounded-3xl">
            <div className="font-semibold mb-3 text-3xl">Fixed Dates</div>
            <div className="w-full h-full flex flex-col gap-2">

              <div
                className="w-full rounded-3xl py-5  overflow-hidden bg-zinc-950  items-center flex flex-col justify-between px-3 md:px-10"
              >

                {/* table  */}
                <table className="w-full">
                  <tr className="border-b border-zinc-400 h-[3rem] text-left">
                    <th>Date</th>
                    <th>Days</th>
                    <th>Status</th>
                    <th>Group Size</th>
                  </tr>
                  <tr className="border-b h-[10rem] md:h-20 border-zinc-800 text-zinc-300 text-sm">
                    <td>
                      <div><span className="font-semibold">Start: </span>
                        2024-09-01</div>
                      <div>
                        <span className="font-semibold">End: </span>
                        2024-09-07
                      </div>
                    </td>
                    <td>45 days</td>
                    <td>Booking Open</td>
                    <td>2 - 16 PAX</td>
                  </tr>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default TrekDetailMain;

const buttonLabels = [
  { id: 1, label: "Overview" },
  { id: 2, label: "Itinerary" },
  { id: 3, label: "Route map" },
  { id: 4, label: "Inclusions" },
  { id: 5, label: "Exclusions" },
  { id: 6, label: "Fixed Dates" },
];

const ItineraryData = [
  {
    day: "01",
    title: "Travel To Pokhara From Kathmandu Valley In The West.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "02",
    title: "Explore the lakes and caves in Pokhara.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "03",
    title: "Visit the Peace Pagoda and enjoy the mountain views.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "04",
    title: "Hike to Sarangkot for sunrise.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "05",
    title: "Return to Kathmandu.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
];


const Inclusion = [

  {
    "id": 1,
    "title": "Arrival and Departure",
    "description": "Private vehicle transportation from the airport to the hotel and back."
  },
  {
    "id": 2,
    "title": "Kathmandu Hotel Accommodation",
    "description": "Four nights in a 4-star hotel in Kathmandu, with a single room and a bed and breakfast package."
  },
  {
    "id": 3,
    "title": "Greetings for Dinner",
    "description": "A welcome dinner at a typical tourist restaurant in Kathmandu with the office staff."
  },
  {
    "id": 4,
    "title": "Customs Clearance",
    "description": "Support for cargo clearance at Nepalese Customs, with charges applicable for the clearance service."
  },
  {
    "id": 5,
    "title": "Permits",
    "description": "Royalty for mountaineering expeditions and a permit fee imposed by the Nepalese government for climbing Mount Manaslu, and accessing conservation area."
  },
  {
    "id": 6,
    "title": "Representative Officer",
    "description": "One government liaison officer provided with complete equipment, salary, and accommodation."
  },
  {
    "id": 7,
    "title": "Waste Management",
    "description": "Fees for the transfer of human waste shipments and depositing garbage."
  },
  {
    "id": 8,
    "title": "Insurance",
    "description": "Insurance coverage for medical expenses and emergency rescue services for all Nepalese staff involved in the trek and expedition."
  },
  {
    "id": 9,
    "title": "Map",
    "description": "Map for Trekking and Climbing"
  },
  {
    "id": 10,
    "title": "Large Travel Bag",
    "description": "A large bag provided by Epeak Expedition"
  },
  {
    "id": 11,
    "title": "Member Transportation Services",
    "description": "Travel by road from Kathmandu to Dharapani via Besishashar, and on the return journey, go from Machha Khola back to Kathmandu, following the outlined itinerary."
  },
  {
    "id": 12,
    "title": "Transportation of Expedition Equipment",
    "description": "Transportation of essential equipment for all members and staff will be provided from Kathmandu to Arukhet via jeep, from Arukhet to Sama Gaun via helicopter, and then to the base camp by porters. On the return journey, transportation will be arranged from the base camp to Sama Gaun by porters, from Sama Gaun to Arukhet by helicopter, and from Arughat back to Kathmandu via jeep."
  },
  {
    "id": 13,
    "title": "Personal Belongings Allowance",
    "description": "Each member is allowed up to 70 kg of personal baggage during the trek, which will be carried by porters or yaks."
  },
  {
    "id": 14,
    "title": "Meal and Accommodation Provision",
    "description": "Three meals a day (breakfast, lunch, and dinner) along with tea, coffee, and accessible accommodation at hotels/lodges during the trek and at the Base Camp. Hygienic and fresh food items such as vegetables, meat, fruits, soft drinks, and juice will be regularly served throughout the expedition, with the help of helicopter flights. Well-managed base camp setup for members and staff."
  },
  {
    "id": 15,
    "title": "Baggage Carrier Service",
    "description": "Porters will be provided per member for transportation to and from the base camp."
  },
  {
    "id": 16,
    "title": "Camp Support Team",
    "description": "Experienced and well-trained base camp cook and kitchen helpers as required."
  },
  {
    "id": 17,
    "title": "Employee Compensation Package",
    "description": "Daily wages, salary, equipment, food, and clothing for all Nepalese staff and porters."
  },
  {
    "id": 18,
    "title": "Base Camp Tent",
    "description": "Each member will have an individual box tent at the Base Camp."
  },
  {
    "id": 19,
    "title": "Base Camp Infrastructure Supplies",
    "description": "Necessary tents, mattresses, pillows, dining tent, kitchen tent, communication tent, toilet and shower tent, staff tents, cooking gear, tables, and chairs."
  },
  {
    "id": 20,
    "title": "Heater",
    "description": "Heaters will be provided at the base camp in dining and other necessary camps."
  },
  {
    "id": 21,
    "title": "Light/Solar/Generator",
    "description": "Solar panel and generator for lighting, battery charging, and electronic devices at the base camp."
  },
  {
    "id": 22,
    "title": "Health Assessment Services",
    "description": "Twice medical checkups for each climber at the base camp before the summit attempt."
  },
  {
    "id": 23,
    "title": "Training",
    "description": "Training sessions on oxygen use, mask regulator, ice wall, and ladder at the base camp by UIAGM Guides."
  },
  {
    "id": 24,
    "title": "Expert Climbing Guide Assistance: Supportive Aid",
    "description": "One veteran and government-licensed climbing Sherpa per member throughout the climb, including rotations and summit attempts."
  },
  {
    "id": 25,
    "title": "Guide Compensation Package",
    "description": "Salary, equipment, food, and clothing for climbing Sherpas. Bonus: Carry bonus for Sherpas and route fixing charges."
  },
  {
    "id": 26,
    "title": "Oxygen Supply",
    "description": "Epeak oxygen cylinders provided (5 bottles for each member, 3 bottles for each high-altitude Sherpa)."
  },
  {
    "id": 27,
    "title": "Breathing Equipment",
    "description": "Epeak oxygen masks and regulators for each member and high-altitude Sherpa."
  },
  {
    "id": 28,
    "title": "Emergency Oxygen Reserves",
    "description": "Reserve oxygen cylinder, mask, and regulator with appropriate charge."
  },
  {
    "id": 29,
    "title": "Advanced Camp Facilities",
    "description": "Tents, cooking equipment, food, and climbing gear at high camps."
  },
  {
    "id": 30,
    "title": "High Camp Dining Services",
    "description": "Kitchen and dining tents at Camp I and Camp II."
  },
  {
    "id": 31,
    "title": "High Altitude Tent",
    "description": "Members will share tents in high camps."
  },
  {
    "id": 32,
    "title": "Route Setting Crew",
    "description": "Experienced Sherpas will fix the route to the summit."
  },
  {
    "id": 33,
    "title": "Satellite Phone",
    "description": "Emergency satellite phone carried by Sherpas, available for members with charge."
  },
  {
    "id": 34,
    "title": "Walkie-Talkie",
    "description": "Communication devices from Base Camp to Mountain and vice versa."
  },
  {
    "id": 35,
    "title": "Authorization Documents",
    "description": "Satellite phone and walkie-talkie permits for all members and staff."
  },
  {
    "id": 36,
    "title": "Internet Facility",
    "description": "Internet facility available at Base Camp with charge."
  },
  {
    "id": 37,
    "title": "Weather Forecast",
    "description": "Regular weather forecast reports from Meteotest, Bern (Switzerland)."
  },
  {
    "id": 38,
    "title": "Health Supplies",
    "description": "Comprehensive medical kit for members and staff."
  },
  {
    "id": 39,
    "title": "Certificate",
    "description": "Mount Manaslu climbing certificate issued by MoCTCA after a successful climb."
  }
]

const Exclusion = [
  {
    "id": 1,
    "title": "International Flight Airfare",
    "description": "Air Travel Expenses to and from Kathmandu"
  },
  {
    "id": 2,
    "title": "Nepal Entry Visa Fee",
    "description": "Charge for Nepalese Visa, priced at $125 USD for a duration of 90 days."
  },
  {
    "id": 3,
    "title": "Meal Provision",
    "description": "Lunch and Dinner arrangements while in Kathmandu, including instances of early return from Trekking or Expedition as per the scheduled itinerary."
  },
  {
    "id": 4,
    "title": "Extended Stay in Kathmandu",
    "description": "Additional accommodation nights in Kathmandu. Applicable in instances of early arrival, late departure, early return from Trekking or Expedition, or domestic flight cancellation beyond the scheduled itinerary."
  },
  {
    "id": 5,
    "title": "Insurance Coverage",
    "description": "Policy encompassing medical expenses and high-altitude evacuation costs, including trip cancellation, interruption, high-altitude rescue, air evacuation, medical treatment, repatriation, etc. *Compulsory"
  },
  {
    "id": 6,
    "title": "Individual Expenditures",
    "description": "Costs for telephone calls, internet usage, toiletries, battery recharge, hot showers, laundry services, soft drinks, beers, and any alcoholic beverages. (*Note: Soft drinks will be available for members at the base camp)."
  },
  {
    "id": 7,
    "title": "Personal Climbing Gear",
    "description": "Includes clothing, packing items, bags, personal medical kit, and all types of personal trekking and climbing equipment."
  },
  {
    "id": 8,
    "title": "Toiletries",
    "description": "Essential items such as soaps, shampoos, toilet paper, tissue paper, toothpaste, and other products used for personal hygiene and cleanliness."
  },
  {
    "id": 9,
    "title": "Filming Permit",
    "description": "Fee for special filming, camera, and drone usage permit."
  },
  {
    "id": 10,
    "title": "Internet Service",
    "description": "Excluded during the trek."
  }
]