import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";
import { firestore } from "../firebase/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const useFollowUser = (userId) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const authUser = useAuthStore((state) => state.user);
    const setAuthUser = useAuthStore((state) => state.setUser);
    const { userProfile, setUserProfile } = useUserProfileStore();
    const showToast = useShowToast();

    const handleFollowUser = async () => {
        if (!authUser) {
            showToast("Error", "User not authenticated", "error");
            return;
        }

        setIsUpdating(true);
        try {
            const currentUserRef = doc(firestore, "users", authUser.uid);
            const userToFollowOrUnfollowRef = doc(firestore, "users", userId);
            await updateDoc(currentUserRef, {
                following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
            });

            await updateDoc(userToFollowOrUnfollowRef, {
                followers: isFollowing ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
            });

            if (isFollowing) {
                // unfollow
                const updatedFollowing = authUser.following?.filter((uid) => uid !== userId) || [];
                setAuthUser({
                    ...authUser,
                    following: updatedFollowing,
                });
                if (userProfile)
                    setUserProfile({
                        ...userProfile,
                        followers: userProfile.followers.filter((uid) => uid !== authUser.uid),
                    });

                localStorage.setItem(
                    "user-info",
                    JSON.stringify({
                        ...authUser,
                        following: updatedFollowing,
                    })
                );
                setIsFollowing(false);
            } else {
                // follow
                const updatedFollowing = [...(authUser.following || []), userId];
                setAuthUser({
                    ...authUser,
                    following: updatedFollowing,
                });

                if (userProfile)
                    setUserProfile({
                        ...userProfile,
                        followers: [...userProfile.followers, authUser.uid],
                    });

                localStorage.setItem(
                    "user-info",
                    JSON.stringify({
                        ...authUser,
                        following: updatedFollowing,
                    })
                );
                setIsFollowing(true);
            }
        } catch (error) {
            showToast("Error", error.message, "error");
        } finally {
            setIsUpdating(false);
        }
    };

    useEffect(() => {
        if (authUser && authUser.following) {
            const isFollowing = authUser.following.includes(userId);
            setIsFollowing(isFollowing);
        }
    }, [authUser, userId]);

    return { isUpdating, isFollowing, handleFollowUser };
};

export default useFollowUser;
