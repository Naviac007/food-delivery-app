import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { hotelDataType } from '../comman/types';

interface AddFormProps {
    handleAdd: (hotel: hotelDataType) => void
    handleClose: () => void
}

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    description: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    isPureVeg: Yup.boolean()
        .required('Required'),
    location: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    city: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
  });


function AddForm(props: AddFormProps) {
    return (
    <div className="p-6 border-amber-500 border-t-8 ">
        <section className='flex justify-center mt-2 mb-5 items-center text-xl font-bold'>
            <h1 className='text-amber-500'>Add Hotel</h1>
        </section>
        <Formik
        initialValues={{
        name: '',
        description: '',
        isPureVeg: false,
        location: '',
        city: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
            // same shape as initial values
            const hotel: hotelDataType = {
                ...values, id: Date.now()
            }
            props.handleAdd(hotel);
            props.handleClose();
            console.log(values);
        }}
        >
        {({ errors, touched }) => (
            <Form className='w-full'>
            <div className='flex flex-col lg:flex-row items-start lg:items-center'>
            <div className="px-3 mb-6 w-full md:w-3/6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <Field name="name" className={`w-full block bg-gray-200 text-gray-700 border ${errors.name&&touched.name?'border-red-500':'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="name" type="text" placeholder="name"/>
                {errors.name && touched.name ? (
                    <p className="text-red-500 text-xs italic">{errors.name}</p>
                ) : null}     
            </div>
            <div className="w-full  items-center px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <Field name="description" className={`appearance-none block w-full  bg-gray-200 text-gray-700 border ${errors.description && touched.description?'border-red-500':'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="description" type="text" placeholder="description"/>
                {errors.description && touched.description ? (
                    <p className="text-red-500 text-xs italic">{errors.description}</p>
                ) : null}     
            </div>
            </div>

            <div className='flex flex-col lg:flex-row items-start lg:items-center lg:justify-around'>
                <div className="min-w-fit px-3 mb-6 ">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="isPureVeg">
                        Pure Veg?
                    </label>
                    <Field name="isPureVeg" type="checkbox" className={`h-5 w-5  accent-amber-500`} id="isPureVeg"/>
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                        Address
                    </label>
                    <Field name="location" className={`appearance-none w-full block  bg-gray-200 text-gray-700 border ${errors.location && touched.location?'border-red-500':'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="location" type="text" placeholder="address"/>
                    {errors.location && touched.location ? (
                        <p className="text-red-500 text-xs italic">{errors.location}</p>
                    ) : null}     
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
                        City
                    </label>
                    <Field name="city" className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.city && touched.city?'border-red-500':'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="city" type="text" placeholder="city"/>
                    {errors.city && touched.city ? (
                        <p className="text-red-500 text-xs italic">{errors.city}</p>
                    ) : null}     
                </div>
            </div>
            <section className="flex justify-center my-2 items-center gap-5">
            <button type="submit" className='text-sm p-2 h-fit border rounded text-amber-500 border-amber-500 hover:border-transparent hover:text-white hover:bg-amber-500'>
                Submit
            </button>
            <button type="button" onClick={props.handleClose} className='text-sm p-2 h-fit border rounded text-red-500 border-red-500 hover:border-transparent hover:text-white hover:bg-red-500'>
                close
            </button>
            </section>
            </Form>
        )}
        </Formik>
   </div>
    )
}
 

export default AddForm