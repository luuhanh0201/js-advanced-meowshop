import { useEffect, useState } from "~/assets/lib";
import axios from "axios";
import { API_URL } from "~/assets/data";
import numeral from "numeral";
function HomePage() {
  const [discountProducts, setDiscountProducts] = useState([]);
  useEffect(() => {
    //slide
    const slide = () => {
      var swiper = new Swiper(".mySwiper", {
        loop: true,
        lazy: {
          enabled: true, // Bật tính năng Lazy Loading
        },
        cssMode: true,
        freeMode: true,

        spaceBetween: 10,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        allowSlideNext: true,
        allowSlidePrev: true,

        scrollbar: {
          el: ".swiper-scrollbar",
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        },
      });
      var swiper2 = new Swiper(".swiper-2", {
        loop: true,
        lazy: {
          enabled: true, // Bật tính năng Lazy Loading
        },
        cssMode: true,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
        },
        spaceBetween: 10,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        allowSlideNext: true,
        allowSlidePrev: true,

        scrollbar: {
          el: ".swiper-scrollbar",
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        },
      });
      var swiper3 = new Swiper(".swiper-blog", {
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      });
    };
    slide();
  });
  useEffect(() => {
    axios.get(`${API_URL}/products`).then((response) => {
      setDiscountProducts(response.data.data);
      console.log(response.data.data);
    });
  }, []);
  return `
  <div class="content-wrapper px-content mx-auto">
        <div
          class="w-full py-40 bg-[url('https://res.cloudinary.com/dn3k4bznz/image/upload/v1692429371/Meowshop/be8erbzaggcyoxsnhjas.webp')] bg-no-repeat bg-cover bg-center rounded-md mt-1.5 flex items-center"
        >
          <div class="inline-flex flex-col ml-11">
            <div class="font-normal text-2xl text-black">CAT SUPPLIES</div>
            <div class="font-bold text-5xl text-black mt-1.5">
              SALE UP TO 50%
            </div>
            <div
              class="inline-flex w-3/5 items-center gap-3 py-3.5 px-5 bg-detail rounded-full mt-10"
            >
              <div class="text-white font-medium text-2xl">Explore Now</div>
              <i
                class="fa-solid fa-arrow-right fa-lg"
                style="color: #ffffff"
              ></i>
            </div>
          </div>
        </div>
        <!-- list product -->
        <div class="grid grid-cols-4 gap-7 mt-14 mb-16">
          <div class="rounded-md overflow-hidden w-full relative">
            <img
              src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1692429371/Meowshop/be8erbzaggcyoxsnhjas.webp"
              alt=""
              class="w-full h-72 object-cover"
            />
            <div
              class="flex justify-center w-full absolute bottom-3 left-0 px-2"
            >
              <span
                class="cursor-pointer font-semibold rounded-md bg-white px-5 py-1.5 leading-loose shadow-shadow-btn line-clamp-1"
                >Cat quang dzno 1 ststs baah cười ỉa Food</span
              >
            </div>
          </div>
          <div class="rounded-md overflow-hidden w-full relative">
            <img
              src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1692429371/Meowshop/be8erbzaggcyoxsnhjas.webp"
              alt=""
              class="w-full h-72 object-cover"
            />
            <div
              class="flex justify-center w-full absolute bottom-3 left-0 px-2"
            >
              <span
                class="cursor-pointer font-semibold rounded-md bg-white px-5 py-1.5 leading-loose shadow-shadow-btn line-clamp-1"
                >Cat quang dzno 1 ststs baah cười ỉa Food</span
              >
            </div>
          </div>
          <div class="rounded-md overflow-hidden w-full relative">
            <img
              src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1692429371/Meowshop/be8erbzaggcyoxsnhjas.webp"
              alt=""
              class="w-full h-72 object-cover"
            />
            <div
              class="flex justify-center w-full absolute bottom-3 left-0 px-2"
            >
              <span
                class="cursor-pointer font-semibold rounded-md bg-white px-5 py-1.5 leading-loose shadow-shadow-btn line-clamp-1"
                >Cat quang dzno 1 ststs baah cười ỉa Food</span
              >
            </div>
          </div>
          <div class="rounded-md overflow-hidden w-full relative">
            <img
              src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1692429371/Meowshop/be8erbzaggcyoxsnhjas.webp"
              alt=""
              class="w-full h-72 object-cover"
            />
            <div
              class="flex justify-center w-full absolute bottom-3 left-0 px-2"
            >
              <span
                class="cursor-pointer font-semibold rounded-md bg-white px-5 py-1.5 leading-loose shadow-shadow-btn line-clamp-1"
                >Cat quang dzno 1 ststs baah cười ỉa Food</span
              >
            </div>
          </div>
          <div class="rounded-md overflow-hidden w-full relative">
            <img
              src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1692429371/Meowshop/be8erbzaggcyoxsnhjas.webp"
              alt=""
              class="w-full h-72 object-cover"
            />
            <div
              class="flex justify-center w-full absolute bottom-3 left-0 px-2"
            >
              <span
                class="cursor-pointer font-semibold rounded-md bg-white px-5 py-1.5 leading-loose shadow-shadow-btn line-clamp-1"
                >Cat quang dzno 1 ststs baah cười ỉa Food</span
              >
            </div>
          </div>
          <div class="rounded-md overflow-hidden w-full relative">
            <img
              src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1692429371/Meowshop/be8erbzaggcyoxsnhjas.webp"
              alt=""
              class="w-full h-72 object-cover"
            />
            <div
              class="flex justify-center w-full absolute bottom-3 left-0 px-2"
            >
              <span
                class="cursor-pointer font-semibold rounded-md bg-white px-5 py-1.5 leading-loose shadow-shadow-btn line-clamp-1"
                >Cat quang dzno 1 ststs baah cười ỉa Food</span
              >
            </div>
          </div>
          <div class="rounded-md overflow-hidden w-full relative">
            <img
              src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1692429371/Meowshop/be8erbzaggcyoxsnhjas.webp"
              alt=""
              class="w-full h-72 object-cover"
            />
            <div
              class="flex justify-center w-full absolute bottom-3 left-0 px-2"
            >
              <span
                class="cursor-pointer font-semibold rounded-md bg-white px-5 py-1.5 leading-loose shadow-shadow-btn line-clamp-1"
                >Cat quang dzno 1 ststs baah cười ỉa Food</span
              >
            </div>
          </div>
          <div class="rounded-md overflow-hidden w-full relative">
            <img
              src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1692429371/Meowshop/be8erbzaggcyoxsnhjas.webp"
              alt=""
              class="w-full h-72 object-cover"
            />
            <div
              class="flex justify-center w-full absolute bottom-3 left-0 px-2"
            >
              <span
                class="cursor-pointer font-semibold rounded-md bg-white px-5 py-1.5 leading-loose shadow-shadow-btn line-clamp-1"
                >Cat quang dzno 1 ststs baah cười ỉa Food</span
              >
            </div>
          </div>
        </div>
        <!-- slide -->
        <div>
          <span class="text-2xl font-medium mb-10 block text-center"
            >Deals Of The Month</span
          >
          <div class="swiper mySwiper w-full pb-10 px-6">
            <div class="swiper-wrapper w-full h-full">
             <!-- quang đã ở đây -->
             ${discountProducts
      .filter(product => product.discount >= 30)
      .map((product) => {
        return `
                <div class="swiper-slide">
                <div
                  class="swiper-slide mr-0 h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                >
                  <!-- like product -->
                  <div
                    class="rounded-md overflow-hidden hover:scale-105 transition duration-300 hover:cursor-zoom-in"
                  >
                    ${product.discount > 0
            ? `
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="55"
                      height="39"
                      viewBox="0 0 55 39"
                      fill="none"
                      class="absolute rounded-md"
                    >
                      <path
                        d="M0 38.4492V0H52.3337V38.4492L26.1668 32.5751L0 38.4492Z"
                        fill="#FFB800"
                      />
                      <span
                        class="absolute top-1 left-2 text-base text-black font-normal"
                      >
                        ${product.discount}%
                      </span>
                    </svg>`
            : ""
          }

                    <!-- like product -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 15 14"
                      fill="none"
                      class="absolute top-2.5 right-2.5 z-10 rounded-full bg-white text-center p-2.5 shadow-like-product"
                    >
                      <path
                        d="M7.38651 3.35684L6.77945 2.74247C5.35451 1.30033 2.74171 1.79799 1.79852 3.61109C1.35572 4.46388 1.25581 5.69512 2.06438 7.26648C2.84331 8.77948 4.46382 10.5918 7.38651 12.5657C10.3092 10.5918 11.9289 8.77948 12.7086 7.26648C13.5172 5.69429 13.4181 4.46388 12.9745 3.61109C12.0313 1.79799 9.4185 1.29949 7.99357 2.74164L7.38651 3.35684ZM7.38651 13.5702C-5.5954 5.1241 3.3894 -1.4681 7.23749 2.0189C7.28829 2.06475 7.33825 2.11226 7.38651 2.16144C7.43428 2.11231 7.48399 2.06503 7.53552 2.01973C11.3828 -1.46976 20.3684 5.12326 7.38651 13.5702Z"
                        fill="#00575C"
                        stroke="#00575C"
                        stroke-width="0.260504"
                        class=""
                      />
                    </svg>
                    <img
                      src="${product.images[0]}"
                      alt=""
                      class="h-56 w-full object-cover rounded-md"
                    />
                  </div>
                  <div
                    class=" content-product px-3.5 pt-3.5 pb-3 relative overflow-hidden group"
                  >
                    <div
                    class="w-12/12 uppercase text-base text-white rounded-md bg-detail font-semibold text-center py-2.5 absolute transition-all duration-300 ease-linear right-0 left-0 -bottom-12 group-hover:bottom-1 hover:bg-yellow-500 mx-3"
                    >
                      Add to cart
                    </div>
                    <div class="text-base font-normal line-clamp-1">
                    <a href="products/${product._id}">${product.name}</a>
                    </div>
                    <div class="mt-1 flex flex-row gap-0.5 items-center">
                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                      <span class="text-colors-rated-product text-sm"
                        >(83)</span
                      >
                    </div>
                    <!-- price & sold-->
                    <div
                      class="flex flex-row justify-between items-center mt-6"
                    >
                      <!-- price -->
                      <div class="flex flex-row items-center gap-0.5">
                      ${product.discount === 0
            ? `
                     
                   
                    <span class="text-detail text-xl font-medium">${numeral(
              product.price
            ).format("0,0")}</span>
                      `
            : `                    <span class="text-detail text-xl font-medium">${numeral(
              (product.price * (100 - product.discount)) / 100
            ).format("0,0")}</span> `
          }
                      <span class="text-sm text-detail font-normal"> đ</span>
                      </div>
                      <!-- sold -->
                      <div class="font-normal text-sm text-detail2">
                      ${product.quantify} sold
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                `;
      })
      .join("")}
              
             
            </div>
            <div class="swiper-pagination"></div>

            <div
              class="swiper-button-next w-12 h-12 text-center text-white after:content-['next'] bg-colors-btn-slide after:text-xl rounded-full top-calc-50%-width-minus-24 right-0"
            ></div>
            <div
              class="swiper-button-prev w-12 h-12 text-center text-white after:content-['prev'] bg-colors-btn-slide after:text-xl rounded-full top-calc-50%-width-minus-24 left-0"
            ></div>
            <div class="swiper-scrollbar hidden"></div>
          </div>
        </div>
        <!-- blog -->
        <div class="mt-10">
          <span class="text-xl font-semibold text-black">Recent Blogs</span>
          <!-- content blog -->

          <div class="swiper swiper-blog mt-7 mb-16 pb-10">
            <div class="swiper-wrapper">
              
            <div class="swiper-slide">
                <div
                  class="rounded-md overflow-hidden shadow-my-shadow relative"
                >
                  <div class="absolute left-0 top-7">
                    <svg
                      class="rounded-l-md"
                      xmlns="http://www.w3.org/2000/svg"
                      width="138"
                      height="39"
                      viewBox="0 0 138 39"
                      fill="none"
                    >
                      <path
                        d="M0.585938 38.9215V5.01074V0.455566H137.241L122.534 19.6885L137.241 38.9215H0.585938Z"
                        fill="#FFB800"
                      />
                    </svg>
                    <span
                      class="text-black text-lg font-medium absolute left-3.5 top-1.5"
                      >28.02.2023</span
                    >
                  </div>
                  <img
                    src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1692429371/Meowshop/be8erbzaggcyoxsnhjas.webp
                  "
                    alt=""
                    class="w-full h-52 object-cover"
                  />
                  <!-- main -->
                  <div class="p-6">
                    <span class="text-xl font-bold text-black line-clamp-2"
                      >TIPS FOR A CLEAN HOME AND HEALTHY CAT</span
                    >
                    <p
                      class="text-base font-normal text-gray-500 mt-5 line-clamp-4"
                    >
                      Your fabulous feline may think cat hair is the ultimate
                      accessory. If you don’t agree, start by getting a good
                      vacuum cleaner. Look for one with strong suction that has
                      a pet hair attachment. Don’t forget to vacuum chairs and
                      curtains. Don’t forget to vacuum chairs and curtains. Wear
                      [...]
                    </p>
                  </div>
                </div>
              </div>
              
              
              
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
 
    `;
}

export default HomePage;
