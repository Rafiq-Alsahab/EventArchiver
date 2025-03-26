import bcrypt from 'bcryptjs';

export async function verifyPassword(plainTextPassword, hashedPassword) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
}
