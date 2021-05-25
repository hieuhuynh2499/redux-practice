import React from 'react'
import {connect} from 'react-redux'
function Home(props) {
    const {gifs} = props;

    return (
        <div className="home">
           {
            gifs.map((gif) =>(
                <div className="gif" key={gif.id}>
                    <img src={gif.url} alt="dgjdfhg"/>
                </div>
               ))
           }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        gifs: state.gif.data
    }
}

export default connect(mapStateToProps)(Home)
