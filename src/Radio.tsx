import React, { useEffect } from "react"
import { IoIosThumbsUp, IoIosThumbsDown } from "react-icons/io"
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import InputForm from "./InputForm"

type SongType = {
  songName: string
  artistName: string[]
  albumName: string
  releaseDate: string
}

type SongResponseType = {
  songName: string
  artistName: string
  albumName: string
  releaseDate: string
}

export type ActivityType = "cleaning" | "driving" | "running" | "working"

const SONG_URL =
  "https://cse6242-songlists-api.herokuapp.com/song-recommendations/api/v1.0/getsongs"
const FETCH_ARGS = {}

function Radio() {
  const [songs, setSongs] = React.useState<SongType[] | undefined>(undefined)
  const [activity, setActivity] = React.useState<ActivityType | undefined>(
    undefined
  )
  const [age, setAge] = React.useState<number | undefined>(undefined)
  const [includeExplicit, setIncludeExplicit] = React.useState<boolean>(false)
  useEffect(() => {
    fetch(SONG_URL, FETCH_ARGS)
      .then(response => {
        return response.json()
      })
      .then(data => {
        const songData: SongResponseType[] = Object.values(data)
        const formattedSongData: SongType[] = songData.map(s => ({
          ...s,
          artistName: s.artistName.replace(/\['|'\]/g, "").split("','"),
        }))
        setSongs(formattedSongData)
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
          <InputForm
            activity={activity}
            setActivity={setActivity}
            age={age}
            setAge={setAge}
            includeExplicit={includeExplicit}
            setIncludeExplicit={setIncludeExplicit}
          />
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
