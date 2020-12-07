import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './components/Main/Main'

import {Button,ThemeProvider,createMuiTheme} from '@material-ui/core';


class App extends React.Component{
	theme = createMuiTheme({
	  palette: {
	    primary: {
	      main: '#ed174d',
	    },
	    secondary: {
	      main: '#fff',
	    },
	  },
	});
  render(){
    return (
              <ThemeProvider theme={this.theme}>
                 
                <Main/>
              </ThemeProvider>
           );
  }
  
}

export default App;
