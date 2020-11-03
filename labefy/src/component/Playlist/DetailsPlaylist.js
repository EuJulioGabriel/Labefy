import React from 'react'

import Details from '../Details/Details'

import { ContainerPlaylist, Item, MinimizePlaylistButton, 
         RemoveButton, MoreDetailsButton, ListOfPlaylist } from './StylePlaylists'

class DetailsPlaylist extends React.Component {
    render () {
        const renderInScreen = () => {
            if (this.props.moreDetails === false) {
                return (
                    <ContainerPlaylist>
                        <h3>Suas playlist</h3>
                        <ListOfPlaylist>
                            {this.props.playlists.map((playlist) => {
                                return (
                                    <Item key={playlist.id}>{playlist.name} 
                                        <RemoveButton 
                                            onClick={() => this.props.onClickRemovePlaylist(playlist.id)}
                                        >
                                            Remover
                                        </RemoveButton> 
                                        <MoreDetailsButton 
                                            onClick={() => this.props.onClickMoreDetails(playlist.id, playlist.name)}
                                        >
                                            Detalhes
                                        </MoreDetailsButton>
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