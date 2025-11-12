"use client"

import { useI18n } from "@/lib/i18n-context"

export function ReviewsPage() {
  const { t, dir } = useI18n()

  const reviews = [
    {
      name: "محمد علي",
      name_en: "Mohamed Ali",
      rating: 5,
      text: "تجربة رائعة وخدمة متميزة، الدكتور أحمد محترف جداً",
      text_en: "Excellent experience and outstanding service, Dr. Ahmed is very professional",
      initials: "MA",
    },
    {
      name: "فاطمة محمود",
      name_en: "Fatima Mahmoud",
      rating: 5,
      text: "جودة عالية جداً والدكتور متعاون وودود",
      text_en: "Very high quality and the doctor is cooperative and friendly",
      initials: "FM",
    },
    {
      name: "أحمد حسن",
      name_en: "Ahmed Hassan",
      rating: 5,
      text: "أفضل عيادة أسنان زرتها، نظيفة وحديثة وآمنة",
      text_en: "Best dental clinic I have visited, clean, modern and safe",
      initials: "AH",
    },
    {
      name: "ليلى إبراهيم",
      name_en: "Layla Ibrahim",
      rating: 5,
      text: "النتائج رائعة والفريق محترف جداً",
      text_en: "Amazing results and very professional team",
      initials: "LI",
    },
  ]

  return (
    <section id="reviews" className="py-20 bg-green-200" style={{ direction: dir }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-balance">{t("reviews.title")}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-8 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-lg">
                  {review.initials}
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">{dir === "rtl" ? review.name : review.name_en}</p>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-primary text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">{dir === "rtl" ? review.text : review.text_en}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
