import React from 'react'
import PageTemplate from '../templates/PageTemplate'
import UserList from '../UserList/index';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { location } = this.props
    return (
      <div className="main">
        <PageTemplate pathname={location.pathname}>
          <UserList />
        </PageTemplate>
      </div>
    )
  }
}

export default HomePage
