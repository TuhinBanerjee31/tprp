import React from 'react'
import { courseData } from '../data/courseData'
import Description from '../component/Description'

const CourseDetails2 = () => {
  return (
    <div>
      <Description data= {courseData[1]} />
    </div>
  )
}

export default CourseDetails2
