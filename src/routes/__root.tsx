import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { useState,createContext } from 'react'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import {Folder,File} from '../components/Types.tsx'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Ioannis Magalhaes',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})


const base : Folder = {
  title : 'Home',
  url : '/',
  options : [null],
}

const FolderContext = createContext<Folder| null>(null);

function RootDocument({ children }: { children: React.ReactNode }) {
  const [text,setText] = useState("Welcome to YanOS");
  const [directory,setDirectory] = useState<Folder>(base)

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className='flex flex-col justify-between h-screen p-5 border-2 border-dashed border-yellow-400'>
          <Header/>
          <FolderContext value= {directory}>
            <div className='flex flex-row justify-between h-screen p-3'>
              {children}
            </div>
          </FolderContext>
          <Footer text={text}/>
        </div>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
