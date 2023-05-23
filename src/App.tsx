import { useState } from 'react';
import Modal from 'react-modal'
import { TransactionContext, TransactionsProvider, } from './TransactionsContext';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')

export function App() {

    //estado do Modal
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    //funcao se o Modal esta aberto
      function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
      }
    
    //funcao se o Modal esta fechado
      function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
      }

  return (
    <TransactionsProvider >
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}