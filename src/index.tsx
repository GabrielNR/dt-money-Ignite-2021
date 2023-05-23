import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

    //Banco de Dados 
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Mouse classic - ID(01)',
            type: 'withdraw',
            category: 'Teclado e Mouse',
            amount: 8.90,
            createdAt: new Date('2022-06-20 09:00:00'),
          },
          {
            id: 2,
            title: 'Teclado Multilaser - ID(01)',
            type: 'withdraw',
            category: 'Teclado e Mouse',
            amount: 24.50,
            createdAt: new Date('2022-06-20 10:00:00'),
          },
          {
            id: 3,
            title: 'Somnambulist Disco rígido SSD 120gb - ID(01)',
            type: 'withdraw',
            category: 'SSD',
            amount: 90.00,
            createdAt: new Date('2022-06-20 11:00:00'),
          },
          {
            id: 4,
            title: 'Goldenfir Hd Sdd 120gb - ID(02)',
            type: 'withdraw',
            category: 'SSD',
            amount: 88.46,
            createdAt: new Date('2022-07-12 11:00:00'),
          },
          {
            id: 5,
            title: 'Bliksen ssd 120gb - ID(03)',
            type: 'withdraw',
            category: 'SSD',
            amount: 80.99,
            createdAt: new Date('2022-07-12 11:00:00'),
          },
          {
            id: 6,
            title: 'Case HD - ID(01)',
            type: 'withdraw',
            category: 'Case',
            amount: 17.90,
            createdAt: new Date('2022-07-12 11:00:00'),
          },
          {
            id: 7,
            title: 'Case HD - ID(02)',
            type: 'withdraw',
            category: 'Case',
            amount: 17.90,
            createdAt: new Date('2022-07-12 11:00:00'),
          },
          {
            id: 8,
            title: 'Kingston A400 SSD - ID(04)',
            type: 'withdraw',
            category: 'SSD',
            amount: 77.00,
            createdAt: new Date('2022-07-12 11:00:00'),
          },
          {
            id: 9,
            title: 'Kingston A400 SSD - ID(05)',
            type: 'withdraw',
            category: 'SSD',
            amount: 77.00,
            createdAt: new Date('2022-07-12 11:00:00'),
          },
          {
            id: 10,
            title: 'Sandisk flash 8gb - ID(01)',
            type: 'withdraw',
            category: 'Pendrive',
            amount: 11.85,
            createdAt: new Date('2022-07-12 11:00:00'),
          },
          {
            id: 11,
            title: 'Sandisk flash 8gb - ID(02)',
            type: 'withdraw',
            category: 'Pendrive',
            amount: 11.85,
            createdAt: new Date('2022-07-12 11:00:00'),
          },
          {
            id: 12,
            title: '1/4 Parcela do Somnambulist Disco rígido SSD 120gb - ID(01)',
            type: 'deposit',
            category: 'SSD',
            amount: 35.00,
            createdAt: new Date('2022-08-15 11:00:00'),
          },
          {
            id: 13,
            title: '1/4 Parcela do Bliksen ssd 120gb - ID(03)',
            type: 'deposit',
            category: 'SSD',
            amount: 35.00,
            createdAt: new Date('2022-08-15 11:00:00'),
          },
          
        ]
      })
    },
  
  //quais sao as rotas da api fake
  routes() {
    //todas as chamada vai esta apartir da api
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
      
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
    
      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


