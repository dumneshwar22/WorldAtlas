import countryData from "../api/countryData.json";
export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>

      <div className="gradient-cards">
        {countryData.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital : </span>{" "}
                  <span className="text-white"> {capital} </span>
                </p>
                <p>
                  <span className="card-description">Population :</span>{" "}
                  <span className="text-white"> {population} </span>
                </p>
                <p>
                  <span className="card-description">Interesting Fact : </span>{" "}
                  <span className="text-white"> {interestingFact} </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
