
interface CustomToastOptions {
  success: {
    theme: {
      primary: string
    }
    style: {
      background: string
      color: string
    }
    iconTheme: {
      primary: string
      secondary: string
    }
  }
}

const toastOptions: CustomToastOptions = {
  success: {
    theme: {
      primary: '#FFFA67'
    },
    style: {
      background: '#F36368',
      color: 'white'
    },
    iconTheme: {
      primary: '#FFFA67',
      secondary: 'black'
    }
  }
  
}


export default toastOptions