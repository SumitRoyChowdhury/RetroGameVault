let container = document.getElementById("compare-container");
function loadCompare(){
    let compareList = JSON.parse(localStorage.getItem("compareList"));
    if (compareList == null){
        compareList = [];
    }
    if(compareList.length === 0){
        container.innerHTML = "<h2 style='color:white'>No games selected</h2>";
        return;
    }
    compareList.forEach(game => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${game.img}" style="width:100%; border-radius:10px;">
            <h3 style="color: white">${game.title}</h3>
            <button class="remove-btn">Remove</button>`;
        container.appendChild(card);
    });
}
loadCompare();

container.addEventListener("click", function(event){
    if(event.target.classList.contains("remove-btn")){
        let title = event.target.parentElement.getElementsByTagName("h3")[0].innerText;
        let compareList = JSON.parse(localStorage.getItem("compareList"));
        if (compareList == null){
            compareList = []
        }
        compareList = compareList.filter(game => game.title !== title);
        localStorage.setItem("compareList", JSON.stringify(compareList));
        location.reload();
    }
});