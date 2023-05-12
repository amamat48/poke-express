const React = require('react')

class Show extends React.Component {

    render () {
        const { pokemon } = this.props
        const modifiedPokemon = { ...pokemon, img: pokemon.img + ".jpg" }
        return (
            <div>
                <h1>Gotta catch em All!!</h1>
                <h2>{modifiedPokemon.name}</h2>
                <img src={modifiedPokemon.img} alt={modifiedPokemon.name}  />

            </div>
        )
    }
}

module.exports = Show