import React from 'react'

import Details from '../Details/Details'

import Trash from '../../images/Trash.svg'
import Music from '../../images/Music.svg'

import { ContainerPlaylist, Item, MinimizePlaylistButton, 
         ListOfPlaylist, TitleSection, Icons } from './StylePlaylists'

class DetailsPlaylist extends React.Component {
    render () {
        const renderInScreen = () => {
            if (this.props.moreDetails === false) {
                return (
                    <ContainerPlaylist>
                        <TitleSection>Suas playlists:</TitleSection>
                        <ListOfPlaylist>
                            {this.props.playlists.map((playlist) => {
                                return (
                                    <Item key={playlist.id}>
                                        {playlist.name}
                                        <Icons src={Music}
                                            onClick={() => this.props.onClickMoreDetails(playlist.id, playlist.name)}
                                        >
                                        </Icons> 
                                        <Icons src={Trash}
                                            onClick={() => this.props.onClickRemovePlaylist(playlist.id)}
                                        >
                                        </Icons> 
                                    </Item>
                                )
                            })}
                        </ListOfPlaylist>
                        <MinimizePlaylistButton 
                            onClick={this.props.minimizePlaylists}
                        >
                            MINIMIZAR PLAYLIST
                        </MinimizePlaylistButton>
                    </ContainerPlaylist>
                )
            } else {
                return (
                    <Details 
                        backPlaylists={this.props.backPlaylists}
                        idOfPlaylist={this.props.idOfPlaylist}
                        nameOfPlaylist={this.props.nameOfPlaylist}
                    />
                )
            }
        }
        return (
            <div>
                {renderInScreen()}
            </div>
        )
    }
}

export default DetailsPlaylist