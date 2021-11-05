import React from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import InputForm from "./InputForm"

function Landing() {
  return (
    <Box className="Landing" display="flex" justifyContent="center">
      <Box>
        <Box mb={10}>
          <Heading>12.1 FM</Heading>
          <Text fontSize="xl">Playlists for you</Text>
        </Box>
        <InputForm size="lg" />
      </Box>
    </Box>
  )
}

export default Landing
