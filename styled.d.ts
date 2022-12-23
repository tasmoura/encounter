import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      white: string
      gray1: string
      gray2: string
      gray3: string
    }
  }
}
