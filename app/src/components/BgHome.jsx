import React from 'react';
import img1 from '../assets/images/bg/40.jpg';
import img2 from '../assets/images/bg/53.jpg';
import img3 from '../assets/images/bg/73.jpg';
import img4 from '../assets/images/bg/84.jpg';
import '../assets/css/styleBgHome.css';

const images = [img1, img2, img3, img4];

class BgHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: images[0],
      cont: 1,
      animation: 'slidein 1s, kenburns-left 50s ease-out both',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        cont: prevState.cont < images.length - 1 ? prevState.cont + 1 : 0,
      }));
      const { cont } = this.state;
      this.setState({ picture: images[cont], animation: 'kenburns-left 50s ease-out both' });
    }, 7000);
  }

  render() {
    const { picture, animation } = this.state;
    return (
      <>
        {images.map((image, index) => (
          <React.Fragment key={image}>
            { (picture === image) ? (
              <img
                id={`home-bg-${index} `}
                alt={image}
                className="fixed w-full h-screen right brightness-50 opacity-100 md:w-1/2"
                src={image}
                style={{
                  transitionDuration: '3s', zIndex: '-9998', clipPath: 'polygon(9% 0, 100% 0%, 100% 100%, 64% 100%)', animation: `${animation}`,
                }}
              />
            )
              : (
                <img
                  id={`home-bg-${index} `}
                  alt={image}
                  className="fixed w-full h-screen brightness-50 opacity-0 md:w-1/2"
                  src={image}
                  style={{
                    transitionDuration: '3s', zIndex: '-9998', clipPath: 'polygon(9% 0, 100% 0%, 100% 100%, 64% 100%)', animation: `${animation}`,
                  }}
                />
              )}
            { (picture === image) ? (
              <img
                id={`home-bg-${index + 1} `}
                alt={image}
                className="fixed w-full h-screen blur-sm opacity-100 md:w-1/2"
                src={image}
                style={{ transitionDuration: '3s', zIndex: '-9999' }}
              />
            )
              : (
                <img
                  id={`home-bg-${index + 1} `}
                  alt={image}
                  className="fixed w-full h-screen blur-sm opacity-0 md:w-1/2"
                  src={image}
                  style={{ transitionDuration: '3s', zIndex: '-9999' }}
                />
              ) }
          </React.Fragment>
        ))}
      </>
    );
  }
}

export default BgHome;
