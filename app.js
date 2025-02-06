// // Sample car data for demonstration
// const cars = [
//     { id: 1, name: "Car Model 1", description: "A great car for city driving.", image: "car1.jpg" },
//     { id: 2, name: "Car Model 2", description: "An excellent choice for families.", image: "car2.jpg" },
//     { id: 3, name: "Car Model 3", description: "A powerful sports car.", image: "car3.jpg" },
//     { id: 4, name: "Car Model 4", description: "An eco-friendly electric vehicle.", image: "car4.jpg" },
// ];

// // Function to display featured cars
// function displayFeaturedCars() {
//     const carGrid = document.querySelector('.car-grid');
//     carGrid.innerHTML = ''; // Clear existing content

//     cars.forEach(car => {
//         const carCard = document.createElement('div');
//         carCard.classList.add('car-card');
//         carCard.innerHTML = `
//             <img src="${car.image}" alt="${car.name}">
//             <h3>${car.name}</h3>
//             <p>${car.description}</p>
//             <a href="#">View Details</a>
//         `;
//         carGrid.appendChild(carCard);
//     });
// }

// // Search function
// function searchCars() {
//     const searchInput = document.querySelector('header input[type="text"]');
//     const searchTerm = searchInput.value.toLowerCase();
//     const filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchTerm));

//     const carGrid = document.querySelector('.car-grid');
//     carGrid.innerHTML = ''; // Clear existing content

//     filteredCars.forEach(car => {
//         const carCard = document.createElement('div');
//         carCard.classList.add('car-card');
//         carCard.innerHTML = `
//             <img src="${car.image}" alt="${car.name}">
//             <h3>${car.name}</h3>
//             <p>${car.description}</p>
//             <a href="#">View Details</a>
//         `;
//         carGrid.appendChild(carCard);
//     });
// }

// // Newsletter signup form validation
// function validateNewsletterForm(event) {
//     event.preventDefault(); // Prevent form submission

//     const emailInput = document.querySelector('aside input[type="email"]');
//     const email = emailInput.value;

//     // Simple email validation
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (emailPattern.test(email)) {
//         alert("Thank you for subscribing!");
//         emailInput.value = ''; // Clear the input field
//     } else {
//         alert("Please enter a valid email address.");
//     }
// }

// // Event listeners
// document.addEventListener('DOMContentLoaded', () => {
//     displayFeaturedCars(); // Display cars on page load

//     // Search functionality
//     const searchInput = document.querySelector('header input[type="text"]');
//     searchInput.addEventListener('input', searchCars);

//     // Newsletter signup form
//     const newsletterForm = document.querySelector('aside form');
//     newsletterForm.addEventListener('submit', validateNewsletterForm);
// });

function updateModels() {
    let brand = document.getElementById("brand").value;
    let modelSelect = document.getElementById("model");
    
    modelSelect.innerHTML = "";
    
    let models = {
        "toyota": ["Corolla", "Camry", "Prius", "RAV4"],
        "honda": ["Civic", "Accord", "CR-V", "Pilot"],
        "ford": ["F-150", "Mustang", "Explorer", "Escape"],
        "chevrolet": ["Silverado", "Malibu", "Equinox", "Traverse"],
        "bmw": ["3 Series", "5 Series", "X5", "X3"],
        "audi": ["A3", "A4", "Q5", "Q7"],
        "mercedes": ["A-Class", "C-Class", "E-Class", "GLC"]
    };

    let defaultOption = document.createElement("option");
    defaultOption.text = "Select a model";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    modelSelect.add(defaultOption);

    
    if (models[brand]) {
        models[brand].forEach(function(model) {
            let option = document.createElement("option");
            option.value = model.toLowerCase();
            option.text = model;
            modelSelect.add(option);
        });
    }
}