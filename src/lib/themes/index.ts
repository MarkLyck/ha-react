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

  backgroundActive: 'white',
  backgroundInactive: 'rgba(0,0,0,0.28)',

  red: '#BD0909',
  green: '#38B700',
  blue: '#1890ff',

  lightActive: '#ECC344',
  fanActive: 'blue',

  neutral: {
    100: '#ffffff',
    200: '#fafafa',
    300: '#f5f5f5',
    400: '#f0f0f0',
    450: '#eeeeee',
    500: '#d9d9d9',
    600: '#bfbfbf',
    700: '#8c8c8c',
    800: '#595959',
    900: '#434343',
    1000: '#262626',
    1100: '#1f1f1f',
    1200: '#141414',
    1300: '#000000',
  },
  primary: {
    100: '#f0f6ff',
    200: '#d6e6ff',
    300: '#adcaff',
    400: '#85abff',
    500: '#5c8aff',
    600: '#3366ff',
    700: '#2148d9',
    800: '#122fb3',
    900: '#071b8c',
    1000: '#041066',
  },
  success: {
    100: '#e6fff2',
    200: '#a3ffd4',
    300: '#79fcc4',
    400: '#4df0af',
    500: '#24e39d',
    600: '#00d68f',
    700: '#00b07b',
    800: '#008a65',
    900: '#00634c',
    1000: '#003d31',
  },
  info: {
    100: '#f0f6ff',
    200: '#d6e6ff',
    300: '#adcaff',
    400: '#85abff',
    500: '#5c8aff',
    600: '#3366ff',
    700: '#2148d9',
    800: '#122fb3',
    900: '#071b8c',
    1000: '#041066',
  },
  purple: {
    100: '#f9f0ff',
    200: '#efdbff',
    300: '#d3adf7',
    400: '#b37feb',
    500: '#9254de',
    600: '#722ed1',
    700: '#531dab',
    800: '#391085',
    900: '#22075e',
    1000: '#120338',
  },
  warning: {
    100: '#fffbe6',
    200: '#ffeda3',
    300: '#ffe07a',
    400: '#ffd152',
    500: '#ffbf29',
    600: '#ffaa00',
    700: '#d98900',
    800: '#b36b00',
    900: '#8c4f00',
    1000: '#663600',
  },
  danger: {
    100: '#fff0f1',
    200: '#ffebed',
    300: '#ffc2ca',
    400: '#ff99aa',
    500: '#ff708d',
    600: '#f3446c',
    700: '#cc2f59',
    800: '#a61e47',
    900: '#801136',
    1000: '#590b28',
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
