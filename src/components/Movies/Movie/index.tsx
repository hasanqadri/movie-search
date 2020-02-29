import React from 'react'
import './style.css'

type Props = {
    title: string
    year: string
    image: string
}

const Movie: React.FC<Props> = props => {
    return <div className="Movie">
                <img src={props.image} />
                <i>Movie</i>
                <h2> {props.title} </h2>

    </div>
};

export default Movie
