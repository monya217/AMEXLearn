import React, { useState } from "react";
import { Avatar, Flex, Skeleton, SkeletonCircle, Text, Input, Button, FormControl, FormErrorMessage } from "@chakra-ui/react";
import useGetUserProfileById from "../../../hooks/useGetUserProfileById";
import { Link } from "react-router-dom";
import { timeAgo } from "../../../utils/timeAgo";

const Comment = ({ comment }) => {
	const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy);

	if (isLoading) return <CommentSkeleton />;
	return (
		<Flex gap={4}>
			<Link to={`/${userProfile.username}`}>
				<Avatar src={userProfile.profilePicURL} size={"sm"} />
			</Link>
			<Flex direction={"column"}>
				<Flex gap={2} alignItems={"center"}>
					<Link to={`/${userProfile.username}`}>
						<Text fontWeight={"bold"} fontSize={12}>
							{userProfile.username}
						</Text>
					</Link>
					<Text fontSize={14}>{comment.comment}</Text>
				</Flex>
				<Text fontSize={12} color={"gray"}>
					{timeAgo(comment.createdAt)}
				</Text>
			</Flex>
		</Flex>
	);
};

export default Comment;

const CommentSkeleton = () => {
	return (
		<Flex gap={4} w={"full"} alignItems={"center"}>
			<SkeletonCircle h={10} w='10' />
			<Flex gap={1} flexDir={"column"}>
				<Skeleton height={2} width={100} />
				<Skeleton height={2} width={50} />
			</Flex>
		</Flex>
	);
};

const CommentForm = ({ onSubmit }) => {
	const [comment, setComment] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (comment.trim() === "") {
			setError("Comment cannot be empty");
			return;
		}
		setError("");
		onSubmit(comment);
		setComment("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormControl isInvalid={error}>
				<Input
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					placeholder="Write a comment..."
				/>
				<FormErrorMessage>{error}</FormErrorMessage>
			</FormControl>
			<Button type="submit" mt={2} colorScheme="blue">
				Submit
			</Button>
		</form>
	);
};

export { CommentForm };
