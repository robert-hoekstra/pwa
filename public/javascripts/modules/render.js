// render data
function Hulp(data) {
  const main = document.querySelector("main");
  console.log("main", main);
  main.innerHTML = `    <main>
    <h1>Hoe maak ik een werkstuk?</h1>
    <p>Een werkstuk is een uitgebreid verslag over een onderwerp. Dat kan van alles zijn! Met een werkstuk schrijf je
        een verslag over verschillende dingen die binnen een onderwerp voorkomen.</p>
    <h2>Onderwerp kiezen</h2>
    <p>Om te beginnen kies je eerst een onderwerp. Het kan zijn dat je een onderwerp van school hebt meegekregen. Maar
        als je zelf een onderwerp kan kiezen dan is het een goed begin om voor je eerste werkstuk een onderwerp te
        kiezen dat bij je past!</p>
    <h2>Onderzoek doen</h2>
    <p>Nadat je een onderwerp hebt gekozen moet je onderzoek doen. Wanneer je onderzoek doet ga je op zoek naar allemaal
        informatie dat over jouw onderwerp gaat. Deze informatie noemen we ook wel bronnen. </p>
    <h2>Bronnen zoeken</h2>
    <p>Bronnen zijn informatiedragers. Een verzameling van goede bronnen zorgt voor een goed onderzoek voor jouw
        werkstuk. Bronnen kunnen bijvoorbeeld boeken zijn. Maar ook foto's, videos en audioberichten zijn bronnen!</p>
    <h2>Schrijven</h2>
    <p>Nu je jouw onderzoek hebt afgerond is het belangerijk om te gaan schrijven! Een werkstuk schrijf je uit op papier
        of op de computer. Denk daarbij aan een goede titel en welke onderwerpen jij wilt behandelen. Dit worden
        namelijk jouw hoofdstukken! Een voorbeeld van een werkstuk kan zijn: <ul id="list">
            <li>Titel: Nederlandse Auto's</li>
            <li>Voorwoord</li>
            <li>Hoofdstuk 1: DAF</li>
            <li>Hoofdstuk 2: Spyker </li>
            <li>Hoofdstuk 3: Donkervoort</li>
            <li>Conclussie</li>
            <li>Bronvermelding</li>
        </ul>
    </p>
    <h2>Bronnenlijst</h2>
    <p>Een bronnenlijst bevat alle informatie die jij hebt gevonden. Je vermeld hier de auteur van de bron en waar je de
        bron hebt gevonden. Je vermeld ook de datum van wanneer je de bron hebt gevonden.</p>
    <h2>Tips</h2>
    <p>
        <ul id="list">
            <li>Kies een onderwerp dat interessant is.</li>
            <li>Bezoek de bibliotheek voor goede bronnen</li>
            <li>Schets eerst de structuur van jouw werkstuk</li>
            <li>Wat zijn de kernwoorden? Schrijf deze op!</li>
            <li>Schrijf elke keer als je een bron hebt gevonden de informatie op voor in je Bronvermelding</li>
        </ul>
    </p>

    <img class="avatar" src="./images/boekje/happy.png" alt="Booky">
    <p>Klaar om een werstuk te gaan maken? Druk op "Nieuw Werkstuk" bovenaan de website!</p>
</main>`;
}

function Werkstuk(data) {
  const main = document.querySelector("main");
  console.log("main", main);
  main.innerHTML = ` <main class="grid">
    <section id="except">
    <div>
        <h2>Werkstuk over Dieren</h2>
            <img src="https://www.scientias.nl/wp-content/uploads/2019/10/Stokstaartje.jpg" alt="">
            <p>Dit werkstuk bevat 5 bronnen</p>
            <a class="button" href="#werkstuk">Bekijken</a class="button" href="#werkstuk">
        </div>
    </section id="except">
    <section id="except">
        <div>
            <h2>Werkstuk over Audi</h2>
            <img src="https://static.autoblog.nl/images/wp2019/Audi-RS-Q8-1.jpg" alt="">
            <p>Dit werkstuk bevat 4 bronnen</p>
            <a class="button" href="#werkstuk">Bekijken</a class="button" href="#werkstuk">
        </div>
    </section id="except">
    <section id="except">
        <div>
            <h2>Werkstuk over KLM</h2>
            <img src="https://www.zakenreisnieuws.nl/sites/default/files/styles/artikel/public/website_633x300/slider-airlines/klm_boeing_777_c_reismedia_1280_3.jpg?itok=3oCJnMGr" alt="">
            <p>Dit werkstuk bevat 6 bronnen</p>
            <a class="button" href="#werkstuk">Bekijken</a class="button" href="#werkstuk">
        </div>
    </section id="except">
    <section id="except">
        <div>
            <h2>Werkstuk over Kaas</h2>
            <img src="https://images.squarespace-cdn.com/content/v1/5a1592ff0abd04e470d48744/1512553461588-BZ9X4L2F5CINL2DU8QTF/ke17ZwdGBToddI8pDm48kPQujXO7frs1W7a77FZyt1F7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0prfa1Z6IeUrCPboCAmmHZn3ZVtqnTHXt-4Tm3byPSNDpHfFtqjKxWw0uc1YBtkl-w/Kaas.jpeg?format=2500w" alt="">
            <p>Dit werkstuk bevat 10 bronnen</p>
            <a class="button" href="#werkstuk">Bekijken</a class="button" href="#werkstuk">
        </div>
    </section id="except">
    <section id="except">
        <div>
            <h2>Werkstuk over Donald Duck</h2>
            <img src="https://www.muurstickerplus.nl/media/product/533/donald-duck-8e9.jpg" alt="">
            <p>Dit werkstuk bevat 3 bronnen</p>
            <a class="button" href="#werkstuk">Bekijken</a class="button" href="#werkstuk">
        </div>
    </section id="except">
    <section id="except">
        <div>
            <h2>Werkstuk over Europese Unie</h2>
            <img src="https://dwars.org/overdwars/wp-content/uploads/sites/3/2017/09/EU-flag-heart-e1506168926664.jpg" alt="">
            <p>Dit werkstuk bevat 0 bronnen</p>
            <a class="button" href="#werkstuk">Bekijken</a href="#werkstuk">
        </div>
    </section id="except">
</main>`;
}

function WerkstukDetail(data) {
  const main = document.querySelector("main");
  console.log("main", main);
  main.innerHTML = ` 

    <main class="detailpage">
    <h1>Mijn werkstuk over KLM</h1>
    <img src="https://blog.klm.com/assets/uploads/2019/07/headerfb-768x510.png">

            <section>
                <div>
                    <section id="nogrid"><h2>
                        Video
                    </h2></section>
                    <ul>
    <a href=""><li>Bron</li></a>
    <a href=""><li>Bron</li></a>
    <a href=""><li>Bron</li></a>
    <a href=""><li>Bron</li></a>
</ul>
                </div>
                <div>
                    <section id="nogrid"><h2>
                        Audio
                    </h2></section>
                    <ul>
    <a href=""><li>Bron</li></a>
    <a href=""><li>Bron</li></a>
    <a href=""><li>Bron</li></a>
    <a href=""><li>Bron</li></a>
</ul>
                </div>
                <div>
                    <section id="nogrid"><h2>
                        Afbeeldingen
                    </h2></section>
                    <ul>
    <a href=""><li>Bron</li></a>
    <a href=""><li>Bron</li></a>
    <a href=""><li>Bron</li></a>
    <a href=""><li>Bron</li></a>
</ul>
                </div>
                <div>
                    <section id="nogrid"><h2>
                        Teksten
                    </h2></section>
                    <ul>
    <a href=""><li>Bron</li></a>
    <a href=""><li>Bron</li></a>
    <a href=""><li>Bron</li></a>
    <a href=""><li>Bron</li></a>
</ul>
                </div>
            </section>
    
    </main>`;
}

function Data(data) {
  const main = document.querySelector("main");
  const header = document.querySelectorAll("h1");
  const paragraph = document.querySelectorAll("p");
  const results = data.results;
  console.dir(results);
  paragraph[0].innerText = `"Om een goed werkstuk te maken heb je informatie nodig. Informatie haal je uit bronnen. Bronnen kunnen bijvoorbeeld boeken zijn. Maar ook video's op youtube of plaatjes kunnen goede bronnen zijn! Door op een van de boeken te klikken in de lijst kun je direct zien waar je het boek kunt ophalen, super handig!"`;
  header[0].innerText = "Kies een interessant boek!";
  main.innerHTML = "";
  main.classList.add("grid");
  results.forEach((item, i) => {
    const html = `
      <a href="${item.detailLink}" target="window">
              <article id="detail">
                <h2>${item.titles[0]}</h2>
                <p>${
                  item.summaries ? item.summaries[0] : "Geen samenvatting"
                }</p>
                <img src="${
                  item.coverimages ? item.coverimages[1] : "Geen samenvatting"
                }">

                <span class="aantal" style="display:block">Aantal beschikbare exemplaren: ${
                  item.frabl.cnt
                } </span>
                    <button>Voeg toe aan werkstuk</button>
                    <button>Bekijk beschikbaarheid</button>
              </article>
        </a>
            `;
    main.insertAdjacentHTML("beforeend", html);
  });
}

// render data
function Search() {
  const main = document.querySelector("main");
  const header = document.querySelectorAll("h1");
  const div = document.getElementById("instructions");
  if (div !== null) {
    div.innerHTML = "";
  }

  console.log(div);
  console.log(header, "ja");
  main.innerHTML = "";
  main.classList.add("grid");
  main.insertAdjacentHTML(
    "beforebegin",
    `<div id="instructions"><h1>Kies een leuk onderwerp</h1> <br> <div class=flex> <img class="avatar" src="./images/boekje/happy.png" alt="Booky"> <p>"Een onderwerp vormt de basis van jouw werkstuk. Kies een onderwerp die bij jou past. Vind je het bijvoorbeeld leuk om films te kijken met ridders? Kijk dan eens naar geschiedenis!"</p></div></div>`
  );
  const subjects = [
    "Geschiedenis",
    "Dieren",
    "Landen en Steden",
    "Sport en Hobby",
    "Natuur",
    "Bekende Personen",
    "Mens & Gezondheid",
    "Beroepen"
  ];

  subjects.forEach((subjects, i) => {
    const html = `
        <a href=#${subjects}>
        <article id="${subjects}">
        <h2>${subjects}</h2>
        </article>`;
    main.insertAdjacentHTML("beforeend", html);
  });
}

export default { Hulp, Data, Search, Werkstuk, WerkstukDetail };
