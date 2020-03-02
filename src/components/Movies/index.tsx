import React, {useEffect, useState} from 'react'

import {CircularProgress} from "@material-ui/core";
import Movie from './Movie/index';
import './style.css'
const API_KEY = '8028ed55';
const series = ['star wars', 'avengers', 'harry potter'];

type Props = {
    movies: any
    setMovies: any
    setTempMovies: any
}

type Movie = {
    imdbID: string
    image: string
    title: string
    year: string
}
//var InfiniteScroll = require('infinite-scroll');

const Movies: React.FC<Props> = props => {

    useEffect(() => {
        const promises = series.map(series => {
            //Fetch movies
            return fetch('http://www.omdbapi.com/?s=' + encodeURIComponent(series) + '&apikey=' + API_KEY + '&page=1')
                .then(res => res.json())
        });

        Promise.all(promises).then((movies: any) => {
            const updatedMovies: any = movies.map((movie: any) => movie.Search).flat(2).map(
                (movie:any) => ({
                    title: movie.Title,
                    year: movie.Year,
                    image: movie.Poster,
                    imdb: movie.imdbID
            }));
            props.setMovies(updatedMovies);
            props.setTempMovies(updatedMovies)
        })

    }, []);

    /**
    var infScroll = new InfiniteScroll( '.container', {
        // options...
    });
    **/

    if (props.movies.length===0) {
        return <h4>No Results</h4>
        /**
        return <div className="loader">
            <CircularProgress/>
        </div>
         **/
    }

    let myDict = new Map();
    console.log(props.movies)

    return <div className="movies">
        {props.movies.map((movie:any) => {
            console.log(movie);
            //There are potentially duplicate movies returned, so we want to exclude them
            if (!myDict.has(movie.imdb) && movie.image !== 'N/A') {
                myDict.set(movie.imdb, movie);
                console.log(movie.imdb);
                //Display movies
                return <Movie
                    key={movie.imdb}
                    title={movie.title}
                    year={movie.year}
                    image={movie.image}
                />
            }
            return false
        })
        }
        </div>
};

export default Movies
