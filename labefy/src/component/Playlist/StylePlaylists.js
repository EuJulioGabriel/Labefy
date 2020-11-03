import styled from 'styled-components'

export const ContainerPlaylist = styled.div`
    width: 31.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Item = styled.li`
    padding: 1px;
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

export const RemoveButton = styled.button`
    width: 5vw;
    height: 3vh;
    background-color: red;
    color: white;
    font-weight: bold;
    border-style: none;
`

export const MoreDetailsButton = styled.button`
    width: 5vw;
    height: 3vh;
    background-color: green;
    color: white;
    font-weight: bold;
    border-style: none;
`

export const ListOfPlaylist = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
`