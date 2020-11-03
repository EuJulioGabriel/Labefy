import React from 'react'
import axios from 'axios'

import { url, headers } from '../../constants/constants'

import DetailsPlaylist from './DetailsPlaylist'

class Playlists extends React.Component {
    state = {
        playlists: [],
        moreDetails: false,
        idOfPlaylist: "",
        nameOfPlaylist: ""
    }

    componentDidMount = () => {
        axios
        .get(`${url}`, {
            headers
        }).then((response) => {
            this.setState({playlists: response.data.result.list}) 
        }).catch((error) => {
            alert(error.message)
        })
    }

    componentDidUpdate = () => {
        this.componentDidMount()
    }

    onClickRemovePlaylist = (Id) => {
        axios
        .delete(`${url}${Id}`, {
            headers
        }).then(() => {
            this.componentDidMount()
            return alert("Playlist removida com sucesso")
        }).catch((error) => {
            alert(error.mesage)
        })
    }

    onClickMoreDetails = (id, name) => {
        this.setState({moreDetails: !this.state.moreDetails, idOfPlaylist: id, nameOfPlaylist: name})
    }

    onClickBack = () => {
        this.setState({moreDetails: !this.state.moreDetails})
    }

    render () {
        return (
            <div>
                <DetailsPlaylist 
                    moreDetails = {this.state.moreDetails}
                    playlists = {this.state.playlists}
                    onClickRemovePlaylist = {this.onClickRemovePlaylist}
                    onClickMoreDetails = {this.onClickMoreDetails}
                    minimizePlaylists={this.props.minimizePlaylists}
                    backPlaylists={this.onClickBack}
                    idOfPlaylist={this.state.idOfPlaylist}
                    nameOfPlaylist={this.state.nameOfPlaylist}
                />
            </div>
        )
    }
}

export default Playlists