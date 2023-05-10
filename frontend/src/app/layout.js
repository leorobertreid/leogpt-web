import './globals.css'

import { Providers } from "@/redux/provider";

export const metadata = {
  title: 'Leo GPT',
  description: 'An AI that immitates me',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header>
            <h2>Leo GPT</h2>
          </header>
        {children}
        </Providers>
      </body>
    </html>
  )
}