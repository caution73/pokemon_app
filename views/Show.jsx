const React = require('react')

class Show extends React.Component {
    render() {
        const pokeDivStyle = {
            color: 'white',
            backgroundColor: 'gray',
            textAlign: 'center',
            paddingBottom: '10vh'
            };
        const pokemon = this.props.pokemon
        return(
            <div style={pokeDivStyle}>
                <a href="/pokemon">Back</a>
                <h1>Gotta Catch 'Em All</h1>
                <h2>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h2>
                <image src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} width='50%'/>
                               
            </div>
            
        )
    }
}

module.exports = Show

