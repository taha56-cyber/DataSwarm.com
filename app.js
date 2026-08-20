/* =========================================================
   DATA SWARM - COMPLETE APP.JS
   Demo version
   Made by Taha Karmani

   IMPORTANT:
   - This is a browser-only demo.
   - Credits are stored in localStorage.
   - Credit codes are compared using SHA-256.
   - Never put a Turnstile SECRET key in this file.
   ========================================================= */

'use strict';

/* =========================================================
   1. DATASETS
   ========================================================= */

const datasets = [
  {
    id:1,title:'Reef census: Great Barrier Reef',category:'Oceans',
    visual:'ocean',species:'Reef fish',tag:'Survey / 2024',
    description:'12,400 observations across 86 reef sites, with species, depth, and bleaching status.',price:24
  },
  {
    id:2,title:'The freshwater atlas',category:'Freshwater',
    visual:'fresh',species:'Arapaima',tag:'Atlas / Global',
    description:'A worldwide index of freshwater fish habitats, migration routes, and water quality.',price:18
  },
  {
    id:3,title:'When the ocean gets warmer',category:'Climate',
    visual:'climate',species:'Schooling fish',tag:'Time series / 1980–2023',
    description:'Four decades of temperature and population data for 140 pelagic species.',price:32
  },
  {
    id:4,title:'Night lights, deep fish',category:'Oceans',
    visual:'ocean',species:'Deep sea fish',tag:'Acoustics / 2025',
    description:'Echo-sounder readings that map life in the mesopelagic zone after dark.',price:21
  },
  {
    id:5,title:'River giants',category:'Freshwater',
    visual:'fresh',species:'Arapaima',tag:'Field guide / 18 rivers',
    description:'Size, movement, and spawning records for the world’s largest freshwater fish.',price:16
  },
  {
    id:6,title:'Coral recovery signals',category:'Climate',
    visual:'climate',species:'Coral reef fish',tag:'Longitudinal / 2010–2024',
    description:'A visual dataset tracking how reef communities respond after extreme heat.',price:27
  },
  {
    id:7,title:'Kelp forest neighbors',category:'Oceans',
    visual:'ocean',species:'Rockfish',tag:'Camera traps / 2025',
    description:'Daily encounters between kelp, rockfish, and the predators that shape the forest.',price:19
  },
  {
    id:8,title:'Salmon homeward routes',category:'Freshwater',
    visual:'fresh',species:'Atlantic salmon',tag:'Telemetry / 12 seasons',
    description:'Tagged salmon journeys from open water back to the rivers where they began.',price:29
  },
  {
    id:9,title:'The tiny fish census',category:'Oceans',
    visual:'ocean',species:'Small schooling fish',tag:'Plankton net / 2023',
    description:'A close look at larvae and small schooling fish across a coastal transect.',price:14
  },
  {
    id:10,title:'Mangrove nurseries',category:'Climate',
    visual:'climate',species:'Mangrove Jack',tag:'Habitat study / 2024',
    description:'Juvenile fish counts showing how mangrove roots protect young coastal life.',price:23
  },
  {
    id:11,title:'Lake depth voices',category:'Freshwater',
    visual:'fresh',species:'Wels catfish',tag:'Hydrophone / 2022',
    description:'Sound recordings and species observations from deep, quiet freshwater lakes.',price:17
  },
  {
    id:12,title:'Tuna on the move',category:'Climate',
    visual:'climate',species:'Bluefin tuna',tag:'Satellite tags / 2015–2024',
    description:'Nine years of migration, temperature, and feeding-zone data for bluefin tuna.',price:34
  },
  {
    id:13,title:'Clownfish anemone life',category:'Oceans',
    visual:'ocean',species:'Clownfish',tag:'Reef behavior / 2024',
    description:'Social groups, anemone partnerships, and territory patterns of clownfish.',price:15
  },
  {
    id:14,title:'Blue tang migrations',category:'Oceans',
    visual:'ocean',species:'Blue tang',tag:'Reef telemetry / 2023',
    description:'Movement and feeding records for blue tang across protected tropical reefs.',price:22
  },
  {
    id:15,title:'Shark nursery survey',category:'Oceans',
    visual:'ocean',species:'Shark',tag:'Coastal survey / 2025',
    description:'Juvenile shark sightings, size measurements, and nursery habitat conditions.',price:31
  },
  {
    id:16,title:'Seahorse slow worlds',category:'Oceans',
    visual:'ocean',species:'Seahorse',tag:'Macro video / 2024',
    description:'Close-range observations of courtship, camouflage, and feeding behavior.',price:18
  },
  {
    id:17,title:'Manta ray routes',category:'Oceans',
    visual:'ocean',species:'Manta ray',tag:'Satellite tags / 2021–2025',
    description:'Long-distance routes and cleaning-station visits of reef manta rays.',price:28
  },
  {
    id:18,title:'Octopus intelligence',category:'Oceans',
    visual:'ocean',species:'Octopus',tag:'Behavior study / 2024',
    description:'Problem-solving trials, den choice, and color-change observations.',price:25
  },
  {
    id:19,title:'Penguin plunge records',category:'Oceans',
    visual:'ocean',species:'Penguin',tag:'Dive log / 2022–2025',
    description:'Dive depth, travel speed, and feeding success from tagged penguins.',price:20
  },
  {
    id:20,title:'Golden river guardians',category:'Freshwater',
    visual:'fresh',species:'Golden dorado',tag:'River survey / 2023',
    description:'Population structure and spawning habitat for a powerful South American river fish.',price:16
  },
  {
    id:21,title:'The electric eel atlas',category:'Freshwater',
    visual:'fresh',species:'Electric eel',tag:'Field atlas / 2024',
    description:'Electric signals, habitat, and seasonal activity across Amazon waterways.',price:19
  },
  {
    id:22,title:'Salmon color stories',category:'Freshwater',
    visual:'fresh',species:'Salmon',tag:'Spawning survey / 2025',
    description:'Run timing, body condition, and stream temperatures across salmon runs.',price:21
  },
  {
    id:23,title:'Betta display patterns',category:'Freshwater',
    visual:'fresh',species:'Betta fish',tag:'Behavior archive / 2023',
    description:'Color, fin display, and territorial behavior in betta populations.',price:12
  },
  {
    id:24,title:'Frogfish camouflage',category:'Oceans',
    visual:'ocean',species:'Frogfish',tag:'Reef macro / 2024',
    description:'A visual archive of camouflage strategies and ambush positions.',price:17
  },
  {
    id:25,title:'Whale shark visitors',category:'Climate',
    visual:'climate',species:'Whale shark',tag:'Photo ID / 2018–2025',
    description:'Individual photo-identification records from seasonal plankton blooms.',price:26
  },
  {
    id:26,title:'Flying fish weather',category:'Climate',
    visual:'climate',species:'Flying fish',tag:'Surface survey / 2022',
    description:'Wind, wave, and launch behavior records from open-water flying fish.',price:14
  },
  {
    id:27,title:'Luminous deep sea',category:'Oceans',
    visual:'ocean',species:'Lanternfish',tag:'Deep net / 2024',
    description:'Bioluminescence observations and vertical migration from the midnight zone.',price:24
  },
  {
    id:28,title:'Pufferfish garden maps',category:'Oceans',
    visual:'ocean',species:'Pufferfish',tag:'Seabed mapping / 2023',
    description:'Circular sand gardens, mate selection, and seabed texture measurements.',price:18
  }
];

/* =========================================================
   2. PHOTOS
   ========================================================= */

const photoUrls = {
  1:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Great_Barrier_reef_and_fish.png',
  2:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Arapaima_(Arapaima_gigas).jpg',
  3:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Coral_Reef_Bleaching.jpg',
  4:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Ha_-_Melanocetus_johnsonii_1.jpg',
  5:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Arapaima_close-up.jpg',
  6:'https://commons.wikimedia.org/wiki/Special:Redirect/file/CORAL_4_(34738942045).jpg',
  7:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rockfish_around_kelp_Monterey_Bay_Aquarium.jpg',
  8:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sockeye_salmon,_Washington_(53906233586).jpg',
  9:'https://commons.wikimedia.org/wiki/Special:Redirect/file/School_of_small_fish_above_black_coral.jpg',
  10:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mangrove_Jack_Taiwan.jpg',
  11:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Silurus_glanis_02.jpg',
  12:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bluefin_tuna.jpg',
  13:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Common_clownfish.jpg',
  14:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Blue_tang_(Paracanthurus_hepatus)_01.jpg',
  15:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Shark_underwater.jpg',
  16:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Seahorse.jpg',
  17:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Manta_ray.jpg',
  18:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Octopus_in_the_New_England_Aquarium.jpg',
  19:'https://commons.wikimedia.org/wiki/Special:Redirect/file/King_Penguin_in_water_Feb09.jpg',
  20:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Golden_mahseer_(Tor_putitora)_Babai_River.jpg',
  21:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Electrophorus_electricus.jpg',
  22:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Salmon_leaping_at_Willamette_Falls.jpg',
  23:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Male_Betta_-34245661920.jpg',
  24:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sympterichthys_politus.jpg',
  25:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Whale_Shark_(Rhincodon_typus).jpg',
  26:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Flying_Fish_(5800262852).jpg',
  27:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Chlamydoselachus_anguineus_head.jpg',
  28:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pufferfish.jpg'
};

/* =========================================================
   3. SHA-256 CREDIT CODES
   ========================================================= */

/*
   The actual codes are NOT stored here.
   Only their SHA-256 hashes are stored.

   These are still DEMO credits because everything
   is running in the browser.
*/

const hashedPaymentCodes = {

  "11db49e82b6c4266ab596c638b96d640cdb3057a36b160054fa48238c721c636":10,
  "b152c67623109f85cb60ac7572dd9603c4b1cd257ac51e7f88cff76f218a2b06":25,
  "1bf0241bd239592aca6485594ce5c924fdca9346b56d76b33f1543fe08cf5103":50,
  "96a2dc78fd8073ff719d5f0983ccd65610739a63fa0147980699e6ae1c8c3e1d":100,
  "36e245d389d0ff48379eec852e3a99be0f6d62e9b3537b48df972efcf9991159":1000,

  "5a717e8225512e35475cc20d403c1dcd3a5dd5453dd2516f1d061046ce2b6967":25,
  "521b5ab4ffff2c8adae3380c10755036999c704d9baedf3854fdb76617c4ce47":75,

  "9f24c1347ec248661faa8edd5cfb6e6d1c98ec335b8a715373016bd736705dc3":45,
  "35f5556e0b53fe55a6eb177ae8982109ecafc82a1426d2ec73111da8fa094786":45,
  "79eab143c9ee742aee5a17fc6975fe61dcc4dce88902587f904cf4d6b1085728":25,
  "7ea0a84c5ac648b7f545ab055f2fa4801c419f8ee426605a92f4803f86bec378":100,

  "e6755e9e1f66e335c34636dd8cb3af8ad7173f7cc0fe576926f98a3c2a94003b":25,
  "80d020214c0790b75701dc78daebbe259ef5ab4ecf6853450af99b1c646198f7":50,
  "c9c201c4d372b1b0618669f5615a153d647cd850f05b52796abd86a97331f36d":75,
  "f28491ee26b445f4157f35d08da38a506a5fe8c1cf566acd5ffc22bc461615b1":100,

  "1bac376cd6810fdae65d925e1d46c33d9378d33f772ffd34e516aabdd9da32b2":25,
  "86a61840abb83c321b8d1d06ef0ab20145412807a6eb2da0008f57185d7801d4":50,
  "de478f9322279236c8cf910944227938f0f81307aec19da8b2a9b6ff62e9e814":75,
  "10875cecb308fefbc590d060693686155df63d2f55d801d7f3ec74cf087af189":100,

  "a89aced90de7cc1e5be10776d6a54d110d737975c400a764b8f2e24bc60b4413":25,
  "4756718557cd9aa193c7a7aa8faebad79587943901f252724d677e8c646f85e5":50,
  "a5ff26de37dca54fb53fec1bda46a0c7a6f11bd7bb094f428417fe78aabd7fbe":75,
  "326ff2f9f610c19f8b9deac3195ed4961a8df5e02dd4d97e1122ee9496271256":150,

  "934f5ce25dfdb9d5c1a036ae75681f03cfd285ff1a6e4468846c612505324b1a":10,
  "f21de699c98379f80394da104dd0d5cca656070a3a39a138c93c28bef20b6c90":25,
  "c44ef7664b4585b18cc1c7ef17a263c9c25be2dca570ff7ba5107a27e6dbdadd":50,
  "0fe334fd878873a17b6e229e42a5386ae8e6d7d9bb712667430d5aa72d6c5eb4":100,

  "801038ef2cdd847241bc16f6dd604d11b42b29f3df8724b12fee8c035e96da7a":10,
  "43f75e60b188e57a169a95ae99f3682fd6b8f96fc5d7419753a6748acb348119":25,
  "918ff49a4b2c75c270e38bf65d3fc7ef1dfaafe4eb2a9acf8dba266fab307fef":50,
  "074a6c5f750def6b3a042041c57af1e7a937159a77e7b3d62ff7a1367857c064":100,

  "6876bd37d565335430f7a1960abcbac9e328b168d8241e3370d16e96ed0468fb":10,
  "5838387f79e4824e97ed8500321cff66a9e9fa5cbd1104bc64833f0b595cfa81":20,
  "f24c2682172d3c344cdc02766c4116a66e8edf98f0208d981fc5a1a05083ec64":30,
  "08406e7817a99f1f0387291fa083cb1be2be663681ed08c09020eae37cfa6bcf":40,
  "f83ffebc1351d92c8a71e35a784d5c8e6ac00ba7a90f51fbe4de30885aeee6aa":50,
  "cef90955a3687292b984a60d87d12be5b369f98d6d361c8565907bb40bfef370":60,
  "f3b11662b8d30fc21c1a02231588a9defb8545a9c5bc2389f68c8b8a525f1fb8":70,
  "9ca31c38c6a0e11d263b0dccf0d8cff44d7cad02b225bf350f4debc3d09891b1":80,
  "05c7b862ad8f411eb675c47aec331a240c0f73a3466aaa3a906ee06527487170":90,
  "077286ac3d034b8cc657fb29029c7c3c68f59c2714a70519ade337b00daad60e":120,
  "13eaac43e1b62279ca8102991de3f0b45053614353ddcbe62f70a31a6ebd6798":200,
  "1b045d7559845d722f20a78f5f203c8bfaceeb1db91041dcbb1845d9a8ae0fe9":250,

  "f25079ee3689a6e4081e082d5abaa1a4d42c176a04574521b5870420b1e005b2":10,
  "a7f825757353230ce8482ab7b2cd1779465701b155538d04d8d1073b51816d6f":50,
  "8c1e582563f257a1a5c4814d2601cef32ef8dcbe8e16bcb9555c480d1e171cb0":100,
  "9c56ae0d7376206ca46bab7307c45887bc1ff5b3784b65770297acf55efeae21":200,

  "6d6a699b0345c189963096cc5a214b27866c3bfc30f310908a4ead47aa6875fe":10,
  "8db8c1a4eaafc13a78814b816039e8f7f9b8ef68dd415cde3586f62ded1790d0":50,
  "f1159d2d30758dcd5794e6391f2126a4faf8920c9f3a9a782512b31261ba1bff":100,
  "c29639884bde79c004148688301a857e49b2b0ac3c0ad928069c2445e9aab304":200,

  "cee0de3411d9061f41cbd01bccad28fae73ff0469e87ede67cf7c4b0bb2eaa98":10,
  "5bf7cff8d57ab4005d5c7653b4dfe9ae6a3b734a13699ff3113713eb02495eea":40,
  "8a1d3119166da1f63152a21744349c83bd764d2e7d2ff8421a3c134de7801f65":60,
  "6fc7441d0418b01abf37b164b36bc9fee2f639afc7bada4fb8de176e8cfe5fe6":80,

  "9b114e41bb7df55ca653627006d6bd18b1349f820c3afdc6d08b57730f412da4":10,
  "266cfb77da8e0db457496ebb4c67bdd8b45a871630f57569afc78aec1e65e790":40,
  "d4ab17e4d1add0425b0316a19cfc7a443e195012734a4e7cdaef28b164fc4a3f":60,
  "2fd89a2a44fee1fecd8fa4bd6a4c9ed0a4b4e521cd7b1183af612c9175712335":80,

  "3550dad4d5d888cc231fd1895d11377c4bfff57f8c3abbf0a64e14df7977a402":10,
  "062c2bb5f68921c315dec789eb95cd0b4a483bd404fb63a76f90ea6c858a59a6":40,
  "62ebb5aefa3c95bcb5fb63c9f97051844f3db03e4ffe1119380f4464659fd496":60,
  "69ef583e1f51aeb199c1b68920300575d2617c8cb04a484d36ca36eda19990c1":80,

  "5033ba6dd9e519a050991c4f9aa9bd7db7967587f1c69a057ca91aa2790bf5d3":40,
  "c3ae012833f5a9a2f1810161126405975970ac2ce5d276d4b9b2d64bad87d7b4":60,
  "0502840afafc3691f8f48ac20ea9f768698d35fb9f42e47be505b4cad3fbeee7":80,
  "8842612293aa9c6692096f8b92afd900206be714d9b810e412a20d6939e87d64":200,

  "d8762307b04571d269355e87145ba8c09b34812efbf36354d6c4b8f5a483ec43":10,
  "306febec7d32333581f4752c246f9d7060a28e1084a7627ae8dbfb95565477cd":50,
  "0adc14ca4db331777ae657e4b1f77d87eaafd1acc4fa4c48d78b81cbf3114375":100,
  "0e49f6a8b3fc66997e57d57338655636e12770d9f4e03e20aeac2e808e2d569d":150,

  "041a7fc36db9795392763f6ca3f85d6f62bd181b42bc277600b66d8f7179029c":25,
  "458ce47b3a6eb12a197843f2642ec9f9daa2696c883373dba58819e70859a859":75,
  "72fafe21cbb82ae4e7c6338fe6f68cc10cbfd1759e6b281df2134fcfd5cb53b0":125,
  "2a27d5971ba1f0a42c802fc35de987e682907c4246eee9dd8db1712af73fe71a":175,

  "3056bb4a02b6abf915831aa9b71ec5866e69e6d3cf53e155e015d2777ca21a52":10000000,

  "29c6eadfbc76a41808bbe6d86a825f5e22e4b15ac11c5fe0f6da21d0c45b28c5":75,
  "e81c574c455767f4551e24121a0fb36a7edc95ede1fac9eda5618ec42c98cd84":100,
  "d11c90025020050ebb883f13c81f0ecda660ba1447f7b87db48ce0a898db67a2":50,
  "c8148feab75b721d6037fdc185d252a7932fb91b0cf2584f73546180ada3da51":125,
  "b7dba20edb0e23342728da705afdd41bdf26fc13be8917789be534dac9e8903b":250,
  "cb8818f3fbbaa785f78cc80f4026e4d85543cbacfc6c208e3fe454f9dde80637":60,
  "5aea8f282515f56299c3487c5a4365849976086287440aa0fad4c09193546b48":90,
  "4186dd946fea8108788d857f793ca298487fc61a7ad948c9e34c54b29cf6e93e":150,
  "03884379484b54b9f8f55c644c9e07ba08c60f0b98b77f657aea146dc542f218":200,
  "dab27f55986f4853034e2c0633d1c1ff38148b482f74476135bddfa93c2a0ed6":40,
  "0ada555dc4fd671b8c389908202d8e5807d66a063ec518b19265ec28c1bcca9f":80,
  "410af4263dc5ba32971d39f72dcdfe4d400a2a732b4609b25ec0a6a3ff0a8df2":300,

  "8370040bc47cba3e0246f5e10f47557a45d805bd5a90bf9dc03d57d2f1bfd861":1000000
};

/* =========================================================
   4. TURNSTILE PUBLIC KEY ONLY
   ========================================================= */

const TURNSTILE_SITE_KEY = '0x4AAAAAAEWoiRyT-Pn3w4Js';

/* =========================================================
   5. GLOBAL STATE
   ========================================================= */

let activeFilter = 'All';
let selectedDataset = null;

/* =========================================================
   6. HELPERS
   ========================================================= */

const $ = selector => document.querySelector(selector);

function money(value) {
  return `$${Number(value || 0).toLocaleString('en-US')}`;
}

function getBalance() {
  return Number(localStorage.getItem('dataSwarmCredits') || 0);
}

function setBalance(amount) {
  localStorage.setItem(
    'dataSwarmCredits',
    String(Math.max(0, Number(amount) || 0))
  );
  updateBalanceDisplay();
}

function updateBalanceDisplay() {
  const balance = getBalance();

  document
    .querySelectorAll('#balanceDisplay, #walletBalance, #headerBalance')
    .forEach(element => {
      element.textContent = money(balance);
    });

  const pill = $('#creditPill');

  if (pill) {
    pill.innerHTML = `Balance <b>${money(balance)}</b>`;
  }
}

function showToast(message) {
  const toast = $('#toast');

  if (!toast) {
    alert(message);
    return;
  }

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(window.dataSwarmToastTimer);

  window.dataSwarmToastTimer = setTimeout(() => {
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
   7. SHA-256
   ========================================================= */

async function sha256(text) {
  const encoder = new TextEncoder();

  const data = encoder.encode(text);

  const hashBuffer =
    await crypto.subtle.digest(
      'SHA-256',
      data
    );

  const hashArray =
    Array.from(
      new Uint8Array(hashBuffer)
    );

  return hashArray
    .map(byte =>
      byte.toString(16).padStart(2, '0')
    )
    .join('');
}

/* =========================================================
   8. REDEEM CODE
   ========================================================= */

async function redeemCode(code) {

  const cleanCode =
    String(code || '')
      .trim()
      .toUpperCase();

  if (!cleanCode) {
    return {
      success:false,
      message:'Please enter a code.'
    };
  }

  const hash =
    await sha256(cleanCode);

  const credits =
    hashedPaymentCodes[hash];

  if (!credits) {
    return {
      success:false,
      message:'That code is not valid.'
    };
  }

  /*
   * Make codes single-use on this browser.
   */

  let usedCodes = [];

  try {
    usedCodes =
      JSON.parse(
        localStorage.getItem(
          'dataSwarmUsedCodes'
        ) || '[]'
      );
  } catch {
    usedCodes = [];
  }

  if (usedCodes.includes(hash)) {
    return {
      success:false,
      message:'That code has already been used on this device.'
    };
  }

  usedCodes.push(hash);

  localStorage.setItem(
    'dataSwarmUsedCodes',
    JSON.stringify(usedCodes)
  );

  const newBalance =
    getBalance() +
    Number(credits);

  setBalance(newBalance);

  return {
    success:true,
    credits:Number(credits),
    balance:newBalance
  };
}

/* =========================================================
   9. DATASET TXT
   ========================================================= */

function generateDatasetText(dataset) {

  const lines = [];

  lines.push('============================================================');
  lines.push('DATA SWARM - FISH DATASET');
  lines.push('Made by Taha Karmani');
  lines.push('============================================================');
  lines.push('');
  lines.push(`Dataset ID: DS-${String(dataset.id).padStart(2, '0')}`);
  lines.push(`Title: ${dataset.title}`);
  lines.push(`Category: ${dataset.category}`);
  lines.push(`Species: ${dataset.species || 'Multiple fish species'}`);
  lines.push(`Tag: ${dataset.tag}`);
  lines.push(`Price: $${dataset.price}`);
  lines.push('');
  lines.push('DESCRIPTION');
  lines.push('------------------------------------------------------------');
  lines.push(dataset.description);
  lines.push('');
  lines.push('FISH DATA');
  lines.push('------------------------------------------------------------');

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
    'Arctic Ocean',
    'Southern Ocean',
    'Red Sea',
    'Gulf of Mexico'
  ];

  const habitats = [
    'coral reef',
    'open ocean',
    'mangrove',
    'kelp forest',
    'river',
    'freshwater lake',
    'estuary',
    'deep sea',
    'coastal shelf',
    'seagrass meadow'
  ];

  const behavior = [
    'feeding',
    'migration',
    'resting',
    'spawning',
    'schooling',
    'territorial behavior',
    'predator avoidance',
    'habitat exploration'
  ];

  for (let i = 1; i <= 250; i++) {

    const location =
      locations[
        (i + dataset.id) %
        locations.length
      ];

    const habitat =
      habitats[
        (i * 2 + dataset.id) %
        habitats.length
      ];

    const action =
      behavior[
        (i * 3 + dataset.id) %
        behavior.length
      ];

    const depth =
      2 +
      ((i * 17 + dataset.id * 9) % 480);

    const temperature =
      (
        17 +
        ((i * 7 + dataset.id) % 130) / 10
      ).toFixed(1);

    const length =
      (
        8 +
        ((i * 11 + dataset.id) % 920) / 10
      ).toFixed(1);

    const population =
      100 +
      ((i * 137 + dataset.id * 53) % 15000);

    const visibility =
      (
        3 +
        ((i * 5 + dataset.id) % 470) / 10
      ).toFixed(1);

    const latitude =
      (
        -42 +
        ((i * 13 + dataset.id) % 840) / 10
      ).toFixed(2);

    const longitude =
      (
        -170 +
        ((i * 19 + dataset.id) % 3400) / 10
      ).toFixed(2);

    lines.push([
      `Record ${i}`,
      `Species=${dataset.species || 'Fish'}`,
      `Location=${location}`,
      `Habitat=${habitat}`,
      `Behavior=${action}`,
      `Depth=${depth}m`,
      `WaterTemperature=${temperature}C`,
      `Length=${length}cm`,
      `EstimatedPopulation=${population}`,
      `Visibility=${visibility}m`,
      `Latitude=${latitude}`,
      `Longitude=${longitude}`
    ].join(' | '));
  }

  lines.push('');
  lines.push('DATASET NOTES');
  lines.push('------------------------------------------------------------');
  lines.push('This file is a Data Swarm demonstration dataset.');
  lines.push('It is intended for exploration and testing of the Data Swarm app.');
  lines.push('');
  lines.push('Photo reference:');
  lines.push(
    photoUrls[dataset.id] ||
    'No photo reference available.'
  );
  lines.push('');
  lines.push('Created by: Taha Karmani');
  lines.push('============================================================');

  return lines.join('\n');
}

/* =========================================================
   10. DOWNLOAD DATASET
   ========================================================= */

function downloadDataset(dataset) {

  const text =
    generateDatasetText(dataset);

  const blob =
    new Blob(
      [text],
      {type:'text/plain;charset=utf-8'}
    );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement('a');

  link.href = url;

  link.download =
    `Data-Swarm-DS-${String(dataset.id).padStart(2, '0')}-${dataset.title
      .replace(/[^a-z0-9]+/gi, '-')
      .toLowerCase()}.txt`;

  document.body.appendChild(link);

  link.click();

  link.remove();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);

  savePurchasedDataset(dataset);

  showToast(`${dataset.title} downloaded`);
}

/* =========================================================
   11. PURCHASED DATASETS
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
      item => item.id === dataset.id
    )
  ) {

    purchased.push({
      id:dataset.id,
      title:dataset.title,
      purchasedAt:new Date().toISOString()
    });

    localStorage.setItem(
      'dataSwarmPurchased',
      JSON.stringify(purchased)
    );
  }
}

/* =========================================================
   12. CHECKOUT
   ========================================================= */

function createCheckoutModal() {

  if ($('#checkoutModal')) {
    return;
  }

  const modal =
    document.createElement('div');

  modal.id = 'checkoutModal';
  modal.className = 'payment-modal-backdrop';
  modal.hidden = true;

  modal.innerHTML = `
    <section
      class="payment-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkoutTitle"
    >

      <div class="payment-modal-head">

        <div>
          <p class="eyebrow">
            Data Swarm checkout
          </p>

          <h2 id="checkoutTitle">
            Choose payment
          </h2>
        </div>

        <button
          id="checkoutClose"
          class="payment-close"
          type="button"
        >×</button>

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

      <div class="payment-divider">or</div>

      <button
        id="payPaypalButton"
        class="paypal-button"
        type="button"
      >
        PayPal demo
      </button>

      <div class="payment-divider">or</div>

      <button
        id="payCardButton"
        class="payment-continue"
        type="button"
      >
        Bank card demo
      </button>

      <p class="payment-secure">
        <span></span>
        Demo checkout — no real payment is processed.
      </p>

    </section>
  `;

  document.body.appendChild(modal);

  $('#checkoutClose')
    ?.addEventListener(
      'click',
      closeCheckout
    );

  $('#payBalanceButton')
    ?.addEventListener(
      'click',
      payWithBalance
    );

  $('#payPaypalButton')
    ?.addEventListener(
      'click',
      () => demoExternalPayment('PayPal')
    );

  $('#payCardButton')
    ?.addEventListener(
      'click',
      () => demoExternalPayment('Bank card')
    );

  modal.addEventListener(
    'click',
    event => {
      if (event.target === modal) {
        closeCheckout();
      }
    }
  );
}

function openCheckout(datasetId) {

  selectedDataset =
    datasets.find(
      dataset => dataset.id === datasetId
    );

  if (!selectedDataset) {
    return;
  }

  createCheckoutModal();

  $('#checkoutInfo').innerHTML = `
    <p>
      <strong>
        ${escapeHtml(selectedDataset.title)}
      </strong>
    </p>

    <p>
      Dataset price:
      <strong>
        ${money(selectedDataset.price)}
      </strong>
    </p>
  `;

  $('#checkoutBalance').textContent =
    money(getBalance());

  $('#checkoutModal').hidden = false;
}

function closeCheckout() {

  const modal =
    $('#checkoutModal');

  if (modal) {
    modal.hidden = true;
  }

  selectedDataset = null;
}

function payWithBalance() {

  if (!selectedDataset) {
    return;
  }

  const balance =
    getBalance();

  if (balance < selectedDataset.price) {

    showToast(
      `You need ${money(
        selectedDataset.price - balance
      )} more`
    );

    return;
  }

  const purchased =
    selectedDataset;

  setBalance(
    balance - purchased.price
  );

  closeCheckout();

  showToast('Payment successful');

  setTimeout(() => {
    downloadDataset(purchased);
  }, 350);
}

function demoExternalPayment(method) {

  if (!selectedDataset) {
    return;
  }

  const dataset =
    selectedDataset;

  const confirmed =
    confirm(
      `${method} demo payment\n\n` +
      `Dataset: ${dataset.title}\n` +
      `Price: ${money(dataset.price)}\n\n` +
      `Press OK to simulate a successful payment.`
    );

  if (!confirmed) {
    return;
  }

  closeCheckout();

  showToast(`${method} demo payment successful`);

  setTimeout(() => {
    downloadDataset(dataset);
  }, 350);
}

/* =========================================================
   13. PRODUCT GRID
   ========================================================= */

function renderProducts() {

  const grid =
    $('#productGrid');

  if (!grid) {
    return;
  }

  const searchInput =
    $('#searchInput');

  const query =
    searchInput
      ? searchInput.value.toLowerCase().trim()
      : '';

  const visible =
    datasets.filter(dataset => {

      const filterOK =
        activeFilter === 'All' ||
        dataset.category === activeFilter;

      const searchable = [
        dataset.title,
        dataset.description,
        dataset.category,
        dataset.species,
        dataset.tag
      ].join(' ').toLowerCase();

      return filterOK &&
        searchable.includes(query);
    });

  if (!visible.length) {

    grid.innerHTML =
      '<p class="empty-cart">No datasets match that search yet.</p>';

    return;
  }

  grid.innerHTML =
    visible.map(dataset => {

      const photo =
        photoUrls[dataset.id];

      return `
        <article class="product">

          <div
            class="product-visual ${dataset.visual}"
          >

            <img
              src="${photo}"
              alt="${escapeHtml(
                dataset.species || 'Fish'
              )} photograph"
              loading="lazy"
              decoding="async"
              class="fish-dataset-photo"
              data-id="${dataset.id}"
              onerror="this.onerror=null;this.classList.add('photo-unavailable')"
            >

            <span class="visual-label">
              ${escapeHtml(dataset.category.toUpperCase())}
              /
              DS-${String(dataset.id).padStart(2,'0')}
            </span>

            <div class="visual-shape"></div>

            <span class="photo-credit">
              Fish photograph
            </span>

          </div>

          <div class="product-body">

            <div class="product-meta">
              <span>${escapeHtml(dataset.tag)}</span>
              <span>TXT · CSV · JSON</span>
            </div>

            <h3>
              ${escapeHtml(dataset.title)}
            </h3>

            <p>
              ${escapeHtml(dataset.description)}
            </p>

            <div class="product-buy">

              <span class="price">
                ${money(dataset.price)}
              </span>

              <button
                class="add-button buy-button"
                type="button"
                data-id="${dataset.id}"
              >
                Buy data
              </button>

            </div>

          </div>

        </article>
      `;
    }).join('');

  grid
    .querySelectorAll('.fish-dataset-photo')
    .forEach(image => {

      image.addEventListener(
        'click',
        () => openPhotoPreview(image)
      );

    });

  grid
    .querySelectorAll('.buy-button')
    .forEach(button => {

      button.addEventListener(
        'click',
        () => openCheckout(
          Number(button.dataset.id)
        )
      );

    });
}

/* =========================================================
   14. PHOTO PREVIEW
   ========================================================= */

function openPhotoPreview(image) {

  const preview =
    $('#photoPreview');

  if (!preview) {
    return;
  }

  const previewImage =
    $('#previewImage');

  if (!previewImage) {
    return;
  }

  const src =
    image.currentSrc ||
    image.src;

  previewImage.src = src;
  previewImage.alt = image.alt;

  const product =
    image.closest('.product');

  const title =
    product
      ?.querySelector('h3')
      ?.textContent ||
    'Fish photograph';

  const previewTitle =
    $('#previewTitle');

  if (previewTitle) {
    previewTitle.textContent = title;
  }

  const sourceLink =
    $('#previewSource');

  if (sourceLink) {
    sourceLink.href = src;
  }

  preview.hidden = false;
}

function closePhotoPreview() {

  const preview =
    $('#photoPreview');

  if (preview) {
    preview.hidden = true;
  }
}

/* =========================================================
   15. REDEEM FORMS
   ========================================================= */

function setupRedeemForm() {

  const forms =
    document.querySelectorAll(
      '#redeemForm, #walletRedeemForm'
    );

  forms.forEach(form => {

    if (form.dataset.ready === 'true') {
      return;
    }

    form.dataset.ready = 'true';

    form.addEventListener(
      'submit',
      async event => {

        event.preventDefault();

        const input =
          form.querySelector('input');

        const status =
          form.querySelector('.code-status') ||
          $('#redeemStatus');

        if (status) {
          status.textContent =
            'Checking code...';
        }

        const result =
          await redeemCode(
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
            `${money(result.credits)} credits added. ` +
            `Your balance is ${money(result.balance)}.`;
        }

        if (input) {
          input.value = '';
        }

        showToast(
          `${money(result.credits)} added to your balance`
        );
      }
    );
  });
}

/* =========================================================
   16. LOGIN
   ========================================================= */

function normalizeName(name) {

  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
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

  if (names.includes(normalized)) {
    return false;
  }

  names.push(normalized);

  localStorage.setItem(
    'dataSwarmRegisteredNames',
    JSON.stringify(names)
  );

  return true;
}

function enterLibrary(name, email) {

  localStorage.setItem(
    'dataSwarmDisplayName',
    name
  );

  localStorage.setItem(
    'dataSwarmUser',
    email
  );

  const authScreen =
    $('#authScreen');

  const appShell =
    $('#appShell');

  if (authScreen) {
    authScreen.classList.add('auth-exit');
  }

  setTimeout(() => {

    if (authScreen) {
      authScreen.hidden = true;
    }

    if (appShell) {
      appShell.hidden = false;
    }

    updateBalanceDisplay();

    startSonarCircleAnimation();

  }, 420);
}

function setupLogin() {

  const loginForm =
    $('#loginForm');

  if (!loginForm) {
    return;
  }

  const displayNameInput =
    $('#displayName');

  const emailInput =
    $('#email');

  const formError =
    $('#formError');

  loginForm.addEventListener(
    'submit',
    event => {

      event.preventDefault();

      const name =
        displayNameInput?.value.trim() || '';

      const email =
        emailInput?.value.trim() || '';

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

      if (!emailInput?.validity.valid) {

        if (formError) {
          formError.textContent =
            'Please enter a valid email address.';
        }

        emailInput?.focus();
        return;
      }

      const savedUser =
        localStorage.getItem('dataSwarmUser');

      const savedName =
        localStorage.getItem('dataSwarmDisplayName');

      if (
        savedUser &&
        savedName &&
        normalizeName(savedName) === normalizeName(name) &&
        savedUser.toLowerCase() === email.toLowerCase()
      ) {

        enterLibrary(name, email);
        return;
      }

      if (!registerName(name)) {

        if (formError) {
          formError.textContent =
            'That name is already registered on this device. Please choose another name.';
        }

        return;
      }

      if (formError) {
        formError.textContent = '';
      }

      enterLibrary(name, email);
    }
  );
}

function restoreLogin() {

  const savedUser =
    localStorage.getItem('dataSwarmUser');

  const savedName =
    localStorage.getItem('dataSwarmDisplayName');

  if (savedUser) {

    enterLibrary(
      savedName || savedUser.split('@')[0],
      savedUser
    );
  }
}

/* =========================================================
   17. LOGOUT
   ========================================================= */

function setupLogout() {

  const button =
    $('#backToLogin');

  if (!button) {
    return;
  }

  button.addEventListener(
    'click',
    () => {

      localStorage.removeItem(
        'dataSwarmUser'
      );

      localStorage.removeItem(
        'dataSwarmDisplayName'
      );

      const appShell =
        $('#appShell');

      const authScreen =
        $('#authScreen');

      if (appShell) {
        appShell.hidden = true;
      }

      if (authScreen) {

        authScreen.hidden = false;

        authScreen.classList.remove(
          'auth-exit'
        );
      }

      const displayNameInput =
        $('#displayName');

      const emailInput =
        $('#email');

      if (displayNameInput) {
        displayNameInput.value = '';
      }

      if (emailInput) {
        emailInput.value = '';
      }

      displayNameInput?.focus();
    }
  );
}

/* =========================================================
   18. WELCOME EMAIL
   ========================================================= */

function setupWelcomeEmail() {

  const button =
    $('#welcomeEmailButton');

  if (!button) {
    return;
  }

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
        ) || 'friend';

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
        `mailto:${encodeURIComponent(email)}` +
        `?subject=${subject}&body=${body}`;
    }
  );
}

/* =========================================================
   19. SEARCH + FILTERS
   ========================================================= */

function setupSearchAndFilters() {

  $('#searchInput')
    ?.addEventListener(
      'input',
      renderProducts
    );

  document
    .querySelectorAll('.filter')
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          activeFilter =
            button.dataset.filter ||
            'All';

          document
            .querySelectorAll('.filter')
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
   20. PHOTO MODAL
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
   21. WALLET
   ========================================================= */

function createWalletModal() {

  if ($('#walletModal')) {
    return;
  }

  const modal =
    document.createElement('div');

  modal.id = 'walletModal';
  modal.className = 'credits-modal-backdrop';
  modal.hidden = true;

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
        >×</button>

      </div>

      <div class="wallet-balance">

        <span>
          Available credits
        </span>

        <strong id="walletBalance">
          $0
        </strong>

      </div>

      <label
        class="wallet-label"
        for="walletCode"
      >
        Redeem credit code
      </label>

      <form id="walletRedeemForm">

        <div class="redeem-row">

          <input
            id="walletCode"
            type="text"
            placeholder="Enter code"
            autocomplete="off"
            required
          >

          <button type="submit">
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

  document.body.appendChild(modal);

  $('#walletClose')
    ?.addEventListener(
      'click',
      () => {
        modal.hidden = true;
      }
    );

  modal.addEventListener(
    'click',
    event => {

      if (event.target === modal) {
        modal.hidden = true;
      }

    }
  );

  setupRedeemForm();
}

function setupBalanceButton() {

  createWalletModal();

  const button =
    $('#creditPill');

  if (!button) {
    return;
  }

  if (button.dataset.walletReady === 'true') {
    return;
  }

  button.dataset.walletReady = 'true';

  button.addEventListener(
    'click',
    () => {

      updateBalanceDisplay();

      const modal =
        $('#walletModal');

      if (modal) {
        modal.hidden = false;
      }
    }
  );
}

/* =========================================================
   22. TOP BALANCE
   ========================================================= */

function createTopBalance() {

  const topbar =
    document.querySelector('.topbar');

  if (!topbar) {
    return;
  }

  if ($('#creditPill')) {

    setupBalanceButton();
    updateBalanceDisplay();

    return;
  }

  const actions =
    topbar.querySelector('.session-actions');

  if (!actions) {
    return;
  }

  const button =
    document.createElement('button');

  button.id = 'creditPill';
  button.className = 'credit-pill';
  button.type = 'button';

  button.innerHTML =
    `Balance <b>${money(getBalance())}</b>`;

  actions.insertBefore(
    button,
    actions.firstChild
  );

  setupBalanceButton();

  updateBalanceDisplay();
}

/* =========================================================
   23. PURCHASED LIBRARY
   ========================================================= */

function createLibraryButton() {

  const topbar =
    document.querySelector('.topbar');

  if (!topbar) {
    return;
  }

  if ($('#libraryButton')) {
    return;
  }

  const actions =
    topbar.querySelector('.session-actions');

  if (!actions) {
    return;
  }

  const button =
    document.createElement('button');

  button.id = 'libraryButton';
  button.type = 'button';
  button.textContent = 'My downloads';

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
    document.createElement('div');

  modal.id = 'downloadLibraryModal';
  modal.className = 'download-library-backdrop';

  const rows =
    purchased.length
      ? purchased.map(item => {

          const dataset =
            datasets.find(
              d => d.id === item.id
            );

          if (!dataset) {
            return '';
          }

          return `
            <div class="download-row">

              <div>

                <strong>
                  ${escapeHtml(dataset.title)}
                </strong>

                <small>
                  DS-${String(dataset.id).padStart(2,'0')}
                </small>

              </div>

              <div class="download-actions">

                <button
                  type="button"
                  data-download-id="${dataset.id}"
                >
                  Download TXT
                </button>

              </div>

            </div>
          `;

        }).join('')
      : `
          <p>
            You haven't purchased any datasets yet.
          </p>
        `;

  modal.innerHTML = `
    <section class="download-library">

      <div class="download-library-head">

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

      <p class="download-library-intro">
        Datasets you've purchased from Data Swarm.
      </p>

      ${rows}

    </section>
  `;

  document.body.appendChild(modal);

  $('#downloadLibraryClose')
    ?.addEventListener(
      'click',
      () => modal.remove()
    );

  modal.addEventListener(
    'click',
    event => {

      if (event.target === modal) {
        modal.remove();
      }

    }
  );

  modal
    .querySelectorAll('[data-download-id]')
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          const dataset =
            datasets.find(
              d =>
                d.id ===
                Number(
                  button.dataset.downloadId
                )
            );

          if (dataset) {
            downloadDataset(dataset);
          }
        }
      );

    });
}

/* =========================================================
   24. BRAND
   ========================================================= */

function updateBrandText() {

  document
    .querySelectorAll(
      '.topbar .brand, .auth-brand'
    )
    .forEach(brand => {

      const text =
        [...brand.childNodes].find(
          node =>
            node.nodeType === Node.TEXT_NODE &&
            node.textContent.trim()
        );

      if (text) {
        text.textContent = ' Data Swarm';
      }
    });

  document
    .querySelectorAll('footer')
    .forEach(footer => {

      const spans =
        footer.querySelectorAll('span');

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
   25. ORIGINAL SWARM
   ========================================================= */

function setupSwarm() {

  const canvas =
    $('#swarmCanvas');

  if (!canvas) {
    return;
  }

  const context =
    canvas.getContext('2d');

  if (!context) {
    return;
  }

  const swarm =
    Array.from(
      {length:26},
      (_, index) => ({
        x:Math.random(),
        y:Math.random(),
        vx:0,
        vy:0,
        size:5 + Math.random() * 4,
        phase:index * 0.7,
        tint:index % 4
      })
    );

  const pointer = {
    x:0.5,
    y:0.5
  };

  function resizeSwarm() {

    const ratio =
      window.devicePixelRatio || 1;

    canvas.width =
      window.innerWidth * ratio;

    canvas.height =
      window.innerHeight * ratio;

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

    swarm.forEach(fish => {

      const targetX =
        pointer.x * width +
        Math.cos(
          time / 900 +
          fish.phase
        ) * 70;

      const targetY =
        pointer.y * height +
        Math.sin(
          time / 1100 +
          fish.phase
        ) * 55;

      fish.vx +=
        (targetX - fish.x * width) *
        0.00018;

      fish.vy +=
        (targetY - fish.y * height) *
        0.00018;

      fish.vx *= 0.96;
      fish.vy *= 0.96;

      fish.x += fish.vx / width;
      fish.y += fish.vy / height;

      const angle =
        Math.atan2(
          fish.vy,
          fish.vx
        ) || fish.phase;

      const size = fish.size;

      const colors = [
        '#f6cf69',
        '#e8b85c',
        '#9bd1bd',
        '#f08b6d'
      ];

      const bodyColor =
        colors[fish.tint];

      context.save();

      context.translate(
        fish.x * width,
        fish.y * height
      );

      context.rotate(angle);

      context.globalAlpha = 0.9;

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

      context.globalAlpha = 0.5;
      context.fillStyle = '#fff3c2';

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

      context.globalAlpha = 0.7;

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

      context.fillStyle = '#fff';

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

    requestAnimationFrame(drawSwarm);
  }

  resizeSwarm();

  requestAnimationFrame(drawSwarm);
}

/* =========================================================
   26. BLUE/WHITE CIRCLES
   MOVE UP AND DOWN
   ========================================================= */

function startSonarCircleAnimation() {

  const selectors = [
    '.sonar-circle',
    '.sea-circle',
    '.marine-circle',
    '.depth-circle',
    '.ocean-circle',
    '.hero-circle',
    '.fish-circle',
    '.data-circle',
    '.scanner-circle',
    '.radar-circle',
    '.sonar',
    '.marine',
    '.depth-marker'
  ];

  let circles = [];

  selectors.forEach(selector => {

    document
      .querySelectorAll(selector)
      .forEach(element => {

        if (!circles.includes(element)) {
          circles.push(element);
        }

      });

  });

  const hero =
    document.querySelector(
      '.hero, .hero-section, #hero, .landing-hero, .hero-visual'
    );

  if (
    circles.length === 0 &&
    hero
  ) {

    hero
      .querySelectorAll('div, span')
      .forEach(element => {

        const rect =
          element.getBoundingClientRect();

        if (
          rect.width >= 30 &&
          rect.height >= 30 &&
          Math.abs(
            rect.width - rect.height
          ) < 15
        ) {

          const style =
            window.getComputedStyle(element);

          const radius =
            parseFloat(style.borderRadius);

          if (
            radius >=
            Math.min(
              rect.width,
              rect.height
            ) * 0.35
          ) {

            if (!circles.includes(element)) {
              circles.push(element);
            }

          }

        }

      });
  }

  circles.forEach((circle, index) => {

    if (circle.dataset.sonarAnimation === 'true') {
      return;
    }

    circle.dataset.sonarAnimation = 'true';

    const distance =
      7 + (index % 4) * 4;

    const duration =
      1800 + index * 350;

    const delay =
      -(index * 300);

    circle.animate(
      [
        {
          transform:'translateY(0px)'
        },
        {
          transform:
            `translateY(-${distance}px)`
        },
        {
          transform:'translateY(0px)'
        },
        {
          transform:
            `translateY(${distance}px)`
        },
        {
          transform:'translateY(0px)'
        }
      ],
      {
        duration,
        delay,
        iterations:Infinity,
        easing:'ease-in-out'
      }
    );

  });

  console.log(
    `Data Swarm: ${circles.length} sonar circles animated.`
  );
}

/* =========================================================
   27. ESCAPE KEY
   ========================================================= */

document.addEventListener(
  'keydown',
  event => {

    if (event.key !== 'Escape') {
      return;
    }

    closePhotoPreview();
    closeCheckout();

    const wallet =
      $('#walletModal');

    if (wallet) {
      wallet.hidden = true;
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

  updateBrandText();

  updateBalanceDisplay();

  startSonarCircleAnimation();

  restoreLogin();

}

/* =========================================================
   START
   ========================================================= */

if (
  document.readyState === 'loading'
) {

  document.addEventListener(
    'DOMContentLoaded',
    initializeDataSwarm
  );

} else {

  initializeDataSwarm();

}
