import React, { useState } from "react";
import {
  ContenedorModal,
  TarjetaModal,
  CloseButton,
  ImagenModal,
  CotenedorTexto,
  TituloModal,
  DescripcionModal,
} from "./styled";
import { CloseButton as Close } from "../../assets";

interface IModalPrimarioProps {
  onClose: () => void;
  imagen: string;
  titulo: string;
  descripcion: string;
}

/**
 * componente del modal primario
 * @param {Object} props
 * @param {string} props.image - URL de la imagen del personaje.
 * @param {string} props.titulo - Titulo de la noticia.
 * @param {string} props.descripcion - Descripción de la noticia.
 * @param {funtion} props.onClose - Manejador de cierre del modal.
 * @returns {JSX.Element} - Elemento JSX del modal primario.
 */


const ModalPrimario = ({
  onClose,
  imagen,
  titulo,
  descripcion,
}: IModalPrimarioProps) => {
  return (
    <ContenedorModal data-testid="modal">
      <TarjetaModal>
        <CloseButton onClick={onClose}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal src={imagen} alt="news-image" />
        <CotenedorTexto>
          <TituloModal>{titulo}</TituloModal>
          <DescripcionModal>{descripcion}</DescripcionModal>
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  );
};

export default ModalPrimario;