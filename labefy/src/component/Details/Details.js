import React from 'react'
import axios from 'axios'

import { url, headers } from '../../constants/constants'

import { ContainerDetails, ContainerItems, BackButton, PlayerAudio } from './StyleDetails'

class Details extends React.Component {
    state = {
        keyPlaylist: this.props.idOfPlaylist,
        nameOfPlaylist: this.props.nameOfPlaylist,
        musicsInPlaylist: []
    }

    componentDidMount = () => {
        axios
        .get(`${url}${this.state.keyPlaylist}/tracks`, {
            headers
        }).then((response) =>{
            this.setState({musicsInPlaylist: response.data.result.tracks})
        }).catch((error) => {
            alert(error.message)
        })
    }

    componentDidUpdate = () => {
        this.componentDidMount()
    }

    render () {

        return (
            <ContainerDetails>
                <h3>{this.state.nameOfPlaylist}</h3>
                <div>
                    {this.state.musicsInPlaylist.map((music) => {
                        return  <ContainerItems key={music.id}>
                                    {music.name} - {music.artist} 
                                    <PlayerAudio src={music.url} controls></PlayerAudio> 
                                </ContainerItems>
                    })}
                </div>
                <BackButton onClick={this.props.backPlaylists}>Ver Playlists</BackButton>
            </ContainerDetails>
        )
    }
}

export default Details