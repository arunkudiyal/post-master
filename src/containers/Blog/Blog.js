import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    // State -> Data fetched from an API
    state = {
        posts: [],
        selectedId: null
    }

    componentDidMount() {
        // Fetch data from API | SIDE EFFECT
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 6)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Maqsood'
                    }
                })
                this.setState({posts: updatedPosts})
            })
            .catch(error => console.log(error))
    }

    postSelectedHandler = (id) => {
        // Update the seelectedId
        this.setState({selectedId: id})
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post 
                    key={post.id}
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;