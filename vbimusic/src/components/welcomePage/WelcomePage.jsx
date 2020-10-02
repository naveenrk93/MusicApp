import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'


// Welcome page
class WelcomePage extends Component{
    render(){
        return(
       <div>{/*<h1>Welcome {this.props.match.params.name}</h1>*/}
        <SongsList/>
        </div> 
        );
    }
}

class SongsList extends Component{
    constructor(){
        super()

    }
    render(){
        return(
            <div>
                <nav className="navbar justify-content-center navbar-dark bg-primary">
                <div className="navbar-brand"><button navbar-dark bg-primary><b>All Songs</b></button> &nbsp; <button><b>Playlist</b></button></div></nav>

            <div className="container">
            <table className= "table">
                <thead>
                    <tr>
                        <th> Song </th>
                        <th> Play Time </th>
                    </tr>
                </thead>
                <tbody>
                    { 
                /*  this.state.SongsList.map*/
                    <tr>
                        {/*insert songs through json */}
                        <td>{/*songs.name <br/>singers<br/> album<br/>*/}</td>
                    </tr>
                    }       
                </tbody>
            </table>

            <table className= "table" >
                <thead>
                    <tr>
                        <th> Playlists </th>
                        
                    </tr>
                </thead>
                <tbody>
                    { 
                /*  this.state.SongsList.map*/
                    <tr>
                        {/*insert songs through json */}
                        <td>{/*songs.name <br/>singers<br/> album<br/>*/}</td>
                    </tr>
                    }       
                </tbody>
            </table>
            </div>
            </div>
        );
    }
}

export default WelcomePage