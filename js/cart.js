const cart = JSON.parse(localStorage.getItem('cart')) || [];
const list = document.querySelector('#products');
const totalPriceElement = document.querySelector('#total-price');

function fillCartList() {
    let total = 0; 
    cart.forEach(element => {
        let row = document.createElement('tr');

        let itemTotal = element.price * element.amount; // Prijs x Het aantal dezelfde producten

        row.innerHTML = `
            <td>${element.name}</td>
            <td>${element.amount}</td>
            <td>€${itemTotal.toFixed(2)}</td> 
        `; // Dit laat de totale prijs en de prijzen zien apart van elkaar. 

        list.appendChild(row);

        total += itemTotal; // Prijzen bijelkaar optellen 
    });


    totalPriceElement.innerHTML = `<strong>Totaal: €${total.toFixed(2)}</strong>`; // Weergave van de totale prijs
}

fillCartList();

function clearCart() {
    localStorage.removeItem('cart'); // Verwijdert je winkelwagen van je local storage
    location.reload(); // refreshed de pagina
}