const UserHeader = () => {
  return `
    <div class="w-full content-wrapper mx-auto">
    <!-- detail -->
    <div class="flex detail w-full bg-green-700 py-2 items-center justify-center text-white gap-2">
        <span class="text-sm font-semibold"> FREE SHIPPING with $20 Purchase </span>
        <a href="" class="cursor-pointer underline text-white text-sm font-normal">Details</a>
    </div>
    <div class="header m-auto shadow-md bg-white pb-4">
        <div class="content px-content  m-auto">
            <!-- subNav -->
            <nav>
                <ul class="flex items-center justify-end gap-6 mb-6 pt-0.5">
                    <li>
                        <a href="#" class="text-xs underline">Help</a>
                    </li>
                    <li>
                        <a href="#" class="text-xs underline">Order Tracker</a>
                    </li>
                    <li>
                        <a href="#" class="text-xs underline">About Us</a>
                    </li>
                    <li>
                        <a href="#" class="text-xs underline font-normal text-black">Newsletter Singup</a>
                    </li>
                </ul>
            </nav>
            <nav class="flex justify-between items-center">
                <div class="flex flex-row gap-5">
                    <img
                        src="https://res.cloudinary.com/dn3k4bznz/image/upload/v1689681502/Meowshop/LOGO4_1_w8r6hs.png"
                        alt=""
                        class="logo"
                    />
                </div>
                <form action="" class=" flex flex-center relative w-2/5 items-center">
                <i class="fa-solid fa-magnifying-glass absolute left-4  text-center"></i>
                    <input
                        type="text"
                        placeholder="What can we help you find? "
                        class=" py-2 px-10 w-full border border-solid border-detail rounded-full"
                        required
                    />
                    <input
                        type="submit"
                        value="search"
                        class="absolute right-0  text-1.5  uppercase h-full px-5 bg-detail rounded-full text-white"
                    />
                </form>
                <div class="flex flex-center gap-7">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path d="M10 11C4.08 11 2 14 2 16V19H18V16C18 14 15.92 11 10 11Z" fill="#00575C" />
                        <path
                            d="M10 10C12.4853 10 14.5 7.98528 14.5 5.5C14.5 3.01472 12.4853 1 10 1C7.51472 1 5.5 3.01472 5.5 5.5C5.5 7.98528 7.51472 10 10 10Z"
                            fill="#00575C"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="18"
                        viewBox="0 0 21 18"
                        fill="none"
                    >
                        <path
                            d="M10.4989 18C14.6018 16.2256 17.5711 13.1965 19.1728 10.1294C20.7499 7.07497 20.9717 4.0332 19.5671 2.20814C18.2981 0.573183 16.647 -0.0478447 14.9714 0.00285147C13.2957 0.0535477 11.6694 0.801317 10.4989 1.85326C9.3284 0.801317 7.70204 0.0535477 6.02639 0.00285147C4.35074 -0.0478447 2.69973 0.573183 1.43067 2.20814C0.0260862 4.0332 0.247863 7.07497 1.84959 10.1294C3.42667 13.1965 6.39602 16.2256 10.4989 18Z"
                            fill="#00575C"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                    >
                        <path
                            d="M17.1875 16.5625C17.1875 16.8344 17.1069 17.1003 16.9558 17.3264C16.8047 17.5525 16.5899 17.7288 16.3387 17.8328C16.0874 17.9369 15.811 17.9641 15.5442 17.9111C15.2775 17.858 15.0325 17.7271 14.8402 17.5348C14.6479 17.3425 14.517 17.0975 14.4639 16.8307C14.4109 16.564 14.4381 16.2876 14.5422 16.0363C14.6462 15.7851 14.8225 15.5703 15.0486 15.4192C15.2747 15.2681 15.5405 15.1875 15.8125 15.1875C16.1772 15.1875 16.5269 15.3324 16.7848 15.5902C17.0426 15.8481 17.1875 16.1978 17.1875 16.5625ZM6.875 15.1875C6.60305 15.1875 6.33721 15.2681 6.11109 15.4192C5.88497 15.5703 5.70874 15.7851 5.60467 16.0363C5.50059 16.2876 5.47336 16.564 5.52642 16.8307C5.57947 17.0975 5.71043 17.3425 5.90273 17.5348C6.09503 17.7271 6.34003 17.858 6.60675 17.9111C6.87347 17.9641 7.14994 17.9369 7.40119 17.8328C7.65244 17.7288 7.86718 17.5525 8.01827 17.3264C8.16936 17.1003 8.25 16.8344 8.25 16.5625C8.25 16.1978 8.10513 15.8481 7.84727 15.5902C7.58941 15.3324 7.23967 15.1875 6.875 15.1875ZM19.6023 3.775C19.5378 3.6901 19.4547 3.62116 19.3594 3.57348C19.264 3.5258 19.159 3.50066 19.0523 3.5H4.15078L3.45469 1.05937C3.37122 0.772642 3.19722 0.52061 2.95869 0.340934C2.72015 0.161258 2.42988 0.0635825 2.13125 0.0625H0.6875C0.505164 0.0625 0.330295 0.134933 0.201364 0.263864C0.0724328 0.392795 0 0.567664 0 0.75C0 0.932336 0.0724328 1.1072 0.201364 1.23614C0.330295 1.36507 0.505164 1.4375 0.6875 1.4375H2.13125L2.97344 4.36797V4.38516L5.24219 12.3172C5.36677 12.7476 5.62761 13.1261 5.98555 13.3957C6.34349 13.6653 6.77922 13.8116 7.22734 13.8125H15.4602C15.9083 13.8116 16.344 13.6653 16.702 13.3957C17.0599 13.1261 17.3207 12.7476 17.4453 12.3172L19.7141 4.37656C19.7431 4.27447 19.7482 4.16703 19.7288 4.06267C19.7094 3.9583 19.6661 3.85984 19.6023 3.775V3.775Z"
                            fill="#00575C"
                        />
                    </svg>
                </div>
            </nav>
            <ul
                id="menu"
                class="uppercase flex flex-col gap-7 mt-9 max-w-width-nav-tablet transition-all duration-100 ease-linear lg:flex lg:max-w-full lg:flex-row lg:items-center lg:flex-wrap lg:justify-between lg:gap-3"
            >
                <li class="flex flex-row justify-between style-navbar font-semibold lg:font-normal">
                    <a href="/home">Home</a>
                    
                </li>
                <li class="flex flex-row justify-between style-navbar font-semibold lg:font-normal">
                    <a href="/products">Products</a>
                    
                </li>
                <li class="flex flex-row justify-between style-navbar font-semibold lg:font-normal">
                    <a href="/service">service</a>
                    
                </li>
                <li class="flex flex-row justify-between style-navbar font-semibold lg:font-normal">
                    <a href="/information">information</a>
                    
                </li>
          
                <li class="flex flex-row justify-between style-navbar font-semibold lg:font-normal">
                    <a href="/blog">BLOGS</a>
                    
                </li>
            </ul>
        </div>
    </div>
</div>
    `;
};

export default UserHeader;
