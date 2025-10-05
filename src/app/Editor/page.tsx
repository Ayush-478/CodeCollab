"use client"

import { useState } from "react"
import { AppSidebar } from "../../components/app-sidebar"
import { CodeEditor } from "../../components/code-editor"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Page() {
  const [code, setCode] = useState("")
  const [language, setLanguage] = useState("javascript")

  return (
    <SidebarProvider className="">
      <AppSidebar />
      <SidebarInset className="mt-auto mb-auto">
        <div className="flex flex-1 flex-col gap-4 p-4 ">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">CodeCollab</h2>
               <div className="text-l text-gray-800 mb-2">
      Press Ctrl+Alt+N to run code
    </div>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="jsx">JSX</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                  <SelectItem value="tsx">TSX</SelectItem>
                  <SelectItem value="css">CSS</SelectItem>
                  <SelectItem value="html">HTML</SelectItem>
                  <SelectItem value="cpp">C++</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="border rounded-md overflow-hidden">
              <CodeEditor value={code} onChange={setCode} language={language} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
