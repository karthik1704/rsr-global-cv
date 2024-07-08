import { useState } from 'react';
import {SubmitHandler, useForm,  useFieldArray, FieldValues} from 'react-hook-form';
import Preview from './preview'
import PreviewPdf from './preview-pdf';


type FormValues = {
  firstName: string;
    lastName: string;
    dob: Date;
    nationality: string;
    gender: string;
    experience:number;
    companyName:string;
    add1:string;
    add2:string;
    about:string;
    email:string;
    workemail:string;
    location:string;
    about2:string;
    code:string;
    city:string;
    country:string;
    position:string;
    workfrom:string;
    workto:String;
  experiences: {
    years: number;
    description: string;
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
      experiences: [],
      }
    });

    const { fields, append, remove } = useFieldArray({
      control,
      name: 'experiences',
    });
    
      const[show,setShow] = useState(0);

      const[data,setData]=useState({});

    const onSubmit:SubmitHandler<FormValues> =async(data) =>{
      setData(data)
      handleNext();
        await new Promise((resolve)=>setTimeout(resolve,1000));
        console.log(data);

      }

    const handleNext = () => {
      setShow(show + 1)
    }
  
    // console.log('errors', errors);
  
    return (
        <div className="w-9/12 p-8 shadow-2xl  border-gray-300 text-justify mx-auto my-7">
        <form onSubmit={handleSubmit(onSubmit)}>
        {show === 0 && (
          <div>
            <h1 className="mb-4 px-6  text-gray-700 font-bold text-3xl">Personal information</h1>
    <p className="mb-4 px-6  text-gray-700 font-bold text-sm">
      Before you start, select the language you want to use in your
      profile
    </p>

    <hr />

    <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
    <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px] ">
    <label className="block text-gray-700 font-bold text-sm head">
          First Name<span className="text-red-700">*</span>
        </label>
          <input
          className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
           {...register('firstName', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='Type name same as in the passport' />
                </div>

          <br />

          <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
        <label className="block text-gray-700 font-bold text-sm head">
          Last Name<span className="text-gray-700"></span>
        </label>
          <input
           className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
          {...register('lastName', {
            maxLength: {
              value: 5,
              message: 'Max length is 5 characters'
            }
          })} placeholder='Last Name' />
          </div>
</div>

<div className="mb-4 w-full lg:w-1/2 px-6  md:w-[664px]">
        <label className="block text-gray-700 font-bold text-sm head">
          Date of birth<span className="text-red-700">*</span>
        </label>
          <input
           className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block mr-2 pl-4 w-1/2" 
          type="Date" {...register('dob', { valueAsNumber: true })} placeholder='dob' />
          </div>
{/* </div> */}

<div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
<div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
  <label className="block text-gray-700 font-bold text-sm head">
  Nationality
  <span className="text-red-700">*</span>
  </label>
  <input
    className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full mr-2 pl-4"
    {...register('nationality', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='Nationality' />
</div>

{/* <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px]">
  <label className="block text-gray-700 font-bold text-sm head">
    Status
    <span className="text-red-700">*</span>
  </label>
  <select
    className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full"
    {...register('lastName')}>
    <option value="">Select a Status</option>
    <option value="male">Married</option>
    <option value="female">unMarried</option>
  </select>
</div> */}
</div>

<h1 className="px-6 text-gray-700 font-bold">Address</h1>
<hr />

<div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px] text-blue-500">
    <label className="block text-gray-700 font-bold text-sm head">
          Address Line 1<span className="text-red-700">*</span>
        </label>
          <input
          className="border border-gray-300 bg-gray-100 text-blue-500 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
           {...register('add1', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder="eg:Street Name, P.O, Box" />
                </div>

                <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px] text-blue-500">
    <label className="block text-gray-700 font-bold text-sm head">
          Address Line 2<span className="text-red-700">*</span>
        </label>
          <input
          className="border border-gray-300 bg-gray-100 text-blue-500 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
           {...register('add2', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='Apartment, suite, unit, building, floor, etc' />
                </div>

                <div className="flex flex-col gap-3 md:flex-row">

                <div className="mb-4 w-full md:w-2/6 px-6">
    <label className="block text-gray-700 font-bold text-sm head">
    Postal code<span className="text-red-700">*</span>
        </label>
          <input
          className="border border-gray-300 bg-gray-100 text-blue-500 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
           {...register('code', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='eg:6000 01' />
                </div>

                <div className="mb-4 w-full md:w-2/6 px-6">
    <label className="block text-gray-700 font-bold text-sm head">
    City<span className="text-red-700">*</span>
        </label>
          <input
          className="border border-gray-300 bg-gray-100 text-blue-500 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
           {...register('city', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='eg: chennai' />
                </div>

                <div className="mb-4 w-full md:w-2/6 px-6">
    <label className="block text-gray-700 font-bold text-sm head">
    Country<span className="text-red-700">*</span>
        </label>
          <input
          className="border border-gray-300 bg-gray-100 text-blue-500 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
           {...register('country', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='eg: India' />
                </div>

                </div>

                <h1 className="px-6 text-gray-700 font-bold">Contact</h1>
<hr />

<div className="mb-4 w-full md:w-2/6 px-6">
    <label className="block text-gray-700 font-bold text-sm head">
          Email Address<span className="text-red-700">*</span>
        </label>
          <input
          className="border border-gray-300 bg-gray-100 text-blue-500 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
           {...register('email', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='Enter Your E-mail' />
                </div>

                <div className="mb-4  w-full px-6">
    <label className="block text-gray-700 font-bold text-sm head">
    Main activities and responsibilities
        </label>
          <textarea
          className="border border-gray-300 bg-gray-100 text-blue-500 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
           {...register('about', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='About us'rows={5}
           />
                </div>

          <button type='button' className='w-20 flex items-center capitalize bg-blue-600 text-white p-2	' onClick={handleNext}>next</button>
          </div>
          )}

          {show === 1 && (
            <div>
            
            <h1 className="mb-4 px-6  text-gray-700 font-bold text-3xl">Work Experience</h1>
          <p className="mb-4 px-6  text-gray-700 font-bold text-sm">
           Describe all your work experience. you can include paid work, volunteering, internship, apprenticeships, freelancing and other activities.
          </p>
          {fields.map((item, index) => (
          <div key={item.id}>

<div  className="mb-4  w-2/4 px-6">
          <p className='text-gray-700 font-bold text-sm'>New work experience</p>
            <label className="block text-gray-700 font-bold text-sm head">
              Occupation or position held<span className="text-red-700">*</span>
            </label>
          <input {...register('experience', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='experience' 
          className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"/>
          </div>

<div className="mb-4  w-2/4 px-6  ">
            <label className="block text-gray-700 font-bold text-sm head">
              Employer<span className="text-red-700">*</span>
            </label>
          <input {...register('companyName', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='companyName'
          className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4" />
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-gray-700 font-bold text-sm head">
              From<span className="text-red-700">*</span>
            </label>
          <input {...register('workfrom', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} 
          className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
          type="Date" />
          </div>

          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-gray-700 font-bold text-sm head">
              To<span className="text-red-700">*</span>
            </label>
          <input {...register('workto', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} 
          className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4"
          type="Date" />
          </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-3 lg:flex-row">
          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-gray-700 font-bold text-sm head">
              Website<span className="text-red-700">*</span>
            </label>
          <input {...register('companyName', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='Website Name'
          className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4" />
          </div>

          <div className="mb-4  w-2/4 px-6  ">
            <label className="block text-gray-700 font-bold text-sm head">
              Location<span className="text-red-700">*</span>
            </label>
          <input {...register('location', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='Location Name'
          className="border border-gray-300 bg-gray-100 rounded-md py-2 mt-1 block w-full pl-4" />
          </div>
          </div>

          {/* <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px] text-blue-500">
    <label className="block text-gray-700 font-bold text-sm head">
          Address Line 1<span className="text-red-700">*</span>
        </label>
          <input
          className="border border-gray-300 bg-gray-100 text-blue-500 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
           {...register('add1', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='Type name same as in the passport' />
                </div>

                <div className="mb-4 w-full lg:w-1/2 px-6 md:w-[504px] text-blue-500">
    <label className="block text-gray-700 font-bold text-sm head">
          Address Line 2<span className="text-red-700">*</span>
        </label>
          <input
          className="border border-gray-300 bg-gray-100 text-blue-500 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
           {...register('add2', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='Type name same as in the passport' />
                </div>

                <div className="flex flex-col gap-3 md:flex-row">

                <div className="mb-4 w-full md:w-2/6 px-6">
    <label className="block text-gray-700 font-bold text-sm head">
          Address Line 2<span className="text-red-700">*</span>
        </label>
          <input
          className="border border-gray-300 bg-gray-100 text-blue-500 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
           {...register('add2', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='Type name same as in the passport' />
                </div>

                <div className="mb-4 w-full md:w-2/6 px-6">
    <label className="block text-gray-700 font-bold text-sm head">
          Address Line 2<span className="text-red-700">*</span>
        </label>
          <input
          className="border border-gray-300 bg-gray-100 text-blue-500 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
           {...register('add1', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='Type name same as in the passport' />
                </div>

                <div className="mb-4 w-full md:w-2/6 px-6">
    <label className="block text-gray-700 font-bold text-sm head">
          Address Line 2<span className="text-red-700">*</span>
        </label>
          <input
          className="border border-gray-300 bg-gray-100 text-blue-500 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
           {...register('add2', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='Type name same as in the passport' />
                </div>

                </div> */}

                {/* <h1 className="px-6 text-gray-700 font-bold">Contact</h1>
<hr /> */}

{/* <div className="mb-4 w-full md:w-2/6 px-6">
    <label className="block text-gray-700 font-bold text-sm head">
          Email Address<span className="text-red-700">*</span>
        </label>
          <input
          className="border border-gray-300 bg-gray-100 text-blue-500 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
           {...register('workemail', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='Type name same as in the passport' />
                </div> */}

                <div className="mb-4  w-full px-6">
    <label className="block text-gray-700 font-bold text-sm head">
    Main activities and responsibilities
        </label>
          <textarea
          className="border border-gray-300 bg-gray-100 text-blue-500 rounded-md py-2 mt-1 block w-full mr-2 pl-4" 
           {...register('about2', {
            required: {
              value: true,
              message: 'First Name is required'
            }
          })} placeholder='Type name same as in the passport'
          rows={5} />
                </div>
            {/* <button type='button' onClick={() => remove(index)}>
              Remove
            </button> */}
          </div>
        ))}
          

          <button type='button' className='w-28 flex items-center capitalize bg-blue-600 text-white p-2' onClick={() => append({ years: 0, description: '' })}>
              Add Experience
            </button>
            <br />
            <button type='button' className='w-28 flex items-center capitalize bg-blue-600 text-white p-2' onClick={()=>remove(item)}>Remove</button>
            <br />
          <input type="submit" className='w-20 flex items-center capitalize bg-blue-600 text-white p-2	' value="submit" />

          </div>
          )}

        </form>
        {show === 2 && (
        <div>
          <Preview data={data} handleNext={handleNext}/>
           <button className='w-20 flex items-center capitalize bg-blue-600 text-white p-2' onClick={handleNext}>Next</button>
        </div>
        )}

{show === 3 && (
        <div>
          <PreviewPdf data={data} handleNext={handleNext}/>
           {/* <button className='w-20 flex items-center capitalize bg-blue-600 text-white p-2' onClick={handleNext}>Next</button> */}
        </div>
        )}



      </div>


    );
  }

  export default Resume