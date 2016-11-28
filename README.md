# Lokaverkefni í vefforritun
## Háskóli Íslands, haust 2016
### Höfundar:
Huy Van Nguyen

Bjarki Viðar Kristjánsson

Valentin Oliver Loftsson

**Opnið skipanalínuglugga í verkefnamöppunni**

**Setjið upp alla npm pakkana sem skilgreindir eru í package.json**
* npm install

**Notið postgreSQL til að búa til gagnagrunn.**

**Setjið inn viðeigandi notandanafn og lykilorð í routes.js skrána í línu 8 og _vistið skjalið_**
* const db = pgp(ENV || \`postgres://**username**:**password**@localhost:5432/postgres\`);

**Keyrið eftirfarandi skipun á skipanalínu og skrifið lykilorðið**
* psql -U postgres < database.sql

**Keyrið eslint-villuathugun fyrir javascript-skrár**
* npm run eslint -s

**Keyrið stylelint-villuathugun fyrir CSS-skrár**
* npm run stylelint -s

**Kveikið loks á vefþjón**
* npm start

**Skoðið síðuna einnig á internetinu**
* https://rafbilar.herokuapp.com/
