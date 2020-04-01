import React from 'react'
import BccCollapseDetails from '@bit/bcc.components.bcc-collapse-details'
import BccCollapsePanel from '@bit/bcc.components.bcc-collapse-panel'
import BccCollapseTitle from '@bit/bcc.components.bcc-collapse-title'
import BccTypography from '@bit/bcc.components.bcc-typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => createStyles({}))

const BccCollapse = () => {
  return (
    <div>
      <BccCollapsePanel>
        <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
          <BccTypography type="p2">Панель 1</BccTypography>
        </BccCollapseTitle>
        <BccCollapseDetails>
          <BccTypography type="p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </BccTypography>
        </BccCollapseDetails>
      </BccCollapsePanel>
      <BccCollapsePanel>
        <BccCollapseTitle
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <BccTypography type="p2">Панель 2</BccTypography>
        </BccCollapseTitle>
        <BccCollapseDetails>
          <BccTypography type="p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </BccTypography>
        </BccCollapseDetails>
      </BccCollapsePanel>
      <BccCollapsePanel disabled>
        <BccCollapseTitle
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <BccTypography type="p2">Не активная панель</BccTypography>
        </BccCollapseTitle>
      </BccCollapsePanel>
    </div>
  )
}

export default BccCollapse
