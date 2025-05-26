import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FormEspecies from "../comp/FormEspecies";
import { EspeciesContext } from "../comp/EspeciesProvider";

const mockAdd = jest.fn();

const renderContext = () => render(

    <EspeciesContext.Provider value={{ addToEspecies: mockAdd }}>

        <FormEspecies />

    </EspeciesContext.Provider>

);

describe('Form especie', () => {

    test('Render campos', () => {

        renderContext();

        expect(screen.getByPlaceholderText(/nombre/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/tipo/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/periodo/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/hábitat/i)).toBeInTheDocument();
        expect(screen.getByTestId('btn-add-causa')).toBeInTheDocument();


    })

    test('Completar y enviar formulario', () => {

        renderContext();

        fireEvent.change(screen.getByPlaceholderText(/nombre/i), { target: { value: 'Kouprey' } })
        fireEvent.change(screen.getByPlaceholderText(/tipo/i), { target: { value: 'Mamífero' } })
        fireEvent.change(screen.getByPlaceholderText(/periodo/i), { target: { value: '1969' } }) // Última vez avistado pero están 100% extintos
        fireEvent.change(screen.getByPlaceholderText(/hábitat/i), { target: { value: 'Cambodia, Laos, Vietnam' } })
        const causas = ['Caza', 'Guerras'];
        causas.forEach(causa => {
            fireEvent.change(screen.getByPlaceholderText(/añade causa/i), { target: { value: causa } });
            fireEvent.click(screen.getByTestId('btn-add-causa'));
        });

        fireEvent.click(screen.getByTestId('btn-add'));

        expect(mockAdd).toHaveBeenCalledWith(expect.objectContaining(({

            nombre: 'Kouprey',
            tipo_animal: 'Mamífero',
            periodo: '1969',
            habitat: 'Cambodia, Laos, Vietnam',
            causas: ['Caza', 'Guerras'],
            imagen: null,

        })));

    });

});