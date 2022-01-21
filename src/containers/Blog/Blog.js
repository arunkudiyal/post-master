import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    // State -> Data fetched from an API
    state = {
        posts: []
    }

    componentDidMount() {
        // Fetch data from API | SIDE EFFECT
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({posts: response.data})
                console.log(response)
            })
            .catch(error => console.log(error))
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post title={post.title} />
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;