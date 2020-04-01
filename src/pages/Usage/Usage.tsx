import React from 'react'
import BccTypography from '@bit/bcc.components.bcc-typography'

const Usage = () => {
  return (
    <>
      <div className="wrapper">
        <img src={process.env.PUBLIC_URL + '/usage.svg'} alt="Usage" />
        <BccTypography block type="h4" className="descTitle">
          Как использовать
        </BccTypography>
      </div>
    </>
  )
}

export default Usage
