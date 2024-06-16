import { useEffect, useState } from "react";
import usePostStore from "../store/postStore";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import useUserProfileStore from "../store/userProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetFeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { posts, setPosts } = usePostStore();
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();
  const { setUserProfile } = useUserProfileStore();

  useEffect(() => {
    const getFeedPosts = async () => {
      setIsLoading(true);

      try {
        const feedPosts = [];
        
        // Fetch posts created by the authenticated user
        const ownPostsQuery = query(collection(firestore, "posts"), where("createdBy", "==", authUser.uid));
        const ownPostsSnapshot = await getDocs(ownPostsQuery);
        ownPostsSnapshot.forEach((doc) => {
          feedPosts.push({ id: doc.id, ...doc.data() });
        });

        // Fetch posts created by the users the authenticated user is following
        if (authUser.following.length > 0) {
          const followingPostsQuery = query(collection(firestore, "posts"), where("createdBy", "in", authUser.following));
          const followingPostsSnapshot = await getDocs(followingPostsQuery);
          followingPostsSnapshot.forEach((doc) => {
            feedPosts.push({ id: doc.id, ...doc.data() });
          });
        }

        // Sort posts by createdAt timestamp in descending order
        feedPosts.sort((a, b) => b.createdAt - a.createdAt);
        setPosts(feedPosts);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    if (authUser) getFeedPosts();
  }, [authUser, showToast, setPosts, setUserProfile]);

  return { isLoading, posts };
};

export default useGetFeedPosts;
