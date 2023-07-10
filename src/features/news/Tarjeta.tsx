import React, { useState } from "react";
import { INoticiasNormalizadas, useNoticias } from "../../hook/useNoticias";
import {
    TarjetaNoticia,
    FechaTarjetaNoticia,
    DescripcionTarjetaNoticia,
    ImagenTarjetaNoticia,
    TituloTarjetaNoticia,
    BotonLectura,
} from "./styled";


export interface ITarjeta {
  noticias: INoticiasNormalizadas[];
  handelClick: (n: INoticiasNormalizadas) => void;
}

/**
 *Componente para mostrar noticias de los Simpsons.
 * @returns {JSX.Element} - Elemento JSX que incluye el listado de las noticias e incluye logica para mostrar distintos modales.
 */

const Tarjeta = ({ noticias, handelClick }: ITarjeta) => {
  return (
    <>
      {noticias.map((n) => (
        <TarjetaNoticia key={n.id}>
          <ImagenTarjetaNoticia src={n.imagen} />
          <TituloTarjetaNoticia>{n.titulo}</TituloTarjetaNoticia>
          <FechaTarjetaNoticia>{n.fecha}</FechaTarjetaNoticia>
          <DescripcionTarjetaNoticia>
            {n.descripcionCorta}
          </DescripcionTarjetaNoticia>
          <BotonLectura onClick={() => handelClick(n)}>Ver más</BotonLectura>
        </TarjetaNoticia>
      ))}
    </>
  );
};

export default Tarjeta;