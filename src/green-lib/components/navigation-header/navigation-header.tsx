import { ModalMenu } from './modal-menu'
import { Segment } from '../segment/segment'
import { Libmetadata } from '../../../_data/eleventy-data-types'
import { Action, ActionData } from '../action/action'

export interface NavigationHeader {
  branding: Libmetadata['branding']
  callActions?: ActionData[]
  mainActions: ActionData[]
  pageUrl: string
  socialActions?: ActionData[]
  globalCssUrl: string
}

const CE_URL = '/green-lib/components/navigation-header'

export const NavigationHeader = (props: NavigationHeader) => {
  return (
    <navigation-header>
      {/* @ts-ignore */}
      <template shadowrootmode="open">
        <div className="navigation-header">
          <div className="wide-menu-view">
            <nav className="branding-main-actions" aria-label="primary">
              <Action action={props.branding} className="branding" element="a" />
              <Segment actions={props.mainActions} className="main-actions" element="a" pageUrl={props.pageUrl} />
            </nav>
            <nav className="social-actions">
              <Segment actions={props.socialActions} element="a" />
              <Segment actions={props.callActions} actionClassName="fat-link" element="a" />
            </nav>
            <button className="open-menu-button button">Menu</button>
          </div>
          <ModalMenu
            callActions={props.callActions}
            mainActions={props.mainActions}
            socialActions={props.socialActions}
          />
        </div>
        <link rel="stylesheet" type="text/css" href={props.globalCssUrl} />
        <link rel="stylesheet" type="text/css" href={CE_URL + '/navigation-header-ce.css'} />
      </template>
      <script defer src={CE_URL + '/navigation-header-ce.js'} />
    </navigation-header>
  )
}
