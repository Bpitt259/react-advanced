import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

const MODAL_MARGIN = '30px';

const StyledModal = styled(ReactModal)`
  position: absolute;
  top: calc(50% - ${MODAL_MARGIN});
  left: calc(50% - ${MODAL_MARGIN});
  z-index: 10000;

  transform: translate(-50%, -50%);

  color: ${props => props.theme.color['night--dark']};

  background: ${props => props.theme.color.white};
  border-radius: 2px;

  width: calc(100% - ${MODAL_MARGIN} * 2);
  max-width: 750px;
  max-height: 100%;

  margin: ${MODAL_MARGIN};
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.div`
  flex: 1 1 auto;

  line-height: 1.2;

  margin-right: 20px;
`;

const HeaderCloseButton = styled.button`
  background: none;
  border: 0 none;

  padding: 0;

  font-size: 30px;
`;

const Body = styled.div`
  padding: 25px 20px 35px;

  font-size: ${props => props.theme.font.size.large};

  p + p {
    margin-top: 19px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 20px;
`;

const OnRequestCloseContext = React.createContext();

function Modal({ children, ...props }) {
  return (
    <StyledModal {...props} onRequestClose={props.onRequestClose}>
      <OnRequestCloseContext.Provider value={props.onRequestClose}>
        {children}
      </OnRequestCloseContext.Provider>
    </StyledModal>
  );
}

function Header({ children }) {
  const onRequestClose = useContext(OnRequestCloseContext);

  return (
    <StyledHeader>
      <HeaderTitle>{children}</HeaderTitle>
      <div>
        <HeaderCloseButton
          className="sg-icon-remove"
          type="button"
          onClick={onRequestClose}
        />
      </div>
    </StyledHeader>
  );
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
