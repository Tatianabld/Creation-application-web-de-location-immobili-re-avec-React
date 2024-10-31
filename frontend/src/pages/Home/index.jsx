import React from 'react'; 
import paysageImg1 from '../../assets/Image-source-1.jpg';
import Properties from '../../components/Properties';
import Banner from '../../components/Banner';

function Home() {
  return (
    <div className="home">
      <Banner 
        imageSrc={paysageImg1} 
        altText="paysage" 
        title="Chez vous, partout et ailleurs"
      />
      <div className='gallery'>
        <Properties/>
      </div>
    </div>
  );
}

export default Home;
