import './About.css';

const About = () => {
  return (
    <section className="about-section" id="om-healing">
      <div className="about-section__content">
        <p className="about-section__eyebrow">Et stille rom for deg</p>
        <h2>Om healing</h2>
        <p>
          Healing kan oppleves som en rolig stund hvor kroppen og sinnet får lov til å
          senke tempoet. Hos Healing Sharon handler det om å skape trygghet, nærvær
          og tid til seg selv, slik at du kan lande mykt i det som er her og nå.
        </p>
        <p>
          Mange søker healing når de lengter etter mer ro, balanse og energi i
          hverdagen. Det er en varm og intuitiv praksis som inviterer til stillhet,
          egenkontakt og en følelse av å bli møtt med respekt.
        </p>
      </div>

      <div className="about-section__content about-section__content--sharon" id="om-sharon">
        <p className="about-section__eyebrow">Mennesket bak</p>
        <h2>Om Sharon</h2>
        <p>
          Sharon er en rolig og intuitiv person som møter mennesker med varme,
          lyttende tilstedeværelse og omsorg. Hun ønsker å skape et trygt rom der
          du kan puste litt dypere, kjenne etter og få en pause fra kravene rundt deg.
        </p>
        <p>
          Hennes tilnærming er jordnær, myk og respektfull. Du blir møtt som du er,
          uten press, og med god tid til å finne tilbake til din egen indre ro.
        </p>
      </div>
    </section>
  );
};

export default About;
