import React from 'react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import { IoIosBook, IoMdStats, IoMdCalendar } from 'react-icons/io'
import { TiHeadphones } from 'react-icons/ti'

const Nav = styled.nav`
  border-bottom: 1px solid #e1e4e8;
  margin-bottom: 18px;
  .nav-body {
    margin-bottom: -1px;
  }
  .menu-item {
    margin-left: 16px;
    padding: 16px 8px;
    margin-right: 16px;
    font-size: 14px;
    line-height: 1.5;
    color: #d1d5da;
    text-align: center;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    cursor: pointer;
    svg {
      margin-right: 5px;
      vertical-align: text-top;
    }
  }
  .selected {
    font-weight: 600;
    color: #fafbfc;
    border-bottom-color: ${props => props.theme.colors.black.light};
  }
  .hide-mobile {
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      display: none;
    }
  }
`

const UnderlineNav = ({ handleClick, selected }) => {
  const selectedBio = selected === '?tab=bio' ? 'selected' : null
  const selectedCharts = selected === '?tab=charts' ? 'selected' : null
  const selectedMixes = selected === '?tab=mixes' ? 'selected' : null
  const selectedEvents = selected === '?tab=events' ? 'selected' : null
  return (
    <Nav>
      <Flex justifyContent="flex-start" className="nav-body" flexWrap="wrap">
        <div
          onClick={e => handleClick(e, 'bio')}
          className={`menu-item ${selectedBio}`}
          // href="#focus"
        >
          <IoIosBook size={19} />
          <span className="hide-mobile">Bio</span>
        </div>
        <div
          onClick={e => handleClick(e, 'charts')}
          className={`menu-item ${selectedCharts}`}
          // href="#focus"
        >
          <IoMdStats size={19} />
          <span className="hide-mobile">Charts</span>
        </div>
        <div
          onClick={e => handleClick(e, 'mixes')}
          className={`menu-item ${selectedMixes}`}
          // href="#focus"
        >
          <TiHeadphones size={19} />
          <span className="hide-mobile">Mixes</span>
        </div>
        <div
          onClick={e => handleClick(e, 'events')}
          className={`menu-item ${selectedEvents}`}
          // href="#focus"
        >
          <IoMdCalendar size={19} />
          <span className="hide-mobile">Events</span>
        </div>
      </Flex>
    </Nav>
  )
}
export default UnderlineNav
