import { Social } from './components/Social';
import { PromoVideo } from './components/PromoVideo';

import { CreditAndre } from '../core/components/CreditAndre';
import { BackgroundImage } from '../core/components/BackgroundImage';

export default function Home() {
  return (
    <div>
      <div className="bgWrap">
        <BackgroundImage
          alt="Mexicanacas"
          src="/homepage-image.jpg"
        />
      </div>
      <div className="full-page-component justify-end p-12">
        <CreditAndre />
        <Social />
      </div>
      <PromoVideo />
    </div>
  );
}
