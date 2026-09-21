import Link from "next/link";

export default function ImprintPage() {
  return (
    <div className="mx-auto h-full max-w-3xl px-6 py-9">
      <h1 className="mb-6 font-semibold tracking-tight">
        Legal Notice / Imprint
      </h1>

      <section className="space-y-9 leading-relaxed">
        <div>
          <h2 className="mb-3 font-medium">Information according to § 5 DDG</h2>

          <p>
            Andrej Koller
            <br />
            Johann-Riederer-Straße 44
            <br />
            94036 Passau
            <br />
            Germany
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-medium">Contact</h2>

          <p>
            Phone: +49 177 6474169
            <br />
            E-Mail:{" "}
            <Link
              href={"mailto:contact@andrejkoller.com"}
              className="underline underline-offset-4"
            >
              contact@andrejkoller.com
            </Link>
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-medium">VAT</h2>

          <p>
            I am a small business owner within the meaning of § 19 UStG. No VAT
            is charged on my invoices in accordance with the small business
            regulation.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-medium">Dispute Resolution</h2>
          <p>
            I am neither obliged nor willing to participate in dispute
            resolution proceedings before a consumer arbitration board.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-medium">Limitation of Liability</h2>

          <div className="flex flex-col gap-3">
            <p>
              <strong>Liability for content:</strong> As a service provider, I
              am responsible for my own content on these pages in accordance
              with general laws. However, I am not obliged to monitor
              transmitted or stored third-party information or to investigate
              circumstances indicating illegal activity. Obligations to remove
              or block the use of information under general laws remain
              unaffected. Liability in this respect is only possible from the
              point in time at which a specific infringement becomes known. Upon
              becoming aware of any such legal infringements, I will remove the
              relevant content immediately.
            </p>

            <p>
              <strong>Liability for links:</strong> The navigation on this
              website links to other web presences that I also operate and
              control myself (e.g. developer portfolio, online shop). Should
              this website in future contain links to external third-party
              websites over whose content I have no influence, I cannot accept
              any liability for that content. The respective provider or
              operator of the linked pages is always responsible for their
              content. At the time of linking, no legal violations would be
              apparent. A permanent content review of linked pages is not
              reasonable without concrete evidence of a legal infringement. Upon
              becoming aware of any legal infringements, I will remove such
              links immediately.
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-3 font-medium">Copyright</h2>

          <div className="flex flex-col gap-3">
            <p>
              The content and works created by the site operator on these pages
              are subject to German copyright law. The reproduction, processing,
              distribution, or any form of exploitation beyond the limits of
              copyright law requires the prior written consent of the respective
              author or creator.
            </p>

            <p>
              Insofar as content on this website was not created by the site
              operator, the copyrights of third parties are respected.
            </p>
          </div>
        </div>
      </section>

      <p className="mt-9 text-(--color-muted)">Last updated: September 2026</p>
    </div>
  );
}
