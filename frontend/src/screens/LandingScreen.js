import BackgroundImage from '../images/01.jpg';

const LandingScreen = () => {
  const style = {
    width: '100vw',
    height: '100vh',
    background: `url(${BackgroundImage}) no-repeat center center/cover`,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -2,
  };

  const gradient = {
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(217deg, rgba(155,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',
  };

  return (
    <div style={style} className='d-flex justify-content-center align-items-center'>
      <div style={gradient} className='d-flex justify-content-center align-items-center'>
        <h1 className='text-white display-1'>
          <strong>Power and Control</strong>
        </h1>
      </div>
    </div>
  );
};

export default LandingScreen;
