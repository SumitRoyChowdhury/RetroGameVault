# 🎮 Retro Game Vault

## 📌 Overview

Retro Game Vault is a web-based search engine designed for discovering both retro and modern video games. It allows you to explore games, filter them by platform, compare the stats of two games and add games to your personalized wishlist.

The goal of this project is to create a clean, responsive, and interactive interface that makes browsing game data enjoyable and efficient.

## 🚀 Features

### 🔍 Game Search
* Directly search for the game you are looking for using the search box provided.
* Fast and responsive results display

### 🎯 Platform Filtering
Filter games by platforms such as:
* PC
* Mobile Phone
* PlayStation
* Xbox
* Nintendo

### ⭐ Favorites / Wishlist
* Save games to a Favorites sidebar
* Data stored in browser memory (`localStorage`)

### 🖼️ Game Display
Grid layout with:
* Large game box art
* Ratings and basic info

### ⚖️ Compare Mode (Planned Feature)
Compare two games side-by-side based on details like:
* Ratings
* Platforms
* Release dates
* Genres

## 🌐 API Used

This project uses the **RAWG Video Games Database API**:

* **API Docs:** [https://rawg.io/apidocs]
* **Provides:** Game data, Ratings, Platforms, Images, Release info

## 🛠️ Technologies Used

* **HTML5** – To structure the website
* **CSS** – For styling and layout
* **JavaScript** – For logic and functionality
* **RAWG API** – For fetching data
* **LocalStorage** – For storing wishlist data

## 📂 Project Structure (Basic)

```text
Retro-Game-Vault/
│
├── index.html
├── style.css
├── script.js
├── README.md
```

## ⚙️ Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SumitRoyChowdhury/RetroGameVault.git
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd RetroGameVault
    ```

3.  **Open in browser:**
    Simply open `index.html` in your browser.

## 🔑 API Key Setup

1.  Create an account on RAWG.
2.  Get your own API key.
3.  Replace it in your JavaScript file:
    ```javascript
    const API_KEY = "your_api_key_here";
    ```

## 🧠 Future Improvements

* Advanced filtering (genre, rating, release year)
* User authentication
* Cloud-based wishlist saving
* Game trailers and screenshots


## ✨ Author

Sumit Roy Chowdhury
([https://github.com/SumitRoyChowdhury])

*Built for enthusiasts and professional gamers.*