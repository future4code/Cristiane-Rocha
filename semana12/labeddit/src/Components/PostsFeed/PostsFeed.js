import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Votes from '../Votes/Votes'
import {Card,CardHeader,CardMedia,CardContent,CardActions,Collapse,Avatar,IconButton,Typography} from '@material-ui/core';
import { IoHappyOutline,IoArrowRedoOutline} from "react-icons/io5";
import {ContentPost,IconBaloon,ButtonPostDetails,CommentNumber,BoxComment,VotesCount,BoxVotes,TitlePost,Username,PostContent} from './StyledPostFeed'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#ff6600',
  },
}));

const PostFeed = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
  	<PostContent>
     <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <Username>
            	{props.username.substr(0, 1).toUpperCase()}
            </Username>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <IoHappyOutline/>
          </IconButton>
        }
        title={props.username}
      />
      <CardContent>
        <TitlePost>{props.title}</TitlePost>
      </CardContent>
      <CardContent>
        <ContentPost>{props.text}</ContentPost>
      </CardContent>
      <CardActions disableSpacing>
          <BoxVotes>
						<Votes
							curtir={true}
							id={props.id}
						/>
						<Votes
							curtir={false}
							id={props.id}
						/>
						<VotesCount>{props.votesCount}</VotesCount>
						
					</BoxVotes>
        <BoxComment  onClick={() => props.openDetails(props.id)}>
        	<IconBaloon/>
         <CommentNumber>{props.commentsCount < 1 ? 'Nenhum ' : props.commentsCount}</CommentNumber>
        </BoxComment>
        <IconButton aria-label="share">
         <IoArrowRedoOutline/>
        </IconButton>
      </CardActions>
    </Card> 		
  	</PostContent>

  );
}

export default PostFeed