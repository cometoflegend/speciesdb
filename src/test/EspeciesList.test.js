import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import EspeciesList from "../comp/EspeciesList";
import { EspeciesContext } from "../comp/EspeciesProvider";

const mockEspecies = [

    {

        id: 1,
        nombre: "Uro",
        periodo: "Siglo XVII",
        habitat: "Europa, Asia, Norte de África",
        causas: ["Caza", "Pérdida de hábitat"],
        imagen: "uro.jpg",
        tipo_animal: "Mamífero",

    },

];

const mockRemove = jest.fn();

const renderContext = () => render(

    <EspeciesContext.Provider value={{ especiesItems: mockEspecies, removeFromEspecies: mockRemove }}>

        <EspeciesList />

    </EspeciesContext.Provider>

);

describe('EspeciesList', () => {

    test('Renderización de una lista con una especie (uro)', () => {

        renderContext();

        expect(screen.getByText('Especies extintas')).toBeInTheDocument();
        expect(screen.getByText('Uro')).toBeInTheDocument();

    });

    test('Botón para borrar llama a removeFromEspecies', () => {

        renderContext();

        fireEvent.click(screen.getByText('Uro'));
        fireEvent.click(screen.getByText('Eliminar'));

        expect(mockRemove).toHaveBeenCalled();

    });

    test('Expansión de info al hacer click en el nombre', () => {

        renderContext();

        fireEvent.click(screen.getByText('Uro'));

        expect(screen.getByText('Tipo: Mamífero')).toBeInTheDocument();
        expect(screen.getByText('Hábitat: Europa, Asia, Norte de África')).toBeInTheDocument();

    });

});