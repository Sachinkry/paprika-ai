import React from 'react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { MessageSquare, BookOpen, Share2, ChevronLeft, ChevronRight } from 'lucide-react'

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  chatOpen: boolean;
  setChatOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen, chatOpen, setChatOpen }) => {
  return (
    <header className="h-14 border-b flex items-center justify-between px-4 bg-muted/40">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
        <Separator orientation="vertical" className="h-6" />
        <Button variant="ghost" size="icon">
          <BookOpen className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center gap-2">
      <Button
          variant="ghost"
          size="icon"
          onClick={() => setChatOpen(!chatOpen)}
        >
          {chatOpen ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
    </header>
  )
}

export default Header;