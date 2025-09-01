async function loadMods() {
  const res = await fetch("mods.json");
  const mods = await res.json();
  const container = document.getElementById("mods-container");

  mods.forEach(mod => {
    const card = document.createElement("div");
    card.className = "mod-card";

    card.innerHTML = `
      <img src="${mod.thumbnail}" alt="${mod.name}">
      <h2>${mod.name}</h2>
      <p>${mod.description}</p>
      <select id="version-${mod.name}">
        ${mod.versions.map(v => `<option value="${v.download}">${v.version}</option>`).join("")}
      </select>
      <button onclick="downloadMod('${mod.name}')">다운로드</button>
    `;

    container.appendChild(card);
  });
}

function downloadMod(modName) {
  const select = document.getElementById(`version-${modName}`);
  const url = select.value;
  window.open(url, "_blank");
}

loadMods();
