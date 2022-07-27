import React, { useEffect, useState } from 'react'

const Activities = () => {
    const loadActivities = () => {
        setIsLoading(true)
        fetch("https://www.boredapi.com/api/activity")
            .then((response) => response.json())
            .then((data) => {
                setActivities([...activities, data])
                setIsLoading(false)
            })
        }
    
    const deleteActivities = () => {
        setActivities([])
    }

    // const [activity, setActivity] = useState('')
    const [activities, setActivities] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadActivities()
    }, [])

    if (activities.length === 0 && isLoading) {
        return <p>Loading...</p>
    }

  return (
    <>
        <h1>Bored Activities</h1>
        <ul>
            {activities.map((activity) => {
                return <li key={activity.key}>{activity.activity}</li>
            })}
        </ul>
        <button disabled={isLoading} onClick={loadActivities}>Load activity</button>
        <button onClick={deleteActivities}>Delete activity</button>
    </>
  )
}

export default Activities