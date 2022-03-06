import React, { useState ,useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import wordsToNumbers from 'words-to-numbers';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';

const alanKey = ''; // Highly suggest you dont share your API key on github <3

const App = () =>{
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, SetActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => { 
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                    SetActiveArticle(-1);
                } else if(command  === 'highlight'){
                    SetActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if(command === 'open'){
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy : true}) : number;
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > articles.length) {
                        alanBtn().playText('Please try that again...');
                      } else if (article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                      } else {
                        alanBtn().playText('Please try that again...');
                      }
                }
            },
        });
    }, []);
    return(
        <div>
           <div>
               <h1 id='header'>Alan AI Virtual Assistant</h1>
               <p id='ped'>Created By Sadiqur Sakib</p>
           </div>
            <div className={classes.logoContainer}> 
                <img src="https://avatars.githubusercontent.com/u/54960780?s=200&v=4" className={classes.alanLogo} alt="alan logo"/>
            </div>
            <NewsCards articles={newsArticles} activeArticle = {activeArticle} />
        </div>
    );
}

export default App;  
