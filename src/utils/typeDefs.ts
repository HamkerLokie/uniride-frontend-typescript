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
