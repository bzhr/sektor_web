import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { css } from 'react-emotion'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GoCalendar, GoLocation, GoSettings, GoClock } from 'react-icons/go'
import { GiMoneyStack } from 'react-icons/gi'
import { CardWrapper, Statistics } from './LayoutComponents'

const Information = styled.div`
  h3 {
    display: inline-block;
    // color: ${props => props.theme.colors.black.base};
    transition: all ${props => props.theme.transitions.default.duration};
    // &:hover {
    //   color: ${props => props.theme.colors.primary.base};
    // }
  }
`

const marginVertical = css`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`

const Excerpt = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const EventInfo = ({
  lineup,
  path,
  title,
  date,
  location,
  excerpt,
  image,
  vlez,
  pocetok,
}) => {
  return (
    <CardWrapper>
      <Link to={`nastani/${path}`}>
        <Img alt="" className="flyer" fluid={image.childImageSharp.fluid} />
      </Link>
      <Statistics>
        <span className="element">
          <GoCalendar size={20} />
          <span>{date}</span>
        </span>
        <span className="element">
          <GoClock size={20} />
          <span>{pocetok}</span>
        </span>
        <span className="element">
          <GoLocation size={20} />
          <span>{location}</span>
        </span>
        <span className="element">
          <GiMoneyStack size={20} />
          <span>{vlez}</span>
        </span>
      </Statistics>
      <Information>
        <Link to={`nastani/${path}`}>
          <h3 className={marginVertical}>{title}</h3>
        </Link>
        <Statistics className={marginVertical}>
          {/* <img alt="" src={dj} /> */}
          <GoSettings size={20} />
          <h4 style={{ display: 'inline' }}>{` ${lineup}`}</h4>
        </Statistics>
        <Statistics />
        {/* {tags && <Tags tags={tags} />} */}
        <Excerpt>{`${excerpt}...`}</Excerpt>
      </Information>
    </CardWrapper>
  )
}

export default EventInfo

EventInfo.propTypes = {
  lineup: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  // inputTags: PropTypes.array.isRequired,
  // excerpt: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  vlez: PropTypes.string,
  pocetok: PropTypes.string,
}
