import workCall from "./working.js"

document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById("content");
    const h1 = document.createElement("h1");
    const openDialog = document.createElement("button");
    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const label = document.createElement("label");
    const enterLocation = document.createElement("input");
    const submit = document.createElement("button");
    const close = document.createElement("button");

    h1.textContent = "Weather App";
    openDialog.textContent = "Press to Enter Location";
    openDialog.id = "open_dialog";
    dialog.id = "dialog";
    form.method = "dialog";
    enterLocation.placeholder = "Type the location here";
    enterLocation.type = "text";
    enterLocation.id = "location_entry";
    close.innerText = "Close";
    close.id = "close";
    submit.innerText = "Submit";
    submit.id = "submit";

    label.appendChild(enterLocation);
    p.appendChild(label);
    div.appendChild(close);
    div.appendChild(submit);
    form.appendChild(p);
    form.appendChild(div);
    dialog.appendChild(form);

    content.appendChild(h1);
    content.appendChild(openDialog);
    content.appendChild(dialog);

    workCall();
});