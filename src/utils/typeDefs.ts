export type locationObject = {
  _id: string
  locationName: string
}

export interface PostFormData {
  price: Number
  maxPerson: Number
  vehicle: String
  vehicleNumber: String
  date: Date
  time: String
  vehicleType: String
  location: String
}

export interface LoginFormData {
  email: String
  password: String
}

export interface UserRegisterData {
  username: string
  email: string
  mobile: Number
  password: string
  repeat_password: string
}

export interface CustomToastOptions {
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

export interface SubmitBtnProps {
  text: string,
  classes?:string
}
