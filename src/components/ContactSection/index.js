import React from 'react';
import axios from 'axios'
import {
  ContactContainer,
  ContactFormContainer,
  ContactHeader,
  ContactSubheading,
  ContactForm,
  ContactFormGroup,
  ContactInput,
  ContactTextArea,
  ContactButton
} from './ContactElements';

class ContactSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return(
      <ContactContainer id="contact">
      <ContactHeader>Contact Us</ContactHeader>
        <ContactFormContainer>       
        <ContactSubheading>Fill out the below form to begin your plastering journey.</ContactSubheading>
        <ContactForm id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <ContactFormGroup>
            <ContactInput placeholder="Your Name" type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </ContactFormGroup>
          <ContactFormGroup>
            <ContactInput placeholder="Your Email" type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </ContactFormGroup>
          <ContactFormGroup>
            <ContactTextArea placeholder="Message" className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </ContactFormGroup>
          <ContactButton type="submit" className="btn btn-primary">Submit</ContactButton>
        </ContactForm>
        </ContactFormContainer>
      </ContactContainer>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
  
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if(response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
}

export default ContactSection;
