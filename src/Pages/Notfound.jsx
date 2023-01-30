import React from 'react';


/*

  backgroundImage: `url(${process.env.PUBLIC_URL + '/image.png'})`,
  backgroundRepeat: 'no-repeat',
  width:'250px' 

   style={{backgroundImage: "url(/img/notfound.jpg)",
            backgroundRepeat: 'no-repeat',
            width: "100%",
            heigth :"250px" 
            }}

}}>

*/

const Notfound = () => {
    return (
        <>
            <div className='container'>
             <img src='/img/notfound.jpg'/>
            </div>
        </>
      );   
}

export default Notfound