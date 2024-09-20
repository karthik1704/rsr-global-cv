import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms and Conditions | Keedriver",
  description: "Terms and Conditions Page",
};

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col text-justify mx-auto px-4 sm:px-8 lg:px-16 py-8">
      <div className="w-full max-w-2xl lg:max-w-4xl mx-auto p-4 sm:p-8">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-4 text-center text-blue-900">
          Privacy Policy
        </h1>

        <hr className="my-3 border-b-2 border-black" />

        <section className="mt-8">

        <p className="text-gray-700 mb-3">
        This privacy policy applies between you, the user of this Website and RSR Global Training Academy & 
Vimkes Technology, the owner and provider of this Website. RSR Global Training Academy & Vimkes 
Technology takes the privacy of your information very seriously. This privacy policy applies to our 
use of any and all Data collected by us or provided by you in relation to your use of the Website.
          </p>

          <h2 className="text-xl font-bold mb-2">Please read this privacy policy carefully</h2>
          <h2 className="text-xl font-bold mb-2">Definitions and interpretation
          </h2>
          <h2 className="text-xl font-bold mb-2">1. In this privacy policy, the following definitions are used:
          </h2>
          <p className="text-gray-700 mb-3">
          Data: Collectively all information that you submit to RSR Global Training Academy & Vimkes 
Technology via the Website. This definition incorporates, where applicable, the definitions provided 
in the Data Protection Laws; Data Protection Laws any applicable law relating to the processing of 
personal Data, including but not limited to the Directive 96/46/EC (Data Protection Directive) or the 
GDPR, and any national implementing laws, regulations and secondary legislation, for as long as the 
GDPR is effective in the UK; GDPR the General Data Protection Regulation (EU) 2016/679; RSR 
Global Training Academy & Vimkes Technology: We or Us RSR Global Training Academy & Vimkes 
Technology, a company incorporated in England and Wales and India with registered number 
15276214 & TN02D0084864 respectively; User or you any third party that accesses the Website and 
is not either
          </p>
          <p className="text-gray-700 mb-3">
          (i) Employed by RSR Global Training Academy & Vimkes Technology and acting in the course of their 
employment or

          </p>
          <p className="text-gray-700 mb-3">
          (ii) Engaged as a consultant or otherwise providing services to RSR Global Training Academy & 
Vimkes Technology and accessing the Website in connection with the provision of such services; and 
website the website that you are currently using, www.rsrtrainingacademy.com, and any subdomains of this site unless expressly excluded by their own terms and conditions.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-2">
          2. In this privacy policy, unless the context requires a different interpretation:
          </h2>
          <ul className="text-gray-700 mb-3">
            <li>a. The singular includes the plural and vice versa;</li>
            <li>b. References to sub-clauses, clauses, schedules or appendices are to sub-clauses, clauses,
schedules or appendices of this privacy policy;
</li>
<li>c. A reference to a person includes firms, companies, government entities, trusts and
partnerships;</li>
<li>d. “Including” is understood to mean “including without limitation”;</li>
<li>e. Reference to any statutory provision includes any modification or amendment of it;</li>
<li>f. The headings and sub-headings do not form part of this privacy policy</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-2">
          3. Scope of This Privacy Policy:
          </h2>
          <p className="text-gray-700 mb-3">
          This privacy policy applies only to the actions of RSR Global Training Academy & Vimkes Technology
and Users with respect to this website. It does not extend to any websites that can be accessed from 
this website including, but not limited to, any links we may provide to social media websites.
          </p>
        </section>

        <section className="mt-8">
          {/* <h2 className="text-xl font-bold mb-2">
            Ethical Conduct
          </h2> */}
          <p className="text-gray-700 mb-3">
          4. For purposes of the applicable Data Protection Laws, RSR Global Training Academy & Vimkes 
Technology is the “data controller”. This means that RSR Global Training Academy & Vimkes 
Technology determines the purposes for which, and the manner in which, your Data is processed.

          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-2"> 5. Data Collected:</h2>
          <p className="text-gray-700 mb-3">
          We may collect the following Data, which includes personal Data, from you:
          </p>
          <ul className="text-gray-700 mb-3">
            <li>a. Name</li>
            <li>b. Gender</li>
            <li>c. Contact Information such as email addresses and telephone numbers</li>
            <li>d. Demographic information such as postcode, preferences and interests; in each case, in 
            accordance with this privacy policy.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-2">
          6. How we collect Data:
          </h2>
          <p className="text-gray-700 mb-3">
          We collect Data in the following ways:
          </p>
          <ul className="text-gray-700 mb-3">
            <li>a. Data is given to us by you</li>
            <li>b. Data is received from other sources and</li>
            <li>c. Data is collected automatically.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-2">
          7. Data that is given to us by you:
          </h2>
          <p className="text-gray-700 mb-3">
          RSR Global Training Academy & Vimkes Technology will collect your Data in the following ways:
          </p>
          <ul className="text-gray-700 mb-3">
            <li>a. When you contact us through the Website, by telephone, post, e-mail or through any other 
            means</li>
            <li>b. When you register with us and set up an account to receive our products/services</li>
            <li>c. When your complete surveys that we use for research purposes (although you are not obliged to 
                respond to them)</li>
                <li>d. When you enter a competition or promotion through a social media channel</li>
                <li>e. When you make payments to us, through this Website or otherwise</li>
                <li>f. When you elect to receive marketing communications from us</li>
                <li>g. When you use our services, in each case, in accordance with this privacy policy.
                </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-2">
          8. Data that is received from third parties:
          </h2>
          <p className="text-gray-700 mb-3">
          We collect Data in the following ways:
          </p>
          <ul className="text-gray-700 mb-3">
            <li>a. RSR Global Training Academy & Vimkes Technology will receive Data about you from the 
            following third parties.</li>
            <li>b. Data that is received from publicly available third parties’ sources</li>
          </ul>
        </section>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
          9. We will receive Data about you from the following publicly available third-party sources.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-2">
          10. Data that is collected automatically:
          </h2>
          <p className="text-gray-700 mb-3">
          To the extent that you access the Website, we will collect your Data automatically, for example:

          </p>
          <ul className="text-gray-700 mb-3">
            <li>a. we automatically collect some information about your visit to the Website. This information 
helps us to make improvements to Website content and navigation, and includes your IP 
address, the date, times and frequency with which you access the Website and the way you 
use and interact with its content.</li>
          </ul>
        </section>

    <h2 className="text-xl font-bold mb-2">Our use of Data
        </h2>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
         11. Any or all of the above Data may be required by us from time to time in order to provide you 
with the best possible service and experience when using our website. Specifically, Data may be 
used by us for the following reasons:

          </p>
          <ul className="text-gray-700 mb-3">
            <li>a. internal record keeping</li>
            <li>b. improvement of our products / services</li>
            <li>c. transmission by email of marketing materials that may be of interest to you</li>
            <li>d. contact for market research purposes which may be done using email, telephone, fax or mail. 
            Such information may be used to customise or update the Website</li>
          </ul>
          <p className="text-gray-700 mb-3">in each case, in accordance with this privacy policy.</p>
        </section>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
          12. We may use your Data for the above purposes if we deem it necessary to do so for our legitimate 
interests. If you are not satisfied with this, you have the right to object in certain circumstances (see 
the section headed “Your rights” below).
          </p>
        </section>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
          13. For the delivery of direct marketing to you via e-mail, we will need your consent, whether via an 
opt-in or soft-opt-in:
<ul className="text-gray-700 mb-3">
<li>a. soft opt-in consent is a specific type of consent which applies when you have previously engaged 
with us (for example, you contact us to ask us for more details about a particular product/service, 
and we are marketing comparable products/services). Under “soft opt-in” consent, we will take your 
consent as given unless you opt-out.</li>
<li>b. For other types of e-marketing, we are required to obtain your explicit consent; that is, you need 
to take positive and affirmative action when consenting by, for example, checking a tick box that we 
will provide.
</li>
<li>c. If you are not satisfied about our approach to marketing, you have the right to withdraw consent 
at any time. To find out how to withdraw your consent, see the section headed “Your rights” below.
</li>
</ul>
          </p>
        </section>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
          14. When you register with us and set up an account to receive our services, the legal basis for this 
processing is the performance of a contract between you and us and/or taking steps, at your 
request, to enter into such a contract.
          </p>
        </section>

        <h2 className="text-xl font-bold mb-2">Who we share Data with</h2>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
          15. We may share your Data with the following groups of people for the following reasons:
          </p>
          <ul className="text-gray-700 mb-3">
            <li>a. Any of our group companies or affiliates – to share the information within the company for record 
            keeping</li>
            <li>b. Our employees, agents and/or professional advisors – for sales quotation generation.; in each 
            case, in accordance with this privacy policy.</li>
          </ul>
        </section>

        <h2 className="text-xl font-bold mb-2">Keeping Data secure</h2>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
          16. We will use technical and organisational measures to safeguard your Data, for example:
          </p>
          <ul className="text-gray-700 mb-3">
            <li>a. Access to your account is controlled by a password and a username that is unique to you.</li>
            <li>b. We store your Data on secure servers.</li>
          </ul>
        </section>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
          17. Technical and organisational measures include measures to deal with any suspected data breach. 
If you suspect any misuse or loss or unauthorised access to your Data, please let us know
          </p>
          <p className="text-gray-700 mb-3">
          immediately by contacting us via this e-mail address: training@rsrglobal.org with a copy to 
contact@rsrglobal.org.
          </p>
        </section>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
          18. If you want detailed information from, Get Safe Online on how to protect your information and 
your computers and devices against fraud, identity theft, viruses and many other online problems, 
please visit www.getsafeonline.org. Get Safe Online is supported by HM Government and leading 
businesses.
Data retention.
          </p>
        </section>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
          19. Unless a longer retention period is required or permitted by law, we will only hold your Data on 
our systems for the period necessary to fulfil the purposes outlined in this privacy policy or until you 
request that the Data be deleted.
          </p>
        </section>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
          20. Even if we delete your Data, it may persist on backup or archival media for legal, tax or 
regulatory purposes.
          </p>
          <h2 className="text-xl font-bold mb-2">Your rights</h2>
        <p className="text-gray-700 mb-3">
        You have the following rights in relation to your Data:
          </p>
          <ul className="text-gray-700 mb-3">
            <li>a. Right to access – the right to request (i) copies of the information we hold about you at any time, 
or (ii) that we modify, update or delete such information. If we provide you with access to the 
information we hold about you, we will not charge you for this, unless your request is “manifestly 
unfounded or excessive.” Where we are legally permitted to do so, we may refuse your request. If 
we refuse your request, we will tell you the reasons why.</li>
            <li>b. Right to correct – the right to have your Data rectified if it is inaccurate or incomplete.</li>
            <li>c. Right to erase – the right to request that we delete or remove your Data from our
systems.
</li>
<li>d. Right to restrict our use of your Data – the right to “block” us from using your Data or limit the 
way in which we can use it.
</li>
<li>e.Right to data portability – the right to request that we move, copy or transfer your Data.</li>
<li>f.Right to object – the right to object to our use of your Data including where we use it for our 
legitimate interests.</li>
          </ul>
        </section>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
          21. To make enquiries, exercise any of your rights set out above, or withdraw your consent to the 
processing of your Data (where consent is our legal basis for processing your Data), please contact us 
via this e-mail address: training@rsrglobal.org with a copy to contact@rsrglobal.org
          </p>
        </section>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
          22. If you are not satisfied with the way a complaint you make in relation to your Data is managed by 
us, you may be able to refer your complaint to the relevant data protection authority. For the UK, 
this is the Information Commissioner’s Office (ICO). The ICO’s contact details can be found on their 
website at https://ico.org.uk/.
          </p>
        </section>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
          23. It is important that the Data we hold about you is accurate and current. Please keep us informed 
          if your Data changes during the period for which we hold it.
          </p>
        </section>

        <h2 className="text-xl font-bold mb-2">Links to other websites</h2>

        <section className="mt-8">
          <p className="text-gray-700 mb-3">
          24. This Website may, from time to time, provide links to other websites. We have no control over
such websites and are not responsible for the content of these websites. This privacy policy does not 
extend to your use of such websites. You are advised to read the privacy policy or statement of other 
websites prior to using them.
          </p>
        </section>

        <h2 className="text-xl font-bold mb-2">Changes of business ownership and control</h2>

<section className="mt-8">
  <p className="text-gray-700 mb-3">
  25. RSR Global Training Academy & Vimkes Technology may, from time to time, expand or reduce 
our business and this may involve the sale and/or the transfer of control of all or part of RSR Global 
Training Academy & Vimkes Technology. Data provided by Users will, where it is relevant to any part 
of our business so transferred, be transferred along with that part and the new owner or newly 
controlling party will, under the terms of this privacy policy, be permitted to use the Data for the 
purposes for which it was originally supplied to us.
  </p>
</section>

<section className="mt-8">
  <p className="text-gray-700 mb-3">
  26. We may also disclose Data to a prospective purchaser of our business or any part of it.
  </p>
</section>

<section className="mt-8">
  <p className="text-gray-700 mb-3">
  27. In the above instances, we will take steps with the aim of ensuring your privacy is protected.
  </p>
</section>

<h2 className="text-xl font-bold mb-2">General</h2>

<section className="mt-8">
  <p className="text-gray-700 mb-3">
  28. You may not transfer any of your rights under this privacy policy to any other person. We may 
transfer our rights under this privacy policy where we reasonably believe your rights will not be 
affected.
  </p>
</section>

<section className="mt-8">
  <p className="text-gray-700 mb-3">
  29. If any court or competent authority finds that any provision of this privacy policy (or part of any 
provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent 
required, be deemed to be deleted, and the validity and enforceability of the other provisions of this 
privacy policy will not be affected.
  </p>
</section>

<section className="mt-8">
  <p className="text-gray-700 mb-3">
  30. Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy 
will be deemed a waiver of that, or any other, right or remedy.
  </p>
</section>

<section className="mt-8">
  <p className="text-gray-700 mb-3">
  31. This Agreement will be governed by and interpreted according to the law of England and Wales. 
All disputes arising under the Agreement will be subject to the exclusive jurisdiction of the English 
and Welsh courts.
  </p>
</section>

<h2 className="text-xl font-bold mb-2">Changes to this privacy policy</h2>

<section className="mt-8">
  <p className="text-gray-700 mb-3">
  32. RSR Global Training Academy & Vimkes Technology reserves the right to change this privacy 
policy as we may deem necessary from time to time or as may be required by law. Any changes will 
be immediately posted on the Website, and you are deemed to have accepted the terms of the 
privacy policy on your first use of the Website following the alterations.
  </p>
  
  <p className="text-gray-700 mb-3">
  You may contact RSR Global Training Academy & Vimkes Technology by email at 
  training@rsrglobal.org with a copy to contact@rsrglobal.org & legal@rsrglobal.org
  </p>

  
  <p className="text-gray-700 mb-3">
  01 September 2024
  </p>

</section>

      </div>
    </main>
  );
}
