import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';
import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import 'fontsource-roboto';
import BottomBar from './components/BottomBar';
import firebase from './firebase';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0079ff',
    },
    secondary: {
      main: red[600],
    }
  },
  
})

function App() {
  
  useEffect(() => {
    const messaging = firebase.messaging();
    messaging.getToken().then((token)=>{
      console.log('Token: ', token);
    })
    .catch(err=>{
      console.log("Error: ", err);
    })
  });
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Container maxWidth="xs">
          <Header/>
          <Balance />
          <br/>
          <IncomeExpenses/>
          <br/>
          <TransactionList/>
          <BottomBar/>
      </Container>
      </GlobalProvider>
      </ThemeProvider>
  );
}

export default App;
