export interface Todo {
  id: number
  content: string
}

export interface Meta {
  totalCount: number
}

export interface CarWash {
  id: number
  spot: string
  address: string
  phone?: string
  coordinates?: [number, number]
}
export interface CarwashList {
  city: string
  carWashes: CarWash[]
}
