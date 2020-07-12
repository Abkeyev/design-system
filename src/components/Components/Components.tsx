import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  BccButton,
  BccBadge,
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
  BccTabsEx,
  BccLink,
  BccStepperEx,
  BccDialogEx,
  BccPopoverEx,
  BccSnackbarEx,
  BccTableEx,
  BccSliderEx,
  BccAlert,
  BccAlertTitle,
  BccToggleButton,
  BccToggleButtonGroup,
  BccTable,
  BccTableCell,
  BccTableBody,
  BccTableContainer,
  BccTableHead,
  BccTableRow,
} from '../BccComponents'

import './Components.css'

import DeleteIcon from '@material-ui/icons/Delete'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import SaveIcon from '@material-ui/icons/Save'
import SendIcon from '@material-ui/icons/Send'
import CheckIcon from '@material-ui/icons/Check'
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
  <BccAvatar>+3</BccAvatar>
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
      title: 'Стандартные кнопки',
      desc:
        'Стандартные кнопки имеют высокий акцент, отличаются использованием основного цвета для заполнения. Они содержат действия, которые являются основными для вашего приложения. Есть два варианта использование primary и secondary.',
      component: wrapComponents(
        <>
          <BccButton variant="contained" color="primary">
            Заказать карту
          </BccButton>
          <BccButton variant="contained" color="secondary">
            Заказать карту
          </BccButton>
          <BccButton variant="contained" disabled>
            Заказать карту
          </BccButton>
        </>
      ),
      code: `<BccButton variant='contained' color='primary'>Заказать карту</BccButton>
<BccButton variant='contained' color='secondary'>Заказать карту</BccButton>
<BccButton variant='contained' disabled>Заказать карту</BccButton>`,
    },
    {
      id: 2002,
      title: 'Тестовые кнопки',
      desc:
        'Текстовые кнопки обычно используются для менее выраженных действий. Не имеет других вариантов цветов.',
      component: wrapComponents(
        <>
          <BccButton variant="text">Все карты (4)</BccButton>
          <BccButton variant="text" disabled>
            Все карты (4)
          </BccButton>
        </>
      ),
      code: `<BccButton variant='text'>Все карты (4)</BccButton>
<BccButton variant='text' disabled>Все карты (4)</BccButton>`,
    },
    {
      id: 2003,
      title: 'Контурные кнопки',
      desc:
        'Контурные кнопки обычно используются при случае когда основная кнопка сливается с фоном или не соответствует стилю.',
      component: wrapComponents(
        <>
          <BccButton variant="outlined" color="primary">
            Заказать карту
          </BccButton>
          <BccButton variant="outlined" color="secondary">
            Заказать карту
          </BccButton>
          <BccButton variant="outlined" disabled>
            Заказать карту
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
      desc:
        'Кнопки можно использовать с иконкой и текстом для большей информации.',
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
            color="secondary"
            endIcon={<CloudUploadIcon />}
          >
            Загрузить
          </BccButton>
          <BccButton variant="contained" disabled startIcon={<SaveIcon />}>
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
  color="secondary"
  endIcon={<CloudUploadIcon />}
>
  Загрузить
</BccButton>
<BccButton variant="contained" disabled startIcon={<SaveIcon />}>
  Сохранить
</BccButton>`,
    },
    {
      id: 2007,
      title: 'Кнопка иконка',
      desc: 'Кнопка иконка',
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
      libs: ``,
      component: wrapComponents(
        <>
          <BccTabsEx />
        </>
      ),
      code: `import React from 'react'
import BccTab from '@bit/bcc.components.bcc-tab'
import BccTabs from '@bit/bcc.components.bcc-tabs'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabs: {
      padding: '8px 16px',
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
        <BccTab label="Частным лицам" />
        <BccTab label="Бизнес клиентам" />
        <BccTab label="P2P переводы" />
        <BccTab label="Офисы" />
        <BccTab label="Банкоматы" />
      </BccTabs>
      <div className={classes.tabs} hidden={value !== 0}>
        Частным лицам
      </div>
      <div className={classes.tabs} hidden={value !== 1}>
        Бизнес клиентам
      </div>
      <div className={classes.tabs} hidden={value !== 2}>
        P2P переводы
      </div>
      <div className={classes.tabs} hidden={value !== 3}>
        Офисы
      </div>
      <div className={classes.tabs} hidden={value !== 4}>
        Банкоматы
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
      title: 'Стандартный',
      desc: '',
      libs: '',
      component: wrapComponents(
        <>
          <BccStepperEx />
        </>
      ),
      code: `import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import BccStepLabel from '@bit/bcc.components.bcc-step-label'
import BccStepper from '@bit/bcc.components.bcc-stepper'
import BccStep from '@bit/bcc.components.bcc-step'
import BccButton from '@bit/bcc.components.bcc-button'
import BccTypography from '@bit/bcc.components.bcc-typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
)

function getSteps() {
  return ['Личные данные', 'Контакты', 'Печать']
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return 'Заполните личные данные'
    case 1:
      return 'Заполните контакты'
    case 2:
      return 'Распечатать'
    default:
      return 'Ошибка'
  }
}

const BccStepperEx = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <BccStepper activeStep={activeStep}>
        {steps.map(label => (
          <BccStep key={label}>
            <BccStepLabel>{label}</BccStepLabel>
          </BccStep>
        ))}
      </BccStepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <BccTypography type="p3" className={classes.instructions}>
              Все завершено!
            </BccTypography>
            <BccButton onClick={handleReset}>К началу</BccButton>
          </div>
        ) : (
          <div>
            <BccTypography type="p3" className={classes.instructions}>
              {getStepContent(activeStep)}
            </BccTypography>
            <div>
              <BccButton
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Назад
              </BccButton>
              <BccButton
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Завершить' : 'Далее'}
              </BccButton>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BccStepperEx`,
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
          <BccBreadcrumbs>
            <BccTypography type="p3">Главная</BccTypography>
            <BccTypography type="p3">Компоненты</BccTypography>
            <BccTypography type="p3">Хлебные крошки</BccTypography>
          </BccBreadcrumbs>
        </>
      ),
      code: `<BccBreadcrumbs>
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
      code: `import React from 'react'
import BccDialog from '@bit/bcc.components.bcc-dialog'
import BccDialogActions from '@bit/bcc.components.bcc-dialog-actions'
import BccDialogTitle from '@bit/bcc.components.bcc-dialog-title'
import BccDialogContent from '@bit/bcc.components.bcc-dialog-content'
import BccButton from '@bit/bcc.components.bcc-button'
import BccTypography from '@bit/bcc.components.bcc-typography'

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <BccButton variant="outlined" onClick={handleClickOpen}>
        Открыть
      </BccButton>
      <BccDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BccDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <BccTypography type="h5">Заголовок</BccTypography>
        </BccDialogTitle>
        <BccDialogContent dividers>
          <BccTypography type="p1">
            Сохранить введенные вами данные и перейти к следуюшему шагу?
          </BccTypography>
        </BccDialogContent>
        <BccDialogActions>
          <BccButton
            autoFocus
            onClick={handleClose}
            variant="contained"
            size="small"
            color="primary"
          >
            Надпись
          </BccButton>
        </BccDialogActions>
      </BccDialog>
    </div>
  )
}`,
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
            label="Имя и фамилия"
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
      code: `<BccInput
  label="Имя и фамилия"
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
/>`,
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
      code: `import React from 'react'
import BccButton from '@bit/bcc.components.bcc-button'
import BccAlert from '@bit/bcc.components.bcc-alert'
import BccSnackbar from '@bit/bcc.components.bcc-snackbar'

export default function BccSnackbarEx() {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <div>
      <BccButton variant="text" color="primary" onClick={handleClick}>
        Открыть Snackbar
      </BccButton>
      <BccSnackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <BccAlert onClose={handleClose}>This is a success message!</BccAlert>
      </BccSnackbar>
    </div>
  )
}`,
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
      code: `<BccAlert severity="error">
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
</BccAlert>`,
    },
    {
      id: 19002,
      title: 'С заголовком',
      desc: '',
      libs: `import BccAlertTitle from '@bit/bcc.components.bcc-alert-title';`,
      component: wrapComponents(
        <>
          <BccAlert severity="error">
            <BccAlertTitle>Error</BccAlertTitle>
            This is an error alert — check it out!
          </BccAlert>
          <BccAlert severity="warning">
            <BccAlertTitle>Warning</BccAlertTitle>
            This is a warning alert — check it out!
          </BccAlert>
          <BccAlert severity="info">
            <BccAlertTitle>Info</BccAlertTitle>
            This is an info alert — check it out!
          </BccAlert>
          <BccAlert severity="success">
            <BccAlertTitle>Success</BccAlertTitle>
            This is a success alert — check it out!
          </BccAlert>
        </>
      ),
      code: `<BccAlert severity="error">
  <BccAlertTitle>Error</BccAlertTitle>
  This is an error alert — check it out!
</BccAlert>
<BccAlert severity="warning">
  <BccAlertTitle>Warning</BccAlertTitle>
  This is a warning alert — check it out!
</BccAlert>
<BccAlert severity="info">
  <BccAlertTitle>Info</BccAlertTitle>
  This is an info alert — check it out!
</BccAlert>
<BccAlert severity="success">
  <BccAlertTitle>Success</BccAlertTitle>
  This is a success alert — check it out!
</BccAlert>`,
    },
    {
      id: 19003,
      title: 'Действия',
      desc: '',
      libs: `import BccLink from '@bit/bcc.components.bcc-link'`,
      component: wrapComponents(
        <>
          <BccAlert color="error" onClose={() => {}}>
            This is a success alert — check it out!
          </BccAlert>
          <BccAlert action={<BccLink>Отмена</BccLink>}>
            This is a success alert — check it out!
          </BccAlert>
        </>
      ),
      code: `<BccAlert onClose={() => {}}>
  This is a success alert — check it out!
</BccAlert>
<BccAlert action={<BccLink>Отмена</BccLink>}>
  This is a success alert — check it out!
</BccAlert>`,
    },
    {
      id: 19004,
      title: 'Иконка',
      desc: '',
      libs: `import CheckIcon from '@material-ui/icons/Check';
import MailIcon from '@material-ui/icons/Mail';`,
      component: wrapComponents(
        <>
          <BccAlert icon={<CheckIcon />} onClose={() => {}}>
            This is a success alert — check it out!
          </BccAlert>
          <BccAlert icon={<MailIcon />} onClose={() => {}}>
            This is a success alert — check it out!
          </BccAlert>
        </>
      ),
      code: `<BccAlert icon={<CheckIcon />} onClose={() => {}}>
  This is a success alert — check it out!
</BccAlert>
<BccAlert icon={<MailIcon />} onClose={() => {}}>
  This is a success alert — check it out!
</BccAlert>`,
    },
    {
      id: 19005,
      title: 'Контурный стиль',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccAlert severity="error" variant="outlined">
            This is an error alert — check it out!
          </BccAlert>
          <BccAlert severity="warning" variant="outlined">
            This is a warning alert — check it out!
          </BccAlert>
          <BccAlert severity="info" variant="outlined">
            This is an info alert — check it out!
          </BccAlert>
          <BccAlert severity="success" variant="outlined">
            This is a success alert — check it out!
          </BccAlert>
        </>
      ),
      code: `<BccAlert icon={<CheckIcon />} onClose={() => {}}>
  This is a success alert — check it out!
</BccAlert>
<BccAlert icon={<MailIcon />} onClose={() => {}}>
  This is a success alert — check it out!
</BccAlert>`,
    },
    {
      id: 19006,
      title: 'Заполненный стиль',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccAlert severity="error" variant="filled">
            This is an error alert — check it out!
          </BccAlert>
          <BccAlert severity="warning" variant="filled">
            This is a warning alert — check it out!
          </BccAlert>
          <BccAlert severity="info" variant="filled">
            This is an info alert — check it out!
          </BccAlert>
          <BccAlert severity="success" variant="filled">
            This is a success alert — check it out!
          </BccAlert>
        </>
      ),
      code: `<BccAlert icon={<CheckIcon />} onClose={() => {}}>
  This is a success alert — check it out!
</BccAlert>
<BccAlert icon={<MailIcon />} onClose={() => {}}>
  This is a success alert — check it out!
</BccAlert>`,
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
      code: `import React from 'react'
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
}`,
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
      code: `<BccToggleButtonGroup>
  <BccToggleButton value="left" selected>
    <BccTypography type="p4">Мужской</BccTypography>
  </BccToggleButton>
  <BccToggleButton value="center">
    <BccTypography type="p4">Женский</BccTypography>
  </BccToggleButton>
</BccToggleButtonGroup>`,
    },
  ],
  slider: [
    {
      id: 21001,
      title: 'Стандартный',
      desc: '',
      libs: ``,
      component: wrapComponents(
        <>
          <BccSliderEx />
        </>
      ),
      code: `import React from 'react'
import BccInput from '@bit/bcc.components.bcc-input'
import { BccSlider } from '../../BccComponents'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      display: 'grid',
      gridGap: 10,
    },
    bccSlider: {
      position: 'relative',
    },
    slider: {
      position: 'absolute',
      left: 6,
      right: 6,
      padding: 0,
      bottom: -1,
      width: 'calc(100% - 12px)',
    },
  })
)

const BccSliderEx = (props: any) => {
  const [sum, setSum] = React.useState(0)
  const [period, setPeriod] = React.useState(0)
  const classes = useStyles()
  return (
    <div className={classes.wrap}>
      <div className={classes.bccSlider}>
        <BccInput
          label="Выберите сумму"
          InputLabelProps={{
            shrink: true,
          }}
          value={sum + ' ₸'}
          variant="filled"
        />
        <BccSlider
          className={classes.slider}
          min={0}
          max={1000000}
          step={50000}
          valueLabelDisplay="off"
          defaultValue={sum}
          onChange={(e: any, val: any) =>
            setSum(val instanceof Array ? val[1] : val)
          }
        />
      </div>
      <div className={classes.bccSlider}>
        <BccInput
          label="Выберите срок"
          InputLabelProps={{
            shrink: true,
          }}
          value={period + ' год'}
          variant="filled"
        />
        <BccSlider
          marks
          className={classes.slider}
          min={0}
          max={6}
          step={1}
          onChange={(e: any, val: any) =>
            setPeriod(val instanceof Array ? val[1] : val)
          }
        />
      </div>
    </div>
  )
}

export default BccSliderEx`,
    },
  ],
}

function wrapComponents(component: any) {
  return <div className="elements ">{component}</div>
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
  } else if (name === 'slider') {
    return allComponents.slider
  }
}

export const Components = (props: any) => {
  const item = props.item
  let components = getComponents(item.link)
  let install = item.install && item.install.join('\n')
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
      <BccTableContainer>
        <BccTable aria-label="simple table">
          <BccTableHead>
            <BccTableRow>
              <BccTableCell>
                <BccTypography type="p3" weight="medium">
                  Название
                </BccTypography>
              </BccTableCell>
              <BccTableCell align="right">
                <BccTypography type="p3" weight="medium">
                  Тип
                </BccTypography>
              </BccTableCell>
              <BccTableCell align="right">
                <BccTypography type="p3" weight="medium">
                  По умолчанию
                </BccTypography>
              </BccTableCell>
              <BccTableCell align="right">
                <BccTypography type="p3" weight="medium">
                  Описание
                </BccTypography>
              </BccTableCell>
            </BccTableRow>
          </BccTableHead>
          <BccTableBody>
            {item.props &&
              item.props.map((row: any) => (
                <BccTableRow key={row.id}>
                  <BccTableCell component="th" scope="row">
                    <BccTypography type="p4">{row.name}</BccTypography>
                  </BccTableCell>
                  <BccTableCell align="right">
                    <BccTypography type="p4">{row.type}</BccTypography>
                  </BccTableCell>
                  <BccTableCell align="right">
                    <BccTypography type="p4">{row.default}</BccTypography>
                  </BccTableCell>
                  <BccTableCell align="right">
                    <BccTypography type="p4">{row.desc}</BccTypography>
                  </BccTableCell>
                </BccTableRow>
              ))}
          </BccTableBody>
        </BccTable>
      </BccTableContainer>
    </>
  )
}
