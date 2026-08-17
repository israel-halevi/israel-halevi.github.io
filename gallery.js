fetch('paintings.json')
    .then(response => response.json())
    .then(paintings => {
        const gallery = document.getElementById('gallery');

        paintings.forEach(painting => {
            const article = document.createElement('article');
            article.className = 'painting';
            
            article.innerHTML = `
                <img src="${painting.image}" alt="${painting.title}">
                <p style="margin-top: 10px;"><strong style="font-size: 1.15em;">${painting.title}</strong></p>
                <p>${painting.size.width} × ${painting.size.height} ${painting.size.unit}</p>
                <p>${painting.material}, ${painting.year}</p>
            `;

            gallery.appendChild(article);
        });
    });
