import React, { ChangeEvent, Dispatch, SetStateAction } from "react"
import {
  Box,
  Button,
  Checkbox,
  NumberInput,
  NumberInputField,
  Select,
  Text,
} from "@chakra-ui/react"
import { SongType } from "./Radio"
import { getSampleSongs } from "./sampleSongs.js"

export type ActivityType =
  | "driving"
  | "cooking"
  | "studying"
  | "working out"
  | "cleaning"
  | "being creative"

export const ACTIVITIES = [
  { activity: "driving", displayName: "Driving" },
  { activity: "cooking", displayName: "Cooking" },
  { activity: "studying", displayName: "Studying" },
  { activity: "working out", displayName: "Working out" },
  { activity: "cleaning", displayName: "Cleaning" },
  { activity: "being creative", displayName: "Being creative" },
]

const SONG_URL =
  "https://cse6242-songlists-api.herokuapp.com/song-recommendations/api/v1.0/getsongs"

interface Props {
  setSongs: Dispatch<SetStateAction<SongType[] | undefined>>
}

function InputForm({ setSongs }: Props) {
  const [activity, setActivity] = React.useState<ActivityType>("driving")
  const [age, setAge] = React.useState<string>("20")
  const [includeExplicit, setIncludeExplicit] = React.useState<boolean>(false)

  const getMusic = () => {
    fetchSongs()
  }

  const fetchSongs = () => {
    type SongResponseType = {
      songName: string
      artistName: string
      albumName: string
      releaseDate: string
    }

    const getQueryString = () => {
      const queries: { [key: string]: any } = {
        numSongs: 10,
        explicitYN: includeExplicit ? "Y" : "N",
        activity,
        dob_year: new Date().getFullYear() - parseInt(age),
      }
      return Object.keys(queries)
        .reduce((result: any, key: any) => {
          return [
            ...result,
            `${encodeURIComponent(key)}=${encodeURIComponent(queries[key])}`,
          ]
        }, [])
        .join("&")
    }

    // setSongs(getSampleSongs())

    fetch(SONG_URL + "?" + getQueryString())
      .then(response => {
        return response.json()
      })
      .then(data => {
        const songData: SongResponseType[] = Object.values(data)
        const formattedSongData: SongType[] = songData.map(s => ({
          ...s,
          artistName: s.artistName.replace(/\['|'\]/g, "").split("', '"),
        }))
        setSongs(formattedSongData)
      })
  }

  const handleActivityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setActivity(event.target.value as ActivityType)
  }
  const handleIncludeExplicitChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setIncludeExplicit(event.target.checked)
  }
  return (
    <Box display="flex" flexDirection="column" minW="210px">
      <Box display="flex" flexDirection="column">
        <label>
          <Text fontSize="md" whiteSpace="nowrap">
            What are you doing?*
          </Text>
          <Select onChange={handleActivityChange} value={activity}>
            {ACTIVITIES.map(activity => (
              <option key={activity.activity} value={activity.activity}>
                {activity.displayName}
              </option>
            ))}
          </Select>
        </label>
        <Box my={6}>
          <label style={{ display: "flex", alignItems: "center" }}>
            <Text fontSize="md" mr={4} whiteSpace="nowrap">
              How old are you?
            </Text>
            <NumberInput
              size="sm"
              display="inline"
              value={age}
              min={0}
              max={150}
              onChange={setAge}
            >
              <NumberInputField />
            </NumberInput>
          </label>
        </Box>
        <Box display="flex" alignItems="center">
          <Checkbox
            isChecked={includeExplicit}
            onChange={handleIncludeExplicitChange}
          >
            <Text whitespace="nowrap">Include explicit</Text>
          </Checkbox>
        </Box>
      </Box>
      <Box mt={12}>
        <Button onClick={getMusic} colorScheme="blue" disabled={!age}>
          Get music
        </Button>
      </Box>
    </Box>
  )
}

export default InputForm
