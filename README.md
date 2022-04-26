Voltti2-ruokatilaussovellus

Tämän projektin tarkoituksena oli tehdä suurehko web-pohjainen sovellus ryhmätyönä. Sovelluksen lopputuloksen tuli olla Woltin ja Foodoran tyylinen, eli ohjelmassa oli tarkoitus pystyä luomaan käyttäjä sekä tilaamaan ruokaa ravintolasta. Ohjelman frontendin(käyttöliittymä) toteutukseen oli tarkoitus käyttää Reactia, ja backendiksi(palvelinpää) me valitsimme Node.js:n. Sovellus on toteutettu Heroku-pilvipalveluun, joten se on kaikkien käyttäjien saatavissa. Tietokannan toteutus on tehty MySQL- tietokantaan, joka on yhdistetty Heroku-pilvipalveluun.

Ryhmämme jäseninä olivat: Laura Peltonen t0pela00@students.oamk.fi, Tiina Lakkapää t0lati00@students.oamk.fi, Aki Kuivas c0kuak00@students.oamk.fi, Mikko Laukkanen t0lami05@students.oamk.fi

Sovelluksen toimintakuvaus

    •	Sovelluksessa voi selata ravintoloita ja ravintoloiden ruokalistoja. Mikäli käyttäjä luo käyttäjätunnuksen, niin käyttäjä voi kirjautua sisään.

    •	Sovellukseen voi kirjautua sisään ravintolan omistajana tai ravintolan käyttäjänä, ja sovelluksen toiminta muuttuu tämän kirjautumisstatuksen mukaan.

    •	Kuluttajakäyttäjä voi kirjautumisen jälkeen lisätä tuotteita ostoskoriin ja muokata ostoskorin sisältöä tarvittaessa sekä suorittaa tuotteiden oston. Kuluttaja voi myös tarkastella tekemiään ostoksia.

    •	Ravintolan omistaja voi luoda ohjelmaan ravintolan, lisätä sinne tuotteita ja poistaa näitä tuotteita. Omistaja voi myös tarkastella ravintolasta tehtyjä ostoksia.


Sovelluksessa on käytetty Reactilla tehtyä toteutusta selainpuolella, ja tämä on yhdistettynä Node.js- rajapinnalla MySQL- tietokantaan (kuva 1).
![database](https://user-images.githubusercontent.com/91653507/165343344-a4402bec-2e05-427b-b735-b860f1cba259.png)

KUVA1. Tietokantarakenne

Rajapinnan suunnitteluun käytimme Stoplight.io-työkalua (kuva2). Rajapinta ottaa vastaan CRUD komentoja ja välittää ne tietokantaan. Rajapinta myös palauttaa virhekoodeja, mikäli käyttäjä tai ohjelma antaa rajapintaan väärän komennon. Mikäli ohjelman päivitysten yhteydessä tulisi jotain ongelmatilanteita, virhekoodit myös helpottavat näiden virheiden löytämistä ja korjaamista.
![Stoplight](https://user-images.githubusercontent.com/91653507/165343403-4f622540-9c4d-479f-ac67-8e93d579d3db.png)

KUVA 2. Stoplight.io-sivun näkymä

Käyttöliittymäsuunnitelma tehtiin käyttämällä Figma verkkosivua (kuva 3). Teimme Figmaan vain karkean suunnitelman siitä, miltä sovellus tulee näyttämään, sillä sovelluksen arviointiin ei vaikuttanut sovelluksen ulkoasu eikä Figman käyttö. Käytimme kuitenkin toteutuksessa Figmasta saatua suunnitelmaa, niiltä kohdilta mitä Figmaan oli tehty.
![Figma](https://user-images.githubusercontent.com/91653507/165343431-75d18c0e-b4e4-4c0c-99d9-b1db80550fb5.png)

KUVA 3. kuvankaappaus Figma-verkkosivulta

Sovelluksen käyttöönotto tapahtuu seuraavasti:
1.	Kloonaa Main Branch omalle koneellesi.
2.	Avaa ”web-projekti” kansion sisällä oleva ”express1” kansio komentorivillä komennolla cd /express1.
3.	Suorita komento npm install.
4.	Suorita komento npm start.
5.	Vaihda kansioksi web-projekti kansiossa sijaitseva kansio reactapp komennolla cd /reactapp.
6.	Suorita komento npm install.
7.	Suorita komento npm start.
8.	Sovellus ehdottaa porttia 3001, hyväksy tämä painamalla ”y”.
9.	Selain käynnistyy ja sovellus on toiminnassa.
Sovellus löytyy myös osoitteesta
https://web-projekti-group1.herokuapp.com/
