import { CreditAndre } from '../core/components/CreditAndre';
import { Albums } from './components/Albums';
import { BackgroundImage } from '../core/components/BackgroundImage';

const About = () => (
  <div>
    <div className="bgWrap">
      <BackgroundImage
        alt="Mexicanacas"
        src="/album-image.jpg"
      />
    </div>
    <div className="full-page-component justify-between">
      <Albums />
      <CreditAndre />
    </div>
  </div>
);

export default About;
