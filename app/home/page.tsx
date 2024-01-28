import { About } from './components/About';
import { PromoVideo } from './components/PromoVideo';

import './home.css';

export default function Home() {
  return (
    <div>
      <div className="full-page-component justify-end bg-homepage p-12">
        <About />
      </div>
      <PromoVideo />
    </div>
  );
}
