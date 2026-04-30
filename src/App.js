import { useState } from "react";
import "./App.css";

function App() {
  const [lang, setLang] = useState("EN");

  return (
    <div>
      <div className="lang-toggle">
        <span
          className={lang === "IS" ? "lang-active" : "lang-inactive"}
          onClick={() => setLang("IS")}
        >
          IS
        </span>
        {" / "}
        <span
          className={lang === "EN" ? "lang-active" : "lang-inactive"}
          onClick={() => setLang("EN")}
        >
          EN
        </span>
      </div>

      {lang === "EN" ? (
        <div className="content">
          <h1 className="en-title">
            Do you want to show your work at Komum út í mínus 2026?
          </h1>

          <p className="en-intro">
            The curatorial team welcomes project proposals for Komum út í mínus
            2026! The festival will take place in Reykjavík on the 10th of
            October 2026 from 12:00 to 24:00. We invite submissions across a
            range of forms, such as performance, dance, visual art, sound and
            experimental art.
          </p>

          <h2 className="en-about-heading">About the festival</h2>
          <div className="description-row">
            <img
              className="description-image"
              src="/komumutiminus.opencall5.png"
              alt="About the festival"
            />
            <div className="description-text">
              <p className="en-about">
                Komum út í mínus (e. Lets end up at a loss) is a performance art
                festival created and curated by the three young artists Bertine
                Bertelsen Fadnes, Marta Akadottir and Leevi Mettinen. We met
                while studying dance and performance at Iceland Academy of the
                Arts and through shared experiences we identified a lack of
                grassroot platforms in Reykjavik. Therefore we created Komum út
                í mínus, an artist-led structure that supports experimentation,
                risk taking and the visibility of emerging voices.
              </p>
              <p className="en-about-pt2">
                The first edition of Komum út í mínus was actualized as a
                12-hour intensive festival that took place at Tóma Rýmið in
                autumn 2025. It gathered approximately 30 artists and 200
                visitors, demonstrating both a strong audience interest and a
                pressing need for alternative performance platforms.
              </p>
            </div>
          </div>
<div className="trailer-row">
  <p className="en-trailer">Trailer:</p>
  <a href="https://www.youtube.com/watch?v=HWD1Mq2f__o" target="_blank" rel="noreferrer">
    <p>https://www.youtube.com/watch?v=HWD1Mq2f__o</p>
  </a>
</div>
          <p className="en-loss">
            In 2025 we ended up at a 13.439 ISK loss.
            <p className="en-loss-pt2">How much will it be this year?</p>
          </p>
          <h2 className="en-offer-heading">What we offer:</h2>
          <p className="en-offer-tech">Tech</p>
          <p className="en-offer-docs">Documentation</p>
          <p className="en-offer-production">Production support</p>
          <p className="en-offer-note">
            Thanks to Reykjavíkurborg we have some money for production support.
            We don't have money for travel or accommodation.
          </p>
          <h2 className="en-apply-heading">To apply</h2>
          <p className="en-apply-email">
            Send a mail to komumutiminus@gmail.com with
          </p>
          <p className="en-apply-proposal">Project proposal (1 page max)</p>
          <p className="en-apply-cv">CV</p>
          <h3 className="en-deadline">By 30. May</h3>
        </div>
      ) : (
        <div className="content">
          <h1 className="is-title">
            Viltu sýna verkið þitt á Komum út í mínus 2026?
          </h1>
          <p className="is-intro">
            Listræna teymi Komum út í mínus auglýsir eftir verkefnatillögum
            fyrir hátíðina 2026!
          </p>
          <p className="is-intro-pt2">
            Hátíðin fer fram í Reykjavík þann 10. október 2026 frá kl. 12:00 til
            24:00. Við tökum á móti verkum þvert á miðla, svo sem gjörningalist,
            dans, myndlist, hljóðlist og öðrum tilraunum.
          </p>
          <h2 className="is-about-heading">Um hátíðina</h2>
          <div className="description-row">
            <img
              className="description-image"
              src="/komumutiminus.opencall5.png"
              alt="Um hátíðina"
            />
            <div className="description-text">
              <p className="is-about">
                Komum út í mínus er sviðslistahátíð sem er stofnuð af þremur
                ungum listamönnum: Bertine Bertelsen Fadnes, Mörtu Ákadóttur og
                Leevi Mettinen sem kynntumst öll í Listaháskóla Íslands. Við
                höfum öll tekið eftir skort á grasrótar vettvangi fyrir
                sviðslistir í Reykjavík og þess vegna stofnuðum við Komum út í
                mínus, vettvang sem styður við tilraunir, áhættur og sýnileika
                nýrra radda.
              </p>
              <p className="is-about-pt2">
                Hátíðin var haldin í fyrsta sinn í Tóma Rýminu haustið 2025 og
                stóð yfir í 12 klukkustundir. Þar komu saman um 30 listamenn og
                200 gestir, sem sýndi bæði mikinn áhuga áhorfenda og brýna þörf
                fyrir vettvang af þessum toga.
              </p>
            </div>
          </div>
          <div className="trailer-row">
            <p className="is-trailer">Trailer:</p>
            <a href="https://www.youtube.com/watch?v=HWD1Mq2f__o" target="_blank" rel="noreferrer">
              <p>https://www.youtube.com/watch?v=HWD1Mq2f__o</p>
            </a>
          </div>
          <p className="is-loss">
            Árið 2025 enduðum við í 13.439 kr. mínus.
            <p className="is-loss-pt2">Hversu mikið verður það í ár?</p>
          </p>
          <h2 className="is-offer-heading">Það sem við bjóðum upp á:</h2>
          <p className="is-offer-tech">Tækniaðstoð</p>
          <p className="is-offer-docs">Upptöku/myndefni</p>
          <p className="is-offer-production">Framleiðsluaðstoð</p>
          <p className="is-offer-note">
            Þökk sé Reykjavíkurborg eigum við pening fyrir framleiðslu stuðning.
            Við höfum við ekki fjármagn/eigum ekki pening fyrir ferðakostnað eða
            gistingu.
          </p>
          <h2 className="is-apply-heading">Umsókn:</h2>
          <p className="is-apply-email">
            Sendu tölvupóst á komumutiminus@gmail.com með:
          </p>
          <p className="is-apply-proposal">
            Tillögu að/af verkefni (hámark 1 blaðsíða)
          </p>
          <p className="is-apply-cv">Ferilskrá</p>
          <h3 className="is-deadline">Frestur til að sækja um: 30. maí</h3>
          <p className="is-funded">
            Verkefnið er styrkt af menningar-, íþrótta- og tómstundaráði
            Reykjavíkur.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
