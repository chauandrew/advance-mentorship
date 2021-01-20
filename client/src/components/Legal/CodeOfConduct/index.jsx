import { React } from 'react'
import { Container } from 'react-bootstrap'

const CodeOfConduct = () => {
    return (
        <Container className="full-screen text-theme-light mb-5">
            {/* Header */}
            <div className="text-center text-theme-yellow">
                <h1>Advance Mentorship Program</h1>
                <h2>Code of Conduct</h2>
            </div>
            <div className="text-theme-light">
                <i>Last modified: 1/13/2021</i><br />
                <p>
                    This Code of Conduct (this &quot;Code of Conduct&quot;) governs your application to and enrollment in the AMP Program. Your failure to abide by any terms of the Code of Conduct below may result in the termination of your enrollment in the AMP Program, at AMP’s sole discretion. Capitalized terms that are used but not defined in this Code of Conduct shall have the meaning ascribed to them in the Terms of Use.
                </p>
            </div>
            {/* Text here */}
            <h2 className="text-theme-tan mt-3">
                Application and Enrollment
            </h2>
            <ol>
                <li>AMP reserves the right to deny your application to enroll in the AMP Program for any reasons, including but not limited to: limited space in the AMP Program, unavailability of mentors, scheduling conflicts, and all other legally permissible reasons. AMP will inform you of our decision to accept or deny your application within a reasonable time period from the time of your application. All decisions denying an application are final.</li>
                <li>
                    Once AMP accepts your application, we require you to attend a mandatory virtual informational session (the &quot;Meet and Greet&quot;) to learn more about the AMP Program and to assign you a mentor. If you are unable to attend the Meet and Greet, please contact us and we will attempt to reschedule you for another session.</li>
            </ol>
            <h2 className="text-theme-tan mt-3">
                If You Are Under the Age of 18
            </h2>
            <p>
                If you are under the age of 18, you will need your parent’s (or legal guardian’s) written permission to enroll in the AMP Program. You will be asked to provide the name and contact information for your parent/ legal guardian during your application to the AMP program, and your parent/legal guardian will be asked to provide a signed permission and waiver to allow your enrollment in the AMP Program.
            </p>
            <h2 className="text-theme-tan mt-3">
                Use of Language and Images
            </h2>
            <p>
                You must not use or share vulgar, obscene, abusive or demeaning language, writing, pictures, signs or acts in written or oral communications, including but not limited to email, discussion boards, virtual meetings, on the Website, or in photographs, etc., to or with the mentors, volunteers, and other students of the AMP Program. You are prohibited from sharing content from or links to suggestive, lewd, or otherwise inappropriate websites.
            </p>
            <h2 className="text-theme-tan mt-3">
                Personal Respect
            </h2>
            <p>
                Personal respect is the foundation of learning and meaningful communication. Enrollees and mentors are expected to treat one another in the AMP Program in ways that convey respect and dignity. Language, comments, actions or images that show lack of respect will result in the termination of your enrollment to the AMP Program, at AMP’s sole discretion.
            </p>
            <h2 className="text-theme-tan mt-3">
                Zero-Tolerance Policy for Harassment, Intimidation, and Bullying
            </h2>
            <p>
                The AMP Program has a zero-tolerance policy for harassment, intimidation, and bullying. Harassment, including in the form of name-calling, taunting, gestures, intimidation, crude conduct or jokes, slurs or ridicules is strictly prohibited.
            </p>
            <h2 className="text-theme-tan mt-3">
                Virtual Meetings
            </h2>
            <p>
                All virtual meetings in the AMP Program will require you to have a secured and suitable computer device with virtual conferencing capability and suitable internet speed to participate. It is your sole responsibility to procure such device in order to participate in the virtual meetings hosted by the AMP Program.
            </p>
            <h2 className="text-theme-tan mt-3">
                No Academic Credit; No Guarantee of Internship or Job Placement
            </h2>
            <p>
                Your enrollment in the AMP Program does not and cannot substitute for academic credit at your academic institution. While the AMP Program offers training and practical tips on topics such as interview skills and interview workshops, etc., your enrollment to the AMP Program does not guarantee that you will be successful in your internship or job search.
            </p>
            <h2 className="text-theme-tan mt-3">
                Emergencies
            </h2>
            <p>
                In case of emergencies or health-related issues, please call your local emergency number, contact law enforcement, or go to your local emergency room. AMP is not a licensed healthcare or counseling program, and therefore expressly disclaims any responsibility for emergencies or health-related issues involving the enrollees in the AMP Program.
            </p>
        </Container>
    )
}

export default CodeOfConduct;