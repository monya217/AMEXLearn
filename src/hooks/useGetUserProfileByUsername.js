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
          console.log("No user profile found for username:", username);
          setUserProfile(null);
        } else {
          let userDoc;
          querySnapshot.forEach((doc) => {
            userDoc = doc.data();
          });

          console.log("User profile found:", userDoc);
          setUserProfile(userDoc);
        }
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
