import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'flowbite-react';

function ModalJSX({ showModal }) {
  const { modal, setModal } = showModal;

  return (
    <Modal
      className="contact-modal"
      dismissible
      show={modal}
      onClose={setModal}
    >
      <Modal.Header>
        Mensagem enviada com sucesso.
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Olá!
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Sua mensagem foi enviada com sucesso.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Estamos trabalhando para poder entrar em contato com você.
            Caso tenha alguma demora, por favor, verifique sua caixa de spam.
            Agradecemos seu contato e estamos ansioso para poder te ajudar!
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={setModal}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>

  );
}

ModalJSX.propTypes = {
  showModal: PropTypes.shape({
    modal: PropTypes.bool.isRequired,
    setModal: PropTypes.func.isRequired,
  }).isRequired,
};

export default ModalJSX;
