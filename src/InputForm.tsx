import React, { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react"
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

export type ActivityType = "cleaning" | "driving" | "running" | "working"

export const ACTIVITIES = [
  { activity: "cleaning", displayName: "Cleaning" },
  { activity: "driving", displayName: "Driving" },
  { activity: "running", displayName: "Running" },
  { activity: "working", displayName: "Working" },
]

const SONG_URL =
  "https://cse6242-songlists-api.herokuapp.com/song-recommendations/api/v1.0/getsongs"
const FETCH_ARGS = {}

interface Props {
  setSongs: Dispatch<SetStateAction<SongType[] | undefined>>
}

function InputForm({ setSongs }: Props) {
  const [activity, setActivity] = React.useState<ActivityType | undefined>(
    undefined
  )
  const [age, setAge] = React.useState<number | undefined>(undefined)
  const [includeExplicit, setIncludeExplicit] = React.useState<boolean>(false)

  useEffect(() => {
    fetchSongs()
  })

  const fetchSongs = () => {
    type SongResponseType = {
      songName: string
      artistName: string
      albumName: string
      releaseDate: string
    }

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
  }

  const handleActivityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setActivity(event.target.value as ActivityType)
  }
  const handleAgeChange = (valueAsString: string, valueAsNumber: number) => {
    if (isNaN(valueAsNumber)) {
      setAge(undefined)
    } else {
      setAge(valueAsNumber)
    }
  }
  const handleIncludeExplicitChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setIncludeExplicit(event.target.checked)
  }
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="column">
        <Select
          placeholder="What are you doing?"
          onChange={handleActivityChange}
          value={activity}
        >
          {ACTIVITIES.map(activity => (
            <option key={activity.activity} value={activity.activity}>
              {activity.displayName}
            </option>
          ))}
        </Select>
        <Box my={6}>
          <label style={{ display: "flex", alignItems: "center" }}>
            <Text fontSize="md" mr={4} whiteSpace="nowrap">
              How old are you?
            </Text>
            <NumberInput
              size="sm"
              display="inline"
              value={age}
              onChange={handleAgeChange}
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
        <Button onClick={() => {}} colorScheme="blue">
          Get music
        </Button>
      </Box>
    </Box>
  )
}

export default InputForm
