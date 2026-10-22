// Policy text as provided by Revel (Terms 3.0, Privacy Policy, Cancellation and Refund Policy)
// Blocks: { p, label? } paragraph, { sub } sub-heading, { list: [string | { label, text }] }

const POLICY_CONTACT = [
  { label: "Entity Name:", text: "Revel Dance Academy" },
  { label: "Email:", text: "frontdeskrevel@gmail.com" },
  { label: "Phone / WhatsApp:", text: "+91 9384826894" },
  {
    label: "Address:",
    text: "1st Floor, 9a, 4th St, Venkateswara Nagar, Adyar, Chennai, Tamil Nadu 600020",
  },
];

export const POLICIES = {
  terms: {
    title: "Terms and Conditions",
    effective: "Apr 01, 2026",
    intro: [
      'Welcome to Revel Dance Academy ("the Company", "we", "us", "our"). These Terms and Conditions ("Terms") govern your enrollment, attendance, purchase of services, and participation in classes, courses, workshops, programs, training sessions, and events conducted by Revel Dance Academy (whether in-person at our studio/external venues or online via digital platforms).',
      "By enrolling, making a payment, accessing our website, or participating in any of our services, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.",
    ],
    sections: [
      {
        heading: "1. General Overview & Eligibility",
        blocks: [
          {
            label: "1.1",
            p: "Services provided by Revel Dance Academy include dance instruction, workshops, choreography sessions, performance programs, studio rentals, and related events.",
          },
          {
            label: "1.2",
            p: "Enrolling in certain batches or programs may be subject to minimum age requirements, prerequisites, or skill-level evaluations determined by the instructors.",
          },
        ],
      },
      {
        heading: "2. Payment Terms & Gateway Integrations",
        blocks: [
          {
            label: "2.1 Full Advance Payment:",
            p: "Full payment of applicable fees must be completed prior to participation in any class, batch, or workshop. Access to classes will be denied if payment is incomplete.",
          },
          {
            label: "2.2 Payment Processing:",
            p: "Payments made through our online channels are processed securely via third-party payment gateways, including Razorpay, Cardless credit platforms or direct banking channels. By initiating a transaction, you agree to comply with the terms and conditions of the respective payment service provider.",
          },
          {
            label: "2.3 Non-Refundable & Non-Transferable:",
            p: "All fees paid are strictly non-refundable under all circumstances except as explicitly defined in our Cancellation and Refund Policy. Fees cannot be transferred to another individual, carried forward to subsequent months/terms, or adjusted against other programs or batches.",
          },
          {
            label: "2.4 Discounts and Promotions:",
            p: "Promotional rates, early-bird pricing, or discounts are offered at the sole discretion of the Company and may be modified or withdrawn without prior notice.",
          },
        ],
      },
      {
        heading: "3. Liability, Health & Physical Safety",
        blocks: [
          {
            label: "3.1 Physical Activity Acknowledgment:",
            p: "Participation in dance classes involves strenuous physical activity. You acknowledge the inherent risks associated with physical exercise, including minor or severe personal injury, strain, or medical complications.",
          },
          {
            label: "3.2 Limitation of Liability:",
            p: "Revel Dance Academy, its owners, instructors, employees, and staff shall not be liable for any personal injury, illness, accident, or physical strain sustained before, during, or after classes, rehearsals, or events (conducted on-site, off-site, or online).",
          },
          {
            label: "3.3 Medical Clearance:",
            p: "Students participate at their own risk and are strongly advised to consult a qualified medical professional prior to starting any physical training program.",
          },
          {
            label: "3.4 Personal Belongings:",
            p: "The Company accepts no responsibility or liability for the loss, theft, or damage of personal belongings, valuables, or equipment brought onto studio premises or event venues.",
          },
        ],
      },
      {
        heading: "4. Code of Conduct & Studio Discipline",
        blocks: [
          {
            label: "4.1 Behavior Standard:",
            p: "Disrespectful, abusive, unsafe, or disruptive behavior toward instructors, staff, fellow students, or guests will not be tolerated. The Company reserves the right to terminate participation immediately without refund in case of misconduct.",
          },
          { label: "4.2 Studio Rules:", p: "" },
          {
            list: [
              "Guests, parents, or guardians are not allowed inside the teaching area during class without explicit authorization.",
              "Chewing gum, food, and non-water beverages are strictly prohibited on the dance floor.",
              "Students must store personal belongings in designated storage areas and maintain personal hygiene and space awareness.",
              "Misuse or damage of studio property will result in financial repair/replacement charges levied against the responsible individual.",
            ],
          },
        ],
      },
      {
        heading: "5. Attendance & Missed Classes",
        blocks: [
          {
            label: "5.1 Student Absence:",
            p: "The Company is under no obligation to compensate for missed classes, late arrivals, or absences resulting from personal circumstances, medical illness, travel, or scheduling conflicts.",
          },
          {
            label: "5.2 No Replacement Sessions:",
            p: "Missed or unused classes cannot be carried forward, refunded, or credited toward future billing cycles.",
          },
          {
            label: "5.3 Company Cancellations:",
            p: "If a class is cancelled or rescheduled by the Company due to operational needs, instructor unavailability, or unforeseen circumstances, a replacement/make-up session or credit may be provided at the Company's sole discretion.",
          },
        ],
      },
      {
        heading: "6. Intellectual Property & Media Rights",
        blocks: [
          {
            label: "6.1 Choreography Ownership:",
            p: "All routines, original choreography, training materials, concepts, and audio-visual instructional content created or taught by Revel Dance Academy remain the exclusive intellectual property of the Company.",
          },
          {
            label: "6.2 Usage Restrictions:",
            p: "Recording, teaching, distributing, performing commercially, or publishing any proprietary class material or choreography without prior written permission from the Company is strictly prohibited.",
          },
          {
            label: "6.3 Social Media & Collaborations:",
            p: "Posting class videos on social media platforms must adhere to studio tagging guidelines. Acceptance of joint collaboration requests on social media is at the sole discretion of the Company.",
          },
        ],
      },
      {
        heading: "7. CCTV Monitoring & Media Consent",
        blocks: [
          {
            label: "7.1 CCTV Surveillance:",
            p: "For security, safety, and operational monitoring, CCTV cameras are installed covering teaching, reception, and waiting areas. Recorded footage is securely stored and accessed primarily for security reviews or resolving formal concerns/complaints.",
          },
          {
            label: "7.2 Promotional Content:",
            p: "The Company regularly documents classes, workshops, and performances through photography and videography.",
          },
          {
            label: "7.3 Media License:",
            p: "By enrolling, students (or parents/guardians of minors) grant Revel Dance Academy a royalty-free, perpetual license to use captured photographs and video recordings for marketing, promotional campaigns, social media content, and website display without financial compensation.",
          },
          {
            label: "7.4 Opt-Out Request:",
            p: "Students who prefer not to be recorded must inform the administration in writing during registration. While reasonable efforts will be made to honor this request, complete exclusion from general group footage or wide-angle crowd shots cannot be guaranteed.",
          },
        ],
      },
      {
        heading: "8. Protection of Minors, Women, and Gender Minorities",
        blocks: [
          {
            label: "8.1 Zero Tolerance:",
            p: "Revel Dance Academy enforces a zero-tolerance policy against sexual harassment, abuse, exploitation, discrimination, or psychological harm.",
          },
          {
            label: "8.2 Code of Conduct:",
            p: "All staff, instructors, students, and visitors must adhere strictly to our internal Studio Policies for the Protection of Children, Women, and Gender Minorities. Any violation will lead to immediate service termination and legal action where applicable under local law.",
          },
        ],
      },
      {
        heading: "9. Modifications and Termination",
        blocks: [
          {
            label: "9.1",
            p: "The Company reserves the right to amend, update, or alter these Terms and Conditions at any time. Updated versions will be published on our website with the revised effective date.",
          },
          {
            label: "9.2",
            p: "Continued participation in our classes or use of our online portal constitutes binding acceptance of the updated Terms.",
          },
        ],
      },
      {
        heading: "10. Contact Information",
        blocks: [
          {
            p: "For questions or concerns regarding these Terms and Conditions, please contact us:",
          },
          { list: POLICY_CONTACT },
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    effective: "Apr 01, 2026",
    intro: [
      'Revel Dance Academy ("we", "us", "our") is committed to protecting the privacy, accuracy, and security of your personal data. This Privacy Policy describes how we collect, use, store, share, and safeguard your information when you visit our website, enroll in our classes, use our online portals, or interact with us through third-party services.',
    ],
    sections: [
      {
        heading: "1. Information We Collect",
        blocks: [
          {
            p: "We collect personal information necessary to deliver our services, process payments, ensure safety, and comply with operational requirements.",
          },
          { sub: "A. Information You Provide Directly:" },
          {
            list: [
              {
                label: "Contact Information:",
                text: "Name, email address, phone number, WhatsApp number, residential address.",
              },
              {
                label: "Student Details:",
                text: "Age, gender, emergency contact details, medical conditions/allergies/injuries disclosed during registration.",
              },
              {
                label: "Minor Details:",
                text: "Name, age, and parent/guardian contact details for students under 18 years of age.",
              },
              {
                label: "Media:",
                text: "Photos or video recordings captured during classes, workshops, rehearsals, or events.",
              },
            ],
          },
          { sub: "B. Payment and Financial Data:" },
          {
            p: "When you make online payments, your credit/debit card, UPI, bank account, or EMI credentials are collected and processed directly by our integrated PCI-DSS compliant payment gateways (Razorpay, Cardless EMI platforms, or bank partners). Revel Dance Academy does not store or save your full payment card details or sensitive banking credentials on our servers.",
          },
          { sub: "C. Technical & Automated Information:" },
          {
            list: [
              "IP address, browser type, device information, operating system, and website usage data collected through cookies and tracking tools to optimize user experience.",
            ],
          },
        ],
      },
      {
        heading: "2. How We Use Your Information",
        blocks: [
          {
            p: "We process your personal data for the following operational and lawful purposes:",
          },
          {
            list: [
              "Processing enrollments, managing batch rosters, and maintaining student records.",
              "Facilitating transactions, processing payments, and generating invoices/receipts via integrated payment gateways.",
              "Communicating important updates, class schedules, fee reminders, emergency announcements, and promotional offers via WhatsApp, SMS, or email.",
              "Ensuring studio safety, managing emergency situations, and upholding safety policies.",
              "Utilizing photos and video footage for marketing, website showcases, social media content, and promotional releases (per our Terms & Conditions).",
              "Complying with legal obligations, accounting standards, and statutory requirements.",
            ],
          },
        ],
      },
      {
        heading: "3. CCTV Monitoring and Security Data",
        blocks: [
          {
            label: "3.1 Surveillance Purpose:",
            p: "Closed-Circuit Television (CCTV) cameras operate across studio premises (teaching areas, reception, and waiting zones) for security, safety, and complaint resolution.",
          },
          {
            label: "3.2 Data Handling:",
            p: "CCTV footage is stored securely on protected access-controlled media and retained for a limited duration, after which it is overwritten, unless required for ongoing safety reviews or legal matters.",
          },
        ],
      },
      {
        heading: "4. Data Sharing and Disclosure",
        blocks: [
          {
            p: "We do not sell, rent, or trade your personal information to third parties for marketing purposes. We share data only with trusted entities as described below:",
          },
          {
            list: [
              {
                label: "Payment Service Providers:",
                text: "We share necessary transaction metadata with authorized payment processors to process payments, handle chargebacks, or resolve failed transactions.",
              },
              {
                label: "Service Software & Tools:",
                text: "Cloud software providers (e.g., student management systems, database tools, automated messaging tools) that assist us in administrative operations under strict confidentiality obligations.",
              },
              {
                label: "Legal Compliance:",
                text: "We may disclose personal data if required by law, court order, regulatory direction, or government request to protect rights, property, safety, or legal interests.",
              },
            ],
          },
        ],
      },
      {
        heading: "5. Data Security Measures",
        blocks: [
          {
            p: "We implement appropriate technical, physical, and administrative security standards to protect your personal information against unauthorized access, loss, misuse, alteration, or disclosure. Online transaction environments utilize SSL encryption technology through certified payment partners.",
          },
        ],
      },
      {
        heading: "6. Protection of Minors and Gender Minorities",
        blocks: [
          {
            p: "We maintain strict privacy safeguards regarding data collected from children under 18, women, and gender minorities, in alignment with our studio safety framework. Information relating to minors is maintained with heightened security and accessible only to authorized administrative personnel.",
          },
        ],
      },
      {
        heading: "7. Your Rights & Choices",
        blocks: [
          {
            list: [
              {
                label: "Access & Correction:",
                text: "You may review or request updates to your personal contact information by contacting studio administration.",
              },
              {
                label: "Opt-Out of Marketing:",
                text: "You can opt out of receiving marketing emails or promotional messages by using the unsubscribe option or messaging our admin team directly. (Essential service updates regarding paid batches will still be delivered).",
              },
              {
                label: "Media Opt-Out:",
                text: "To opt out of promotional photography/videography exposure, please submit a written request during registration.",
              },
            ],
          },
        ],
      },
      {
        heading: "8. Updates to This Privacy Policy",
        blocks: [
          {
            p: 'We reserve the right to revise this Privacy Policy periodically to reflect operational, legal, or regulatory updates. Any changes will be posted on this page with an updated "Effective Date".',
          },
        ],
      },
      {
        heading: "9. Contact Us & Grievance Redressal",
        blocks: [
          {
            p: "If you have questions, concerns, or grievances regarding this Privacy Policy or data processing practices, please reach out to us:",
          },
          {
            list: [
              POLICY_CONTACT[0],
              { label: "Grievance / Admin Contact:", text: "Studio Administrator" },
              ...POLICY_CONTACT.slice(1),
            ],
          },
        ],
      },
    ],
  },
  cancellation: {
    title: "Cancellation and Refund Policy",
    effective: "Apr 01, 2026",
    intro: [
      "This Cancellation and Refund Policy sets forth the rules governing cancellations, refunds, batch switches, and transaction processing for purchases made with Revel Dance Academy through our physical studio, website, payment gateways, including Razorpay, Cardless credit platforms or direct banking channels.",
    ],
    sections: [
      {
        heading: "1. General Refund Policy",
        blocks: [
          {
            label: "1.1 All Sales are Final:",
            p: "All payments made toward class enrollments, monthly subscriptions, workshops, courses, masterclasses, studio rentals, and event passes are non-refundable and non-transferable.",
          },
          {
            label: "1.2",
            p: "Once payment has been successfully processed, no full or partial refunds will be issued under any circumstances, including but not limited to:",
          },
          {
            list: [
              "Student absence or late arrival.",
              "Change of personal schedule, work commitments, or exams.",
              "Relocation, medical reasons, or personal emergencies.",
              "Dissatisfaction with class speed, music selection, or teaching style.",
            ],
          },
        ],
      },
      {
        heading: "2. Cancellations by the Student",
        blocks: [
          {
            label: "2.1 Voluntary Cancellation:",
            p: "If a student chooses to discontinue attending classes or cancels their enrollment prior to or during a batch cycle, no refund or store credit will be granted.",
          },
          {
            label: "2.2 Non-Transferability:",
            p: "Paid fees cannot be transferred to another individual, family member, friend, or third party.",
          },
          {
            label: "2.3 No Carry Forward:",
            p: "Unused sessions or missed classes cannot be carried forward to subsequent months, terms, or batches.",
          },
        ],
      },
      {
        heading: "3. Cancellations or Changes by Revel Dance Academy",
        blocks: [
          {
            label: "3.1 Class Rescheduling:",
            p: "Revel Dance Academy reserves the right to modify schedules, alter class timings, change instructors, or relocate venues due to operational requirements, emergencies, or unforeseen conditions.",
          },
          {
            label: "3.2 Class Cancellation:",
            p: "If a specific class or session is cancelled by the Company:",
          },
          {
            list: [
              "A make-up/replacement class will be scheduled at a suitable time determined by the Company.",
              "If a make-up class cannot be provided, the Company may issue a pro-rated credit note valid strictly for future courses offered by Revel Dance Academy. Cash/bank refunds will not be issued.",
            ],
          },
          {
            label: "3.3 Event/Workshop Cancellation:",
            p: "In the rare event that an entire workshop, event, or special masterclass is officially cancelled by the Company without any rescheduled date, a full refund of the registration fee will be processed to the original payment source within 5–7 working days.",
          },
        ],
      },
      {
        heading: "4. Payment Gateway & Transaction Issues",
        blocks: [
          {
            label: "4.1 Failed / Duplicate Transactions:",
            p: "In the case of a payment error, system glitch, or accidental double deduction where funds were debited from your bank account/card but the booking was not confirmed:",
          },
          {
            list: [
              "The excess amount will usually be automatically refunded by your payment provider/bank.",
              "If the refund is not processed automatically within 48 hours, please write to us at frontdeskrevel@gmail.com with the transaction reference ID, payment screenshot, and student details.",
            ],
          },
          {
            label: "4.2 Processing Timelines for Approved Adjustments:",
            p: "Where a refund or charge reversal is approved by Revel Dance Academy (e.g., technical duplicate payment), the credit will be refunded to the original mode of payment (Credit Card, Debit Card, Net Banking, UPI, or Razorpay wallet) within 5 to 7 business days from approval.",
          },
        ],
      },
      {
        heading: "5. Contact & Support",
        blocks: [
          {
            p: "For refund queries or transaction assistance, please reach out to our administration team:",
          },
          {
            list: [
              POLICY_CONTACT[1],
              POLICY_CONTACT[2],
              { label: "Studio Address:", text: POLICY_CONTACT[3].text },
            ],
          },
        ],
      },
    ],
  },
};
