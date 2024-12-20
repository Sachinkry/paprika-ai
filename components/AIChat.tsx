import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { cn } from '@/lib/utils';

interface AIChatProps {
  chatOpen: boolean; // Add chatOpen prop
}

const AIChat: React.FC<AIChatProps>= ({ chatOpen}) => {
  return (
    <div className={cn(
      "border-l bg-muted/40 transition-all duration-300",
      chatOpen ? "w-120" : "w-0"
    )}>
    
      {chatOpen &&
        <div className="flex items-center justify-center h-14 border-b ">
          <h2 className="text-xl font-semibold text-center  ">Chat with PDF</h2>
        </div>
      }
      <div className="flex  h-[calc(100vh-10px)] flex-col max-w-2xl bg-muted/40  px-4">
        <div className="relative h-full flex flex-col ">
          <div className="flex-1 overflow-y-auto">
            <ScrollArea className="h-full">
              <div className="space-y-4 py-4  px-2">
                <div className="bg-muted p-4 rounded-lg max-w-sm">
                  <p className="text-sm ">How can I help you understand this paper?</p>
                </div>
                {/* Chats with ai */}
              </div>
            </ScrollArea>
          </div>
          <div className="absolute bottom-20 left-0 right-0 ">
            <div className="flex items-center gap-2 bg-white">
              <Input placeholder="Ask about the paper..." />
              <Button>Send</Button>
              {/* <Button variant="outline" className="flex items-center justify-center">
                <Send className="h-4 w-4" /> 
              </Button> */}
            </div>
            </div>
        </div>
      </div> 
    </div>
  );
};

export default AIChat;