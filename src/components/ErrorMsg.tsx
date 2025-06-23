// Error message types for notifications

export interface ErrorMsg {
  errorType: "no set time" | "enter new time",
  message: "Enter a valid time!" | "Enter a new time!"
}

export interface Notifications extends ErrorMsg {
  id: number,
} 