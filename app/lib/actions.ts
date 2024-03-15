// 'use server';

// import { z } from 'zod';
// // import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';

// const FormSchema = z.object({
//     email: z.string().email(),
//     password: z.string().min(6),
// })

// const UpdateUser = 

// export async function updateUser(
//     id: string,
//     formData: FormData,
//     ) { const validateFIelds = UpdateUser.safeParse({
//     userId : formData.get('userId'),
//     email : formData.get('email'),
//     password : formData.get('password'),
//     });

//     if (!validateFIelds.success) {
//         return validateFIelds.error;flatten().fieldErrors,
//         message: 'Missing Fields. Failed to Update Invoice.',
//       };
//     }

//     const { userId, email, password } = validateFIelds.data;

//     try {
//         await sql'
//         UPDATE users
//     }
