import React, {useState,useEffect} from 'react'
import ReactTagInput from '@pathofdev/react-tag-input'
import "@pathofdev/react-tag-input/build/index.css"
import { ContributeLayout } from './ContributeLayout';
import { useNavigate, useParams } from "react-router-dom";
import {firestore, storage} from '../../firebase/firebase'
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import useShowToast from '../../hooks/useShowToast';

import {
    addDoc,
    collection,
    getDoc,
    serverTimestamp,
    doc,
    updateDoc,
  } from "firebase/firestore";
import useAuthStore from '../../store/authStore';

const initialState = {
    title: "",
    tags: [],
    trending: "no",
    category: "",
    description: ""
}

const categoryOption = [
    "Stocks",
    "Invertment",
    "Personal Finance",
];

const PostBlog = () => {
    const[form,setForm] = useState(initialState);
    const [file,setFile] = useState(null);
    const [progress,setProgress] = useState(null);
    const navigate = useNavigate();
    const authUser = useAuthStore(state => state.user);
    const showToast = useShowToast();

    const{title,tags,category,trending,description} = form;
    
    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage,file.name)
            const uploadTask = uploadBytesResumable(storageRef,file)

            uploadTask.on(
                "state_changed",(snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                setProgress(progress);
                switch(snapshot.state){
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        break;
                }
            },(error) => {
                console.log(error)
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                    setForm((prev) => ({...prev,imgUrl: downloadUrl}));
                });
            }
        );
        };
        file && uploadFile();
    },[file])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const handleTags = (tags) => {
        setForm({ ...form, tags });
    };
    const handleTrending = (e) => {
        setForm({ ...form, trending: e.target.value });
    };
    const onCategoryChange = (e) => {
        setForm({ ...form, category: e.target.value });
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!title) {
            showToast('Error', 'Please add title.', 'error');
            return;
        }
        if (tags.length === 0) {
            showToast('Error', 'Please add at least one tag.', 'error'); 
            return;
        }
        if (!category) {
            showToast('Error', 'Please select a category.', 'error');
            return;
        }
        if (!description) {
            showToast('Error', 'Please fill out the description field.', 'error');
            return;
        }
        if (!file) {
            showToast('Error', 'Please upload an image.', 'error');
            return;
        }
        console.log("Form data:", form);
        try {
            await addDoc(collection(firestore, "blogs"), {
                ...form,
                Timestamp: serverTimestamp(),
                author: authUser.username,
                userId: authUser.uid
            });
            navigate("/contribute");
        } catch (err) {
            console.log(err);
        }
    };
  return (
    <ContributeLayout>
        <div className='container-fluid mb-4' style={{ marginTop: '50px' }}>
            <div className='container'>
                <div className='col-12 text-center'>
                <div className="text-center heading py-2">
                    Create Blog
                </div>
                </div>
            </div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-6">
                <form className="row blog-form" onSubmit={handleSubmit}>
                    <div className="col-12 py-3">
                        <input
                        type="text"
                        className="form-control input-text-box"
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 py-3">
                        <ReactTagInput
                            tags={tags}
                            placeholder="Tags"
                            onChange={handleTags}
                        />
                    </div>
                    <div className="col-12 py-3">
                        <p className='trending'>
                            Is it trending blog?
                        </p>
                        <div className="form-check-inline mx-2">
                            <input
                                type="radio"
                                className="form-check-input"
                                value="yes"
                                name="radioOption"
                                checked={trending === "yes"}
                                onChange={handleTrending}
                            />
                            <label htmlFor="radioOption" className="form-check-label">
                                Yes&nbsp;
                            </label>
                            <input
                                type="radio"
                                className="form-check-input"
                                value="no"
                                name="radioOption"
                                checked={trending === "no"}
                                onChange={handleTrending}
                            />
                            <label htmlFor="radioOption" className="form-check-label">
                                No
                            </label>
                        </div>
                    </div>
                    <div className="col-12 py-3">
                        <select
                            value={category}
                            onChange={onCategoryChange}
                            className="catg-dropdown"
                        >
                            <option>Please select category</option>
                            {categoryOption.map((option, index) => (
                            <option value={option || ""} key={index}>
                            {option}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className="col-12 py-3">
                        <textarea
                            className="form-control description-box"
                            placeholder="Description"
                            value={description}
                            name="description"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="file"
                            className="form-control"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <div className="col-12 py-3 text-center">
                        <button
                            className="btn btn-add"
                            type="submit"
                            disabled={progress !== null && progress < 100}
                        >
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </ContributeLayout>
    
  )
}

export default PostBlog