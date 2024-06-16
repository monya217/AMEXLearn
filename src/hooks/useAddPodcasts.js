// useAddPodcast.js
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase"; // Adjust the import path as necessary


const useAddPodcast = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const addPodcast = async (podcast, file) => {
      setLoading(true);
      setError(null);
      try {
        const storageRef = ref(storage, `podcasts/${file.name}`);
        await uploadBytes(storageRef, file);
        const fileURL = await getDownloadURL(storageRef);
  
        const podcastWithFileURL = { ...podcast, src: fileURL };
        const collectionRef = collection(firestore, "podcasts");
        await addDoc(collectionRef, podcastWithFileURL);
  
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
  
    return { addPodcast, loading, error };
  };
  
  export default useAddPodcast;