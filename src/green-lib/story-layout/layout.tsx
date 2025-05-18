import { EleventyData } from '../../_data/eleventy-data-types'
import { getMenuItems } from '../story-menu/get-menu-items'
import { getRootMenuItem } from '../story-menu/get-root-menu-item'
import { Head } from './head'
import { MenuElement } from '../story-menu/menu-element'

export interface Layout {
  children: React.ReactNode
}

export const Layout = (props: Layout & EleventyData) => {
  const mainMenuItems = getMenuItems(props.collections.lib)
  const rootMenuItem = getRootMenuItem({ menuItems: mainMenuItems, pageUrl: props.page.url })
  const subMenuItems = rootMenuItem?.children

  return (
    <html lang={props.libmetadata.content.language}>
      <Head
        cssUrls={[props.libsystemdata.globalCssUrl]}
        description={props.libmetadata.branding.description}
        favIconUrl="/favicon.ico"
        generator={props.libmetadata.content.generator}
        title={props.navigation?.heading || props.libmetadata.branding.heading}
      />
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <header role="banner" className="site-header s-wrapper">
          <div className="main-menu s-flex-row u-justify-space-between s-block-space u-block-space-2xs">
            <nav aria-label="primary">
              <MenuElement menuItems={mainMenuItems} className="s-flex-row" />
            </nav>
            <div className="s-flex-row">
              <a href="/">jaccomeijer.nl</a>
              <a href="/reference">reference</a>
              <a href={props.libmetadata.source.url}>{props.libmetadata.source.heading}</a>
            </div>
          </div>
          <nav className="sub-menu s-flex-row s-block-space u-block-space-3xs">
            <MenuElement menuItems={subMenuItems} className="s-flex-row" />
          </nav>
        </header>
        <main tabIndex={-1} id="main-content">
          <div className="page s-wrapper">
            <article className="markdown s-flex-column u-gap-0">{props.children}</article>
          </div>
        </main>
        <footer className="s-wrapper u-font-size--1 s-block-space u-block-space-l">This is the unstyled footer</footer>
      </body>
    </html>
  )
}
