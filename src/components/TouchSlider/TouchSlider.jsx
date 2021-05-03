import React from 'react';
import Slider from 'react-touch-drag-slider';
import Api from 'lib/api';
import { cocktails } from 'data';
import { Container } from './styles';

const TouchSlider = () => {
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

    await new Api().transaction(obj);
  };

  return (
    <Container>
      <Slider
        onSlideComplete={(i) => {
          console.log('finished dragging, current slide is', i);
        }}
        onSlideStart={(i) => {
          console.log('started dragging on slide', i);
        }}
        activeIndex={0}
        threshHold={100}
        transition={0.5}
        scaleOnDrag={true}
      >
        {cocktails.map(({ url, title, price }, index) => (
          <img
            src={url}
            key={index}
            alt={title}
            onClick={() => handleClick(price)}
          />
        ))}
      </Slider>
    </Container>
  );
};

export default TouchSlider;
