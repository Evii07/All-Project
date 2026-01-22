

const button = document.getElementById("button");


button.addEventListener('click', () => {
    const circle = document.getElementById("circle");
    circle.classList.toggle("night_button");
    if (circle.classList.contains("night_button")) {
        circle.style.backgroundColor = "rgb(45, 45, 114)";
    } else {
        circle.style.backgroundColor = "rgb(248, 227, 3)";
    }


});