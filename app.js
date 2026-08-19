/* =========================================================
   DATA SWARM - COMPLETE APP.JS
   Made by Taha Karmani
   ========================================================= */

'use strict';

/* =========================================================
   1. DATASETS
   ========================================================= */

const datasets = [
  {
    id: 1,
    title: 'Reef census: Great Barrier Reef',
    category: 'Oceans',
    visual: 'ocean',
    photoQuery: 'reef fish, coral',
    species: 'Reef fish',
    tag: 'Survey / 2024',
    description: '12,400 observations across 86 reef sites, with species, depth, and bleaching status.',
    price: 24
  },
  {
    id: 2,
    title: 'The freshwater atlas',
    category: 'Freshwater',
    visual: 'fresh',
    photoQuery: 'freshwater fish, river',
    species: 'Arapaima',
    tag: 'Atlas / Global',
    description: 'A worldwide index of freshwater fish habitats, migration routes, and water quality.',
    price: 18
  },
  {
    id: 3,
    title: 'When the ocean gets warmer',
    category: 'Climate',
    visual: 'climate',
    photoQuery: 'tropical fish, underwater',
    species: 'Schooling fish',
    tag: 'Time series / 1980–2023',
    description: 'Four decades of temperature and population data for 140 pelagic species.',
    price: 32
  },
  {
    id: 4,
    title: 'Night lights, deep fish',
    category: 'Oceans',
    visual: 'ocean',
    photoQuery: 'deep sea fish, underwater',
    species: 'Deep sea fish',
    tag: 'Acoustics / 2025',
    description: 'Echo-sounder readings that map life in the mesopelagic zone after dark.',
    price: 21
  },
  {
    id: 5,
    title: 'River giants',
    category: 'Freshwater',
    visual: 'fresh',
    photoQuery: 'large freshwater fish, river',
    species: 'Arapaima',
    tag: 'Field guide / 18 rivers',
    description: 'Size, movement, and spawning records for the world’s largest freshwater fish.',
    price: 16
  },
  {
    id: 6,
    title: 'Coral recovery signals',
    category: 'Climate',
    visual: 'climate',
    photoQuery: 'reef fish, coral reef',
    species: 'Coral reef fish',
    tag: 'Longitudinal / 2010–2024',
    description: 'A visual dataset tracking how reef communities respond after extreme heat.',
    price: 27
  },
  {
    id: 7,
    title: 'Kelp forest neighbors',
    category: 'Oceans',
    visual: 'ocean',
    photoQuery: 'rockfish, kelp forest',
    species: 'Rockfish',
    tag: 'Camera traps / 2025',
    description: 'Daily encounters between kelp, rockfish, and the predators that shape the forest.',
    price: 19
  },
  {
    id: 8,
    title: 'Salmon homeward routes',
    category: 'Freshwater',
    visual: 'fresh',
    photoQuery: 'salmon, river',
    species: 'Atlantic salmon',
    tag: 'Telemetry / 12 seasons',
    description: 'Tagged salmon journeys from open water back to the rivers where they began.',
    price: 29
  },
  {
    id: 9,
    title: 'The tiny fish census',
    category: 'Oceans',
    visual: 'ocean',
    photoQuery: 'small schooling fish, underwater',
    species: 'Small schooling fish',
    tag: 'Plankton net / 2023',
    description: 'A close look at larvae and small schooling fish across a coastal transect.',
    price: 14
  },
  {
    id: 10,
    title: 'Mangrove nurseries',
    category: 'Climate',
    visual: 'climate',
    photoQuery: 'juvenile fish, mangrove',
    species: 'Mangrove Jack',
    tag: 'Habitat study / 2024',
    description: 'Juvenile fish counts showing how mangrove roots protect young coastal life.',
    price: 23
  },
  {
    id: 11,
    title: 'Lake depth voices',
    category: 'Freshwater',
    visual: 'fresh',
    photoQuery: 'lake fish, freshwater',
    species: 'Wels catfish',
    tag: 'Hydrophone / 2022',
    description: 'Sound recordings and species observations from deep, quiet freshwater lakes.',
    price: 17
  },
  {
    id: 12,
    title: 'Tuna on the move',
    category: 'Climate',
    visual: 'climate',
    photoQuery: 'bluefin tuna, underwater',
    species: 'Bluefin tuna',
    tag: 'Satellite tags / 2015–2024',
    description: 'Nine years of migration, temperature, and feeding-zone data for bluefin tuna.',
    price: 34
  },
  {
    id: 13,
    title: 'Clownfish anemone life',
    category: 'Oceans',
    visual: 'ocean',
    species: 'Clownfish',
    tag: 'Reef behavior / 2024',
    description: 'Social groups, anemone partnerships, and territory patterns of clownfish.',
    price: 15
  },
  {
    id: 14,
    title: 'Blue tang migrations',
    category: 'Oceans',
    visual: 'ocean',
    species: 'Blue tang',
    tag: 'Reef telemetry / 2023',
    description: 'Movement and feeding records for blue tang across protected tropical reefs.',
    price: 22
  },
  {
    id: 15,
    title: 'Shark nursery survey',
    category: 'Oceans',
    visual: 'ocean',
    species: 'Shark',
    tag: 'Coastal survey / 2025',
    description: 'Juvenile shark sightings, size measurements, and nursery habitat conditions.',
    price: 31
  },
  {
    id: 16,
    title: 'Seahorse slow worlds',
    category: 'Oceans',
    visual: 'ocean',
    species: 'Seahorse',
    tag: 'Macro video / 2024',
    description: 'Close-range observations of courtship, camouflage, and feeding behavior.',
    price: 18
  },
  {
    id: 17,
    title: 'Manta ray routes',
    category: 'Oceans',
    visual: 'ocean',
    species: 'Manta ray',
    tag: 'Satellite tags / 2021–2025',
    description: 'Long-distance routes and cleaning-station visits of reef manta rays.',
    price: 28
  },
  {
    id: 18,
    title: 'Octopus intelligence',
    category: 'Oceans',
    visual: 'ocean',
    species: 'Octopus',
    tag: 'Behavior study / 2024',
    description: 'Problem-solving trials, den choice, and color-change observations.',
    price: 25
  },
  {
    id: 19,
    title: 'Penguin plunge records',
    category: 'Oceans',
    visual: 'ocean',
    species: 'Penguin',
    tag: 'Dive log / 2022–2025',
    description: 'Dive depth, travel speed, and feeding success from tagged penguins.',
    price: 20
  },
  {
    id: 20,
    title: 'Golden river guardians',
    category: 'Freshwater',
    visual: 'fresh',
    species: 'Golden dorado',
    tag: 'River survey / 2023',
    description: 'Population structure and spawning habitat for a powerful South American river fish.',
    price: 16
  },
  {
    id: 21,
    title: 'The electric eel atlas',
    category: 'Freshwater',
    visual: 'fresh',
    species: 'Electric eel',
    tag: 'Field atlas / 2024',
    description: 'Electric signals, habitat, and seasonal activity across Amazon waterways.',
    price: 19
  },
  {
    id: 22,
    title: 'Salmon color stories',
    category: 'Freshwater',
    visual: 'fresh',
    species: 'Salmon',
    tag: 'Spawning survey / 2025',
    description: 'Run timing, body condition, and stream temperatures across salmon runs.',
    price: 21
  },
  {
    id: 23,
    title: 'Betta display patterns',
    category: 'Freshwater',
    visual: 'fresh',
    species: 'Betta fish',
    tag: 'Behavior archive / 2023',
    description: 'Color, fin display, and territorial behavior in betta populations.',
    price: 12
  },
  {
    id: 24,
    title: 'Frogfish camouflage',
    category: 'Oceans',
    visual: 'ocean',
    species: 'Frogfish',
    tag: 'Reef macro / 2024',
    description: 'A visual archive of camouflage strategies and ambush positions.',
    price: 17
  },
  {
    id: 25,
    title: 'Whale shark visitors',
    category: 'Climate',
    visual: 'climate',
    species: 'Whale shark',
    tag: 'Photo ID / 2018–2025',
    description: 'Individual photo-identification records from seasonal plankton blooms.',
    price: 26
  },
  {
    id: 26,
    title: 'Flying fish weather',
    category: 'Climate',
    visual: 'climate',
    species: 'Flying fish',
    tag: 'Surface survey / 2022',
    description: 'Wind, wave, and launch behavior records from open-water flying fish.',
    price: 14
  },
  {
    id: 27,
    title: 'Luminous deep sea',
    category: 'Oceans',
    visual: 'ocean',
    species: 'Lanternfish',
    tag: 'Deep net / 2024',
    description: 'Bioluminescence observations and vertical migration from the midnight zone.',
    price: 24
  },
  {
    id: 28,
    title: 'Pufferfish garden maps',
    category: 'Oceans',
    visual: 'ocean',
    species: 'Pufferfish',
    tag: 'Seabed mapping / 2023',
    description: 'Circular sand gardens, mate selection, and seabed texture measurements.',
    price: 18
  }
];

/* =========================================================
   2. FISH PHOTOS
   ========================================================= */

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

/* =========================================================
   3. CREDIT / PAYMENT CODES
   ========================================================= */

const paymentCodes = {
  DS10: 10,
  DS25: 25,
  DS50: 50,
  DS100: 100,

  FISH1000: 1000,
  OCEAN0025: 25,
  SWARM0075: 75,

  TAHA456: 45,
  TAHA458: 45,
  TAHA425: 25,
  TAHA100: 100,

  REEF025: 25,
  REEF050: 50,
  REEF075: 75,
  REEF100: 100,

  BLUE025: 25,
  BLUE050: 50,
  BLUE075: 75,
  BLUE100: 100,

  FISH025: 25,
  FISH050: 50,
  FISH075: 75,
  FISH150: 150,

  DATA010: 10,
  DATA025: 25,
  DATA050: 50,
  DATA100: 100,

  SWARM010: 10,
  SWARM025: 25,
  SWARM050: 50,
  SWARM100: 100,

  TAHA010: 10,
  TAHA020: 20,
  TAHA030: 30,
  TAHA040: 40,
  TAHA050: 50,
  TAHA060: 60,
  TAHA070: 70,
  TAHA080: 80,
  TAHA090: 90,
  TAHA120: 120,
  TAHA200: 200,
  TAHA250: 250,

  OCEAN010: 10,
  OCEAN050: 50,
  OCEAN100: 100,
  OCEAN200: 200,

  CORAL010: 10,
  CORAL050: 50,
  CORAL100: 100,
  CORAL200: 200,

  FISH010: 10,
  FISH040: 40,
  FISH060: 60,
  FISH080: 80,

  BLUE010: 10,
  BLUE040: 40,
  BLUE060: 60,
  BLUE080: 80,

  REEF010: 10,
  REEF040: 40,
  REEF060: 60,
  REEF080: 80,

  DATA040: 40,
  DATA060: 60,
  DATA080: 80,
  DATA200: 200,

  DEEP010: 10,
  DEEP050: 50,
  DEEP100: 100,
  DEEP150: 150,

  WATER025: 25,
  WATER075: 75,
  WATER125: 125,
  WATER175: 175,

  ALLFISHES10000000: 10000000,

  DS7Q4M9X2P8K: 75,
  SWM4Z8N2R6T1: 100,
  F1SH9V3K7L2Q: 50,
  OCE4N8B2W6Y9: 125,
  TAH7A3X9M5C1: 250,
  REEF6P2D8H4S: 60,
  BLUE9K5R1V7N3: 90,
  DEEP2J8Q4T6Z1: 150,
  DATA5W1F7M3X9: 200,
  FISH8C4L6P2R0: 40,
  WAVE3N9B5K1Y7: 80,
  SEAS2V6H8Q4D0: 300,

  TAHA100000: 1000000
};

/* =========================================================
   4. GLOBAL STATE
   ========================================================= */

let activeFilter = 'All';
let selectedDataset = null;

/* =========================================================
   5. HELPERS
   ========================================================= */

const $ = selector =>
  document.querySelector(selector);

const money = value =>
  `$${Number(value || 0).toLocaleString('en-US')}`;

function getBalance() {
  return Number(
    localStorage.getItem(
      'dataSwarmCredits'
    ) || 0
  );
}

function setBalance(amount) {
  localStorage.setItem(
    'dataSwarmCredits',
    String(
      Math.max(
        0,
        Number(amount) || 0
      )
    )
  );

  updateBalanceDisplay();
}

function updateBalanceDisplay() {
  const balance =
    getBalance();

  document.querySelectorAll(
    '#balanceDisplay, #walletBalance, #headerBalance'
  ).forEach(element => {
    element.textContent =
      money(balance);
  });

  const pill =
    $('#creditPill');

  if (pill) {
    pill.innerHTML =
      `Balance <b>${money(balance)}</b>`;
  }
}

function showToast(message) {
  const toast =
    $('#toast');

  if (!toast) {
    alert(message);
    return;
  }

  toast.textContent =
    message;

  toast.classList.add('show');

  clearTimeout(
    window.dataSwarmToastTimer
  );

  window.dataSwarmToastTimer =
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* =========================================================
   6. PURCHASED DATA
   ========================================================= */

function getPurchasedDatasets() {
  try {
    return JSON.parse(
      localStorage.getItem(
        'dataSwarmPurchased'
      ) || '[]'
    );
  } catch {
    return [];
  }
}

function savePurchasedDataset(dataset) {
  const purchased =
    getPurchasedDatasets();

  if (
    !purchased.some(
      item =>
        Number(item.id) ===
        Number(dataset.id)
    )
  ) {
    purchased.push({
      id: dataset.id,
      title: dataset.title,
      purchasedAt:
        new Date().toISOString()
    });

    localStorage.setItem(
      'dataSwarmPurchased',
      JSON.stringify(purchased)
    );
  }
}

function isDatasetPurchased(id) {
  return getPurchasedDatasets().some(
    item =>
      Number(item.id) ===
      Number(id)
  );
}

/* =========================================================
   7. DATA GENERATOR
   ========================================================= */

function generateFishData(dataset) {

  const locations = [
    'Great Barrier Reef',
    'Coral Sea',
    'Pacific Ocean',
    'Atlantic Ocean',
    'Indian Ocean',
    'Amazon Basin',
    'Mediterranean Sea',
    'Caribbean Sea',
    'Monterey Bay',
    'North Pacific',
    'South Pacific',
    'Red Sea',
    'Gulf of Mexico',
    'Southern Ocean',
    'Arctic Ocean'
  ];

  const habitats = [
    'Coral reef',
    'Open ocean',
    'Mangrove',
    'Kelp forest',
    'River',
    'Freshwater lake',
    'Estuary',
    'Deep sea',
    'Coastal shelf',
    'Seagrass meadow'
  ];

  const behaviors = [
    'Feeding',
    'Migration',
    'Resting',
    'Spawning',
    'Schooling',
    'Territorial behavior',
    'Predator avoidance',
    'Habitat exploration'
  ];

  const id =
    Number(dataset.id);

  return {
    species:
      dataset.species ||
      'Fish',

    category:
      dataset.category,

    habitat:
      habitats[
        (id * 2) %
        habitats.length
      ],

    location:
      locations[
        id %
        locations.length
      ],

    behavior:
      behaviors[
        (id * 3) %
        behaviors.length
      ],

    depth:
      `${5 + ((id * 37) % 450)} m`,

    temperature:
      `${(
        18 +
        ((id * 7) % 120) /
          10
      ).toFixed(1)} °C`,

    length:
      `${(
        12 +
        ((id * 19) % 800) /
          10
      ).toFixed(1)} cm`,

    population:
      (
        500 +
        ((id * 173) % 14500)
      ).toLocaleString('en-US'),

    visibility:
      `${(
        4 +
        ((id * 11) % 400) /
          10
      ).toFixed(1)} m`,

    latitude:
      (
        -40 +
        ((id * 17) % 800) /
          10
      ).toFixed(2),

    longitude:
      (
        -170 +
        ((id * 23) % 3400) /
          10
      ).toFixed(2)
  };
}

/* =========================================================
   8. TXT DATASET
   ========================================================= */

function generateDatasetText(dataset) {

  const lines = [];

  const fish =
    generateFishData(dataset);

  lines.push(
    '============================================================'
  );

  lines.push(
    'DATA SWARM - FISH DATASET'
  );

  lines.push(
    'Made by Taha Karmani'
  );

  lines.push(
    '============================================================'
  );

  lines.push('');

  lines.push(
    `Dataset ID: DS-${String(dataset.id).padStart(2, '0')}`
  );

  lines.push(
    `Title: ${dataset.title}`
  );

  lines.push(
    `Category: ${dataset.category}`
  );

  lines.push(
    `Species: ${fish.species}`
  );

  lines.push(
    `Tag: ${dataset.tag}`
  );

  lines.push(
    `Price: $${dataset.price}`
  );

  lines.push('');

  lines.push(
    'FISH DATA'
  );

  lines.push(
    '------------------------------------------------------------'
  );

  lines.push(
    `Species=${fish.species}`
  );

  lines.push(
    `Habitat=${fish.habitat}`
  );

  lines.push(
    `Location=${fish.location}`
  );

  lines.push(
    `Behavior=${fish.behavior}`
  );

  lines.push(
    `Depth=${fish.depth}`
  );

  lines.push(
    `WaterTemperature=${fish.temperature}`
  );

  lines.push(
    `AverageLength=${fish.length}`
  );

  lines.push(
    `EstimatedPopulation=${fish.population}`
  );

  lines.push(
    `Visibility=${fish.visibility}`
  );

  lines.push(
    `Latitude=${fish.latitude}`
  );

  lines.push(
    `Longitude=${fish.longitude}`
  );

  lines.push('');

  lines.push(
    'DESCRIPTION'
  );

  lines.push(
    '------------------------------------------------------------'
  );

  lines.push(
    dataset.description
  );

  lines.push('');

  lines.push(
    'DATASET NOTES'
  );

  lines.push(
    '------------------------------------------------------------'
  );

  lines.push(
    'This file is a Data Swarm demonstration dataset.'
  );

  lines.push(
    'It is intended for exploration and testing of the Data Swarm app.'
  );

  lines.push('');

  lines.push(
    'Photo reference:'
  );

  lines.push(
    photoUrls[dataset.id] ||
    'No photo reference available.'
  );

  lines.push('');

  lines.push(
    'Created by: Taha Karmani'
  );

  lines.push(
    '============================================================'
  );

  return lines.join('\n');
}

/* =========================================================
   9. DOWNLOAD
   ========================================================= */

function downloadDataset(dataset) {

  if (
    !isDatasetPurchased(
      dataset.id
    )
  ) {
    showToast(
      'Purchase this dataset first.'
    );

    return;
  }

  const text =
    generateDatasetText(
      dataset
    );

  const blob =
    new Blob(
      [text],
      {
        type:
          'text/plain;charset=utf-8'
      }
    );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement('a');

  link.href =
    url;

  link.download =
    `Data-Swarm-DS-${String(
      dataset.id
    ).padStart(
      2,
      '0'
    )}-${dataset.title
      .replace(
        /[^a-z0-9]+/gi,
        '-'
      )
      .toLowerCase()}.txt`;

  document.body.appendChild(
    link
  );

  link.click();

  link.remove();

  setTimeout(() => {
    URL.revokeObjectURL(
      url
    );
  }, 1000);

  showToast(
    `${dataset.title} downloaded`
  );
}

/* =========================================================
   10. CHECKOUT
   ========================================================= */

function createCheckoutModal() {

  if ($('#checkoutModal'))
    return;

  const modal =
    document.createElement('div');

  modal.id =
    'checkoutModal';

  modal.className =
    'payment-modal-backdrop';

  modal.hidden = true;

  modal.innerHTML = `
    <section
      class="payment-modal"
      role="dialog"
      aria-modal="true"
    >

      <div class="payment-modal-head">

        <div>
          <p class="eyebrow">
            Data Swarm checkout
          </p>

          <h2>
            Choose payment
          </h2>
        </div>

        <button
          id="checkoutClose"
          class="payment-close"
          type="button"
        >
          ×
        </button>

      </div>

      <div id="checkoutInfo"></div>

      <div class="wallet-balance">
        <span>Your balance</span>
        <strong id="checkoutBalance">$0</strong>
      </div>

      <button
        id="payBalanceButton"
        class="credit-purchase"
        type="button"
      >
        Pay with balance
      </button>

      <div class="payment-divider">
        or
      </div>

      <button
        id="payPaypalButton"
        class="paypal-button"
        type="button"
      >
        Pay with PayPal
      </button>

      <div class="payment-divider">
        or
      </div>

      <button
        id="payCardButton"
        class="payment-continue"
        type="button"
      >
        Pay with bank card
      </button>

      <p class="payment-secure">
        Demo checkout — no real card or PayPal payment is processed.
      </p>

    </section>
  `;

  document.body.appendChild(
    modal
  );

  $('#checkoutClose')
    .addEventListener(
      'click',
      closeCheckout
    );

  $('#payBalanceButton')
    .addEventListener(
      'click',
      payWithBalance
    );

  $('#payPaypalButton')
    .addEventListener(
      'click',
      () =>
        demoExternalPayment(
          'PayPal'
        )
    );

  $('#payCardButton')
    .addEventListener(
      'click',
      () =>
        demoExternalPayment(
          'Bank card'
        )
    );

  modal.addEventListener(
    'click',
    event => {
      if (
        event.target ===
        modal
      ) {
        closeCheckout();
      }
    }
  );
}

function openCheckout(datasetId) {

  selectedDataset =
    datasets.find(
      dataset =>
        dataset.id ===
        datasetId
    );

  if (!selectedDataset)
    return;

  createCheckoutModal();

  $('#checkoutInfo')
    .innerHTML = `
      <p>
        <strong>
          ${escapeHtml(
            selectedDataset.title
          )}
        </strong>
      </p>

      <p>
        Dataset price:
        <strong>
          ${money(
            selectedDataset.price
          )}
        </strong>
      </p>
    `;

  $('#checkoutBalance')
    .textContent =
    money(getBalance());

  $('#checkoutModal')
    .hidden = false;
}

function closeCheckout() {

  const modal =
    $('#checkoutModal');

  if (modal) {
    modal.hidden = true;
  }

  selectedDataset =
    null;
}

function payWithBalance() {

  if (!selectedDataset)
    return;

  const balance =
    getBalance();

  if (
    balance <
    selectedDataset.price
  ) {
    showToast(
      `You need ${money(
        selectedDataset.price -
        balance
      )} more`
    );

    return;
  }

  setBalance(
    balance -
    selectedDataset.price
  );

  const purchased =
    selectedDataset;

  savePurchasedDataset(
    purchased
  );

  closeCheckout();

  showToast(
    'Payment successful — data unlocked!'
  );

  setTimeout(() => {
    openFishDataPanel(
      purchased.id
    );
  }, 350);
}

function demoExternalPayment(
  method
) {

  if (!selectedDataset)
    return;

  const dataset =
    selectedDataset;

  const confirmed =
    confirm(
      `${method} demo payment\n\n` +
      `Dataset: ${dataset.title}\n` +
      `Price: ${money(dataset.price)}\n\n` +
      `Press OK to simulate a successful payment.`
    );

  if (!confirmed)
    return;

  savePurchasedDataset(
    dataset
  );

  closeCheckout();

  showToast(
    `${method} payment successful — data unlocked!`
  );

  setTimeout(() => {
    openFishDataPanel(
      dataset.id
    );
  }, 350);
}

/* =========================================================
   11. FISH DATA PANEL
   ========================================================= */

function createFishDataPanel() {

  if ($('#fishDataPanel'))
    return;

  const panel =
    document.createElement('div');

  panel.id =
    'fishDataPanel';

  panel.className =
    'fish-data-panel-backdrop';

  panel.hidden = true;

  panel.innerHTML = `
    <section
      class="fish-data-panel"
      role="dialog"
      aria-modal="true"
    >

      <div class="fish-data-head">

        <div>

          <p class="eyebrow">
            Data Swarm dataset
          </p>

          <h2 id="fishDataTitle">
            Fish data
          </h2>

          <p
            id="fishDataSubtitle"
            class="fish-data-subtitle"
          ></p>

        </div>

        <button
          id="fishDataClose"
          class="payment-close"
          type="button"
        >
          ×
        </button>

      </div>

      <div
        id="fishDataLocked"
        class="fish-data-locked"
        hidden
      >

        <div class="fish-lock-icon">
          🔒
        </div>

        <h3>
          Dataset locked
        </h3>

        <p>
          Buy this dataset to unlock the
          fish information.
        </p>

        <strong
          id="fishLockedPrice"
          class="fish-locked-price"
        >
          $0
        </strong>

        <button
          id="fishUnlockButton"
          class="add-button"
          type="button"
        >
          Unlock data
        </button>

      </div>

      <div
        id="fishDataUnlocked"
        class="fish-data-protected"
        hidden
      >

        <div class="fish-data-status">
          <span class="fish-unlocked-dot"></span>
          Dataset unlocked
        </div>

        <div class="fish-data-grid">

          <div class="fish-data-item">
            <span>Species</span>
            <strong id="fishSpecies"></strong>
          </div>

          <div class="fish-data-item">
            <span>Category</span>
            <strong id="fishCategory"></strong>
          </div>

          <div class="fish-data-item">
            <span>Habitat</span>
            <strong id="fishHabitat"></strong>
          </div>

          <div class="fish-data-item">
            <span>Location</span>
            <strong id="fishLocation"></strong>
          </div>

          <div class="fish-data-item">
            <span>Behavior</span>
            <strong id="fishBehavior"></strong>
          </div>

          <div class="fish-data-item">
            <span>Depth</span>
            <strong id="fishDepth"></strong>
          </div>

          <div class="fish-data-item">
            <span>Water temperature</span>
            <strong id="fishTemperature"></strong>
          </div>

          <div class="fish-data-item">
            <span>Average length</span>
            <strong id="fishLength"></strong>
          </div>

          <div class="fish-data-item">
            <span>Estimated population</span>
            <strong id="fishPopulation"></strong>
          </div>

          <div class="fish-data-item">
            <span>Visibility</span>
            <strong id="fishVisibility"></strong>
          </div>

          <div class="fish-data-item">
            <span>Latitude</span>
            <strong id="fishLatitude"></strong>
          </div>

          <div class="fish-data-item">
            <span>Longitude</span>
            <strong id="fishLongitude"></strong>
          </div>

        </div>

        <div class="fish-description-box">

          <span>
            Description
          </span>

          <p id="fishDescription"></p>

        </div>

        <div class="fish-panel-actions">

          <button
            id="fishDownloadButton"
            type="button"
            class="payment-continue"
          >
            Download TXT
          </button>

        </div>

        <p class="fish-protection-note">
          🔐 Data Swarm protected dataset
        </p>

      </div>

    </section>
  `;

  document.body.appendChild(
    panel
  );

  $('#fishDataClose')
    .addEventListener(
      'click',
      closeFishDataPanel
    );

  panel.addEventListener(
    'click',
    event => {
      if (
        event.target ===
        panel
      ) {
        closeFishDataPanel();
      }
    }
  );

  $('#fishUnlockButton')
    .addEventListener(
      'click',
      () => {

        const id =
          Number(
            panel.dataset.datasetId
          );

        closeFishDataPanel();

        openCheckout(id);
      }
    );

  $('#fishDownloadButton')
    .addEventListener(
      'click',
      () => {

        const id =
          Number(
            panel.dataset.datasetId
          );

        const dataset =
          datasets.find(
            d =>
              d.id === id
          );

        if (dataset) {
          downloadDataset(
            dataset
          );
        }
      }
    );

  setupFishDataProtection();
}

function openFishDataPanel(
  datasetId
) {

  const dataset =
    datasets.find(
      d =>
        Number(d.id) ===
        Number(datasetId)
    );

  if (!dataset)
    return;

  createFishDataPanel();

  const panel =
    $('#fishDataPanel');

  panel.dataset.datasetId =
    dataset.id;

  $('#fishDataTitle')
    .textContent =
    dataset.title;

  $('#fishDataSubtitle')
    .textContent =
    `DS-${String(
      dataset.id
    ).padStart(
      2,
      '0'
    )} • ${dataset.tag}`;

  const locked =
    $('#fishDataLocked');

  const unlocked =
    $('#fishDataUnlocked');

  if (
    !isDatasetPurchased(
      dataset.id
    )
  ) {

    locked.hidden =
      false;

    unlocked.hidden =
      true;

    $('#fishLockedPrice')
      .textContent =
      money(dataset.price);

    panel.hidden =
      false;

    return;
  }

  locked.hidden =
    true;

  unlocked.hidden =
    false;

  const data =
    generateFishData(
      dataset
    );

  $('#fishSpecies')
    .textContent =
    data.species;

  $('#fishCategory')
    .textContent =
    data.category;

  $('#fishHabitat')
    .textContent =
    data.habitat;

  $('#fishLocation')
    .textContent =
    data.location;

  $('#fishBehavior')
    .textContent =
    data.behavior;

  $('#fishDepth')
    .textContent =
    data.depth;

  $('#fishTemperature')
    .textContent =
    data.temperature;

  $('#fishLength')
    .textContent =
    data.length;

  $('#fishPopulation')
    .textContent =
    data.population;

  $('#fishVisibility')
    .textContent =
    data.visibility;

  $('#fishLatitude')
    .textContent =
    data.latitude;

  $('#fishLongitude')
    .textContent =
    data.longitude;

  $('#fishDescription')
    .textContent =
    dataset.description;

  panel.hidden =
    false;
}

function closeFishDataPanel() {

  const panel =
    $('#fishDataPanel');

  if (panel) {
    panel.hidden =
      true;
  }
}

/* =========================================================
   12. FISH DATA PROTECTION
   ========================================================= */

function setupFishDataProtection() {

  document.addEventListener(
    'contextmenu',
    event => {

      const protectedArea =
        event.target.closest(
          '#fishDataUnlocked'
        );

      if (!protectedArea)
        return;

      event.preventDefault();

      showToast(
        'Copying is disabled for protected data.'
      );
    }
  );

  document.addEventListener(
    'selectstart',
    event => {

      const protectedArea =
        event.target.closest(
          '#fishDataUnlocked'
        );

      if (!protectedArea)
        return;

      event.preventDefault();
    }
  );

  document.addEventListener(
    'copy',
    event => {

      const selection =
        window.getSelection();

      const protectedArea =
        document.querySelector(
          '#fishDataUnlocked'
        );

      if (
        selection &&
        protectedArea &&
        protectedArea.contains(
          selection.anchorNode
        )
      ) {

        event.preventDefault();

        showToast(
          'Copying is disabled for protected data.'
        );
      }
    }
  );
}

/* =========================================================
   13. PRODUCT GRID
   ========================================================= */

function renderProducts() {

  const grid =
    $('#productGrid');

  if (!grid)
    return;

  const searchInput =
    $('#searchInput');

  const query =
    searchInput
      ? searchInput.value
          .toLowerCase()
          .trim()
      : '';

  const visible =
    datasets.filter(
      dataset => {

        const filterOK =
          activeFilter === 'All' ||
          dataset.category ===
            activeFilter;

        const searchable = [
          dataset.title,
          dataset.description,
          dataset.category,
          dataset.species,
          dataset.tag
        ]
          .join(' ')
          .toLowerCase();

        return (
          filterOK &&
          searchable.includes(
            query
          )
        );
      }
    );

  if (!visible.length) {

    grid.innerHTML =
      '<p class="empty-cart">No datasets match that search yet.</p>';

    return;
  }

  grid.innerHTML =
    visible
      .map(dataset => {

        const photo =
          photoUrls[
            dataset.id
          ];

        const purchased =
          isDatasetPurchased(
            dataset.id
          );

        return `
          <article class="product">

            <div
              class="product-visual ${dataset.visual}"
            >

              <img
                src="${photo}"
                alt="${escapeHtml(
                  dataset.species ||
                  'Fish'
                )} photograph"
                loading="lazy"
                decoding="async"
                class="fish-dataset-photo"
                data-id="${dataset.id}"
                onerror="this.onerror=null;this.classList.add('photo-unavailable')"
              >

              <span class="visual-label">
                ${escapeHtml(
                  dataset.category
                    .toUpperCase()
                )}
                /
                DS-${String(
                  dataset.id
                ).padStart(
                  2,
                  '0'
                )}
              </span>

              <div class="visual-shape"></div>

              <span class="photo-credit">
                Fish photograph
              </span>

            </div>

            <div class="product-body">

              <div class="product-meta">
                <span>
                  ${escapeHtml(
                    dataset.tag
                  )}
                </span>

                <span>
                  TXT · CSV · JSON
                </span>
              </div>

              <h3>
                ${escapeHtml(
                  dataset.title
                )}
              </h3>

              <p>
                ${escapeHtml(
                  dataset.description
                )}
              </p>

              <div class="product-buy">

                <span class="price">
                  ${money(
                    dataset.price
                  )}
                </span>

                <button
                  class="view-data-button"
                  type="button"
                  data-view-id="${dataset.id}"
                >
                  ${purchased
                    ? 'View data'
                    : 'Preview data'}
                </button>

                <button
                  class="add-button buy-button"
                  type="button"
                  data-id="${dataset.id}"
                >
                  ${
                    purchased
                      ? 'Unlocked'
                      : 'Buy data'
                  }
                </button>

              </div>

            </div>

          </article>
        `;
      })
      .join('');

  grid
    .querySelectorAll(
      '.fish-dataset-photo'
    )
    .forEach(image => {

      image.addEventListener(
        'click',
        event => {

          event.preventDefault();

          openFishDataPanel(
            Number(
              image.dataset.id
            )
          );
        }
      );
    });

  grid
    .querySelectorAll(
      '.view-data-button'
    )
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          openFishDataPanel(
            Number(
              button.dataset.viewId
            )
          );
        }
      );
    });

  grid
    .querySelectorAll(
      '.buy-button'
    )
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          const id =
            Number(
              button.dataset.id
            );

          if (
            isDatasetPurchased(id)
          ) {

            openFishDataPanel(
              id
            );

            return;
          }

          openCheckout(id);
        }
      );
    });
}

/* =========================================================
   14. PHOTO PREVIEW
   ========================================================= */

function openPhotoPreview(
  image
) {

  const preview =
    $('#photoPreview');

  if (!preview)
    return;

  const previewImage =
    $('#previewImage');

  const src =
    image.currentSrc ||
    image.src;

  previewImage.src =
    src;

  previewImage.alt =
    image.alt;

  const product =
    image.closest(
      '.product'
    );

  const title =
    product
      ?.querySelector('h3')
      ?.textContent ||
    'Fish photograph';

  $('#previewTitle')
    .textContent =
    title;

  const sourceLink =
    $('#previewSource');

  if (sourceLink) {
    sourceLink.href =
      src;
  }

  preview.hidden =
    false;
}

function closePhotoPreview() {

  const preview =
    $('#photoPreview');

  if (preview) {
    preview.hidden =
      true;
  }
}

/* =========================================================
   15. REDEEM CODES
   ========================================================= */

function redeemCode(code) {

  const cleanCode =
    String(code || '')
      .trim()
      .toUpperCase();

  if (!cleanCode) {

    return {
      success: false,
      message:
        'Please enter a code.'
    };
  }

  const credits =
    paymentCodes[
      cleanCode
    ];

  if (!credits) {

    return {
      success: false,
      message:
        'That code is not valid.'
    };
  }

  const balance =
    getBalance();

  const newBalance =
    balance +
    Number(credits);

  setBalance(
    newBalance
  );

  return {
    success: true,
    credits,
    balance:
      newBalance
  };
}

/* =========================================================
   16. REDEEM FORM
   ========================================================= */

function setupRedeemForm() {

  const forms =
    document.querySelectorAll(
      '#redeemForm, #walletRedeemForm'
    );

  forms.forEach(form => {

    if (
      form.dataset.redeemReady
    ) {
      return;
    }

    form.dataset.redeemReady =
      'true';

    form.addEventListener(
      'submit',
      event => {

        event.preventDefault();

        const input =
          form.querySelector(
            'input'
          );

        const status =
          form.querySelector(
            '.code-status'
          ) ||
          $('#redeemStatus');

        const result =
          redeemCode(
            input?.value
          );

        if (!result.success) {

          if (status) {
            status.textContent =
              result.message;
          }

          return;
        }

        if (status) {

          status.textContent =
            `${money(
              result.credits
            )} credits added. ` +
            `Your balance is ${money(
              result.balance
            )}.`;
        }

        if (input) {
          input.value =
            '';
        }

        showToast(
          `${money(
            result.credits
          )} added to your balance`
        );
      }
    );
  });
}

/* =========================================================
   17. LOGIN
   ========================================================= */

const authScreen =
  $('#authScreen');

const appShell =
  $('#appShell');

const loginForm =
  $('#loginForm');

const displayNameInput =
  $('#displayName');

const emailInput =
  $('#email');

const formError =
  $('#formError');

function normalizeName(name) {

  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(
      /\s+/g,
      ' '
    );
}

function getRegisteredNames() {

  try {

    return JSON.parse(
      localStorage.getItem(
        'dataSwarmRegisteredNames'
      ) || '[]'
    );

  } catch {

    return [];
  }
}

function registerName(name) {

  const normalized =
    normalizeName(name);

  const names =
    getRegisteredNames();

  if (
    names.includes(
      normalized
    )
  ) {
    return false;
  }

  names.push(
    normalized
  );

  localStorage.setItem(
    'dataSwarmRegisteredNames',
    JSON.stringify(names)
  );

  return true;
}

function enterLibrary(
  name,
  email
) {

  localStorage.setItem(
    'dataSwarmDisplayName',
    name
  );

  localStorage.setItem(
    'dataSwarmUser',
    email
  );

  if (authScreen) {
    authScreen.classList.add(
      'auth-exit'
    );
  }

  setTimeout(() => {

    if (authScreen) {
      authScreen.hidden =
        true;
    }

    if (appShell) {
      appShell.hidden =
        false;
    }

    updateBalanceDisplay();

  }, 420);
}

function setupLogin() {

  if (!loginForm)
    return;

  loginForm.addEventListener(
    'submit',
    event => {

      event.preventDefault();

      const name =
        displayNameInput
          ?.value
          .trim() ||
        '';

      const email =
        emailInput
          ?.value
          .trim() ||
        '';

      if (!name) {

        if (formError) {
          formError.textContent =
            'Please enter your name.';
        }

        displayNameInput?.focus();

        return;
      }

      if (name.length < 2) {

        if (formError) {
          formError.textContent =
            'Your name must contain at least 2 characters.';
        }

        return;
      }

      if (
        !emailInput?.validity.valid
      ) {

        if (formError) {
          formError.textContent =
            'Please enter a valid email address.';
        }

        emailInput?.focus();

        return;
      }

      const savedUser =
        localStorage.getItem(
          'dataSwarmUser'
        );

      const savedName =
        localStorage.getItem(
          'dataSwarmDisplayName'
        );

      if (
        savedUser &&
        savedName &&
        normalizeName(
          savedName
        ) ===
          normalizeName(name) &&
        savedUser.toLowerCase() ===
          email.toLowerCase()
      ) {

        enterLibrary(
          name,
          email
        );

        return;
      }

      if (
        !registerName(name)
      ) {

        if (formError) {
          formError.textContent =
            'That name is already registered on this device. Please choose another name.';
        }

        return;
      }

      if (formError) {
        formError.textContent =
          '';
      }

      enterLibrary(
        name,
        email
      );
    }
  );
}

function restoreLogin() {

  const savedUser =
    localStorage.getItem(
      'dataSwarmUser'
    );

  const savedName =
    localStorage.getItem(
      'dataSwarmDisplayName'
    );

  if (savedUser) {

    enterLibrary(
      savedName ||
        savedUser.split('@')[0],
      savedUser
    );
  }
}

/* =========================================================
   18. LOGOUT
   ========================================================= */

function setupLogout() {

  const button =
    $('#backToLogin');

  if (!button)
    return;

  button.addEventListener(
    'click',
    () => {

      localStorage.removeItem(
        'dataSwarmUser'
      );

      localStorage.removeItem(
        'dataSwarmDisplayName'
      );

      if (appShell) {
        appShell.hidden =
          true;
      }

      if (authScreen) {

        authScreen.hidden =
          false;

        authScreen.classList.remove(
          'auth-exit'
        );
      }

      if (displayNameInput) {
        displayNameInput.value =
          '';
      }

      if (emailInput) {
        emailInput.value =
          '';
      }

      displayNameInput?.focus();
    }
  );
}

/* =========================================================
   19. WELCOME EMAIL
   ========================================================= */

function setupWelcomeEmail() {

  const button =
    $('#welcomeEmailButton');

  if (!button)
    return;

  button.addEventListener(
    'click',
    () => {

      const email =
        localStorage.getItem(
          'dataSwarmUser'
        );

      if (!email) {

        showToast(
          'Please sign in first'
        );

        return;
      }

      const name =
        localStorage.getItem(
          'dataSwarmDisplayName'
        ) ||
        'friend';

      const subject =
        encodeURIComponent(
          'Welcome to Data Swarm'
        );

      const body =
        encodeURIComponent(
          `Hi ${name},\n\n` +
          `Welcome to Data Swarm, your fish data library.\n\n` +
          `Made by Taha Karmani.\n\n` +
          `See you in the water!`
        );

      window.location.href =
        `mailto:${encodeURIComponent(
          email
        )}` +
        `?subject=${subject}` +
        `&body=${body}`;
    }
  );
}

/* =========================================================
   20. SEARCH + FILTERS
   ========================================================= */

function setupSearchAndFilters() {

  $('#searchInput')
    ?.addEventListener(
      'input',
      renderProducts
    );

  document.querySelectorAll(
    '.filter'
  ).forEach(button => {

    button.addEventListener(
      'click',
      () => {

        activeFilter =
          button.dataset.filter ||
          'All';

        document
          .querySelectorAll(
            '.filter'
          )
          .forEach(filter => {

            filter.classList.toggle(
              'active',
              filter === button
            );
          });

        renderProducts();
      }
    );
  });
}

/* =========================================================
   21. PHOTO MODAL
   ========================================================= */

function setupPhotoModal() {

  $('#closePhotoPreview')
    ?.addEventListener(
      'click',
      closePhotoPreview
    );

  $('#photoPreview')
    ?.addEventListener(
      'click',
      event => {

        if (
          event.target.id ===
          'photoPreview'
        ) {
          closePhotoPreview();
        }
      }
    );
}

/* =========================================================
   22. WALLET
   ========================================================= */

function createWalletModal() {

  if ($('#walletModal'))
    return;

  const modal =
    document.createElement('div');

  modal.id =
    'walletModal';

  modal.className =
    'credits-modal-backdrop';

  modal.hidden =
    true;

  modal.innerHTML = `
    <section class="credits-modal">

      <div class="payment-modal-head">

        <div>

          <p class="eyebrow">
            Data Swarm wallet
          </p>

          <h2>
            Your balance
          </h2>

        </div>

        <button
          id="walletClose"
          class="payment-close"
          type="button"
        >
          ×
        </button>

      </div>

      <div class="wallet-balance">

        <span>
          Available credits
        </span>

        <strong
          id="walletBalance"
        >
          $0
        </strong>

      </div>

      <label
        class="wallet-label"
        for="walletCode"
      >
        Redeem credit code
      </label>

      <form
        id="walletRedeemForm"
      >

        <div class="redeem-row">

          <input
            id="walletCode"
            type="text"
            placeholder="Enter code"
            autocomplete="off"
            required
          >

          <button
            type="submit"
          >
            Redeem
          </button>

        </div>

        <p
          class="code-status"
          id="walletStatus"
        ></p>

      </form>

    </section>
  `;

  document.body.appendChild(
    modal
  );

  $('#walletClose')
    .addEventListener(
      'click',
      () => {
        modal.hidden =
          true;
      }
    );

  modal.addEventListener(
    'click',
    event => {

      if (
        event.target ===
        modal
      ) {
        modal.hidden =
          true;
      }
    }
  );

  setupRedeemForm();
}

function setupBalanceButton() {

  createWalletModal();

  const button =
    $('#creditPill');

  if (!button)
    return;

  button.addEventListener(
    'click',
    () => {

      updateBalanceDisplay();

      const modal =
        $('#walletModal');

      if (modal) {
        modal.hidden =
          false;
      }
    }
  );
}

/* =========================================================
   23. SWARM CANVAS
   ========================================================= */

function setupSwarm() {

  const canvas =
    $('#swarmCanvas');

  if (!canvas)
    return;

  const context =
    canvas.getContext(
      '2d'
    );

  if (!context)
    return;

  const swarm =
    Array.from(
      {
        length: 26
      },
      (_, index) => ({
        x: Math.random(),
        y: Math.random(),
        vx: 0,
        vy: 0,
        size:
          5 +
          Math.random() * 4,
        phase:
          index * 0.7,
        tint:
          index % 4
      })
    );

  const pointer = {
    x: 0.5,
    y: 0.5
  };

  function resizeSwarm() {

    const ratio =
      window.devicePixelRatio ||
      1;

    canvas.width =
      window.innerWidth *
      ratio;

    canvas.height =
      window.innerHeight *
      ratio;

    canvas.style.width =
      `${window.innerWidth}px`;

    canvas.style.height =
      `${window.innerHeight}px`;

    context.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );
  }

  window.addEventListener(
    'resize',
    resizeSwarm
  );

  window.addEventListener(
    'pointermove',
    event => {

      pointer.x =
        event.clientX /
        window.innerWidth;

      pointer.y =
        event.clientY /
        window.innerHeight;
    }
  );

  function drawSwarm(time) {

    const width =
      window.innerWidth;

    const height =
      window.innerHeight;

    context.clearRect(
      0,
      0,
      width,
      height
    );

    swarm.forEach(
      fish => {

        const targetX =
          pointer.x *
            width +
          Math.cos(
            time / 900 +
            fish.phase
          ) *
            70;

        const targetY =
          pointer.y *
            height +
          Math.sin(
            time / 1100 +
            fish.phase
          ) *
            55;

        fish.vx +=
          (
            targetX -
            fish.x * width
          ) *
          0.00018;

        fish.vy +=
          (
            targetY -
            fish.y * height
          ) *
          0.00018;

        fish.vx *=
          0.96;

        fish.vy *=
          0.96;

        fish.x +=
          fish.vx /
          width;

        fish.y +=
          fish.vy /
          height;

        const angle =
          Math.atan2(
            fish.vy,
            fish.vx
          ) ||
          fish.phase;

        const size =
          fish.size;

        const colors = [
          '#f6cf69',
          '#e8b85c',
          '#9bd1bd',
          '#f08b6d'
        ];

        const bodyColor =
          colors[
            fish.tint
          ];

        context.save();

        context.translate(
          fish.x * width,
          fish.y * height
        );

        context.rotate(
          angle
        );

        context.globalAlpha =
          0.9;

        context.shadowColor =
          'rgba(4,27,27,.28)';

        context.shadowBlur =
          size * 0.8;

        context.shadowOffsetY =
          size * 0.35;

        context.fillStyle =
          bodyColor;

        context.beginPath();

        context.moveTo(
          size * 2.25,
          0
        );

        context.bezierCurveTo(
          size * 1.3,
          -size * 1.15,
          -size * 0.65,
          -size * 1.05,
          -size * 1.55,
          0
        );

        context.bezierCurveTo(
          -size * 0.65,
          size * 1.05,
          size * 1.3,
          size * 1.15,
          size * 2.25,
          0
        );

        context.fill();

        context.shadowColor =
          'transparent';

        context.beginPath();

        context.moveTo(
          -size * 1.25,
          0
        );

        context.lineTo(
          -size * 2.65,
          -size * 1.2
        );

        context.lineTo(
          -size * 2.4,
          0
        );

        context.lineTo(
          -size * 2.65,
          size * 1.2
        );

        context.closePath();

        context.fill();

        context.globalAlpha =
          0.5;

        context.fillStyle =
          '#fff3c2';

        context.beginPath();

        context.moveTo(
          -size * 0.15,
          -size * 0.75
        );

        context.lineTo(
          size * 0.35,
          -size * 1.45
        );

        context.lineTo(
          size * 0.75,
          -size * 0.55
        );

        context.closePath();

        context.fill();

        context.beginPath();

        context.moveTo(
          -size * 0.2,
          size * 0.7
        );

        context.lineTo(
          size * 0.45,
          size * 1.3
        );

        context.lineTo(
          size * 0.75,
          size * 0.45
        );

        context.closePath();

        context.fill();

        context.globalAlpha =
          0.7;

        context.strokeStyle =
          'rgba(22,72,63,.52)';

        context.lineWidth =
          Math.max(
            1,
            size * 0.12
          );

        context.beginPath();

        context.arc(
          size * 0.75,
          0,
          size * 0.75,
          -0.85,
          0.85
        );

        context.stroke();

        context.beginPath();

        context.moveTo(
          -size * 0.35,
          -size * 0.65
        );

        context.quadraticCurveTo(
          size * 0.2,
          0,
          -size * 0.35,
          size * 0.65
        );

        context.stroke();

        context.fillStyle =
          '#16483f';

        context.beginPath();

        context.arc(
          size * 1.42,
          -size * 0.25,
          Math.max(
            1,
            size * 0.18
          ),
          0,
          Math.PI * 2
        );

        context.fill();

        context.fillStyle =
          '#fff';

        context.beginPath();

        context.arc(
          size * 1.47,
          -size * 0.3,
          Math.max(
            0.5,
            size * 0.07
          ),
          0,
          Math.PI * 2
        );

        context.fill();

        context.restore();
      });

    requestAnimationFrame(
      drawSwarm
    );
  }

  resizeSwarm();

  requestAnimationFrame(
    drawSwarm
  );
}

/* =========================================================
   24. TOP BALANCE
   ========================================================= */

function createTopBalance() {

  const topbar =
    document.querySelector(
      '.topbar'
    );

  if (!topbar)
    return;

  if ($('#creditPill')) {

    updateBalanceDisplay();

    return;
  }

  const actions =
    topbar.querySelector(
      '.session-actions'
    );

  if (!actions)
    return;

  const button =
    document.createElement(
      'button'
    );

  button.id =
    'creditPill';

  button.className =
    'credit-pill';

  button.type =
    'button';

  button.innerHTML =
    `Balance <b>${money(
      getBalance()
    )}</b>`;

  actions.insertBefore(
    button,
    actions.firstChild
  );

  setupBalanceButton();

  updateBalanceDisplay();
}

/* =========================================================
   25. DOWNLOAD LIBRARY
   ========================================================= */

function createLibraryButton() {

  const topbar =
    document.querySelector(
      '.topbar'
    );

  if (!topbar)
    return;

  if ($('#libraryButton'))
    return;

  const actions =
    topbar.querySelector(
      '.session-actions'
    );

  if (!actions)
    return;

  const button =
    document.createElement(
      'button'
    );

  button.id =
    'libraryButton';

  button.type =
    'button';

  button.textContent =
    'My downloads';

  button.addEventListener(
    'click',
    showDownloadLibrary
  );

  actions.insertBefore(
    button,
    actions.firstChild
  );
}

function showDownloadLibrary() {

  const purchased =
    getPurchasedDatasets();

  const existing =
    $('#downloadLibraryModal');

  if (existing) {
    existing.remove();
  }

  const modal =
    document.createElement(
      'div'
    );

  modal.id =
    'downloadLibraryModal';

  modal.className =
    'download-library-backdrop';

  const rows =
    purchased.length
      ? purchased
          .map(item => {

            const dataset =
              datasets.find(
                d =>
                  d.id ===
                  Number(item.id)
              );

            if (!dataset)
              return '';

            return `
              <div class="download-row">

                <div>

                  <strong>
                    ${escapeHtml(
                      dataset.title
                    )}
                  </strong>

                  <small>
                    DS-${String(
                      dataset.id
                    ).padStart(
                      2,
                      '0'
                    )}
                  </small>

                </div>

                <div
                  class="download-actions"
                >

                  <button
                    type="button"
                    data-view-id="${dataset.id}"
                  >
                    View data
                  </button>

                  <button
                    type="button"
                    data-download-id="${dataset.id}"
                  >
                    Download TXT
                  </button>

                </div>

              </div>
            `;
          })
          .join('')
      : `
        <p>
          You haven't purchased any datasets yet.
        </p>
      `;

  modal.innerHTML = `
    <section
      class="download-library"
    >

      <div
        class="download-library-head"
      >

        <div>

          <p class="eyebrow">
            Your collection
          </p>

          <h2>
            My downloads
          </h2>

        </div>

        <button
          class="download-close"
          id="downloadLibraryClose"
          type="button"
        >
          ×
        </button>

      </div>

      <p
        class="download-library-intro"
      >
        Datasets you've purchased from Data Swarm.
      </p>

      ${rows}

    </section>
  `;

  document.body.appendChild(
    modal
  );

  $('#downloadLibraryClose')
    ?.addEventListener(
      'click',
      () => modal.remove()
    );

  modal.addEventListener(
    'click',
    event => {

      if (
        event.target ===
        modal
      ) {
        modal.remove();
      }
    }
  );

  modal
    .querySelectorAll(
      '[data-view-id]'
    )
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          const id =
            Number(
              button.dataset
                .viewId
            );

          modal.remove();

          openFishDataPanel(
            id
          );
        }
      );
    });

  modal
    .querySelectorAll(
      '[data-download-id]'
    )
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          const dataset =
            datasets.find(
              d =>
                d.id ===
                Number(
                  button.dataset
                    .downloadId
                )
            );

          if (dataset) {
            downloadDataset(
              dataset
            );
          }
        }
      );
    });
}

/* =========================================================
   26. BRAND / FOOTER
   ========================================================= */

function updateBrandText() {

  document
    .querySelectorAll(
      '.topbar .brand, .auth-brand'
    )
    .forEach(brand => {

      const text =
        [...brand.childNodes]
          .find(
            node =>
              node.nodeType ===
                Node.TEXT_NODE &&
              node.textContent.trim()
          );

      if (text) {
        text.textContent =
          ' Data Swarm';
      }
    });

  document
    .querySelectorAll(
      'footer'
    )
    .forEach(footer => {

      const spans =
        footer.querySelectorAll(
          'span'
        );

      if (spans[0]) {
        spans[0].textContent =
          '© 2026 Data Swarm';
      }

      if (spans[1]) {
        spans[1].textContent =
          'Made by Taha Karmani';
      }
    });
}

/* =========================================================
   27. ESCAPE
   ========================================================= */

document.addEventListener(
  'keydown',
  event => {

    if (
      event.key !==
      'Escape'
    ) {
      return;
    }

    closePhotoPreview();

    closeCheckout();

    closeFishDataPanel();

    const wallet =
      $('#walletModal');

    if (wallet) {
      wallet.hidden =
        true;
    }

    const library =
      $('#downloadLibraryModal');

    if (library) {
      library.remove();
    }
  }
);

/* =========================================================
   28. INITIALIZE
   ========================================================= */

function initializeDataSwarm() {

  renderProducts();

  setupRedeemForm();

  setupLogin();

  setupLogout();

  setupWelcomeEmail();

  setupSearchAndFilters();

  setupPhotoModal();

  setupSwarm();

  createTopBalance();

  createLibraryButton();

  createFishDataPanel();

  updateBrandText();

  updateBalanceDisplay();

  restoreLogin();
}

if (
  document.readyState ===
  'loading'
) {

  document.addEventListener(
    'DOMContentLoaded',
    initializeDataSwarm
  );

} else {

  initializeDataSwarm();
}