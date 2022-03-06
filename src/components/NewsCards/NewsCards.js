import React from 'react';
import {Grid, Grow, Typography} from '@material-ui/core';

import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard';

const infoCards = [
    { color: '#AA14F0', title: 'Weather and Calender Functionality', info:'Weather across different locations, Weekly weather prediction, TimeZone ' ,text: 'What is the weather/date tommorow' },
    { color: '#14279B', title: 'Search News By Categories, Terms, Sources', info: 'Latest News, Business, Technology, CNN, IGN, Etc...', text: 'what\'s up with Russia' },
    { color: '#AA14F0', title: 'Ask to Solve Basic Math Calculations', info: 'Addition, Subtraction, Multiplication, Divison, Power, Cube/Squre Root', text: 'What is the cube root of 64' },
    { color: '#14279B', title: 'Translate Phrases Across Multiple Languages', info: 'Spanish, French, German, Chinese, Arabic, Russian, Etc...', text: 'How do you say "How are you" in French' },
];

const NewsCards = ({ articles, activeArticle }) => {
    const classes = useStyles();
    if(!articles.length){
        return (
            <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {infoCards.map((infoCard) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                        <div className={classes.card} style={{ backgroundColor: infoCard.color }}> 
                            <Typography variant='h5'>{infoCard.title}</Typography>
                            {infoCard.info ? (<Typography variant='h6'>Features:<br/>{infoCard.info}</Typography>) : null}
                            <Typography variant='h6'>Try Saying:<br /> <i>{infoCard.text}</i></Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Grow>
            
        );
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {articles.map((article,i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
                        <NewsCard article={article} activeArticle={activeArticle} i ={i} />
                    </Grid>
                ))} 

            </Grid>

        </Grow>
    )
}

export default NewsCards;