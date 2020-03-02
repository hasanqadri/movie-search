import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'bootstrap-select';

type Props = {

}

const genresOptions = [
    {
        key: 'Action',
        text: 'Action',
        value: 'Action',
        image: {avatar: true, src: './images/action.png'}
    },
    {   key: 'Comedy',
        text: 'Comedy',
        value: 'Comedy',
        image: { avatar: false, src: './images/comedy.png' }
    }];

const Genres:  React.FC<Props> = props => {
    return <></>
};


export default Genres
