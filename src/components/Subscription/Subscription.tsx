'use client';
import { useForm } from 'react-hook-form';
import emailValidationSchema from '@components/helpers/emailValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../Button/Button';
import Container from '../Container/Container';
import Input from '../Input/Input';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './Subscription.module.scss';

interface SubscriptionI {
  dict: {
    title: string;
    text: string;
    buttonText: string;
  };
}

interface FormValues {
  email: string;
}

const Subscription: React.FC<SubscriptionI> = ({ dict }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    setValue,
    reset,
  } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {},
    resolver: yupResolver(emailValidationSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };

  return (
    <Section className={styles.subscription}>
      <Container>
        <Typography
          variant="subheading2"
          color="var(--cl-gray-700)"
          className={styles.subscriptionTitle}
        >
          {dict.title}
        </Typography>
        <Typography
          variant="bodyRegular"
          color="var(--cl-gray-700)"
          className={styles.subscriptionTypography}
        >
          {dict.text}
        </Typography>
        <form
          className={styles.subscriptionWrapper}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="email"
            placeholder="Email"
            className={styles.subscriptionInput}
            errorMessage={errors.email?.message}
            error={errors.email}
            {...register('email')}
          />
          <Button variant="primary" className={styles.subscriptionButton}>
            {dict.buttonText}
          </Button>
        </form>
      </Container>
    </Section>
  );
};

export default Subscription;
