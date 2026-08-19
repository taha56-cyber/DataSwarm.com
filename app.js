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
let bag = [];
const creditCodes = {'00023456': 52, 'FISH1000': 100, 'OCEAN0025': 25, 'SWARM0075': 75};
const savedCreditBalance = Number(localStorage.getItem('dataSwarmCredits') || 0);
let creditBalance = Number.isFinite(savedCreditBalance) && savedCreditBalance >= 0 ? savedCreditBalance : 0;
let redeemedCodes = new Set();
try {
  const storedCodes = JSON.parse(localStorage.getItem('dataSwarmRedeemedCodes') || '[]');
  redeemedCodes = new Set(Array.isArray(storedCodes) ? storedCodes : []);
} catch { localStorage.removeItem('dataSwarmRedeemedCodes'); }
const grid = document.querySelector('#productGrid');
const money = value => `$${value}`;

function renderProducts() {
  const query = document.querySelector('#searchInput').value.toLowerCase().trim();
  const visible = datasets.filter(item => (activeFilter === 'All' || item.category === activeFilter) && `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(query));
  grid.innerHTML = visible.length ? visible.map(item => `<article class="product"><div class="product-visual ${item.visual}"><img src="${photoUrls[item.id]}" alt="${item.species || item.photoQuery || 'Fish'} photograph" loading="lazy" onerror="this.onerror=null;this.classList.add('photo-unavailable')"><span class="visual-label">${item.category.toUpperCase()} / DS-${String(item.id).padStart(2, '0')}</span><div class="visual-shape"></div><span class="photo-credit">Fish photograph</span></div><div class="product-body"><div class="product-meta"><span>${item.tag}</span><span>CSV · JSON</span></div><h3>${item.title}</h3><p>${item.description}</p><div class="product-buy"><span class="price">${money(item.price)}</span><button class="add-button" data-id="${item.id}" type="button">Add to bag +</button></div></div></article>`).join('') : '<p class="empty-cart">No datasets match that search yet.</p>';
  grid.querySelectorAll('.add-button').forEach(button => button.addEventListener('click', () => addToBag(Number(button.dataset.id))));
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

function addToBag(id) {
  if (!bag.includes(id)) bag.push(id);
  updateBag();
  showToast('Added to your data bag');
}
function updateBag() {
  document.querySelector('#cartCount').textContent = bag.length;
  const items = document.querySelector('#cartItems');
  const checkout = document.querySelector('#checkoutButton');
  if (!bag.length) { items.innerHTML = '<p class="empty-cart">Your bag is waiting.<br>Find some data to take home.</p>'; checkout.disabled = true; } else {
    items.innerHTML = bag.map(id => { const item = datasets.find(dataset => dataset.id === id); return `<div class="cart-row"><div>${item.title}<small>${item.category} · ${money(item.price)}</small></div><button class="remove" data-id="${id}" type="button">Remove</button></div>`; }).join('');
    items.querySelectorAll('.remove').forEach(button => button.addEventListener('click', () => { bag = bag.filter(id => id !== Number(button.dataset.id)); updateBag(); }));
    checkout.disabled = false;
  }
  document.querySelector('#cartTotal').textContent = money(bag.reduce((total, id) => total + datasets.find(item => item.id === id).price, 0));
}
function showToast(message) { const toast = document.querySelector('#toast'); toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 1800); }
function toggleCart(open) { document.querySelector('#cartDrawer').classList.toggle('open', open); document.querySelector('#cartDrawer').setAttribute('aria-hidden', String(!open)); document.querySelector('#drawerBackdrop').hidden = !open; }
function updateCreditBalance() { document.querySelector('#creditBalance').textContent = `$${creditBalance}`; document.querySelector('#paymentBalance').textContent = `$${creditBalance}`; document.querySelector('#walletBalance').textContent = `$${creditBalance}`; }
function saveCredits() { localStorage.setItem('dataSwarmCredits', creditBalance); updateCreditBalance(); }
function redeemCreditCode(input) {
  const code = input.value.trim().toUpperCase();
  if (redeemedCodes.has(code)) { showToast('That code was already used'); return false; }
  if (creditCodes[code]) { creditBalance += creditCodes[code]; redeemedCodes.add(code); localStorage.setItem('dataSwarmRedeemedCodes', JSON.stringify([...redeemedCodes])); saveCredits(); input.value = ''; showToast(`Added $${creditCodes[code]} demo credits`); return true; }
  showToast('That credit code is not valid'); return false;
}
function downloadFile(filename, content, type) {
  const blob = new Blob([content], {type});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob); link.download = filename; link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}
const referenceData = {
  1: ['Mixed reef fish community', 'Tropical coral reef', 'Varies by species', '0-40 m', 'Algae, plankton, and small invertebrates', 'Species richness and coral health are linked.'],
  2: ['Arapaima gigas', 'Amazon floodplain lakes and rivers', 'Up to about 3 m', '0-5 m', 'Fish, crustaceans, and small animals', 'Must surface to breathe air.'],
  3: ['Mixed pelagic fish community', 'Open ocean surface waters', 'Varies by species', '0-200 m', 'Plankton and smaller fish', 'Schools reduce individual predation risk.'],
  4: ['Melanocetus johnsonii', 'Deep ocean midnight zone', 'Up to about 20 cm', '200-2,000 m', 'Small fish and crustaceans', 'Uses a bioluminescent lure to attract prey.'],
  5: ['Arapaima gigas', 'Amazon basin rivers and floodplains', 'Up to about 3 m', '0-5 m', 'Fish and crustaceans', 'One of the world’s largest freshwater fish.'],
  6: ['Coral reef community', 'Shallow tropical reef', 'Varies by species', '0-30 m', 'Algae, plankton, and reef invertebrates', 'Heat stress can cause coral bleaching.'],
  7: ['Sebastes species', 'Temperate kelp forests', 'Up to about 90 cm', '5-275 m', 'Small fish, shrimp, and squid', 'Many rockfish mature slowly and live for decades.'],
  8: ['Salmo salar', 'Cold rivers and North Atlantic', 'Up to about 1.5 m', '0-200 m at sea', 'Insects, crustaceans, and small fish', 'Adults return to freshwater to spawn.'],
  9: ['Small schooling fish community', 'Coastal reef and open water', 'Usually under 20 cm', '0-100 m', 'Plankton', 'Dense schools change direction together.'],
  10: ['Mangrove-associated juvenile fish', 'Mangrove roots and tidal creeks', 'Varies by species', '0-10 m', 'Plankton, insects, and tiny crustaceans', 'Mangrove roots provide shelter from predators.'],
  11: ['Silurus glanis', 'Deep lakes and slow rivers', 'Up to about 2.7 m', '1-30 m', 'Fish, crayfish, birds, and mammals', 'A large nocturnal freshwater predator.'],
  12: ['Thunnus orientalis', 'Temperate and tropical open ocean', 'Up to about 3 m', '0-1,000 m', 'Fish, squid, and crustaceans', 'A warm-bodied, fast-swimming predator.'],
  13: ['Amphiprion ocellaris', 'Sea anemones on tropical reefs', 'Up to about 11 cm', '1-15 m', 'Algae, plankton, and small crustaceans', 'Lives in a mutual partnership with anemones.'],
  14: ['Paracanthurus hepatus', 'Indo-Pacific coral reefs', 'Up to about 31 cm', '2-40 m', 'Mostly algae', 'Its sharp tail spine helps deter predators.'],
  15: ['Reef shark species', 'Tropical reefs and coastal waters', 'Varies by species', '1-300 m', 'Fish, squid, and crustaceans', 'Sharks help structure marine food webs.'],
  16: ['Hippocampus species', 'Seagrass, coral, and mangrove habitat', 'About 2-35 cm', '1-60 m', 'Tiny crustaceans', 'Males carry developing young in a brood pouch.'],
  17: ['Mobula birostris', 'Tropical and subtropical ocean', 'Disc width up to about 7 m', '0-1,000 m', 'Plankton and small fish', 'Feeds by filtering large volumes of water.'],
  18: ['Octopus vulgaris', 'Rocky reefs and coastal seabeds', 'Up to about 1 m', '0-200 m', 'Crabs, shellfish, and fish', 'Can change color and texture for camouflage.'],
  19: ['Penguin species', 'Cold coastal ocean', 'Varies by species', 'Surface to 500 m', 'Fish, squid, and krill', 'Dense feathers and body shape support deep diving.'],
  20: ['Salminus brasiliensis', 'Large South American rivers', 'Up to about 1.2 m', '0-20 m', 'Fish and insects', 'A powerful freshwater predator and sport fish.'],
  21: ['Electrophorus electricus', 'Amazon and Orinoco floodplains', 'Up to about 2.5 m', '0-10 m', 'Fish, amphibians, and invertebrates', 'Produces electric discharges for hunting and defense.'],
  22: ['Salmo salar', 'Cold rivers and North Atlantic', 'Up to about 1.5 m', '0-200 m at sea', 'Insects, crustaceans, and small fish', 'Migration connects ocean and freshwater ecosystems.'],
  23: ['Betta splendens', 'Slow freshwater streams and rice paddies', 'Up to about 7 cm', '0-1 m', 'Insects and small aquatic animals', 'Builds bubble nests during reproduction.'],
  24: ['Antennarius species', 'Tropical reef and rocky seabeds', 'Up to about 45 cm', '1-100 m', 'Fish and crustaceans', 'Uses a modified fin ray as a fishing lure.'],
  25: ['Rhincodon typus', 'Warm tropical and subtropical ocean', 'Up to about 12 m', '0-1,900 m', 'Plankton, krill, and small fish', 'The world’s largest living fish and a filter feeder.'],
  26: ['Exocoetidae family', 'Warm ocean surface waters', 'Up to about 45 cm', '0-20 m', 'Plankton and small crustaceans', 'Glides above the water using enlarged fins.'],
  27: ['Myctophidae family', 'Deep ocean across the world', 'Usually 2-15 cm', '200-1,000 m', 'Plankton and tiny crustaceans', 'Many species migrate toward the surface at night.'],
  28: ['Tetraodontidae family', 'Tropical and temperate coastal waters', 'Varies by species', '1-250 m', 'Shellfish, algae, and small invertebrates', 'Some species inflate by taking in water when threatened.']
};
function downloadDataset(id, format) {
  const item = datasets.find(dataset => dataset.id === id);
  const [scientificName, habitat, size, depth, diet, note] = referenceData[item.id];
  const text = `DATA SWARM - FISH DATASET\n================================\n\nDataset: DS-${String(item.id).padStart(2, '0')}\nTitle: ${item.title}\nCategory: ${item.category}\nField notes: ${item.tag}\n\nREFERENCE DATA\nScientific name: ${scientificName}\nHabitat: ${habitat}\nTypical size: ${size}\nRecorded depth range: ${depth}\nTypical diet: ${diet}\nBehavior or ecology: ${note}\n\nABOUT THIS DATASET\n${item.description}\n\nDATA NOTE\nThese are curated reference facts for learning. They are not a claim that this small prototype contains the full original survey measurements.\n\nPhoto source\n${photoUrls[item.id]}\n`;
  downloadFile(`data-swarm-${String(id).padStart(2, '0')}.txt`, text, 'text/plain');
}
function showDownloadLibrary() {
  const library = document.querySelector('#downloadLibrary');
  const items = document.querySelector('#downloadItems');
  const purchased = bag.map(id => datasets.find(item => item.id === id));
  items.innerHTML = purchased.map(item => `<article class="download-row"><div><strong>${item.title}</strong><small>DS-${String(item.id).padStart(2, '0')} · ${item.category}</small></div><div class="download-actions"><button type="button" data-download="${item.id}" data-format="txt">Download TXT</button></div></article>`).join('');
  items.querySelectorAll('[data-download]').forEach(button => button.addEventListener('click', () => downloadDataset(Number(button.dataset.download), button.dataset.format)));
  library.hidden = false;
}
document.querySelector('#closeDownloadLibrary').addEventListener('click', () => { document.querySelector('#downloadLibrary').hidden = true; });
document.querySelector('#creditsButton').addEventListener('click', () => { document.querySelector('#walletBalance').textContent = `$${creditBalance}`; document.querySelector('#creditsModal').hidden = false; document.querySelector('#accountCode').focus(); });
document.querySelector('#closeCredits').addEventListener('click', () => { document.querySelector('#creditsModal').hidden = true; });
document.querySelector('#creditsModal').addEventListener('click', event => { if (event.target.id === 'creditsModal') document.querySelector('#creditsModal').hidden = true; });
document.querySelector('#accountRedeemButton').addEventListener('click', () => redeemCreditCode(document.querySelector('#accountCode')));
document.querySelector('#pageRedeemButton').addEventListener('click', () => redeemCreditCode(document.querySelector('#pageRedeemCode')));
document.querySelector('#accountCode').addEventListener('keydown', event => { if (event.key === 'Enter') redeemCreditCode(event.currentTarget); });
document.querySelector('#pageRedeemCode').addEventListener('keydown', event => { if (event.key === 'Enter') redeemCreditCode(event.currentTarget); });
document.querySelector('#searchInput').addEventListener('input', renderProducts);
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { activeFilter = button.dataset.filter; document.querySelectorAll('.filter').forEach(filter => filter.classList.toggle('active', filter === button)); renderProducts(); }));
document.querySelector('#cartButton').addEventListener('click', () => toggleCart(true));
document.querySelector('#closeCart').addEventListener('click', () => toggleCart(false));
document.querySelector('#drawerBackdrop').addEventListener('click', () => toggleCart(false));
const paymentModal = document.querySelector('#paymentModal');
const stripePaymentLink = '';
const paypalPaymentLink = '';
const accessCode = '00023456';
function togglePayment(open) { paymentModal.hidden = !open; }
document.querySelector('#checkoutButton').addEventListener('click', () => togglePayment(true));
document.querySelector('#closePayment').addEventListener('click', () => togglePayment(false));
paymentModal.addEventListener('click', event => { if (event.target === paymentModal) togglePayment(false); });
document.querySelector('#paymentContinue').addEventListener('click', () => {
  if (!stripePaymentLink) { showToast('Ask a parent or guardian to set up card payments'); return; }
  window.location.assign(stripePaymentLink);
});
document.querySelector('#paypalButton').addEventListener('click', () => {
  if (!paypalPaymentLink) { showToast('Ask a parent or guardian to set up PayPal'); return; }
  window.location.assign(paypalPaymentLink);
});
document.querySelector('#redeemButton').addEventListener('click', () => {
  redeemCreditCode(document.querySelector('#redeemCode'));
});
document.querySelector('#redeemCode').addEventListener('keydown', event => { if (event.key === 'Enter') redeemCreditCode(event.currentTarget); });
document.querySelector('#creditPurchaseButton').addEventListener('click', () => {
  const total = bag.reduce((sum, id) => sum + datasets.find(item => item.id === id).price, 0);
  if (creditBalance < total) { showToast(`You need $${total - creditBalance} more demo credits`); return; }
  creditBalance -= total; saveCredits(); togglePayment(false); showDownloadLibrary(); showToast('Demo credits used. Your data is ready.');
});
updateCreditBalance();
renderProducts();

const authScreen = document.querySelector('#authScreen');
const appShell = document.querySelector('#appShell');
const loginForm = document.querySelector('#loginForm');
const emailInput = document.querySelector('#email');
const formError = document.querySelector('#formError');
function enterLibrary(email) {
  localStorage.setItem('dataSwarmUser', email);
  authScreen.classList.add('auth-exit');
  setTimeout(() => { authScreen.hidden = true; appShell.hidden = false; }, 420);
}
if (localStorage.getItem('dataSwarmUser')) enterLibrary(localStorage.getItem('dataSwarmUser'));
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!emailInput.validity.valid) { formError.textContent = 'Please enter a valid email address.'; emailInput.focus(); return; }
  formError.textContent = '';
  enterLibrary(emailInput.value.trim());
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