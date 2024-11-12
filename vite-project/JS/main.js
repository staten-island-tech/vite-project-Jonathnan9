import "../CSS/style.css";
import "../CSS/variables.css";
import { characters } from "./items.js";

const DOMSelectors = {
  themeButtons: document.querySelectorAll(".theme-button"),
  sortOptions: document.getElementById("sort-options"),
  boxesContainer: document.querySelector(".boxes"),
};

function createCharacterCard(
  name,
  type,
  gameVersions,
  imageUrl,
  plantType,
  sunCost,
  world,
  rarity,
  damageType,
  specialAbility
) {
  const container = document.querySelector(".boxes");

  container.insertAdjacentHTML(
    "beforeend",
    `
      <div class="box">
        <h2>${name}</h2>
        <div class="content">
        <img src="${imageUrl}" alt="${name}" />
        <div class="details">
          <p>Type: ${type}</p>
          <p>Game Versions: ${gameVersions.join(", ")}</p>
          <p>Plant Type: ${plantType}</p>
          <p>Sun Cost: ${sunCost}</p>
          <p>World: ${world}</p>
          <p>Rarity: ${rarity}</p>
          <p>Damage Type: ${damageType}</p>
          <p>Special Ability: ${specialAbility}</p>
        </div>
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
      character.Link,
      character.plantType,
      character.sunCost,
      character.world,
      character.rarity,
      character.damageType,
      character.specialAbility
    );
  });
}

displayCharacters();
