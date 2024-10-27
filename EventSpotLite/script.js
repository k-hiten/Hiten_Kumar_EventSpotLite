//cards
const events = [
    {
      id: 1,
      name: "Anuv Jain",
      date: "2024-11-07",
      Genre: "Concerts",
      location: "Indore",
      description: "A soulful concert by Anuv Jain, featuring popular tracks and new music.",
      imageUrl: "https://www.hindustantimes.com/ht-img/img/2023/10/16/550x309/anuvjainfinalsamarthgoyalhindustantimes_1697450437885_1697450438168.jpg"
    },
    {
        id: 2,
        name: "Zomaland Carnival",
        date: "2024-11-14",
        Genre: "Concerts",
        location: "Mumbai",
        description: "A vibrant carnival by Zomato with food, fun, and music in Mumbai.",
        imageUrl: "https://res.cloudinary.com/dwzmsvp7f/image/upload/f_auto,w_640/c_crop%2Cg_custom%2Fv1707139947%2Feeelpnaqli6znjwzq8wo.jpg"
    },
    {
        id: 3,
        name: "Diljit Dosanjh",
        date: "2024-11-21",
        Genre: "Concerts",
        location: "Bangalore",
        description: "A live performance by Diljit Dosanjh with his chart-topping Punjabi hits.",
        imageUrl: "https://www.financialexpress.com/wp-content/uploads/2024/09/Diljit-Dosanjh-Concert.jpg?w=1024"
    },
    {
        id: 4,
        name: "Karan Aujla",
        date: "2024-11-29",
        Genre: "Concerts",
        location: "Bangalore",
        description: "Experience Karan Aujla live, delivering his latest Punjabi hits.",
        imageUrl: "https://s1.ticketm.net/dam/a/357/f19e3008-8def-4eda-aceb-c65c9abaa357_RETINA_PORTRAIT_3_2.jpg"
    },
    {
        id: 5,
        name: "Samay Raina",
        date: "2024-12-15",
        Genre: "Comedy",
        location: "Delhi",
        description: "Experience Samay Raina live, delivering his funny set.",
        imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/ed22fba066e88ff762b13837e1f6db2fe9a6cd1fc9504fbbce445b9adf237614._SX600_.jpg"
    },
    {
        id: 6,
        name: "Gaurav Kapoor",
        date: "2024-12-29",
        Genre: "Comedy",
        location: "Chandigarh",
        description: "Experience Gaurav Kapoor live, delivering his latest Comedy Sets.",
        imageUrl: "https://imgs.search.brave.com/Q0_xUWkJYcP-ABRyYkHfdWRkjnUYze_B67JSvkH7Igk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5tSTJORFpp/WWpBdFpXVXpOeTAw/T0RBMExXRTBPV0l0/T1dSaE5ERTRNak5t/T1Rnd1hrRXlYa0Zx/Y0djQC5qcGc"
    },
    {
        id: 7,
        name: "Ind v NZ",
        date: "2024-12-31",
        Genre: "Sports",
        location: "Chennai",
        description: "Experience India vs NZ live.",
        imageUrl: "https://imgs.search.brave.com/VCdJeW_FRF31Ea2s6FAIh60JpXXU1b3v8PP3hZktPYc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGluZHVzdGFu/dGltZXMuY29tL3Jm/L2ltYWdlX3NpemVf/NjMweDM1NC9IVC9w/Mi8yMDIwLzAxLzIy/L1BpY3R1cmVzL2lu/ZGlhLXYtbmV3LXpl/YWxhbmQtMXN0LW9k/aS1tdW1iYWlfYTZj/YzQwMjgtM2QxNC0x/MWVhLWFlNTYtZjkw/OTk0NTU0NmQ1LkpQ/Rw"
    },
    {
        id: 8,
        name: "Lollapalooza India",
        date: "2025-01-10",
        Genre: "Concerts",
        location: "Mumbai",
        description: "Experience International Artists live, delivering their latest hits.",
        imageUrl: "https://preview.redd.it/new-show-lollapalooza-india-in-mumbai-india-march-8-9-2025-v0-4cieyepxhynd1.png?width=1080&crop=smart&auto=webp&s=794603e385aa217eec4282cf468ea4427af1c341"
    }
];



//domElm
const eventList = document.getElementById('eventList');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImage = document.getElementById('modalImage');
const closeModalButton = document.getElementById('closeModal');
const searchInput = document.getElementById('searchInput');
const genreButtons = document.querySelectorAll('.genre-button');


//fnc
function formatDate(dateString) {
    const options = { weekday: 'short', day: '2-digit', month: 'short' };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

function renderEvents(eventData) {
    eventList.innerHTML = '';
    eventData.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        eventCard.innerHTML = `
            <img src="${event.imageUrl}" alt="${event.name}" class="event-image">
            <h3 class="event-name">${event.name}</h3>
            <p class="event-date">${formatDate(event.date)}</p>
            <p class="event-location">${event.location}</p>
        `;
        eventCard.addEventListener('click', () => openModal(event));
        eventList.appendChild(eventCard);
    });
}

function openModal(event) {
    modalTitle.textContent = event.name;
    modalDescription.textContent = event.description;
    modalImage.src = event.imageUrl;
    modalBackdrop.style.display = 'flex';
}

function closeModal() {
    modalBackdrop.style.display = 'none';
}

closeModalButton.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.querySelector('.modal-content').addEventListener('click', e => e.stopPropagation());


searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredEvents = events.filter(event => 
      event.name.toLowerCase().includes(searchText) || 
      event.location.toLowerCase().includes(searchText)
    );
    renderEvents(filteredEvents);
});


genreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const genre = button.getAttribute('data-genre');
        const filteredEvents = genre === "All"
            ? events
            : events.filter(event => event.Genre === genre);
        renderEvents(filteredEvents);
    });
});

renderEvents(events);
