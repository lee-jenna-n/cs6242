import React from "react"
import { useHistory } from "react-router-dom"
import {
  Box,
  Button,
  Checkbox,
  NumberInput,
  NumberInputField,
  Select,
  Text,
} from "@chakra-ui/react"
import {
  ACTIVITIES,
  useActivity,
  ActivityProvider,
  ActivitiesType,
} from "./activityContext"

function InputForm({
  activity,
  showAdvanced,
  size = "md",
}: {
  activity?: ActivitiesType
  showAdvanced?: boolean
  size?: "md" | "lg"
}) {
  const history = useHistory()
  //   const {
  //     state: { activity },
  //     setActivity,
  //   } = useActivity()
  const handleClick = () => {
    history.push("/radio")
    // setActivity("running")
  }
  return (
    <ActivityProvider>
      <Box display="flex" flexDirection={showAdvanced ? "column" : "row"}>
        <Box display="flex" flexDirection="column">
          <Select
            placeholder="What are you doing?"
            size={size}
            value={activity}
          >
            {ACTIVITIES.map(activity => (
              <option value={activity.activity}>{activity.displayName}</option>
            ))}
          </Select>
          {showAdvanced && (
            <>
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
            </>
          )}
        </Box>
        <Box mt={showAdvanced ? 12 : 0} ml={showAdvanced ? 0 : 4}>
          <Button onClick={handleClick} colorScheme="blue" size={size}>
            Get music
          </Button>
        </Box>
      </Box>
    </ActivityProvider>
  )
}

export default InputForm
