const ToastMessage = ({
    title = "",
    message = "",
    type = "info",
    duration = 3000,
  }) => {
    var main = document.createElement("div");
    main.classList.add("container-toast");
  
    var toast = document.createElement("div");
    const color = {
      success: "green",
      error: "orange",
    };
    const icons = {
      success: "fa-circle-check",
      error: "fa-triangle-exclamation",
    };
  
    main.classList.add(
      "fixed",
      "top-10",
      "right-10",
      "z-50",
      "flex",
      "flex-col",
      "gap-5"
    );
    toast.classList.add(
      `border-${color[type]}-600`,
      "grid",
      "grid-cols-[auto,1fr,auto]",
      "items-center",
      "gap-3",
      "rounded-md",
      "bg-white",
      "px-3",
      "py-5",
      "border-l-4",
      "w-375",
      "shadow-my-shadow"
    );
    // onclick close
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        document.querySelector(".container-toast").removeChild(toast);
        clearTimeout(removeID);
      }
    };
    console.log(color[type]);
    toast.innerHTML = `
        <div class="toast__icon">
            <i class="fa-solid ${icons[type]} text-${color[type]}-600"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title text-base font-semibold">${title}</h3>
            <p class="toast__msg text-sm font-normal">${message}</p>
        </div>
        <div class="toast__close" >
          <i class="fa-solid fa-xmark" ></i>
        </div>
            `;
    //animation
  
    document.getElementById("app").appendChild(main);
    document.querySelector(".container-toast").appendChild(toast);
    var removeID = setTimeout(function () {
      document.querySelector(".container-toast").removeChild(toast);
    }, 1000000);
  };
  
  export default ToastMessage;
  