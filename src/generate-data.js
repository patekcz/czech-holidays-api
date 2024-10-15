const fs = require('fs');
const path = require('path');

// Načtení dat ze souboru holidays.json
const svatkyData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'holidays.json'), 'utf8'));

function getAktualniDenInfo() {
  const dnes = new Date();
  const mesic = String(dnes.getMonth() + 1).padStart(2, '0');
  const den = String(dnes.getDate()).padStart(2, '0');
  const datumKlic = `${mesic}-${den}`;

  console.log('Hledám data pro datum:', datumKlic);
  
  const mesice = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'];
  const nazevMesice = mesice[dnes.getMonth()];

  const nalezenaData = svatkyData[nazevMesice].find(item => item.day === den);
  console.log('Nalezená data:', nalezenaData);

  return nalezenaData ? nalezenaData.holidayInfo : [];
}

// Zjednodušení funkce formatDatum
function formatDatum(datum) {
  const dny = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'];
  const mesice = ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'];

  const den = dny[datum.getDay()];
  const datumStr = `${datum.getDate()}. ${mesice[datum.getMonth()]} ${datum.getFullYear()}`;
  
  const kratkeDatum = `${datum.getDate()}.${datum.getMonth() + 1}`;

  return {
    dlouhe: `${den} ${datumStr}`,
    kratke: kratkeDatum
  };
}

function getWeekNumber(datum) {
  const start = new Date(datum.getFullYear(), 0, 1);
  const days = Math.floor((datum - start) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + start.getDay() + 1) / 7);
}

function logData(message, data) {
  console.log(message, data);
}

function generateApiData() {
  const dnes = new Date();
  logData('Aktuální datum:', dnes);

  const info = getAktualniDenInfo();
  logData('Získané informace pro dnešní den:', info);

  const weekNumber = getWeekNumber(dnes);
  const { dlouhe, kratke } = formatDatum(dnes);

  const apiData = {
    aktualizace: dnes.toISOString(),
    datum: dlouhe,
    kratkeDatum: kratke,
    tyden: weekNumber,
    informace: info.map(({ Svatek, VyznamnyDen }) => ({ svatek: Svatek, vyznamnyDen: VyznamnyDen }))
  };

  logData('Generovaná API data:', JSON.stringify(apiData, null, 2));

  fs.writeFileSync(path.join(__dirname, '..', 'public', 'api-data.json'), JSON.stringify(apiData, null, 2));
}

process.on('unhandledRejection', (reason, promise) => {
  process.exit(1);
});

try {
  generateApiData();
} catch (error) {
  process.exit(1);
}
