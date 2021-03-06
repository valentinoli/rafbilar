# Lokaverkefni í vefforritun
## Háskóli Íslands, haust 2016
### Höfundar:
Huy Van Nguyen

Bjarki Viðar Kristjánsson

Valentin Oliver Loftsson

### Vinsamlegast fylgið eftirfarandi leiðbeiningum í uppsetningu á verkefninu

**Opnið skipanalínuglugga í verkefnamöppunni**

**Setjið upp alla npm pakkana sem skilgreindir eru í package.json með eftirfarandi skipun:**
* npm install

**Notið Postgres vefþjónustu til þess að tengjast gagnagrunni. Þið getið niðurhalað þjónustunni á https://www.postgresql.org/. Setjið þjónustuna upp í tölvunni og búið til lykilorð.**

**Setjið psql sem umhverfisbreytu, þ.e sem "Environment Variable" í Path.**

Leiðbeiningar fyrir Windows:
- Hægri smellið á My Computer (eða This PC) og veljið Properties. Opnið System Properties með því að velja Advanced System Settings á vinstri hlið. 
- í System Properties veljið Advanced flipann og smellið síðan á Environment Variables takkann.
- Veljið path í User variables for Notandi
- Setjið inn
  - C:\Program Files\PostgreSQL\9.6\bin

Leiðbeiningar fyrir Mac:
* Sláið inn á skipanalínu: export PATH=/Library/PostgreSQL/9.6/bin:$PATH

**Setjið inn viðeigandi lykilorð í línu 8 í src/routes.js skránni og _vistið skjalið._**
* const db = pgp(ENV || \`postgres://postgres:**password**@localhost:5432/postgres\`);

**Keyrið eftirfarandi skipun á skipanalínu. Á eftir þessari skipun þarf notandinn að slá inn lykilorðið sem hann valdi.**
* psql -U postgres < database.sql

**Keyrið eslint-villuathugun fyrir javascript-skrár:**
* npm run eslint -s

**Keyrið stylelint-villuathugun fyrir CSS-skrár:**
* npm run stylelint -s

**Kveikið loks á vefþjón:**
* npm start

**Skoðið síðuna einnig á veraldarvefnum**
* https://rafbilar.herokuapp.com/
