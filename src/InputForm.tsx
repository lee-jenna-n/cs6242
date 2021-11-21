import React, { ChangeEvent } from "react"
import {
  Box,
  Button,
  Checkbox,
  NumberInput,
  NumberInputField,
  Select,
  Text,
} from "@chakra-ui/react"

export type ActivitiesType = "cleaning" | "driving" | "running" | "working"

export const ACTIVITIES = [
  { activity: "cleaning", displayName: "Cleaning" },
  { activity: "driving", displayName: "Driving" },
  { activity: "running", displayName: "Running" },
  { activity: "working", displayName: "Working" },
]

function InputForm() {
  const [activity, setActivity] = React.useState<ActivitiesType | undefined>(undefined)
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setActivity(event.target.value as ActivitiesType)
  }
  return (
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="column">
          <Select
            placeholder="What are you doing?"
            onChange={handleChange}
            value={activity}
          >
            {ACTIVITIES.map(activity => (
              <option key={activity.activity} value={activity.activity}>{activity.displayName}</option>
            ))}
          </Select>
              <Box my={6}>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <Text fontSize="md" mr={4} whiteSpace="nowrap">
                    How old are you?
                  </Text>
                  <NumberInput size="sm" display="inline">
                    <NumberInputField />
                  </NumberInput>
                </label>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox>
                  <Text whitespace="nowrap">Include explicit</Text>
                </Checkbox>
              </Box>
        </Box>
        <Box mt={12}>
          <Button onClick={() => {}} colorScheme="blue" >
            Get music
          </Button>
        </Box>
      </Box>
  )
}

export default InputForm
