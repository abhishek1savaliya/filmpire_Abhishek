import React,{useEffect} from 'react'
import {Divider,List,ListItem,Typography,ListItemTest,ListItemButton ,ListSubheader,ListItemIcon,Box,CircularProgress, ListItemText} from '@mui/material';
import { Link } from 'react-router-dom';
import {useTheme} from '@mui/styles'
import useStyles from './styles'
import {useGetGenresQuery} from '../../services/TMDB' 
import genreIcons from '../../assets/genres/index'



const categories = [
    {label:'Popular',value:'popular'},
    {label:'Top Rated',value:'top_rated'},
    {label:'Upcoming',value:'upcoming'}
];


const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = ({setMobaileOpen}) => {

const theme = useTheme();
const classes = useStyles();

const {data,isFetching} = useGetGenresQuery();
  console.log(data);

  return (
   <>
    <Link to='/' className={classes.imageLink}>
        <img classname={classes.image}  src={theme.palette.mode==='light' ? redLogo : blueLogo} 
            alt = 'Filmpire Logo'
        />
    </Link>
    <Divider />
    <List>  
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({label,value})=>(
            <Link key={value} className={classes.links} to="/">
                <ListItem onClick={()=> {}} ListItemButton>
                     <ListItemIcon>
                        <img src={genreIcons[label.toLowerCase()]} alt='genre' className={classes.genreImages} height={30} />
                     </ListItemIcon>
                     <ListItemText primary={label} />
                </ListItem>
            </Link>
        ))}
    </List>
    <Divider />
    <List>  
        <ListSubheader>Genres</ListSubheader>
        { isFetching ? (
            <Box display='flex' justifyContent='center'>
            <CircularProgress />
          </Box>
        ) : data.genres.map(({name,id})=>(
            <Link key={name} className={classes.links} to="/">
                <ListItem onClick={()=> {}} ListItemButton>
                <ListItemIcon>
                        <img src={genreIcons[name.toLowerCase()]} alt='genre' className={classes.genreImages} height={30} />
                     </ListItemIcon>
                     <ListItemText primary={name} />
                </ListItem>
            </Link>
        ))}
    </List>


   </>
  )
}

export default Sidebar
