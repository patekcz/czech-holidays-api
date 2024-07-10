<h1 align="center">
  <br>
  <a href="https://github.com/patekcz"><img src="https://github.com/patekcz/czech-holidays-api/assets/52839023/de47535a-9ad6-42f3-b01f-0e66e14edcf4" height="100" alt="Czech Holidays API"></a>
  <br>
  <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=2000&pause=1000&random=false&width=160&lines=Czech+Holidays+API" alt="Typing SVG" /></a>
  <br>
</h1>

<p align="center">
  <b>API pro získání českých státních svátků a významných dnů</b>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/patekcz/czech-holidays-api?style=social" alt="GitHub stars">
  <img src="https://img.shields.io/github/forks/patekcz/czech-holidays-api?style=social" alt="GitHub forks">
</p>

---

## 🌟 O projektu

`Czech Holidays API` je API, které poskytuje informace o českých státních svátcích a významných dnech. Data jsou pravidelně aktualizována a dostupná ve formátu JSON.

## 🚀 Funkce

- 📅 Poskytuje aktuální informace o státních svátcích a významných dnech
- 🔄 Pravidelná aktualizace dat
- 📂 Jednoduchá struktura a snadné použití

## 🌱 Použití

Pro přístup k API použijte následující URL:

```
https://patekcz.github.io/czech-holidays-api/public/api-data.json
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

## 📂 Struktura projektu

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
│   ├── generate-data.js
│   └── data/
│       └── date.json
│
├── web-template.html
│
└── README.md
```

## 🌐 Web Template

Pro zobrazení webové šablony navštivte [web template](https://patekcz.github.io/czech-holidays-api/web-template).

## 🤝 Přispívání

Příspěvky jsou vítány! Pokud máte nápad na vylepšení nebo jste našli chybu, neváhejte otevřít issue nebo poslat pull request.

---

<p align="center">
  Děkuji všem, kteří používají a podporují tento projekt! ❤️
</p>
