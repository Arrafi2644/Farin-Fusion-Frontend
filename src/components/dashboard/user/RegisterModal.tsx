
// "use client";

// import { useId, useState } from "react";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { Plus } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "@/components/ui/form";

// import { useRegisterMutation } from "@/redux/features/user/user.api";

// const signupSchema = z.object({
//   name: z.string().min(2),
//   email: z.string().email(),
//   phone: z.string().min(10),
//   address: z.string().min(5),
//   password: z.string().min(6),
//   confirmPassword: z.string().min(6),
// }).refine((data) => data.password === data.confirmPassword, {
//   message: "Passwords don't match",
//   path: ["confirmPassword"],
// });

// type SignupFormValues = z.infer<typeof signupSchema>;

// export default function RegisterModal() {
//   const id = useId();
//   const [open, setOpen] = useState(false);

//   const [register, { isLoading }] = useRegisterMutation();

//   const form = useForm<SignupFormValues>({
//     resolver: zodResolver(signupSchema),
//     defaultValues: {
//       name: '',
//       email: '',
//       phone: '',
//       address: '',
//       password: '',
//       confirmPassword: ''
//     },
//   });

//   const onSubmit = async (data: SignupFormValues) => {
//     try {

//       console.log(data ," For create user")
//       const res = await register(data).unwrap();

//       console.log("Add user res ", res )
//       toast.success("User created successfully!");
//       form.reset();
//       setOpen(false);
//     } catch (error) {
//       toast.error("Failed to create user");
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button size="sm">
//           <Plus className="h-4 w-4" />
//           Add User
//         </Button>
//       </DialogTrigger>

//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Add New User</DialogTitle>
//         </DialogHeader>

//           <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Full name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter your full name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email address</FormLabel>
//                   <FormControl>
//                     <Input type="email" placeholder="Enter your email" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="phone"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Phone number</FormLabel>
//                   <FormControl>
//                     <Input type="tel" placeholder="Enter your phone number" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="address"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Address</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter your full address" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input type="password" placeholder="Create a password" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="confirmPassword"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Confirm password</FormLabel>
//                   <FormControl>
//                     <Input type="password" placeholder="Confirm your password" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button
//               type="submit"
//               className="w-full bg-[#FF2B85] hover:bg-pink-600"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Creating account...' : 'Create account'}
//             </Button>
//           </form>
//         </Form>
//       </DialogContent>
//     </Dialog>
//   );
// }

// --------------------------------------------

// "use client";

// import { useState } from "react";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { Eye, EyeOff } from "lucide-react";
// import Image from "next/image";

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";

// import logo from "../../../../public/assets/FRN-Logo-scaled.webp";
// import { useRegisterMutation } from "@/redux/features/user/user.api";

// // ─── Schema ────────────────────────────────────────────────────────────────────

// const signupSchema = z
//   .object({
//     name: z.string().min(2, "Full name must be at least 2 characters"),
//     email: z.string().email("Please enter a valid email address"),
//     phone: z.string().min(10, "Please enter a valid phone number"),
//     address: z.string().min(5, "Address must be at least 5 characters"),
//     password: z.string().min(6, "Password must be at least 6 characters"),
//     confirmPassword: z.string().min(6, "Please confirm your password"),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirmPassword"],
//   });

// type SignupFormValues = z.infer<typeof signupSchema>;

// // ─── Props ─────────────────────────────────────────────────────────────────────

// interface RegisterFormProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSwitchToLogin: () => void;
// }

// // ─── Password field helper ─────────────────────────────────────────────────────

// function PasswordField({
//   id,
//   placeholder,
//   registration,
//   error,
// }: {
//   id: string;
//   placeholder: string;
//   registration: object;
//   error?: string;
// }) {
//   const [show, setShow] = useState(false);
//   return (
//     <div className="relative">
//       <Input
//         id={id}
//         type={show ? "text" : "password"}
//         placeholder={placeholder}
//         {...registration}
//         className="border-[#4a5568] bg-[#1e2829] text-white placeholder:text-[#96999A] pr-10
//           focus-visible:ring-[#c9a84c] focus-visible:border-[#c9a84c] transition-colors"
//       />
//       <button
//         type="button"
//         onClick={() => setShow((v) => !v)}
//         aria-label={show ? "Hide password" : "Show password"}
//         className="absolute right-3 top-1/2 -translate-y-1/2 text-[#96999A] hover:text-[#c9a84c] transition-colors"
//       >
//         {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//       </button>
//       {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
//     </div>
//   );
// }

// // ─── Component ─────────────────────────────────────────────────────────────────

// export function RegisterForm({ isOpen, onClose, onSwitchToLogin }: RegisterFormProps) {
//   const [register, { isLoading }] = useRegisterMutation();

//   const {
//     register: registerField,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<SignupFormValues>({
//     resolver: zodResolver(signupSchema),
//   });

//   const onSubmit = async (data: SignupFormValues) => {
//     try {
//       const res = await register(data).unwrap();
//       console.log("Register res", res);
//       toast.success("Account created successfully!");
//       reset();
//       onClose();
//     } catch (error) {
//       console.error(error);
//       toast.error("Registration failed");
//     }
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent
//         className="sm:max-w-md max-h-[90vh] overflow-y-auto
//           border border-[#4a5568] bg-[#2D3436] text-white p-6"
//       >
//         {/* Gold accent line */}
//         <div className="absolute left-0 right-0 top-0 h-0.5 rounded-t-lg bg-linear-to-r from-transparent via-[#c9a84c] to-transparent" />

//         {/* Header */}
//         <DialogHeader className="flex flex-col items-center gap-2 pb-2">
//           <Image
//             src={logo}
//             alt="Farin Fusion"
//             height={60}
//             width={120}
//             className="object-contain"
//           />
//           <DialogTitle className="text-xl font-bold tracking-widest text-[#c9a84c] uppercase">
//             Create Account
//           </DialogTitle>
//           <DialogDescription className="text-[#96999A] text-sm tracking-wide">
//             Join Farin Fusion today
//           </DialogDescription>
//         </DialogHeader>

//         {/* Divider */}
//         <div className="my-1 h-px bg-[#3d4f51]" />

//         {/* Form */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-1">

//           {/* Full Name */}
//           <div className="space-y-1.5">
//             <Label htmlFor="name" className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
//               Full Name
//             </Label>
//             <Input
//               id="name"
//               type="text"
//               placeholder="Enter your full name"
//               {...registerField("name")}
//               className="border-[#4a5568] bg-[#1e2829] text-white placeholder:text-[#96999A]
//                 focus-visible:ring-[#c9a84c] focus-visible:border-[#c9a84c] transition-colors"
//             />
//             {errors.name && (
//               <p className="text-xs text-red-400">{errors.name.message}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div className="space-y-1.5">
//             <Label htmlFor="email" className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
//               Email Address
//             </Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="you@example.com"
//               {...registerField("email")}
//               className="border-[#4a5568] bg-[#1e2829] text-white placeholder:text-[#96999A]
//                 focus-visible:ring-[#c9a84c] focus-visible:border-[#c9a84c] transition-colors"
//             />
//             {errors.email && (
//               <p className="text-xs text-red-400">{errors.email.message}</p>
//             )}
//           </div>

//           {/* Phone */}
//           <div className="space-y-1.5">
//             <Label htmlFor="phone" className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
//               Phone Number
//             </Label>
//             <Input
//               id="phone"
//               type="tel"
//               placeholder="+880 1XXX-XXXXXX"
//               {...registerField("phone")}
//               className="border-[#4a5568] bg-[#1e2829] text-white placeholder:text-[#96999A]
//                 focus-visible:ring-[#c9a84c] focus-visible:border-[#c9a84c] transition-colors"
//             />
//             {errors.phone && (
//               <p className="text-xs text-red-400">{errors.phone.message}</p>
//             )}
//           </div>

//           {/* Address */}
//           <div className="space-y-1.5">
//             <Label htmlFor="address" className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
//               Address
//             </Label>
//             <Textarea
//               id="address"
//               placeholder="House no., Road, Area, City"
//               rows={3}
//               {...registerField("address")}
//               className="border-[#4a5568] bg-[#1e2829] text-white placeholder:text-[#96999A]
//                 focus-visible:ring-[#c9a84c] focus-visible:border-[#c9a84c]
//                 resize-none transition-colors"
//             />
//             {errors.address && (
//               <p className="text-xs text-red-400">{errors.address.message}</p>
//             )}
//           </div>

//           {/* Password */}
//           <div className="space-y-1.5">
//             <Label htmlFor="password" className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
//               Password
//             </Label>
//             <PasswordField
//               id="password"
//               placeholder="Create a password"
//               registration={registerField("password")}
//               error={errors.password?.message}
//             />
//           </div>

//           {/* Confirm Password */}
//           <div className="space-y-1.5">
//             <Label htmlFor="confirmPassword" className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
//               Confirm Password
//             </Label>
//             <PasswordField
//               id="confirmPassword"
//               placeholder="Re-enter your password"
//               registration={registerField("confirmPassword")}
//               error={errors.confirmPassword?.message}
//             />
//           </div>

//           {/* Submit */}
//           <Button
//             type="submit"
//             disabled={isLoading}
//             className="w-full mt-2 bg-[#c9a84c] hover:bg-[#d4b86a]
//               text-[#0f1e0f] font-bold tracking-widest uppercase
//               transition-colors disabled:opacity-60"
//           >
//             {isLoading ? (
//               <span className="flex items-center gap-2">
//                 <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0f1e0f] border-t-transparent" />
//                 Creating account...
//               </span>
//             ) : (
//               "Create Account"
//             )}
//           </Button>
//         </form>

//         {/* Divider */}
//         <div className="my-1 h-px bg-[#3d4f51]" />

//         {/* Switch to login */}
//         <p className="text-center text-sm text-[#96999A]">
//           Already have an account?{" "}
//           <button
//             type="button"
//             onClick={() => { onClose(); onSwitchToLogin(); }}
//             className="text-[#c9a84c] font-semibold hover:underline transition-opacity"
//           >
//             Log in
//           </button>
//         </p>
//       </DialogContent>
//     </Dialog>
//   );
// }