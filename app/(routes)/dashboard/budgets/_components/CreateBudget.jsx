"use client"
import React, { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import EmojiPicker from 'emoji-picker-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { db } from '@/utils/dbConfig'
import { Budgets } from '@/utils/schema'
import { toast } from 'sonner'
import { useUser } from '@clerk/nextjs'

function CreateBudget({refreshData}) {

  const [emojiIcon,setEmojiIcon]=useState('💵');
  const [opneEmojiPicker,setOpenEmojiPicker]=useState(false);

  const [name,setName]=useState();
  const [amount,setAmount]=useState();

  const {user}=useUser();

  /**
   * Used to create New Budget
   */
  const onCreateBudget=async()=>{
    const result=await db.insert(Budgets)
    .values({
      name:name,
      amount:amount,
      createBy:user?.primaryEmailAddress?.emailAddress,
      icon:emojiIcon
    }).returning({insertedId:Budgets.id})

    if(result)
    {
      refreshData()
       toast('New Budget Created!')
    }
  }

  return (
    <div>
      

      <Dialog>
          <DialogTrigger asChild>
          <div className='bg-slate-100 p-10 rounded-md
      items-center flex flex-col border-2 border-dashed
      cursor-pointer hover:shadow-md'>
        <h2 className='text-3xl'>+</h2>
        <h2> Add New Material</h2>
      </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Material</DialogTitle>
              <DialogDescription>
                <div className='mt-5'>

                    <Button variant="outline"
                    size="lg"
                    className="text-lg"
                    onClick={()=>setOpenEmojiPicker(!opneEmojiPicker)}
                    >{emojiIcon}</Button>
                    <div className='absolute z-20'>
                      <EmojiPicker
                      open={opneEmojiPicker}
                      onEmojiClick={(e)=>{
                        setEmojiIcon(e.emoji)
                        setOpenEmojiPicker(false)
                      }}
                      />
                    </div>
                    <div className='mt-3'>
                      <h2 className='text-black font-medium my-1'>Material Name</h2>
                      <Input placeholder="e.g Steel" 
                      onChange={(e)=>setName(e.target.value)} />
                      
                    </div>
                    <div className='mt-3'>
                      <h2 className='text-black font-medium my-1'>Material Amount</h2>
                      <Input 
                      type="number"
                      placeholder="e.g 5000$"
                      onChange={(e)=>setAmount(e.target.value)} />
                    </div>

                    
                </div>
              </DialogDescription>
            </DialogHeader>
                  <DialogFooter className="sm:justify-start">
                      <DialogClose asChild>
                      <Button 
                    disabled={!(name&&amount)}
                    onClick={()=>onCreateBudget()}
                    className="mt-5 w-full">Add Material</Button>
                      </DialogClose>
              </DialogFooter>
          </DialogContent>
</Dialog>



    </div>
  )
}

export default CreateBudget