import React from 'react'

import Playlists from './component/Playlist/Playlists'
import CreatePlaylist from './component/Playlist/CreatePlaylist'
import Music from './component/Music/Music'

import { Container, ContainerAddItems, ContainerCreatePlaylist, 
         ShowPlaylistButton, SectionPlaylist, TitlePage, ContainerShowPlaylistsButton } from './StyleApp'

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
          <ContainerShowPlaylistsButton>
            <ShowPlaylistButton 
              onClick={this.onClickShowPlaylists}
            >
              EXIBIR PLAYLISTS
            </ShowPlaylistButton> 
          </ContainerShowPlaylistsButton>
        )
      }
    }

    return (
      <Container>
        <header>
          <TitlePage>Labefy</TitlePage>
        </header>
        
        <ContainerAddItems>
          <ContainerCreatePlaylist>
            <CreatePlaylist 
              onClickShowPlaylist={this.onClickShowPlaylists}
            />
            <SectionPlaylist />
            {renderPlaylists()} 
          </ContainerCreatePlaylist>          
        </ContainerAddItems>
        <Music />
      </Container>
    )
  }
}

export default App