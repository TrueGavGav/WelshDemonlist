document.addEventListener("DOMContentLoaded", function() {
  const demonlist = document.getElementById("demonlist");
  const statsContainer = document.getElementById("stats");
  const statsBody = document.getElementById("stats-body");
  const statsViewerBtn = document.getElementById("stats-viewer-btn");
  const listViewBtn = document.getElementById("list-view-btn");

  // Sample demon data with records and verifiers
  const demons = [
  { 
    name: "Top 1 Zodiac", 
    creator: "Bianox", 
    difficulty: "Extreme Demon", 
    completions: [
      { record: { text: "None", link: "#" }, verifier: { name: "Ajay", link: "https://youtu.be/qaAsEU-xBmM?si=H5Nqx8wwCuvSYuKy" } },
      // Add more completion records if needed
    ]
  },
  { 
    name: "DemonName2", 
    creator: "CreatorName2", 
    difficulty: "Difficulty2", 
    completions: [
      { record: { text: "RecordText2", link: "RecordLink2" }, verifier: { name: "VerifierName2", link: "VerifierLink2" } },
      // Add more completion records if needed
    ]
  },
  // Add more demons as needed
];
  // Sample player data for the stats viewer
  const players = [
  { 
    name: "Ajay", 
    points: 100, 
    verifiedLevels: ["Zodiac"], 
    completedLevels: [] 
  }
  // Add more player data as needed
];


  // Sort the players array based on points (descending order)
  players.sort((a, b) => b.points - a.points);

 // Function to populate the demon list
function populateDemonList() {
  demonlist.innerHTML = ""; // Clear previous demon list
  demons.forEach(demon => {
    const li = document.createElement("li");
    li.classList.add("demon-item");
    let completionsHTML = '';
    demon.completions.forEach((completion, index) => {
      completionsHTML += `<div class="record-verifier">
                            <span class="verifier-label">Completion ${index + 1}:</span> 
                            <a href="${completion.record.link}" class="completion-record">${completion.record.text}</a><br>
                          </div>`;
    });
    const thumbnailSrc = `thumbnails/${demon.name}.png`; // Update the thumbnail source to include the folder name
    li.innerHTML = `<div class="demon-name">${demon.name}</div> 
                    <img src="${thumbnailSrc}" alt="${demon.name}" class="thumbnail">
                    by ${demon.creator} - ${demon.difficulty}<br>
                    <div class="record-verifier">
                      <span class="verifier-label">Verifier:</span> 
                      <a href="${demon.completions[0].verifier.link}" class="verifier-name">${demon.completions[0].verifier.name}</a>
                    </div>${completionsHTML}`;
    demonlist.appendChild(li);
  });
}


  // Function to populate the stats viewer with player data
  function populateStatsViewer() {
    statsBody.innerHTML = ""; // Clear previous stats
    players.forEach(player => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${player.name}</td>
        <td>${player.points}</td>
        <td>${player.verifiedLevels.join(', ')}</td>
        <td>${player.completedLevels.join(', ')}</td>
      `;
      statsBody.appendChild(row);
    });
  }

 // Function to toggle between demon list and stats viewer
function toggleView(view) {
  if (view === 'stats') {
    demonlist.style.display = 'none';
    statsContainer.style.display = 'block';
    statsViewerBtn.style.display = 'none';
    listViewBtn.style.display = 'block';
    populateStatsViewer(); // Populate the stats viewer when switching to it
  } else {
    demonlist.style.display = 'block';
    statsContainer.style.display = 'none';
    statsViewerBtn.style.display = 'block';
    listViewBtn.style.display = 'none';
  }
}

  // Attach event listeners to the buttons
  statsViewerBtn.addEventListener("click", function() {
    toggleView('stats');
  });

  listViewBtn.addEventListener("click", function() {
    toggleView('list');
  });

  // Initial population of demon list
  populateDemonList();
});

let counter = 1; // Start counter from 1

function generateDemonList() {
    const demonList = document.querySelector('.demonlist');

    // Clear existing list items
    demonList.innerHTML = '';

    // Generate list items dynamically
    for (let i = 1; i <= counter; i++) {
        const listItem = document.createElement('li');
        listItem.classList.add('demon-item');
        listItem.innerHTML = `<span class="demon-name">Demon ${i}</span>`;
        demonList.appendChild(listItem);
    }
}

function toggleView() {
    const demonlistContainer = document.querySelector('.demonlist-container');
    const statsContainer = document.querySelector('.stats-container');

    demonlistContainer.classList.toggle('hidden');
    statsContainer.classList.toggle('hidden');
}

// Initial generation of demon list
generateDemonList();
