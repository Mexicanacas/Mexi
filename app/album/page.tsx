/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import './album.css';

const Album = () => (
  <div className="full-page-component album min-h-screen px-40 pt-56">
    <Image
      src="/el-pe-cover.jpg"
      alt="Cover for utgivelsen El Pé"
      height="250"
      width="250"
      className="shadow-md"
    />
    <section>
      <h2>El Pé - 2021</h2>
      <h3>Yo Soy El Aventurero</h3>
      <h3>Livin' la Vida Loca</h3>
      <h3>¡Aserejito!</h3>
    </section>
    <section>
      <h2>Plata - 2023</h2>
      <h3>Fireball</h3>
      <h3>Yo No Sé</h3>
      <h3>Gasolina</h3>
    </section>
    <Image
      src="/plata-cover.png"
      alt="Cover for utgivelsen Plata"
      height="250"
      width="250"
    />
  </div>
);

export default Album;
