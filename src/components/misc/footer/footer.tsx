import React, { ReactElement } from 'react';
import './footer.scss';
import packageJson from '../../../../package.json';
import Swal from 'sweetalert2';

const Footer = (): ReactElement => {
  return (
    <footer className='p-3 d-flex flex-column align-items-center'>
      <div className='light-text small-text'>
        A personal website built by and for Jesse MacDougall
      </div>
      <div className='light-text text-center tiny-text'>
        V{packageJson.version}
        <br />
        Last Updated: {new Date(packageJson.releaseDate).toDateString()}
      </div>
      <button
        className='btn light-text tiny-text p-0'
        onClick={() =>
          Swal.fire({
            title: 'Privacy Policy',
            html: privacy,
            icon: 'info',
            width: '64rem',
            customClass: {
              popup: 'privacy-modal',
              title: 'privacy-title',
              content: 'privacy-content',
              confirmButton: 'privacy-btn',
              icon: 'privacy-icon',
            },
          })
        }>
        <u>Privacy Policy</u>
      </button>
    </footer>
  );
};

export default Footer;

const privacy = (`
<p>Jesse MacDougall Privacy Policy</p>
    <p>
      This Privacy Policy describes how your personal information is collected,
      used, and shared when you visit https://www.jessemacdougall.ca (the
      “Site”).
    </p>
    <p>PERSONAL INFORMATION WE COLLECT</p>
    <p>
      When you visit the Site, we automatically collect certain information
      about your device, including information about your web browser, IP
      address, time zone, and some of the cookies that are installed on your
      device. Additionally, as you browse the Site, we collect information about
      the individual web pages or products that you view, what websites or
      search terms referred you to the Site, and information about how you
      interact with the Site. We refer to this automatically-collected
      information as “Device Information.”
    </p>
    <p>We collect Device Information using the following technologies:</p>
    <p>
      - “Cookies” are data files that are placed on your device or computer and
      often include an anonymous unique identifier. For more information about
      cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
    </p>
    <p>
      - “tags” are electronic files used to record information about how you
      browse the Site.
    </p>
    <p>HOW DO WE USE YOUR PERSONAL INFORMATION?</p>
    <p>
      We use the Device Information that we collect to help us screen for
      potential risk and fraud (in particular, your IP address), and more
      generally to improve and optimize our Site (for example, by generating
      analytics about how our customers browse and interact with the Site, and
      to assess the success of our marketing and advertising campaigns).
    </p>
    <p>SHARING YOUR PERSONAL INFORMATION</p>
    <p>
      We share your Personal Information with third parties to help us use your
      Personal Information, as described above. We use Google Analytics to help
      us understand how our customers use the Site--you can read more about how
      Google uses your Personal Information here:
      https://www.google.com/intl/en/policies/privacy/. You can also opt-out of
      Google Analytics here: https://tools.google.com/dlpage/gaoptout.
    </p>
    <p>
      Finally, we may also share your Personal Information to comply with
      applicable laws and regulations, to respond to a subpoena, search warrant
      or other lawful request for information we receive, or to otherwise
      protect our rights.
    </p>
    <p>DO NOT TRACK</p>
    <p>
      Please note that we do not alter our Site’s data collection and use
      practices when we see a Do Not Track signal from your browser.
    </p>
    <p>CHANGES</p>
    <p>
      We may update this privacy policy from time to time in order to reflect,
      for example, changes to our practices or for other operational, legal or
      regulatory reasons.
    </p>
    <p>CONTACT US</p>
    <p>
      For more information about our privacy practices, if you have questions,
      or if you would like to make a complaint, please contact us by e-mail at
      jessemacdougall44@gmail.com.
    </p>`
);