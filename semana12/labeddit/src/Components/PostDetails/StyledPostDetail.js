import react from 'react'
import styled from 'styled-components'
import { IoChatbubblesOutline } from "react-icons/io5";


export const PostContent = styled.div`
	padding:20px 0;
	margin:10px 0;
	border-bottom:1px solid #ffd016;
	width:100%;
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
	align-items:center;
`;
export const PostItem = styled.div`
	margin:10px;
`;

export const BoxPostAndVotes = styled.div`
	display:flex;
	width:100%;
	height:300px;
	align-items:center;
	justify-content:flex-start;
`;

export const BoxCommentAndDetails = styled.div`
	display:flex;
	width:calc(90% - 40px);
	height:auto;
	align-items:center;
	justify-content:space-between;
	margin:0;
`;


export const BoxUsernameContent = styled.div`
	display:flex;
	width:80%;
	height:30px;
	align-items:center;
	justify-content:flex-start;
	margin:10px 0 0;
`;
export const BoxUsername = styled.div`
	width:60%;
	height:30px;
	background:#ff6600;
	display:flex;
	justify-content:center;
	align-items:center;
	border-radius:5px;
	margin-right:10px;
`;
export const Username = styled.h3`
	font-size:20px;
	font-weight:800;
	color:#ff6600 !important;
`;
export const BoxComment = styled.div`
	display:flex;
	width:100%;
	height:auto;
	align-items:center;
	justify-content:center;
	cursor:pointer;
`;
export const BoxContentPost = styled.div`
	width:calc(90% - 40px);
	height:250px;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	border-radius:5px;
	margin-right:10px;
	padding:10px;
	border:1px solid #ff6600;
`;
export const TitlePost = styled.h2`
	text-transform:uppercase;
	font-size:18px;
	font-weight:500;
`;
export const ContentPost = styled.p`
	color:#888;
	font-weight:600;
`;
export const BoxVotes = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	width:100%;
`;
export const VotesCount = styled.p`
	font-size:18px;
	color:#fff;
	width:25px;
	height:25px;
	border-radius:100%;
	background:#ff6600;
	margin-left:10px;
	display:block;
	display:flex;
	align-items:center;
	justify-content:center;
`;
export const ButtonPostDetails = styled.button`
	border:none;
	cursor:pointer;
	color:#888;
	&:focus{
		outline:none;
	}
`;
export const CommentNumber = styled.p`
	border-radius:5px;
	display:flex;
	justify-content:center;
	align-items:center;
	border:none;
	color:#ffd016;
	font-weight:400;
	font-size:14px;
	justify-content:center;
`;
export const IconBaloon = styled(IoChatbubblesOutline)`
	color:#ff6600;
	font-size:25px;
	margin-left:10px;
`;
export const IconBoxUsername = styled.p`
	color:#ff6600;
`;