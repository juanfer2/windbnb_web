import React from 'react';
import './ModalSearch.scss';
import Title from '@components/Title';
import { CloseIcon } from '@chakra-ui/icons';
import CardSearch from './CardSearch';

export interface ModalSearchI {
  open: boolean;
  setOpen: Function;
}

function ModalSearch({ open, setOpen }: ModalSearchI) {
  return (
    <div>
      <div className={open ? 'modal modal__open' : 'modal modal__close'}>
        <div
          className={
            open ? 'modal-display modal-display__open' : 'modal-display modal-display__close'
          }
        >
          <header className="modal-header">
            <Title>Edit your search</Title>

            <CloseIcon role="presentation" className="close" onClick={() => setOpen(false)} />
          </header>

          <section className="modal-content">
            <CardSearch />
          </section>
        </div>
      </div>
    </div>
  );
}

export default ModalSearch;
