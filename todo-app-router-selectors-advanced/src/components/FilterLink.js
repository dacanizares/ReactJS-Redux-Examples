import React from 'react'
import { NavLink } from 'react-router-dom'
import { VisibilityFilters } from '../common';

const FilterLink = ({ filter, children }) => (
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