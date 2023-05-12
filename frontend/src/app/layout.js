import './globals.css'

import { Providers } from "@/redux/provider";
import Header from "@/ui/Header";

export const metadata = {
  title: 'Leo GPT',
  description: 'An AI that immitates me',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Header></Header>
        {children}
        </Providers>
      </body>
    </html>
  )
}