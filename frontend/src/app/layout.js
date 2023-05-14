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
        <link rel="shortcut icon" href="/public/logo-no-bg.png" />
      </head>
      <body suppressHydrationWarning={true}>
        <div className="flex flex-col h-screen">
          <Providers>
          <Header></Header>
          {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}