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

const zoekbalk = document.getElementById('zoek');

zoekbalk.addEventListener('input', function() {
    console.log("asdf");
    const zoekterm = zoekbalk.value.toLowerCase();
    const producten = document.querySelectorAll('.product');

    producten.forEach(function(product) {
        const naam = product.querySelector('.product-title').textContent.toLowerCase();
        if (naam.includes(zoekterm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});