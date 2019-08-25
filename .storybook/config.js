import { configure, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider } from '@material-ui/styles'
import theme from 'src/theme'

const req = require.context('../src', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

addDecorator(withA11y)
addDecorator(withKnobs)

addDecorator(stories => (
  <ThemeProvider theme={theme}>{stories()}</ThemeProvider>
))

configure(loadStories, module)
