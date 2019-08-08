import * as React from 'react';
import { ErrorMessage } from 'formik';
import styles from '../styles/App.module.scss';

export const ErrorWrapper = ({name}) => <ErrorMessage className={styles.errors} role="alert" component="div" name={name} />
