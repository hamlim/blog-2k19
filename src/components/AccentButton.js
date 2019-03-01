/** @jsx jsx */
import { jsx } from '@emotion/core'

export default function Button(props) {
  return (
    <button
      {...props}
      css={{
        backgroundColor: !props.disabled ? 'var(--accent)' : '#d8d8d8',
        color: 'white',
        '&:hover': {
          backgroundColor: !props.disabled ? 'var(--accent-dark)' : '#d8d8d8',
          color: 'white',
        },
        '&:focus': {
          backgroundColor: !props.disabled ? 'var(--accent-dark)' : '#d8d8d8',
          color: 'white',
        },
      }}
    />
  )
}
