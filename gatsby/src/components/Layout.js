/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { jsx, css } from '@emotion/core'
import Global from './global.js'

import Header from './header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Global />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          css={css`
            margin: 0 auto;
            max-width: 960px;
            padding: 0 1.0875rem 1.45rem;
          `}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
