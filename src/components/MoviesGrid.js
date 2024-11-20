import harrypotter from "../assets/harrypotter.jpg";
import agak from "../assets/agak.jpg";
import captain from "../assets/captain.jpg";
import kong from "../assets/kong.jpg";
import ice from "../assets/ice.jpg";
import red from "../assets/red.jpg";
import spider from "../assets/spider.jpg";

const MoviesGrid = () => {
  const movies = [
    { title: "Harry Potter", image: harrypotter },
    { title: "Agak Laen", image: agak },
    { title: "Captain America", image: captain },
    { title: "Godzila VS Kong", image: kong },
    { title: "Ice Age", image: ice },
    { title: "Turning Red", image: red },
    { title: "Spider-Man", image: spider },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px", marginTop: "50px" }}>
      {movies.map((movie, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <div
            style={{
              width: "300px",
              height: "400px",
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <h3 style={{ fontSize: "1.2rem", marginTop: "10px" }}>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MoviesGrid;
