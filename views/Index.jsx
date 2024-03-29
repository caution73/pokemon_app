const React = require('react')

class Index extends React.Component {
    render() {
        const pokeDivStyle = {
            color: 'white',
            backgroundColor: 'gray',
            textAlign: 'center',
            paddingBottom: '10vh'
            };
        const liStyle = {
            listStyleType: 'none'
        }
        const {pokemon} = this.props
        return(
            <div style={pokeDivStyle}>
                <h1>See All The Pokemon!</h1>
                <ul>
                    {pokemon.map((poke, index) => {
                        let capPokemon = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
                        return(
                            <li key={index} style={liStyle}><a href={`/pokemon/${poke._id}`}>{capPokemon}</a></li>
                    )
                })}
                </ul>
                <a href="/pokemon/new">Add a pokemon to the list!</a>
            </div>
            
            
        )
    }
}

module.exports = Index