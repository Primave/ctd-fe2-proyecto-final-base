import { INoticiasNormalizadas, INoticiasAPI } from "./noticias.contracts";
import { calculateMinutes, capitalizeWords } from "./utils";

export const toFront = (noticias: INoticiasAPI[]): INoticiasNormalizadas[] => {
  return noticias.map((n) => ({
    id: n.id,
    titulo: capitalizeWords(n.titulo),
    descripcion: n.descripcion,
    fecha: `Hace ${calculateMinutes(n.fecha)} minutos`,
    esPremium: n.esPremium,
    imagen: n.imagen,
    descripcionCorta: n.descripcion.substring(0, 100),
  }));
};