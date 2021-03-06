import React from 'react'
import styled from 'styled-components'
import {
  FaFileAudio,
  FaMixcloud,
  FaSoundcloud,
  FaYoutube,
} from 'react-icons/fa'
import { GoLinkExternal } from 'react-icons/go'

const Table = styled.table`
  background: #586069;
  margin: 1rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  th {
    font-weight: 500;
    font-size: 16px;
    color: #d1d5da;
    text-transform: uppercase;
  }
  .center {
    text-align: center;
  }
  .thinColumn {
    width: 20px;
  }
  a.linkSource {
    color: #d1d5da;
  }
  a:hover {
    background-color: ${props => props.theme.colors.white.blue};
  }
  .row-player {
    cursor: pointer;
  }
`

const PlaylistChart = ({ playlist, getActiveTrack, activeUrl, playing }) => {
  const getSourceIcon = url => {
    if (url.includes('soundcloud.com')) {
      return <FaSoundcloud />
    } else if (url.includes('mixcloud')) {
      return <FaMixcloud />
    } else if (url.includes('youtube')) {
      return <FaYoutube />
    } else if (url.includes('prismic.io')) {
      return <FaFileAudio />
    }
  }
  return (
    <Table>
      <thead>
        <tr>
          <th className="center" />
          {/* <th /> */}
          <th>Artist</th>
          <th>Track</th>
          <th>Album</th>
          <th>Label</th>
          <th>
            <h4>
              <GoLinkExternal size={21} />
            </h4>
          </th>
        </tr>
      </thead>
      <tbody className="body">
        {playlist.map((track, index) => (
          <tr
            className="row-player"
            onClick={() => getActiveTrack(track.link.url)}
            key={track.link.url}
          >
            <td className="center">{index + 1}</td>
            {/* <td>
              <div
                onClick={() => getActiveTrack(track.link.url)}
                style={{ cursor: 'pointer' }}
              >
                {(track.link.url === activeUrl) & playing ? (
                  <FaPause size={18} />
                ) : (
                  <FaPlay size={18} />
                )}
              </div>
            </td> */}
            <td>{track.artist}</td>
            <td>{track.track}</td>
            <td>{track.album}</td>
            <td>{track.label}</td>
            {console.log(track.link.url.includes('soundcloud'))}
            <td className="center">
              <a className="linkSource" href={track.link.url} target={'blank'}>
                {getSourceIcon(track.link.url)}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default PlaylistChart
