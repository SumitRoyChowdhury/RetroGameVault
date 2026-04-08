let container = document.getElementById("wishlist-container");

function loadWishlist(){
    let wishList = JSON.parse(localStorage.getItem("wishList"));
    if(wishList == null){
        wishList = [];
    }
    if(wishList.length === 0){
        container.innerHTML = "<h2>No items in wishlist</h2>";
        return;
    }
    wishList.forEach(game => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="img-container">
                <img src="${game.img}" alt="Game"/>
            </div>
            <div class="game-title">${game.title}</div>
            <button class="remove-btn">Remove</button>
        `;
        container.appendChild(card);
    });
}

loadWishlist();

container.addEventListener("click", function(event){
    if(event.target.classList.contains("remove-btn")){
        let card = event.target.closest(".card");
        let title = card.querySelector(".game-title").innerText.trim();
        let wishList = JSON.parse(localStorage.getItem("wishList"));
        if (wishList == null){
            wishList = [];
        }
        wishList = wishList.filter(game => 
            game.title.trim().toLowerCase() !== title.toLowerCase()
        );
        localStorage.setItem("wishList", JSON.stringify(wishList));
        card.remove();
    }
});