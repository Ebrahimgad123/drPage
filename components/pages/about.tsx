"use client"
import { useI18n } from "@/lib/i18n-context"

export function AboutPage() {
  const { t, dir } = useI18n()

  return (
    <section id="about" className="py-20 bg-green-200" style={{ direction: dir }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-balance">{t("about.title")}</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Doctor Info */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-card border border-border rounded-lg p-8 animate-fade-in-left">
              <h3 className="text-3xl font-bold text-primary mb-4">{t("about.doctor")}</h3>
              <p className="text-lg text-foreground leading-relaxed mb-6">{t("about.bio")}</p>
            </div>

            {/* Qualifications */}
            <div className="bg-card border border-border rounded-lg p-8 animate-fade-in-left">
              <h4 className="text-2xl font-bold mb-6 text-primary">{t("about.qualifications")}</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-lg text-foreground">{t("about.bachelor")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-lg text-foreground">{t("about.master")}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 animate-fade-in-right h-fit">
            <h4 className="text-2xl font-bold mb-6 text-primary">{t("about.experience")}</h4>
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-5xl font-bold text-primary mb-2">15+</p>
                <p className="text-lg text-foreground">{t("about.years")}</p>
              </div>
              <p className="text-foreground leading-relaxed border-t border-primary/20 pt-6">
                {t("about.specialization")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
