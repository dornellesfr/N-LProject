import React from 'react';
import PropTypes from 'prop-types';
import whatsappLogo from '../assets/images/logos/whatsapplogo64.png';
import close from '../assets/images/logos/close.png';

const btnStyleOpen = {
  backgroundImage: `url(${whatsappLogo})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const btnStyleClose = {
  backgroundImage: `url(${close})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

class BtnWhatsapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnStyle: btnStyleOpen,
      toOpen: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onBtnClick } = this.props;
    this.changeBtnStyle();
    onBtnClick();
  }

  changeBtnStyle = () => {
    this.setState((prevState) => ({
      toOpen: !prevState.toOpen,
    }));
    setTimeout(
      () => {
        const { toOpen } = this.state;
        if (toOpen) {
          this.setState({ btnStyle: btnStyleOpen });
        } else {
          this.setState({ btnStyle: btnStyleClose });
        }
      },
      150,
    );
  };

  render() {
    const { btnStyle } = this.state;
    return (
      <button id="whatsapp-btn" data-testid="page-contact-button-whatsapp" type="button" className="absolute top-24 right-2 flex items-center justify-center w-14 h-14 z-50 transition-all" style={btnStyle} onClick={this.handleClick.bind(this)}>
        <span className="sr-only">Open</span>
      </button>
    );
  }
}

export default BtnWhatsapp;

BtnWhatsapp.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
