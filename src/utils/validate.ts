export function verifyEmail(email: string): boolean {
  return /^\s*\w+(?:\.{0,1}[\w-]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\.[a-zA-Z]+\s*$/.test(
    email
  );
}

export function verifyUsername(username: string): boolean {
  return /[\u4e00-\u9fa5_a-zA-Z0-9-]{1,20}/.test(username);
}

export function verifyPassword(password: string): boolean {
  return /[a-zA-Z0-9-_]{3,20}/.test(password);
}
