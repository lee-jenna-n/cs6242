import React from "react"

export type ActivitiesType = "cleaning" | "driving" | "running" | "working"

export const ACTIVITIES = [
  { activity: "cleaning", displayName: "Cleaning" },
  { activity: "driving", displayName: "Driving" },
  { activity: "running", displayName: "Running" },
  { activity: "working", displayName: "Working" },
]

const ActivityContext = React.createContext(null)

function useActivity() {
  const context = React.useContext(ActivityContext)
  if (!context) {
    throw new Error(`useActivity must be used within a ActivityProvider`)
  }
  return context
}

function ActivityProvider(props: any) {
  const [activity, setActivity] = React.useState()
  const value = React.useMemo(() => [activity, setActivity], [activity])
  return <ActivityContext.Provider value={value} {...props} />
}

export { ActivityProvider, useActivity }
