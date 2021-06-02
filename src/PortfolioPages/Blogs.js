import React from 'react'
import "./PageStyle.css"
import { allBlogs } from "../Components/AllBlogs"

export default function Blogs() {
    return (
        <div className="blog-wrapper">
            {
                allBlogs.map((blog) => {
                    return <div className="blog" key={blog.id}>
                        <img src={blog.blogimage} alt="blog screenshot" />
                        <h1><a href={blog.bloglink}>{blog.blogname}</a></h1>
                    </div>
                })
            }
        </div>
    )
}