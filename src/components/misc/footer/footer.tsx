import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import packageJson from '../../../../package.json';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { SmallText } from 'styles/typography';
import color from 'styles/color';
import { ButtonTheme } from '@shared/Button';
import Button from '@shared/Button';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: ${color.grey};
`;

const PrivacyPolicyHeader = styled(SmallText).attrs({
  tag: 'h3',
  center: true,
})``;

const Footer = (): ReactElement => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  return (
    <StyledFooter>
      <SmallText tiny center>
        A personal website built by and for Jesse MacDougall
        <br />V{packageJson.version}
        <br />
        Last Updated: {new Date(packageJson.releaseDate).toDateString()}
        <br />
        <Button
          theme={ButtonTheme.LINK}
          aria-haspopup
          onClick={() => setPrivacyModalOpen(true)}>
          Privacy Policy
        </Button>
      </SmallText>
      <Dialog
        aria-labelledby='privacy-modal-header'
        open={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}>
        <DialogTitle id='privacy-modal-header'>
          Jesse MacDougall Privacy Policy
        </DialogTitle>
        <DialogContent>
          <SmallText tag='div'>
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you visit
            https://www.jessemacdougall.ca (the “Site”).
            <PrivacyPolicyHeader>
              PERSONAL INFORMATION WE COLLECT
            </PrivacyPolicyHeader>
            When you visit the Site, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device. Additionally, as you browse the Site, we
            collect information about the individual web pages or products that
            you view, what websites or search terms referred you to the Site,
            and information about how you interact with the Site. We refer to
            this automatically-collected information as “Device Information.”
            <br />
            We collect Device Information using the following technologies:
            <br />
            - “Cookies” are data files that are placed on your device or
            computer and often include an anonymous unique identifier. For more
            information about cookies, and how to disable cookies, visit
            http://www.allaboutcookies.org.
            <br />- “tags” are electronic files used to record information about
            how you browse the Site.
            <PrivacyPolicyHeader>
              HOW DO WE USE YOUR PERSONAL INFORMATION?
            </PrivacyPolicyHeader>
            We use the Device Information that we collect to help us screen for
            potential risk and fraud (in particular, your IP address), and more
            generally to improve and optimize our Site (for example, by
            generating analytics about how our customers browse and interact
            with the Site, and to assess the success of our marketing and
            advertising campaigns).
            <PrivacyPolicyHeader>
              SHARING YOUR PERSONAL INFORMATION
            </PrivacyPolicyHeader>
            We share your Personal Information with third parties to help us use
            your Personal Information, as described above. We use Google
            Analytics to help us understand how our customers use the Site--you
            can read more about how Google uses your Personal Information here:
            https://www.google.com/intl/en/policies/privacy/. You can also
            opt-out of Google Analytics here:
            https://tools.google.com/dlpage/gaoptout.
            <br />
            Finally, we may also share your Personal Information to comply with
            applicable laws and regulations, to respond to a subpoena, search
            warrant or other lawful request for information we receive, or to
            otherwise protect our rights.
            <PrivacyPolicyHeader>DO NOT TRACK</PrivacyPolicyHeader>
            Please note that we do not alter our Site’s data collection and use
            practices when we see a Do Not Track signal from your browser.
            <PrivacyPolicyHeader>CHANGES</PrivacyPolicyHeader>
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.
            <PrivacyPolicyHeader>CONTACT US</PrivacyPolicyHeader>
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us by e-mail at jmacd229@uwo.ca.
          </SmallText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPrivacyModalOpen(false)}>Okay</Button>
        </DialogActions>
      </Dialog>
    </StyledFooter>
  );
};

export default Footer;
