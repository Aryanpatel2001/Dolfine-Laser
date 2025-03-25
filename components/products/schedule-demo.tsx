// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { toast } from "sonner";
// import { Loader2, Calendar, Clock } from "lucide-react";
// import { format } from "date-fns";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Calendar as CalendarComponent } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// // Form validation schema
// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters" }),
//   email: z.string().email({ message: "Please enter a valid email address" }),
//   phone: z.string().min(10, { message: "Please enter a valid phone number" }),
//   company: z
//     .string()
//     .min(2, { message: "Company name must be at least 2 characters" }),
//   date: z.date({
//     required_error: "Please select a date",
//   }),
//   time: z.string({
//     required_error: "Please select a time",
//   }),
// });

// type FormValues = z.infer<typeof formSchema>;

// interface ScheduleDemoProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   productName: string;
// }

// // Available time slots
// const timeSlots = [
//   "09:00 AM",
//   "10:00 AM",
//   "11:00 AM",
//   "12:00 PM",
//   "01:00 PM",
//   "02:00 PM",
//   "03:00 PM",
//   "04:00 PM",
//   "05:00 PM",
// ];

// export function ScheduleDemo({
//   open,
//   onOpenChange,
//   productName,
// }: ScheduleDemoProps) {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Get today's date for min date
//   const today = new Date();

//   // Initialize form
//   const form = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       company: "",
//       date: undefined,
//       time: "",
//     },
//   });

//   // Handle form submission
//   async function onSubmit(data: FormValues) {
//     setIsSubmitting(true);

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       // In a real application, you would send this data to your backend
//       console.log("Demo scheduled:", {
//         ...data,
//         product: productName,
//         timestamp: new Date().toISOString(),
//       });

//       // Show success message
//       toast.success("Demo scheduled successfully", {
//         description: `Your demo for ${productName} is scheduled for ${format(
//           data.date,
//           "MMMM d, yyyy"
//         )} at ${data.time}.`,
//       });

//       // Reset form and close dialog
//       form.reset();
//       onOpenChange(false);
//     } catch (error) {
//       toast.error("Failed to schedule demo", {
//         description: "Please try again or contact us directly.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-[500px]">
//         <DialogHeader>
//           <DialogTitle>Schedule a Demo</DialogTitle>
//           <DialogDescription>
//             Select a date and time for a personalized demonstration of{" "}
//             {productName}. Our product specialist will contact you to confirm
//             the details.
//           </DialogDescription>
//         </DialogHeader>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Full Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="John Doe" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="you@example.com"
//                         type="email"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="phone"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Phone Number</FormLabel>
//                     <FormControl>
//                       <Input placeholder="+1 (555) 000-0000" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <FormField
//               control={form.control}
//               name="company"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Company Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Acme Inc." {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <FormField
//                 control={form.control}
//                 name="date"
//                 render={({ field }) => (
//                   <FormItem className="flex flex-col">
//                     <FormLabel>Date</FormLabel>
//                     <Popover>
//                       <PopoverTrigger asChild>
//                         <FormControl>
//                           <Button
//                             variant={"outline"}
//                             className={`w-full pl-3 text-left font-normal ${
//                               !field.value && "text-muted-foreground"
//                             }`}
//                           >
//                             {field.value ? (
//                               format(field.value, "PPP")
//                             ) : (
//                               <span>Pick a date</span>
//                             )}
//                             <Calendar className="ml-auto h-4 w-4 opacity-50" />
//                           </Button>
//                         </FormControl>
//                       </PopoverTrigger>
//                       <PopoverContent className="w-auto p-0" align="start">
//                         <CalendarComponent
//                           mode="single"
//                           selected={field.value}
//                           onSelect={field.onChange}
//                           disabled={(date) =>
//                             date < today ||
//                             date >
//                               new Date(
//                                 today.getFullYear(),
//                                 today.getMonth() + 3,
//                                 today.getDate()
//                               )
//                           }
//                           initialFocus
//                         />
//                       </PopoverContent>
//                     </Popover>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="time"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Time</FormLabel>
//                     <Select
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                     >
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select a time">
//                             {field.value ? field.value : "Select a time"}
//                           </SelectValue>
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         {timeSlots.map((time) => (
//                           <SelectItem key={time} value={time}>
//                             {time}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <Button type="submit" className="w-full" disabled={isSubmitting}>
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Scheduling...
//                 </>
//               ) : (
//                 <>
//                   <Clock className="mr-2 h-4 w-4" />
//                   Schedule Demo
//                 </>
//               )}
//             </Button>
//           </form>
//         </Form>
//       </DialogContent>
//     </Dialog>
//   );
// }
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendConfirmationEmails } from "@/app/actions/email-actions";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  company: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters" }),
  date: z.date({
    required_error: "Please select a date",
  }),
  time: z.string({
    required_error: "Please select a time",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface ScheduleDemoProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
}

// Available time slots
const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export function ScheduleDemo({
  open,
  onOpenChange,
  productName,
}: ScheduleDemoProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get today's date for min date
  const today = new Date();

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      date: undefined,
      time: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    try {
      // Format date for display
      const formattedDate = format(data.date, "MMMM d, yyyy");

      // Prepare data for email
      const emailData = {
        ...data,
        formattedDate,
        product: productName,
        timestamp: new Date().toISOString(),
      };

      // Send confirmation emails to user and company
      const result = await sendConfirmationEmails(emailData);

      if (!result.success) {
        throw new Error(result.error || "Failed to send emails");
      }

      // Show success message
      toast.success("Demo scheduled successfully", {
        description: `Your demo for ${productName} is scheduled for ${formattedDate} at ${data.time}. A confirmation email has been sent to ${data.email}.`,
      });

      // Reset form and close dialog
      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error("Error scheduling demo:", error);
      toast.error("Failed to schedule demo", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Schedule a Demo</DialogTitle>
          <DialogDescription>
            Select a date and time for a personalized demonstration of{" "}
            {productName}. Our product specialist will contact you to confirm
            the details.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Acme Inc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={`w-full pl-3 text-left font-normal ${
                              !field.value && "text-muted-foreground"
                            }`}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <Calendar className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < today ||
                            date >
                              new Date(
                                today.getFullYear(),
                                today.getMonth() + 3,
                                today.getDate()
                              )
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time">
                            {field.value ? field.value : "Select a time"}
                          </SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scheduling...
                </>
              ) : (
                <>
                  <Clock className="mr-2 h-4 w-4" />
                  Schedule Demo
                </>
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
