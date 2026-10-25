let colorSwitch = document.getElementById("checkNativeSwitch");
colorSwitch.addEventListener("change", function() {
    if(colorSwitch.checked) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
    }else{
        document.documentElement.setAttribute("data-bs-theme", "light");
    }
});