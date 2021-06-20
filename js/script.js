const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = {
    complain: function(){
        console.log("Meow!");
    }
};

cat.complain();

// Question 2

const heading = document.querySelector("h3");
document.querySelector("h3").innerHTML = "Updated heading";


// Question 3

heading.style.fontSize = "2em";

console.log(heading);


// Question 4

heading.classList.add("subheading");


// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
};


// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p style=background-color:yellow;>New paragraph</p>";

// Question 7

function catNames(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
};

catNames(cats);


// Question 8

function createCats(cats) {
    var html = "";

    for (let i = 0; i < cats.length; i++){
        html += "<div>";
        html += "<h5>" + cats[i].name + "</h5>";
        if (cats[i].age === undefined) {
            html += "<p>Age unknown</p>";
        } else {
            html += "<p>" + cats[i].age + "</p>";
        }
        html += "</div>";
    }
    return html;
};

document.querySelector(".cat-container").innerHTML = createCats(cats);