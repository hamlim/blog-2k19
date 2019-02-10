import React, { useContext, createContext } from 'react'
import Collapse from 'react-collapsed'

const CollapseContext = createContext({})

export function Details({ children }) {
  return (
    <details>
      <Collapse>
        {collapse => (
          <CollapseContext.Provider value={collapse}>
            {children}
          </CollapseContext.Provider>
        )}
      </Collapse>
    </details>
  )
}

export function Summary({ children }) {
  const collapse = useContext(CollapseContext)

  return <summary {...collapse.getTogglerProps()}>{children}</summary>
}

export function DetailsBody({ children }) {
  const collapse = useContext(CollapseContext)
  return <div {...collapse.getCollapseProps()}>{children}</div>
}
