/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// 1. Write a function that returns a freelancer object with a randomly generated name, occupation, and rate according to the provided constants.

function createFreeLancers() {
    const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
    const randomOccupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
    const randonRate = Math.floor(Math.random() * 100);
    return {
        name: randomName,
        occupation: randomOccupation,
        rate: randonRate
    };
}

// 2. Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.

const freeLancers = [];

for (let i = 0; i < NUM_FREELANCERS; i++) {
    freeLancers.push(createFreeLancers());
}

// console.log(freeLancers);
// console.log(freeLancers.length);
//console.log(freeLancers[0]);

// 3. Write a function that returns the average rate of all freelancers in state.

function getAverageRate() {
    const totalRate = freeLancers.reduce((sum, freelancer) => {
    return sum + freelancer.rate;
}, 0);
    const averageRate = totalRate / freeLancers.length;
    return averageRate;
}

//console.log(totalRate);

// 4. Use that function to initialize a state variable which will store the average rate of all freelancers.

const averageRate = getAverageRate();

// console.log(averageRate);


// 5. Write a component function to represent a single freelancer.

function freeLancer(freelancer) {
    return `
        <div class="freelancer-card">
            <h3>${freelancer.name}</h3>
            <p>${freelancer.occupation}</p>
            <p>$${freelancer.rate}/hr</p>
        </div>
    `;
}

// const testFreelancer = {
//     name: "Sara",
//     occupation: "Developer",
//     rate: 100
// };

// console.log(freeLancer(testFreelancer));



// 6. Write a component function to represent an array of freelancers.

function freeLancerList() {
    return freeLancers
    .map((freelancer) => {
        return freeLancer(freelancer);
    })
    .join("");
}

// 7. Write a component function to represent the average rate of all freelancers.

function averageRateAll() {
    return `
        <h2>Average Rate: $${averageRate}</h2>`;
}

// console.log(averageRateAll());

// 8. Write and call a render function that will mount the application onto the document.
function render () {
    const $app = document.querySelector("#app");
    $app.innerHTML = `
    <h2>${averageRateAll()} </h2>
    <ul>${freeLancerList()}</ul>
    `
};

render();