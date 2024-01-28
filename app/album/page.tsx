import { AlbumInfo } from './components/AlbumInfo';
import { AlbumCover } from './components/AlbumCover';

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
  <div className="full-page-component min-h-screen justify-center bg-album">
    <div className="grid grid-cols-1 justify-items-center space-x-12 space-y-12 align-middle md:grid-cols-2">
      <AlbumCover src="/el-pe-cover.jpg" alt="Cover for utgivelsen El Pé" />
      <AlbumInfo title="El Pé" tracks={ElPeTracks} />
      <AlbumInfo title="Plata" tracks={PlataTracks} />
      <AlbumCover src="/plata-cover.png" alt="Cover for utgivelsen Plata" />
    </div>
  </div>
);

export default Album;
