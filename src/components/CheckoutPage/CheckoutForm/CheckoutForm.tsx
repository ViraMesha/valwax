import Input from '@components/components/Input/Input';

import styles from './CheckoutForm.module.scss';

const CheckoutForm = () => {
  return (
    <form className={styles.form}>
      <fieldset className={styles.form__group}>
        <legend className={styles.group__title}>Контактні дані</legend>
        <div className={styles.contactInfo__wrapper}>
          <Input label={`Ім’я *`} type="text" placeholder={`Ім’я`} />
          <Input label="Прізвище *" type="text" placeholder="Прізвище" />
          <Input label="Email *" type="email" placeholder="Email" />
        </div>
      </fieldset>
    </form>
  );
};

export default CheckoutForm;
