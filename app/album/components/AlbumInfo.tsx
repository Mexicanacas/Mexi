import { FC } from 'react';

type Props = {
  title: string;
  tracks: string[];
};

export const AlbumInfo: FC<Props> = ({ title, tracks }) => (
  <section className="bg-mexi-black bg-opacity-50 p-4">
    <h2>{title}</h2>
    <ol>
      {tracks.map((track) => (
        <li key={track}>
          <h3>{track}</h3>
        </li>
      ))}
    </ol>
  </section>
);
