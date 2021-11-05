import React from "react"
import { Box, Heading, Text } from "@chakra-ui/react"

function Header() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box mx={10}>
        <Heading>12.1 FM</Heading>
        <Text fontSize="xl">Playlists for you</Text>
      </Box>
    </Box>
  )
}

export default Header
