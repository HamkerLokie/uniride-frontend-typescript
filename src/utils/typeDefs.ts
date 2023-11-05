export type locationObject = {
  _id: string
  locationName: string
}

export interface PostFormData {
  price: Number | string
  maxPerson: Number | string
  vehicle: String
  vehicleNumber: String
  date: Date
  time?: string
  vehicleType: String
  location: String
  from:string,
  to:string
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
  text: string
  classes?: string
}

export interface RideProps {
  ride: {
    driver: {
      username: string
      mobile: number
    }
    from: string
    to: string
    date: Date
    time?: string
    price: string
    vehicleType: string
    vehicle: string
    vehicleNumber: string
    maxPerson: number
    isFinalised: boolean
    createAt?: Date
    updatedAt?: Date
  }
}
