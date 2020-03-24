import StepLabel from '@material-ui/core/StepLabel'
import {
  withStyles,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'
import { BccStepIcon } from '../../../BccComponents'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { StepIconProps } from '@material-ui/core/StepIcon'
import './BccStepLabel.css'

const stepIcon = (props: StepIconProps) => {
  const { completed } = props
  return completed ? (
    <div className="stepCircle done"></div>
  ) : (
    <div className="stepCircle"></div>
  )
}

const BccStepLabel = withStyles({
  root: {},
})((props: any) => <StepLabel StepIconComponent={stepIcon} {...props} />)

export default BccStepLabel
