// places.js
let places = {
    'Francia': [
        { name: 'París', status: 'pendiente' },
        { name: 'Niza', status: 'visitado' }
    ],
    'Italia': [
        { name: 'Roma', status: 'pendiente' },
        { name: 'Venecia', status: 'pendiente' }
    ],
    'Japón': [
        { name: 'Tokio', status: 'pendiente' },
        { name: 'Kioto', status: 'pendiente' }
    ]
};

// Cargar desde localStorage si existe
if (localStorage.getItem('places')) {
    places = JSON.parse(localStorage.getItem('places'));
}

function showCities(country) {
    const cityList = document.getElementById('city-list');
    cityList.innerHTML = '';
    places[country].forEach((city, index) => {
        const li = document.createElement('li');
        li.textContent = `${city.name} - ${city.status}`;
        li.className = city.status;
        li.onclick = () => toggleStatus(country, index);
        cityList.appendChild(li);
    });
}

function toggleStatus(country, index) {
    const city = places[country][index];
    city.status = city.status === 'pendiente' ? 'visitado' : 'pendiente';
    // Guardar en localStorage
    localStorage.setItem('places', JSON.stringify(places));
    // Actualizar la lista
    showCities(country);
}