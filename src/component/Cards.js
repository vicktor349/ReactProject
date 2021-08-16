import React from 'react'
import CardItems from './CardItems';
import './Cards.css'; 
function Cards() {
    return (
        <div className='cards'> 
            <h1>Check out these EPIC Destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItems
                        src='images/img-9.jpg'
                        text='Explore the hidden waterfall deep inside the amazon jungle'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItems
                        src='/images/img-8.jpg'
                        text='Explore the Desert '
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                    <CardItems
                        src='images/img-1.jpg'
                        text='Enjoy the rising of the sun'
                        label='Amazing'
                        path='/services'
                        />
                        <CardItems
                        src='/images/img-5.jpg'
                        text='Image of Ferrari'
                        label='Luxury-view'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                    <CardItems
                        src='/images/img-6.jpg'
                        text='People on Zebra Crossing'
                        label='Cities'
                        path='/services'
                        />
                    <CardItems
                        src='/images/img-4.jpg'
                        text='An Image of a field from a spectacular Angle'
                        label='Wow'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                    <CardItems
                        src='/images/img-2.jpg'
                        text='Travel Through the island of Bali In a Private Cruise'
                        label='Fun'
                        path='/services'
                        />
                        <CardItems
                        src='/images/img-3.jpg'
                        text='Enjpy the Ocean on a Luxurious ship'
                        label='Fun'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
