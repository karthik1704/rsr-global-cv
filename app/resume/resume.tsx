'use cilent';
import { useState } from 'react';
import {SubmitHandler, useForm,  useFieldArray, FieldValues} from 'react-hook-form';
import Preview from './preview'
// import PreviewPdf from './preview-pdf';
import PreviewPdf from './preview-pdf-new';
import { Stepper,Step } from 'react-form-stepper';
import Steppers from '@/components/stepper/status-stepper';
import ImageUploader from '../../components/image/image_uploader'
import StepperComponent from '@/components/stepper/dynamic'

type FormValues = {
  firstName: string;
    lastName: string;
    dob: Date;
    nationality: string;
    gender: string;
    experience:number;
    add1:string;
    add2:string;
    about:string;
    email:string;
    workemail:string;
    code:string;
    city:string;
    country:string;
    position:string;
    companyName:string;
    workfrom:string;
    workto:String;
    location:string;
    workabout:string;
    workwebsite:string;
    workdepartment:String;
    workaddress:string;
    qualification:string;
    organisation:string;
    educationwebsite:string;
    educationlocation:string;
  experiences: {
    years: number;
    description: string;
    workfrom:string;
    workto:String;
    companyName:string;
    aboutcompany:string;
    about2:string;
    position:string;
    location:string;
    workwebsite:string;
    workdepartment:String;
    workaddress:string;
  }[]
  training:{
    position:string;
  }[];
  }
  
  const Resume = () => {
    const { register, handleSubmit, formState: { errors }, getValues, control } = useForm<FormValues>({
      defaultValues: {
        firstName: '',
        lastName: '',
        // dob: '',
      experience: 0,
      companyName: '',
      experiences: [
        {
          workfrom:undefined,
    workto:undefined,
    companyName:undefined,
    aboutcompany:undefined,
    about2:undefined,
    position:undefined,
    location:undefined,
    workwebsite:undefined,
    workdepartment:undefined,
    workaddress:undefined,
        }
      ],
      training:[],
      }
    });

    const { fields:experienceFields, append:appendExperience, remove:removeExperience } = useFieldArray({
      control,
      name: 'experiences',
    });

    const {fields:trainingFields, append:appendTraining, remove:removeTraining} = useFieldArray({
    control,
    name: 'training',  
    })

      const[show,setShow] = useState(0);

      const[data,setData]=useState({});

      const [showFields, setShowFields] = useState(true);

      const handleNext = () => {
        setShow(show + 1)
      }
  
      const handlePrevious = () =>{
        setShow(show - 1)
      }
  
      const handleReset = () =>{
        setShow(0)
      }
  
      const toggleFields = () => {
        setShowFields(!showFields);
      };

    const onSubmit:SubmitHandler<FormValues> =async(data) =>{
      setData(data)
      handleNext();
        await new Promise((resolve)=>setTimeout(resolve,1000));
        console.log(data);

      }

      
    return (
        <div className="w-9/12 p-8 shadow-2xl  border-gray-300 text-justify mx-auto my-7">
          
<StepperComponent step={show} />

        <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Stepper
  steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }]}
  activeStep={show}
  onChange={handleNext}
  className="horizontal-stepper"
/> */}
        {show === 0 && (
          <div>
            <h1 className="mb-4 px-6  text-black font-bold text-3xl">Personal information</h1>
    <p className="mb-4 px-6  text-gray-700 font-bold text-sm">
      Before you start, select the language you want to use in your
      profile
    </p>

    <hr className='mb-2' />

    <ImageUploader />

    <div className="mb-4.5 flex flex-col gap-3 lg:flex-row mt-2">
    <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
    <label className="block text-black font-bold text-sm head mb-2">
          First Name<span className="text-red-700">*</span>
        </label>
          <input
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
           {...register('firstName', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='Type name same as in the passport' />

                </div>

          <br />

          <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
        <label className="block text-black font-bold text-sm head mb-2">
          Last Name<span className="text-gray-700"></span>
        </label>
          <input
           className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          {...register('lastName', {
            // maxLength: {
            //   value: 5,
            //   message: 'Max length is 5 characters'
            // }
          })} placeholder='Last Name' />
          </div>
</div>

<div className="mb-4 w-full lg:w-1/2 px-6  md:w-[664px]">
        <label className="block text-black font-bold text-sm head">
          Date of birth<span className="text-red-700">*</span>
        </label>
          <input
           className="border border-gray-300 rounded-md py-2 mt-1 block mr-2 px-4 w-1/2" 
          type="date"
           {...register('dob')} placeholder='dob' />
          </div>

<div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
<div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
  <label className="block text-black font-bold text-sm head mb-2">
  Nationality
  <span className="text-red-700">*</span>
  </label>
  <input
    className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
    {...register('nationality', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='Nationality' />
</div>


</div>

<h1 className="px-6 text-black font-bold">Address</h1>
<hr className='my-2' />

<div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px] ">
    <label className="block text-black font-bold text-sm head mb-2">
          Address Line 1<span className="text-red-700">*</span>
        </label>
          <input
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
           {...register('add1', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder="eg:Street Name, P.O, Box" />
                </div>

                <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px] ">
    <label className="block text-black font-bold text-sm head mb-2">
          Address Line 2<span className="text-red-700">*</span>
        </label>
          <input
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
           {...register('add2', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='Apartment, suite, unit, building, floor, etc' />
                </div>

                <div className="flex flex-col gap-3 md:flex-row">

                <div className="mb-4 w-full md:w-2/6 px-6">
    <label className="block text-black font-bold text-sm head mb-2">
    Postal code<span className="text-red-700">*</span>
        </label>
          <input
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
           {...register('code', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='eg:6000 01' />
                </div>

                <div className="mb-4 w-full md:w-2/6 px-6">
    <label className="block text-black font-bold text-sm head mb-2">
    City<span className="text-red-700">*</span>
        </label>
          <input
         className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
           {...register('city', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='eg: chennai' />
                </div>

                <div className="mb-4 w-full md:w-2/6 px-6">
    <label className="block text-black font-bold text-sm head mb-2">
    Country<span className="text-red-700">*</span>
        </label>
          <input
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
           {...register('country', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='eg: India' />
                </div>

                </div>

                <h1 className="px-6 text-black font-bold">Contact</h1>
<hr  className='my-2'/>

<div className="mb-4 w-full md:w-2/6 px-6">
    <label className="block text-black font-bold text-sm head mb-2">
          Email Address<span className="text-red-700">*</span>
        </label>
          <input
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
           {...register('email', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='Enter Your E-mail' />
                </div>

                <div className="mb-4  w-full px-6">
    <label className="block text-black font-bold text-sm head mb-2">
    Main activities and responsibilities
        </label>
          <textarea
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
           {...register('about', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='About us'rows={5}
           />
                </div>

          <button type='button' className='mx-6 w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 font-bold rounded-3xl' onClick={handleNext}>next</button>
          </div>
          )}

          {show === 1 && (
            <div>

          {experienceFields.map((item, index) => (
          <div key={item.id}>

<div className="mb-4  w-2/4 px-6">
{/* <div className='flex'> */}
<div className='flex justify-between items-center	'>
          <p className='text-black font-bold text-3xl mb-4'>Work experience</p>
          <button type='button' className='w-10 capitalize bg-green-600 hover:bg-green-500 text-white rounded-full font-bold p-2' onClick={() => removeExperience(index)}>
              X
            </button>
            </div>
            <label className="block text-black font-bold text-sm head mb-2">
              Occupation or position held<span className="text-red-700">*</span>
            </label>
          <input {...register('experience', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='experience' 
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          />
          </div>

<div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              Employer<span className="text-red-700">*</span>
            </label>
          <input {...register(`experiences.${index}.companyName`, {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='companyName'
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
           />
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              From<span className="text-red-700">*</span>
            </label>
          <input {...register(`experiences.${index}.workfrom`, {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} 
         className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          </div>

          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              To<span className="text-red-700">*</span>
            </label>
          <input {...register(`experiences.${index}.workto`, {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} 
          className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              Website<span className="text-red-700">*</span>
            </label>
          <input {...register(`experiences.${index}.companyName`, {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='Website Name'
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
           />
          </div>

          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              Location
            </label>
          <input {...register(`experiences.${index}.location`, {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='Location Name'
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
           />
          </div>
          </div>

          <div className="mb-4  w-full px-6">
    <label className="block text-black font-bold text-sm head mb-2">
    About company
        </label>
          <textarea
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
           {...register(`experiences.${index}.aboutcompany`, {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='about Company'
          rows={5} />
                </div>

                <div className="mb-4  w-full px-6">
    <label className="block text-black font-bold text-sm head mb-2">
    Main activities and responsibilities
        </label>
          <textarea
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
           {...register(`experiences.${index}.about2`, {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='about work responsibilities'
          rows={5} />
                </div>
            
          </div>
        ))}

       <div className='flex mx-6 py-4'>
      <p className='text-gray-700 font-bold text-base head'>New work experience</p>
      <button type='button' className='w-14 items-center capitalize bg-slate-300 hover:bg-slate-200 text-black text-2xl p-1 mx-5 font-extrabold' onClick={() => appendExperience({ years: 0, description: '' })}>
              +
            </button>
      </div>   

     <div className='flex mx-6'>    
    
    <button type='button' className='w-24 items-center capitalize bg-white text-black hover:text-slate-100 hover:bg-green-600 p-2 font-bold rounded-3xl' onClick={handlePrevious}>Previous</button>
    <button type='button' className='w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10	font-bold rounded-3xl' onClick={handleNext}>next</button>
    </div>

         

          </div>
          )}
          {show==2 && (
            <div>
                        <h1 className="mb-4 px-6  text-black font-bold text-3xl">Education</h1>
                        <hr className='mb-2' />

           <div className="mb-4  w-2/4 px-6">

            <label className="block text-black font-bold text-sm head mb-2">
             Title of qualification/credential awarded<span className="text-red-700">*</span>
            </label>
          <input {...register('qualification', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='Title of Qualification' 
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          />
          </div>

<div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
             Organisation providing education and training<span className="text-red-700">*</span>
            </label>
          <input {...register('organisation', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='Name of the organisation'
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
           />
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              From<span className="text-red-700">*</span>
            </label>
          <input {...register('experience', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} 
          className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          </div>

          <div className="mb-4  w-2/4 px-6">
            <label className="block text-black font-bold text-sm head mb-2">
              To<span className="text-red-700">*</span>
            </label>
          <input {...register('experience', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} 
         className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              City<span className="text-red-700">*</span>
            </label>
          <input {...register('educationwebsite', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='City'
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
           />
          </div>

          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              Country<span className="text-red-700">*</span>
            </label>
          <input {...register('educationlocation', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='country'
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
           />
          </div>
          </div>
          <div className='flex mx-6'>    
    
    <button type='button' className='w-24 items-center capitalize bg-white text-black hover:bg-green-600 hover:text-slate-100 p-2 font-bold rounded-3xl' onClick={handlePrevious}>Previous</button>
    <button type='button' className='w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10	font-bold rounded-3xl' onClick={handleNext}>next</button>
    </div>
            </div>
          )}

{show === 3 && (
        <div>
            <h1 className="mb-4 px-6  text-gray-900 font-bold text-3xl">Additional Information</h1>

            <div className="mb-4  w-2/4 px-6">

<label className="block text-black font-bold text-sm head mb-2">
 Hobbies and interests<span className="text-red-700">*</span>
</label>
<input {...register('qualification', {
// required: {
//   value: true,
//   message: 'First Name is required'
// }
})} 
// placeholder='Title of Qualification' 
className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
/>
</div>

<div>

<div className="mb-4  w-2/4 px-6">
<div className='flex justify-between items-center	'>
          <p className='text-gray-700 font-extrabold text-sm'>Training and awards</p>

            </div>
            <label className="block text-black font-bold text-sm head my-2">
              position held<span className="text-red-700">*</span>
            </label>
          <input {...register('experience', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='experience' 
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          />
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              From<span className="text-red-700">*</span>
            </label>
          <input {...register('experience', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} 
          className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          </div>

          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              To<span className="text-red-700">*</span>
            </label>
          <input {...register('experience', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} 
         className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          </div>
          </div>

          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              Location<span className="text-red-700">*</span>
            </label>
          <input {...register('educationlocation', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='Location Name'
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" />
          </div>

            </div>
<div className='flex mx-6'>
  <p className='text-gray-700 font-extrabold text-base head'>New Training & Awards</p>
<button type='button' className='w-14 items-center capitalize bg-slate-300 hover:bg-slate-200 text-black p-1 mx-5 text-2xl font-bold' onClick={() => appendTraining({ years: 0, description: '' })}>
              +
            </button>
            </div>

{trainingFields.map((training, index) => (
          <div key={training.id}>

<div className="mb-4  w-2/4 px-6">
<div className='flex justify-between items-center	'>
          <p className='text-gray-700 font-extrabold text-sm my-2'>Training and awards</p>
          <button type='button' className='w-10 capitalize bg-green-600 hover:bg-green-500 text-white font-bold p-2  my-2 rounded-3xl' onClick={() => removeTraining(index)}>
              X
            </button>
            </div>
            <label className="block text-black font-bold text-sm head my-2">
              position held<span className="text-red-700">*</span>
            </label>
          <input {...register(`training.${index}.position`, {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='experience' 
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          />
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              From<span className="text-red-700">*</span>
            </label>
          <input {...register('experience', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} 
          className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          </div>

          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              To<span className="text-red-700">*</span>
            </label>
          <input {...register('experience', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} 
          className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          </div>
          </div>

          <div className="mb-4  w-2/4 px-6">
            <label className="block text-black font-bold text-sm head mb-2">
              Location<span className="text-red-700">*</span>
            </label>
          <input {...register('educationlocation', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} placeholder='Location Name'
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
           />
          </div>

            </div>
            ))}

<p className='text-gray-700 font-extrabold text-sm mx-6 my-2'>Specialisation</p>

<div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
  <label className="block text-black font-bold text-sm head my-2">
  Primary Skills
  <span className="text-red-700">*</span>
  </label>
  <input
    className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
    {...register('nationality', {
            // required: {
            //   value: true,
            //   message: 'First Name is required'
            // }
          })} 
          // placeholder='Nationality' 
          />
</div>

               <div className='flex mx-6'>  
               <button type='button' className='w-24 items-center capitalize bg-white hover:bg-green-600 text-black p-2 hover:text-slate-100 font-bold rounded-3xl' onClick={handlePrevious}>Previous</button>  
               <input type="submit" className='w-20 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2  mx-10 font-bold rounded-3xl' value="submit" />
    </div>  
          
        </div>
        )}

        </form>
        {show === 4 && (
        <div>
          <Preview data={data} handleNext={handleNext}/>
           {/* <button className='w-20 flex items-center capitalize bg-blue-600 text-white p-2' onClick={handleNext}>Next</button> */}
           <div className='flex'> 
           <button type='button' className='w-16 items-center capitalize bg-white hover:bg-green-600 text-black hover:text-slate-100 p-2 font-bold rounded-3xl' onClick={handleReset}>Edit</button>
           <button type='button' className='w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10 font-bold rounded-3xl' onClick={handleNext}>next</button>
           </div>

        </div>
        )}

{show === 5 && (
        <div>
          <PreviewPdf data={data} handleNext={handleNext}/>
        </div>
        )}



      </div>


    );
  }

  export default Resume