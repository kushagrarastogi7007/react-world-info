import countryFacts from '../api/countryData.json'

const About = () => {
  return (
    <section className='section-about container'>
        <h2 className="container-title">
          Here are the interesting Facts
          <br />
          we are proud of
        </h2>

        <div className="gradient-cards">

          {countryFacts.map((country) => {
            return <div className="card" key={country.id}>
              <div className="container-card bg-blue-box">
                <p className='card-title'>{country.countryName}</p>
                <p>
                  <span className="card-description">Capital:</span>
                  {country.capital}
                </p>
                <p>
                  <span className="card-description">Pupulation:</span>
                  {country.population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact:</span>
                  {country.interestingFact}
                </p>
              </div>
            </div>
          })}

          
          
        </div>
    </section>
  )
}

export default About

 // {
    //   "id": 1,
    //   "countryName": "World",
    //   "capital": "No Capital",
    //   "population": "Null",
    //   "interestingFact": "There are 195 countries in the world today, including 193 United Nations member states and 2 observer states."
    // },