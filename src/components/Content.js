import React from 'react';

const Content = () => {
    return (
        <section>
            <div className='menu-card'>
                <img src="https://images.dominos.com.bd/american_fav_feast.png" alt='egg' className='h-full rounded mb-20 shadow' />
                <div className='center-content'>
                    <h2 className='text-2xl mb-2'>American Favourite Feast</h2>
                    <p className='mb-2'>Chicken sausage, Beef pepperoni come together with seasoned mushrooms and green chilli to deliver a spicy and meaty mouthfeel.</p>
                    <span>$25</span>
                </div>
            </div>
            <div className='menu-card'>
                <img src="https://images.dominos.com.bd/spicy_curried_beef.png" alt='egg' className='h-full rounded mb-20 shadow' />
                <div className='center-content'>
                    <h2 className='text-2xl mb-2'>Beef Kala Bhuna</h2>
                    <p className='mb-2'>A Pizza for beef lovers with thick chunks of traditionally marinated beef along with Red paprika, Capsicum and red onion</p>
                    <span>$40</span>
                </div>
            </div>
        </section>
    );
};

export default Content;