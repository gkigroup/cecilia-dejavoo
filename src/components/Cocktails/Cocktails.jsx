import React from 'react';
import Api from 'lib/api';
import { cocktails } from 'data';
import {
  Container,
  Wrapper,
  Item,
  CocktailImage,
  TextImage,
  Price,
  Title,
} from './styles';

const Cocktails = () => {
  const handleClick = async (price) => {
    const obj = {
      TerminalNumber: '2665648015',
      Password: '59B2955883f',
      Track2: 'PINPAD35594656',
      CardNumber: '',
      CVV: '',
      ExpDate_MMYY: '',
      TransactionSum: price,
      NumberOfPayments: '1',
      FirstPaymentSum: '0',
      OtherPaymentsSum: '0',
      TransactionType: '01',
      CurrencyType: '1',
      CreditType: '1',
      J: '0',
      IsCustomerPresent: 'false',
      AuthNum: '',
      HolderID: '',
      ExtraData: '',
      CustomerName: '',
      CustomerAddress: '',
      CustomerEmail: '',
      PhoneNumber: '',
      ItemDescription: '',
      ObeligoAction: '',
      OriginalZCreditReferenceNumber: '',
      TransactionUniqueIdForQuery: '',
    };

    const res = await new Api().transaction(obj);
    if (!res) alert('Approved');
    if (res) alert('Denied');
  };

  return (
    <Container>
      <Title>Cecilia Z-Credit API Integration</Title>
      <Wrapper>
        {cocktails.map((cocktail, key) => (
          <Item key={key} onClick={() => handleClick(cocktail.price)}>
            <CocktailImage src={cocktail.url} alt={cocktail.title} />
            <Price>${cocktail.price} Only</Price>
            <TextImage src={cocktail.text} alt={cocktail.title} />
          </Item>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Cocktails;
