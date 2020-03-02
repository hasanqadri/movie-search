import React, {useState} from 'react'
import {AppBar, createStyles, fade, Theme} from '@material-ui/core'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import {Search as SearchIcon} from '@material-ui/icons'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Genres from './Genre/index';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: 'relative',
            float: 'right',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.black, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.black, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
            top: '30px',

        },
        searchIcon: {
            width: theme.spacing(7),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: 200,
            },
        },
        title: {
            fontFamily: "Arial Black",
        },
    })
);

type Props = {
    movies: any
    setMovies: any
}

const Header: React.FC<Props> = props => {

    const styles = useStyles();
    const [inputVal, setInputVal] = useState<string>('')

    function updateMovies(search: string) {
        setInputVal(search)
        props.setMovies(props.movies.filter((movie:any)=>movie.title.toLowerCase().includes(search.toLowerCase())))
    }

    return (<AppBar position="static"  style={{ background: '#A9A9A9' }}>
        <Toolbar>
            <Typography variant="h3" noWrap>
                <div className={styles.title} style={{color: '#000000'}}>
                Search <br />
                <div>Results</div>
                </div>
            </Typography>
            <div>
                <div className={styles.search}>
                    <SearchIcon className={styles.searchIcon}/>
                    <InputBase placeholder="Search…"
                               classes={{
                                   root: styles.inputRoot,
                                   input: styles.inputInput,
                               }}
                               onChange={e => updateMovies(e.target.value)}
                               value={inputVal}
                               inputProps={{ 'aria-label': 'search' }}/>
                </div>
            </div>
            <div style={{flexGrow: 1}}/>
            <div>
                <Genres />
            </div>
        </Toolbar>
    </AppBar>)
};

export default Header
