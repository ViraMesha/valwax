import Input from '@components/components/Input/Input';

import styles from './CheckoutForm.module.scss';

const CheckoutForm = () => {
  return (
    <form className={styles.form}>
      <fieldset className={styles.form__group}>
        <legend className={styles.group__title}>Контактні дані</legend>
        <div className={styles.contactInfo__wrapper}>
          <Input
            label={`Ім’я *`}
            placeholder={`Ім’я`}
            id="user_firstname"
            required
          />
          <Input
            label="Прізвище *"
            placeholder="Прізвище"
            id="user_lastname"
            required
          />
          <Input
            label="Email *"
            type="email"
            placeholder="Email"
            id="user_email"
            required
          />
        </div>
      </fieldset>
    </form>
  );
};

export default CheckoutForm;
