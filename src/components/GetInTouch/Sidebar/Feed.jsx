import { Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MdOutlineFeed } from "react-icons/md";
const Feed = () => {
	return (
		<Tooltip
			hasArrow
			label={"Feed"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Link
				display={"flex"}
				to={"/get-in-touch"}
				as={RouterLink}
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
				<MdOutlineFeed size={20} />
				<Box display={{ base: "none", md: "block" }}>Feed</Box>
			</Link>
		</Tooltip>
	);
};

export default Feed;