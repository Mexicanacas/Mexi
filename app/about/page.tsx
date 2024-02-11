import { CreditAndre } from '../core/components/CreditAndre';
import { Albums } from './components/Albums';

const About = () => (
  <div className="full-page-component justify-between bg-album">
    <Albums />
    <CreditAndre />
  </div>
);

export default About;
