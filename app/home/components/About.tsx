export const About = () => {
  return (
    <div>
      <h1 className="text-4xl">Vi er Los Mexicanacas!</h1>
      <div className="text-4xl flex justify-around">
        <a href="https://www.instagram.com/mexicanacas?igsh=b3B5N3ZycnI0YzBx">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="https://open.spotify.com/artist/2I4RX8u3uyBXG0kxvhzLui?si=AULMUxW9SGeEl_sQCOWy8Q">
          <i className="fa-brands fa-spotify" />
        </a>
        <a href="https://www.facebook.com/losmexicanacas">
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a href="mailto:taco@mexi.no">
          <i className="fa-solid fa-envelope" />
        </a>
      </div>
    </div>
  );
};
