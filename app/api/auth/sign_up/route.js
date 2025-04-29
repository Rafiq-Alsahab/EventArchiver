"use server"
// app/api/auth/signup/route.ts
import { NextResponse } from 'next/server';
import { hashPassword } from '@/lib/auth';
import prisma from '@/lib/prisma';


export async function POST(request) {
  console.log('in request')
  try {
    const {name, email, password } = await request.json();
    console.log(name)
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

   

    if (existingUser) {
      console.log('user')
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

 
    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
        data:{
          'name':name,
          'email':email, 
          'password': hashedPassword, 
          'role':'OWNER',
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
