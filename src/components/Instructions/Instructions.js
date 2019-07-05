import React from 'react';

export default function Instructions(){
    return(
        <div className='home-page-instructions'>
        <h3>Welcome!</h3>
        <section className='description'>
        <p>This app allows you to browse for ideas for your upcoming meals and bookmark these items for later use.<br/>
            You can also plan out your meals in a calendar where you can allocate specific meals for a specific day!<br/>
            Eat Smart, Save Money!
        </p>
        </section>
        <section className='credentials'>
        <p> You can register your own account or log in with <br/>User Name : Demo <br/> 
        Password : Demopassword1!</p>
        </section>
        </div>
    )
}