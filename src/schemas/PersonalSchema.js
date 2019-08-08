import * as Yup from 'yup'

const phoneRegExp = /^\+\d+$/;
const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PersonalSchema = Yup.object({
  firstName: Yup.string()
    .max(255, 'Имена более 255 символов не поддерживаются')
    .required('Это поле обязательно для заполнения'),
  lastName: Yup.string()
    .max(255, 'Фамилии более 255 символов не поддерживаются')
    .required('Это поле обязательно для заполнения'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Телефонный номер не корректен')
    .required('Это поле обязательно для заполнения'),
  email: Yup.string()
    .matches(emailRegExp, 'Адрес электронной почты не корректен')
    .required('Это поле обязательно для заполнения'),

})