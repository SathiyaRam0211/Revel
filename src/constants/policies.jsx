import { CONTACT } from "./constants";

const contactLine = `${CONTACT.email} or ${CONTACT.phone}`;

export const POLICIES = {
  privacy: {
    title: "Privacy Policy",
    updated: "22 October 2026",
    sections: [
      {
        heading: "Who we are",
        body: [
          `This website is run by ${CONTACT.name} ("Revel", "we", "us"). This policy explains what personal information we collect when you use this website or book a class, and how we use it.`,
        ],
      },
      {
        heading: "Information we collect",
        list: [
          "Details you give us when you book a trial or register: name, phone number, email address, age group of the student and the class you are interested in.",
          "Your mobile number, when you sign in with a one-time password (OTP).",
          "Basic usage data collected by Google Analytics, such as pages visited, device type and approximate location. This does not identify you personally.",
        ],
      },
      {
        heading: "How we use it",
        list: [
          "To confirm and manage your trial class, registration and schedule.",
          "To contact you about classes, timing changes, events and workshops.",
          "To process fees and refunds.",
          "To understand how the website is used and improve it.",
        ],
      },
      {
        heading: "Sharing your information",
        body: [
          "We do not sell or rent your personal information. We share it only with service providers that help us run Revel (for example our booking form, SMS/OTP and payment providers), and only as much as they need to provide that service, or when required by law.",
        ],
      },
      {
        heading: "Keeping it safe",
        body: [
          "We take reasonable steps to protect your information and keep it only as long as needed for the purposes above or as required by law.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          `You can ask us to see, correct or delete your personal information, or to stop sending you updates, by writing to ${contactLine}.`,
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "We may update this policy from time to time. The latest version will always be on this page with its updated date.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    updated: "22 October 2026",
    sections: [
      {
        heading: "About these terms",
        body: [
          `These terms apply to your use of this website and to classes, courses and workshops offered by ${CONTACT.name}. By booking a class or using this website you agree to them.`,
        ],
      },
      {
        heading: "Bookings and registration",
        list: [
          "Trial classes are subject to availability and are confirmed only after we contact you.",
          "Please give accurate details when booking. For students under 18, a parent or guardian must make the booking.",
          "Class schedules, timings and instructors may change. We will inform registered students of any change in advance where possible.",
        ],
      },
      {
        heading: "Fees and payment",
        list: [
          "Fees are as communicated at the time of registration and must be paid before the start of the class period.",
          "Classes missed by the student are not carried forward or refunded unless covered by our Cancellation Policy.",
        ],
      },
      {
        heading: "Conduct and safety",
        list: [
          "Students should arrive on time, wear suitable clothing and follow the instructor's directions.",
          "Dance is a physical activity. Please tell us about any medical condition or injury before joining. Students take part at their own risk.",
          "Revel may refuse or cancel participation for behaviour that is unsafe or disrespectful to others.",
        ],
      },
      {
        heading: "Photos and videos",
        body: [
          "We may take photos or videos during classes and events for our social media and promotions. Let us know in writing if you do not want the student to appear in them.",
        ],
      },
      {
        heading: "Website content",
        body: [
          "All content on this website, including text, logos, images and videos, belongs to Revel and may not be copied without permission.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of India, and any dispute is subject to the courts of Chennai, Tamil Nadu.",
        ],
      },
    ],
  },
  cancellation: {
    title: "Cancellation & Refund Policy",
    updated: "22 October 2026",
    sections: [
      {
        heading: "Trial classes",
        body: [
          "If you cannot attend a booked trial class, please let us know at least 24 hours in advance so we can reschedule it for you.",
        ],
      },
      {
        heading: "Cancelling a registration",
        list: [
          "Cancellation requests made at least 7 days before the start of the class period are eligible for a full refund.",
          "Requests made less than 7 days before the start are eligible for a 50% refund.",
          "No refund is given once the class period has started.",
          "Workshop and event fees are non-refundable, but you may transfer your seat to another person by informing us in advance.",
        ],
      },
      {
        heading: "Classes cancelled by Revel",
        body: [
          "If Revel cancels a class, we will offer a make-up class. If a make-up class is not possible, we will refund the fee for that class.",
        ],
      },
      {
        heading: "How refunds are paid",
        body: [
          "Approved refunds are paid to the original payment method within 7-10 working days.",
        ],
      },
      {
        heading: "How to cancel",
        body: [
          `Write to ${contactLine} with the student's name, the class and the reason for cancellation.`,
        ],
      },
    ],
  },
};
