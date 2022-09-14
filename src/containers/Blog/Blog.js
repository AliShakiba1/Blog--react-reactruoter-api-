import React from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'

import FullPost from './FullPost/FullPost'
import NewPost from './NewPost/NewPost'
import Posts from './Posts/Posts'

import './Blog.css'

class Blog extends React.Component {
  render() {
    return (
      <div className="blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: '/new-post',
                    search: '?sort=post',
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* exact ro miyarim dige faght vase path emal mishe na zir majmoe hash */}
        {/* render vase meghdar sade hastesh be jash az Component estefase kon */}

        {/* <Route path="/" exact  render={() => <h2>Home</h2>} /> */}

        {/* 
        <Route path="/" exact>
          <Posts />
        </Route> */}

        {/* <Route path="/new-post" exact>
          <NewPost />
        </Route> */}

        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/test" exact render={() => <h2>Home</h2>} />
          <Redirect from="/test" to="/" />
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
          <Route
            render={() => (
              <h2 style={{ textAlign: 'center' }}>404 not found</h2>
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default Blog
