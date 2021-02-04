const theme = {
  breakpoints: {
    breakpoint_sm: '@media(min-width: 576px)',
    breakpoint_md: '@media(min-width: 768px)',
    breakpoint_lg: '@media(min-width: 992px)',
    breakpoint_xl: '@media(min-width: 1200px)'
  },
  colors: {
    primary: '#257BC2',
    primary_light: '#5299D3',
    primary_dark: '#14578F',
    secondary: '#63B005',
    complementary: '#C43182',
    error: '#F52828',
  },
  gradients: {
    primary: 'linear-gradient(300deg, rgba(37,123,194,1) 0%, rgba(20,87,143,1) 100%);',
    secondary: 'linear-gradient(300deg, #C43182 0%, #DC58A0 100%);',
    complementary: 'linear-gradient(300deg, #63B005 0%, #95D744 100%);'
  },
  mode: {
    dark: {
      background: '#282828',
      boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
      color: '#E8E8E8',
    },
    light: {
      background: '#E8E8E8',
      inputBackground: '#F5F5F5',
      boxShadow: '0px 0px 12px 4px rgba(255, 255, 255, 0.2)',
      color: '#282828',
    }
  },
  fonts: {
    title: 'Montserrat, sans-serif',
    text: 'Roboto, Arial, Helvetica, sans-serif'
  }
}

export default theme;