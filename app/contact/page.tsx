import Link from "next/link"
import { Section, SectionHeader } from "@/components/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail } from "lucide-react"
import { ContactForm } from "../sections/contact-form"

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Section>
        <SectionHeader eyebrow="Contact" title="Let’s power your next project" />
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>We typically respond within 1 business day.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach us directly via phone or email.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 text-emerald-600" />
                <div className="text-sm">
                  <div className="font-medium">Address</div>
                  <p className="text-muted-foreground">
                    Nerat Shopping Complex, Shop No. 1<br />
                    Latya Rayfield, Jos, Plateau State
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start gap-3">
                <Phone className="mt-1 size-5 text-sky-600" />
                <div className="text-sm">
                  <div className="font-medium">Telephone</div>
                  <Link href="tel:+2348109056624" className="text-sky-700 underline underline-offset-4">
                    +234 810 905 6624
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 size-5 text-yellow-600" />
                <div className="text-sm">
                  <div className="font-medium">Email</div>
                  <Link
                    href="mailto:pizylinksenergy@gmail.com"
                    className="text-yellow-700 underline underline-offset-4"
                  >
                    pizylinksenergy@gmail.com
                  </Link>
                </div>
              </div>
              <Separator />
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">ISO-aligned practices</Badge>
                <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100">Licensed installers</Badge>
                <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Warranty support</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </main>
  )
}
