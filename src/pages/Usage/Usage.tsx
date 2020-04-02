import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import BccTypography from '@bit/bcc.components.bcc-typography'
import { NavLink } from 'react-router-dom'
import { Menu } from '../../components/Sidebar/Sidebar'
import { animateScroll } from 'react-scroll'
const menu: Menu[] = require('../../data/menu.json')

const Usage = (props: any) => {
  animateScroll.scrollToTop(0)
  return (
    <>
      <div className="wrapper">
        <img src={process.env.PUBLIC_URL + '/usage.svg'} alt="Usage" />
      </div>
      <BccTypography block className="descTitle" type="p2">
        Основной инструмент фронтенд-разработчика — библиотека компонентов для
        создания веб-интерфейсов. В разделе «Компоненты» собраны примеры
        использования библиотеки. Там вы найдёте примеры и код компонентов, их
        свойства и правила использования.
      </BccTypography>
      <BccTypography block type="h4" className="descTitle">
        Шрифт Roboto
      </BccTypography>
      <BccTypography block type="p2" className="descTitle">
        Библиотека компонентов была разработана на основе Material-UI, который
        использует шрифт Roboto. Поэтому необходимо установить этот шрифт.
        Например, через Google Web Fonts:
      </BccTypography>
      <SyntaxHighlighter
        language="javascript"
        style={prism}
        wrapLines={true}
        className="install"
      >
        {`<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />`}
      </SyntaxHighlighter>
      <BccTypography block type="h4" className="descTitle">
        Установка
      </BccTypography>
      <BccTypography block type="p2" className="descTitle">
        Для установки и сохранения в вашем package.json зависимости компоненты
        запустите:
      </BccTypography>
      <SyntaxHighlighter
        language="javascript"
        style={prism}
        wrapLines={true}
        className="install"
      >
        {`npm install @bit/bcc.components.bcc-component --save`}
      </SyntaxHighlighter>
      <BccTypography block type="p2" className="descTitle">
        Для использование импортируйте установленный компонент:
      </BccTypography>
      <SyntaxHighlighter
        language="javascript"
        style={prism}
        wrapLines={true}
        className="install"
      >
        {`import BccComponent from '@bit/bcc.components.bcc-component'`}
      </SyntaxHighlighter>
      <BccTypography block type="h4" className="descTitle">
        Далее
      </BccTypography>
      <NavLink to="/overview/colors">
        <img
          onClick={() => props.setRoute(1)}
          className="imgNext"
          src={process.env.PUBLIC_URL + '/colors.svg'}
          alt="Colors"
        />
      </NavLink>
      <BccTypography block type="p2" className="descTitle">
        Цвета
      </BccTypography>
    </>
  )
}

export default Usage
