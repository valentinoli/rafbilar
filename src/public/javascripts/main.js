
const model1img = $('.img-model1');
const model2img = $('.img-model2');

const carname1 = $('.car-name1');
const carname2 = $('.car-name2');

const price1 = $('.price1');
const battery1 = $('.battery1');
const range1 = $('.range1');
const horsepower1 = $('.horsepower1');
const maxspeed1 = $('.maxspeed1');

const price2 = $('.price2');
const battery2 = $('.battery2');
const range2 = $('.range2');
const horsepower2 = $('.horsepower2');
const maxspeed2 = $('.maxspeed2');

const p1price = $('#price1');
const p1battery = $('#battery1');
const p1range = $('#range1');
const p1horsepower = $('#horsepower1');
const p1maxspeed = $('#maxspeed1');

const p2price = $('#price2');
const p2battery = $('#battery2');
const p2range = $('#range2');
const p2horsepower = $('#horsepower2');
const p2maxspeed = $('#maxspeed2');

const basePrice = 17000000;
const baseBattery = 120;
const baseRange = 620;
const baseHP = 700;
const baseMaxspeed = 260;
const information = window.data;

const images = ['mynd1.jpg', 'mynd2.jpg', 'mynd3.jpg',
  'mynd4.jpg', 'mynd5.jpg', 'mynd6.jpg', 'mynd7.jpg'];
const quotes = [
  '“You can never have an impact on society if you have not changed yourself.”  -Nelson Mandela',

  '„Tilvera okkar er undarlegt ferðalag. Við erum gestir og hótel okkar er jörðin.“ -Tómas Guðmundsson, Hótel Jörð',

  '“We each have to make our own decision, and we\'ll each have to answer for this to our ancestors...” -The Most Venerable Book',

  '“Taking good care of our home, its waters, its air, its soil, and its millions of plants and animals is a duty that must not be overlooked.” -Walking the Straight Path',

  '“The ball is now in the court of policy-makers who will determine how quickly e-mobility is going to advance.” -Dr. Norbert Reithofer',
  
  '“The time is right for electric cars - in fact the time is critical.” -Carlos Ghosn',
];

// Virkjar one-page-scroll
function activateOnePageScroll() {
  $('.main').onepage_scroll({
    sectionContainer: 'section',
    easing: 'ease',
    animationTime: 1000,
    pagination: true,
    updateURL: false,
    beforeMove(index) {},
    afterMove(index) {},
    loop: false,
    keyboard: true,
    responsiveFallback: false,
    direction: 'vertical',
  });
}

// Virkjar bakgrunnsmyndir á síðu 2 (slider)
function initPicture(info) {
  const imgslider = $('.img-wrapper');
  for (let i = 0; i < imgslider.length; i++) {
    const url = `url(./img/${info[i].picture})`;
    $(imgslider[i]).css('background-image', url);
  }
}

// Uppfærir upplýsingar um bíl nr. 1
function updateinfo1(info) {
  model1img.attr('src', `./img/${info.picture}`);
  carname1.text(`${info.manufacturer} ${info.model}`);

  price1.text(`${info.price.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')} kr.`);
  battery1.text(`${info.battery} kWh`);
  range1.text(`${info.range} km/hleðsla`);
  horsepower1.text(`${info.horsepower} hö`);
  maxspeed1.text(`${info.maxspeed} km/klst`);

  const scaledPrice = parseInt(((info.price / basePrice) * 100), 10);
  const scaledBattery = parseInt(((info.battery / baseBattery) * 100), 10);
  const scaledRange = parseInt(((info.range / baseRange) * 100), 10);
  const scaledHP = parseInt(((info.horsepower / baseHP) * 100), 10);
  const scaledMaxspeed = parseInt(((info.maxspeed / baseMaxspeed) * 100), 10);

  p1price.css('width', `${scaledPrice}%`);
  p1battery.css('width', `${scaledBattery}%`);
  p1range.css('width', `${scaledRange}%`);
  p1horsepower.css('width', `${scaledHP}%`);
  p1maxspeed.css('width', `${scaledMaxspeed}%`);
}

// Uppfærir upplýsingar um bíl nr. 2
function updateinfo2(info) {
  model2img.attr('src', `./img/${info.picture}`);
  carname2.text(`${info.manufacturer} ${info.model}`);

  price2.text(`${info.price.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')} kr.`);
  battery2.text(`${info.battery} kWh`);
  range2.text(`${info.range} km/hleðsla`);
  horsepower2.text(`${info.horsepower} hö`);
  maxspeed2.text(`${info.maxspeed} km/klst`);

  const scaledPrice = parseInt(((info.price / basePrice) * 100), 10);
  const scaledBattery = parseInt(((info.battery / baseBattery) * 100), 10);
  const scaledRange = parseInt(((info.range / baseRange) * 100), 10);
  const scaledHP = parseInt(((info.horsepower / baseHP) * 100), 10);
  const scaledMaxspeed = parseInt(((info.maxspeed / baseMaxspeed) * 100), 10);

  p2price.css('width', `${scaledPrice}%`);
  p2battery.css('width', `${scaledBattery}%`);
  p2range.css('width', `${scaledRange}%`);
  p2horsepower.css('width', `${scaledHP}%`);
  p2maxspeed.css('width', `${scaledMaxspeed}%`);
}

// Atburðarhandler fyrir handahófskenndan samanburð
// Birtir upplýsingar um tvo rafbíla af handahófi
function generateRandom() {
  const rnd1 = Math.floor(Math.random() * information.length);
  let rnd2 = Math.floor(Math.random() * information.length);
  while (rnd1 === rnd2) {
    rnd2 = Math.floor(Math.random() * information.length);
  }
  updateinfo1(information[rnd1]);
  updateinfo2(information[rnd2]);
}

// Atburðarhandler fyrir val á módel 1
// Birtir upplýsingar um bíl sem var valinn
function selectModelListener1(event) {
  const name = event.target.text;
  $('.btn1').text(name);
  for (let i = 0; i < information.length; i++) {
    const model = information[i].model;
    const manufacturer = information[i].manufacturer;
    const car = `${manufacturer} ${model}`;
    if (name === car) {
      updateinfo1(information[i]);
      break;
    }
  }
}

// Atburðarhandler fyrir val á módel 2
// Birtir upplýsingar um bíl sem var valinn
function selectModelListener2(event) {
  const name = event.target.text;
  $('.btn2').text(name);
  for (let i = 0; i < information.length; i++) {
    const model = information[i].model;
    const manufacturer = information[i].manufacturer;
    const car = `${manufacturer} ${model}`;
    if (name === car) {
      updateinfo2(information[i]);
      break;
    }
  }
}

// Keyrist í upphafi
$(document).ready(() => {
  // Virkjum one-page-scroll
  activateOnePageScroll();
  // Setjum bakgrunnsmyndirnar á síðu 2
  initPicture(information);
  // Virkjum handahófskenndan samanburð á síðu 3
  generateRandom();

  // Setjum bakgrunnsmynd og quote á forsíðu af handahófi
  $('.main-page-header').css({ 'background-image': `url(backgrounds/${images[Math.floor(Math.random() * images.length)]})` });
  $('.quote > p').text(quotes[Math.floor(Math.random() * quotes.length)]);

  // Bætum við atburðarhandlerum fyrir takkana á samanburðarsíðu (síðu 3)
  $('.select-model1').click(selectModelListener1);
  $('.select-model2').click(selectModelListener2);
  $('.random-btn').click(generateRandom);
});
