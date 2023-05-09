import './globals.css'

export const metadata = {
  title: 'Leo GPT',
  description: 'An AI that immitates me',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h2>Leo GPT</h2>
        </header>
        {children}
      </body>
    </html>
  )
}