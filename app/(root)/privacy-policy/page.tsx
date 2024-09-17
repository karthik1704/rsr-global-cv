import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata:Metadata =  {
    title: 'Terms and Conditions | Keedriver',
    description: 'Terms and Conditions Page',
}
  
export default function TermsConditions() {
  return (

    <main className="flex mx-auto">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-semibold mb-4 text-center text-blue-900">Terms and Conditions</h1>

        <hr className="my-3 border-b-2 border-black"/>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">Introduction</h2>
          <p className="text-gray-700 mb-3">
          The services of the RSR Global CV Builder platform are provided to you subject to 
the following Terms and Conditions. By accessing or using our platform, you agree 
to be bound by these Terms and Conditions of use.
          </p>
          <p className="text-gray-700 mb-3">
          The RSR Global Training Academy Ltd and Vimkes Technology Ltd, as the platform 
owner, has a responsibility to ensure that the platform is secure, trustworthy and 
accessible to all users. This is why a set of Terms and Conditions were put in place 
to govern the use of the platform and to ensure that the platform is being used for 
its intended purpose of promoting better transparency of qualifications and 
competences through a portfolio of tools and documents. It is important that you 
are aware of and adhere to these Terms and Conditions to maintain a safe, secure 
and fair environment for all users.
          </p>
          <p className="text-gray-700 mb-3">
          Therefore, the following terms and conditions for the use of the RSR Global CV 
Builder platform apply
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">Illegal or Misleading Content</h2>
          <p className="text-gray-700 mb-3">
          You must only upload, store, or share content on the RSR Global CV Builder platform
that aligns with the intended purpose of RSR Global. You must not use the RSR 
Global CV Builder platform to upload, store, or share any illegal or misleading 
content, including but not limited to, false information, plagiarism, or intellectual 
property violations (content that infringes the intellectual property rights of others, 
such as copyrighted material or trademarks).
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">Privacy and Data Protection</h2>
          <p className="text-gray-700 mb-3">
          You must respect the privacy of other users and comply with data protection rules. 
You must not upload or share any sensitive or personal information without the 
explicit consent of the owner.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">Ethical Conduct</h2>
          <p className="text-gray-700 mb-3">
          You must use the RSR Global CV Builder platform in an ethical and respectful 
manner, avoiding any actions that may be harmful, abusive, or discriminatory 
towards others. You must not upload, store or share any unethical or unsuitable 
content.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">Security</h2>
          <p className="text-gray-700 mb-3">
          It is your responsibility to keep your account secure by creating a strong password 
and keeping it private. Do not share your account information with others or request
the login details to someone else's account. Additionally, you may wish to take 
additional reasonable steps to ensure the security of your account, including but not
limited to, activating two-factor authentication offered by EU login.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-medium mb-2">Modification of Terms and Conditions of Us</h2>
          <p className="text-gray-700 mb-3">
          The RSR Global Training Academy Ltd and Vimkes Technology Ltd reserves the right 
to modify these Terms and Conditions of Use at any time. Any such change will be 
notified on the platform, and your continued use of the RSR Global CV Builder 
platform constitutes your agreement to the latest version of the Terms and 
Conditions.
          </p>
          <p className='text-gray-700 mb-3'>
          By using the RSR Global CV Builder platform, you acknowledge and agree to comply
          with the policies and regulations outlined in these Terms and Conditions of Use.
          </p>
          <p className='text-gray-700 mb-3'>
          In case of any violation of the Terms and Conditions, the RSR Global Training 
Academy Ltd and Vimkes Technology Ltd reserves the right to remove any content 
that can be regarded as illegal, misleading, unethical or in any other way 
unsuitable. The Commission further reserves the right to temporarily or 
permanently restrict, suspend or block access to this platform to any user in 
violation of the Terms and Conditions, as well as delete any data connected to these
accounts. The European Commission accepts no liability for loss or damage 
resulting from such an action.
          </p>
          <p className='text-gray-700 mb-3'>Thank you for your cooperation and adherence to these terms and conditions</p>
        </section>
        
      </div>
      
    </main> 
  )
}