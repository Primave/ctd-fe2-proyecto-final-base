import React,{ useCallback, useEffect, useState } from "react";
import { obtenerNoticias } from "./fakeRest";
import { ContenedorNoticias, ListaNoticias, TituloNoticias } from "./styled";
import { INoticiasNormalizadas } from "./noticias.contracts";
import { toFront } from "./noticias.mapper";
import Tarjeta from "./Tarjeta";
import ModalDestaque from "./ModalDestaque";
import ModalSecundario from "./ModalSecundario";

/**
 *Componente para mostrar noticias de los Simpsons
 * @returns {JSX.Element} - Elemento JSX que incluye el listado de las noticias e incluye logica para mostrar distintos modales.
 */

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  const getModal = useCallback(() => {
    if (!modal) {
      return undefined;
    }
    if (modal?.esPremium) {
      return (
        <ModalSecundario
          onClose={() => setModal(null)}
          onSubscription={() =>
            setTimeout(() => {
              alert("Suscripto!");
              setModal(null);
            }, 1000)
          }
        />
      );
    }
    return <ModalDestaque {...modal} onClose={() => setModal(null)} />;
  }, [modal]);

  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();
      const noticiasNormalizadas = toFront(respuesta);
      setNoticias(noticiasNormalizadas);
    };
    obtenerInformacion();
  }, []);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        <Tarjeta noticias={noticias} handelClick={setModal} />
        <>{getModal()}</>
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
