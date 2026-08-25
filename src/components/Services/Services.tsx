import "./Services.css";

const services = [
  {
    title: "Fjernhealing",
    text: "En rolig stund med nærvær, stillhet og myk energi. Timen gir deg tid til å lande, puste og vende oppmerksomheten innover. Du kan være hjemme i rolige omgivelser mens Sharon holder et trygt og varmt fokus under healing.",
    prices: [{ duration: "45 minutter", price: "850 kr" }],
  },
  {
    title: "Felleshealing",
    text: "En rolig healingstund der flere får mulighet til å motta healing samtidig, uansett hvor du befinner deg. Du kan være hjemme i trygge omgivelser og ta imot healingen i ro.",
    prices: [{ duration: "30 minutter", price: "250 kr" }],
  },
  {
    title: "Spirituell veiledning",
    text: "En kombinasjon av enkel samtale og intuitivt energiarbeid, med rom for refleksjon, ro og kontakt med det som kjennes viktig for deg.",
    prices: [{ duration: "30 minutter", price: "650 kr" }],
  },
];

const Services = () => {
  return (
    <section className="services-section" id="tjenester">
      <div className="services-section__intro">
        <p className="services-section__eyebrow">Tjenester</p>
        <h2>Tjenester</h2>
        <p>
          Velg den formen som kjennes riktig for deg akkurat nå. Alle tjenester
          tilbys med en rolig, respektfull og trygg ramme.
        </p>
      </div>

      <div className="services-section__grid">
        {services.map((service) => (
          <article className="services-section__card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            {service.prices && (
              <dl
                className="services-section__prices"
                aria-label={`Priser for ${service.title}`}
              >
                {service.prices.map((option) => (
                  <div
                    className="services-section__price"
                    key={option.duration}
                  >
                    <dt>{option.duration}</dt>
                    <dd>{option.price}</dd>
                  </div>
                ))}
              </dl>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
