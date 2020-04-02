import React from 'react'
import BccTypography from '@bit/bcc.components.bcc-typography'
import BccTable from '@bit/bcc.components.bcc-table'
import BccTableCell from '@bit/bcc.components.bcc-table-cell'
import BccTableBody from '@bit/bcc.components.bcc-table-body'
import BccTableContainer from '@bit/bcc.components.bcc-table-container'
import BccTableHead from '@bit/bcc.components.bcc-table-head'
import BccTableRow from '@bit/bcc.components.bcc-table-row'
import { animateScroll } from 'react-scroll'

const Typography = () => {
  animateScroll.scrollToTop(0)
  return (
    <>
      <div className="wrapper">
        <img
          src={process.env.PUBLIC_URL + '/typography.svg'}
          alt="Typography"
        />
      </div>
      <BccTypography block className="descTitle" type="p2">
        Текст, на наш взгляд, является одним из важнейших компонентов, которая
        напрямую влияет на пользовательский опыт. Чем читабельнее и понятнее
        текст, тем растёт уровень удовлетворения продуктом.
      </BccTypography>
      <BccTypography block type="h4" className="descTitle">
        Описание
      </BccTypography>
      <BccTypography block className="descTitle" type="p2">
        Для каждой платформы и операционной системы мы используем стандартные
        шрифты, то есть для Apple - семейство San Francisco или New York, для
        Android - Roboto или Google Sans, для веба определен Roboto.
      </BccTypography>

      <BccTableContainer>
        <BccTable>
          <BccTableHead>
            <BccTableRow>
              <BccTableCell>Стиль</BccTableCell>
              <BccTableCell>Толщина</BccTableCell>
              <BccTableCell>Размер (px)</BccTableCell>
              <BccTableCell>Межстрочное (px)</BccTableCell>
            </BccTableRow>
          </BccTableHead>
          <BccTableBody>
            <BccTableRow>
              <BccTableCell>Header 1</BccTableCell>
              <BccTableCell>Bold</BccTableCell>
              <BccTableCell>48</BccTableCell>
              <BccTableCell>52</BccTableCell>
            </BccTableRow>
            <BccTableRow>
              <BccTableCell>Header 2</BccTableCell>
              <BccTableCell>Bold</BccTableCell>
              <BccTableCell>40</BccTableCell>
              <BccTableCell>40</BccTableCell>
            </BccTableRow>
            <BccTableRow>
              <BccTableCell>Header 3</BccTableCell>
              <BccTableCell>Bold</BccTableCell>
              <BccTableCell>28</BccTableCell>
              <BccTableCell>28</BccTableCell>
            </BccTableRow>
            <BccTableRow>
              <BccTableCell>Header 4</BccTableCell>
              <BccTableCell>Bold</BccTableCell>
              <BccTableCell>22</BccTableCell>
              <BccTableCell>24</BccTableCell>
            </BccTableRow>
            <BccTableRow>
              <BccTableCell>Header 5</BccTableCell>
              <BccTableCell>Bold</BccTableCell>
              <BccTableCell>20</BccTableCell>
              <BccTableCell>24</BccTableCell>
            </BccTableRow>
            <BccTableRow>
              <BccTableCell>Header 6</BccTableCell>
              <BccTableCell>Bold</BccTableCell>
              <BccTableCell>18</BccTableCell>
              <BccTableCell>20</BccTableCell>
            </BccTableRow>
            <BccTableRow>
              <BccTableCell>Paragraph-18</BccTableCell>
              <BccTableCell>Regular</BccTableCell>
              <BccTableCell>18</BccTableCell>
              <BccTableCell>24</BccTableCell>
            </BccTableRow>
            <BccTableRow>
              <BccTableCell>Paragraph-16 medium</BccTableCell>
              <BccTableCell>Medium</BccTableCell>
              <BccTableCell>16</BccTableCell>
              <BccTableCell>20</BccTableCell>
            </BccTableRow>
            <BccTableRow>
              <BccTableCell>Paragraph-16</BccTableCell>
              <BccTableCell>Regular</BccTableCell>
              <BccTableCell>16</BccTableCell>
              <BccTableCell>20</BccTableCell>
            </BccTableRow>
            <BccTableRow>
              <BccTableCell>Paragraph-16 longread</BccTableCell>
              <BccTableCell>Regular</BccTableCell>
              <BccTableCell>16</BccTableCell>
              <BccTableCell>24</BccTableCell>
            </BccTableRow>
            <BccTableRow>
              <BccTableCell>Paragraph-16</BccTableCell>
              <BccTableCell>Regular</BccTableCell>
              <BccTableCell>16</BccTableCell>
              <BccTableCell>24</BccTableCell>
            </BccTableRow>
            <BccTableRow>
              <BccTableCell>Text-14</BccTableCell>
              <BccTableCell>Regular</BccTableCell>
              <BccTableCell>14</BccTableCell>
              <BccTableCell>24</BccTableCell>
            </BccTableRow>
            <BccTableRow>
              <BccTableCell>Caption-12</BccTableCell>
              <BccTableCell>Regular</BccTableCell>
              <BccTableCell>12</BccTableCell>
              <BccTableCell>16</BccTableCell>
            </BccTableRow>
          </BccTableBody>
        </BccTable>
      </BccTableContainer>
    </>
  )
}

export default Typography
