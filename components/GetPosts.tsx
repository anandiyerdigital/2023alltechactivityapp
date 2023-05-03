'use client'

import { useEffect, useState } from 'react'
import { useSupabase } from './providers/supabase-provider'

import React from 'react'

type Post = {
  id: number
  title: string
  description: string
}


const GetPosts = () => {
  const [posts, setPosts] = useState([])
  const { supabase } = useSupabase()

  useEffect(() => {
    getPosts()
  }, [])


  const getPosts = async () => {
    let { data: posts, error } = await supabase.from('posts').select('*')
    if (error) console.log('error', error)
    else setPosts(posts)
  }


  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ))}
   

    </div>
  )
}

export default GetPosts