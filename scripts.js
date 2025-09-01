fetch('mods.json')
.then(response => response.json())
.then(mods => {
    const container = document.getElementById('mod-container');
    mods.forEach(mod => {
        const card = document.createElement('div');
        card.className = 'mod-card';
        card.innerHTML = `
            <img src="${mod.thumbnail}" alt="${mod.name}">
            <div class="content">
                <h3>${mod.name}</h3>
                <p>${mod.description}</p>
                <p>다운로드: ${mod.downloads}</p>
                <a href="${mod.download}" download>다운로드</a>
            </div>
        `;
        container.appendChild(card);
    });
});
