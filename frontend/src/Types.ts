export interface User {
  name: string,
  phoneNumber: string,
  id: string,
  user_type: string,
}

export interface Opening {
  id: string,
  user_coach_id: string,
  time: string,
}

export interface Booking {
  id: string,
  user_coach_id: string,
  user_student_id: string, 
  score: number,
  notes: string,
  time: string,
}
