import React from "react"
import { IoIosThumbsUp, IoIosThumbsDown } from "react-icons/io"
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import InputForm from "./InputForm"

export type SongType = {
  songName: string
  artistName: string[]
  albumName: string
  releaseDate: string
}

function Radio() {
  const [songs, setSongs] = React.useState<SongType[] | undefined>(undefined)
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
          <InputForm setSongs={setSongs} />
        </Box>
        <Box className="Content">
          <Table variant="simple" size="lg" colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th />
                <Th>Title</Th>
                <Th>Artist</Th>
                <Th>Album</Th>
                <Th>Rate</Th>
              </Tr>
            </Thead>
            <Tbody>
              {songs &&
                songs.map((song, index) => (
                  <Tr key={song.songName}>
                    <Td>{index + 1}.</Td>
                    <Td>{song.songName}</Td>
                    <Td>{song.artistName}</Td>
                    <Td>{song.albumName}</Td>
                    <Td>
                      <Box display="flex">
                        <IoIosThumbsUp /> <IoIosThumbsDown />
                      </Box>
                    </Td>
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
