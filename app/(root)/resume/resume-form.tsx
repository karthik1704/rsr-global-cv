'use client';
import { useState } from 'react';
import {SubmitHandler, useForm,  useFieldArray, FieldValues} from 'react-hook-form';
import Preview from './preview'
import PreviewPdf from './preview-pdf-new';
import ImageUploader from '@/components/image/image_uploader'
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
    educationfrom:string;
    educationto:string;
    educationcity:string;
    educationcountry:string;
    Hobbies:string;
    institute :string;
    trainingfrom:string;
    trainingto:string;
    traininglocation:string;
    trainingskills:string;
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
    const { register, handleSubmit, formState: { errors }, getValues, trigger, control } = useForm<FormValues>({
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

    const {fields:educationFields, append:appendeducation, remove:removeeducation} = useFieldArray({
      control,
      name: 'education',
    })

      const[show,setShow] = useState(0);

      const[data,setData]=useState({});

      const [showFields, setShowFields] = useState(true);

      const handleNext = async () => {
        const isValid = await trigger();
        if(isValid){
          setShow(show + 1)
        }
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
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='Type name same as in the passport' />
{errors.firstName && <p className="text-red-700 text-sm">{errors.firstName.message}</p>}
                </div>

          <br />

          <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
        <label className="block text-black font-bold text-sm head mb-2">
          Last Name<span className="text-gray-700"></span>
        </label>
          <input
           className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          {...register('lastName', {
            required: {
              value: true,
              message: 'Last Name is required'
            }
          })} placeholder='Last Name' />
          {errors.lastName && <p className="text-red-700 text-sm">{errors.lastName.message}</p>}
          </div>
</div>

<div className="mb-4 w-full lg:w-1/2 px-6  md:w-[664px]">
        <label className="block text-black font-bold text-sm head">
          Date of birth<span className="text-red-700">*</span>
        </label>
          <input
           className="px-4 block w-1/2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
          type="date"
           {...register('dob',{
            required:{
              value:true,
              message:'Date of birth required'
            }
           })} placeholder='dob' />
           {errors.dob && <p className="text-red-700 text-sm">{errors.dob.message}</p>}
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
            required: {
              value: true,
              message: 'Nationality is required'
            }
          })} placeholder='Nationality' />
          {errors.nationality && <p className="text-red-700 text-sm">{errors.nationality.message}</p>}
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
            required: {
              value: true,
              message: 'Address is required'
            }
          })} placeholder="eg:Street Name, P.O, Box" />
          {errors.add1 && <p className="text-red-700 text-sm">{errors.add1.message}</p>}
                </div>

                <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px] ">
    <label className="block text-black font-bold text-sm head mb-2">
          Address Line 2<span className="text-red-700">*</span>
        </label>
          <input
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
           {...register('add2', {
            required: {
              value: true,
              message: 'Address is required'
            }
          })} placeholder='Apartment, suite, unit, building, floor, etc' />
          {errors.add2 && <p className="text-red-700 text-sm">{errors.add2.message}</p>}
                </div>

                <div className="flex flex-col gap-3 md:flex-row">

                <div className="mb-4 w-full md:w-2/6 px-6">
    <label className="block text-black font-bold text-sm head mb-2">
    Postal code<span className="text-red-700">*</span>
        </label>
          <input
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
           {...register('code', {
            required: {
              value: true,
              message: 'postal code is required'
            }
          })} placeholder='eg:6000 01' />
          {errors.code && <p className="text-red-700 text-sm">{errors.code.message}</p>}
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
              message: 'City is required'
            }
          })} placeholder='eg: chennai' />
          {errors.city && <p className="text-red-700 text-sm">{errors.city.message}</p>}
                </div>

                <div className="mb-4 w-full md:w-2/6 px-6">
    <label className="block text-black font-bold text-sm head mb-2">
    Country<span className="text-red-700">*</span>
        </label>
          <input
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
           {...register('country', {
            required: {
              value: true,
              message: 'Country is required'
            }
          })} placeholder='eg: India' />
          {errors.country && <p className="text-red-700 text-sm">{errors.country.message}</p>}
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
            required: {
              value: true,
              message: 'Email Id is required'
            }
          })} placeholder='Enter Your E-mail' />
          {errors.email && <p className="text-red-700 text-sm">{errors.email.message}</p>}
                </div>

                <div className="mb-4  w-full px-6">
    <label className="block text-black font-bold text-sm head mb-2">
    Main activities and responsibilities
        </label>
          <textarea
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
           {...register('about', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='About us'rows={5}
           />
                </div>

          <button type='button' className='mx-6 w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 font-bold rounded-md' onClick={handleNext}>next</button>
          </div>
          )}

          {show === 1 && (
            <div>

          {experienceFields.map((item, index) => (
          <div key={item.id}>

<div className="mb-4  w-2/4 px-6">
<div className='flex justify-between items-center	'>
          <p className='text-black font-bold text-3xl mb-4'>Work experience</p>
          <button type='button' className='w-10 capitalize bg-green-600 hover:bg-green-500 text-white rounded-full font-bold p-2' onClick={() => removeExperience(index)}>
              X
            </button>
            </div>
            <label className="block text-black font-bold text-sm head mb-2">
              Occupation or position held<span className="text-red-700">*</span>
            </label>
          <input {...register(`experiences.${index}.position`, {
            required: {
              value: true,
              message: 'Position is required'
            }
          })} placeholder='Position' 
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          />
          {errors.position && <p className="text-red-700 text-sm">{errors.position.message}</p>}
          </div>

<div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              Employer<span className="text-red-700">*</span>
            </label>
          <input {...register(`experiences.${index}.companyName`, {
            required: {
              value: true,
              message: 'Employer name is required'
            }
          })} placeholder='companyName'
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
           />
           {errors.companyName && <p className="text-red-700 text-sm">{errors.companyName.message}</p>}
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              From<span className="text-red-700">*</span>
            </label>
          <input {...register(`experiences.${index}.workfrom`, {
            required: {
              value: true,
              message: 'Date is required'
            }
          })} 
         className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          {errors.workfrom && <p className="text-red-700 text-sm">{errors.workfrom.message}</p>}
          </div>

          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              To<span className="text-red-700">*</span>
            </label>
          <input {...register(`experiences.${index}.workto`, {
            required: {
              value: true,
              message: 'Date is required'
            }
          })} 
          className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          {errors.workto && <p className="text-red-700 text-sm">{errors.workto.message}</p>}
          </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              Website<span className="text-red-700">*</span>
            </label>
          <input {...register(`experiences.${index}.companyName`, {
            required: {
              value: true,
              message: 'Website is required'
            }
          })} placeholder='Website Name'
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
           />
           {errors.workwebsite && <p className="text-red-700 text-sm">{errors.workwebsite.message}</p>}
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

       <div className='flex items-center mx-6 py-4'>
      <p className='text-gray-700 font-bold text-base head'>New work experience</p>
      <button type='button' className='w-14 items-center capitalize bg-slate-300 hover:bg-slate-200 text-black text-2xl mx-5 rounded-md font-extrabold' onClick={() => appendExperience({ years: 0, description: '' })}>
              +
            </button>
      </div>   

     <div className='flex mx-6'>    
    
    <button type='button' className='w-24 items-center capitalize bg-white text-black hover:text-slate-100 hover:bg-green-600 p-2 font-bold rounded-md' onClick={handlePrevious}>Previous</button>
    <button type='button' className='w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10	font-bold rounded-md' onClick={handleNext}>next</button>
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
            required: {
              value: true,
              message: 'Qualification is required'
            }
          })} placeholder='Title of Qualification' 
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          />
          {errors.qualification && <p className="text-red-700 text-sm">{errors.qualification.message}</p>}
          </div>

<div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
             Organisation providing education and training<span className="text-red-700">*</span>
            </label>
          <input {...register('organisation', {
            required: {
              value: true,
              message: 'organisation Name is required'
            }
          })} placeholder='Name of the organisation'
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
           />
           {errors.organisation && <p className="text-red-700 text-sm">{errors.organisation.message}</p>}
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              From<span className="text-red-700">*</span>
            </label>
          <input {...register('educationfrom', {
            required: {
              value: true,
              message: 'Date is required'
            }
          })} 
          className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          {errors.educationfrom && <p className="text-red-700 text-sm">{errors.educationfrom.message}</p>}
          </div>

          <div className="mb-4  w-2/4 px-6">
            <label className="block text-black font-bold text-sm head mb-2">
              To<span className="text-red-700">*</span>
            </label>
          <input {...register('educationto', {
            required: {
              value: true,
              message: 'Date is required'
            }
          })} 
         className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          {errors.educationto && <p className="text-red-700 text-sm">{errors.educationto.message}</p>}
          </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              City<span className="text-red-700">*</span>
            </label>
          <input {...register('educationcity', {
            required: {
              value: true,
              message: 'City is required'
            }
          })} placeholder='City'
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
           />
           {errors.educationcity && <p className="text-red-700 text-sm">{errors.educationcity.message}</p>}
          </div>

          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              Country<span className="text-red-700">*</span>
            </label>
          <input {...register('educationcountry', {
            required: {
              value: true,
              message: 'Country is required'
            }
          })} placeholder='country'
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
           />
           {errors.educationcountry && <p className="text-red-700 text-sm">{errors.educationcountry.message}</p>}
          </div>
          </div>

          <div className='flex items-center mx-6 my-3'>
  <p className='text-gray-700 font-extrabold text-base head'>Education</p>
<button type='button' className='w-14 rounded-md items-center capitalize bg-slate-300 hover:bg-slate-200 text-black  mx-5 text-2xl font-bold' onClick={() => appendeducation({ years: 0, description: '' })}>
              +
            </button>
            </div>

            {educationFields.map((education, index)=>(
              <div key={education.id}>

<div className="mb-4 w-2/4 px-6">

<div className='flex justify-between items-center	'>
          <p className='text-black font-bold text-3xl my-4'>Education</p>
          <button type='button' className='w-10 capitalize bg-green-600 hover:bg-green-500 text-white rounded-full font-bold p-2' onClick={() => removeeducation(index)}>
              X
            </button>
            </div>



<label className="block text-black font-bold text-sm head mb-2">
 Title of qualification/credential awarded<span className="text-red-700">*</span>
</label>
<input {...register('qualification', {
required: {
  value: true,
  message: 'Qualification is required'
}
})} placeholder='Title of Qualification' 
className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
/>
{errors.qualification && <p className="text-red-700 text-sm">{errors.qualification.message}</p>}
</div>

<div className="mb-4  w-2/4 px-6  ">
<label className="block text-black font-bold text-sm head mb-2">
 Organisation providing education and training<span className="text-red-700">*</span>
</label>
<input {...register('organisation', {
required: {
  value: true,
  message: 'Organisation is required'
}
})} placeholder='Name of the organisation'
className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
/>
{errors.organisation && <p className="text-red-700 text-sm">{errors.organisation.message}</p>}
</div>

<div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
<div className="mb-4  w-2/4 px-6  ">
<label className="block text-black font-bold text-sm head mb-2">
  From<span className="text-red-700">*</span>
</label>
<input {...register('educationfrom', {
required: {
  value: true,
  message: 'Date is required'
}
})} 
className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
type="Date" />
{errors.educationfrom && <p className="text-red-700 text-sm">{errors.educationfrom.message}</p>}

</div>

<div className="mb-4  w-2/4 px-6">
<label className="block text-black font-bold text-sm head mb-2">
  To<span className="text-red-700">*</span>
</label>
<input {...register('educationto', {
required: {
  value: true,
  message: 'Date is required'
}
})} 
className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
type="Date" />
{errors.educationto && <p className="text-red-700 text-sm">{errors.educationto.message}</p>}
</div>
</div>

<div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
<div className="mb-4  w-2/4 px-6  ">
<label className="block text-black font-bold text-sm head mb-2">
  City<span className="text-red-700">*</span>
</label>
<input {...register('educationcity', {
required: {
  value: true,
  message: 'City is required'
}
})} placeholder='City'
className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
/>
{errors.educationcity && <p className="text-red-700 text-sm">{errors.educationcity.message}</p>}
</div>

<div className="mb-4  w-2/4 px-6  ">
<label className="block text-black font-bold text-sm head mb-2">
  Country<span className="text-red-700">*</span>
</label>
<input {...register('educationcountry', {
required: {
  value: true,
  message: 'Country is required'
}
})} placeholder='country'
className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
/>
{errors.educationcountry && <p className="text-red-700 text-sm">{errors.educationcountry.message}</p>}
</div>
</div>

              </div>
            ))} 
   <div className='flex mx-6'>
    
    <button type='button' className='w-24 items-center capitalize bg-white text-black hover:bg-green-600 hover:text-slate-100 p-2 font-bold rounded-md' onClick={handlePrevious}>Previous</button>
    <button type='button' className='w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10	font-bold rounded-md' onClick={handleNext}>next</button>
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
<input {...register('Hobbies', {
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
            Institute <span className="text-red-700">*</span>
            </label>
          <input {...register('institute', {
            required: {
              value: true,
              message: 'institute is required'
            }
          })} placeholder='Name of institute' 
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          />
          {errors.institute && <p className="text-red-700 text-sm">{errors.institute.message}</p>}
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              From<span className="text-red-700">*</span>
            </label>
          <input {...register('trainingfrom', {
            required: {
              value: true,
              message: 'Date is required'
            }
          })} 
          className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          {errors.trainingfrom && <p className="text-red-700 text-sm">{errors.trainingfrom.message}</p>}
          </div>

          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              To<span className="text-red-700">*</span>
            </label>
          <input {...register('trainingto', {
            required: {
              value: true,
              message: 'Date is required'
            }
          })} 
         className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          {errors.trainingto && <p className="text-red-700 text-sm">{errors.trainingto.message}</p>}
          </div>
          </div>

          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              Location<span className="text-red-700">*</span>
            </label>
          <input {...register('traininglocation', {
            required: {
              value: true,
              message: 'Location is required'
            }
          })} placeholder='Location Name'
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" 
          />
          {errors.traininglocation && <p className="text-red-700 text-sm">{errors.traininglocation.message}</p>}
          </div>

            </div>
<div className='flex items-center mx-6'>
  <p className='text-gray-700 font-extrabold text-base head'>New Training & Awards</p>
<button type='button' className='w-14 rounded-md items-center capitalize bg-slate-300 hover:bg-slate-200 text-black  mx-5 text-2xl font-bold' onClick={() => appendTraining({ years: 0, description: '' })}>
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
            Institute <span className="text-red-700">*</span>
            </label>
          <input {...register(`training.${index}.position`, {
            required: {
              value: true,
              message: 'Institute is required'
            }
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
            required: {
              value: true,
              message: 'Date is required'
            }
          })} 
          className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          {errors.traininglocation && <p className="text-red-700 text-sm">{errors.traininglocation.message}</p>}
          </div>

          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-black font-bold text-sm head mb-2">
              To<span className="text-red-700">*</span>
            </label>
          <input {...register('experience', {
            required: {
              value: true,
              message: 'Date is required'
            }
          })} 
          className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
          type="Date" />
          {errors.traininglocation && <p className="text-red-700 text-sm">{errors.traininglocation.message}</p>}
          </div>
          </div>

          <div className="mb-4  w-2/4 px-6">
            <label className="block text-black font-bold text-sm head mb-2">
              Location<span className="text-red-700">*</span>
            </label>
          <input {...register('educationcountry', {
            required: {
              value: true,
              message: 'Location is required'
            }
          })} placeholder='Location Name'
          className="pl-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
           />
           {errors.traininglocation && <p className="text-red-700 text-sm">{errors.traininglocation.message}</p>}
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
    {...register('trainingskills', {
            required: {
              value: true,
              message: 'skills is required'
            }
          })} 
          // placeholder='Nationality' 
          />
          {errors.trainingskills && <p className="text-red-700 text-sm">{errors.trainingskills.message}</p>}
</div>

               <div className='flex mx-6'>  
               <button type='button' className='w-24 items-center capitalize bg-white hover:bg-green-600 text-black p-2 hover:text-slate-100 font-bold rounded-md' onClick={handlePrevious}>Previous</button>  
               <input type="submit" className='w-20 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2  mx-10 font-bold rounded-md' value="submit" />
    </div>  
          
        </div>
        )}

        </form>
        {show === 4 && (
        <div>
          <Preview data={data} handleNext={handleNext}/>
           {/* <button className='w-20 flex items-center capitalize bg-blue-600 text-white p-2' onClick={handleNext}>Next</button> */}
           <div className='flex'> 
           <button type='button' className='w-16 items-center capitalize bg-white hover:bg-green-600 text-black hover:text-slate-100 p-2 font-bold rounded-md' onClick={handleReset}>Edit</button>
           <button type='button' className='w-16 items-center capitalize bg-green-600 hover:bg-green-500 text-white p-2 mx-10 font-bold rounded-md' onClick={handleNext}>next</button>
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