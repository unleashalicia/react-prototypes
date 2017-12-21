import React, {Component} from 'react';
import Movie from './movie';
import axios from 'axios';

class MovieContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        const BASE_URL = "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json";
        axios.get(BASE_URL).then((resp)=>{
            this.setState({
                movies: resp.data.feed.entry
            });
        });
    }

    render(){
        console.log(this.state);
        return (
            <div>
                <h2>Movie Container</h2>
                <Movie />
            </div>
        );
    }
}

export default MovieContainer;