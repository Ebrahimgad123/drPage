"use client";

import { useI18n } from "@/lib/i18n-context";

export function ContactPage() {
  const { t, dir } = useI18n();

  return (
    <section
      id="contact"
      className="py-20 bg-green-200"
      style={{ direction: dir }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Dr. Ibrahim gad Dental Clinic",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Horreya Street",
              addressLocality: "Mansoura",
              addressCountry: "EG",
            },
            telephone: "+20 100 100 1001",
            url: "https://drahmedfady.com",
            openingHours: "Mo,Tu,We,Th,Fr 09:00-21:00 Sa,Su 10:00-20:00",
          }),
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-balance">
          {t("contact.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-card border border-border rounded-lg p-8 animate-fade-in-left">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t("contact.address")}
              </h3>
              <address className="text-lg text-foreground leading-relaxed not-italic">
                المنصورة، شارع الحرية
                <br />
                Mansoura, Horreya Street
              </address>
            </div>

            {/* WhatsApp */}
            <div className="bg-card border border-border rounded-lg p-8 animate-fade-in-left">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t("contact.phone")}
              </h3>
              <a
                href="https://wa.me/2001001001001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-primary font-bold hover:underline inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.18l-.341.197-3.52-.923.941 3.432.203.323a9.79 9.79 0 00-1.55 5.244c0 5.409 4.4 9.81 9.81 9.81a9.833 9.833 0 007.01-2.898 9.782 9.782 0 002.8-6.912c0-5.409-4.4-9.81-9.81-9.81z" />
                </svg>
                +20 12345678
              </a>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 animate-fade-in-left">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {t("contact.hours")}
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-foreground">
                  <span className="font-bold">{t("contact.weekdays")}</span>
                </p>
                <p className="text-lg text-foreground">
                  <span className="font-bold">{t("contact.weekend")}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card border border-border rounded-lg overflow-hidden animate-fade-in-right h-full min-h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.123456!2d31.3565!3d31.0462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79e64a6bd10c3%3A0x19475f092e88a44!2z2KzZiNis2LHYjCDZhdix2YPYsiDYt9mE2K7Yp9iMINmF2K3Yp9mB2LjYqSDYp9mE2K_ZgtmH2YTZitip!5e0!3m2!1sar!2seg!4v1762965380590!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Dental Clinic Location"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
