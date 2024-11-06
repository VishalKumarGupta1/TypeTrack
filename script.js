let question = document.querySelector(".question");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let starttime, endtime;
input.disabled = true;

let array = ["Variables are used to store data in JavaScript. Variables are used to store reusable values. The values of the variables are allocated using the assignment operator.",
    "The let keyword in JavaScript is used to make variables that are scoped to the block they are declared in. Once you have used let to define a variable, you cannot declare it again within the same block. It is important to declare let variables before using them.",
    "The const keyword in JavaScript is used to define variables that cannot be changed once they are assigned a value. This prevents any modifications to the variable  value.",
    "JavaScript loops are essential for efficiently handling repetitive tasks. They execute a block of code repeatedly as long as a specified condition remains true. These loops are powerful tools for automating tasks and streamlining your code.",
    "In JavaScript, an object is a collection of related data and functions, known as properties and methods, respectively. Properties are “key: value” pairs that store data, while methods are functions associated with the object that can manipulate its properties.",
    "A function in JavaScript is a reusable block of code that performs a specific task. You define it once, and then you can run  it whenever you need that task done in your program.",
    "An array in JavaScript is a data structure used to store multiple values in a single variable. It can hold various data types and allows for dynamic resizing. Elements are accessed by their index, starting from 0.",
    "Strings are very important in programming languages like JavaScript. This article will help you to understand the basics of strings in JavaScript, explaining what they are and how they function in easy-to-understand terms.",
    "JavaScript Math object is used to perform mathematical operations on numbers. All the properties of Math are static and unlike other objects, it does not have a constructor.",
    "The JavaScript Map object holds key-value pairs and preserves the original insertion order. It supports any value, including objects and primitives, as keys or values. This feature allows for efficient data retrieval and manipulation, making Map a versatile tool for managing collections.",
    "Sets in JavaScript are collections of unique values, meaning no duplicates are allowed. They provide efficient ways to store and manage distinct elements. Sets support operations like adding, deleting, and checking the presence of items, enhancing performance for tasks requiring uniqueness.",
    "JavaScript promises might sound a bit complicated at first, but once you get a clear understanding of them, they make working with code that takes time to complete, like fetching data from a website or waiting for a timer, much easier to manage. Let break down what promises are and how you can use them.",
];


const playgame = () => {

    let random = Math.floor(Math.random() * array.length);
    // console.log(random);
    question.innerText = array[random];
    let date = new Date();
    starttime = date.getTime();
    btn.innerText = "Done";
}
const wordcounter = (str) => {
    let cnt = str.split(" ").length;
    return cnt;
}
const compare = (str1, str2) => {
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let count = 0;
    word1.forEach(function (item, index) {
        if (item == word2[index]) {
            count++;
        }
    });
    let errword = word1.length - count;
    return (count + " correct out of " + word1.length + " words and the total number of error are " + errword + ".");

}

const endplay = () => {
    let date = new Date();
    endtime = date.getTime();
    let totaltime = ((endtime - starttime) / 1000);
    console.log(totaltime);
    let userinput = input.value;
    input.value = "";
    let wordcount = wordcounter(userinput);
    let speed = Math.floor((wordcount / totaltime) * 60);
    //if userinput is blank then speed is 0 wpm
    if (userinput == "") {
        speed = 0;
    }
    console.log(speed);
    let finalmsg = "You typed total at " + speed + " words per minute . "
    finalmsg += compare(question.innerText, userinput);
    question.innerText = finalmsg;

}

btn.addEventListener("click", function () {
    if (this.innerText == "Start") {
        input.disabled = false;
        playgame();
    } else if (this.innerText == "Done") {

        input.disabled = true;
        btn.innerText = "Start";
        endplay();

    }

});