import React, {useState,useEffect} from 'react'
import ReactTagInput from '@pathofdev/react-tag-input'
import "@pathofdev/react-tag-input/build/index.css"

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

    const{title,tags,category,trending,description} = form;
  return (
    <div className='container-fluid mb-4'>
        <div className='container'>
            <div className='col-12 text-center'>
            <div className="text-center heading py-2">
                Create Blog
            </div>
            </div>
        </div>
    </div>
  )
}

export default PostBlog