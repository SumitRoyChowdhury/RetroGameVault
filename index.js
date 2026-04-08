let apiKey = "f32b5c00dd434afab1ea3c6d90fa67a6";
let i = 1;

window.localStorage;

let searchBoxEle = document.getElementById("search-box");
let searchBtnEle = document.getElementById("search-btn");
let platformsEle = document.getElementsByName("Platform");
let genreEle = document.getElementsByName("genre");
let cardsContainer = document.getElementsByClassName("cards-container")[0];


// let retroBtnEle = document.getElementById("retroBtn");
// let modernBtnEle = document.getElementById("modernBtn");

function searchByTitle(){
    let gameData = [];
    let searchQuery = searchBoxEle.value;
    let searchQueryArr = searchQuery.split(" ");
    let formattedSearchQuery = searchQueryArr.join("-");
    fetch(`https://api.rawg.io/api/games?key=${apiKey}&search=${formattedSearchQuery}`)
    .then(res => res.json())
    .then(data =>{
        gameData = data["results"];
        console.log(gameData);
        render(gameData);
})
}

searchBtnEle.addEventListener("click", searchByTitle)

for(let ele of platformsEle){
    ele.addEventListener("click", ()=>{
        searchByPlatform(ele.value)
    });
}

function searchByPlatform(platform){
    let gameData = [];
    fetch(`https://api.rawg.io/api/games?key=${apiKey}&platform=${Number(platform)}`)
    .then(res => res.json())
    .then(data =>{
        gameData = data["results"]
        render(gameData);
})
}

for(let ele of genreEle){
    ele.addEventListener("click", ()=>{
        searchByGenre(ele.value);
    })
}

function searchByGenre(genre){
    let gameData = [];
    fetch(`https://api.rawg.io/api/games?key=${apiKey}&genre=${genre}`)
    .then(res => res.json())
    .then(data =>{
        gameData = data["results"];
        render(gameData);
})
}

function render(arr){
    cardsContainer.innerHTML = "";
    for(let ele of arr){
        let background_image = ele["background_image"];
        let card = document.createElement("div");
        // card.innerHTML = `
        // <div>
        //     <div class="img-container">
        //         <img src=${background_image} alt="Game card"/>
        //     </div>
        //     <div class="game-title">${ele["name"]}</div>
        //     <button class="wishlist-btn">Add to wishlist</button>
        //     <button class="compare-stats">Compare stats</button>
        // </div>`;
        card.innerHTML = `
            <div class="img-container">
                <img src=${background_image} alt="Game card"/>
            </div>
            <div class="game-title">${ele["name"]}</div>
            <div>
                <button class="wishlist-btn">Add to wishlist</button>
                <button class="compare-stats">Compare stats</button>
            </div>`;
        cardsContainer.appendChild(card);
        card.classList.add("card");
    }
}

cardsContainer.addEventListener("click", function(event){
    if(event.target.classList.contains("wishlist-btn")){
            let card = event.target.closest(".card")
            if(!card) return;
            let gameTitle = card.getElementsByClassName("game-title")[0].innerText.trim();
            let gameImg = card.getElementsByTagName("img")[0].src;
            let gameDetails = {
                "title": gameTitle,
                "img": gameImg
            }
            saveToWishList(gameDetails);
    }
    else if(event.target.closest(".compare-stats")){
    let card = event.target.closest(".card");
    if(!card) return;

    let gameTitle = card.getElementsByClassName(".game-title")[0].innerText.trim();
    let gameImg = card.getElementsByTagName("img")[0].src;

    let gameDetails = {
        title: gameTitle,
        img: gameImg
    };
    let compareList = JSON.parse(localStorage.getItem("compareList"));
    if (compareList == null){
        compareList = [];
    }
    if(compareList.length >= 2){
        alert("You can only compare 2 games");
        return;
    }
    let exists = false;
    compareList.forEach(game =>{
        if(game["title"] === gameTitle){
            exists = true;
        }
    })
    if(exists){
        alert("Already added for comparison");
        return;
    }
    compareList.push(gameDetails);
    localStorage.setItem("compareList", JSON.stringify(compareList));
    window.location.href = "compare.html";
    }
})

function saveToWishList(game){
    let wishList = JSON.parse(localStorage.getItem("wishList"))
    if(wishList == null){
        wishList = [];
    }
    let alreadyExists = false;
    // for(let ele of wishList){
    //     if(ele["title"] === game["title"]){
    //         alreadyExists = true;
    //         alert("Already Exists");
    //         break;
    //     }
    // }
    wishList.forEach(ele => {
        if(ele["title"] === game["title"]){
            alreadyExists = true;
            alert("Already Exists");
        }
    })

    if(!alreadyExists){
        wishList.push(game);
        localStorage.setItem("wishList", JSON.stringify(wishList));
        alert("Added to wishlist");
    }
    console.log(wishList);
}

