"use client"
import type React from "react"
import { useI18n } from "@/lib/i18n-context"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function BookingPage() {
  const { t, dir } = useI18n()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    service: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.phone || !formData.date || !formData.service) {
      alert(t("booking.error"))
      return
    }

    // Send to WhatsApp
    const message = `${t("booking.name")}: ${formData.name}\n${t("booking.phone")}: ${formData.phone}\n${t("booking.date")}: ${formData.date}\n${t("booking.type")}: ${formData.service}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/2001032243303?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")

    setSubmitted(true)
    setFormData({ name: "", phone: "", date: "", service: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="booking" className="py-20 bg-green-200 from-primary/5 to-background" style={{ direction: dir }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-balance">{t("booking.title")}</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-lg p-8 space-y-6 animate-fade-in-up"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-lg font-bold text-foreground mb-3">
              {t("booking.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder={t("booking.name")}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-lg font-bold text-foreground mb-3">
              {t("booking.phone")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="0123456789"
            />
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-lg font-bold text-foreground mb-3">
              {t("booking.date")}
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Service Type */}
          <div>
            <label htmlFor="service" className="block text-lg font-bold text-foreground mb-3">
              {t("booking.type")}
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">{t("booking.select_service")}</option>
              <option value="whitening">{t("services.whitening")}</option>
              <option value="implants">{t("services.implants")}</option>
              <option value="orthodontics">{t("services.orthodontics")}</option>
              <option value="cleaning">{t("services.cleaning")}</option>
            </select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 text-lg font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            {t("booking.submit")}
          </Button>

          {/* Success Message */}
          {submitted && (
            <div className="p-4 bg-primary/20 border border-primary/50 rounded-lg text-primary font-bold text-center animate-fade-in-up">
              {t("booking.success")}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
