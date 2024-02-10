import { Social } from './components/Social';
import { PromoVideo } from './components/PromoVideo';

import './home.css';
import { CreditAndre } from '../core/components/CreditAndre';

export default function Home() {
  return (
    <div>
      <div className="full-page-component justify-end bg-homepage p-12">
        <CreditAndre />
        <Social />
      </div>
      <PromoVideo />
    </div>
  );
}
