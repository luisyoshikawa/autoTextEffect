const containerEl = document.querySelector(".container");

const carrers = ["Youtuber", "Web Developer", "Freelancer", "Instructor"];

let carrerIndex = 0;

let caracterIndex = 0;

updateText();

function updateText(){
    caracterIndex++;
    containerEl.innerHTML = `<h1>I'm ${carrers[carrerIndex].slice(0,1) === "I" ? "an" : "a"} ${carrers[carrerIndex].slice(0, caracterIndex)}</h1>`;
    if(caracterIndex === carrers[carrerIndex].length){
        carrerIndex++;
        caracterIndex = 0;
    }

    if(carrerIndex === carrers.length){
        carrerIndex = 0;
    }
    setTimeout(updateText, 400);    
}

