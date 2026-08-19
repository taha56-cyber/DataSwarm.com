const datasets = [
  {id:1,title:'Reef census: Great Barrier Reef',category:'Oceans',visual:'ocean',photoQuery:'reef fish,coral',tag:'Survey / 2024',description:'12,400 observations across 86 reef sites, with species, depth, and bleaching status.',price:24},
  {id:2,title:'The freshwater atlas',category:'Freshwater',visual:'fresh',photoQuery:'freshwater fish,river',tag:'Atlas / Global',description:'A worldwide index of freshwater fish habitats, migration routes, and water quality.',price:18},
  {id:3,title:'When the ocean gets warmer',category:'Climate',visual:'climate',photoQuery:'tropical fish,underwater',tag:'Time series / 1980–2023',description:'Four decades of temperature and population data for 140 pelagic species.',price:32},
  {id:4,title:'Night lights, deep fish',category:'Oceans',visual:'ocean',photoQuery:'deep sea fish,underwater',tag:'Acoustics / 2025',description:'Echo-sounder readings that map life in the mesopelagic zone after dark.',price:21},
  {id:5,title:'River giants',category:'Freshwater',visual:'fresh',photoQuery:'large freshwater fish,river',tag:'Field guide / 18 rivers',description:'Size, movement, and spawning records for the world’s largest freshwater fish.',price:16},
  {id:6,title:'Coral recovery signals',category:'Climate',visual:'climate',photoQuery:'reef fish,coral reef',tag:'Longitudinal / 2010–2024',description:'A visual dataset tracking how reef communities respond after extreme heat.',price:27},
  {id:7,title:'Kelp forest neighbors',category:'Oceans',visual:'ocean',photoQuery:'rockfish,kelp forest',tag:'Camera traps / 2025',description:'Daily encounters between kelp, rockfish, and the predators that shape the forest.',price:19},
  {id:8,title:'Salmon homeward routes',category:'Freshwater',visual:'fresh',photoQuery:'salmon,river',tag:'Telemetry / 12 seasons',description:'Tagged salmon journeys from open water back to the rivers where they began.',price:29},
  {id:9,title:'The tiny fish census',category:'Oceans',visual:'ocean',photoQuery:'small schooling fish,underwater',tag:'Plankton net / 2023',description:'A close look at larvae and small schooling fish across a coastal transect.',price:14},
  {id:10,title:'Mangrove nurseries',category:'Climate',visual:'climate',photoQuery:'juvenile fish,mangrove',tag:'Habitat study / 2024',description:'Juvenile fish counts showing how mangrove roots protect young coastal life.',price:23},
  {id:11,title:'Lake depth voices',category:'Freshwater',visual:'fresh',photoQuery:'lake fish,freshwater',tag:'Hydrophone / 2022',description:'Sound recordings and species observations from deep, quiet freshwater lakes.',price:17},
  {id:12,title:'Tuna on the move',category:'Climate',visual:'climate',photoQuery:'bluefin tuna,underwater',tag:'Satellite tags / 2015–2024',description:'Nine years of migration, temperature, and feeding-zone data for bluefin tuna.',price:34},
  {id:13,title:'Clownfish anemone life',category:'Oceans',visual:'ocean',species:'Clownfish',tag:'Reef behavior / 2024',description:'Social groups, anemone partnerships, and territory patterns of clownfish.',price:15},
  {id:14,title:'Blue tang migrations',category:'Oceans',visual:'ocean',species:'Blue tang',tag:'Reef telemetry / 2023',description:'Movement and feeding records for blue tang across protected tropical reefs.',price:22},
  {id:15,title:'Shark nursery survey',category:'Oceans',visual:'ocean',species:'Shark',tag:'Coastal survey / 2025',description:'Juvenile shark sightings, size measurements, and nursery habitat conditions.',price:31},
  {id:16,title:'Seahorse slow worlds',category:'Oceans',visual:'ocean',species:'Seahorse',tag:'Macro video / 2024',description:'Close-range observations of courtship, camouflage, and feeding behavior.',price:18},
  {id:17,title:'Manta ray routes',category:'Oceans',visual:'ocean',species:'Manta ray',tag:'Satellite tags / 2021–2025',description:'Long-distance routes and cleaning-station visits of reef manta rays.',price:28},
  {id:18,title:'Octopus intelligence',category:'Oceans',visual:'ocean',species:'Octopus',tag:'Behavior study / 2024',description:'Problem-solving trials, den choice, and color-change observations.',price:25},
  {id:19,title:'Penguin plunge records',category:'Oceans',visual:'ocean',species:'Penguin',tag:'Dive log / 2022–2025',description:'Dive depth, travel speed, and feeding success from tagged penguins.',price:20},
  {id:20,title:'Golden river guardians',category:'Freshwater',visual:'fresh',species:'Golden dorado',tag:'River survey / 2023',description:'Population structure and spawning habitat for a powerful South American river fish.',price:16},
  {id:21,title:'The electric eel atlas',category:'Freshwater',visual:'fresh',species:'Electric eel',tag:'Field atlas / 2024',description:'Electric signals, habitat, and seasonal activity across Amazon waterways.',price:19},
  {id:22,title:'Salmon color stories',category:'Freshwater',visual:'fresh',species:'Salmon',tag:'Spawning survey / 2025',description:'Run timing, body condition, and stream temperatures across salmon runs.',price:21},
  {id:23,title:'Betta display patterns',category:'Freshwater',visual:'fresh',species:'Betta fish',tag:'Behavior archive / 2023',description:'Color, fin display, and territorial behavior in betta populations.',price:12},
  {id:24,title:'Frogfish camouflage',category:'Oceans',visual:'ocean',species:'Frogfish',tag:'Reef macro / 2024',description:'A visual archive of camouflage strategies and ambush positions.',price:17},
  {id:25,title:'Whale shark visitors',category:'Climate',visual:'climate',species:'Whale shark',tag:'Photo ID / 2018–2025',description:'Individual photo-identification records from seasonal plankton blooms.',price:26},
  {id:26,title:'Flying fish weather',category:'Climate',visual:'climate',species:'Flying fish',tag:'Surface survey / 2022',description:'Wind, wave, and launch behavior records from open-water flying fish.',price:14},
  {id:27,title:'Luminous deep sea',category:'Oceans',visual:'ocean',species:'Lanternfish',tag:'Deep net / 2024',description:'Bioluminescence observations and vertical migration from the midnight zone.',price:24},
  {id:28,title:'Pufferfish garden maps',category:'Oceans',visual:'ocean',species:'Pufferfish',tag:'Seabed mapping / 2023',description:'Circular sand gardens, mate selection, and seabed texture measurements.',price:18}
];
const photoUrls = {
  1: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Fish_at_the_great_barrier_reef.jpg',
  2: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Arapaima_(Arapaima_gigas).jpg',
  3: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Schooling_fish_(50131397746).jpg',
  4: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Ha_-_Melanocetus_johnsonii_1.jpg',
  5: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Arapaima_close-up.jpg',
  6: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/CORAL_4_(34738942045).jpg',
  7: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rockfish_around_kelp_Monterey_Bay_Aquarium.jpg',
  8: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Atlantic_Salmon.jpg',
  9: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/School_of_small_fish_above_black_coral.jpg',
  10: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mangrove_Jack_Taiwan.jpg',
  11: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Silurus_glanis_02.jpg',
  12: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bluefin_tuna.jpg',
  13: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Common_clownfish.jpg',
  14: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Blue_tang_(Paracanthurus_hepatus)_01.jpg',
  15: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Shark_underwater.jpg',
  16: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Seahorse.jpg',
  17: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Manta_ray.jpg',
  18: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Octopus-vulgaris.jpg',
  19: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/1968-penguin-underwater.jpg',
  20: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Salminus_brasiliensis.jpg',
  21: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Electrophorus_electricus.jpg',
  22: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Salmo_salar.jpg',
  23: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Betta_Splendens.jpg',
  24: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Giant_Frogfish,_Sulawesi_Utara_(1).jpg',
  25: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Whale_Shark_(Rhincodon_typus).jpg',
  26: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Flying_fish.jpg',
  27: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Lanternfishes_of_the_family_Myctophidae.webp',
  28: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pufferfish.jpg'
};
let activeFilter = 'All';
const creditCodes = {
  '00023456': 52, 'FISH1000': 100, 'OCEAN0025': 25, 'SWARM0075': 75,
  'TAHA456': 45, 'TAHA458': 45, 'TAHA425': 25, 'TAHA100': 100,
  'REEF025': 25, 'REEF050': 50, 'REEF075': 75, 'REEF100': 100,
  'BLUE025': 25, 'BLUE050': 50, 'BLUE075': 75, 'BLUE100': 100,
  'FISH025': 25, 'FISH050': 50, 'FISH075': 75, 'FISH150': 150,
  'DATA010': 10, 'DATA025': 25, 'DATA050': 50, 'DATA100': 100,
  'SWARM010': 10, 'SWARM025': 25, 'SWARM050': 50, 'SWARM100': 100,
  'TAHA010': 10, 'TAHA020': 20, 'TAHA030': 30, 'TAHA040': 40,
  'TAHA050': 50, 'TAHA060': 60, 'TAHA070': 70, 'TAHA080': 80,
  'TAHA090': 90, 'TAHA120': 120, 'TAHA200': 200, 'TAHA250': 250,
  'OCEAN010': 10, 'OCEAN050': 50, 'OCEAN100': 100, 'OCEAN200': 200,
  'CORAL010': 10, 'CORAL050': 50, 'CORAL100': 100, 'CORAL200': 200,
  'FISH010': 10, 'FISH040': 40, 'FISH060': 60, 'FISH080': 80,
  'BLUE010': 10, 'BLUE040': 40, 'BLUE060': 60, 'BLUE080': 80,
  'REEF010': 10, 'REEF040': 40, 'REEF060': 60, 'REEF080': 80,
  'DATA040': 40, 'DATA060': 60, 'DATA080': 80, 'DATA200': 200,
  'DEEP010': 10, 'DEEP050': 50, 'DEEP100': 100, 'DEEP150': 150,
  'WATER025': 25, 'WATER075': 75, 'WATER125': 125, 'WATER175': 175,
  'ALLFISHES10000000': 10000000,
  'DS7Q4M9X2P8K': 75,
  'SWM4Z8N2R6T1': 100,
  'F1SH9V3K7L2Q': 50,
  'OCE4N8B2W6Y9': 125,
  'TAH7A3X9M5C1': 250,
  'REEF6P2D8H4S': 60,
  'BLUE9K5R1V7N3': 90,
  'DEEP2J8Q4T6Z1': 150,
  'DATA5W1F7M3X9': 200,
  'FISH8C4L6P2R0': 40,
  'WAVE3N9B5K1Y7': 80,
  'SEAS2V6H8Q4D0': 300
};
const grid = document.querySelector('#productGrid');
const money = value => `$${value}`;

function renderProducts() {
  const query = document.querySelector('#searchInput').value.toLowerCase().trim();
  const visible = datasets.filter(item => (activeFilter === 'All' || item.category === activeFilter) && `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(query));
  grid.innerHTML = visible.length ? visible.map(item => `<article class="product"><div class="product-visual ${item.visual}"><img src="${photoUrls[item.id]}" alt="${item.species || item.photoQuery || 'Fish'} photograph" loading="lazy" onerror="this.onerror=null;this.classList.add('photo-unavailable')"><span class="visual-label">${item.category.toUpperCase()} / DS-${String(item.id).padStart(2, '0')}</span><div class="visual-shape"></div><span class="photo-credit">Fish photograph</span></div><div class="product-body"><div class="product-meta"><span>${item.tag}</span><span>CSV · JSON</span></div><h3>${item.title}</h3><p>${item.description}</p><div class="product-buy"><span class="price">${money(item.price)}</span></div></div></article>`).join('') : '<p class="empty-cart">No datasets match that search yet.</p>';
  grid.querySelectorAll('.product-visual img').forEach(image => image.addEventListener('click', () => openPhotoPreview(image)));
}

function openPhotoPreview(image) {
  const preview = document.querySelector('#photoPreview');
  document.querySelector('#previewImage').src = image.currentSrc || image.src;
  document.querySelector('#previewImage').alt = image.alt;
  document.querySelector('#previewTitle').textContent = image.closest('.product').querySelector('h3').textContent;
  const sourceLink = document.querySelector('#previewSource');
  sourceLink.href = image.currentSrc || image.src;
  preview.hidden = false;
}
function closePhotoPreview() { document.querySelector('#photoPreview').hidden = true; }
document.querySelector('#closePhotoPreview').addEventListener('click', closePhotoPreview);
document.querySelector('#photoPreview').addEventListener('click', event => { if (event.target.id === 'photoPreview') closePhotoPreview(); });

function showToast(message) { const toast = document.querySelector('#toast'); toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 1800); }
const starterMessages = [
  {name: 'Maya', message: 'Has anyone compared clownfish territory size across different anemones?', time: 'Today'},
  {name: 'Taha', message: 'The anglerfish photo for Night lights, deep fish is incredible.', time: 'Today'},
  {name: 'Noah', message: 'I am looking for freshwater fish that can breathe air. Arapaima is fascinating.', time: 'Yesterday'}
];
let chatMessages = JSON.parse(localStorage.getItem('dataSwarmChat') || 'null') || starterMessages;
let groupMembers = JSON.parse(localStorage.getItem('dataSwarmGroupMembers') || 'null') || ['Maya', 'Taha', 'Noah'];
function escapeChatText(value) { return value.replace(/[&<>"']/g, character => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[character])); }
function renderChat() {
  document.querySelector('#chatBoard').innerHTML = chatMessages.map(item => { const attachment = item.attachment ? (item.attachment.type.startsWith('image/') ? `<img class="message-attachment" src="${item.attachment.data}" alt="${escapeChatText(item.attachment.name)}">` : `<a class="message-file" href="${item.attachment.data}" download="${escapeChatText(item.attachment.name)}">Download ${escapeChatText(item.attachment.name)}</a>`) : ''; return `<article class="chat-message"><strong>${escapeChatText(item.name)}</strong><time>${escapeChatText(item.time)}</time>${item.message ? `<p>${escapeChatText(item.message)}</p>` : ''}${attachment}</article>`; }).join('');
}
document.querySelector('#chatForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#chatName');
  const message = document.querySelector('#chatMessage');
  if (!name.value.trim() || (!message.value.trim() && !pendingAttachment)) return;
  chatMessages.unshift({name: name.value.trim(), message: message.value.trim(), time: 'Just now', attachment: pendingAttachment});
  localStorage.setItem('dataSwarmChat', JSON.stringify(chatMessages.slice(0, 30)));
  message.value = ''; pendingAttachment = null; document.querySelector('#attachmentPreview').textContent = ''; document.querySelector('#chatAttachment').value = '';
  renderChat(); showToast('Message sent to Fish Friends');
});
let pendingAttachment = null;
document.querySelector('#chatAttachment').addEventListener('change', event => { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { pendingAttachment = {name: file.name, type: file.type || 'application/octet-stream', data: reader.result}; document.querySelector('#attachmentPreview').textContent = `Ready to send: ${file.name}`; }; reader.readAsDataURL(file); });
document.querySelector('#addPerson').addEventListener('click', () => document.querySelector('#groupPeople').classList.toggle('open'));
document.querySelector('#addPersonConfirm').addEventListener('click', () => { const input = document.querySelector('#personName'); if (!input.value.trim()) return; groupMembers.push(input.value.trim()); localStorage.setItem('dataSwarmGroupMembers', JSON.stringify(groupMembers)); document.querySelector('#groupMembers').textContent = `${groupMembers.length} members`; input.value = ''; document.querySelector('#groupPeople').classList.remove('open'); showToast('Person added to Fish Friends'); });
document.querySelector('#renameGroup').addEventListener('click', () => { const name = window.prompt('Choose a group name', document.querySelector('#groupName').textContent); if (name && name.trim()) { document.querySelector('#groupName').textContent = name.trim(); showToast('Group renamed'); } });
document.querySelector('#clearChat').addEventListener('click', () => { if (!window.confirm('Remove all messages and attachments from this device?')) return; chatMessages = []; localStorage.removeItem('dataSwarmChat'); renderChat(); showToast('Chat cleared'); });
document.querySelector('#groupMembers').textContent = `${groupMembers.length} members`;
renderChat();
document.querySelector('#searchInput').addEventListener('input', renderProducts);
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { activeFilter = button.dataset.filter; document.querySelectorAll('.filter').forEach(filter => filter.classList.toggle('active', filter === button)); renderProducts(); }));
document.querySelectorAll('.side-link[data-target]').forEach(link => link.addEventListener('click', () => {
  document.querySelectorAll('.side-link').forEach(item => item.classList.toggle('active', item === link));
  document.querySelector(`#${link.dataset.target}`).scrollIntoView({behavior: 'smooth'});
}));
renderProducts();

const authScreen = document.querySelector('#authScreen');
const appShell = document.querySelector('#appShell');
const loginForm = document.querySelector('#loginForm');
const displayNameInput = document.querySelector('#displayName');
const emailInput = document.querySelector('#email');
const formError = document.querySelector('#formError');
function enterLibrary(name, email) {
  localStorage.setItem('dataSwarmDisplayName', name);
  localStorage.setItem('dataSwarmUser', email);
  document.querySelector('#chatName').value = name;
  authScreen.classList.add('auth-exit');
  setTimeout(() => { authScreen.hidden = true; appShell.hidden = false; }, 420);
}
const savedUser = localStorage.getItem('dataSwarmUser');
const savedDisplayName = localStorage.getItem('dataSwarmDisplayName');
if (savedUser) enterLibrary(savedDisplayName || savedUser.split('@')[0], savedUser);
document.querySelector('#welcomeEmailButton').addEventListener('click', () => {
  const email = localStorage.getItem('dataSwarmUser');
  if (!email) return showToast('Please sign in first');
  const name = localStorage.getItem('dataSwarmDisplayName') || 'friend';
  const subject = encodeURIComponent('Welcome to Data Swarm');
  const body = encodeURIComponent(`Hi ${name},\n\nWelcome to Data Swarm, your fish data library.\n\nSee you in the water!`);
  window.location.href = `mailto:${encodeURIComponent(email)}?subject=${subject}&body=${body}`;
});
document.querySelector('#backToLogin').addEventListener('click', () => {
  localStorage.removeItem('dataSwarmUser');
  localStorage.removeItem('dataSwarmDisplayName');
  appShell.hidden = true;
  authScreen.hidden = false;
  authScreen.classList.remove('auth-exit');
  displayNameInput.value = '';
  emailInput.value = '';
  displayNameInput.focus();
});
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!displayNameInput.value.trim()) { formError.textContent = 'Please enter your name.'; displayNameInput.focus(); return; }
  if (!emailInput.validity.valid) { formError.textContent = 'Please enter a valid email address.'; emailInput.focus(); return; }
  formError.textContent = '';
  enterLibrary(displayNameInput.value.trim(), emailInput.value.trim());
});

const swarmCanvas = document.querySelector('#swarmCanvas');
const swarmContext = swarmCanvas.getContext('2d');
const swarm = Array.from({length: 26}, (_, index) => ({x: Math.random(), y: Math.random(), vx: 0, vy: 0, size: 5 + Math.random() * 4, phase: index * .7, tint: index % 4}));
const pointer = {x: .5, y: .5};
function resizeSwarm() { const ratio = window.devicePixelRatio || 1; swarmCanvas.width = innerWidth * ratio; swarmCanvas.height = innerHeight * ratio; swarmCanvas.style.width = `${innerWidth}px`; swarmCanvas.style.height = `${innerHeight}px`; swarmContext.setTransform(ratio, 0, 0, ratio, 0, 0); }
window.addEventListener('resize', resizeSwarm);
window.addEventListener('pointermove', event => { pointer.x = event.clientX / innerWidth; pointer.y = event.clientY / innerHeight; });
function drawSwarm(time) {
  const width = innerWidth, height = innerHeight;
  swarmContext.clearRect(0, 0, width, height);
  swarm.forEach(fish => {
    const targetX = pointer.x * width + Math.cos(time / 900 + fish.phase) * 70;
    const targetY = pointer.y * height + Math.sin(time / 1100 + fish.phase) * 55;
    fish.vx += (targetX - fish.x * width) * .00018; fish.vy += (targetY - fish.y * height) * .00018;
    fish.vx *= .96; fish.vy *= .96; fish.x += fish.vx / width; fish.y += fish.vy / height;
    const angle = Math.atan2(fish.vy, fish.vx) || fish.phase;
    const size = fish.size;
    const colors = ['#f6cf69', '#e8b85c', '#9bd1bd', '#f08b6d'];
    const bodyColor = colors[fish.tint];
    swarmContext.save(); swarmContext.translate(fish.x * width, fish.y * height); swarmContext.rotate(angle);
    swarmContext.globalAlpha = .9;
    swarmContext.shadowColor = 'rgba(4, 27, 27, .28)'; swarmContext.shadowBlur = size * .8; swarmContext.shadowOffsetY = size * .35;
    swarmContext.fillStyle = bodyColor;
    swarmContext.beginPath(); swarmContext.moveTo(size * 2.25, 0); swarmContext.bezierCurveTo(size * 1.3, -size * 1.15, -size * .65, -size * 1.05, -size * 1.55, 0); swarmContext.bezierCurveTo(-size * .65, size * 1.05, size * 1.3, size * 1.15, size * 2.25, 0); swarmContext.fill();
    swarmContext.shadowColor = 'transparent';
    swarmContext.beginPath(); swarmContext.moveTo(-size * 1.25, 0); swarmContext.lineTo(-size * 2.65, -size * 1.2); swarmContext.lineTo(-size * 2.4, 0); swarmContext.lineTo(-size * 2.65, size * 1.2); swarmContext.closePath(); swarmContext.fill();
    swarmContext.globalAlpha = .5; swarmContext.fillStyle = '#fff3c2';
    swarmContext.beginPath(); swarmContext.moveTo(-size * .15, -size * .75); swarmContext.lineTo(size * .35, -size * 1.45); swarmContext.lineTo(size * .75, -size * .55); swarmContext.closePath(); swarmContext.fill();
    swarmContext.beginPath(); swarmContext.moveTo(-size * .2, size * .7); swarmContext.lineTo(size * .45, size * 1.3); swarmContext.lineTo(size * .75, size * .45); swarmContext.closePath(); swarmContext.fill();
    swarmContext.globalAlpha = .7; swarmContext.strokeStyle = 'rgba(22, 72, 63, .52)'; swarmContext.lineWidth = Math.max(1, size * .12);
    swarmContext.beginPath(); swarmContext.arc(size * .75, 0, size * .75, -.85, .85); swarmContext.stroke();
    swarmContext.beginPath(); swarmContext.moveTo(-size * .35, -size * .65); swarmContext.quadraticCurveTo(size * .2, 0, -size * .35, size * .65); swarmContext.stroke();
    swarmContext.fillStyle = '#16483f'; swarmContext.beginPath(); swarmContext.arc(size * 1.42, -size * .25, Math.max(1, size * .18), 0, Math.PI * 2); swarmContext.fill();
    swarmContext.fillStyle = '#fff'; swarmContext.beginPath(); swarmContext.arc(size * 1.47, -size * .3, Math.max(.5, size * .07), 0, Math.PI * 2); swarmContext.fill();
    swarmContext.restore();
  });
  requestAnimationFrame(drawSwarm);
}
resizeSwarm(); requestAnimationFrame(drawSwarm);