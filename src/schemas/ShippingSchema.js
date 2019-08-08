import * as Yup from 'yup'

export const Countries = ['Россия'];

const optionalRequiredBuilder = {is: true, then: Yup.string().required()};

// const transform = () => {};
export const ShippingSchema = Yup.object({
  required: Yup.boolean(),
  country: Yup.string().min(1).when('required', optionalRequiredBuilder),
  city: Yup.string().max(255).when('required', optionalRequiredBuilder),
  zip: Yup.string().length(6).when('required', optionalRequiredBuilder),
  address: Yup.string().max(255).when('required', optionalRequiredBuilder),
  deliveryDate: Yup.date().min(new Date()).when('required', {is: true, then: Yup.date().required()}),
  comment: Yup.string(),
})
