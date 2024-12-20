"use client"

import * as React from "react"
import { Sidebar } from "@/components/sidebar"
import Header from "@/components/header"
import AIChat from "@/components/AIChat"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function PaperReader() {
  const [sidebarOpen, setSidebarOpen] = React.useState(true)
  const [chatOpen, setChatOpen] = React.useState(true)

  return (
    <div className="flex h-100vh bg-background">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} chatOpen={chatOpen} setChatOpen={setChatOpen} />
        
        <main className="flex justify-center h-100vh  flex-row">
          <div className="max-w-3xl h-[calc(100vh-10px)] w-2xl   p-6 ">
            <ScrollArea className="h-full">
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Attention Is All You Need</h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Ashish Vaswani, Noam Shazeer, Niki Parmar</span>
                </div>
                <p className="text-sm leading-relaxed">
                  The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely...
                </p>
                {/* PDF Viewer would be embedded here */}
                <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">PDF Viewer</p>
                </div>
              </div>
            </ScrollArea>
          </div>
          {/* <div className="my-4"> 
            <Separator />
          </div> */}
        </main>
      </div>
      
      <AIChat chatOpen={chatOpen} /> 
    </div>
  )
}

