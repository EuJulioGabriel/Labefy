import React from 'react'
import axios from 'axios'

import { url, headers } from '../../constants/constants'

import AddMusic from './AddMusic'

class Music extends React.Component {
    state = {
        nameOfMusic: "",
        nameOfArtist: "",
        linkOfMusic: "",
        selectedPlaylist: "",
        selectPlaylist: []
    }

    componentDidMount = () => {
        axios
        .get(`${url}`, {
            headers
        }).then((response) => {
            this.setState({selectPlaylist: response.data.result.list})
        }).catch((error) => {
            alert(error.message)
        })
    }

    componentDidUpdate = () => {
        this.componentDidMount()
    }

    onChangeNameOfMusic = (event) => {
        this.setState({nameOfMusic: event.target.value})
    }
    
    onChangeNameOfArtist = (event) => {
        this.setState({nameOfArtist: event.target.value})
    }

    onChangeLinkOfMusic = (event) => {
        this.setState({linkOfMusic: event.target.value})
    }

    onChangeSelectPlaylist = (event) => {
        this.setState({selectedPlaylist: event.target.value})
    }

    onClickAddMusic = () => {
        const body = {
            name: this.state.nameOfMusic,
            artist: this.state.nameOfArtist,
            url: this.state.linkOfMusic
        }
        
        axios
        .post(`${url}${this.state.selectedPlaylist}/tracks`, body, {
            headers
        }).then(() => {
            alert("Música Adicionada com sucesso")
            return this.setState({nameOfMusic: "", nameOfArtist: "", linkOfMusic: "", selectedPlaylist:""})
        }).catch((error) => {
            alert(error.message)
        })
    }

    render () {
        return (
            <AddMusic 
                nameOfMusic = {this.state.nameOfMusic}
                nameOfArtist = {this.state.nameOfArtist}
                linkOfMusic = {this.state.linkOfMusic}
                selectedPlaylist = {this.state.selectedPlaylist}
                selectPlaylist= {this.state.selectPlaylist}
                onChangeNameOfMusic = {this.onChangeNameOfMusic}
                onChangeNameOfArtist = {this.onChangeNameOfArtist}
                onChangeLinkOfMusic = {this.onChangeLinkOfMusic}
                onChangeSelectPlaylist = {this.onChangeSelectPlaylist}
                onClickAddMusic = {this.onClickAddMusic}
            />
        )
    }
}

export default Music