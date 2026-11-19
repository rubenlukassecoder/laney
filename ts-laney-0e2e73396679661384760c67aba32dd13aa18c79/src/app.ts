import Laney from "./Laney.js";

const lanes: number = 3;

let laney: Laney;

const resetButton: HTMLButtonElement = document.getElementById("restart") as HTMLButtonElement;

const messageDiv: HTMLDivElement = document.getElementById("message") as HTMLDivElement;

const totalDiv: HTMLDivElement = document.getElementById("total") as HTMLDivElement;

let bestScore: number = 0;

const bestScoreDiv: HTMLDivElement = document.getElementById("best-score") as HTMLDivElement;

const laneDivs: HTMLDivElement[] = [];

const placeButtons: HTMLButtonElement[] = [];

// Updates the display of the game
function updateDisplay(): void {
  messageDiv.innerHTML = laney.getMessage();
  for (let i: number = 0; i < lanes; i++) {
    laneDivs[i].innerHTML = laney.getLaneTotal(i).toString();
    laneDivs[i].style.fontSize = `${Math.max(laney.getLaneTotal(i) / 2, 10)}pt`;
  }
  const total: number = laney.getTotal();
  totalDiv.innerHTML = total.toString();
  const busted: boolean = laney.isBusted();
  if (!busted) {
    if (total > bestScore) {
      bestScore = total;
      bestScoreDiv.innerHTML = bestScore.toString();
    }
  }
  for (let i: number = 0; i < lanes; i++) {
    placeButtons[i].disabled = busted;
  }
}

// Provides a new guess to the Laney instance.
function placeNumber(lane: number): void {
  laney.placeNumberInLane(lane);
  updateDisplay();
}

// Creates a new instance of the Laney class and updates the display
function startNewGame(): void {
  laney = new Laney(lanes);
  updateDisplay();
}

// Click handler for the "Reset" button to reset the game
// Makes a new Laney game
resetButton.addEventListener("click", () => {
  startNewGame();
});


// Once the page is loaded, start a new Laney game
window.addEventListener("load", () => {
  const lanesDiv: HTMLDivElement = document.getElementById("lanes") as HTMLDivElement;

  const buttonsDiv: HTMLDivElement = document.getElementById("place-buttons") as HTMLDivElement;

  for (let i: number = 0; i < lanes; i++) {
    const laneDiv: HTMLDivElement = document.createElement("div");
    laneDiv.className = "lane";
    laneDivs.push(laneDiv);
    lanesDiv.appendChild(laneDiv);
    const placeButton: HTMLButtonElement = document.createElement("button");
    placeButton.className = "place";
    placeButton.innerHTML = "&uarr;";
    placeButton.addEventListener("click", () => {
      placeNumber(i);
    });
    buttonsDiv.appendChild(placeButton);
    placeButtons.push(placeButton);

    (document.getElementById("game") as HTMLDivElement).style.width = `${lanes * 100 + 100}px`;
  }

  startNewGame();
});
