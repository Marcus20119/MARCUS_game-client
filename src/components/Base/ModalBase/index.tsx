import { Fragment, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import PortalWrapper from '../PortalWrapper';
import './ModalBase.scss';

interface IModalBase {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalBase: React.FC<IModalBase> = ({ visible, onClose, children }) => {
  return (
    <Fragment>
      <CSSTransition in={visible} timeout={500} classNames="zoom" unmountOnExit>
        {status => (
          <PortalWrapper
            onClose={onClose}
            containerClass="fixed inset-0 flex justify-center items-center z-[666]"
            bodyClass="content relative z-[666]"
            overlay={true}
            displayCloseButton={false}
          >
            {children}
          </PortalWrapper>
        )}
      </CSSTransition>
    </Fragment>
  );
};

export default memo(ModalBase);
