import CarouselHome from "../../components/carousel/CarouselHome";
import { Button } from "@material-tailwind/react";
import { Card } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";
import NewItemsCard from "../../components/card/NewItemsCard";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./HomePage.css";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

export default function homePage() {
  //eslint-disable-next-line
  const { billboard, categories, products, sub_categories } = useSelector(
    (state) => state.admin
  );

  //billboard 1,2,3,4 filter
  const billboard1 = billboard.filter(
    (item) => item.destination === "billboard-1"
  );
  const billboard2 = billboard.filter(
    (item) => item.destination === "billboard-2"
  );
  const billboard3 = billboard.filter(
    (item) => item.destination === "billboard-3"
  );
  const billboard4 = billboard.filter(
    (item) => item.destination === "billboard-4"
  );

  return (
    <div className=" container1 relative gap-8 flex flex-col top-3">
      <div className="flex ml-16">
        <div className="h-[60vh] w-[110vh]">
          {" "}
          <CarouselHome />
        </div>
        <div className="relative top-2   left-20">
          <h1 className="text-center text-[25px] font-bold text-gray-800 ">
            🔥 HOT DEAL OF THE DAY 🔥
          </h1>
          <Card className="h-[55vh] w-[40vh]  rounded-lg">
            <div>
              <img
                className="rounded-lg h-[30vh] w-[40vh] object-cover"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              />
            </div>
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <p>Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</p>
              </h5>
            </a>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $599
              </span>
              <a
                className="rounded-lg bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                href="#"
              >
                <p>Add to cart</p>
              </a>
            </div>
          </Card>
        </div>
      </div>
      <div className="relative   h-[40vh]">
        <div className="flex justify-evenly relative top-9">
          <Link
            to={`/products/${billboard1[0]?.products_id}`}
            key={billboard1[0]?.billboard_id}
          >
            <img
              src={
                billboard1.length === 0
                  ? ""
                  : `${import.meta.env.VITE_IMG_SERVER}/uploads/${
                      billboard1[0].image
                    }`
              }
              alt="Image not found"
              name="image"
              className="w-[80vh] h-[40vh] rounded-lg"
            />
          </Link>
          <Link
            to={`/products/${billboard2[0]?.products_id}`}
            key={billboard2[0]?.billboard_id}
          >
            <img
              src={
                billboard2.length === 0
                  ? ""
                  : `${import.meta.env.VITE_IMG_SERVER}/uploads/${
                      billboard2[0].image
                    }`
              }
              alt="Image not found"
              name="image"
              className="w-[80vh] h-[40vh] rounded-lg"
            />
          </Link>
        </div>
      </div>

      <div className="relative  top-10 h-[20vh] ">
        <div className="flex justify-evenly max-w-full h-full ">
          {categories &&
            categories.map((item) => (
              <Link
                to={`/categories-products/${item.id}`}
                key={item.id}
                className=" relative top-[2vh] left-[2vh] h-[15vh] w-[15vh] border border-gray-300 circle-card  hover:border-teal-400  rounded-full"
              >
                <div>
                  <img
                    className=" rounded-[100%] w-[10vh] h-[10vh] border relative top-5 left-5"
                    src={`${import.meta.env.VITE_IMG_SERVER}/uploads/${
                      item.image
                    }`}
                    alt="Description of the image"
                  />
                </div>
                <h2 className="font-bold relative top-[5vh] w-fit   left-[4vh]">
                  {item.types}
                </h2>
              </Link>
            ))}
        </div>
      </div>

      <div className=" h-[45vh] bg-[#F1EFEF] rounded-lg w-full relative top-[15vh] ">
        <div className="h-[6vh]">
          <h1 className="text-[25px] mx-10  relative top-4">New Items</h1>
        </div>

        <div className="h-[34vh]  w-[95%] flex items-center m-auto">
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className="mySwiper w-full"
          >
            {products &&
              products.map((item) => (
                <SwiperSlide key={item.products_id}>
                  <NewItemsCard
                    key={item.products_id}
                    id={item.products_id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    storage_size={item.storage_size}
                  />
                </SwiperSlide>
              ))}
          </Swiper>{" "}
        </div>
      </div>

      <div className="relative top-[15vh] h-[40vh]">
        <div className="flex justify-evenly relative top-9">
          <Link
            to={`/products/${billboard3[0]?.products_id}`}
            key={billboard3[0]?.billboard_id}
          >
            <img
              src={
                billboard3.length === 0
                  ? ""
                  : `${import.meta.env.VITE_IMG_SERVER}/uploads/${
                      billboard3[0].image
                    }`
              }
              alt="Image not found"
              name="image"
              className="w-[80vh] rounded-lg"
            />
          </Link>
          <Link
            to={`/products/${billboard4[0]?.products_id}`}
            key={billboard4[0]?.billboard_id}
          >
            <img
              src={
                billboard4.length === 0
                  ? ""
                  : `${import.meta.env.VITE_IMG_SERVER}/uploads/${
                      billboard4[0].image
                    }`
              }
              alt="Image not found"
              name="image"
              className="w-[80vh] rounded-lg"
            />
          </Link>
        </div>
      </div>
      <div className=" h-[45vh] bg-[#F1EFEF] rounded-lg w-full relative top-[15vh] ">
        <div className="h-[6vh]">
          <h1 className="text-[25px] mx-10  relative top-4">Phones</h1>
        </div>

        <div className="h-[34vh]  w-[95%] flex items-center m-auto">
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className="mySwiper w-full"
          >
            {products &&
              products
                .filter((item) => item.types === "Phone")
                .map((item) => (
                  <SwiperSlide key={item.products_id}>
                    {" "}
                    <NewItemsCard
                      key={item.products_id}
                      id={item.products_id}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      storage_size={item.storage_size}
                    />
                  </SwiperSlide>
                ))}
          </Swiper>{" "}
        </div>
      </div>

      <div className=" h-[45vh] bg-[#F1EFEF] rounded-lg w-full relative top-[15vh] ">
        <div className="h-[6vh]">
          <h1 className="text-[25px] mx-10  relative top-4">Laptops</h1>
        </div>

        <div className="h-[34vh]  w-[95%] flex items-center m-auto">
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className="mySwiper w-full"
          >
            {products &&
              products
                .filter((item) => item.types === "Laptop")
                .map((item) => (
                  <SwiperSlide key={item.products_id}>
                    {" "}
                    <NewItemsCard
                      key={item.products_id}
                      id={item.products_id}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      storage_size={item.storage_size}
                    />
                  </SwiperSlide>
                ))}
          </Swiper>{" "}
        </div>
      </div>

      <div className="h-[20vh]  w-full relative top-[15vh]">
        <h1 className="text-3xl text-center mt-10 font-extrabold animate-charcter">
          Discover a diverse range of prominent highlighter brands <br />
          unlock innovation through our extensive brand collection!
        </h1>
      </div>
      <div className="h-[45vh]  w-full relative top-[10vh]">
        <div className="absolute  top-0 left-0 right-0 bottom-0 flex flex-wrap justify-center items-center gap-4">
          {sub_categories &&
            sub_categories.map((item) => (
              <NavLink
                to={`/categories-products/${item.categories_id}/${item.sub_categories_id}`}
                className="card1 w-[20vh]"
                key={item.sub_categories_id}
              >
                <h1 className="text-center font-extrabold text-2xl">
                  {item.sub_categories_name}
                </h1>
              </NavLink>
            ))}
        </div>
      </div>
      <div className=" mt-14 m-auto">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 hover:bg-teal-400 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Discover All Brands
        </Button>
      </div>
      <div className=" h-[20vh]  w-full ">
        <div>
          <h1 className="text-3xl font-bold text-center">
            Trusted Mobile Shop In Bangladesh
          </h1>
          <h3 className="text-1xl font-light m-3">
            ElectroHub stands out as the go-to destination in Bangladesh for a
            wide range of leading smartphones, laptops, smart TVs, gadget
            accessories, and various consumer electronics. Renowned for its
            unwavering commitment to customer satisfaction, ElectroHub has
            recognized the evolving trend of online shopping in Bangladesh and
            has thus introduced its e-commerce platform. Our esteemed online
            store has earned its place as one of Bangladesh&rsquo;s top
            e-commerce websites, attracting a substantial number of visitors.
            What sets ElectroHub apart is its innovative approach to online
            shopping, featuring a cutting-edge search engine that simplifies the
            process of finding desired products for our valued customers. We are
            dedicated to revolutionizing the online shopping experience in
            Bangladesh, ensuring accessibility and convenience for all.
          </h3>
        </div>
      </div>
    </div>
  );
}
