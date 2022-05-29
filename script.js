const msg_display = document.getElementById("msg-display");
const statement_holder = document.getElementById("statement-holder");
const statement_one = document.getElementById("statement-one");
const statement_two = document.getElementById("statement-two");
const statement_three = document.getElementById("statement-three");
const statement_four = document.getElementById("statement-four");


// an object of selections and their response
const statement_container = {
        one: "You have made a great choice!!!",
        two: "Seeking knowledge is a honorable path.",
        three: "Great power comes with greate responsibility. ",
        four: "Be dutiful to them and show them love."
}

statement_one.addEventListener("click", () => {
    msg_display.innerHTML = "Clicked";
})

statement_two.addEventListener("click", () => {
    console.log("Clicked!!!");
})

statement_three.addEventListener("click", () => {
    console.log("Clicked!!!");
})

statement_four.addEventListener("click", () => {
    console.log("Clicked!!!");
})
