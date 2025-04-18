import bcrypt from 'bcrypt';


const SALT_ROUNDS = 12;
export async function verifyPassword(plainTextPassword, hashedPassword) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
}


export async function hashPassword(password) {
  return await bcrypt.hash(password, SALT_ROUNDS);
}