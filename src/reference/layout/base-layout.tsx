import { EleventyData } from '../../_data/eleventy-data-types'
import { NavigationFooter } from '../../green-lib/components/navigation-footer/navigation-footer'
import { NavigationHeader } from '../../green-lib/components/navigation-header/navigation-header'
import { NavigationLegal } from '../../green-lib/components/navigation-legal/navigation-legal'
import { Head } from '../../green-lib/story-layout/head'
import { getMenuItems } from '../../green-lib/story-menu/get-menu-items'
import { actions } from './actions'

export interface BaseLayout {
  children: React.ReactNode
}

export const BaseLayout = (props: BaseLayout & EleventyData) => {
  const mainMenuItems = getMenuItems(props.collections.ref)

  return (
    <html lang={props.refmetadata.content.language}>
      <Head
        cssUrls={[props.refmetadata.system.globalCssUrl]}
        description={props.refmetadata.branding.description}
        favIconUrl="/favicon.ico"
        generator={props.refmetadata.content.generator}
        title={props.navigation?.heading || props.refmetadata.branding.heading}
      />
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <header role="banner" className="site-header s-wrapper">
          <div className="s-block-space u-block-space-xs u-border-bottom">
            <NavigationHeader
              branding={props.refmetadata.branding}
              mainActions={mainMenuItems}
              pageUrl={props.page.url}
              socialActions={actions.social}
              globalCssUrl={props.refmetadata.system.globalCssUrl}
            />
          </div>
        </header>
        <main tabIndex={-1} id="main-content">
          {props.children}
        </main>
        <footer className="site-footer s-wrapper">
          <div className="s-block-space u-block-space-2xs u-border-top">
            <NavigationFooter pageUrl={props.page.url} mainActions={mainMenuItems} socialActions={actions.social} />
          </div>
          <div className="s-block-space u-block-space-2xs u-border-top">
            <NavigationLegal vendor={props.refmetadata.vendor} branding={props.refmetadata.branding} />
          </div>
        </footer>
      </body>
    </html>
  )
}
