import * as React from 'react';
import styles from '../styles/App.module.scss';
import { Formik, Form, Field } from 'formik';
import { ShippingSchema } from '../schemas/ShippingSchema';
import { ErrorWrapper } from './ErrorWrapper';

export const ShippingInfo = ({ initialValues, onSubmit, hidden, formRef }) =>
  <Formik
  initialValues={initialValues}
  validationSchemaOptions={{ showMultipleFieldErrors: true }}
  validationSchema={ShippingSchema}
  onSubmit={(values) => onSubmit(values)}
  ref={formRef}
  >{({values, touched, errors, ...state}) =>
    <Form className={styles.form}
          style={hidden ? {display: 'none'}: {}}>
      <label className={[styles.label, styles.wide, styles.radio].join(' ')}>
        <Field name="required"
              type="radio"
              value="true"
              checked={values.required === "true"}></Field>
        Доставка
      </label>
      <label className={[styles.label, styles.wide, styles.radio].join(' ')}>
        <Field name="required"
               type="radio"
               value="false"
               checked={values.required === "false"}></Field>
        Самовывоз
      </label>
      {values.required !== 'true' ? <></> : <>
        <label className={[
          styles.label,
          (touched.country && !errors.country) && styles.valid,
          (touched.country &&  errors.country) && styles.invalid,
        ].join(' ')}>
          <span>Страна</span>
          <Field name="country"
                 component="select"
                 placeholder="Не выбрано">
            <option value=''>Не выбрано</option>
            <option value='russia'>Россия</option>
          </Field>
          <ErrorWrapper name="country" />
        </label>
        <label className={[
            styles.label,
            (touched.city && !errors.city) && styles.valid,
            (touched.city &&  errors.city) && styles.invalid,
          ].join(' ')}>
          <span>Город</span>
          <Field name="city" placeholder="Москва"></Field>
          <ErrorWrapper name="city" />
        </label>
        <label className={[
            styles.label,
            (touched.zip && !errors.zip) && styles.valid,
            (touched.zip &&  errors.zip) && styles.invalid,
          ].join(' ')}>
          <span>Индекс</span>
          <Field name="zip" placeholder="100000"></Field>
          <ErrorWrapper name="zip" />
        </label>
        <label className={[
            styles.label,
            styles.wide,
            (touched.address && !errors.address) && styles.valid,
            (touched.address &&  errors.address) && styles.invalid,
          ].join(' ')}>
          <span>Адрес</span>
          <Field name="address" placeholder="" component="textarea"></Field>
          <ErrorWrapper name="address" />
        </label>
        <label className={[
            styles.label,
            (touched.deliveryDate && !errors.deliveryDate) && styles.valid,
            (touched.deliveryDate &&  errors.deliveryDate) && styles.invalid,
          ].join(' ')}>
          <span>Дата доставки</span>
          <Field name="deliveryDate" placeholder="01/01/2020" type="date"></Field>
          <ErrorWrapper name="deliveryDate" />
        </label>
      </>}
      <label className={`${styles.label} ${styles.wide}`}>
        <span>Комментарий</span>
        <Field name="comment" placeholder="Комментарий" component="textarea"></Field>
        <ErrorWrapper name="comment" />
      </label>
      <button type="submit"
              className={styles.submit}
              disabled={!state.isValid}>Создать заказ</button>
    </Form>
  }</Formik>