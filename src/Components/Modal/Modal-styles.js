import styled from 'styled-components';

export const ModalSection = styled.section`
  display: flex;
  justify-content: center;
`;

export const ModalContent = styled.div`
  top: -130px;
  transform: translateY(100%);
  height: 188px;
  width: 16rem;
  opacity: 0;
  visibility: hidden;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  z-index: 30;
  transition: transform 0.3s ease-out;
  will-change: transform;
  &.is-open {
    position: absolute;
    height: 300px;
    transform: translateY(325px);
    opacity: 1;
    visibility: visible;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
`;

export const ModalTitle = styled.div`
  margin-bottom: 0;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  margin-top: 6px;
`;

export const HeaderSidebarClose = styled.button`
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
`;

export const ModalBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  height: auto;
  margin-top: 1rem;
`;

export const ModalButton = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  margin-left: 4px;
  user-select: none;
  border: 1px solid transparent;
  font-size: 1rem;
  /* line-height: 1.5; */
  border-radius: 0.25rem;
`;

export const Input = styled.textarea`
  height: auto;
  margin-bottom: 20px;
  border: 1px solid #999999;
  width: calc(100%-1rem);
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  margin-bottom: 25px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const Form = styled.form`
  display: block;
  margin-top: 0em;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const FormControl = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const Small = styled.small`
  color: orange !important;
  display: block;
  margin-top: 0.25rem;
  font-size: 80%;
  font-weight: 400;
`;
