import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useDispatch } from 'react-redux';
import { sendOrder } from 'store/api-actions';
import { useState } from 'react';
import { FormsType } from './constants';
import { useSelector } from 'react-redux';
import { getSendOrderLoading } from 'store/app/selectors';

const initialState = {
  name: {
    value: '',
  },
  phone: {
    value: '',
  },
  peopleCount: {
    value: '',
  },
  isLegal: {
    value: false
  }
}

const BookingModal = ({onButtonClick}) => {
  const dispatch = useDispatch();
  const sendOrderLoading = useSelector(getSendOrderLoading);
  const [formState, setFormState] = useState(initialState);

  const resetForm = () => {
    setFormState(initialState);
    onButtonClick();
  };

  const handleInputChange = ({target}) => {
    const {name, value} = target;

    setFormState({
      ...formState,
      [name]: {
        value: value,
      },
    });
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    dispatch(sendOrder({
      name: formState.name.value,
      phone: formState.phone.value,
      peopleCount: Number(formState.peopleCount.value),
      isLegal: formState.isLegal.value,
    }, resetForm))
  };

  const isDisabled = sendOrderLoading;

  return (
    <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn onClick={onButtonClick}>
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        action="https://echo.htmlacademy.ru"
        method="post"
        id="booking-form"
        onSubmit={handleFormSubmit}
      >
        {FormsType.map(({id, title, placeholder, type}) => (
          <S.BookingField key={id}>
            <S.BookingLabel htmlFor={id}>{title}</S.BookingLabel>
            <S.BookingInput
              type={type}
              id={id}
              name={id}
              placeholder={placeholder}
              value={formState[id].value}
              required
              onChange={handleInputChange}
            />
          </S.BookingField>
        ))}
        <S.BookingSubmit
          type="submit"
          disabled={isDisabled}
        >
          Отправить заявку
        </S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            required
            value={formState.isLegal.value}
            onChange={() => setFormState({...formState, isLegal: {value: !formState.isLegal.value}})}
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
  )
};

export default BookingModal;
