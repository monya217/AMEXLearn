import { useState, useEffect } from 'react';
import { firestore } from '../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import useUserProfileStore from "../store/userProfileStore";
const useGetUserBlogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const authUser = useUserProfileStore((state) => state.userProfile); 

  useEffect(() => {
    const fetchBlogs = async () => {
      if (!authUser) return; 
      console.log('here')
      setIsLoading(true);
      try {
        const blogsQuery = query(
          collection(firestore, 'blogs'),
          where('userId', '==', authUser.uid) 
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
