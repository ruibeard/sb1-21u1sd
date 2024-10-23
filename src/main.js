// Schedule Data
const weekDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
const schedule = [
  { time: '00:00 - 01:00', show: 'Clássicos Anos 80' },
  { time: '01:00 - 03:00', show: 'Clássicos Anos 90' },
  { time: '03:00 - 05:00', show: 'Música Portuguesa' },
  { time: '05:00 - 11:00', show: 'Noticiário Local + AZFM Música' },
  { time: '11:00 - 12:00', show: 'Noticiário Local + AZFM Música' },
  { time: '12:00 - 13:00', show: 'Discos Pedidos' },
  { time: '13:00 - 15:00', show: 'AZFM Música' },
  { time: '15:00 - 17:00', show: 'Noticiário Local + Loja da Música' },
  { time: '17:00 - 18:00', show: 'AZFM Música' },
  { time: '18:00 - 19:00', show: 'Noticiário Local' },
  { time: '19:00 - 24:00', show: 'Música Calma' },
];

// Initialize Schedule
let selectedDay = 0;
const weekDaysContainer = document.getElementById('weekDays');
const scheduleList = document.getElementById('scheduleList');

function renderWeekDays() {
  weekDays.forEach((day, index) => {
    const button = document.createElement('button');
    button.textContent = day;
    button.className = `px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
      selectedDay === index
        ? 'bg-blue-600 text-white'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`;
    button.onclick = () => {
      selectedDay = index;
      renderWeekDays();
    };
    weekDaysContainer.appendChild(button);
  });
}

function renderSchedule() {
  schedule.forEach(({ time, show }) => {
    const div = document.createElement('div');
    div.className = 'flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors';
    div.innerHTML = `
      <div class="w-32 font-mono text-gray-600">${time}</div>
      <div class="flex-1 font-medium text-gray-800">${show}</div>
    `;
    scheduleList.appendChild(div);
  });
}

// Initialize Audio Player
const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');
const muteButton = document.getElementById('muteButton');
let isPlaying = false;
let isMuted = false;

playButton.onclick = () => {
  if (isPlaying) {
    audioPlayer.pause();
    playButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    `;
  } else {
    audioPlayer.play();
    playButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
      </svg>
    `;
  }
  isPlaying = !isPlaying;
};

muteButton.onclick = () => {
  audioPlayer.muted = !isMuted;
  muteButton.innerHTML = isMuted ? `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
    </svg>
  ` : `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="3" x2="21" y2="21"></line>
      <path d="M11.5 5.5 6 9H2v6h4l5.5 3.5"></path>
    </svg>
  `;
  isMuted = !isMuted;
};

// Initialize Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  console.log('Form submitted:', formData);
  contactForm.reset();
};

// Initial render
renderWeekDays();
renderSchedule();