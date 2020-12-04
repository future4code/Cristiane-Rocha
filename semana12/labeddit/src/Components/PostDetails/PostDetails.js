import react, {useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import {useRequest} from '../../useHooks/useRequest'
import {baseUrl} from '../../useHooks/baseUrl'
import FormCommentAndPost from '../FormCommentAndPost/FormCommentAndPost'
import {useInput} from '../../useHooks/useInput'
import axios from 'axios'
import Votes from '../Votes/Votes'
import {BoxPostAndVotes,BoxContentPost,BoxVotes,VotesCount,PostContent,BoxUsernameContent,IconBoxUsername,BoxUsername,Username,ContentPost,IconBaloon,ButtonPostDetails,PostItem,CommentNumber,BoxComment,TitlePost} from './StyledPostDetail'
import { IoReturnDownForwardOutline } from "react-icons/io5";
import { GrTopCorner } from "react-icons/gr";
import {Card,CardHeader,CardMedia,CardContent,CardActions,Collapse,Avatar,IconButton,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { IoHappyOutline,IoArrowRedoOutline} from "react-icons/io5";

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

const PostDetails = () => {
	const classes = useStyles();
	const pathParams = useParams()
	const urlBase = baseUrl()
	const [text,handdleText] = useInput()
	const [title,handdleTitle] = useInput()
	const token = localStorage.getItem('token')
	const data = useRequest(`${urlBase}/posts/${pathParams.id}`)
	
	const onSbubmitForm = (event) => {
		const body = {
				text: text
			}
		axios.post(`${urlBase}/posts/${pathParams.id}/comment`,body,{
			headers:{
				Authorization:token
			}
		})
		.then((res) => {
			console.log(res.data)
		})
		.catch((err) => {
			console.log(err)
		})

		event.preventDefault()
	}

	return(
			<div>
			{data.post === undefined ? <div>carregando...</div> : 
				<div>
					<PostContent>
						<Card className={classes.root}>
						<CardHeader
							avatar={
								<Avatar aria-label="recipe" className={classes.avatar}>
								<Username>
								{data.post.username.substr(0, 1).toUpperCase()}
								</Username>
								</Avatar>
							}
							action={
								<IconButton aria-label="settings">
								<IoHappyOutline/>
								</IconButton>
							}
							title={data.post.username}
						/>
						<CardContent>
							<TitlePost>{data.post.title}</TitlePost>
						</CardContent>
						<CardContent>
							<ContentPost>{data.post.text}</ContentPost>
						</CardContent>
						<CardActions disableSpacing>
							<BoxVotes>
								<Votes
									curtir={true}
									id={data.post.id}
								/>
								<Votes
									curtir={false}
									id={data.post.id}
								/>
								<VotesCount>{data.post.votesCount}</VotesCount>
							</BoxVotes>
							<IconButton aria-label="share">
								<IoArrowRedoOutline/>
							</IconButton>
						</CardActions>
					</Card>
					</PostContent>
					
					<h2>Commentários</h2>
					<PostContent>
						{data.post.comments === undefined ? <div>carregando...</div> : data.post.comments.map((comment) => {
								return(
									<PostItem>
										<Card className={classes.root}>
										<CardHeader
											avatar={
												<Avatar aria-label="recipe" className={classes.avatar}>
													<Username>
														{comment.username.substr(0, 1).toUpperCase()}
													</Username>
												</Avatar>
											}
											action={
												<IconButton aria-label="settings">
													<IoHappyOutline/>
												</IconButton>
											}
											title={comment.username}
										/>
										<CardContent>
											<TitlePost>{comment.title}</TitlePost>
										</CardContent>
										<CardContent>
											<ContentPost>
												{comment.text}
											</ContentPost>
										</CardContent>
										<CardActions>
											<BoxVotes>
												<Votes
													curtir={true}
													id={comment.id}
													id={comment.id}
												/>
												<Votes
													curtir={false}
													id={comment.id}
													id={comment.id}
												/>	
												<VotesCount>{comment.votesCount}</VotesCount>				
											</BoxVotes>
											<IconButton aria-label="share">
												<IoArrowRedoOutline/>
											</IconButton>
										</CardActions>
									</Card>
									</PostItem>
									

								)
							})
						}
					</PostContent>
						<h2>Poste seu comentário:</h2>
					<FormCommentAndPost
						onSbubmitForm={onSbubmitForm}
						text={text}
						handdleText={handdleText}
						title={title}
						handdleTitle={handdleTitle}
						showTitle={false}
					/>
			</div>
		}
			</div>
		)
}

export default PostDetails