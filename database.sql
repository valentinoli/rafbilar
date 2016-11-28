BEGIN TRANSACTION;

DROP TABLE if exists ElectricCars;

CREATE TABLE ElectricCars (
  manufacturer varchar(30),
  model varchar(30),
  picture varchar(300),
  price int,
  battery int,
  range int,
  horsepower int,
  maxspeed int,
  info varchar(3000)
);

INSERT INTO ElectricCars(manufacturer, model, picture, price, battery, range, horsepower, maxspeed, info) VALUES('Kia','Soul EV','kiasoul.jpg',3900000,30,200,110,150,'Fimm manna sportlegur fjölskyldubíll hlaðinn tækjabúnaði.');
INSERT INTO ElectricCars(manufacturer, model, picture, price, battery, range, horsepower, maxspeed, info) VALUES('Renault','Zoe','renaultzoe.jpg',2400000,41,400,90,135,'Fimm manna fjölskyldubíll. Hraðhleðsla heima 0-80% á 30 mín, getur full hlaðið á klukkustund. Frítt í bílastæði Reykjavíkur í 90 mín.');
INSERT INTO ElectricCars(manufacturer, model, picture, price, battery, range, horsepower, maxspeed, info) VALUES('Tesla','Model S','teslamodels.jpg',15300000,100,613,762,250,'Einfaldlega eitt besta ökutæki sem er fáanlegt í dag. Öruggur lúxus rafbíll með búnað sem gerir bílnum kleift að að keyra sig sjálfur undir flestum kringumstæðum.');
INSERT INTO ElectricCars(manufacturer, model, picture, price, battery, range, horsepower, maxspeed, info) VALUES('Tesla','Model X','teslamodelx.jpg',15800000,100,542,532,250,'Sjö manna lúxus rafjeppi frá Tesla Motors með sjálfkeyrandi búnaði. Einn öruggasti jepplingur sem fyrirfinnst');
INSERT INTO ElectricCars(manufacturer, model, picture, price, battery, range, horsepower, maxspeed, info) VALUES('Nissan','Leaf','nissanleaf.jpg',4000000,30,250,109,145,'Sjö sæta bíll. CHAdeMO tengi fyrir hraðhleðslustöðvar. Vinsælasti rafbíllinn á Íslandi');
INSERT INTO ElectricCars(manufacturer, model, picture, price, battery, range, horsepower, maxspeed, info) VALUES('Nissan','E-NV200','nissanenv200.jpg',4400000,24,170,109,122,'Er til sem sendibíll, fimm eða sjö sæta fólksbíll.');
INSERT INTO ElectricCars(manufacturer, model, picture, price, battery, range, horsepower, maxspeed, info) VALUES('Volkswagen','e-Golf','e-golf.jpg',4200000,24,190,115,140,'Rafmögnuð útgáfa af einum vinsælasta bíl heims, Golf. Hentugur bíll sem stendur undir nafni');
INSERT INTO ElectricCars(manufacturer, model, picture, price, battery, range, horsepower, maxspeed, info) VALUES('Volkswagen','e-up!','e-up!.jpg',3000000,12,160,82,130,'Áreiðanlegur smábíll sem hentar vel innanbæjar.');
INSERT INTO ElectricCars(manufacturer, model, picture, price, battery, range, horsepower, maxspeed, info) VALUES('BMW','i3','bmwi3.jpg',4000000,33,183,168,150,'Sportlegur bíll frá BMW. Þægilegur í keyrslu vegna mjög lágrar þyngdarmiðju.');
INSERT INTO ElectricCars(manufacturer, model, picture, price, battery, range, horsepower, maxspeed, info) VALUES('Mercedes-Benz','B Class E','B-Class-Electric-Drive.jpg',4600000,28,158,177,163,'Fyrsti hreini rafbíllinn frá Mercedes-Benz. Hann svíkur engann.');

COMMIT;
