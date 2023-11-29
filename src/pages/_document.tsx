import { MainLayout } from '@/layouts/MainLayout'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <MainLayout>
          <Main />
          <NextScript />
        </MainLayout>
      </body>
    </Html>
  )
}
