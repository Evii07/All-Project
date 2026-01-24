

const button = document.getElementById("button");
const background = document.getElementById("body");
const bamboo_shoot = document.getElementById("plant_shoot");

const bottomFlower = document.getElementById("pottet_plantBottom");
const flower_pot_top = document.getElementById("pottet_plantTop");

const ground = document.getElementById("ground");

const branch1 = document.getElementById("plant_branch1");
const branch2 = document.getElementById("plant_branch2");

const leaves = document.querySelector(".plant_leave");

let height = 80;
let maxHeight = 400;
let growInterval;

let branch1height = 0;
// let maxHeightBranch1 = 80; change in css

let branch2height = 0;


button.addEventListener('click', () => {
    const circle = document.getElementById("circle");
    circle.classList.toggle("night_button");
    if (circle.classList.contains("night_button")) {
        circle.style.backgroundColor = "rgb(45, 45, 114)";
        button.style.border = "3px solid rgba(126, 126, 126, 1)"
        background.style.background = "linear-gradient(180deg, rgba(15, 9, 75, 1) 0%, rgba(36, 50, 91, 1) 50%, rgba(49, 77, 102, 1) 100%)";

        bottomFlower.style.background = "#9f693aff";
        flower_pot_top.style.background = "#983629";

        ground.style.backgroundColor = "#2B4907"

        growInterval = setInterval(() => {
            if (height < maxHeight) {
                height += 0.7;
                bamboo_shoot.style.height = height + "px";
                
                if (height > 100) {
                    branch1.style.opacity = "1";
                    branch1.style.height = branch1height + "px";
                    branch1height += 0.5;
                }
                if (height > 285) {
                    branch2.style.opacity = "1";
                    branch2.style.height = branch2height + "px";
                    branch2height += 0.7;
                }    
            } else {
                leaves.style.opacity = "1";
          
            }
        
        }, 50);



    } else {
        circle.style.backgroundColor = "rgb(248, 227, 3)";
        button.style.border = "3px solid rgb(216, 216, 216)"

        background.style.background = "linear-gradient(180deg,rgba(68, 168, 255, 1) 0%, rgba(190, 225, 255, 1) 100%)";
    
        bottomFlower.style.background = "#885324";
        flower_pot_top.style.background = "#742B21";
        
        ground.style.backgroundColor = "#488003";
        clearInterval(growInterval);
    }
});