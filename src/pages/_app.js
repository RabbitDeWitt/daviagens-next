import { Footer, Navbar } from '@/components'

import 'bootstrap/dist/css/bootstrap.css'

import '@/styles/_globals/styles.css'
import '@/styles/destinos/destinos.css'
import '@/styles/promocoes/promocoes.css'
import '@/styles/contato/contato.css'
import '@/styles/index/index.css'


export default function App({ Component, pageProps }) {
  return (
    <div className='min-vh-100 d-flex flex-column justify-content-between'>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
