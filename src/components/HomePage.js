import React from 'react'
import AddPost from './AddPost'
import {PostList} from './PostList'

export const HomePage = () => {
    return (
        <div>
            <AddPost/>
            <PostList/>
        </div>
    )
}
