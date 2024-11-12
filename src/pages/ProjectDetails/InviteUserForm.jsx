import { Form, FormControl, FormField } from '@/components/ui/form';
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

                <FormField control={form.control} name="name" render={({field})=><FormItem>
                    <FormControl>
                        <Input {...field}
                         type="text"
                         className="border w-full border-gray-700 py-5 px-5"
                         placeholder="project name ..." />
                    </FormControl>
                </FormItem>} 
                />
                
              
                
            

                <Button type="submit" className="w-full mt-5"> Create Project</Button> 
           
            </form>
        </Form>
    </div>
  )
}

export default InviteUserForm