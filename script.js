// 1. Grab elements from our HTML
const gameInput = document.getElementById('gameInput');
const imageInput = document.getElementById('imageInput');
const addBtn = document.getElementById('addBtn');
const pickBtn = document.getElementById('pickBtn');
const gameList = document.getElementById('gameList');
const gameCount = document.getElementById('gameCount');
const resultBox = document.getElementById('resultBox');
const selectedGameName = document.getElementById('selectedGameName');
const selectedGameImage = document.getElementById('selectedGameImage');

// 2. Pre-load our array with objects (Title + Image URL)
let games = [
    { title: "Chrono Trigger", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=150&auto=format&fit=crop&q=80" },
    { title: "Super Mario World", image: "https://images.unsplash.com/photo-1612287233306-60472449a0f0?w=150&auto=format&fit=crop&q=80" },
    { title: "The Legend of Zelda: Ocarina of Time", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=150&auto=format&fit=crop&q=80" },
    { title: "Pokemon Emerald", image: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=150&auto=format&fit=crop&q=80" },
    { title: "Castlevania: Symphony of the Night", image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=150&auto=format&fit=crop&q=80" },
    { title: "Metroid Fusion", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=150&auto=format&fit=crop&q=80" },
    { title: "Final Fantasy VII", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=80" },
    { title: "Resident Evil 2", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=150&auto=format&fit=crop&q=80" },
    { title: "Silent Hill 2", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=150&auto=format&fit=crop&q=80" },
    { title: "Grand Theft Auto: San Andreas", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=150&auto=format&fit=crop&q=80" }
];

// 3. Function to update what shows up on the screen
function renderGames() {
    gameList.innerHTML = '';

    games.forEach((game, index) => {
        const li = document.createElement('li');
        
        // If no image is provided, use a default placeholder icon
        const imgSrc = game.image ? game.image : "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80";

        li.innerHTML = `
            <div class="game-item">
                <img src="${imgSrc}" alt="${game.title}" class="game-thumb">
                <span>${game.title}</span>
            </div>
            <button onclick="deleteGame(${index})">X</button>
        `;
        gameList.appendChild(li);
    });

    gameCount.textContent = games.length;
}

// 4. Function to add a new game object
function addGame() {
    const titleText = gameInput.value.trim();
    const imageText = imageInput.value.trim();
    
    if (titleText === "") return;

    // Push an object containing the title and image into our array
    games.push({
        title: titleText,
        image: imageText
    });

    // Clear the input boxes
    gameInput.value = '';
    imageInput.value = '';

    renderGames();
}

// 5. Function to delete a game by its index number
function deleteGame(index) {
    games.splice(index, 1);
    renderGames();
}

// 6. Function to pick a random game
// 6. Function to pick a random game
function pickRandomGame() {
    if (games.length === 0) {
        alert("Add some games to your list first!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * games.length);
    const chosenGame = games[randomIndex];

    // Default placeholder if the game has no image
    const imgSrc = chosenGame.image ? chosenGame.image : "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=80";

    // Update text and image source
    selectedGameName.textContent = chosenGame.title;
    selectedGameImage.src = imgSrc;
    selectedGameImage.alt = chosenGame.title;

    // Reveal the result box
    resultBox.classList.remove('hidden');
}

// 7. Event Listeners
addBtn.addEventListener('click', addGame);

gameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addGame();
});

imageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addGame();
});

pickBtn.addEventListener('click', pickRandomGame);

// Run initially to show the pre-loaded 10 games
renderGames();