import react from 'react'
import { makeStyles,ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export const myTheme = createMuiTheme({
	palette:{
		primary:{
			main:'#ff6600'
		},
		secondary:{
			main: '#ffd016'
		}
	},
	 typography: {
    fontFamily: [
      'Montserrat Alternates',
    ].join(','),
  },
})
