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
        <a href="tel:+4790802054">Telefon: +47 908 02 054</a>

        <a href="mailto:healing_sharon1@outlook.com">
          E-post: healing_sharon1@outlook.com
        </a>

        <a
          className="contact-section__button"
          href="mailto:healing_sharon1@outlook.com"
        >
          Send melding
        </a>
      </div>
    </section>
  );
};

export default Contact;
