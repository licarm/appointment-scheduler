export interface User {
  name: string,
  phoneNumber: string,
  id: string,
  userType: string,
}

export interface Opening {
  id: string,
  coachId: string,
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
