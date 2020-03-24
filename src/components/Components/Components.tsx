import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  BccButton,
  BccTypography,
  BccIconButton,
  BccInput,
  BccCheckbox,
  BccFormControl,
  BccFormControlLabel,
  BccFormGroup,
  BccFormHelperText,
  BccFormLabel,
  BccRadio,
  BccRadioGroup,
  BccAvatar,
  BccChip,
  BccAvatarGroup,
  BccDateTimeProvider,
  BccDatePicker,
  BccDateTimePicker,
  BccTimePicker,
  BccSelect,
  BccCollapseDetails,
  BccCollapsePanel,
  BccCollapseTitle,
  BccSwitch,
  BccBreadcrumbs,
  BccTooltip,
  BccBadge,
  BccAlert,
  BccToggleButton,
  BccToggleButtonGroup,
  BccTabsEx,
  BccStepperEx,
  BccDialogEx,
  BccPopoverEx,
  BccSnackbarEx,
  BccTableEx,
} from '../BccComponents'
import './Components.css'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import SaveIcon from '@material-ui/icons/Save'
import SendIcon from '@material-ui/icons/Send'
import AlarmIcon from '@material-ui/icons/Alarm'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'
import FaceIcon from '@material-ui/icons/Face'
import DoneIcon from '@material-ui/icons/Done'
import FolderIcon from '@material-ui/icons/Folder'
import PageviewIcon from '@material-ui/icons/Pageview'
import AssignmentIcon from '@material-ui/icons/Assignment'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import DateFnsUtils from '@date-io/date-fns'
import ruLocale from 'date-fns/locale/ru'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import MailIcon from '@material-ui/icons/Mail'

const allComponents = {
  avatar: [
    {
      id: 2101,
      title: 'Аватары изображений',
      desc:
        'Аватары можно создать, передав стандартные свойства компонента img, такие как src или srcSet.',
      component: wrapComponents(
        <>
          <BccAvatar src="/man-ava.png" />
          <BccAvatar src="/woman-ava.png" />
        </>
      ),
      code: `<Avatar src="/man-ava.png" />
<Avatar src="/woman-ava.png" />`,
    },
    {
      id: 2102,
      title: 'Буквенные аватары',
      desc:
        'Аватары, содержащие простые символы, можно создать, передав вашу строку как children.',
      component: wrapComponents(
        <>
          <BccAvatar>B</BccAvatar>
          <BccAvatar green>C</BccAvatar>
          <BccAvatar style={{ background: 'orange', color: 'white' }}>
            BCC
          </BccAvatar>
        </>
      ),
      code: `<BccAvatar>B</BccAvatar>
<BccAvatar green>C</BccAvatar>
<BccAvatar style={{ background: 'orange', color: 'white' }}>
  BCC
</BccAvatar>`,
    },
    {
      id: 2103,
      title: 'Иконочные аватары',
      desc: 'Аватары значков создаются путем передачи значка как children.',
      libs: `import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';`,
      component: wrapComponents(
        <>
          <BccAvatar>
            <FolderIcon />
          </BccAvatar>
          <BccAvatar green>
            <PageviewIcon />
          </BccAvatar>
          <BccAvatar style={{ background: 'orange', color: 'white' }}>
            <AssignmentIcon />
          </BccAvatar>
        </>
      ),
      code: `<BccAvatar>
  <FolderIcon />
</BccAvatar>
<BccAvatar green>
  <PageviewIcon />
</BccAvatar>
<BccAvatar style={{ background: 'orange', color: 'white' }}>
  <AssignmentIcon />
</BccAvatar>`,
    },
    {
      id: 2105,
      title: 'Сгруппированные',
      desc: 'BccAvatarGroup отображает дочерние элементы в виде стека.',
      libs: `import BccAvatarGroup from '@bit/bcc.component.bcc-avatar-group';
import BccTooltip from '@bit/bcc.component.bcc-tooltip';`,
      component: wrapComponents(
        <>
          <BccAvatarGroup>
            <BccAvatar alt="Remy Sharp" src="/man-ava.png" />
            <BccAvatar alt="Travis Howard" src="/woman-ava.png" />
            <BccAvatar>+3</BccAvatar>
          </BccAvatarGroup>
        </>
      ),
      code: `<BccAvatarGroup>
  <BccAvatar alt="Remy Sharp" src="/man-ava.png" />
  <BccAvatar alt="Travis Howard" src="/woman-ava.png" />
  <BccTooltip title="Foo • Bar • Baz">
    <BccAvatar>+3</BccAvatar>
  </BccTooltip>
</BccAvatarGroup>`,
    },
    {
      id: 2104,
      title: 'Варианты',
      desc:
        'Если вам нужны квадратные или округлые аватары, используйте проп variant.',
      libs: `import PageviewIcon from '@material-ui/icons/Pageview';`,
      component: wrapComponents(
        <>
          <BccAvatar green variant="square">
            B
          </BccAvatar>
          <BccAvatar green variant="rounded">
            <PageviewIcon />
          </BccAvatar>
        </>
      ),
      code: `<BccAvatar green variant="square">
  B
</BccAvatar>
<BccAvatar green variant="rounded">
  <PageviewIcon />
</BccAvatar>`,
    },
  ],
  button: [
    {
      id: 2001,
      title: 'Блочные кнопки',
      desc:
        'Блочные кнопки имеют высокий акцент, отличаются использованием возвышения и заполнения. Они содержат действия, которые являются основными для вашего приложения.',
      component: wrapComponents(
        <>
          <BccButton variant="contained" color="primary">
            Primary
          </BccButton>
          <BccButton variant="contained" disabled>
            Disabled
          </BccButton>
        </>
      ),
      code: `<BccButton variant='contained' color='primary'>Primary</BccButton>
<BccButton variant='contained' disabled>Disabled</BccButton>`,
    },
    {
      id: 2002,
      title: 'Тестовые кнопки',
      desc:
        'Текстовые кнопки обычно используются для менее выраженных действий',
      component: wrapComponents(
        <>
          <BccButton variant="text" color="primary">
            Primary
          </BccButton>
          <BccButton variant="text" color="secondary">
            Secondary
          </BccButton>
          <BccButton variant="text" disabled>
            Disabled
          </BccButton>
        </>
      ),
      code: `<BccButton variant='text' color='primary'>Primary</BccButton>
<BccButton variant='text' color='secondary'>Secondary</BccButton>
<BccButton variant='text' disabled>Disabled</BccButton>`,
    },
    {
      id: 2003,
      title: 'Контурные кнопки',
      desc:
        'Текстовые кнопки обычно используются для менее выраженных действий',
      component: wrapComponents(
        <>
          <BccButton variant="outlined" color="primary">
            Primary
          </BccButton>
          <BccButton variant="outlined" disabled>
            Disabled
          </BccButton>
        </>
      ),
      code: `<BccButton variant='outlined' color='primary'>Primary</BccButton>
<BccButton variant='outlined' disabled>Disabled</BccButton>`,
    },
    {
      id: 2004,
      title: 'Размеры',
      desc: 'Размеры кнопок',
      component: wrapComponents(
        <>
          <BccButton variant="contained" color="primary" size="small">
            Small
          </BccButton>
          <BccButton variant="contained" color="primary" size="medium">
            Medium
          </BccButton>
          <BccButton variant="contained" color="primary" size="large">
            Large
          </BccButton>
        </>
      ),
      code: `<BccButton variant="contained" color="primary" size="small">
  Small
</BccButton>
<BccButton variant="contained" color="primary" size="medium">
  Medium
</BccButton>
<BccButton variant="contained" color="primary" size="large">
  Large
</BccButton>`,
    },
    {
      id: 2006,
      title: 'Кнопки с иконкой и текстом',
      desc: 'Кнопки с иконкой и текстом',
      libs: `import SendIcon from '@material-ui/icons/Send';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';`,
      component: wrapComponents(
        <>
          <BccButton
            variant="contained"
            color="primary"
            startIcon={<SendIcon />}
          >
            Отправить
          </BccButton>
          <BccButton
            variant="contained"
            color="default"
            endIcon={<CloudUploadIcon />}
          >
            Загрузить
          </BccButton>
          <BccButton
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
          >
            Сохранить
          </BccButton>
        </>
      ),
      code: `<BccButton
  variant="contained"
  color="primary"
  startIcon={<SendIcon />}
>
  Отправить
</BccButton>
<BccButton
  variant="contained"
  color="default"
  endIcon={<CloudUploadIcon />}
>
  Загрузить
</BccButton>
<BccButton
  variant="contained"
  color="primary"
  startIcon={<SaveIcon />}
>
  Сохранить
</BccButton>`,
    },
    {
      id: 2007,
      title: 'Кнопка с иконкой',
      desc: 'Кнопка с иконкой',
      libs: `import BccIconButton from '@bit/bcc.components.bcc-icon-button';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';`,
      component: wrapComponents(
        <>
          <BccIconButton color="primary">
            <DeleteIcon />
          </BccIconButton>
          <BccIconButton disabled color="primary">
            <DeleteIcon />
          </BccIconButton>
          <BccIconButton color="primary">
            <AlarmIcon />
          </BccIconButton>
          <BccIconButton color="primary">
            <AddShoppingCartIcon />
          </BccIconButton>
        </>
      ),
      code: `<BccIconButton color="primary">
  <DeleteIcon />
</BccIconButton>
<BccIconButton disabled color="primary">
  <DeleteIcon />
</BccIconButton>
<BccIconButton color="primary">
  <AlarmIcon />
</BccIconButton>
<BccIconButton color="primary">
  <AddShoppingCartIcon />
</BccIconButton>`,
    },
    {
      id: 2008,
      title: 'Кнопка загрузки',
      desc:
        'Кнопка загрузки позволяет выбрать файл который вы хотите загрузить.',
      libs: `import AttachFileIcon from '@material-ui/icons/AttachFile';
import BccIconButton from '@bit/bcc.components.bcc-icon-button';`,
      component: wrapComponents(
        <>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="upload"
            multiple
            type="file"
          />
          <label htmlFor="upload">
            <BccButton variant="contained" color="primary" component="span">
              Выберите файл
            </BccButton>
          </label>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="upload1"
            multiple
            type="file"
          />
          <label htmlFor="upload1">
            <BccButton variant="outlined" color="primary" component="span">
              Выберите файл
            </BccButton>
          </label>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="upload2"
            multiple
            type="file"
          />
          <label htmlFor="upload2">
            <BccButton variant="text" color="primary" component="span">
              Выберите файл
            </BccButton>
          </label>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="upload3"
            type="file"
          />
          <label htmlFor="upload3">
            <BccIconButton
              size="small"
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <AttachFileIcon />
            </BccIconButton>
          </label>
        </>
      ),
      code: `<input
  accept="image/*"
  style={{ display: 'none' }}
  id="upload"
  multiple
  type="file"
/>
<label htmlFor="upload">
  <BccButton variant="contained" color="primary" component="span">
    Выберите файл
  </BccButton>
</label>
<input
  accept="image/*"
  style={{ display: 'none' }}
  id="upload1"
  multiple
  type="file"
/>
<label htmlFor="upload1">
  <BccButton variant="outlined" color="primary" component="span">
    Выберите файл
  </BccButton>
</label>
<input
  accept="image/*"
  style={{ display: 'none' }}
  id="upload2"
  multiple
  type="file"
/>
<label htmlFor="upload2">
  <BccButton variant="text" color="primary" component="span">
    Выберите файл
  </BccButton>
</label>
<input
  accept="image/*"
  style={{ display: 'none' }}
  id="upload3"
  type="file"
/>
<label htmlFor="upload3">
  <BccIconButton
    size="small"
    color="primary"
    aria-label="upload picture"
    component="span"
  >
    <AttachFileIcon />
  </BccIconButton>
</label>`,
    },
  ],
  input: [
    {
      id: 3001,
      title: 'Текстовые поля',
      desc:
        'Текстовое поля представляет собой полноценный элемент управления формы, включая метку (label), само поле ввода и вспомогательный текст.',
      component: wrapComponents(
        <>
          <BccInput label="Filled" variant="filled" />
          <BccInput label="Outlined" variant="outlined" />
        </>
      ),
      code: `<BccInput label="Filled" variant="filled"/>
<BccInput label="Outlined" variant="outlined"/>`,
    },
    {
      id: 3002,
      title: 'Текстовые поля Filled Props',
      desc:
        'Поддерживаются стандартные атрибуты формы, например required, disabled, type и т. д., а также helperText, который используется для предоставления контекста о вводе поля, например, о том, как будет использоваться ввод.',
      component: wrapComponents(
        <>
          <BccInput label="Required" required variant="filled" />
          <BccInput label="Disabled" disabled variant="filled" />
          <BccInput label="Password" type="password" variant="filled" />
          <BccInput
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
          <BccInput
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <BccInput label="Search" type="search" variant="filled" />
          <BccInput
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="filled"
          />
          <BccInput
            label="Error"
            defaultValue="Default Value"
            helperText="Some error info"
            error
            variant="filled"
          />
          <BccInput
            label="Multiline"
            defaultValue="Default Value"
            multiline
            variant="filled"
          />
          <BccInput label="Full width" fullWidth variant="filled" />
        </>
      ),
      code: `<BccInput label="Required" required variant="filled" />
<BccInput label="Disabled" disabled variant="filled" />
<BccInput label="Password" type="password" variant="filled" />
<BccInput
  label="Read Only"
  defaultValue="Hello World"
  InputProps={{
    readOnly: true,
  }}
  variant="filled"
/>
<BccInput
  label="Number"
  type="number"
  InputLabelProps={{
    shrink: true,
  }}
  variant="filled"
/>
<BccInput label="Search" type="search" variant="filled" />
<BccInput
  label="Helper text"
  defaultValue="Default Value"
  helperText="Some important text"
  variant="filled"
/>
<BccInput
  label="Error"
  defaultValue="Default Value"
  helperText="Some error info"
  error
  variant="filled"
/>
<BccInput
  label="Multiline"
  defaultValue="Default Value"
  multiline
  variant="filled"
/>
<BccInput
  label="Full width"
  fullWidth
  variant="filled"
/>`,
    },
    {
      id: 3004,
      title: 'Текстовые поля Outlined Props',
      desc:
        'Поддерживаются стандартные атрибуты формы, например required, disabled, type и т. д., а также helperText, который используется для предоставления контекста о вводе поля, например, о том, как будет использоваться ввод.',
      component: wrapComponents(
        <>
          <BccInput label="Required" required variant="outlined" />
          <BccInput label="Disabled" disabled variant="outlined" />
          <BccInput label="Password" type="password" variant="outlined" />
          <BccInput
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <BccInput
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <BccInput label="Search" type="search" variant="outlined" />
          <BccInput
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="outlined"
          />
          <BccInput
            label="Error"
            defaultValue="Default Value"
            helperText="Some error info"
            error
            variant="outlined"
          />
          <BccInput
            label="Multiline"
            defaultValue="Default Value"
            multiline
            variant="outlined"
          />
          <BccInput label="Full width" fullWidth variant="outlined" />
        </>
      ),
      code: `<BccInput label="Required" required variant="outlined" />
<BccInput label="Disabled" disabled variant="outlined" />
<BccInput label="Password" type="password" variant="outlined" />
<BccInput
  label="Read Only"
  defaultValue="Hello World"
  InputProps={{
    readOnly: true,
  }}
  variant="outlined"
/>
<BccInput
  label="Number"
  type="number"
  InputLabelProps={{
    shrink: true,
  }}
  variant="outlined"
/>
<BccInput label="Search" type="search" variant="outlined" />
<BccInput
  label="Helper text"
  defaultValue="Default Value"
  helperText="Some important text"
  variant="outlined"
/>
<BccInput
  label="Error"
  defaultValue="Default Value"
  helperText="Some error info"
  error
  variant="outlined"
/>
<BccInput
  label="Multiline"
  defaultValue="Default Value"
  multiline
  variant="outlined"
/>
<BccInput
  label="Full width"
  fullWidth
  variant="outlined"
/>`,
    },
    {
      id: 3005,
      title: 'Иконки',
      desc:
        'Существует несколько способов отображения значка с текстовым полем.',
      libs: `import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';`,
      component: (
        <>
          {wrapComponents(
            <>
              <BccInput
                id="input-with-icon-textfield"
                label="Логин"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <BccInput
                id="input-with-icon-textfield"
                label="Логин"
                variant="filled"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </>
          )}
          {wrapComponents(
            <>
              <BccInput
                id="input-with-icon-textfield"
                label="Логин"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <BccInput
                id="input-with-icon-textfield"
                label="Логин"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </>
          )}
        </>
      ),
      code: `<BccInput
  id="input-with-icon-textfield"
  label="Логин"
  variant="filled"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <AccountCircle />
      </InputAdornment>
    ),
  }}
/>
<BccInput
  id="input-with-icon-textfield"
  label="Логин"
  variant="filled"
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <AccountCircle />
      </InputAdornment>
    ),
  }}
/>
<BccInput
  id="input-with-icon-textfield"
  label="Логин"
  variant="outlined"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <AccountCircle />
      </InputAdornment>
    ),
  }}
/>
<BccInput
  id="input-with-icon-textfield"
  label="Логин"
  variant="outlined"
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <AccountCircle />
      </InputAdornment>
    ),
  }}
/>`,
    },
    {
      id: 3006,
      title: 'Украшения поля ввода',
      desc:
        'Их можно использовать для добавления префикса, суффикса или действия к полю ввода. Например, вы можете использовать кнопку-иконку, чтобы скрыть или показать пароль.',
      component: (
        <>
          {wrapComponents(
            <>
              <BccInput
                label="Сумма"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₸</InputAdornment>
                  ),
                }}
              />
              <BccInput
                label="Сумма"
                variant="filled"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">₸</InputAdornment>
                  ),
                }}
              />
            </>
          )}
          {wrapComponents(
            <>
              <BccInput
                label="Сумма"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₸</InputAdornment>
                  ),
                }}
              />
              <BccInput
                label="Сумма"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">₸</InputAdornment>
                  ),
                }}
              />
            </>
          )}
        </>
      ),
      code: `<BccInput
  label="Сумма"
  variant="filled"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">₸</InputAdornment>
    ),
  }}
/>
<BccInput
  label="Сумма"
  variant="filled"
  InputProps={{
    endAdornment: <InputAdornment position="end">₸</InputAdornment>,
  }}
/>
<BccInput
  label="Сумма"
  variant="outlined"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">₸</InputAdornment>
    ),
  }}
/>
<BccInput
  label="Сумма"
  variant="outlined"
  InputProps={{
    endAdornment: <InputAdornment position="end">₸</InputAdornment>,
  }}
/>`,
    },
    {
      id: 3007,
      title: 'Размеры',
      desc: '',
      component: (
        <>
          {wrapComponents(
            <>
              <BccInput label="Small" size="small" variant="filled" />
              <BccInput label="Normal" size="medium" variant="filled" />
            </>
          )}
          {wrapComponents(
            <>
              <BccInput label="Small" size="small" variant="outlined" />
              <BccInput label="Normal" size="medium" variant="outlined" />
            </>
          )}
        </>
      ),
      code: `<BccInput label="Small" size="small" variant="filled" />
<BccInput label="Normal" size="medium" variant="filled" />
<BccInput label="Small" size="small" variant="outlined" />
<BccInput label="Normal" size="medium" variant="outlined" />`,
    },
    {
      id: 3007,
      title: 'Отступы',
      desc: '',
      component: wrapComponents(
        <>
          <BccInput label="None" margin="none" variant="filled" />
          <BccInput label="Dense" margin="dense" variant="filled" />
          <BccInput label="Normal" margin="normal" variant="filled" />
        </>
      ),
      code: `<BccInput label="None" margin="none" variant="filled" />
<BccInput label="Dense" margin="dense" variant="filled" />
<BccInput label="Normal" margin="normal" variant="filled" />`,
    },
  ],
  checkbox: [
    {
      id: 4001,
      title: 'Стандартный',
      desc:
        'Мы используем чекбоксы, когда есть опция или список опций. Каждый чекбокс существует независимо от остальных чекбоксов в списке, а выбор одного пункта не снимет флажок с остальных.',
      component: wrapComponents(
        <>
          <BccCheckbox />
          <BccCheckbox checked />
          <BccCheckbox checked indeterminate />
          <BccCheckbox disabled />
          <BccCheckbox disabled checked />
        </>
      ),
      code: `<BccCheckbox/>
<BccCheckbox checked/>
<BccCheckbox checked indeterminate />
<BccCheckbox disabled/>
<BccCheckbox disabled checked/>`,
    },
    {
      id: 4002,
      title: 'С иконкой',
      desc:
        'Мы используем чекбоксы, когда есть опция или список опций. Каждый чекбокс существует независимо от остальных чекбоксов в списке, а выбор одного пункта не снимет флажок с остальных.',
      libs: `import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';`,
      component: wrapComponents(
        <>
          <BccCheckbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <BccCheckbox icon={<StarBorderIcon />} checkedIcon={<StarIcon />} />
        </>
      ),
      code: `<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />`,
    },
    {
      id: 4002,
      title: 'Размеры',
      desc:
        'Мы используем чекбоксы, когда есть опция или список опций. Каждый чекбокс существует независимо от остальных чекбоксов в списке, а выбор одного пункта не снимет флажок с остальных.',
      component: wrapComponents(
        <>
          <BccCheckbox size="small" />
          <BccCheckbox size="small" checked />
          <BccCheckbox size="medium" />
          <BccCheckbox size="medium" checked />
        </>
      ),
      code: `<BccCheckbox size="small" />
<BccCheckbox size="small" checked />
<BccCheckbox size="medium" />
<BccCheckbox size="medium" checked />`,
    },
    {
      id: 4002,
      title: 'С текстом',
      desc:
        'Чекбокс также можно использовать с описанием метки благодаря компоненту BccFormControlLabel.',
      libs: `import BccFormControlLabel from '@bit/bcc.components.bcc-form-control-label'`,
      component: wrapComponents(
        <>
          <BccFormControlLabel
            control={<BccCheckbox />}
            label="Я согласен(а) с условиями"
          />
          <BccFormControlLabel
            control={<BccCheckbox checked />}
            label="Я согласен(а) с условиями"
          />
        </>
      ),
      code: `<BccFormControlLabel
  control={<BccCheckbox />}
  label="Я согласен(а) с условиями"
/>
<BccFormControlLabel
  control={<BccCheckbox checked />}
  label="Я согласен(а) с условиями"
/>`,
    },
    {
      id: 4002,
      title: 'Группа',
      desc:
        'BccFormGroup - это полезная обертка, используемая для группировки компонентов элементов управления выбором, она предоставляет более простой API.',
      libs: `import BccFormGroup from '@bit/bcc.components.bcc-form-group';
import BccFormLabel from '@bit/bcc.components.bcc-form-label';
import BccFormControlLabel from '@bit/bcc.components.bcc-form-control-label';`,
      component: wrapComponents(
        <>
          <BccFormControl>
            <BccFormLabel>Выберите районы:</BccFormLabel>
            <BccFormGroup>
              <BccFormControlLabel
                control={<BccCheckbox />}
                label="Алмалинский"
              />
              <BccFormControlLabel
                control={<BccCheckbox />}
                label="Медеуский"
              />
              <BccFormControlLabel
                control={<BccCheckbox />}
                label="Бостандыкский"
              />
            </BccFormGroup>
            <BccFormHelperText>
              Можете выбрать один или несколько
            </BccFormHelperText>
          </BccFormControl>
        </>
      ),
      code: `<BccFormControl>
  <BccFormLabel>Выберите районы:</BccFormLabel>
  <BccFormGroup>
    <BccFormControlLabel
      control={<BccCheckbox />}
      label="Алмалинский"
    />
    <BccFormControlLabel
      control={<BccCheckbox />}
      label="Медеуский"
    />
    <BccFormControlLabel
      control={<BccCheckbox />}
      label="Бостандыкский"
    />
  </BccFormGroup>
  <BccFormHelperText>Можете выбрать один или несколько</BccFormHelperText>
</BccFormControl>`,
    },
  ],
  radio: [
    {
      id: 5001,
      title: 'Автономные',
      desc: 'Радио можно использовать отдельно, без обертки.',
      libs: ``,
      component: wrapComponents(
        <>
          <BccRadio checked value="a" />
          <BccRadio value="b" />
          <BccRadio value="d" disabled />
        </>
      ),
      code: `<BccRadio checked value="a" />
<BccRadio value="b" />
<BccRadio value="d" disabled />`,
    },
    {
      id: 5002,
      title: 'Группа',
      desc:
        'Для радиокнопок наиболее часто используемый параметр должен быть выбран по умолчанию. RadioGroup - это полезная обертка, используемая для группировки компонентов Radio, она обеспечивает более простой API и управление с клавиатуры.',
      libs: ``,
      component: wrapComponents(
        <>
          <BccFormControl>
            <BccFormLabel>Выберите пол:</BccFormLabel>
            <BccRadioGroup>
              <BccFormControlLabel
                control={<BccRadio />}
                value="male"
                label="Мужской"
              />
              <BccFormControlLabel
                control={<BccRadio />}
                value="female"
                label="Женский"
              />
              <BccFormControlLabel
                control={<BccRadio />}
                value="other"
                label="Другой"
              />
              <BccFormControlLabel
                disabled
                value="disabled"
                control={<BccRadio />}
                label="Не активный"
              />
              <BccFormControlLabel
                disabled
                checked
                value="disabledActive"
                control={<BccRadio />}
                label="Не активный выбранный"
              />
            </BccRadioGroup>
            <BccFormHelperText>Выберите один из вариантов</BccFormHelperText>
          </BccFormControl>
        </>
      ),
      code: `<BccFormControl>
  <BccFormLabel>Выберите пол:</BccFormLabel>
  <BccRadioGroup>
    <BccFormControlLabel
      control={<BccRadio />}
      label="Мужской"
    />
    <BccFormControlLabel
      control={<BccRadio />}
      label="Женский"
    />
    <BccFormControlLabel
      control={<BccRadio />}
      label="Другой"
    />
    <BccFormControlLabel
      disabled
      control={<BccRadio />}
      label="Не активный"
    />
    <BccFormControlLabel
      disabled
      checked
      value="disabledActive"
      control={<BccRadio />}
      label="Не активный выбранный"
    />
  </BccRadioGroup>
  <BccFormHelperText>Выберите один из вариантов</BccFormHelperText>
</BccFormControl>`,
    },
    {
      id: 5002,
      title: 'Расположение',
      desc: 'Расположение метки можно изменить.',
      libs: `import BccFormControl from '@bit/bcc.components.bcc-form-control';
import BccRadioGroup from '@bit/bcc.components.bcc-radio-group';
import BccFormControlLabel from '@bit/bcc.components.bcc-form-control-label';`,
      component: wrapComponents(
        <>
          <BccFormControl>
            <BccRadioGroup>
              <BccFormControlLabel
                value="top"
                control={<BccRadio />}
                label="Сверху"
                labelPlacement="top"
              />
              <BccFormControlLabel
                value="start"
                control={<BccRadio />}
                label="В начале"
                labelPlacement="start"
              />
              <BccFormControlLabel
                value="bottom"
                control={<BccRadio />}
                label="Снизу"
                labelPlacement="bottom"
              />
              <BccFormControlLabel
                value="end"
                control={<BccRadio />}
                label="В конце"
                labelPlacement="end"
              />
            </BccRadioGroup>
          </BccFormControl>
        </>
      ),
      code: `<BccFormControl>
  <BccRadioGroup>
    <BccFormControlLabel
      value="top"
      control={<BccRadio />}
      label="Сверху"
      labelPlacement="top"
    />
    <BccFormControlLabel
      value="start"
      control={<BccRadio />}
      label="В начале"
      labelPlacement="start"
    />
    <BccFormControlLabel
      value="bottom"
      control={<BccRadio />}
      label="Снизу"
      labelPlacement="bottom"
    />
    <BccFormControlLabel
      value="end"
      control={<BccRadio />}
      label="В конце"
      labelPlacement="end"
    />
  </BccRadioGroup>
</BccFormControl>`,
    },
  ],
  chip: [
    {
      id: 6001,
      title: 'Заполненная фишка',
      desc: 'Примеры заполненых фишек в разных состояниях.',
      libs: `import BccAvatar from '@bit/bcc.components.bcc-avatar'
import FaceIcon from '@material-ui/icons/Face'
import DoneIcon from '@material-ui/icons/Done'`,
      component: wrapComponents(
        <>
          <BccChip label="Обычный" />
          <BccChip label="Не активный" disabled />
          <BccChip label="Кликабельный" onClick={() => {}} />
          <BccChip
            avatar={<BccAvatar src="/man-ava.png" />}
            label="С аватаркой"
          />
          <BccChip icon={<FaceIcon />} label="С иконкой" />
          <BccChip label="Удаляемый" onDelete={() => {}} />
          <BccChip
            label="Своя иконка удаления"
            deleteIcon={<DoneIcon />}
            onDelete={() => {}}
          />
          <BccChip
            label="Кликабельная ссылка"
            component="a"
            href="#chip"
            clickable
          />
        </>
      ),
      code: `<BccChip label="Обычный" />
<BccChip label="Не активный" disabled />
<BccChip label="Кликабельный" onClick={() => {}} />
<BccChip
  avatar={<BccAvatar src="/man-ava.png" />}
  label="С аватаркой"
/>
<BccChip icon={<FaceIcon />} label="С иконкой" />
<BccChip label="Удаляемый" onDelete={() => {}} />
<BccChip
  label="Своя иконка удаления"
  deleteIcon={<DoneIcon />}
  onDelete={() => {}}
/>
<BccChip
  label="Кликабельная ссылка"
  component="a"
  href="#chip"
  clickable
/>`,
    },
    {
      id: 6002,
      title: 'Контурная фишка',
      desc: 'Примеры контурных фишек в разных состояниях.',
      libs: `import BccAvatar from '@bit/bcc.components.bcc-avatar'
import FaceIcon from '@material-ui/icons/Face'
import DoneIcon from '@material-ui/icons/Done'`,
      component: wrapComponents(
        <>
          <BccChip variant="outlined" label="Обычный" />
          <BccChip variant="outlined" label="Не активный" disabled />
          <BccChip variant="outlined" label="Кликабельный" onClick={() => {}} />
          <BccChip
            variant="outlined"
            avatar={<BccAvatar src="/man-ava.png" />}
            label="С аватаркой"
          />
          <BccChip variant="outlined" icon={<FaceIcon />} label="С иконкой" />
          <BccChip variant="outlined" label="Удаляемый" onDelete={() => {}} />
          <BccChip
            variant="outlined"
            label="Своя иконка удаления"
            deleteIcon={<DoneIcon />}
            onDelete={() => {}}
          />
          <BccChip
            variant="outlined"
            label="Кликабельная ссылка"
            component="a"
            href="#chip"
            clickable
          />
        </>
      ),
      code: `<BccChip variant="outlined" label="Обычный" />
<BccChip variant="outlined" label="Не активный" disabled />
<BccChip variant="outlined" label="Кликабельный" onClick={() => {}} />
<BccChip
  variant="outlined"
  avatar={<BccAvatar src="/man-ava.png" />}
  label="С аватаркой"
/>
<BccChip variant="outlined" icon={<FaceIcon />} label="С иконкой" />
<BccChip variant="outlined" label="Удаляемый" onDelete={() => {}} />
<BccChip
  variant="outlined"
  label="Своя иконка удаления"
  deleteIcon={<DoneIcon />}
  onDelete={() => {}}
/>
<BccChip
  variant="outlined"
  label="Кликабельная ссылка"
  component="a"
  href="#chip"
  clickable
/>`,
    },
    {
      id: 6001,
      title: 'Размеры фишек',
      desc: 'Примеры размеров фишек в разных состояниях.',
      libs: `import BccAvatar from '@bit/bcc.components.bcc-avatar'
import FaceIcon from '@material-ui/icons/Face'
import DoneIcon from '@material-ui/icons/Done'`,
      component: wrapComponents(
        <>
          <BccChip size="small" label="Обычный" />
          <BccChip size="small" label="Не активный" disabled />
          <BccChip size="small" label="Кликабельный" onClick={() => {}} />
          <BccChip
            size="small"
            avatar={<BccAvatar src="/man-ava.png" />}
            label="С аватаркой"
          />
          <BccChip size="small" icon={<FaceIcon />} label="С иконкой" />
          <BccChip size="small" label="Удаляемый" onDelete={() => {}} />
          <BccChip
            size="small"
            label="Своя иконка удаления"
            deleteIcon={<DoneIcon />}
            onDelete={() => {}}
          />
          <BccChip
            size="small"
            label="Кликабельная ссылка"
            component="a"
            href="#chip"
            clickable
          />
        </>
      ),
      code: `<BccChip size="small" label="Обычный" />
<BccChip size="small" label="Не активный" disabled />
<BccChip size="small" label="Кликабельный" onClick={() => {}} />
<BccChip
  size="small"
  avatar={<BccAvatar src="/man-ava.png" />}
  label="С аватаркой"
/>
<BccChip size="small" icon={<FaceIcon />} label="С иконкой" />
<BccChip size="small" label="Удаляемый" onDelete={() => {}} />
<BccChip
  size="small"
  label="Своя иконка удаления"
  deleteIcon={<DoneIcon />}
  onDelete={() => {}}
/>
<BccChip
  size="small"
  label="Кликабельная ссылка"
  component="a"
  href="#chip"
  clickable
/>`,
    },
  ],
  datetime: [
    {
      id: 7001,
      title: 'Выбор даты',
      desc: 'Поле для выбора даты.',
      libs: `import DateFnsUtils from '@date-io/date-fns;'
import ruLocale from 'date-fns/locale/ru';`,
      component: wrapComponents(
        <>
          <BccDateTimeProvider utils={DateFnsUtils} locale={ruLocale}>
            <BccDatePicker
              placeholder="10.10.2018"
              format="dd.MM.yyyy"
              onChange={() => {}}
            />
          </BccDateTimeProvider>
        </>
      ),
      code: `<BccDateTimeProvider utils={DateFnsUtils} locale={ruLocale}>
  <BccDatePicker
    placeholder="10.10.2018"
    format="dd.MM.yyyy"
    onChange={() => {}}
  />
</BccDateTimeProvider>`,
    },
    {
      id: 7002,
      title: 'Выбор времени',
      desc: 'Поле для выбора времени.',
      libs: `import DateFnsUtils from '@date-io/date-fns;'
import ruLocale from 'date-fns/locale/ru';`,
      component: wrapComponents(
        <>
          <BccDateTimeProvider utils={DateFnsUtils} locale={ruLocale}>
            <BccTimePicker value={new Date(1 - 1 - 2020)} onChange={() => {}} />
          </BccDateTimeProvider>
        </>
      ),
      code: `<BccDateTimeProvider utils={DateFnsUtils} locale={ruLocale}>
  <BccTimePicker value={new Date(1 - 1 - 2020)} onChange={() => {}} />
</BccDateTimeProvider>`,
    },
    {
      id: 7003,
      title: 'Выбор даты и времени',
      desc: 'Поле для выбора даты и времени.',
      libs: `import DateFnsUtils from '@date-io/date-fns;'
import ruLocale from 'date-fns/locale/ru';`,
      component: wrapComponents(
        <>
          <BccDateTimeProvider utils={DateFnsUtils} locale={ruLocale}>
            <BccDateTimePicker
              value={new Date(1 - 1 - 2020)}
              onChange={() => {}}
            />
          </BccDateTimeProvider>
        </>
      ),
      code: `<BccDateTimeProvider utils={DateFnsUtils} locale={ruLocale}>
  <BccDateTimePicker
    value={new Date(1 - 1 - 2020)}
    onChange={() => {}}
  />
</BccDateTimeProvider>`,
    },
  ],
  select: [
    {
      id: 8001,
      title: 'Состояния',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccSelect
            placeholder="Город"
            options={[
              { value: 'astana', label: 'Нур-Султан' },
              { value: 'almaty', label: 'Алматы' },
              { value: 'shymkent', label: 'Шымкент' },
            ]}
          />
          <BccSelect
            error
            errorText="Ошибка"
            placeholder="Город"
            options={[
              { value: 'astana', label: 'Нур-Султан' },
              { value: 'almaty', label: 'Алматы' },
              { value: 'shymkent', label: 'Шымкент' },
            ]}
          />
          <BccSelect
            isDisabled
            placeholder="Не активный"
            options={[
              { value: 'astana', label: 'Нур-Султан' },
              { value: 'almaty', label: 'Алматы' },
              { value: 'shymkent', label: 'Шымкент' },
            ]}
          />
        </>
      ),
      code: `<BccSelect placeholder="Город" options={[
  { value: 'astana', label: 'Нур-Султан' },
  { value: 'almaty', label: 'Алматы' },
  { value: 'shymkent', label: 'Шымкент' },
]} />
<BccSelect error errorText="Ошибка" placeholder="Город" options={[
  { value: 'astana', label: 'Нур-Султан' },
  { value: 'almaty', label: 'Алматы' },
  { value: 'shymkent', label: 'Шымкент' },
]} />
<BccSelect isDisabled placeholder="Не активный" options={[
  { value: 'astana', label: 'Нур-Султан' },
  { value: 'almaty', label: 'Алматы' },
  { value: 'shymkent', label: 'Шымкент' },
]} />`,
    },
    {
      id: 8002,
      title: 'Multiselect',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccSelect
            isMulti
            placeholder="Город"
            options={[
              { value: 'astana', label: 'Нур-Султан' },
              { value: 'almaty', label: 'Алматы' },
              { value: 'shymkent', label: 'Шымкент' },
            ]}
          />
        </>
      ),
      code: `<BccSelect isMulti placeholder="Город" options={[
  { value: 'astana', label: 'Нур-Султан' },
  { value: 'almaty', label: 'Алматы' },
  { value: 'shymkent', label: 'Шымкент' },
]} />`,
    },
  ],
  collapse: [
    {
      id: 9001,
      title: 'Состояния',
      desc: '',
      libs: `import BccCollapsePanel from '@bit/bcc.components.bcc-collapse-panel';
import BccCollapseTitle from '@bit/bcc.components.bcc-collapse-title';
import BccCollapseDetails from '@bit/bcc.components.bcc-collapse-details';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';`,
      component: wrapComponents(
        <>
          <BccCollapsePanel>
            <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
              <BccTypography type="p2">Панель 1</BccTypography>
            </BccCollapseTitle>
            <BccCollapseDetails>
              <BccTypography type="p2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </BccTypography>
            </BccCollapseDetails>
          </BccCollapsePanel>
          <BccCollapsePanel>
            <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
              <BccTypography type="p2">Панель 2</BccTypography>
            </BccCollapseTitle>
            <BccCollapseDetails>
              <BccTypography type="p2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </BccTypography>
            </BccCollapseDetails>
          </BccCollapsePanel>
          <BccCollapsePanel disabled>
            <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
              <BccTypography type="p2">Не активная панель</BccTypography>
            </BccCollapseTitle>
          </BccCollapsePanel>
        </>
      ),
      code: `<BccCollapsePanel>
  <BccCollapseTitle
    expandIcon={<ExpandMoreIcon />}
  >
    <BccTypography type="p2">Панель 1</BccTypography>
  </BccCollapseTitle>
  <BccCollapseDetails>
    <BccTypography type="p2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
      sit amet blandit leo lobortis eget.
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
      sit amet blandit leo lobortis eget.
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
</BccCollapsePanel>`,
    },
  ],
  switch: [
    {
      id: 10001,
      title: 'Стандартный',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccSwitch />
        </>
      ),
      code: `<BccSwitch />`,
    },
  ],
  tabs: [
    {
      id: 11001,
      title: 'Простые табы',
      desc:
        'Tabs позволяют легко исследовать и переключаться между различными представлениями.',
      libs: `import BccCollapseTitle from '@bit/bcc.components.bcc-collapse-title';
import BccCollapseDetails from '@bit/bcc.components.bcc-collapse-details';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';`,
      component: wrapComponents(
        <>
          <BccTabsEx />
        </>
      ),
      code: `import React from 'react'
import { BccTabs, BccTab } from '../../BccComponents'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import theme from '../../../theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabs: {
      padding: '8px 16px',
      backgroundColor: theme.palette.grey[50],
    },
  })
)

const BccTabsEx = () => {
  const [value, setValue] = React.useState(0)
  const classes = useStyles()

  return (
    <div>
      <BccTabs
        value={value}
        onChange={(e: any, index: number) => setValue(index)}
        aria-label="simple tabs example"
      >
        <BccTab label="Таб 1" />
        <BccTab label="Таб 2" />
        <BccTab label="Таб 3" />
      </BccTabs>
      <div className={classes.tabs} hidden={value !== 0}>
        Таб 1
      </div>
      <div className={classes.tabs} hidden={value !== 1}>
        Таб 2
      </div>
      <div className={classes.tabs} hidden={value !== 2}>
        Таб 3
      </div>
    </div>
  )
}

export default BccTabsEx`,
    },
  ],
  stepper: [
    {
      id: 12001,
      title: 'Линейный',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccStepperEx />
        </>
      ),
      code: ``,
    },
  ],
  breadcrumbs: [
    {
      id: 13001,
      title: 'Простые хлебные крошки',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccBreadcrumbs aria-label="breadcrumb">
            <BccTypography type="p3">Главная</BccTypography>
            <BccTypography type="p3">Компоненты</BccTypography>
            <BccTypography type="p3">Хлебные крошки</BccTypography>
          </BccBreadcrumbs>
        </>
      ),
      code: `<BccBreadcrumbs aria-label="breadcrumb">
  <BccTypography type="p3">Главная</BccTypography>
  <BccTypography type="p3">Компоненты</BccTypography>
  <BccTypography type="p3">Хлебные крошки</BccTypography>
</BccBreadcrumbs>`,
    },
  ],
  dialog: [
    {
      id: 14001,
      title: 'Стандартный',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccDialogEx />
        </>
      ),
      code: ``,
    },
  ],
  popover: [
    {
      id: 15001,
      title: 'Стандартный',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccPopoverEx />
        </>
      ),
      code: ``,
    },
  ],
  tooltip: [
    {
      id: 16001,
      title: 'Стандартный',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccInput
            id="input-with-icon-textfield"
            label="Логин"
            variant="filled"
            InputProps={{
              endAdornment: (
                <BccTooltip
                  title="Имя и фамилия латинскими буквами на лицевой стороне карты."
                  placement="bottom-end"
                  arrow
                  interactive
                >
                  <InputAdornment position="end">
                    <InfoOutlinedIcon />
                  </InputAdornment>
                </BccTooltip>
              ),
            }}
          />
        </>
      ),
      code: ``,
    },
  ],
  snackbar: [
    {
      id: 17001,
      title: 'Стандартный',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccSnackbarEx />
        </>
      ),
      code: ``,
    },
  ],
  badge: [
    {
      id: 18001,
      title: 'Стандартный',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccBadge badgeContent={4} color="primary">
            <MailIcon />
          </BccBadge>
        </>
      ),
      code: ``,
    },
  ],
  alert: [
    {
      id: 19001,
      title: 'Стандартный',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccAlert severity="error">
            This is an error alert — check it out!
          </BccAlert>
          <BccAlert severity="warning">
            This is a warning alert — check it out!
          </BccAlert>
          <BccAlert severity="info">
            This is an info alert — check it out!
          </BccAlert>
          <BccAlert severity="success">
            This is a success alert — check it out!
          </BccAlert>
        </>
      ),
      code: ``,
    },
  ],
  table: [
    {
      id: 20001,
      title: 'Стандартный',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccTableEx />
        </>
      ),
      code: ``,
    },
  ],
  toggle: [
    {
      id: 21001,
      title: 'Стандартный',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccToggleButtonGroup>
            <BccToggleButton value="left" selected>
              <BccTypography type="p4">Мужской</BccTypography>
            </BccToggleButton>
            <BccToggleButton value="center">
              <BccTypography type="p4">Женский</BccTypography>
            </BccToggleButton>
          </BccToggleButtonGroup>
        </>
      ),
      code: ``,
    },
  ],
}

function wrapComponents(component: any) {
  return <div className="elements">{component}</div>
}

function getComponents(name: string) {
  if (name === 'button') {
    return allComponents.button
  } else if (name === 'input') {
    return allComponents.input
  } else if (name === 'checkbox') {
    return allComponents.checkbox
  } else if (name === 'radio') {
    return allComponents.radio
  } else if (name === 'chip') {
    return allComponents.chip
  } else if (name === 'avatar') {
    return allComponents.avatar
  } else if (name === 'datetime') {
    return allComponents.datetime
  } else if (name === 'select') {
    return allComponents.select
  } else if (name === 'collapse') {
    return allComponents.collapse
  } else if (name === 'switch') {
    return allComponents.switch
  } else if (name === 'tabs') {
    return allComponents.tabs
  } else if (name === 'stepper') {
    return allComponents.stepper
  } else if (name === 'breadcrumbs') {
    return allComponents.breadcrumbs
  } else if (name === 'dialog') {
    return allComponents.dialog
  } else if (name === 'popover') {
    return allComponents.popover
  } else if (name === 'tooltip') {
    return allComponents.tooltip
  } else if (name === 'snackbar') {
    return allComponents.snackbar
  } else if (name === 'badge') {
    return allComponents.badge
  } else if (name === 'alert') {
    return allComponents.alert
  } else if (name === 'table') {
    return allComponents.table
  } else if (name === 'toggle') {
    return allComponents.toggle
  }
}

export const Components = (props: any) => {
  const item = props.item
  let components = getComponents(item.link)
  let install = item.install.join('\n')
  return (
    <>
      <BccTypography block type="h4" className="descTitle">
        Описание
      </BccTypography>
      <BccTypography block type="p2" className="desc">
        {item.desc}
      </BccTypography>
      <BccTypography block type="h4" className="installTitle">
        Установка
      </BccTypography>
      <SyntaxHighlighter
        language="javascript"
        style={prism}
        wrapLines={true}
        className="install"
      >
        {install}
      </SyntaxHighlighter>
      {components &&
        components.map((c: any) => {
          return (
            <>
              <BccTypography block type="h5" className="componentTitle">
                {c.title}
              </BccTypography>
              <BccTypography block type="p3" className="componentDesc">
                {c.desc}
              </BccTypography>
              {c.component}
              {c.libs && (
                <>
                  <BccTypography block type="h6" className="componentTitle">
                    Зависимости
                  </BccTypography>
                  <SyntaxHighlighter
                    language="javascript"
                    style={prism}
                    className="componentCode"
                  >
                    {c.libs}
                  </SyntaxHighlighter>
                </>
              )}
              {c.code && (
                <>
                  <BccTypography block type="h6" className="componentTitle">
                    Код
                  </BccTypography>
                  <SyntaxHighlighter
                    language="javascript"
                    style={prism}
                    className="componentCode"
                  >
                    {c.code}
                  </SyntaxHighlighter>
                </>
              )}
            </>
          )
        })}
      <BccTypography block type="h4" className="installTitle">
        Props
      </BccTypography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <BccTypography type="p3" weight="medium">
                  Название
                </BccTypography>
              </TableCell>
              <TableCell align="right">
                <BccTypography type="p3" weight="medium">
                  Тип
                </BccTypography>
              </TableCell>
              <TableCell align="right">
                <BccTypography type="p3" weight="medium">
                  По умолчанию
                </BccTypography>
              </TableCell>
              <TableCell align="right">
                <BccTypography type="p3" weight="medium">
                  Описание
                </BccTypography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item.props &&
              item.props.map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <BccTypography type="p4">{row.name}</BccTypography>
                  </TableCell>
                  <TableCell align="right">
                    <BccTypography type="p4">{row.type}</BccTypography>
                  </TableCell>
                  <TableCell align="right">
                    <BccTypography type="p4">{row.default}</BccTypography>
                  </TableCell>
                  <TableCell align="right">
                    <BccTypography type="p4">{row.desc}</BccTypography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
