import React from 'react'
import { NavLink } from 'react-router-dom'
import { VisibilityFilters } from '../actions';

const FilterLink = ({ filter, children }) => (
  // Using exact to match root url: 
  // https://stackoverflow.com/questions/45158135/react-router-navlink-with-active-style-doesnt-work-as-i-required-with-root-ur
  <NavLink
    exact to={filter === VisibilityFilters.SHOW_ALL ? '/' : `/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </NavLink>
)

export default FilterLink