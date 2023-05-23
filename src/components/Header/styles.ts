import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

//logo e nova transacao alinhar ao meio com align-items: center
//justify-content: space-between a espaco entre logo e o botao
//filter: brighthess(0.9) vai levemente escurecer o botao 
 export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
  font-size: 1rem;
  color: #FFFFFF;
  background: var(--blue-light);
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;

  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.9)
  }
}
`;