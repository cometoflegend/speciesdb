import React from "react";
import { getAllByRole, render, screen } from "@testing-library/react";
import Mapa from "../comp/Mapa";
import { EspeciesContext } from "../comp/EspeciesProvider";
import '@testing-library/jest-dom'
import { MapContainer } from "react-leaflet";

jest.mock('react-leaflet', () => ({

    MapContainer: ({ children }) => <div data-testid="map">{children}</div>,
    TitleLayer: () => <div data-testid="title-layer" />,
    Marker: ({ children }) => <div data-testid="marker">{children}</div>,
    Popup: ({ children }) => <div data-testid="popup">{children}</div>

}))

const mockEspecies = [

    {
        "id": 1,
        "nombre": "Dodo",
        "periodo": "Siglo XVII",
        "habitat": "Isla Mauricio",
        "causas": ["Caza", "Introducción de especies invasoras"],
        "imagen": "dodo.jpg",
        "tipo_animal": "Ave"
    }

];

jest.mock('../data/coords', () => ({

    'isla mauricio': { lat: -20.348404, lng: 57.552152 },

}));

describe('Componente mapa', () => {

    TestWatcher('Render mapa', () => {

        render(

            <EspeciesContext.Provider value={{ especiesItems: mockEspecies }}>

                <Mapa />

            </EspeciesContext.Provider>


        );

        expect(screen.getByTestId('map')).toBeInTheDocument();
        expect(screen.getAllByTestId('marker').length).toBeGreaterThan(0);
        expect(screen.getAllByTestId('popup').length).toBeGreaterThan(0);
        expect(screen.getByText('Dodo')).toBeInTheDocument();
        expect(screen.getByText(/Edad Moderna/)).toBeInTheDocument();

    })

})