import React from 'react'
import { BccGrid, BccTypography } from '../../components/BccComponents'
import { NavLink } from 'react-router-dom'
import { animateScroll } from 'react-scroll'

const Grid = (props: any) => {
  animateScroll.scrollToTop(0)
  return (
    <>
      <div className="wrapper">
        <img src={process.env.PUBLIC_URL + '/grid.svg'} alt="Grid" />
      </div>
      <BccTypography block type="h4" className="descTitle">
        Размеры
      </BccTypography>
      <BccGrid
        container
        className="descTitle"
        spacing={2}
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <BccGrid className="grid" item xl={12} lg={12} md={12} sm={12} xs={12}>
          <div>12</div>
        </BccGrid>
        <BccGrid className="grid" item md={6} xl={6} lg={6} sm={6} xs={6}>
          <div>6</div>
        </BccGrid>
        <BccGrid className="grid" item md={6} xl={6} lg={6} sm={6} xs={6}>
          <div>6</div>
        </BccGrid>
        <BccGrid className="grid" item md={4} xl={4} lg={4} sm={4} xs={4}>
          <div>4</div>
        </BccGrid>
        <BccGrid className="grid" item md={4} xl={4} lg={4} sm={4} xs={4}>
          <div>4</div>
        </BccGrid>
        <BccGrid className="grid" item md={4} xl={4} lg={4} sm={4} xs={4}>
          <div>4</div>
        </BccGrid>
        <BccGrid className="grid" item md={2} xl={2} lg={2} sm={2} xs={2}>
          <div>3</div>
        </BccGrid>
        <BccGrid className="grid" item md={2} xl={2} lg={2} sm={2} xs={2}>
          <div>3</div>
        </BccGrid>
        <BccGrid className="grid" item md={2} xl={2} lg={2} sm={2} xs={2}>
          <div>3</div>
        </BccGrid>
        <BccGrid className="grid" item md={2} xl={2} lg={2} sm={2} xs={2}>
          <div>3</div>
        </BccGrid>
        <BccGrid className="grid" item md={2} xl={2} lg={2} sm={2} xs={2}>
          <div>3</div>
        </BccGrid>
        <BccGrid className="grid" item md={2} xl={2} lg={2} sm={2} xs={2}>
          <div>3</div>
        </BccGrid>
        <BccGrid className="grid" item md={2} xl={2} lg={2} sm={2} xs={2}>
          <div>2</div>
        </BccGrid>
        <BccGrid className="grid" item md={2} xl={2} lg={2} sm={2} xs={2}>
          <div>2</div>
        </BccGrid>
        <BccGrid className="grid" item md={2} xl={2} lg={2} sm={2} xs={2}>
          <div>2</div>
        </BccGrid>
        <BccGrid className="grid" item md={2} xl={2} lg={2} sm={2} xs={2}>
          <div>2</div>
        </BccGrid>
        <BccGrid className="grid" item md={2} xl={2} lg={2} sm={2} xs={2}>
          <div>2</div>
        </BccGrid>
        <BccGrid className="grid" item md={2} xl={2} lg={2} sm={2} xs={2}>
          <div>2</div>
        </BccGrid>
        <BccGrid className="grid" item md={1} xl={1} lg={1} sm={1} xs={1}>
          <div>1</div>
        </BccGrid>
        <BccGrid className="grid" item md={1} xl={1} lg={1} sm={1} xs={1}>
          <div>1</div>
        </BccGrid>
        <BccGrid className="grid" item md={1} xl={1} lg={1} sm={1} xs={1}>
          <div>1</div>
        </BccGrid>
        <BccGrid className="grid" item md={1} xl={1} lg={1} sm={1} xs={1}>
          <div>1</div>
        </BccGrid>
        <BccGrid className="grid" item md={1} xl={1} lg={1} sm={1} xs={1}>
          <div>1</div>
        </BccGrid>
        <BccGrid className="grid" item md={1} xl={1} lg={1} sm={1} xs={1}>
          <div>1</div>
        </BccGrid>
        <BccGrid className="grid" item md={1} xl={1} lg={1} sm={1} xs={1}>
          <div>1</div>
        </BccGrid>
        <BccGrid className="grid" item md={1} xl={1} lg={1} sm={1} xs={1}>
          <div>1</div>
        </BccGrid>
        <BccGrid className="grid" item md={1} xl={1} lg={1} sm={1} xs={1}>
          <div>1</div>
        </BccGrid>
        <BccGrid className="grid" item md={1} xl={1} lg={1} sm={1} xs={1}>
          <div>1</div>
        </BccGrid>
        <BccGrid className="grid" item md={1} xl={1} lg={1} sm={1} xs={1}>
          <div>1</div>
        </BccGrid>
        <BccGrid className="grid" item md={1} xl={1} lg={1} sm={1} xs={1}>
          <div>1</div>
        </BccGrid>
      </BccGrid>

      <BccTypography block type="h4" className="descTitle">
        Далее
      </BccTypography>
      <NavLink to="/overview/typography">
        <img
          onClick={() => props.setRoute(3)}
          className="imgNext"
          src={process.env.PUBLIC_URL + '/typography.svg'}
          alt="Typography"
        />
      </NavLink>
      <BccTypography block type="p2" className="descTitle">
        Типографика
      </BccTypography>
    </>
  )
}

export default Grid
