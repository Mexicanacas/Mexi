import { CreditAndre } from '../core/components/CreditAndre';

const Booking = () => {
  return (
    <div className="full-page-component justify-between bg-booking p-12">
      <div></div> {/* Empty tag that makes content place itself nicely */}
      <section className=" flex flex-col gap-4 bg-mexi-black bg-opacity-50 p-4 md:mx-20">
        <h1>Booking</h1>
        <p>
          Vi er et band som spiller akustisk latin fusion-musikk - med
          utgangspunkt i mariachi-kulturen fra Mexico. De siste årene har vi
          spilt på bryllup, firmafester og konferanser. Vi er sultne på mer, da
          vi sparer opp til den store Mexico-turnéen en gang i en lys fremtid.
        </p>
        <p>
          Vi er ca. 30 aktive medlemmer, og kan spille alt fra kvintetter (5
          personer) til fullt band / orkester. På de fleste spilleoppdrag er vi
          ca. 9 - 14 deltakere. Vanligvis er vi et pop-up-band med trådløse
          forsterkere, og spiller i typisk 15 - 20 minutter, ofte for å sparke i
          gang en fest. Andre ganger har vi full lydprøve med konsert-rigg.
        </p>
        <p>
          Kontakt oss på <a href="mailto:oslo@mexi.no">oslo@mexi.no</a> eller{' '}
          <a href="mailto:trondheim@mexi.no">trondheim@mexi.no</a>.
        </p>
      </section>
      <CreditAndre />
    </div>
  );
};

export default Booking;
