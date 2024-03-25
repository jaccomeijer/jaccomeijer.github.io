import { Head } from './head/head.jsx'
import { NavigationHeader } from '@jaccomeijer/green-lib'
import { NavigationFooter } from '@jaccomeijer/green-lib'
import { NavigationLegal } from '@jaccomeijer/green-lib'
import { getMenuActions } from '@jaccomeijer/green-lib'
import { globals } from '../config/globals.js'
import favicon from '../assets/favicon/favicon.ico'

export const BaseLayout = props => {
  const mainActions = getMenuActions({
    pages: props.pages,
  })

  return (
    <html lang={globals.metadata.content.language}>
      <Head
        enableReload={process.env.MODE === 'serve'}
        favicon={favicon}
        globals={globals}
        page={props.page}
      />
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header role="banner" className="site-header s-wrapper">
          <div className="s-block-space u-block-space-xs u-border-bottom">
            <NavigationHeader
              callActions={globals.actions.call}
              globals={globals}
              mainActions={mainActions}
              socialActions={globals.actions.social}
            />
          </div>
        </header>
        <main tabIndex="-1" id="main-content">
          {props.children}
        </main>
        <footer className="site-footer s-wrapper">
          <div className="s-block-space u-block-space-2xs u-border-top">
            <NavigationFooter
              globals={globals}
              pageUrl={props.page.url}
              mainActions={mainActions}
              socialActions={globals.actions.social}
            />
          </div>
          <div className="s-block-space u-block-space-2xs u-border-top">
            <NavigationLegal
              globals={globals}
            />
          </div>
        </footer>
      </body>
    </html>
  )
}
