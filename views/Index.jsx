const React = require('react')

class Index extends React.Component {
    render() {
        const pokeDivStyle = {
            color: 'white',
            backgroundColor: 'gray',
            textAlign: 'center'
            };
        const {pokemon} = this.props
        return(
            <div style={pokeDivStyle}>
                <h1>See All The Pokemon!</h1>
            </div>
            
        )
    }
}

module.exports = Index