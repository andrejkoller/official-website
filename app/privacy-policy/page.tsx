import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="mx-auto h-full max-w-3xl px-6 py-9">
      <h1 className="mb-6 font-semibold tracking-tight">Privacy Policy</h1>

      <section className="space-y-9 leading-relaxed">
        <div>
          <h2 className="mb-3 font-medium">1. Controller</h2>
          <p>
            The controller responsible for data processing on this website is:
          </p>
          <p className="mt-3">
            Andrej Koller
            <br />
            Johann-Riederer-Straße 44
            <br />
            94036 Passau
            <br />
            Germany
          </p>
          <p className="mt-3">
            E-Mail:{" "}
            <Link
              href="mailto:contact@andrejkoller.com"
              className="underline underline-offset-4"
            >
              contact@andrejkoller.com
            </Link>
          </p>
          <p className="mt-3">
            As a sole operator without staff processing personal data, I am not
            obliged to appoint a data protection officer.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-medium">2. Overview</h2>
          <p>
            This privacy policy informs you about the nature, scope and purpose
            of the processing of personal data when using this website. Personal
            data is any data that can be used to identify you personally.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-medium">3. Hosting</h2>
          <p>
            This website is hosted by Vercel Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, USA (“Vercel”). The personal data collected on
            this website is stored on Vercel’s servers. This may include IP
            addresses, contact requests, meta and communication data, website
            access and other data generated via a website.
          </p>
          <p className="mt-3">
            The hoster is used on the basis of Art. 6 para. 1 lit. f GDPR. I
            have a legitimate interest in the most reliable and secure
            presentation of my website. A data processing agreement pursuant to
            Art. 28 GDPR has been concluded with Vercel.
          </p>
          <p className="mt-3">
            As Vercel is based in the USA, data may be transferred to and
            processed in a third country. This transfer is based on the European
            Commission’s Standard Contractual Clauses (Art. 46 para. 2 lit. c
            GDPR), which Vercel has committed to as part of its data processing
            agreement.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-medium">4. Server Log Files</h2>
          <p>
            The provider of the pages automatically collects and stores
            information in so-called server log files, which your browser
            automatically transmits. These are:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Browser type and browser version</li>
            <li>Operating system used</li>
            <li>Referrer URL</li>
            <li>Host name of the accessing computer</li>
            <li>Time of the server request</li>
            <li>IP address</li>
          </ul>
          <p className="mt-3">
            This data is not merged with other data sources. The collection of
            this data is based on Art. 6 para. 1 lit. f GDPR. The website
            operator has a legitimate interest in the technically error-free
            presentation and optimisation of the website.
          </p>
          <p className="mt-3">
            Server log files are stored for a maximum of 7 days and are then
            automatically deleted.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-medium">5. Contact</h2>
          <p>
            If you contact me by e-mail, the data you provide (in particular
            your e-mail address and the content of your message) will be stored
            in order to process your enquiry.
          </p>
          <p className="mt-3">
            The processing is based on Art. 6 para. 1 lit. b GDPR if your
            request is related to the performance of a contract or
            pre-contractual measures. In all other cases, the processing is
            based on my legitimate interest in the effective processing of
            enquiries (Art. 6 para. 1 lit. f GDPR).
          </p>
          <p className="mt-3">
            The data will be deleted once the purpose of the storage no longer
            applies or you request deletion, unless statutory retention periods
            apply.
          </p>
          <p className="mt-3">
            My e-mail mailbox is provided by IONOS SE, Elgendorfer Straße 57,
            56410 Montabaur, Germany. As an EU-based processor, IONOS processes
            e-mails on my behalf on the basis of a data processing agreement
            pursuant to Art. 28 GDPR.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-medium">6. Cookies &amp; Local Storage</h2>
          <p>
            This website does not set any cookies. It only uses your browser’s
            local storage to remember your chosen colour theme (light/dark).
            This information is stored solely on your device, is not transmitted
            to the server, and is technically necessary for the requested
            functionality (Art. 6 para. 1 lit. f GDPR, § 25 para. 2 no. 2
            TTDSG).
          </p>
          <p className="mt-3">
            Currently, no analysis or marketing cookies or comparable tracking
            technologies are used.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-medium">7. Your Rights</h2>
          <p>You have the following rights under the GDPR:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Right of access (Art. 15 GDPR)</li>
            <li>Right to rectification (Art. 16 GDPR)</li>
            <li>Right to erasure (Art. 17 GDPR)</li>
            <li>Right to restriction of processing (Art. 18 GDPR)</li>
            <li>Right to data portability (Art. 20 GDPR)</li>
            <li>Right to object (Art. 21 GDPR)</li>
            <li>Right to withdraw consent (Art. 7 para. 3 GDPR)</li>
            <li>
              Right to lodge a complaint with a supervisory authority (Art. 77
              GDPR)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 font-medium">8. SSL / TLS Encryption</h2>
          <p>
            This site uses SSL / TLS encryption for security reasons and to
            protect the transmission of confidential content. You can recognise
            an encrypted connection by the change from “http://” to “https://”
            and by the lock symbol in your browser.
          </p>
        </div>
      </section>

      <p className="mt-9 text-(--color-muted)">Last updated: September 2026</p>
    </div>
  );
}
