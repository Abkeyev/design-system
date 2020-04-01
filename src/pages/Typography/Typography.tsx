import React from 'react'
import BccTypography from '@bit/bcc.components.bcc-typography'
import './Typography.css'

const Typography = () => {
  return (
    <>
      <div className="wrapper">
        <img src={process.env.PUBLIC_URL + '/colors.svg'} alt="Grid" />
        <BccTypography block type="h4" className="descTitle">
          Размеры
        </BccTypography>
        <BccTypography block type="h1" className="descTitle">
          Заголовок 1
        </BccTypography>
        <BccTypography block type="h2" className="descTitle">
          Заголовок 2
        </BccTypography>
        <BccTypography block type="h3" className="descTitle">
          Заголовок 3
        </BccTypography>
        <BccTypography block type="h4" className="descTitle">
          Заголовок 4
        </BccTypography>
        <BccTypography block type="h5" className="descTitle">
          Заголовок 5
        </BccTypography>
        <BccTypography block type="h6" className="descTitle">
          Заголовок 6
        </BccTypography>
        <BccTypography block type="p1" className="descTitle">
          Параграф 1
        </BccTypography>
        <BccTypography block type="p2" className="descTitle">
          Параграф 2
        </BccTypography>
        <BccTypography block type="p2l" className="descTitle">
          Параграф 2 жирный
        </BccTypography>
        <BccTypography block type="p3" className="descTitle">
          Параграф 3
        </BccTypography>
        <BccTypography block type="p4" className="descTitle">
          Параграф 4
        </BccTypography>
      </div>
    </>
  )
}

export default Typography
