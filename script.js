// 1. Grab elements from our HTML
const gameInput = document.getElementById('gameInput');
const addBtn = document.getElementById('addBtn');
const pickBtn = document.getElementById('pickBtn');
const gameList = document.getElementById('gameList');
const gameCount = document.getElementById('gameCount');
const resultBox = document.getElementById('resultBox');
const selectedGameName = document.getElementById('selectedGameName');

// 2. Create our array to store the games
let games = [];

// 3. Function to update what shows up on the screen
function renderGames() {
    // Clear the current HTML list so it doesn't duplicate items
    gameList.innerHTML = '';

    // Loop through our array and create an <li> for each game
    games.forEach((game, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${game}</span>
            <button onclick="deleteGame(${index})">X</button>
        `;
        gameList.appendChild(li);
    });

    // Update the counter text
    gameCount.textContent = games.length;
}

// 4. Function to add a game
function addGame() {
    const text = gameInput.value.trim();
    
    // Make sure the input isn't empty
    if (text === "") return;

    // Push the new game into our array
    games.push(text);

    // Clear the input box
    gameInput.value = '';

    // Refresh the screen display
    renderGames();
}

// 5. Function to delete a game by its index number
function deleteGame(index) {
    games.splice(index, 1);
    renderGames();
}

// 6. Function to pick a random game
function pickRandomGame() {
    if (games.length === 0) {
        alert("Add some games to your list first!");
        return;
    }

    // Generate a random index number based on how many games are in the array
    const randomIndex = Math.floor(Math.random() * games.length);
    const chosenGame = games[randomIndex];

    // Show the result box and update the text
    resultBox.classList.remove('hidden');
    selectedGameName.textContent = chosenGame;
}

// 7. Hook up our buttons to event listeners
addBtn.addEventListener('click', addGame);

// Allow pressing "Enter" key on the input box to add the game
gameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addGame();
    }
});

pickBtn.addEventListener('click', pickRandomGame);