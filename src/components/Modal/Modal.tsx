import { FC } from 'react';
import { ModalProps } from './types';
import { ModalOverlay, ModalContent, CloseButton } from './styles';

const Modal: FC<ModalProps> = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}></CloseButton> 
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;