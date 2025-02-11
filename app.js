let cars = {
    toyota: {
        camry: {
            model: "Toyota Camry",
            year: 2015,
            price: 2500000,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLDxs7-UtcNPy0xyXioK171yy_8AEKBWHtA&s"
        },
        corolla: {
            model: "Toyota Corolla",
            year: 2018,
            price: 2800000,
            picture: "https://propakistani.pk/wp-content/uploads/2017/12/Corolla-2018.jpg"
        },
        hilux: {
            model: "Toyota Hilux",
            year: 2019,
            price: 4000000,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMHmpy7iXnQhb3xESBbobqsc2uwz1PgnQMg&s"
        },
        landCruiser: {
            model: "Toyota Land Cruiser",
            year: 2020,
            price: 7000000,
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png/800px-2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png"
        },
        rav4: {
            model: "Toyota RAV4",
            year: 2021,
            price: 3500000,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46mNuYNjdAzZQ6Jtj9Z8P0nIPHBXwYA50Aw&s"
        }
    },
    honda: {
        civic: {
            model: "Honda Civic",
            year: 2018,
            price: 2800000,
            picture: "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/478000/400/478468.jpg"
        },
        accord: {
            model: "Honda Accord",
            year: 2017,
            price: 3000000,
            picture: "https://media.ed.edmunds-media.com/honda/accord/2017/oem/2017_honda_accord_sedan_touring-v-6_fq_oem_6_600.jpg"
        },
        crv: {
            model: "Honda CR-V",
            year: 2020,
            price: 3300000,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPejzO2Y84BWm3nueYdwtzUfRt6tnLirmsEg&s"
        },
        pilot: {
            model: "Honda Pilot",
            year: 2019,
            price: 4500000,
            picture: "https://media.ed.edmunds-media.com/honda/pilot/2023/oem/2023_honda_pilot_4dr-suv_elite_fq_oem_1_815.jpg"
        },
        odyssey: {
            model: "Honda Odyssey",
            year: 2021,
            price: 4200000,
            picture: "https://hips.hearstapps.com/hmg-prod/images/2021-honda-odyssey-293-1598917033.jpg?crop=0.566xw:0.477xh;0.171xw,0.501xh&resize=1200:*"
        }
    },
    ford: {
        mustang: {
            model: "Ford Mustang",
            year: 2020,
            price: 5000000,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdU6X4tsYqo8KEWt_t-vvSVx7-_TUH9dEc6Idi2Jcfhp2KJgnCK1Av-eVDbrPlcEL9Ac&usqp=CAU"
        },
        focus: {
            model: "Ford Focus",
            year: 2019,
            price: 2500000,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJi4XL0txY72tkzfuOcAF4vReMoZhHSEEZJQ&s"
        },
        explorer: {
            model: "Ford Explorer",
            year: 2021,
            price: 5000000,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMdMPDvCJuvmF-iGgRD9o8XndH0mldF8O2w&s"
        },
        ranger: {
            model: "Ford Ranger",
            year: 2020,
            price: 3800000,
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXHDCxNpR-qEhfnfEr8PNxObpHlQkwEVL6AQ&s"
        },
        f150: {
            model: "Ford F-150",
            year: 2020,
            price: 5500000,
            picture: "https://hips.hearstapps.com/hmg-prod/images/2024-ford-f-150-raptor-r-296-67092b83c578d.jpg?crop=0.572xw:0.645xh;0.165xw,0.333xh&resize=768:*"
        }
    }
}

let brands = document.getElementById("carBrands");
let models = document.getElementById("carModels");
let carList = document.getElementById("car-list");

function loadAllCars(){
    for (let brand in cars) {
        brands.innerHTML += `<option value="${brand}">${brand.toUpperCase()}</option>`;
        for (let model in cars[brand]) {
            let detail = cars[brand][model];
            carList.innerHTML += ` <div class="col">
                    <div class="card" style="width: 19rem;" id="card">
                        <img src="${detail.picture}" class="card-img-top car-image" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${detail.model}</h5>
                          <p class="card-text">${detail.year}</p>
                          <a href="#" class="btn btn-primary">Rs ${detail.price}</a>
                        </div>
                      </div>
                </div>`
    }
    }

}
loadAllCars();
function handleBrandChange(){
    models.innerHTML = `<option value="">ALL</option>`;
    for (let keys in cars[brands.value]){
        models.innerHTML += `<option value="${keys}">${keys.toUpperCase()}</option>`;
        }
        }

        function searchCar(){
            carList.innerHTML = "";
            if(brands.value && models.value){
                let detail = cars[brands.value][models.value]
                carList.innerHTML = ` <div class="col">
                <div class="card" style="width: 18rem;" id="card">
                    <img src="${detail.picture}" class="card-img-top car-image" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${detail.model}</h5>
                      <p class="card-text">${detail.year}</p>
                      <a href="#" class="btn btn-primary">Rs ${detail.price}</a>
                    </div>
                  </div>
            </div>`}
             else if (brands.value){
            for (let model in cars[brands.value]){
                let detail = cars[brands.value][model]
                carList.innerHTML += ` <div class="col">
                <div class="card" style="width: 18rem;" id="card">
                    <img src="${detail.picture}" class="card-img-top car-image" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${detail.model}</h5>
                      <p class="card-text">${detail.year}</p>
                      <a href="#" class="btn btn-primary">Rs ${detail.price}</a>
                    </div>
                  </div>
            </div>`
        }}
    else(loadAllCars())}