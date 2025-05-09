import { Segment } from '../segment/segment'

export const ModalMenu = (props) => (
  <div className="modal-menu">
    <div className="modal-background s-position-fixed"></div>
    <div className="modal-popup s-position-fixed s-flex-column">
      <button className="modal-close-button button">Close</button>
      <nav className="s-flex-column">
        <Segment actions={props.mainActions} className="popup-main-actions" element="a" />
        <Segment actions={props.socialActions} className="popup-social-actions" element="a" />
        <Segment
          actions={props.callActions}
          actionClassName="fat-link"
          className="popup-call-actions"
          element="a"
        />
      </nav>
    </div>
  </div>
)
