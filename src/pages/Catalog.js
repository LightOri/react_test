import React from 'react';
import CardsCarousel from '../containers/CardsCarousel'

export class CatalogPage extends React.Component {
    render() {
        return (
        <div className="catalog-container">
            <div>catalog:</div>
            <div>
                <CardsCarousel></CardsCarousel>
            </div>
        </div>
    )
    }
}