import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";

const useGetUserProfileByUsername = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const { userProfile, setUserProfile } = useUserProfileStore();

  useEffect(() => {
    if (!username) {
      console.warn("Username is undefined, cannot fetch user profile.");
      setIsLoading(false);
      setUserProfile(null);
      return;
    }

    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        console.log("Fetching user profile for username:", username);
        const q = query(collection(firestore, "users"), where("username", "==", username));
        const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                showToast("Error", "User not found", "error");
                return;
            }

            const userData = querySnapshot.docs[0].data();
            const userId = querySnapshot.docs[0].id;

            // Fetch user blogs
            const blogsQuery = query(collection(firestore, "blogs"), where("userId", "==", userId));
            const blogsSnapshot = await getDocs(blogsQuery);
            const blogs = blogsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            setUserProfile({ ...userData, blogs });
        
        
      } catch (error) {
        console.error("Error fetching user profile:", error);
        showToast("Error", error.message, "error");
        setUserProfile(null);
      } finally {
        setIsLoading(false);
      }
    };

    getUserProfile();
  }, [username, setUserProfile, showToast]);

  return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;
