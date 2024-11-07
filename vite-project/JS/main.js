import "../CSS/style.css";
import { characters } from "./items.js";

const DOMSelectors = {
  themeButtons: document.querySelectorAll(".theme-button"),
};

function createCharacterCard(name, type, gameVersions, imageUrl) {
  const container = document.querySelector(".boxesContainer");

  container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="box">
      <h2>${name}</h2>
      <img src="${imageUrl}" alt="${name}" />
      <p>Type: ${type}</p>
      <p>Game Versions: ${gameVersions.join(", ")}</p>
    </div>
    `
  );
}

function displayCharacters() {
  characters.forEach((character) => {
    createCharacterCard(
      character.characterName,
      character.characterType,
      character.gameVersions,
      character.Link
    );
  });
}

displayCharacters();
