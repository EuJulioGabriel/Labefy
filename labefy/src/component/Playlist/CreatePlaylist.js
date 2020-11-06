import React from 'react'
import axios from 'axios'

import { url, headers } from '../../constants/constants'

import { InputNamePlaylist, CreatePlaylistButton, SectionPlaylist, TitleSection } from '../../StyleApp'

class CreatePlaylist extends React.Component {
  state = {
    newPlaylist: "",
    playlistExists: false,
    searchExistingPlaylist: [],
  }

  onChangeNewPlaylist = (event) => {
    this.setState({newPlaylist: event.target.value})
  }

  searchPlaylist = () => {
    this.setState({playlistExiste: false})
    axios
    .get(`${url}search?name=${this.state.newPlaylist}`, {
      headers
    }).then((response) => {
      this.setState({searchExistingPlaylist: response.data.result.playlist})
      {this.state.searchExistingPlaylist.forEach((playlist) => {
        if (this.state.newPlaylist === playlist.name) {
          alert("Playlist ja está cadastrada com este nome, por favor, tente outro")
          this.setState({newPlaylist: ""})
          this.setState({playlistExists: true})
        }        
      })}
      if (this.state.playlistExists === false) {
        this.createPlaylist()
      } else {
        this.setState({playlistExists: false})
      } 
    }).catch((error) => {
      return alert(error.message)
    })
  }

  createPlaylist = () => {
    const body = {
      name: this.state.newPlaylist
    }
    axios
    .post(`${url}`, body, {
      headers
    }).then(() => {
      this.setState({playlistExists: false, newPlaylist: ""})
      alert("Playlist cadastrado com sucesso")
    }).catch((error) => {
      alert(error.message)
    })
  }

  render() {
    return (
      <SectionPlaylist>
        <h1>Crie sua playlist agora:</h1>
        <h5> É rápido e fácil</h5>
        <InputNamePlaylist 
          value={this.state.newPlaylist}
          onChange={this.onChangeNewPlaylist}
          placeholder="Digite aqui o nome da sua nova playlist"
        />
        <CreatePlaylistButton 
          onClick={this.searchPlaylist}
        >
          CRIAR PLAYLIST
        </CreatePlaylistButton>
      </SectionPlaylist>
    )
  }
}

export default CreatePlaylist