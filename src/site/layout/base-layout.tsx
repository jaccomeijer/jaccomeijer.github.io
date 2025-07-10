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
  const mainMenuItems = getMenuItems(props.collections.site)

  return (
    <html lang={props.sitemetadata.content.language}>
      <Head
        cssUrls={[props.sitemetadata.system.globalCssUrl]}
        description={props.openerTopic?.abstract || props.sitemetadata.branding.description}
        favIconUrl="/favicon.ico"
        generator={props.sitemetadata.content.generator}
        title={`${props.openerTopic?.heading} (${props.sitemetadata.branding.heading} - ${props.sitemetadata.branding.description})`}
      />
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <header role="banner" className="site-header s-wrapper">
          <div className="s-block-space u-block-space-xs u-border-bottom">
            <NavigationHeader
              branding={props.sitemetadata.branding}
              mainActions={mainMenuItems}
              pageUrl={props.page.url}
              socialActions={actions.social}
              globalCssUrl={props.sitemetadata.system.globalCssUrl}
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
            <NavigationLegal vendor={props.sitemetadata.vendor} branding={props.sitemetadata.branding} />
          </div>
        </footer>
      </body>
    </html>
  )
}
