import React from "react"
import {
  BsHandThumbsDownFill,
  BsHandThumbsUpFill,
  BsHandThumbsDown,
  BsHandThumbsUp,
} from "react-icons/bs"
import {
  Box,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from "@chakra-ui/react"
import InputForm from "./InputForm"

export type SongType = {
  songName: string
  artistName: string[]
  albumName: string
  releaseDate?: string
  rating?: "liked" | "disliked" | null
}

function Radio() {
  const [songs, setSongs] = React.useState<SongType[] | undefined>(undefined)

  const handleRatingClick = (
    rating: "liked" | "disliked",
    song: SongType,
    songIndex: number
  ) => {
    if (!songs) {
      return
    }

    const songsCopy: SongType[] = [...songs]
    if (song.rating === rating) {
      songsCopy[songIndex].rating = null
    } else {
      songsCopy[songIndex].rating = rating
    }

    setSongs(songsCopy)
  }

  return (
    <Box>
      <Box display="flex" ml={10}>
        <Box mt={20} width="280px">
          <Box p={6} border="1px solid white" borderRadius="6px">
            <InputForm setSongs={setSongs} />
          </Box>
        </Box>
        <Box className="Content">
          {!songs?.length ? (
            <Text mt={20} fontSize="xl">
              Help us craft your perfect playlist by sharing some info!
            </Text>
          ) : (
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
                      <Td>{song.artistName.join(", ")}</Td>
                      <Td>{song.albumName}</Td>
                      <Td>
                        <Box display="flex">
                          <IconButton
                            variant="unstyled"
                            aria-label="Unlike"
                            icon={
                              song.rating === "disliked" ? (
                                <BsHandThumbsDownFill />
                              ) : (
                                <BsHandThumbsDown />
                              )
                            }
                            onClick={() =>
                              handleRatingClick("disliked", song, index)
                            }
                          />
                          <IconButton
                            variant="unstyled"
                            aria-label="Like"
                            icon={
                              song.rating === "liked" ? (
                                <BsHandThumbsUpFill />
                              ) : (
                                <BsHandThumbsUp />
                              )
                            }
                            onClick={() =>
                              handleRatingClick("liked", song, index)
                            }
                          />
                        </Box>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Radio
