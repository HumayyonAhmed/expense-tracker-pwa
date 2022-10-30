import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { ArrowDownwardRounded, ArrowUpwardRounded } from '@material-ui/icons';
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function IncomeExpenses() {

  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(item => item.amount);

  const Income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed();
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed();

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={5}>
        <Paper elevation={1} style={{padding: '5px'}}>
        <Box textAlign="center">
        <ArrowDownwardRounded fontSize="large" style={{color: 'darkgreen', background: 'lightgreen', borderRadius: '50px', padding: '5px'}}/>
        <Typography variant="subtitle2">Income</Typography>
        <Typography variant="h5">${Income}</Typography>
        </Box>
      </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={1} style={{padding: '5px'}}>
        <Box textAlign="center">
        <ArrowUpwardRounded fontSize="large" style={{color: 'darkred', background: '#ffcccb', borderRadius: '50px', padding: '5px'}}/>
        <Typography variant="subtitle2">Expense</Typography>
        <Typography variant="h5">${Math.abs(Number.parseInt(expense))}</Typography>
        </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}
