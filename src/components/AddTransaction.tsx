import { AppBar, Button, Dialog, DialogContent, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Toolbar, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons';
import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

interface Props{
    classes: any,
    open: boolean,
    close: () => void,
}

const AddTransaction: React.FC<Props> = ({classes, open, close}) => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState(0);
    const [type, setType] = useState(0)

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = () => {
        addTransaction({
            id: Date.now(),
            text: text,
            amount: type===0 ? +amount : Math.abs(amount)*-1,
            category: category
        });
        setText("");
        setAmount(0);
        setCategory(0);
        setType(0);
        close();
    }

    return (
        <>
         <Dialog fullScreen open={open} onClose={close} aria-labelledby="form-dialog-title">
            <AppBar color="primary" className={classes.topBar}>
        <Toolbar>
            <IconButton edge="start" color="inherit" onClick={close} aria-label="close">
              <Close />
            </IconButton>
            <Typography variant="h6">
              Add New Transaction
            </Typography>
            <div className={classes.grow}/>
            <Button color="inherit" onClick={onSubmit}>
              Save
            </Button>
          </Toolbar>
          </AppBar>
        <DialogContent>
          
          <TextField
            id="text"
            margin="dense"
            variant="filled"
            label="Description"
            type="text"
            fullWidth
            onChange={e=>{setText(e.target.value as string)}}
          />
          <TextField
            id="amount"
            margin="dense"
            variant="filled"
            label="Amount"
            type="number"
            fullWidth
            onChange={e=>{setAmount(Number.parseInt(e.target.value as string))}}
          />
           <FormControl variant="filled" margin="dense" fullWidth>
        <InputLabel id="cType">Type</InputLabel>
        <Select
          labelId="cType"
          id="tType"
          value={type}
          onChange={e=>setType(e.target.value as number)}
        >
          <MenuItem value={0}>Income</MenuItem>
          <MenuItem value={1}>Expense</MenuItem>
        </Select>
      </FormControl>
           <FormControl variant="filled" margin="dense" fullWidth>
        <InputLabel id="cLabel">Category</InputLabel>
        <Select
          labelId="cLabel"
          id="categoryId"
          value={category}
          onChange={e=>setCategory(e.target.value as number)}
        >
          <MenuItem value={0}>Default</MenuItem>
          <MenuItem value={1}>Lifestyle</MenuItem>
          <MenuItem value={2}>Entertainment</MenuItem>
          <MenuItem value={3}>Transportation</MenuItem>
          <MenuItem value={4}>Food</MenuItem>
          <MenuItem value={5}>Medical and Health Care</MenuItem>
        </Select>
      </FormControl>
        </DialogContent>
      </Dialog>
            {/* <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} required onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} required onChange={(e) => setAmount((Number.parseInt(e.target.value)))} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form> */}
        </>
    )
}

export default AddTransaction;