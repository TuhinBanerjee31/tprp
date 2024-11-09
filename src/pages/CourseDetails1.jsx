import React from 'react'
import { courseData } from '../data/courseData'
import Description from '../component/Description'

const CourseDetails1 = () => {
  return (
    <div>
      <Description data= {courseData[0]} />
    </div>
  )
}

export default CourseDetails1
