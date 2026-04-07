function filterProducten(categorie) {
    const producten = document.querySelectorAll('.product');

    producten.forEach(function (product) {
        if (product.dataset.categorie === categorie || categorie === 'alles') {
            product.style.display = 'block'; // Toon het product
        } else {
            product.style.display = 'none'; // Verberg het product
        }
    });
}