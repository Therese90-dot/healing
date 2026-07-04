import './Services.css';

const services = [
  {
    title: 'Healingtime',
    text: 'En rolig stund med nærvær, stillhet og myk energi. Timen gir deg tid til å lande, puste og vende oppmerksomheten innover.',
  },
  {
    title: 'Fjernhealing',
    text: 'For deg som ønsker en energetisk stund på avstand. Du kan være hjemme i rolige omgivelser mens Sharon holder et trygt og varmt fokus.',
  },
  {
    title: 'Samtale og energi-balanse',
    text: 'En kombinasjon av enkel samtale og intuitivt energiarbeid, med rom for refleksjon, ro og kontakt med det som kjennes viktig for deg.',
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
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
