import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.css';

const BlogDetails = () => {

  const {id} = useParams();

  return (
    <main className="BlogNote">
      BlogDetails - { id }
    </main>
  )
}

export default BlogDetails;
