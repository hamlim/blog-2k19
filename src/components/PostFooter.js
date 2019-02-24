import React from 'react'
import { Location } from '@reach/router'
import Link from './Link.js'

export default function Footer() {
  return (
    <Location>
      {({ location }) => {
        const twitterLink = `https://mobile.twitter.com/search?q=${encodeURIComponent(
          location.href
        )}`
        return (
          <>
            <hr />
            <p>
              Have feedback about this post or questions, don't hesitate to
              reach out on{' '}
              <Link href="https://mobile.twitter.com/immatthamlin">
                Twitter (@immatthamlin)
              </Link>
              !
            </p>
            <p>
              Follow the discussion on this blog post on{' '}
              <Link href={twitterLink}>twitter</Link>.
            </p>
          </>
        )
      }}
    </Location>
  )
}
