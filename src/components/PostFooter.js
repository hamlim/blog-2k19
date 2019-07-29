import React from "react"
import { Location } from "@reach/router"
import { Link } from "gatsby"
import { css, Styled, Flex } from "theme-ui"

import Bio from "../gatsby-theme-blog/components/bio"

const Footer = ({ previous, next }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    <Styled.hr />
    <Location>
      {({ location }) => {
        const twitterLink = `https://mobile.twitter.com/search?q=${encodeURIComponent(
          location.href
        )}`
        return (
          <>
            <Styled.hr />
            <Styled.p>
              Have feedback about this post or questions, don't hesitate to
              reach out on{" "}
              <Styled.a href="https://mobile.twitter.com/immatthamlin">
                Twitter (@immatthamlin)
              </Styled.a>
              !
            </Styled.p>
            <Styled.p>
              Follow the discussion on this blog post on{" "}
              <Styled.a href={twitterLink}>twitter</Styled.a>.
            </Styled.p>
          </>
        )
      }}
    </Location>
    <Bio />
    {(previous || next) && (
      <Flex
        as="ul"
        css={{
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Styled.a as={Link} to={previous.node.slug} rel="prev">
              ← {previous.node.title}
            </Styled.a>
          )}
        </li>
        <li>
          {next && (
            <Styled.a as={Link} to={next.node.slug} rel="next">
              {next.node.title} →
            </Styled.a>
          )}
        </li>
      </Flex>
    )}
  </footer>
)

export default Footer
