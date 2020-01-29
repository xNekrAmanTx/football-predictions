export const validatePassword = p => p.length > 7 && /[a-z]/.test(p) && /[A-Z]/.test(p) && /\d/.test(p)
export const validateName = p => p.length > 7 && /[a-z]/.test(p) && /[A-Z]/.test(p) && /\d/.test(p)
export const validateEmail = p => p.length > 7 && /[a-z]/.test(p) && /[A-Z]/.test(p) && /\d/.test(p)