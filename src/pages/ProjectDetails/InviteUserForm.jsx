import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form'

const InviteUserForm = () => {
  const form = useForm({
    defaultValues:{
        email : "",
    },
  });
  const onSubmit = (data) =>{
    console.log("send mail",data);
  }
  return (
    <div>
         <Form {...form}>
            <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>

                <FormField control={form.control} name="email" render={({field})=><FormItem>
                    <FormControl>
                        <Input {...field}
                         type="text"
                         className="border w-full border-gray-700 py-5 px-5"
                         placeholder="user email ..." />
                    </FormControl>
                </FormItem>} 
                />

                <Button type="submit" className="w-full mt-5"> Invite User</Button> 
           
            </form>
        </Form>
    </div>
  )
}

export default InviteUserForm