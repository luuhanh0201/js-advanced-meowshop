import { useEffect } from "~/assets/lib";
("use strict");

function ProductDetailPage({ name }) {
  console.log(name);
  useEffect(() => {
    const handleOther = () => {
      console.log("quang");

      const $ = document.querySelector.bind(document);
      console.log($("#group-rated"));
      $("#group-rated").onclick = function (e) {
        var ElementActive = $("#group-rated .rated-active");
        if (ElementActive) {
          if (e.target.closest(".opacity")) {
            if (ElementActive === e.target.parentElement) {
              e.target.parentElement.classList.remove("rated-active");
            } else {
              ElementActive.classList.remove("rated-active");
              e.target.parentElement.classList.add("rated-active");
            }
          }
        } else {
          e.target.parentElement.classList.add("rated-active");
        }
      };
      // sử lý click accessories
      $("#list-accessories").onclick = function (e) {
        // Element đang active
        var accessoriesActive = $(".accessories-active");
        var elementTarget = e.target.closest("#img-accessory");
        if (elementTarget) {
          if (accessoriesActive) {
            if (elementTarget === accessoriesActive) {
              accessoriesActive.classList.remove("accessories-active");
            } else {
              accessoriesActive.classList.remove("accessories-active");
              e.target.classList.add("accessories-active");
            }
          } else {
            elementTarget.classList.add("accessories-active");
          }
        }
      };
      // sử lý tăng giảm số lượng
      $("#less").onclick = function () {
        var input = document.getElementById("number-input");
        var value = parseInt(input.value);

        if (value > 1) {
          input.value = value - 1;
        }
      };

      $("#plus").onclick = function () {
        var input = document.getElementById("number-input");
        var value = parseInt(input.value);
        input.value = value + 1;
      };
      $("#number-input").onblur = function () {
        var input = document.getElementById("number-input");
        var value = input.value;
        var newValue = "";

        for (var i = 0; i < value.length; i++) {
          if (!isNaN(value[i])) {
            newValue += value[i];
          }
        }
        if (newValue) {
          input.value = newValue;
        } else {
          input.value = 1;
        }
      };
    };
    handleOther();

    const slideSwiper = () => {
      var swiper4 = new Swiper(".swiper-product-more", {
        loop: true,
        lazy: {
          enabled: true, // Bật tính năng Lazy Loading
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

      var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
        lazy: {
          enabled: true, // Bật tính năng Lazy Loading
        },
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        lazy: {
          enabled: true, // Bật tính năng Lazy Loading
        },
        autoplay: {
          delay: 3000, // Thời gian chuyển đổi giữa các slide
          disableOnInteraction: false, // Không tắt autoplay khi tương tác người dùng
        },
        spaceBetween: 10,
        slidesPerView: 1,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

      // slide products

      var swiper1 = new Swiper(".swiper-product", {
        loop: true,
        lazy: {
          enabled: true, // Bật tính năng Lazy Loading
        },
        cssMode: true,
        pagination: {
          el: ".swiper-pagination",
        },
        spaceBetween: 10,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
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
    };
    slideSwiper();
  }, []);
  return `
  <div class="scroll-smooth box-border relative">
  <style>
      .mySwiper .swiper-slide-thumb-active {
          opacity: 1;
      }
  </style>
  <div class="content-wrapper font-Roboto mx-auto relative">
      <main class="bg-bg-product-detail">
          <div class="content px-content pb-20">
              <!-- phân trang -->
              <div class="pt-3 mt-2px">
                  <span class="text-xs font-normal text-black pr-1">Home /</span>
                  <span class="text-xs font-normal text-black pr-1">Cat Accessories /</span>
                  <span class="text-xs font-semibold text-black pr-1">Sunglasses for Cats</span>
              </div>
              <!-- content -->
              <div class="bg-white rounded-md p-7 mt-4 flex gap-12">
                  <!-- content-left -->
                  <div class="w-3/5">
                      <!-- group--slide -->
                      <div class="w-full flex flex-row-reverse max-h-414px gap-2">
                          <!-- slide -->
                          <div class="swiper mySwiper2 basis-11/12">
                              <div class="swiper-wrapper h-full w-full">
                                  <div class="swiper-slide rounded-md overflow-hidden">
                                      <img
                                      src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                                      class="w-full h-full object-cover" />
                                  </div>
                                  <div class="swiper-slide rounded-md overflow-hidden">
                                      <img
                                      src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                                      class="w-full h-full object-cover" />
                                  </div>
                                  <div class="swiper-slide rounded-md overflow-hidden">
                                      <img
                                      src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                                      class="w-full h-full object-cover" />
                                  </div>
                                  <div class="swiper-slide rounded-md overflow-hidden">
                                      <img
                                      src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                                      class="w-full h-full object-cover" />
                                  </div>
                              </div>
                              <div
                                  class="swiper-button-next text-black text-center w-10 h-10 rounded-full bg-white after:content-['next'] after:text-1.5"
                              ></div>
                              <div
                                  class="swiper-button-prev text-black text-center w-10 h-10 rounded-full bg-white after:content-['prev'] after:text-1.5"
                              ></div>
                          </div>
                          <!-- thumbs -->

                          <div thumbsSlider="" class="swiper mySwiper basis-1/12">
                              <div class="swiper-wrapper flex flex-col h-full w-full gap-2">
                                  <div
                                      class="swiper-slide opacity-40 w-full h-1/6 rounded-md overflow-hidden cursor-pointer"
                                  >
                                      <img
                                      src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                                      class="block w-full h-full object-cover" />
                                  </div>

                                  <div
                                      class="swiper-slide opacity-40 w-full h-1/6 rounded-md overflow-hidden cursor-pointer"
                                  >
                                      <img
                                      src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                                      class="block w-full h-full object-cover" />
                                  </div>
                                  <div
                                      class="swiper-slide opacity-40 w-full h-1/6 rounded-md overflow-hidden cursor-pointer"
                                  >
                                      <img
                                      src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                                      class="block w-full h-full object-cover" />
                                  </div>
                                  <div
                                      class="swiper-slide opacity-40 w-full h-1/6 rounded-md overflow-hidden cursor-pointer"
                                  >
                                      <img
                                      src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                                      class="block w-full h-full object-cover" />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!-- option share -->
                      <div class="mt-5 flex flex-row items-center">
                          <span class="text-base font-normal mr-3">Share:</span>
                          <!-- group-share -->
                          <div class="flex flex-row items-center gap-2">
                          <i class="fa-brands fa-facebook" style="color: #00575c;"></i>
                          <i class="fa-brands fa-facebook-messenger" style="color: #00575c;"></i>
                          <i class="fa-brands fa-twitter" style="color: #00575c;"></i>
                          <i class="fa-brands fa-pinterest" style="color: #00575c;"></i>
                          </div>
                      </div>
                      <!-- product-ratings -->
                      <div class="mt-8">
                          <div class="text-base font-semibold text-black mb-4">Product ratings</div>
                          <div class="grid grid-cols-[auto,1fr] justify-between items-center gap-6">
                              <div>
                                  <!-- rating rate -->
                                  <span class="text-3xl text-color-star mr-1.5">4.8</span>
                                  <span class="text-color-star">out of 5</span>
                                  <!-- group star -->
                                  <div class="flex flex-row gap-0.5 mt-1">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                  </div>
                              </div>
                              <!-- option rated -->
                              <div class="flex flex-wrap justify-end gap-2" id="group-rated">
                                  <div class="style-rated-option rated-active">
                                      <div class="opacity absolute w-full h-full left-0 top-0 z-10"></div>
                                      <div>All</div>
                                      <div>(17,5k)</div>
                                  </div>
                                  <div class="style-rated-option">
                                      <div class="opacity absolute w-full h-full left-0 top-0 z-10"></div>
                                      <div>5 star</div>
                                      <div>(10,5k)</div>
                                  </div>
                                  <div class="style-rated-option">
                                      <div class="opacity absolute w-full h-full left-0 top-0 z-10"></div>
                                      <div>4 star</div>
                                      <div>(5,8k)</div>
                                  </div>
                                  <div class="style-rated-option">
                                      <div class="opacity absolute w-full h-full left-0 top-0 z-10"></div>
                                      <div>3 star</div>
                                      <div>(1,9k)</div>
                                  </div>
                                  <div class="style-rated-option">
                                      <div class="opacity absolute w-full h-full left-0 top-0 z-10"></div>
                                      <div>2 star</div>
                                      <div>(879)</div>
                                  </div>
                                  <div class="style-rated-option">
                                      <div class="opacity absolute w-full h-full left-0 top-0 z-10"></div>
                                      <div>1 star</div>
                                      <div>(579)</div>
                                  </div>
                                  <div class="style-rated-option">
                                      <div class="opacity absolute w-full h-full left-0 top-0 z-10"></div>
                                      <div>With Coments</div>
                                      <div>(9,5k)</div>
                                  </div>
                                  <div class="style-rated-option">
                                      <div class="opacity absolute w-full h-full left-0 top-0 z-10"></div>
                                      <div>With Media</div>
                                      <div>(1,5k)</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!-- Evaluate user -->
                      <div class="mt-8 grid grid-cols-1">
                          <div
                              class="content-evaluate flex flex-row items-start pb-2.5 border-b border-solid border-#ccc mt-2.5"
                          >
                              <!-- user -->
                              <div class="basis-2/12 flex flex-row gap-2.5">
                                  <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                                  alt="" class="h-33 w-33 rounded-full object-cover" />
                                  <!-- info -->
                                  <div class="flex flex-col gap-1">
                                      <div class="text-10 text-black">mrbean</div>
                                      <div class="flex flex-row gap-0.5" style="font-size: 8px">
                                          <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                          <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                          <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                          <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                          <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      </div>
                                      <!-- date -->
                                      <div class="text-10 text-date-evaluate">Feb 28,2023</div>
                                  </div>
                              </div>
                              <!-- Evaluate -->
                              <div class="basis-10/12 flex flex-col gap-4">
                                  <!-- content -->
                                  <div class="text-sm text-black font-normal">
                                      Quality of glasses were great, very sturdy and well made.
                                      Unfortunately, my cats were completely uncomfortable wearing them,
                                      as I anticipated. I think they’re fine for indoors but make sure if
                                      you put them on your cat while outdoors that your cat doesn’t run
                                      off.
                                  </div>
                                  <!-- img -->
                                  <div class="flex flex-row justify-start gap-3.5">
                                      <img
                                          src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                          alt=""
                                          class="w-57 h-57 object-cover"
                                      />
                                      <img
                                          src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                          alt=""
                                          class="w-57 h-57 object-cover"
                                      />
                                  </div>
                                  <!-- help -->
                                  <div class="flex justify-between">
                                      <div class="flex flex-row items-center gap-1.5">
                                          <i class="fa-solid fa-thumbs-up" style="color: #989898"></i>
                                          <div class="text-10 text-date-evaluate">Helpful?</div>
                                      </div>
                                      <div class="text-10 text-date-evaluate">Report abuse</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="content-evaluate flex flex-row items-start pb-2.5 border-b border-solid border-#ccc mt-2.5"
                          >
                              <!-- user -->
                              <div class="basis-2/12 flex flex-row gap-2.5">
                                  <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                                  alt="" class="h-33 w-33 rounded-full object-cover" />
                                  <!-- info -->
                                  <div class="flex flex-col gap-1">
                                      <div class="text-10 text-black">mrbean</div>
                                      <div class="flex flex-row gap-0.5" style="font-size: 8px">
                                          <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                          <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                          <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                          <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                          <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      </div>
                                      <!-- date -->
                                      <div class="text-10 text-date-evaluate">Feb 28,2023</div>
                                  </div>
                              </div>
                              <!-- Evaluate -->
                              <div class="basis-10/12 flex flex-col gap-4">
                                  <!-- content -->
                                  <div class="text-sm text-black font-normal">
                                      My daughter purchased these for her cat and they are so cute. The
                                      sunglasses are very well made and fit the cat perfectly. Love this
                                      item!!!!
                                  </div>
                                  <!-- img -->
                                  <div class="flex flex-row justify-start gap-3.5">
                                      <img
                                          src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                          alt=""
                                          class="w-57 h-57 object-cover"
                                      />
                                  </div>
                                  <!-- help -->
                                  <div class="flex justify-between">
                                      <div class="flex flex-row items-center gap-1.5">
                                          <i class="fa-solid fa-thumbs-up" style="color: #989898"></i>
                                          <div class="text-10 text-date-evaluate">Helpful?</div>
                                      </div>
                                      <div class="text-10 text-date-evaluate">Report abuse</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="content-evaluate flex flex-row items-start pb-2.5 border-b border-solid border-#ccc mt-2.5"
                          >
                              <!-- user -->
                              <div class="basis-2/12 flex flex-row gap-2.5">
                                  <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                                  alt="" class="h-33 w-33 rounded-full object-cover" />
                                  <!-- info -->
                                  <div class="flex flex-col gap-1">
                                      <div class="text-10 text-black">mrbean</div>
                                      <div class="flex flex-row gap-0.5" style="font-size: 8px">
                                          <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                          <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                          <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                          <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                          <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      </div>
                                      <!-- date -->
                                      <div class="text-10 text-date-evaluate">Feb 28,2023</div>
                                  </div>
                              </div>
                              <!-- Evaluate -->
                              <div class="basis-10/12 flex flex-col gap-4">
                                  <!-- content -->
                                  <div class="text-sm text-black font-normal">
                                      Listen, if you want the coolest cat on the block buy these
                                      immediately and thank me later.
                                  </div>
                                  <!-- img -->
                                  <div class="flex flex-row justify-start gap-3.5">
                                      <img
                                          src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                          alt=""
                                          class="w-57 h-57 object-cover"
                                      />
                                      <img
                                          src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                          alt=""
                                          class="w-57 h-57 object-cover"
                                      />
                                  </div>
                                  <!-- help -->
                                  <div class="flex justify-between">
                                      <div class="flex flex-row items-center gap-1.5">
                                          <i class="fa-solid fa-thumbs-up" style="color: #989898"></i>
                                          <div class="text-10 text-date-evaluate">Helpful?</div>
                                      </div>
                                      <div class="text-10 text-date-evaluate">Report abuse</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!-- phân trang -->
                      <div
                          class="flex flex-row gap-9 justify-end items-center pr-2.5 mt-5 text-sm font-normal text-black"
                      >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="14"
                              viewBox="0 0 9 14"
                              fill="none"
                              class="cursor-pointer"
                          >
                              <path d="M8 1L2 7L8 13" stroke="black" stroke-width="2" />
                          </svg>
                          <span
                              class="w-10 h-10 text-center leading-10 rounded-full bg-accessory-opacity cursor-pointer"
                              >1</span
                          >
                          <span class="cursor-pointer">2</span>
                          <span class="cursor-pointer">3</span>
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="14"
                              viewBox="0 0 9 14"
                              fill="none"
                              class="cursor-pointer"
                          >
                              <path d="M1 13L7 7L1 0.999999" stroke="black" stroke-width="2" />
                          </svg>
                      </div>
                  </div>
                  <!-- content-right -->
                  <div class="w-2/5">
                      <div class="text-base font-medium text-black">Sunglasses for Cats</div>
                      <!-- overview -->
                      <div class="flex flex-row text-xs font-normal gap-1.5 mt-2">
                          <div>20,506 sales</div>
                          <div class="">|</div>
                          <div class="flex flex-row items-center justify-center gap-1">
                              <span class="underline">4.5</span>
                              <!-- group-star -->
                              <div class="flex flex-row gap-0.5">
                                  <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                  <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                  <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                  <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                  <i class="fa-solid fa-star" style="color: #ffb800"></i>
                              </div>
                          </div>
                          <div>(17,523 reviews)</div>
                      </div>
                      <!-- Price -->
                      <div class="flex flex-row gap-1.5 mt-5">
                          <div class="text-3xl font-medium text-Price">$7.99</div>
                          <div
                              class="text-sm text-detail2 font-medium flex flex-row justify-center items-center gap-1"
                          >
                              <div class="line-through">$16.00</div>
                              <div>(51% Off)</div>
                          </div>
                      </div>
                      <!-- time Sale -->
                      <div
                          class="text-10 text-black mt-2 py-0.5 px-2.5 bg-Secondary-yl rounded-full inline-block font-normal"
                      >
                          Sale ends in 12 hours
                      </div>
                      <!-- desc -->
                      <div class="text-detail2 text-10 font-normal mt-2">
                          Local taxes included (where applicable)
                      </div>
                      <!-- type -->
                      <div class="grid grid-cols-[auto,1fr] mt-5 items-center gap-y-5 gap-x-6">
                          <div class="text-base text-detail2">Type</div>
                          <div
                              class="flex flex-row justify-start gap-x-3 gap-y-3.5 flex-wrap"
                              id="list-accessories"
                          >
                              <img id="img-accessory"
                              src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                              alt="" class="w-51px h-51px rounded-full object-cover border border-solid
                              border-accessory-opacity" /> <img id="img-accessory"
                              src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                              alt="" class="w-51px h-51px rounded-full object-cover border border-solid
                              border-accessory-opacity" /> <img id="img-accessory"
                              src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                              alt="" class="w-51px h-51px rounded-full object-cover border border-solid
                              border-accessory-opacity" /> <img id="img-accessory"
                              src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                              alt="" class="w-51px h-51px rounded-full object-cover border border-solid
                              border-accessory-opacity" /> <img id="img-accessory"
                              src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png""
                              alt="" class="w-51px h-51px rounded-full object-cover border border-solid
                              border-accessory-opacity" />
                          </div>
                          <div class="">
                              <div class="text-base text-detail2">Quantity</div>
                          </div>
                          <div class="flex flex-row justify-start items-center gap-3.5">
                              <div class="basis-1/3 relative">
                                  <button
                                      id="less"
                                      class="absolute left-2 text-base top-calc-50%-width-minus-16 p-1"
                                  >
                                      -
                                  </button>
                                  <input
                                      type="text"
                                      id="number-input"
                                      value="1"
                                      class="px-4 py-2 border border-solid border-black rounded-full w-full text-center text-base"
                                  />
                                  <button
                                      id="plus"
                                      class="absolute right-2 text-base top-calc-50%-width-minus-16 p-1"
                                  >
                                      +
                                  </button>
                              </div>
                              <div class="text-sm text-detail2 basis-2/3">750 pieces available</div>
                          </div>
                      </div>
                      <!-- add to cart -->
                      <div class="grid grid-cols-[1fr,auto] mt-8 gap-2.5 items-center">
                          <div
                              class="border border-solid border-detail rounded-full flex flex-row items-center justify-center gap-1 h-10 bg-detail-opacity"
                          >
                              <img src="./src/assets/imgs/icon-cart-2.svg" alt="" />
                              <span class="uppercase text-base text-detail font-bold">add to cart</span>
                          </div>
                          <div class="w-10 h-10">
                              <i
                                  class="fa-regular fa-heart rounded-full bg-detail-opacity border-detail border border-solid p-3"
                              ></i>
                          </div>
                      </div>
                      <!-- buy now -->
                      <div
                          class="uppercase text-white font-bold text-center text-base border border-solid border-detail bg-detail rounded-full mt-2.5 py-2.5"
                      >
                          buy it now
                      </div>
                      <!-- address -->
                      <div
                          class="mt-9 grid grid-cols-[auto,1fr] gap-y-3 gap-x-3 text-sm font-normal text-black"
                      >
                          <img src="./src/assets/imgs/icon-extra.svg" alt="" />
                          <span>
                              Est. delivery to L6H3H6 by
                              <strong>Tue, July 2</strong></span
                          >
                          <div class="w-full flex justify-end">
                              <img src="./src/assets/imgs/icon-map.svg" alt="" class="" />
                          </div>
                          <span> In-store availability:</span>
                      </div>
                      <!-- select-store -->
                      <form action="" class="grid grid-cols-[1fr,auto] gap-1.5 mt-3">
                          <select
                              name=""
                              id=""
                              class="text-sm text-black font-normal border border-solid border-black rounded-full py-1.5 px-3.5"
                          >
                              <option value="">Select a store</option>
                              <option value="1">quangdzno1st</option>
                              <option value="2">quandgzno2st</option>
                              <option value="3">quangdzno3st</option>
                          </select>
                          <input
                              type="submit"
                              value="CHECK STORE"
                              class="text-xs py-1.5 px-4 rounded-full bg-btn-search"
                          />
                      </form>
                      <!-- detail -->
                      <div class="mt-8">
                          <div class="text-base font-semibold">Detail</div>
                          <ul class="mt-3.5 ml-6 list-disc text-sm font-normal">
                              <li>Color: yellow, dark blue, pink, dark green, light green</li>
                              <li>Brand: Coolrunner</li>
                              <li>Fabric: Type AC resin, alloy</li>
                              <li>Material: AC resin, Alloy</li>
                              <li>Pattern: Retro</li>
                              <li>Size: Frame width about 8cm/3.15in</li>
                          </ul>
                      </div>
                      <!-- Description -->
                      <div class="mt-8">
                          <div class="text-base font-semibold">Description</div>
                          <ul class="mt-3.5 text-sm font-normal flex flex-col gap-1.5">
                              <li>Your pets will looks fashion and cool with our sunglasses.</li>
                              <li>
                                  The lenses are made of AC resin, spectacles frame using stainless steel,
                                  durable, lightweight, comfortable, easy to wear, fit for pet cat or dog
                                  as daily wear photo props or show
                              </li>
                              <li>
                                  Our glasses are available in a variety of colors and the are suitable
                                  for cats or small dogssuch as Chihuahua, Pomeranian, Small Poodle,
                                  Yorkshire, Shorthair, Persian, Puppet, etc.
                              </li>
                              <li>
                                  Suitable for small dogs or cats such as Chihuahua, Pomeranian, Small
                                  Poodle, Yorkshire, Shorthair, Persian, Puppet, etc.
                              </li>
                              <li>
                                  No clear lenses, your pets will looks fashion and cool with our punk
                                  rock sunglasses.
                              </li>
                              <li>
                                  The lenses are made of AC resin, spectacles frame using alloy metal, let
                                  the glasses looks very texture.
                              </li>
                              <li>Legs of glasses are made of spring, more comfortable to wear.</li>
                          </ul>
                      </div>
                  </div>
              </div>

              <!-- list product -->
              <div class="bg-bg-product-detail w-full mt-10">
                  <h2 class="title text-xl font-normal text-detail2">Recently viewed products</h2>
                  <div class="swiper swiper-product w-full h-auto mt-6 pb-10 px-6 ">
                      <!-- Additional required wrapper -->
                      <div class="swiper-wrapper w-full h-full ">
                          <!-- Slides -->
                          <div
                              class="swiper-slide mr-0 h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative "
                          >
                              <!-- like product -->
                              <div class="rounded-md overflow-hidden   hover:scale-105  transition duration-300 hover:cursor-zoom-in ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="39" viewBox="0 0 55 39" fill="none" class="absolute rounded-md ">
                        <path d="M0 38.4492V0H52.3337V38.4492L26.1668 32.5751L0 38.4492Z" fill="#FFB800"/>
                        <span class="absolute top-1 left-2 text-base text-black font-normal">-50%</span>
                      </svg>

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
                                src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                alt=""
                                class="h-56 w-full object-cover rounded-md "
                            /></div>
                            <div class="content-product px-3.5 pt-3.5 pb-3 relative overflow-hidden  group ">
                              <div class="uppercase text-base text-white rounded-md bg-detail font-semibold text-center w-full py-2.5 absolute transition-all duration-1000 ease-linear left-96 bottom-0  group-hover:left-0 hover:bg-yellow-500"  >Add to cart</div>
                                <div class="text-base font-normal line-clamp-1">
                                    Multi-Angle Cat LED Laser Toy hahahhahahahaahahahahahh
                                </div>
                                <div class="mt-1 flex flex-row gap-0.5 items-center">
                                    <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                    <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                    <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                    <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                    <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                    <span class="text-colors-rated-product text-sm">(83)</span>
                                </div>
                                <!-- price & sold-->
                                <div class="flex flex-row justify-between items-center mt-6">
                                    <!-- price -->
                                    <div class="flex flex-row items-center gap-0.5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="7"
                                            height="13"
                                            viewBox="0 0 7 13"
                                            fill="none"
                                        >
                                            <path
                                                d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                fill="#00575C"
                                            />
                                        </svg>
                                        <span class="text-detail text-xl font-medium">999</span>
                                        <span class="text-sm text-detail font-normal">00</span>
                                    </div>
                                    <!-- sold -->
                                    <div class="font-normal text-sm text-detail2">273 sold</div>
                                </div>
                            </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                      class="p-3.5"
                                  />
                              </svg>
                              <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                      class="p-3.5"
                                  />
                              </svg>
                              <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                      class="p-3.5"
                                  />
                              </svg>
                              <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                      class="p-3.5"
                                  />
                              </svg>
                              <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                      class="p-3.5"
                                  />
                              </svg>
                              <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                      class="p-3.5"
                                  />
                              </svg>
                              <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                      class="p-3.5"
                                  />
                              </svg>
                              <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                      class="p-3.5"
                                  />
                              </svg>
                              <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div
                          class="swiper-button-next w-12 h-12 text-center text-white after:content-['next'] bg-colors-btn-slide after:text-xl rounded-full top-calc-50%-width-minus-24 right-0"
                      ></div>
                      <div
                          class="swiper-button-prev w-12 h-12 text-center text-white after:content-['prev'] bg-colors-btn-slide after:text-xl rounded-full top-calc-50%-width-minus-24 left-0"
                      ></div>
                      <div class="swiper-pagination"></div>
                  </div>
              </div>
              <!-- see more -->
              <div class="mt-10">
                  <h2 class="title text-xl font-normal text-detail2">You may also like</h2>

                  <!-- products -->
                  <div class="swiper swiper-product-more my-5">
                      <div class="swiper-wrapper">
                          <div
                              class="swiper-slide mr-0 h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                      class="p-3.5"
                                  />
                              </svg>
                              <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                      class="p-3.5"
                                  />
                              </svg>
                              <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                      class="p-3.5"
                                  />
                              </svg>
                              <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="swiper-pagination"></div>
                  </div>
                  <div class="swiper swiper-product-more my-5">
                      <div class="swiper-wrapper">
                          <div
                              class="swiper-slide mr-0 h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                      class="p-3.5"
                                  />
                              </svg>
                              <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                      class="p-3.5"
                                  />
                              </svg>
                              <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                      class="p-3.5"
                                  />
                              </svg>
                              <img
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                          <div
                              class="swiper-slide h-full w-full bg-white rounded-md cursor-pointer shadow-shadow-slide-product relative"
                          >
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
                                  src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1686706200/ECMA/sd463bffk3740iqigi29.png"
                                  alt=""
                                  class="h-56 w-full object-cover rounded-t-md"
                              />
                              <div class="content-product px-3.5 pt-3.5 pb-3">
                                  <div class="text-base font-normal line-clamp-1">
                                      Multi-Angle Cat LED Laser Toy
                                  </div>
                                  <div class="mt-1 flex flex-row gap-0.5 items-center text-base">
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>
                                      <i class="fa-solid fa-star" style="color: #ffb800"></i>

                                      <span class="text-colors-rated-product text-sm">(83)</span>
                                  </div>
                                  <!-- price & sold-->
                                  <div class="flex flex-row justify-between items-center mt-6">
                                      <!-- price -->
                                      <div class="flex flex-row items-center gap-0.5">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="7"
                                              height="13"
                                              viewBox="0 0 7 13"
                                              fill="none"
                                          >
                                              <path
                                                  d="M4.5519 0.720337V12.0495H3.64217V0.720337H4.5519ZM5.77301 8.4655C5.77301 8.22128 5.71806 8.00148 5.60816 7.8061C5.49826 7.61072 5.31713 7.43163 5.06477 7.26881C4.81241 7.106 4.47456 6.95539 4.05124 6.817C3.53838 6.65825 3.09471 6.46491 2.72023 6.23697C2.34983 6.00903 2.06287 5.72614 1.85935 5.3883C1.6599 5.05045 1.56017 4.64138 1.56017 4.16108C1.56017 3.66042 1.66804 3.22896 1.88377 2.8667C2.0995 2.50443 2.40478 2.22561 2.7996 2.03023C3.19443 1.83486 3.65845 1.73717 4.19167 1.73717C4.60685 1.73717 4.97726 1.80026 5.30289 1.92644C5.62852 2.04855 5.90327 2.23172 6.12714 2.47594C6.35508 2.72016 6.52807 3.01933 6.64611 3.37346C6.76822 3.72758 6.82928 4.13665 6.82928 4.60068H5.70585C5.70585 4.32796 5.67329 4.07763 5.60816 3.84969C5.54304 3.62175 5.44535 3.42434 5.3151 3.25745C5.18484 3.0865 5.0261 2.95624 4.83886 2.8667C4.65163 2.77308 4.4359 2.72627 4.19167 2.72627C3.84976 2.72627 3.56687 2.78529 3.343 2.90333C3.1232 3.02137 2.96038 3.18826 2.85455 3.40399C2.74872 3.61564 2.69581 3.8619 2.69581 4.14276C2.69581 4.40326 2.74872 4.63121 2.85455 4.82658C2.96038 5.02196 3.13948 5.19902 3.39184 5.35777C3.64828 5.51244 4.00037 5.66508 4.44811 5.81569C4.97319 5.98257 5.41889 6.17998 5.78523 6.40793C6.15156 6.6318 6.43038 6.90858 6.62169 7.23828C6.813 7.56391 6.90865 7.96892 6.90865 8.45329C6.90865 8.97837 6.79061 9.42204 6.55453 9.7843C6.31845 10.1425 5.98671 10.4152 5.55932 10.6024C5.13193 10.7897 4.63127 10.8833 4.05735 10.8833C3.71137 10.8833 3.36946 10.8365 3.03162 10.7429C2.69377 10.6493 2.3885 10.4966 2.11578 10.285C1.84306 10.0692 1.6253 9.78634 1.46248 9.43628C1.29967 9.08216 1.21826 8.64867 1.21826 8.1358H2.3539C2.3539 8.48178 2.40274 8.76874 2.50043 8.99669C2.60219 9.22056 2.73651 9.39965 2.9034 9.53397C3.07028 9.66423 3.25345 9.75784 3.4529 9.81483C3.65642 9.86774 3.8579 9.8942 4.05735 9.8942C4.42368 9.8942 4.73303 9.83722 4.9854 9.72325C5.24183 9.6052 5.43721 9.43832 5.57153 9.22259C5.70585 9.00686 5.77301 8.7545 5.77301 8.4655Z"
                                                  fill="#00575C"
                                              />
                                          </svg>
                                          <span class="text-detail text-xl font-medium">999</span>
                                          <span class="text-sm text-detail font-normal">00</span>
                                      </div>
                                      <!-- sold -->
                                      <div class="font-normal text-sm text-detail2">273 sold</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="swiper-pagination"></div>
                  </div>
              </div>
              <div class="flex items-center justify-center">
                  <button
                      class="text-base font-normal text-black text-center py-2.5 px-16 bg-white rounded-full inline-block shadow-shadow-btn"
                  >
                      See More
                  </button>
              </div>
          </div>
       
      </main>
  </div>
</div>
    `;
}

export default ProductDetailPage;
