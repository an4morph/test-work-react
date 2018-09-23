import React from 'react'
import PageTemplate from '../templates/PageTemplate'


class SettingsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { location } = this.props
    return (
        <PageTemplate pathname={location.pathname}>
          Settings
        </PageTemplate>
    )
  }
}

export default SettingsPage
