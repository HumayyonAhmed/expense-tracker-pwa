import { createStyles, Grid, List, ListSubheader, makeStyles, Theme, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const useStyles = makeStyles((theme: Theme) =>
createStyles({
list: {
  background: theme.palette.background.paper,
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: '4px',
  paddingBottom: '20px',
},
icon:{
  background: 'lightgreen',
}
}));

export default function TransactionList() {
  const classes = useStyles();

  const { transactions } = useContext(GlobalContext)

  return (
    <Grid container direction="row" style={{marginBottom: '100px'}}>
      <Grid item xs={12}>
        <List className={classes.list} subheader={<ListSubheader>Transactions</ListSubheader>}>
        {transactions.length > 0 ? 
        transactions.map(item=>(
          <Transaction item={item} key={item.id} classes={classes} />
        ))
        : <Typography variant="subtitle2" color="textSecondary" style={{textAlign: 'center'}}><em>No Transactions made yet.</em></Typography>
}
        </List>
      </Grid>
    </Grid>
    // <>
    //   <h3>History</h3>
    //   <ul className="list">
    //     {transactions.map(item => (
    //       <Transaction item={item} key={item.id} />
    //     ))}
    //   </ul>
    // </>
  )
}
