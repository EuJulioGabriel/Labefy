import React from 'react'

import Playlists from './component/Playlist/Playlists'
import CreatePlaylist from './component/Playlist/CreatePlaylist'
import Music from './component/Music/Music'

import { Container, ContainerAddItems, ContainerCreatePlaylist, 
         ShowPlaylistButton, SectionPlaylist } from './StyleApp'

class App extends React.Component {
  state = {
    showPlaylists: false
  }

  onClickShowPlaylists = () => {
    this.setState({showPlaylists: !this.state.showPlaylists})
  }

  render () {
    const renderPlaylists = () => {
      if (this.state.showPlaylists === true) {
        return (
          <Playlists 
            minimizePlaylists={this.onClickShowPlaylists}
          />
        )
      } else {
        return (
          <ShowPlaylistButton 
            onClick={this.onClickShowPlaylists}
          >
            EXIBIR PLAYLISTS
          </ShowPlaylistButton>)
      }
    }

    return (
      <Container>
        <header>
          <h1>Labefy</h1>
        </header>
        <ContainerAddItems>
          <ContainerCreatePlaylist>
            <CreatePlaylist />
            <SectionPlaylist>
              {renderPlaylists()}
            </SectionPlaylist>
          </ContainerCreatePlaylist>
          <Music />          
        </ContainerAddItems>
      </Container>
    )
  }
}

export default App