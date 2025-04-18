// app/api/auth/signup/route.ts
import { NextResponse } from 'next/server';
import { hashPassword } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

 
    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
        data:{
          'name':credentials.name,
          'email':credentials.email, 
          'password': hashedPassword, 
        }
      })

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}