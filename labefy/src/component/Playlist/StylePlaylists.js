import styled from 'styled-components'

export const ContainerPlaylist = styled.div`
    width: 31.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Item = styled.li`
    padding: 1px;
    margin-bottom: 0.5vw;
    color: green;
    display: flex;
    align-items: center;
`

export const MinimizePlaylistButton = styled.div`
    width: 10vw;
    height: 6vh;
    background-color: green;
    color: white;
    border-style: none;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;
`

export const Icons = styled.img`
    width: 2vw;
    margin-left: 0.5vw;
    cursor: pointer;
`

export const ListOfPlaylist = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
`

export const TitleSection = styled.h3`
    color: green;
`