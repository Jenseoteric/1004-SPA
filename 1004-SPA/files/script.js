var docbody = document.body;
let themebutton = document.getElementById("themebutton");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");

themebutton.addEventListener('click', () => {
    event.preventDefault();
    docbody.classList.toggle('dark');

})

option1.addEventListener("click", () => {
    console.log("Hello World!");
    // make this button append text inside the textbox
    var newpara2 = document.createElement("p");
    newpara2.textContent = "Touch mysterious door";

    var storytext = document.getElementById("textbox");
    storytext.appendChild(newpara2);

})

option2.addEventListener("click", () => {
    console.log("Option 2 selected");
    // make this button add a new section of text below the textbox

    var newpara = document.createElement("p");
    newpara.textContent = "Secret Recipe";

    var cpanel = document.getElementById("centerpanel");
    cpanel.appendChild(newpara);
})

option3.addEventListener("click", () => {
    console.log("option 3 selected");
    // make this button replace the text in the textbox

    var newpara3 = document.createElement("p");
    newpara3.textContent = "*Opens door*";

    var mytextbox = document.getElementById("textbox");
    mytextbox.replaceChildren(newpara3);


})