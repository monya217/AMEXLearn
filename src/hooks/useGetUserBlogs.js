import { useState, useEffect } from 'react';
import { firestore } from '../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import useAuthStore from '../../src/store/authStore'; // Assuming you have a store for auth state

const useGetUserBlogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const authUser = useAuthStore((state) => state.user); // Get the authenticated user

  useEffect(() => {
    const fetchBlogs = async () => {
      if (!authUser) return; // Ensure there's a logged-in user

      setIsLoading(true);
      try {
        const blogsQuery = query(
          collection(firestore, 'blogs'),
          where('userId', '==', authUser.uid) // Use the authenticated user's ID
        );
        const blogsSnapshot = await getDocs(blogsQuery);
        const blogsList = blogsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBlogs(blogsList);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
      setIsLoading(false);
    };

    fetchBlogs();
  }, [authUser]);

  return { isLoading, blogs };
};

export default useGetUserBlogs;
