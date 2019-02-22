/*
 * Copyright (c) 2015 instructure-react
 * Forked from https://github.com/aaronshaf/react-toggle/
 * + applied https://github.com/aaronshaf/react-toggle/pull/90
 * + copied from: https://github.com/gaearon/overreacted.io/blob/master/src/components/Toggle.js
 **/
/** @jsx jsx */
import React from 'react'
import { jsx, ClassNames } from '@emotion/core'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

// Copyright 2015-present Drifty Co.
// http://drifty.com/
// from: https://github.com/driftyco/ionic/blob/master/src/util/dom.ts
function pointerCoord(event) {
  // get coordinates for either a mouse click
  // or a touch depending on the given event
  if (event) {
    const changedTouches = event.changedTouches
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0]
      return { x: touch.clientX, y: touch.clientY }
    }
    const pageX = event.pageX
    if (pageX !== undefined) {
      return { x: pageX, y: event.pageY }
    }
  }
  return { x: 0, y: 0 }
}

export function UncontrolledToggle({ onChange, checked }) {
  const [hasFocus, setFocus] = React.useState(false)

  const instance = React.useRef({
    previouslyChecked: checked,
  })

  const inputRef = React.createRef()

  function handleClick(event) {
    const checkbox = inputRef.current
    instance.current.previouslyChecked = checkbox.checked
    if (event.target !== checkbox && !instance.current.moved) {
      event.preventDefault()
      checkbox.focus()
      checkbox.click()
      return
    }

    onChange(checkbox.checked)
  }

  function handleTouchStart(event) {
    instance.current.startX = pointerCoord(event).x
    instance.current.touchStarted = true
    instance.current.hadFocusAtTouchStart = hasFocus
    setFocus(true)
  }

  function handleTouchMove(event) {
    if (!instance.current.touchStarted) return
    instance.current.touchMoved = true

    if (instance.current.startX != null) {
      let currentX = pointerCoord(event).x
      if (checked && currentX + 15 < instance.current.startX) {
        onChange(false)
        instance.current.startX = currentX
      } else if (!checked && currentX - 15 > instance.current.startX) {
        onChange(true)
        instance.current.startX = currentX
      }
    }
  }

  function handleTouchEnd(event) {
    if (!instance.current.touchMoved) return
    const checkbox = inputRef.current
    event.preventDefault()

    if (instance.current.startX != null) {
      if (instance.current.previouslyChecked !== checked) {
        checkbox.click()
      }

      instance.current.touchStarted = false
      instance.current.startX = null
      instance.current.touchMoved = false
    }

    if (!instance.current.hadFocusAtTouchStart) {
      setFocus(false)
    }
  }

  function handleTouchCancel(event) {
    if (instance.current.startX != null) {
      instance.current.touchStarted = false
      instance.current.startX = null
      instance.current.touchMoved = false
    }

    if (!instance.current.hadFocusAtTouchStart) {
      setFocus(false)
    }
  }

  function handleFocus(event) {
    instance.current.hadFocusAtTouchStart = true
    setFocus(true)
  }

  function handleBlur(event) {
    instance.current.hadFocusAtTouchStart = false
    setFocus(false)
  }

  const classes =
    'react-toggle' +
    (checked ? ' react-toggle--checked' : '') +
    (hasFocus ? ' react-toggle--focus' : '')
  return (
    <ClassNames>
      {({ css, cx }) => (
        <div
          className={cx(
            css`
              touch-action: pan-x;

              display: inline-block;
              position: relative;
              cursor: pointer;
              background-color: transparent;
              border: 0;
              padding: 0;
              user-select: none;

              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              -webkit-tap-highlight-color: transparent;
            `,
            classes
          )}
          onClick={handleClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
        >
          <div
            className={cx(
              css`
                width: 50px;
                height: 24px;
                padding: 0;
                border-radius: 30px;
                transition: all 0.2s ease;
                background-color: hsl(222, 14%, 7%);

                .react-toggle:hover & {
                  background-color: #000000;
                }
              `,
              'react-toggle-track'
            )}
          >
            <div
              className={cx(
                css`
                  position: absolute;
                  width: 17px;
                  height: 17px;
                  left: 5px;
                  top: 0px;
                  bottom: 0px;
                  margin-top: auto;
                  margin-bottom: auto;
                  line-height: 0;
                  opacity: 0;
                  transition: opacity 0.25s ease;

                  .react-toggle--checked & {
                    opacity: 1;
                    transition: opacity 0.25s ease;
                  }
                `,
                'react-toggle-track-check'
              )}
            >
              <img
                src={moon}
                width="16"
                height="16"
                alt=""
                style={{ pointerEvents: 'none' }}
              />
            </div>
            <div
              className={cx(
                css`
                  position: absolute;
                  width: 17px;
                  height: 17px;
                  right: 5px;
                  top: 0px;
                  bottom: 0px;
                  margin-top: auto;
                  margin-bottom: auto;
                  line-height: 0;
                  opacity: 1;
                  transition: opacity 0.25s ease;

                  .react-toggle--checked & {
                    opacity: 0;
                  }
                `,
                'react-toggle-track-x'
              )}
            >
              <img
                src={sun}
                width="16"
                height="16"
                alt=""
                style={{ pointerEvents: 'none' }}
              />
            </div>
          </div>
          <div
            className={cx(
              css`
                transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
                position: absolute;
                top: 1px;
                left: 1px;
                width: 22px;
                height: 22px;
                border: 1px solid #4d4d4d;
                border-radius: 50%;
                background-color: #fafafa;

                box-sizing: border-box;

                transition: all 0.25s ease;

                .react-toggle--checked & {
                  left: 27px;
                  border-color: #19ab27;
                }

                .react-toggle--focus & {
                  box-shadow: 0px 0px 2px 3px #0099e0;
                }

                .react-toggle:active & {
                  box-shadow: 0px 0px 5px 5px #0099e0;
                }
              `,
              'react-toggle-thumb'
            )}
          />

          <input
            css={css`
              border: 0;
              clip: rect(0 0 0 0);
              height: 1px;
              margin: -1px;
              overflow: hidden;
              padding: 0;
              position: absolute;
              width: 1px;
            `}
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type="checkbox"
            aria-label="Switch between Dark and Light mode"
          />
        </div>
      )}
    </ClassNames>
  )
}

export function ControlledToggle() {
  const [checked, setChecked] = React.useState(false)
  return <UncontrolledToggle checked={checked} onChange={setChecked} />
}
