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
  "aktualizace": "2024-10-15T02:06:02.670Z",
  "datum": "úterý 15. října 2024",
  "kratkeDatum": "15.10",
  "tyden": 42,
  "informace": [
    {
      "svatek": "Tereza"
    },
    {
      "vyznamnyDen": "Mezinárodní den bílé hole, Světový den žen žijících na venkově"
    }
  ]
}
```

## 📂 Struktura projektu

```
├── .github
│   └── workflows
│       └── update-api.yml
├── public
│   └── api-data.json
├── README.md
├── src
│   ├── data
│   │   └── holidays.json
│   └── generate-data.js
└── web-template.html
```

## 🌐 Web Template

Pro zobrazení webové šablony navštivte [web template](https://patekcz.github.io/czech-holidays-api/web-template).

## 🤝 Přispívání

Příspěvky jsou vítány! Pokud máte nápad na vylepšení nebo jste našli chybu, neváhejte otevřít issue nebo poslat pull request.

---

<p align="center">
  Děkuji všem, kteří používají a podporují tento projekt! ❤️
</p>
