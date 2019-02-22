import React from 'react'

export default function Footer() {
  const twitterLink = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    window.location.href
  )}`
  return (
    <>
      <hr />
      <p>
        Follow the discussion on this blog post on{' '}
        <a href={twitterLink}>twitter</a>.
      </p>
      <p>
        Have feedback about this post or questions, don't hesitate to reach out
        on{' '}
        <a href="https://mobile.twitter.com/immatthamlin">
          Twitter (@immatthamlin)
        </a>
        !
      </p>
    </>
  )
}
