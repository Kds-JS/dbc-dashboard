import { gameCart } from 'config';
import * as React from 'react';
import Cart from './Cart';

const Components = () => {
  return (
    <div className='col mt-4 col-md-12'>
      <div>
        <hr />
        <Cart title='Space Deadbro' cart={gameCart} />
      </div>
    </div>
  );
};

export default Components;
