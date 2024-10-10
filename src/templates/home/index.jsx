import { Component } from 'react';

import './styles.css';


import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';


export class Home extends Component {

  state = {
    // State é um objeto que armazena as informações que o componente manipula
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2
  };


  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts()
    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage), 
      allPosts: postsAndPhotos, 

    });
  }

  loadMorePosts = () => (
    console.log('chamndo mais posts')

  )

  render() {

    const { posts } = this.state;


    return (

      <section className='container'>

        <Posts posts={posts} />
        <button onclick={this.loadPosts}>Load More Posts</button>

      </section>
    );

  }

}




