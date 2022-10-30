import { Grid, Typography } from '@material-ui/core'
import { AccountBalanceWallet } from '@material-ui/icons'
import React from 'react'

export default function Header() {
    
    return (
            <Grid container spacing={1} justify="center" style={{color: 'white'}}>
                <Grid item>
                <AccountBalanceWallet fontSize="large"/>
                </Grid>
                <Grid item>
                <Typography variant="h5">Expense Tracker</Typography>
                </Grid>
                {/* <IconButton><MoreVert /></IconButton> */}
            </Grid>
    )
}
