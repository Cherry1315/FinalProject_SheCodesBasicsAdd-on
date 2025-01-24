
    function darkThemeChange() {
        document.body.classList.toggle("darkTheme");
    }

    document.querySelector(".theme-btn").addEventListener("click", darkThemeChange);

    // ---------------SheCodes Version 1:---------------

    // function darkThemeChange() {
    //   let body = document.querySelector("body");
    //   if (body.classList.contains("darkTheme")) {
    //     body.classList.remove("darkTheme");
    //   } else {
    //     body.classList.add("darkTheme");
    //   }
    // }

    // let themeBtn = document.querySelector(".theme-btn");
    // themeBtn.addEventListener("click", darkThemeChange);

    // ---------------SheCodes Version 2:---------------

    //   function darkThemeChange() {
    //     let body = document.querySelector("body");

    //     body.classList.toggle("darkTheme");
    //   }

    //   let themeBtn = document.querySelector(".theme-btn");
    //   themeBtn.addEventListener("click", darkThemeChange);
