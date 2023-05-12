const React = require('react');

    class Index extends React.Component {
      render() {
        const { pokemon } = this.props

        const updatedPokemon = pokemon.map(pokemon => {
            const modifiedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
            return {
                ...pokemon, // gets all of the original objects and properties but just modifies the name property
                name: modifiedName
            }
        })




          return (
                  <div>
                      <h1>Pokemon Index Page</h1>
                      <ul>
                        {updatedPokemon.map((pokemon, i) => {
                            return (
                                <li><a href={`/pokemon/${i}`}>{pokemon.name}</a></li>
                            )
                        })}
                      </ul>
                  </div>
          )
      }
    }
    module.exports = Index