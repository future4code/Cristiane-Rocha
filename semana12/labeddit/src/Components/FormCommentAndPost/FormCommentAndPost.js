import React from 'react';
import {TextField,Button} from '@material-ui/core';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import {myTheme} from '../../Assets/myTheme/myTheme'
import {FormStyle} from './StyledForm'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const FormCommentAndPost = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

 return(
 	<ThemeProvider theme={myTheme}>
			<FormStyle className={classes.root} noValidate autoComplete="off"  onSubmit={props.onSbubmitForm}>
					{props.showTitle ? <TextField
									          id="filled-textarea"
									          label="Titulo da Postagem"
									          placeholder="Titulo da Postagem" 
									          multiline
									          value={props.title}
									          color="primary"
									          onChange={props.handdleTitle}
							       		 /> : ''}

					<TextField
				          id="filled-textarea"
				          label="Postagem"
				          placeholder={props.showTitle ? 'Postagem' : 'Comentário'} 
				          multiline
				          rows={7}
				          color="primary"
				          value={props.text}
				          onChange={props.handdleText}
		       		 />
		       	<Button type="submit" variant="contained" color="primary">
				  Postar
				</Button>
			</FormStyle>
	</ThemeProvider>
		)
}
export default FormCommentAndPost