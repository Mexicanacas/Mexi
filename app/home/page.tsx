import { Social } from './components/Social';
import { PromoVideo } from './components/PromoVideo';

import { CreditAndre } from '../core/components/CreditAndre';
import { BackgroundImage } from '../core/components/BackgroundImage';

export default function Home() {
  return (
    <div>
      <BackgroundImage
        alt="Mexicanacas"
        src="/homepage-image.jpg"
      />
      <div className="full-page-component justify-end p-12">
        <CreditAndre />
        <Social />
      </div>
      <PromoVideo />
    </div>
  );
}
