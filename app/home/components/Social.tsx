export const Social = () => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl md:text-4xl">Los Mexicanacas!</h1>
      <div className="flex justify-around text-4xl">
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
    </section>
  );
};
