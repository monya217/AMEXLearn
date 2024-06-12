import CreatePost from "./CreatePost";
import Feed from "./Feed";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";

// import Notifications from "./Notifications";
// import ProfileLink from "./ProfileLink";

import SearchConsultants from './SearchConsultants'; // Correct import path


const SidebarItems = () => {
	return (
		<>
			<Feed />
			<SearchConsultants />
			<Notifications />
			<CreatePost />
			<ProfileLink />
		</>
	);
};

export default SidebarItems;