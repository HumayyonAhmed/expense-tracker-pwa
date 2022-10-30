import { AppBar, createStyles, Fab, IconButton,  makeStyles, Theme, Toolbar } from '@material-ui/core'
import { AccountBalanceWallet, Add, History, Home, Person } from '@material-ui/icons'
import React, { useState } from 'react'
import AddTransaction from './AddTransaction';

const useStyles = makeStyles((theme: Theme) =>
createStyles({appBar: {
  top: 'auto',
  bottom: 0,
},
grow: {
  flexGrow: 1,
},
fabButton: {
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
},
topBar: {
    position: 'relative',
}
}));

export default function BottomBar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <>
        <AddTransaction open={open} classes={classes} close={handleClose}/>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <Home />
          </IconButton>
          <IconButton color="inherit">
            <History />
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={handleClickOpen}>
            <Add />
          </Fab>
          <div className={classes.grow}/>
          <IconButton color="inherit">
            <AccountBalanceWallet />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <Person />
          </IconButton>
        </Toolbar>
      </AppBar>
      </>
    )
}
