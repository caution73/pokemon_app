const React = require('react')

class Show extends React.Component {
    render() {
        const {pokemon} = this.props
        return(
            <div style={pokeDivStyle}>
                <h1>See All The Pokemon!</h1>
                <ul>
                    {pokemon.map((poke, index) => {
                        let capPokemon = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
                        return(
                            <li key={index} style={liStyle}>{capPokemon}</li>
                    )
                })}
                </ul>
                
            </div>
            
        )
    }
}

module.exports = Show