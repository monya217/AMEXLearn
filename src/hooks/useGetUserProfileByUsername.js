import { useEffect, useRef, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";

const useGetUserProfileByUsername = () => {
  const [isLoading, setIsLoading] = useState(false);
  const showToast = useShowToast();
  const { userProfile, setUserProfile } = useUserProfileStore();
  const searchRef = useRef(null);

  const getUserProfile = async (username) => {
    setIsLoading(true);
    try {
      const q = query(collection(firestore, "users"), where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setUserProfile(null);
        showToast("Info", "User profile not found", "info");
        return;
      }

      let userDoc;
      querySnapshot.forEach((doc) => {
        userDoc = doc.data();
      });

      setUserProfile(userDoc);
      console.log(userDoc);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchUser = (e) => {
    e.preventDefault();
    const searchTerm = searchRef.current.value;
    console.log("Searching for:", searchTerm);
    getUserProfile(searchTerm);
  };

  return { isLoading, userProfile, handleSearchUser, searchRef };
};

export default useGetUserProfileByUsername;
