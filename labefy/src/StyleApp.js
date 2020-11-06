import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f8f8ff;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const ContainerAddItems = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ContainerCreatePlaylist = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputNamePlaylist = styled.input`
    width: 20vw;
    height: 5vh;
`

export const CreatePlaylistButton = styled.button`
    margin-left: 1vw;
    margin-top: 2vh;
    width: 10vw;
    height: 6vh;
    background-color: green;
    color: white;
    font-size: 12px;
    font-weight: bold;
    border-style: none;
    border-radius: 2px; 
`

export const ShowPlaylistButton = styled.button`
    width: 10vw;
    height: 6vh;
    background-color: green;
    color: white;
    font-size: 12px;
    font-weight: bold;
    border-style: none;
    border-radius: 2px;
`

export const SectionPlaylist = styled.div`
    margin-bottom: 1vh;
    color: green;
`

export const TitlePage = styled.h1`
    color: green;
`

export const ContainerShowPlaylistsButton = styled.div`
    width: 31.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`