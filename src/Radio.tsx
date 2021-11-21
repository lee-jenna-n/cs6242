import React, { useEffect } from "react"
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import InputForm from "./InputForm"

const SAMPLE_SONGS = [
  {
    songName: "Solar Power",
    artistName: "Lorde",
    albumName: "Solar Power",
  },
  {
    songName: "Easy On Me",
    artistName: "Adele",
    albumName: "Easy On Me",
  },
  {
    songName: "good 4 u",
    artistName: "Olivia Rodrigo",
    albumName: "SOUR",
  },
  {
    songName: "Heat Waves",
    artistName: "Glass Animals",
    albumName: "Heat Waves",
  },
  {
    songName: "That Funny Feeling",
    artistName: "Bo Burnham",
    albumName: "Inside (The Songs)",
  },
]

const SONG_URL =
  "https://cse6242-songlists-api.herokuapp.com/song-recommendations/api/v1.0/getsongs"
const FETCH_ARGS = {}

function Radio() {
  const [songs, setSongs] = React.useState(SAMPLE_SONGS)
  useEffect(() => {
    fetch(SONG_URL, FETCH_ARGS)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setSongs(Object.values(data))
      })
  }, [])
  return (
    <Box>
      <Box display="flex" ml={10}>
        <Box
          mt={20}
          width="280px"
          p={6}
          border="1px solid white"
          borderRadius="6px"
        >
          <InputForm />
        </Box>
        <Box className="Content">
          <Table variant="simple" size="lg" colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th />
                <Th>Title</Th>
                <Th>Artist</Th>
                <Th>Album</Th>
              </Tr>
            </Thead>
            <Tbody>
              {songs.map((song, index) => (
                <Tr key={song.songName}>
                  <Td>{index + 1}.</Td>
                  <Td>{song.songName}</Td>
                  <Td>{song.artistName}</Td>
                  <Td>{song.albumName}</Td>
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
