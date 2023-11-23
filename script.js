var menu = document.querySelector(".fa-bars");
var option = document.querySelector(".menuoptions");

menu.addEventListener("click", () =>{
    if(option.classList.contains("active")){
        option.style.height = "0";
    }else{
        option.style.height = "fit-content";
    }
    option.classList.toggle("active");
});