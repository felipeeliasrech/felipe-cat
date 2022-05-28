import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Head from 'next/head'

const Layout = ({ children }) => {
    return ( 
        <>
            <Head>
                <link rel='icon' href='/favicon.png' />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <Navbar />
                <main>
                { children }
                </main>
                <Footer />
            </div>
        </>
     );
}
 
export default Layout;