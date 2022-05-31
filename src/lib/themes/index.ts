import { createStitches, globalCss } from '@stitches/react'

const globalStyles = globalCss({
  body: { margin: 0, padding: 0 },
})
globalStyles()

export const { styled, css } = createStitches({
  theme: {
    colors: {
      // active

      // neutral
      neutral100: '#ffffff',
      neutral200: '#fafafa',
      neutral300: '#f5f5f5',
      neutral400: '#f0f0f0',
      neutral500: '#d9d9d9',
      neutral600: '#bfbfbf',
      neutral700: '#8c8c8c',
      neutral800: '#595959',
      neutral900: '#434343',
      neutral1000: '#262626',
      neutral1100: '#1f1f1f',
      neutral1200: '#141414',
      neutral1300: '#000000',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
})

const colors = {
  light1: '#FFFFFF',
  light2: '#F0F0F0',
  lightGray: '#808080',
  gray: '#404040',
  dark: '#000000',

  textLight: '#FFFFFFE0',
  textMedium: '#FFFFFF60',
  textGray: '#909090',
  textDark: '#000000D0',

  backgroundActive: '#FFFFFFFF',
  backgroundInactive: '#70707040',

  red: '#BD0909',
  green: '#38B700',
  blue: '#0094FF',

  lightActive: '#ECC344',
  fanActive: 'blue',

  success: {
    600: '#38B700',
  },
}

const theme = {
  colors: colors,
  card: {
    size: '100px',
    borderRadius: '12px',
    background: {
      colorActive: colors.backgroundActive,
      colorInactive: colors.backgroundInactive,
    },
    name: {
      size: '12px',
      weight: 'bold',
      colorActive: colors.textDark,
      colorInactive: 'rgba(255,255,255, 0.75)',
    },
    state: {
      size: '12px',
      weight: 'bold',
      colorActive: colors.textGray,
      colorInactive: colors.textGray,
    },
    light: {
      colorActive: colors.lightActive,
      colorInactive: colors.textMedium,
    },
    fan: {
      colorActive: colors.fanActive,
      // colorActive: colors.textMedium,
    },
  },
  cameraCard: {
    width: '396px',
    height: '240px',
  },
  sceneCard: {
    width: '206px',
    height: '48px',
    name: {
      size: '14px',
      weight: 600,
    },
  },
  badgeCount: {
    color: colors.red,
  },
  title: {
    size: '20px',
    weight: '200',
    color: colors.textLight,
  },
  modal: {
    background: colors.backgroundActive,
    header: {
      title: {
        size: '12px',
        weight: 'bold',
        color: colors.dark,
      },
      subtitle: {
        size: '12px',
        weight: 'bold',
        color: colors.lightGray,
      },
    },
  },
}

export default theme
