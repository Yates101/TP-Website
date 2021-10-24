import styled from 'styled-components';

export const ContactContainer = styled.div `
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const ContactFormContainer = styled.div `
  max-width:400px;
	width:100%;
  padding: 64px;
	margin:0 auto;
	position:relative;
  background: black;
  border-radius: 25px;
`

export const ContactHeader = styled.h3 `
	display: block;
  font-size: 2.5rem;
  color: black;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`
export const ContactSubheading = styled.h4 `
  color: white;
  margin: 0 auto 15px 45px;
	display:block;
	font-size:13px;
  font-weight: 400;
`

export const ContactForm = styled.form `
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
`

export const ContactFormGroup = styled.div `

`

export const ContactLabel = styled.label `
`

export const ContactInput = styled.input `
  font:400 12px/16px "Open Sans", Helvetica, Arial, sans-serif;
`

export const ContactTextArea = styled.textarea `
`

export const ContactButton = styled.button `
  border-radius: 50px;
  background: '#010606';
  white-space: nowrap;
  padding: '14px 48px';
  color: '#010606';
  font-size: '20px';
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: '#fff';
  }
`