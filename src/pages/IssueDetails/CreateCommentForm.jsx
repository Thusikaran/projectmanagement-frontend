import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const CreateCommentForm = ({issueId}) => {
    const form = useForm({
        defaultValues:{
            content : "",
        },
      });
      const onSubmit = (data) =>{
        console.log("send mail",data);
      }
  return (
    <div>
        <Form {...form}>
            <form className='flex gap-2' onSubmit={form.handleSubmit(onSubmit)}>

                <FormField control={form.control} name="content" render={({field})=><FormItem >
                    <div className="flex gap-2">
                        <div>
                            <Avatar>
                                <AvatarFallback>T</AvatarFallback>
                            </Avatar>
                        </div>
                        <FormControl>
                            <Input {...field}
                            type="text"
                            className="w-[20rem]"
                            placeholder="add comment here ..." />
                        </FormControl>
                    </div>
                </FormItem>} 
                />

                <Button type="submit" className=""> save</Button> 
           
            </form>
        </Form>
    </div>
  )
}

export default CreateCommentForm