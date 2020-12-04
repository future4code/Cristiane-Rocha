import react,{useEffect,useState} from 'react'
import {useRequest} from '../../useHooks/useRequest'
import {baseUrl} from '../../useHooks/baseUrl'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import PostsFeed from '../PostsFeed/PostsFeed'
import FormCommentAndPost from '../FormCommentAndPost/FormCommentAndPost'
import {useInput} from '../../useHooks/useInput'
import {TitlePostsAndFeed,ContainerPosts,ContentPosts} from './StyledFeed'

const Feed = () => {
	const urlBase = baseUrl()
	const data = useRequest(`${urlBase}/posts`)
	const history = useHistory()
	let [text,handdleText,setText] = useInput()
	let [title,handdleTitle,setTitle] = useInput()
	const token = localStorage.getItem('token')
	
	const onSbubmitForm = (event) => {
		const body = {
				text: text,
				title: title
			}
		axios.post(`${urlBase}/posts`,body,{
			headers:{
				Authorization:token
			}
		})
		.then((res) => {
			alert("Seu Post já esta no Feed")
		})
		.catch((err) => {
			console.log(err)
		})
		setText('')
		setTitle('')
		event.preventDefault()
	}
	const openDetails = (id) => {
		history.push(`/postdetail/${id}`)
	}
	return(
			<ContentPosts>
			<div>
				<TitlePostsAndFeed>Poste no Feed</TitlePostsAndFeed>
				<FormCommentAndPost
					onSbubmitForm={onSbubmitForm}
					text={text}
					handdleText={handdleText}
					title={title}
					handdleTitle={handdleTitle}
					showTitle={true}
				/>
			</div>
			<TitlePostsAndFeed>Feed</TitlePostsAndFeed>
			<ContainerPosts>
				{ data.posts === undefined ? <div>Carregando...</div> : 
					data.posts.map((post) => {
						return ( <PostsFeed
										key={post.id}
										id={post.id}
										username={post.username}
										title={post.title}
										text={post.text}
										votesCount={post.votesCount}
										commentsCount={post.commentsCount}
										openDetails={openDetails}
									/>)
					}) 
			}
			</ContainerPosts>
			
				
			</ContentPosts>
		)
}
export default Feed