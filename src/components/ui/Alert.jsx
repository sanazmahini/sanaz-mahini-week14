import React from 'react'
import CircleExclamation from '../icons/CircleExclamation'
import Xmark from '../icons/Xmark'

const Alert = ({text}) => {
  return (
    <>
    <CircleExclamation />
    <span>{text}</span>
    <Xmark />
    </>
  )
}

export default Alert