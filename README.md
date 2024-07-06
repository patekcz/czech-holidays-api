<h1 align="center">
  <br>
  <img src="https://github.com/patekcz/czech-holidays-api/assets/52839023/de47535a-9ad6-42f3-b01f-0e66e14edcf4" alt="Czech Holidays API" width="100">
  <br>
  Czech Holidays API
  <br>
</h1>

<p align="center">API pro české státní svátky napsané v JavaScriptu.</p>
<p align="center">Poskytuje informace o českých státních svátcích pro aktuální den</p>

<br>

## 🌸 Informace
   
- API poskytuje seznam českých státních svátků pro aktuální den.
- Vrací data ve formátu JSON.
- Obsahuje informace o názvu svátku, datu a typu (státní svátek, ostatní svátky).
- Data jsou aktualizována automaticky.

<br>

## 🌱 Použití
   
Pro přístup k API použijte následující URL:

```
https://raw.githubusercontent.com/patekcz/czech-holidays-api/main/public/api-data.json
```

- Příklad odpovědi:

```json
{
  "aktualizace": "2024-07-06T17:59:21.061Z",
  "datum": "sobota 6. července 2024",
  "informace": [
    {
      "svatek": "Den upálení mistra Jana Husa",
      "typ": "Státní svátek"
    }
  ]
}
```

## Struktura projektu

<details>
  <summary>Klikněte pro zobrazení struktury projektu</summary>

```
czech-holidays-api/
│
├── .github/
│   └── workflows/
│       └── update.yml
│
├── public/
│   └── api-data.json
│
├── src/
│   ├── index.js
│   ├── updateData.js
│   └── utils/
│       └── helpers.js
│
├── package.json
└── README.md
```

</details>


