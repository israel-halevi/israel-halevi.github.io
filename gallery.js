fetch('paintings.json')
    .then(response => response.json())
    .then(paintings => {
        const gallery = document.getElementById('gallery');

        paintings.forEach(painting => {
            const article = document.createElement('article');

            article.innerHTML = `
                <img src="${painting.image}" alt="${painting.title}">
                <h2>${painting.title}</h2>
                <p>${painting.size.width} × ${painting.size.height} ${painting.size.unit}</p>
                <p>${painting.material}, ${painting.year}</p>
            `;

            gallery.appendChild(article);
        });
    });
