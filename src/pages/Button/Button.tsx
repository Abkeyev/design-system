import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import './Button.css'
import { BccButton } from '../../components/BccComponents'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Button: React.FC = () => {
  const history = useHistory()

  return (
    <Fragment>
      <h1>{history.location.pathname.substr(1)}</h1>
      <h2>contained</h2>
      <SyntaxHighlighter language="javascript" style={prism}>
        {`npm i @bit/bcc.components.bcc-button`}
      </SyntaxHighlighter>
      <BccButton variant="contained" color="primary">
        Primary
      </BccButton>
      <BccButton variant="contained" color="secondary">
        Secondary
      </BccButton>
      <BccButton variant="contained" disabled>
        Disabled
      </BccButton>
      <SyntaxHighlighter language="javascript" style={prism}>
        {`<BccButton variant="contained" color="primary">Primary</BccButton>
<BccButton variant="contained" color="secondary">Secondary</BccButton>
<BccButton variant='contained' disabled>Disabled</BccButton>`}
      </SyntaxHighlighter>
      <h2>outlined</h2>
      <BccButton variant="outlined" color="primary">
        Primary
      </BccButton>
      <BccButton variant="outlined" color="secondary">
        Secondary
      </BccButton>
      <BccButton variant="outlined" disabled>
        Disabled
      </BccButton>
    </Fragment>
  )
}

export default Button
