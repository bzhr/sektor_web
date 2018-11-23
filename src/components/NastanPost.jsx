import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { css } from 'react-emotion'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { GoCalendar, GoLocation } from 'react-icons/go'
// import kebabCase from 'lodash/kebabCase'
// import { hideS } from '../utils/hide'
const dj = require('../icons/dj.svg')

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 4rem;
`

const Image = styled.div`
  position: relative;
  box-shadow: ${props => props.theme.shadow.feature.small.default};
  transition: ${props => props.theme.transitions.boom.transition};
  border-radius: ${props => props.theme.borderRadius.default};
  min-height: 150px;
  min-width: 300px;
  img {
    border-radius: ${props => props.theme.borderRadius.default};
  }
  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    transform: translateY(-12px);
  }
  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    > div {
      position: static !important;
    }
    > div > div {
      position: static !important;
    }
  }
  flex-basis: calc(99.9% * 2 / 5 - 1rem);
  max-width: calc(99.9% * 2 / 5 - 1rem);
  width: calc(99.9% * 2 / 5 - 1rem);
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 500px) {
    height: 220px;
    img {
      min-height: 200px;
    }
  }
`

const Information = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
    display: inline-block;
    color: ${props => props.theme.colors.black.base};
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.primary.base};
    }
  }

  flex-basis: calc(99.9% * 3 / 5 - 1rem);
  max-width: calc(99.9% * 3 / 5 - 1rem);
  width: calc(99.9% * 3 / 5 - 1rem);
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
`

const Statistics = styled.div`
  color: ${props => props.theme.colors.black.lighter};
  h3,
  h4 {
    color: ${props => props.theme.colors.black.base};
    display: inline;
  }
  span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  img {
    width: 40px;
    height: 35px;
    margin-right: 0.5rem;
  }
`

const Excerpt = styled.div`
  margin-top: 2rem;
`
const marginVertical = css`
  margin-bottom: 1rem;
  margin-top: 1rem;
`

const NastanPost = ({ cover, path, date, info, naslov, location, lineup }) => (
  <Wrapper>
    <Image>
      <Link to={`program/${path}`}>
        <Img alt="" className="flyer" fluid={cover} />
        <img src={cover} />
      </Link>
    </Image>
    <Information>
      <Link to={`program/${path}`}>
        <h1>{naslov}</h1>
      </Link>
      <Statistics>
        <GoCalendar size={20} />
        <span>{date}</span>
        <GoLocation size={20} />
        <span>{location}</span>
        {/* <span className={hideS}>Kategorie: </span> */}
        {/* <Link to={`/categories/${kebabCase(category)}`}>{category}</Link> */}
      </Statistics>
      <Statistics className={marginVertical}>
        <img alt="" src={dj} />
        {/* <u>LINE UP:</u> */}
        <h3 style={{ display: 'inline' }}>{` ${lineup}`}</h3>
      </Statistics>
      <Excerpt>{info}</Excerpt>
    </Information>
  </Wrapper>
)

export default NastanPost

NastanPost.propTypes = {
  cover: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  naslov: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  lineup: PropTypes.string.isRequired,
}

// NastanPost.defaultProps = {
//   sreda: '',
//   cetvrtok: '',
//   petok: '',
//   sabota: '',
// }
