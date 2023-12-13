'use client';
import { useForm } from 'react-hook-form';
import emailValidationSchema from '@components/helpers/emailValidationSchema';
import { showToast } from '@components/helpers/showToast';
import useStatusState from '@components/hooks/useStatusState';
import { yupResolver } from '@hookform/resolvers/yup';
import { subscribeToNewsletter } from '@lib/api-services/subscribeToNewsletter';

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
  const { state, handleStatus } = useStatusState({
    isLoading: false,
    hasError: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {},
    resolver: yupResolver(emailValidationSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      handleStatus('isLoading', true);
      await subscribeToNewsletter(data?.email);
      showToast('Your email was successfully sent!');
    } catch (error: unknown) {
      handleStatus('hasError', true);
      console.log(error);
      showToast('Ooops😌 Something went wrong!', 'error');
    } finally {
      handleStatus('isLoading', false);
      reset();
    }
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
          <Button
            variant="primary"
            className={styles.subscriptionButton}
            disabled={!!errors?.email || state.isLoading}
            isLoading={state.isLoading}
          >
            {dict.buttonText}
          </Button>
        </form>
      </Container>
    </Section>
  );
};

export default Subscription;
