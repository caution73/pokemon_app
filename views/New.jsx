const React = require('react')

class New extends React.Component {
    render() {
        return(
            <div>
                <h1>Let's add a pokemon!</h1>
                <form action="/pokemon" method="POST">
                    Name: <input type="text" name="name" />
                    {/* Img: <input type='text' name="img" /> */}
                    <input type="submit" name="" value="Add pokemon" />
                </form>
            </div>
        )
    }
}

module.exports = New

