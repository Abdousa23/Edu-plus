import React from 'react'
import MapPage from './MapPage'
type course = {
    course?: CourseType
}
export default function CourseLocation({course}:course) {
    return (
        <div>
            {/* <MapPage location={course?.location || ''} /> */}
        </div>
    )
}
