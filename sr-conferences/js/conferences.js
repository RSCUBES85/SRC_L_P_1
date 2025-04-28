const events = [
    {
      name: "Global Neurology Summit",
      date: "2025-09-10",
      venue: "Online",
      image: "images/neurology.jpg",
      link: "events/neurology.html"
    },
    {
      name: "Cardio Research Meet",
      date: "2024-12-15",
      venue: "New York, USA",
      image: "images/cardiology.jpg",
      link: "events/cardiology.html"
    }
  ];
  
  function showTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  
    document.querySelector(`.tab-btn[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
  }
  
  function renderEvents() {
    const today = new Date();
    const upcomingContainer = document.getElementById('upcoming');
    const previousContainer = document.getElementById('previous');
  
    events.forEach(event => {
      const eventDate = new Date(event.date);
      const container = eventDate >= today ? upcomingContainer : previousContainer;
  
      const card = document.createElement('div');
      card.className = 'event-card';
      card.innerHTML = `
        <img src="${event.image}" alt="${event.name}" />
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Venue:</strong> ${event.venue}</p>
        <a href="${event.link}" class="view-link">View Event</a>
      `;
      container.appendChild(card);
    });
  }
  
  document.addEventListener('DOMContentLoaded', renderEvents);
  