import { Grid, Typography, Paper } from '@material-ui/core';
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Balance() {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(item => item.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed();


    return (
        <Grid container justify="center">
            <Grid item xs={10} style={{marginTop: '10px'}}>
                <Paper elevation={1} style={{textAlign: 'center', borderRadius: '10px', padding: '10px 0px'}}>
                    <Typography variant="subtitle1">
                        Total Balance
                    </Typography>
                    <Typography variant="h5" style={{fontWeight: 'bold'}}>
                        ${total}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}
