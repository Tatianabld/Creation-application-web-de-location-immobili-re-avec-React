import paysageImg1 from '../../assets/Image-source-1.jpg';
import Properties from '../../components/Properties';

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <img src={paysageImg1} alt="paysage" />
        <h1> Chez vous, partout et ailleurs </h1>
      </div>
      <div className='gallery'>
        <Properties/>
      </div>
    </div>
  );
}

export default Home;
