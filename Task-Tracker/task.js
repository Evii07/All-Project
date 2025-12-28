document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault;

    input = getElementById("input_text").value;
    
    const new_div = document.createElement("div");
    new_div.classList.add = "container";

    const new_label = document.createElement("label");
    new_label.classList.add = "checkbox-label";

    const new_input = document.createElement("input");
    new_input.type = "checkbox";
    new_input.classList.add = "checkbox";

    const span_one = document.createElement("span");
    span_one.classList.add = "checkmark";

    const span_two = document.createElement("span");
    span_two.classList.add = "text_list";

    span_two.textContent = input;

    new_div.appendChild(new_label);
    new_label.appendChild(new_input);
    new_label.appendChild(span_one);
    new_label.appendChild(span_two);

    document.getElementById("Body").appendChild(new_div);
})