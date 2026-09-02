import "./HealingBody.css";

const bodyLayers = [
  {
    title: "Den fysiske kroppen",
    paragraphs: [
      "Dette er kroppen vår som man kan ta på og har med helsen til den fysiske kroppen å gjøre.",
      "Et energetisk aspekt av den ligger også i vår aura nærmest kroppen og kan sees som hvitt lys om man kan se aura.",
    ],
  },
  {
    title: "Den emosjonelle kroppen",
    paragraphs: [
      "Dette laget av kroppen har med våre emosjoner og følelser å gjøre som ligger utenfor det hvite feltet i auraen vår.",
      "Når healing går til dette feltet vil det kunne hjelpe på følelser som for eksempel nedstemthet, sorg, uro og traumer.",
    ],
  },
  {
    title: "Den mentale kroppen",
    paragraphs: [
      "Dette laget har med tanker og våre mentale prosesser å gjøre.",
      "Når det heales på dette kan det hjelpe mennesker til å tenke og forstå saker på en klarere måte.",
      "Det kan også hjelpe til å se saker som har skjedd i et annet lys og dermed kunne håndtere hendelser i livet vårt på en annerledes og bedre måte.",
    ],
  },
  {
    title: "Den spirituelle kroppen",
    paragraphs: [
      "Den spirituelle kroppen er vår sjelelige del og har med vår åndelighet å gjøre.",
      "Når healing går til denne delen av oss vil det kunne hjelpe oss til å komme i bedre kontakt med vår egen sjel, slippe frykt og spesielt frykt i forhold til sykdom og død.",
      "Den kan hjelpe oss inn i en hellig stemning og en dypere og tryggere kontakt i oss selv.",
    ],
  },
];

const HealingBody = () => {
  return (
    <section className="healing-body" aria-labelledby="healing-body-heading">
      <div className="healing-body__layout">
        <figure className="healing-body__visual">
          <div className="healing-body__image-placeholder" role="img" aria-label="Bilde kommer snart">
            <span>Bilde kommer snart</span>
          </div>
        </figure>

        <div className="healing-body__content">
          <header className="healing-body__intro">
            <p className="healing-body__eyebrow">Kroppens energiske lag</p>
            <h2 id="healing-body-heading">Healing på kroppen vår</h2>
            <p>
              Det er slik at vi kan dele kroppen vår inn i flere energiske lag.
              <br />
              Det sies å være mange lag, men de 4 mest kjente er:
            </p>
          </header>

          <div className="healing-body__layers">
            {bodyLayers.map((layer) => (
              <article className="healing-body__layer" key={layer.title}>
                <h3>{layer.title}:</h3>
                {layer.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealingBody;
