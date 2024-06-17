import { useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useSearchUser = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState(null);
	const showToast = useShowToast();

	const getUserProfile = async (username) => {
		setIsLoading(true);
		setUser(null);
		try {
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

            setUser({ ...userData, blogs });
		} catch (error) {
			showToast("Error", error.message, "error");
			setUser(null);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, getUserProfile, user, setUser };
};

export default useSearchUser;
