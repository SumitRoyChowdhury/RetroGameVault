let apiKey = "f32b5c00dd434afab1ea3c6d90fa67a6";

let searchBoxEle = document.getElementById("search-box");
let searchBtnEle = document.getElementById("search-btn");
let platformsEle = document.getElementsByName("Platform");
let genreEle = document.getElementsByName("genre");
let cardsContainer = document.getElementsByClassName("cards-container")[0];

// let retroBtnEle = document.getElementById("retroBtn");
// let modernBtnEle = document.getElementById("modernBtn");

function searchByTitle(){
    let searchQuery = searchBoxEle.value;
    let searchQueryArr = searchQuery.split(" ");
    let formattedSearchQuery = searchQueryArr.join("-");
    fetch(`https://api.rawg.io/api/games?key=${apiKey}&search=${formattedSearchQuery}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        let card = document.createElement("div");
        card.innerHTML =`
        <div id="card1" class="card">
            <img src=${data["results"][0]["background_image"]} alt="Game card"/>
            <button class="wishlist-btn">Add to wishlist</button>
            <button class="compare-stats">Compare stats</button>
        </div>`;
        cardsContainer.appendChild(card);
        card.classList.add("card")
})
}

searchBtnEle.addEventListener("click", searchByTitle)
// retroBtnEle.addEventListener("click", searchWithDate)


for(let ele of platformsEle){
    ele.addEventListener("click", ()=>{
        searchByPlatform(ele.value)
    });
}

function searchByPlatform(platform){
    fetch(`https://api.rawg.io/api/games?key=${apiKey}&platform=${Number(platform)}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        let card = document.createElement("div");
        card.innerHTML =`
        <div id="card1" class="card">
            <img src=${data["results"][0]["background_image"]} alt="Game card"/>
            <button class="wishlist-btn">Add to wishlist</button>
            <button class="compare-stats">Compare stats</button>
        </div>`;
        cardsContainer.appendChild(card);
        card.classList.add("card")
})
}

for(let ele of genreEle){
    ele.addEventListener("click", ()=>{
        searchByGenre(ele.value);
    })
}

function searchByGenre(genre){
    fetch(`https://api.rawg.io/api/games?key=${apiKey}&genre=${genre}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        let card = document.createElement("div");
        card.innerHTML =`
        <div id="card1" class="card">
            <img src=${data["results"][0]["background_image"]} alt="Game card"/>
            <button class="wishlist-btn">Add to wishlist</button>
            <button class="compare-stats">Compare stats</button>
        </div>`;
        cardsContainer.appendChild(card);
        card.classList.add("card")
})
}
