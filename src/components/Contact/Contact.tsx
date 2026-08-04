import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="kontakt">
      <div className="contact-section__content">
        <p className="contact-section__eyebrow">Ta kontakt</p>
        <h2>Kontakt</h2>
        <p>
          Kjenner du at dette kan være noe for deg, er du varmt velkommen til å
          ta kontakt. Send en melding med det du lurer på, eller fortell kort
          hva du ønsker mer ro og støtte rundt.
        </p>
      </div>

      <div className="contact-section__details">
        <a href="tel:+4700000000">Telefon: +47 00 00 00 00</a>
        <a href="mailto:kontakt@healingsharon.no">
          E-post: Testside@healingsharon.no
        </a>
        <a
          className="contact-section__button"
          href="mailto:kontakt@healingsharon.no"
        >
          Send melding
        </a>
      </div>
    </section>
  );
};

export default Contact;
