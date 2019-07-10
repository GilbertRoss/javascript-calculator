
console.log("funzioni?");
let message = "";
let result;

const numbers = document.querySelector("#screen");
let one = document.querySelector(".one");
one.addEventListener("click", () => {
    message = message + one.textContent;
    console.log(message);
    numbers.textContent = message;

});
let two = document.querySelector(".two");
two.addEventListener("click", () => {
    message = message + two.textContent;
    console.log(message);
    numbers.textContent = message;

});
let three = document.querySelector(".three");
three.addEventListener("click", () => {
    message = message + three.textContent;
    console.log(message);
    numbers.textContent = message;

});
let four = document.querySelector(".four");
four.addEventListener("click", () => {
    message = message + four.textContent;
    console.log(message);
    numbers.textContent = message;

});
let five = document.querySelector(".five");
five.addEventListener("click", () => {
    message = message + five.textContent;
    console.log(message);
    numbers.textContent = message;

});
let six = document.querySelector(".six");
six.addEventListener("click", () => {
    message = message + six.textContent;
    console.log(message);
    numbers.textContent = message;

});
let seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
    message = message + seven.textContent;
    console.log(message);
    numbers.textContent = message;

});
let eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
    message = message + eight.textContent;
    console.log(message);
    numbers.textContent = message;

});
let nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
    message = message + nine.textContent;
    console.log(message);
    numbers.textContent = message;

});
let zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
    message = message + zero.textContent;
    console.log(message);
    numbers.textContent = message;

});
let multiply = document.querySelector(".multiply");
multiply.addEventListener("click", () => {
    console.log(message);
    if (message.includes("-")) {
        let regexa = /^.*(?=(\-))/gi;
        let regexb = /[^-]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) - Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    else if (message.includes("/")) {
        let regexa = /^.*(?=(\/))/gi;
        let regexb = /[^/]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) / Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    else if (message.includes("+")) {
        let regexa = /^.*(?=(\+))/gi;
        let regexb = /[^+]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) + Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    else if (message.includes("*")) {
        let regexa = /^.*(?=(\*))/gi;
        let regexb = /[^*]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) * Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    message = message + "*";
    //numbers.textContent = message;
    


});
let division = document.querySelector(".division");
division.addEventListener("click", () => {
    if (message.includes("-")) {
        let regexa = /^.*(?=(\-))/gi;
        let regexb = /[^-]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) - Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    else if (message.includes("/")) {
        let regexa = /^.*(?=(\/))/gi;
        let regexb = /[^/]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) / Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    else if (message.includes("+")) {
        let regexa = /^.*(?=(\+))/gi;
        let regexb = /[^+]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) + Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    else if (message.includes("*")) {
        let regexa = /^.*(?=(\*))/gi;
        let regexb = /[^*]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) * Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    message = message + "/";
    //numbers.textContent = message;

});
let plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
    if (message.includes("-")) {
        let regexa = /^.*(?=(\-))/gi;
        let regexb = /[^-]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) - Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    else if (message.includes("/")) {
        let regexa = /^.*(?=(\/))/gi;
        let regexb = /[^/]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) / Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    else if (message.includes("+")) {
        let regexa = /^.*(?=(\+))/gi;
        let regexb = /[^+]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) + Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    else if (message.includes("*")) {
        let regexa = /^.*(?=(\*))/gi;
        let regexb = /[^*]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) * Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    message = message + "+";
    console.log(message);
   // numbers.textContent = message;

});
let minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
    if (message.includes("-")) {
        let regexa = /^.*(?=(\-))/gi;
        let regexb = /[^-]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) - Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    else if (message.includes("/")) {
        let regexa = /^.*(?=(\/))/gi;
        let regexb = /[^/]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) / Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    else if (message.includes("+")) {
        let regexa = /^.*(?=(\+))/gi;
        let regexb = /[^+]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) + Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    else if (message.includes("*")) {
        let regexa = /^.*(?=(\*))/gi;
        let regexb = /[^*]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) * Number(b[0]);
        numbers.textContent = result;
        message = result;
    }
    message = message + "-";
    //console.log(message);
    //numbers.textContent = message;
});

let equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if (message.includes("-")) {
        let regexa = /^.*(?=(\-))/gi;
        let regexb = /[^-]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) - Number(b[0]);
        numbers.textContent = result;
        message = "";

    }
    else if (message.includes("/")) {
        let regexa = /^.*(?=(\/))/gi;
        let regexb = /[^/]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) / Number(b[0]);
        numbers.textContent = result;
        message = "";

    }
    else if (message.includes("+")) {
        let regexa = /^.*(?=(\+))/gi;
        let regexb = /[^+]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) + Number(b[0]);
        numbers.textContent = result;
        message = "";

    }
    else if (message.includes("*")) {
        let regexa = /^.*(?=(\*))/gi;
        let regexb = /[^*]*$/gi;
        let a = message.match(regexa);
        let b = message.match(regexb);
        result = Number(a[0]) * Number(b[0]);
        numbers.textContent = result;
        message = "";
    }

});

let ce = document.querySelector(".ce")
ce.addEventListener("click", () => {
    if (message.includes("-")) {
        let regexb = /[^-]*$/gi;
        message = message.replace(regexb, "");
        numbers.textContent = message;

    }
    else if (message.includes("/")) {
        let regexb = /[^/]*$/gi;
        message = message.replace(regexb, "");
        numbers.textContent = message;
    }
    else if (message.includes("+")) {
        let regexb = /[^+]*$/gi;
        message = message.replace(regexb, "");
        numbers.textContent = message;
    }
    else if (message.includes("*")) {
        let regexb = /[^*]*$/gi;
        message = message.replace(regexb, "");
        numbers.textContent = message;
    }
    else{
        message = "";
        numbers.textContent = message;
    }

    
});

let c = document.querySelector(".c");
c.addEventListener("click", () =>{
    message = "";
    numbers.textContent = message;
});


