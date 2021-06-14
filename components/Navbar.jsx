import React, { Component } from 'react'
import ThemeSlider from './ui/ThemeSlider'
import {
  Segment,
  Menu,
  Header,
  Label,
  Image,
  Grid,
  GridColumn
} from 'semantic-ui-react'
import Link from 'next/Link'
const logo = '/logo.png'

export default class Navbar extends Component {
  state = { activeItem: 'Home' }
  handleItemClick = ({ ...props }) =>
    this.setState({ activeItem: props.currentTarget.firstChild.data })

  render () {
    // console.log(this.state)
    return (
      <Segment attached='top' fixed>
        <Grid columns='2' divided>
          <Grid.Row>
            <Grid.Column width='2'>
              <Image
                src='logo.png'
                alt='logo'
                size='tiny'
                as='a'
                href='/'
                inline
                verticalAlign='middle'
              />
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width='14'>
              <Menu pointing size='large' secondary attached='top'>
                <Link href='/' passhref>
                  <Menu.Item
                    name='Home'
                    as='a'
                    active={this.state.activeItem == 'Home'}
                    onClick={this.handleItemClick}
                  />
                </Link>
                <Link href='About'>
                  <Menu.Item
                    name='About'
                    as='a'
                    active={this.state.activeItem === 'About'}
                    onClick={this.handleItemClick}
                  />
                </Link>
                <Link href='Contact'>
                  <Menu.Item
                    name='Contact'
                    as='a'
                    active={this.state.activeItem == 'Contact'}
                    onClick={this.handleItemClick}
                  />
                </Link>
                <Menu.Item position='right'>
                  <ThemeSlider />
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}
