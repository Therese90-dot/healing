import "./Services.css";

const services = [
  {
    title: "Fjernhealing",
    text: "En stund med nærvær, stillhet og healing. Du kan være hjemme å lande i rolige omgivelser og motta healing energi der du er mens Sharon holder et trygt og varmt fokus under healingen.",
    prices: [{ duration: "50 min", price: "950 kr" }],
  },
  {
    title: "Felleshealing",
    text: "En rolig healingstund der flere får mulighet til å motta healing samtidig, uansett hvor du befinner deg. Du kan være hjemme i trygge omgivelser og ta imot healingen i ro.",
    note: "Fast dato kommer i 2027",
    prices: [{ duration: "30 minutter", price: "250 kr" }],
  },
  {
    title: "Informasjon om åpen healingdag – kommer",
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
            {service.text && <p>{service.text}</p>}
            {service.note && (
              <p className="services-section__note">{service.note}</p>
            )}
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
