import "../CSS/style.css";
import "../CSS/variables.css";
import { characters } from "./items.js";

const DOMSelectors = {
  themeButtons: document.querySelectorAll(".theme-button"),
  checkboxes: document.querySelectorAll("input[type='checkbox']"),
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
          <p>Damage Type: ${damageType}</p>
          <p>Special Ability: ${specialAbility}</p>
        </div>
      </div>
    `
  );
}

function displayCharacters(filteredCharacters) {
  DOMSelectors.boxesContainer.innerHTML = "";
  filteredCharacters.forEach((character) => {
    createCharacterCard(
      character.characterName,
      character.characterType,
      character.gameVersions,
      character.Link,
      character.plantType,
      character.sunCost,
      character.world,
      character.damageType,
      character.specialAbility
    );
  });
}

function getSelectedFilters() {
  const filters = {
    characterType: [],
    gameVersion: [],
    plantType: [],
    sunCost: [],
    world: [],
    damageType: [],
  };

  DOMSelectors.checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      filters[checkbox.name].push(checkbox.value);
    }
  });

  return filters;
}

function filterCharacters() {
  const filters = getSelectedFilters();

  const filteredCharacters = characters.filter((character) => {
    return (
      (!filters.characterType.length ||
        filters.characterType.includes(character.characterType)) &&
      (!filters.gameVersion.length ||
        filters.gameVersion.some((version) =>
          character.gameVersions.includes(version)
        )) &&
      (!filters.plantType.length ||
        filters.plantType.includes(character.plantType)) &&
      (!filters.sunCost.length ||
        filters.sunCost.includes(String(character.sunCost))) &&
      (!filters.world.length || filters.world.includes(character.world)) &&
      (!filters.damageType.length ||
        filters.damageType.includes(character.damageType))
    );
  });

  displayCharacters(filteredCharacters);
}

DOMSelectors.checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", filterCharacters);
});

displayCharacters(characters);

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("form-dropdown");
  const formContainer = document.getElementById("form-container");

  dropdown.addEventListener("change", (event) => {
    if (event.target.value === "show") {
      formContainer.classList.remove("hidden");
    } else {
      formContainer.classList.add("hidden");
    }
  });
});

const themeDropdown = document.getElementById("theme-dropdown");

themeDropdown.addEventListener("change", function () {
  if (themeDropdown.value === "dark") {
    document.body.classList.remove("lightMode");
    document.body.classList.add("darkMode");
  } else {
    document.body.classList.remove("darkMode");
    document.body.classList.add("lightMode");
  }
});

document.body.classList.add("lightMode");
