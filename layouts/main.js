import Meta from '../components/meta'
import Link from 'next/prefetch'

export default ({ children }) => (
  <div className="main">
    <div className="logo">
      <Link href="/"><a>rauchg.com</a></Link>
    </div>

    { children }

    { /* global styles and meta tags */ }
    <Meta />

    { /* local styles */ }
    <style jsx>{`
      .main {
        padding: 25px 50px;
      }

      @media (max-width: 500px) {
        .main {
          padding: 25px 15px;
        }
      }

      .logo {
        padding-bottom: 50px;
      }

      a {
        text-decoration: none;
      }
    `}</style>
  </div>
)