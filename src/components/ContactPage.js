import React,{ Fragment } from 'react'
import ContactMap from './ContactMap';
import FooterBottom from './FooterBottom';
import FooterSection from './FooterSection';
import FormSection from './FormSection';
import HeaderSection from './HeaderSection';

function ContactPage() {
        return (
            <Fragment>
               <HeaderSection />
               <FormSection />
               <ContactMap />
               <FooterSection />
               <FooterBottom />
            </Fragment>
        );
}
 
export default ContactPage;