import * as React from 'react';
import styles from '../styles/App.module.scss';
import { Formik, Form, Field } from 'formik';
import { PersonalSchema } from '../schemas/PersonalSchema';
import { ErrorWrapper } from './ErrorWrapper';

export const PersonalInfo = ({onSubmit, initialValues, hidden}) => <>
  <Formik
    initialValues={initialValues}
    validationSchema={PersonalSchema}
    onSubmit={(values) => onSubmit(values)}
  >
    {({errors, touched, ...state}) => <Form className={styles.form} style={hidden ? {display: 'none'}: {}}>
      <label className={[
        styles.label,
        (touched.firstName && !errors.firstName) && styles.valid,
        (touched.firstName &&  errors.firstName) && styles.invalid,
      ].join(' ')}>
        <span>Имя</span>
        <Field name="firstName" placeholder="Иван"></Field>
        <ErrorWrapper name="firstName" />
      </label>
      <label className={[
        styles.label,
        (touched.lastName && !errors.lastName) && styles.valid,
        (touched.lastName &&  errors.lastName) && styles.invalid,
      ].join(' ')}>
        <span>Фамилия</span>
        <Field name="lastName" placeholder="Иванов"></Field>
        <ErrorWrapper name="lastName" />
      </label>
      <label className={[
        styles.label,
        (touched.phone && !errors.phone) && styles.valid,
        (touched.phone &&  errors.phone) && styles.invalid,
      ].join(' ')}>
        <span>Телефон</span>
        <Field name="phone" placeholder="+79876543210"></Field>
        <ErrorWrapper name="phone" />
      </label>
      <label className={[
        styles.label,
        (touched.email && !errors.email) && styles.valid,
        (touched.email &&  errors.email) && styles.invalid,
      ].join(' ')}>
        <span>Email</span>
        <Field name="email" placeholder="ivanov@example.com"></Field>
        <ErrorWrapper name="email" />
      </label>
      <button type="submit"
              className={styles.submit}
              disabled={!state.isValid}>Продолжить</button>
    </Form>}
  </Formik>
</>