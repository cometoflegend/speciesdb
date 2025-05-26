import React from "react";
import { getAllByRole, render, screen } from "@testing-library/react";
import Timeline from "../comp/Timeline";
import { EspeciesContext } from "../comp/EspeciesProvider";

const mockEspecies = [

    {
    "id": 1,
    "nombre": "Dodo",
    "periodo": "Siglo XVII",
    "habitat": "Isla Mauricio",
    "causas": ["Caza", "Introducción de especies invasoras"],
    "imagen": "dodo.jpg",
    "tipo_animal": "Ave"
  },
  {
    "id": 2,
    "nombre": "Tigre de Tasmania",
    "periodo": "Siglo XX",
    "habitat": "Australia, Tasmania",
    "causas": ["Caza", "Pérdida de hábitat"],
    "imagen": "tigre_tasmania.jpg",
    "tipo_animal": "Mamífero"
  },
  {
    "id": 3,
    "nombre": "Quagga",
    "periodo": "Siglo XIX",
    "habitat": "Sudáfrica",
    "causas": ["Caza"],
    "imagen": "quagga.jpg",
    "tipo_animal": "Mamífero"
  }

];

const renderContext = () => render(

    <EspeciesContext.Provider value={{ especiesItems: mockEspecies }}>

        <Timeline />

    </EspeciesContext.Provider>

);

describe('Timeline', ()=> {

    test('Render título', ()=> {

        renderContext();
        expect(screen.getByText(/Línea del Tiempo de Especies Extintas/i)).toBeInTheDocument();

    });

    test('Render especies', ()=> {

        renderContext();
        expect(screen.getByText(/Dodo/)).toBeInTheDocument();
        expect(screen.getByText(/Tigre de Tasmania/)).toBeInTheDocument();
        expect(screen.getByText(/Quagga/)).toBeInTheDocument();

    });

    test('Orden cronológico de especies',()=> {

        renderContext();

        const nombres = screen.getAllByRole('heading',{level:4}).map(n=>n.textContent);
        expect(nombres).toEqual(['Dodo','Quagga','Tigre de Tasmania']);

    });

    test('Render imágenes si existen', ()=> {

        renderContext();

        const img = screen.getAllByRole('img');
        expect(img).toHaveLength(3);
        expect(img[0]).toHaveAttribute('src', 'dodo.jpg');
        expect(img[1]).toHaveAttribute('src', 'quagga.jpg');
        expect(img[2]).toHaveAttribute('src', 'tigre_tasmania.jpg');

    });

});