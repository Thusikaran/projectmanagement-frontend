import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'
import InviteUserForm from './InviteUserForm'

const ProjectDetails = () => {
    const handleProjectInvitation = () =>{

    }
  return (
    <>
       <div className="mt-5 lg:px-10">
          <div className="lg:flex gap-5 justify-between pb-4">
             <ScrollArea className="h-screen lg:w-[69%] pr-2" >
                <div className="text-gray-400 pb-10 w-full">
                    <h1 className='text-lg font-semibold pb-5'>Create Ecommerce Project</h1>
                    <div className='space-y-5 pb-10'>
                    <p className='w-full md:max-w-lg lg:max-w-xl'>
                      Building a java full stack development project using spring boot, react, shadcn ui, redux, tailwind
                    </p>
                    <div className='flex'>
                        <p className='w-36'>Project Lead :</p>
                        <p>Zosh</p>
                    </div>
                    <div className="flex">
                        <p className='w-36'>Member :</p>
                        <div className='flex items-center gap-2'>
                            {[1,1,1,1].map((item)=>(
                                <Avatar className='cursor-pointer' key={item}>
                                    <AvatarFallback>Z</AvatarFallback>
                                </Avatar>
                            ))}
                        </div>
                        <Dialog>
                            <DialogTrigger>
                                <DialogClose>
                                    <Button size="sm" variant="outline" onClick={handleProjectInvitation} className="ml-2">
                                        <span>invite</span>
                                        <PlusIcon className='w-3 h-3'/>
                                    </Button>
                                </DialogClose>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>Invite User</DialogHeader>
                                <InviteUserForm/>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className='flex'>
                        <p className='w-36'>Category :</p>
                        <p>Fullstack</p>
                    </div>
                    <div className='flex'>
                        <p className='w-36'>Status :</p>
                        <Badge>Zosh</Badge>
                    </div>
                </div>
                </div>
                
             </ScrollArea>
          </div>
       </div>
    </>
  )
}

export default ProjectDetails