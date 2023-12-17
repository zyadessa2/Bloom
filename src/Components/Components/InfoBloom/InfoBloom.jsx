import React from 'react';
import style from '../InfoBloom/InfoBloom.module.css';

export default function InfoBloom() {

  return <>
  <div className={`info ${style.info}`}>
    <div className="container">
        <div className="text text-center">
            <h3 className='mb-3 fs-3  font'>Bloom lip gloss is a luxury affordable Beauty Brand ✨</h3>
            <p className='p1 '>“Our main goal is to provide high quality products in the Egyptian market so that every girl would get to try our high quality products with fair affordable prices🤍”</p>
            <p className='p2'>With love, Lujaina 💕</p>
            <p className='p3'>Make sure you follow @bloomlipgloss_ to stay updated.</p>
        </div>
    </div>
  </div>
  </>
    
}
