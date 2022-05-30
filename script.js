const msg_display = document.getElementById("msg-display");
const statement_holder = document.getElementById("statement-holder");
const statement_one = document.getElementById("statement-one");
const statement_two = document.getElementById("statement-two");
const statement_three = document.getElementById("statement-three");
const statement_four = document.getElementById("statement-four");

// message that appears when the page loads
window.addEventListener('load', (event) => {
    msg_display.innerHTML = "Hello. Drag and drop a state, or just click on them.";
  });


// an object of selections and their response
const statement_container = {
        one: "You are truely on the right path!!!",
        two: "Seeking knowledge is a honorable. May you be blessed.",
        three: "Great power comes with greate responsibility.",
        four: "Be dutiful to them and show them love."
}

statement_one.addEventListener("click", () => {
    msg_display.innerHTML = statement_container.one;
    if(msg_display) {
        msg_display.classList.toggle("toggle-off");
    }
})

statement_two.addEventListener("click", () => {
    msg_display.innerHTML = statement_container.two;
    if(msg_display) {
        msg_display.classList.toggle("toggle-off");
    }
})

statement_three.addEventListener("click", () => {
    msg_display.innerHTML = statement_container.three;
    if(msg_display) {
        msg_display.classList.toggle("toggle-off");
    }
})

statement_four.addEventListener("click", () => {
    msg_display.innerHTML = statement_container.four;
    if(msg_display) {
        msg_display.classList.toggle("toggle-off");
    }
})


// Drag and drop effects
