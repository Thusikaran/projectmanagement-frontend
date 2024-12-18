import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form';

const Signup = () => {
    const form = useForm({
        defaultValues:{
            email : "",
            password:"",
            fullName:"",
        },
      });
      const onSubmit = (data) =>{
        console.log("signup",data);
      }
  return (
    <div className='space-y-5'>
        <h1>Register</h1>
        <Form {...form}>
            <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>

            <FormField control={form.control} name="fullName" render={({field})=><FormItem>
                    <FormControl>
                        <Input {...field}
                         type="text"
                         className="border w-full border-gray-700 py-5 px-5"
                         placeholder="Fullname ..." />
                    </FormControl>
                </FormItem>} 
                />

<FormField control={form.control} name="email" render={({field})=><FormItem>
                    <FormControl>
                        <Input {...field}
                         type="text"
                         className="border w-full border-gray-700 py-5 px-5"
                         placeholder="Email ..." />
                    </FormControl>
                </FormItem>} 
                />

                <FormField control={form.control} name="password" render={({field})=><FormItem>
                    <FormControl>
                        <Input {...field}
                         type="text"
                         className="border w-full border-gray-700 py-5 px-5"
                         placeholder="Password ..." />
                    </FormControl>
                </FormItem>} 
                />

                <Button type="submit" className="w-full mt-5"> Register</Button> 
           
            </form>
        </Form>
    </div>
  )
}

export default Signup