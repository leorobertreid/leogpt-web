import 'regenerator-runtime/runtime'

import './globals.css'

import { Providers } from "@/redux/provider";
import Header from "./ui/header/Header";

export const metadata = {
  title: 'Leo GPT',
  description: 'An AI that immitates me',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icons/favicon.ico"></link>
      </head>
      <body suppressHydrationWarning={true}>
        <div className="flex flex-col h-screen w-full">
          <Providers>
            <Header></Header>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}