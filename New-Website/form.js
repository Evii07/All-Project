let count = 1;

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    if (count == 6) {
        document.getElementById("title_text").style.marginBottom = "0%";
        document.getElementById("warning").style.display = "block";
        return;
    } else {

    const input = document.getElementById("list").value;

    const new_box = document.createElement("div");
    new_box.classList = "list_box";

    const text = document.createElement("p");
    text.classList = "text_list";
    text.textContent = `${count}. ${input}`;

    const icon_box = document.createElement("div");
    icon_box.classList = "icon_box";
    
    const logo = document.createElement("i");
    logo.classList = "fa-solid fa-x";

    icon_box.appendChild(logo);
    
    
    new_box.appendChild(text);
    new_box.appendChild(icon_box);
    document.getElementById("simple_box").appendChild(new_box);

    document.getElementById("list").value = "";

    count++;
    }   
});


// const box_list = document.querySelectorAll(".list_box");

// box_list.forEach(function(item) {
//     item.addEventListener("click", function(e) {
//         item.remove();
//     })
// });

const container = document.getElementById("simple_box");

container.addEventListener("click", function (e) {
    const box = e.target.closest(".list_box");
    if (!box) {
        return;
    }

    const icon = e.target.closest(".icon_box");
    if (!icon) {
        return;
    }

    box.remove();
    count--;
  
    if (count < 6) {
        document.getElementById("title_text").style.marginBottom = "5%";
        document.getElementById("warning").style.display = "none";
    }
});