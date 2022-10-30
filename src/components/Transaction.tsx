import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core';
import { AttachMoney, Commute, Delete, Fastfood, Games, LocalHospital, ShoppingCart } from '@material-ui/icons';
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

interface Props {
    item: Transaction,
    classes: any
}
const Transaction: React.FC<Props> = ({ item, classes }) => {

    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar style={{background:
                                item.category === 0 ? 'green' : 
                    item.category === 1 ? 'purple' :
                    item.category === 2 ? 'black' :
                    item.category === 3 ? 'grey'  :
                    item.category === 4 ? 'orange' :
                    item.category === 5 ? 'red' : "" }}>

                    {item.category === 0 ? <AttachMoney /> : null}
                    {item.category === 1 ? <ShoppingCart /> : null}
                    {item.category === 2 ? <Games /> : null}
                    {item.category === 3 ? <Commute /> : null}
                    {item.category === 4 ? <Fastfood /> : null}
                    {item.category === 5 ? <LocalHospital /> : null}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={<Typography variant="body1" style={{ color: item.amount>0 ? 'green' : 'red' }}>{'$' + Math.abs(item.amount)}</Typography>}
                secondary={item.text}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(item.id)}>
                    <Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        // <li className={`${item.amount<0 ? "minus" : "plus"}`} key={item.id}>
        //     {item.text} <span>{item.amount}</span><button className="delete-btn" onClick={()=>deleteTransaction(item.id)}>x</button>
        // </li>
    )
}
export default Transaction;