import React from "react"
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import Header from "./Header"
import InputForm from "./InputForm"

const SAMPLE_SONGS = [
  {
    title: "Solar Power",
    artist: "Lorde",
    album: "Solar Power",
  },
  {
    title: "Easy On Me",
    artist: "Adele",
    album: "Easy On Me",
  },
  {
    title: "good 4 u",
    artist: "Olivia Rodrigo",
    album: "SOUR",
  },
  {
    title: "Heat Waves",
    artist: "Glass Animals",
    album: "Heat Waves",
  },
  {
    title: "That Funny Feeling",
    artist: "Bo Burnham",
    album: "Inside (The Songs)",
  },
]

function Radio() {
  return (
    <Box>
      <Header />
      <Box display="flex" ml={10}>
        <Box
          mt={20}
          width="280px"
          p={6}
          border="1px solid white"
          borderRadius="6px"
        >
          <InputForm showAdvanced />
        </Box>
        <Box className="Content">
          <Table variant="simple" size="lg" colorScheme="whiteAlpha">
            <Thead>
              <Th />
              <Th>Title</Th>
              <Th>Artist</Th>
              <Th>Album</Th>
            </Thead>
            <Tbody>
              {SAMPLE_SONGS.map((song, index) => (
                <Tr>
                  <Td>{index + 1}.</Td>
                  <Td>{song.title}</Td>
                  <Td>{song.artist}</Td>
                  <Td>{song.album}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  )
}

export default Radio
