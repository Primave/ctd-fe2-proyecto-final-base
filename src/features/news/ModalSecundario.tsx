import React, { useState } from "react";
import {
  BotonSuscribir,
  CloseButton,
  ContenedorModal,
  CotenedorTexto,
  DescripcionModal,
  ImagenModal,
  TarjetaModal,
  TituloModal,
} from "./styled";
import { SuscribeImage, CloseButton as Close } from "../../assets";

interface IModalSecundarioProps {
  onClose: () => void;
  onSubscription: () => void;
}

/**
 * componente del modal de Secundario de subscripción
 * @param {Object} props
 * @param {funtion} props.onClose - Manejador de cierre del modal en el modal secundario.
 * @param {funtion} props.onSubscription - Es el manejador de suscripción en el modal secundario.
 * @returns {JSX.Element} - Elemento JSX del modal de secundario.
 */

const ModalSecundario = ({
  onClose,
  onSubscription,
}: IModalSecundarioProps) => {
  return (
    <ContenedorModal data-testid="modal">
      <TarjetaModal>
        <CloseButton onClick={onClose}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
        <CotenedorTexto>
          <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
          <DescripcionModal>
            Suscríbete a nuestro newsletter y recibe noticias de nuestros
            personajes favoritos.
          </DescripcionModal>
          <BotonSuscribir onClick={onSubscription}>Suscríbete</BotonSuscribir>
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  );
};

export default ModalSecundario;