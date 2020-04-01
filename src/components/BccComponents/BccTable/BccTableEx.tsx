import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import BccTable from '@bit/bcc.components.bcc-table'
import BccTableCell from '@bit/bcc.components.bcc-table-cell'
import BccTableBody from '@bit/bcc.components.bcc-table-body'
import BccTableContainer from '@bit/bcc.components.bcc-table-container'
import BccTableHead from '@bit/bcc.components.bcc-table-head'
import BccTableRow from '@bit/bcc.components.bcc-table-row'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

export default function SimpleTable() {
  const classes = useStyles()

  return (
    <BccTableContainer>
      <BccTable className={classes.table} aria-label="simple table">
        <BccTableHead>
          <BccTableRow>
            <BccTableCell>Dessert (100g serving)</BccTableCell>
            <BccTableCell align="right">Fat&nbsp;(g)</BccTableCell>
            <BccTableCell align="right">Fat&nbsp;(g)</BccTableCell>
            <BccTableCell align="right">Carbs&nbsp;(g)</BccTableCell>
            <BccTableCell align="right">Protein&nbsp;(g)</BccTableCell>
          </BccTableRow>
        </BccTableHead>
        <BccTableBody>
          {rows.map(row => (
            <BccTableRow key={row.name}>
              <BccTableCell component="th" scope="row">
                {row.name}
              </BccTableCell>
              <BccTableCell align="right">{row.calories}</BccTableCell>
              <BccTableCell align="right">{row.fat}</BccTableCell>
              <BccTableCell align="right">{row.carbs}</BccTableCell>
              <BccTableCell align="right">{row.protein}</BccTableCell>
            </BccTableRow>
          ))}
        </BccTableBody>
      </BccTable>
    </BccTableContainer>
  )
}
