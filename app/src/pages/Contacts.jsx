import React from 'react';
import '../assets/css/styleContact.css';
import Form from '../components/Form';
import Whatsapp from '../components/Whatsapp';
import BtnWhatsapp from '../components/BtnWhatsapp';
// import Maps from '../components/Maps';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
    };
    this.toggleWhatsapp = this.toggleWhatsapp.bind(this);
  }

  toggleWhatsapp() {
    this.setState((prevState) => ({
      display: prevState.display === 'none' ? 'grid' : 'none',
    }));
  }

  render() {
    const { display } = this.state;
    return (
      <>
        <Form />
        <Whatsapp display={display} />
        {/* <Maps /> */}
        <BtnWhatsapp onBtnClick={this.toggleWhatsapp} />
      </>
    );
  }
}

export default Contacts;
