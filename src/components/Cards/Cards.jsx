import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import style from './Cards.module.css';
import CountUp from 'react-countup'
const Cards =({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if (!confirmed){
        return 'Loading...'
    }
    return(
        <div className={style.container}>
            <Grid container spacing ={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected </Typography>
                        <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.5} separator=','/> </Typography>
                        <Typography color="textSecondary" >{new Date (lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Num of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered </Typography>
                        <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.5} separator=','/> </Typography>
                        <Typography color="textSecondary" >{new Date (lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Num of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>


                
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths </Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator=','/> </Typography>
                        <Typography color="textSecondary" >{new Date (lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Num of deaths cause by COVID-19</Typography>
                    </CardContent>
                </Grid>


            </Grid>
        </div>
    )
}

export default Cards;