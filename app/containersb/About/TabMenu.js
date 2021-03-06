/**
 * 
 * This is the Resume Route Hook
 * 
 * NOTE: ALL Applications (minus the optional right bar) will stem
 * from this index.js file
 * 
 */
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class TabMenu extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu tabular>
        <Menu.Item 
          name='bio' 
          active={activeItem === 'bio'} 
          onClick={this.handleItemClick}
        />
        <Menu.Item 
          name='photos' 
          active={activeItem === 'photos'} 
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}