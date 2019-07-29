import React from "react"
import { css, Flex, Styled } from "theme-ui"
import BioContent from "./bio-content.js"

export default function Bio() {
  return (
    <Flex css={css({ mb: 4 })}>
      <Styled.div>
        <BioContent />
      </Styled.div>
    </Flex>
  )
}
