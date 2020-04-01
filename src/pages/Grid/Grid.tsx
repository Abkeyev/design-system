import React from 'react'
import BccGrid from '@bit/bcc.components.bcc-grid'
import BccTypography from '@bit/bcc.components.bcc-typography'
import './Grid.css'

const Grid = () => {
  return (
    <>
      <div className="wrapper">
        <img src={process.env.PUBLIC_URL + '/grid.svg'} alt="Grid" />
      </div>
      <BccTypography block type="h4" className="descTitle">
        Размеры
      </BccTypography>
      <BccGrid container md={12}>
        <BccGrid className="grid" item md={12}>
          12
        </BccGrid>
      </BccGrid>
      <BccGrid container md={12}>
        <BccGrid className="grid" item md={6}>
          6
        </BccGrid>
        <BccGrid className="grid" item md={6}>
          6
        </BccGrid>
      </BccGrid>
      <BccGrid container md={12}>
        <BccGrid className="grid" item md={4}>
          4
        </BccGrid>
        <BccGrid className="grid" item md={4}>
          4
        </BccGrid>
        <BccGrid className="grid" item md={4}>
          4
        </BccGrid>
      </BccGrid>
      <BccGrid container md={12}>
        <BccGrid className="grid" item md={2}>
          3
        </BccGrid>
        <BccGrid className="grid" item md={2}>
          3
        </BccGrid>
        <BccGrid className="grid" item md={2}>
          3
        </BccGrid>
        <BccGrid className="grid" item md={2}>
          3
        </BccGrid>
        <BccGrid className="grid" item md={2}>
          3
        </BccGrid>
        <BccGrid className="grid" item md={2}>
          3
        </BccGrid>
      </BccGrid>
      <BccGrid container md={12}>
        <BccGrid className="grid" item md={2}>
          2
        </BccGrid>
        <BccGrid className="grid" item md={2}>
          2
        </BccGrid>
        <BccGrid className="grid" item md={2}>
          2
        </BccGrid>
        <BccGrid className="grid" item md={2}>
          2
        </BccGrid>
        <BccGrid className="grid" item md={2}>
          2
        </BccGrid>
        <BccGrid className="grid" item md={2}>
          2
        </BccGrid>
      </BccGrid>
      <BccGrid container md={12}>
        <BccGrid className="grid" item md={1}>
          1
        </BccGrid>
        <BccGrid className="grid" item md={1}>
          1
        </BccGrid>
        <BccGrid className="grid" item md={1}>
          1
        </BccGrid>
        <BccGrid className="grid" item md={1}>
          1
        </BccGrid>
        <BccGrid className="grid" item md={1}>
          1
        </BccGrid>
        <BccGrid className="grid" item md={1}>
          1
        </BccGrid>
        <BccGrid className="grid" item md={1}>
          1
        </BccGrid>
        <BccGrid className="grid" item md={1}>
          1
        </BccGrid>
        <BccGrid className="grid" item md={1}>
          1
        </BccGrid>
        <BccGrid className="grid" item md={1}>
          1
        </BccGrid>
        <BccGrid className="grid" item md={1}>
          1
        </BccGrid>
        <BccGrid className="grid" item md={1}>
          1
        </BccGrid>
      </BccGrid>
    </>
  )
}

export default Grid
