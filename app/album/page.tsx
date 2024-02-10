import { AlbumInfo } from './components/AlbumInfo';
import { AlbumCover } from './components/AlbumCover';
import { CreditAndre } from '../core/components/CreditAndre';

const ElPeTracks = [
  'Yo Soy El Aventurero',
  "Livin' la Vida Loca",
  '¡Aserejito!',
];

const PlataTracks = [
  'Fireball (feat. Flo Ryan)',
  'Yo No Sé',
  "Gasolina (feat. Lil' Jake",
];

const Album = () => (
  <div className="full-page-component min-h-screen justify-between bg-album">
    <div className="mt-28 grid grid-cols-1 justify-items-center space-x-12 space-y-12 align-middle md:grid-cols-2">
      <AlbumCover
        src="/el-pe-cover.jpg"
        alt="Cover for utgivelsen El Pé"
        credit="Grafikk av Lovinda Ødegården"
      />
      <AlbumInfo title="El Pé" tracks={ElPeTracks} />
      <AlbumCover
        src="/plata-cover.png"
        alt="Cover for utgivelsen Plata"
        credit="Grafikk av Ole Bøe Andreasen"
      />
      <AlbumInfo title="Plata" tracks={PlataTracks} />
    </div>
    <CreditAndre />
  </div>
);

export default Album;
