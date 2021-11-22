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
import { ActivityType } from "./Radio"

export const ACTIVITIES = [
  { activity: "cleaning", displayName: "Cleaning" },
  { activity: "driving", displayName: "Driving" },
  { activity: "running", displayName: "Running" },
  { activity: "working", displayName: "Working" },
]

interface Props {
  activity: ActivityType | undefined
  setActivity: Dispatch<SetStateAction<ActivityType | undefined>>
  age: number | undefined
  setAge: Dispatch<SetStateAction<number | undefined>>
  includeExplicit: boolean
  setIncludeExplicit: Dispatch<SetStateAction<boolean>>
}

function InputForm({
  activity,
  setActivity,
  age,
  setAge,
  includeExplicit,
  setIncludeExplicit,
}: Props) {
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
