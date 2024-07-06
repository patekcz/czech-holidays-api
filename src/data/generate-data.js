const fs = require('fs');
const path = require('path');

// Načtení dat ze souboru date.json
const svatkyData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'date.json'), 'utf8'));

function getAktualniDenInfo() {
  const dnes = new Date();
  const mesic = String(dnes.getMonth() + 1).padStart(2, '0');
  const den = String(dnes.getDate()).padStart(2, '0');
  const datumKlic = `${mesic}-${den}`;

  return svatkyData.svatky.filter(item => item.datum === datumKlic);
}

function formatDatumCas(datum) {
  const dny = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'];
  const mesice = ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'];

  const den = dny[datum.getDay()];
  const datumStr = `${datum.getDate()}. ${mesice[datum.getMonth()]} ${datum.getFullYear()}`;
  const cas = datum.toLocaleTimeString('cs-CZ');

  return `${den} ${datumStr}, ${cas}`;
}

function generateApiData() {
  const dnes = new Date();
  const info = getAktualniDenInfo();

  const apiData = {
    datum: formatDatumCas(dnes),
    casAktualizace: dnes.toISOString(),
    informace: info.map(item => ({
      jmeno: item.jmeno,
      svatek: item.svátek,
      typ: item.typ === 0 ? 'Jmeniny' : item.typ === 1 ? 'Státní svátek' : 'Významný den'
    }))
  };

  fs.writeFileSync(path.join(__dirname, '..', 'public', 'api-data.json'), JSON.stringify(apiData, null, 2));
}

generateApiData();
