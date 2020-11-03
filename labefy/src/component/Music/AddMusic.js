import React from 'react'

import { ContainerRegisterMusic, DataEntryFields, 
         SelectionField, AddMusicButton, DataInput } from './StyleMusic'

class AddMusic extends React.Component {
    render () {
        return (
            <ContainerRegisterMusic>
                <h3>Adicione sua música favorita a sua playlist favorita:</h3>
                <DataEntryFields>
                    <label>Nome da música: </label>
                    <DataInput 
                        value={this.props.nameOfMusic}
                        onChange={this.props.onChangeNameOfMusic}
                        placeholder="Digite aqui o nome da música"
                    />
                </DataEntryFields>
                <DataEntryFields>
                    <label>Artista(s): </label>
                    <DataInput 
                        value={this.props.nameOfArtist}
                        onChange={this.props.onChangeNameOfArtist}
                        placeholder="Digite aqui o nome do artista"
                    />
                </DataEntryFields>
                <DataEntryFields>
                    <label>Url:</label>
                    <DataInput 
                        value={this.props.linkOfMusic}
                        onChange={this.props.onChangeLinkOfMusic}
                        placeholder="Digite aqui o link da música"
                    />
                </DataEntryFields>
                <DataEntryFields>
                    <p>Selecione a playlist que deseja adicionar: </p>
                    <SelectionField 
                        onChange={this.props.onChangeSelectPlaylist} 
                        value={this.props.selectedPlaylist}
                    >
                        <option>Selecionar playlist</option>
                            {this.props.selectPlaylist.map((playlist) => {
                                return <option value={playlist.id} key={playlist.id}>
                                            {playlist.name}
                                        </option>
                            })}
                    </SelectionField>
                </DataEntryFields>
                <AddMusicButton onClick={this.props.onClickAddMusic}>ADICIONAR</AddMusicButton>
            </ContainerRegisterMusic>
        )
    }
}

export default AddMusic