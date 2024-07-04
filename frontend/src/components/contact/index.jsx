import React from 'react';
import "./style.scss";

import Section from '../shared/Section'
import ContactInfo from './contact-info';
import Form from './form';

const Contact = () => {
  return (
    <Section id="contact" title="Any Questions">
        <div className="contact-content-wrapper">
            <ContactInfo/>
            <Form/>
        </div>
    </Section>
  )
}

export default Contact


// templateid : template_w73fx3t
// ServiceId : service_z3fekdl
// Publickey : zPZsuh3t9Qihrz_3C
