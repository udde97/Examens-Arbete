const PRODUCTS = [
  {
    id: 1,
    name: "Apple iPhone 13",
    price: 9999,
    image: require("../assets/product_images/iphone.jpg"),
    description:
      "Schysst dubbelkamera på iPhone 13 iPhone 13 har en dubbelkamera på 12 megapixlar. Kamerorna är diagonalt placerade. Den optiska bildstabiliseringen hjälper till att göra sina bilder så skarpa som möjligt. Med cinematiskt läge filmar du i Dolby Vision HDR och kan även justera skärpedjupet i efterhand. Såhär grymma filmer har du aldrig tidigare kunnat filma med din mobil! iPhone 13 med Super Retina XDR-skärm, Skärmen på iPhone 13 är en förbättrad OLED-skärm. Den är 28% ljusare och synd mycket tydligare i solljus. Svarta färger är svartare, vita färger är vitare och alla färger i däremellan kommer visas tydligare. Den naturliga färgåtergivningen gör att allt på skärmen ser naturligt ut. Trots alla dessa förbättringar är skärmen bättre på att spara ström än tidigare.",
  },
  {
    id: 2,
    name: "MSI Gaming Grafikkort Nvidia Geforce GTX1060",
    price: 8999,
    image: require("../assets/product_images/geeforce.jpg"),
    description:
      "Kraftfull utgåva av GTX 1060 med väl tilltagen fabriksöverklockning och tyst kylning. Nya TWIN FROZR VI kylaren har Zero Frozr teknik vilket innebär att fläktarna står helt still vid låg belastning för helt ljudlös drift.",
  },
  {
    id: 3,
    name: "Acer 24 CB242Y IPS Pivot 75 Hz Silver",
    price: 2390,
    image: require("../assets/product_images/acer24.png"),
    description:
      "CB242Y är en kristallklar IPS-skärm som erbjuder full ergonomi med pivot-, tilt- och höjdjustering. Den har även 75 Hz uppdateringsfrekvens och adaptiv synkronisering för extra följsam och hackfri bild när du spelar. Med HDMI, DisplayPort och VGA får du en bred kompatibilitet med alla slags anslutningar. Flimmerfri bild samt blåjusreducering gör den till en perfekt skärm för långa kontor- eller spelsessioner. Skärmen har även 3 års garanti för extra trygghet",
  },
  {
    id: 4,
    name: "DELTACO Gaming Tangentbord Mekaniskt RGB 60% Content Brown",
    price: 699,
    image: require("../assets/product_images/tangentbord2.webp"),
    description:
      "Detta är det perfekta tangentbordet för dig som skall på LAN eller som har en portabel gaminghörna eller helt enkelt för dig som vill maximera skrivsbordsytan – oavsett anledning kommer detta tangentbord maximera din spelyta. Tangentbordet är bland annat utrustat med mekaniska brytare, RGB-belysning, Anti-Ghosting och N-Key Rollover.",
  },
  {
    id: 5,
    name: "A172 Epic Gaming PC - RTX 3070 Edition",
    price: 19999,
    image: require("../assets/product_images/gamingDator.jpg"),
    description:
      "Om du vill ha enkraftfull speldator som levererarförstklassig spelprestandarekommenderar vi Kompletta172Epic Gaming PC. Med det vassaRTX 3070 grafikkortetfrån Nvidia kan du vara säker på häftiga spelupplevelser. Chassit har en häftig design och meshfront som ser till att datorn håller sig sval även under de längsta och hårdaste sessionerna. a172lämpar sig väl för streaming med Ryzen 7-processor. Den klarar de flesta uppgifter och låter dig streama samtidigt som du är spelar utan problem. Den snygga RGB-belysningen sätter stämningen i vilken stream som helst, och du kan enkelt ändra färger.",
  },
  {
    id: 6,
    name: "LG 65 OLED 4K TV OLED65C1",
    price: 15790,
    image: require("../assets/product_images/tv.jpg"),
    description:
      "LG OLED TV är en glädje att se. Självlysande pixlar ger en häpnadsväckande bildkvalitet och en mängd designmöjligheter, och de senaste banbrytande teknikerna tar upplevelserna till nya oöverträffade höjder. Allt du redan älskar med TV - på en ny och högre nivå.",
  },
  {
    id: 7,
    name: "Trust GXT 705W Ryon Gamingstol vit",
    price: 1643,
    image: require("../assets/product_images/gamingStol.webp"),
    description:
      "Varje härskare behöver en tron! Trust GXT 705 Ryon Gamingstol ger komfort för riktiga segrare. Den ergonomiska designen är optimerad för att passa de långa spelsessionerna: du kan helt fokusera på uppgiften framför dig och behärska alla färdigheter i de senaste spelen. Denna stol kompletterar din spelutrustning med majestätisk stil.",
  },
  {
    id: 8,
    name: "Trust GXT 255+ Onyx professionell mikrofon med arm",
    price: 1999,
    image: require("../assets/product_images/microfon.webp"),
    description:
      "För inspelningar i studiokvalitet behöver du en stabil installation. Denna bomarm i studiokvalitet är gjord av robust aluminium för att minska oönskat ljud från vibrationer. Armen är helt justerbar så att du kan säkra den bästa positionen och vinkeln för att spela in, samtidigt som du håller koll på ergonomin samtidigt. Kan fästas på ett bord, stativet sparar utrymme och en dold kabel håller skrivbordet rent.",
  },
  {
    id: 9,
    name: "SteelSeries Rival 5 Gaming Mus (svart)",
    price: 799,
    image: require("../assets/product_images/gamingMus.jpg"),
    description:
      "Gamingmus med precision för flera genrer SteelSeries Rival 5-musen är en ergonomisk mus med 9 knappar och 5 sidoknappar som är utformade för att uppnå de högsta hastigheterna i alla spel.",
  },
  {
    id: 10,
    name: "Xbox Series X",
    price: 5695,
    image: require("../assets/product_images/xbox.webp"),
    description:
      "Upplev gaming på en helt ny nivå med Xbox Series X spelkonsol - betydligt mer kraftfull än Xbox One X. Spela och streama i äkta 4K–upplösning med tusentals titlar från fyra generationer av konsoler. Konsolen har avsevärt kortare laddningstider och avancerat rumsljud i 3D. Inga spel medföljer.",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
