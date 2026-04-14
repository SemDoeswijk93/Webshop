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

function addToCart(productname) {
    // Haal de huidige cart op, of begin met een lege array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Zoek of get product al in de cart zit. 
    let index = cart.findIndex((element) => element.name === productname);

    if (index >= 0) {
        // Product bestaat al, verhoog het aantal.
        cart[index].amount += 1; 

    } else {
        // Nieuw Product, voeg het toe aan array
        cart.push ({
            name: productname, 
            amount: 1 
        });
    }


    // Sla de bijgewerkte cart op 
    localStorage.setItem('cart', JSON.stringify(cart));
}