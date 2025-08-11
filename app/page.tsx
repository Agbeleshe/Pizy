import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Leaf,
  Sun,
  Bolt,
  CheckCircle2,
  Shield,
  Target,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Play,
} from "lucide-react"
import AnimatedBg from "@/components/animated-bg"
import { Section, SectionHeader } from "@/components/section"
import Gallery from "@/components/gallery"
import VideoCard from "@/components/video-card"
import { ContactForm } from "./sections/contact-form"
import Timeline, { type TimelineItem } from "@/components/timeline"

export default function Page() {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <main className="flex-1">
        {/* Hero */}
        <section id="hero" className="relative overflow-hidden">
          <AnimatedBg />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 md:px-6 lg:py-36">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs backdrop-blur">
                  <Sparkles className="size-3.5 text-emerald-600" />
                  {"Proficiency and where skill meets purpose."}
                </div>
                <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  {"PIZY LINKS RENEWABLE ENERGY & ELECTRICAL INSTALLATIONS LTD."}
                </h1>
                <p className="text-pretty text-muted-foreground md:text-lg">
                  {"PROFICIENCY AND WHERE SKILL MEETS PURPOSE."}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="#contact">
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                      Get a Free Quote
                    </Button>
                  </Link>
                  <Link href="#gallery">
                    <Button variant="outline" size="lg">
                      <Play className="mr-2 size-4" />
                      View Our Work
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                    <Leaf className="mr-1 size-3.5" />
                    Renewable Energy
                  </Badge>
                  <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                    <Sun className="mr-1 size-3.5" />
                    Solar Solutions
                  </Badge>
                  <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100">
                    <Bolt className="mr-1 size-3.5" />
                    Electrical Installations
                  </Badge>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border bg-background/60 p-2 shadow-xl backdrop-blur">
                  <Image
                    src="/solar-panel-team.png"
                    width={960}
                    height={640}
                    alt="Solar installation team at work"
                    className="aspect-[4/3] w-full rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <Section id="overview">
          <SectionHeader
            eyebrow="Company Overview"
            title="Excellence powered by purpose"
            subtitle="At PIZY LINKS RENEWABLE ENERGY & ELECTRICAL INSTALLATIONS LTD, we are committed to delivering high-quality services with expertise and dedication."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="size-5 text-emerald-600" />
                  Sustainable
                </CardTitle>
                <CardDescription>Solutions that respect people and the planet.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                We design and deploy energy systems that reduce emissions and optimize lifetime value.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="size-5 text-sky-600" />
                  Safe & Compliant
                </CardTitle>
                <CardDescription>World-class safety and regulatory standards.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Our processes meet strict safety protocols and certified installation practices.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="size-5 text-yellow-600" />
                  Results-Driven
                </CardTitle>
                <CardDescription>Performance you can measure and trust.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                We align every project to your goals with transparent timelines and reporting.
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* History */}
        <Section id="history" className="bg-muted/30">
          <SectionHeader eyebrow="History" title="Our journey" subtitle="Milestones that shaped our expertise." />
          {(() => {
            const timeline: TimelineItem[] = [
              {
                year: "2016",
                title: "Humble beginnings",
                content: "Founded with a mission to deliver reliable electrical installations and energy solutions.",
              },
              {
                year: "2019",
                title: "Renewable expansion",
                content: "Expanded into solar PV and hybrid systems, focusing on sustainable deployments.",
              },
              {
                year: "2022",
                title: "Scaled delivery",
                content: "Strengthened partnerships, standardized QA/QC, and scaled multi-site implementations.",
              },
              {
                year: "Today",
                title: "Trusted partner",
                content: "Serving businesses and communities with end-to-end renewable and electrical services.",
              },
            ]
            return (
              <div className="mx-auto mt-8 max-w-3xl">
                <Timeline items={timeline} />
              </div>
            )
          })()}
        </Section>

        {/* Vision & Values */}
        <Section id="vision">
          <SectionHeader eyebrow="Vision & Values" title="What guides us" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard icon={<Leaf className="size-5 text-emerald-600" />} title="Sustainability" />
            <ValueCard icon={<Shield className="size-5 text-sky-600" />} title="Safety" />
            <ValueCard icon={<Lightbulb className="size-5 text-yellow-600" />} title="Innovation" />
            <ValueCard icon={<HeartHandshake className="size-5 text-emerald-700" />} title="Integrity" />
            <ValueCard icon={<Target className="size-5 text-sky-700" />} title="Excellence" />
            <ValueCard icon={<Sparkles className="size-5 text-yellow-700" />} title="Customer Focus" />
          </div>
        </Section>

        {/* Quality & Safety */}
        <Section id="quality" className="bg-muted/30">
          <SectionHeader eyebrow="Quality & Safety" title="Built-in quality. Zero compromise." />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Quality Assurance</CardTitle>
                <CardDescription>Repeatable processes, documented standards.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <Bullet>Certified materials and vetted OEM partners</Bullet>
                  <Bullet>Standard Operating Procedures for each scope</Bullet>
                  <Bullet>Commissioning checklists and performance testing</Bullet>
                  <Bullet>Warranty-backed installations and support</Bullet>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Safety First</CardTitle>
                <CardDescription>People, property, and environment protected.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <Bullet>PPE and site-specific HSE briefings</Bullet>
                  <Bullet>Lock-out/Tag-out and live-work restrictions</Bullet>
                  <Bullet>Risk assessments and incident reporting</Bullet>
                  <Bullet>Compliance with regional and national codes</Bullet>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Services */}
        <Section id="services">
          <SectionHeader
            eyebrow="Services"
            title="How we can help"
            subtitle="End-to-end renewable energy and electrical solutions."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Sun className="size-5 text-yellow-600" />}
              title="Solar PV Design & Installation"
              desc="Residential, commercial, and community solar systems with monitoring."
            />
            <ServiceCard
              icon={<Bolt className="size-5 text-sky-600" />}
              title="Electrical Installations"
              desc="New builds, retrofits, panels, wiring, lighting, and compliance upgrades."
            />
            <ServiceCard
              icon={<Shield className="size-5 text-emerald-600" />}
              title="Backup & Hybrid Systems"
              desc="Inverters, batteries, and generator integrations for reliability."
            />
            <ServiceCard
              icon={<Target className="size-5 text-emerald-700" />}
              title="Energy Audits & Optimization"
              desc="Site surveys, load analysis, and ROI-driven recommendations."
            />
            <ServiceCard
              icon={<Lightbulb className="size-5 text-yellow-700" />}
              title="Maintenance & Support"
              desc="Preventive maintenance, troubleshooting, and rapid response."
            />
            <ServiceCard
              icon={<Sparkles className="size-5 text-sky-700" />}
              title="Procurement & Consulting"
              desc="Equipment sourcing and advisory for complex deployments."
            />
          </div>
        </Section>

        {/* What We Do Best */}
        <Section id="best" className="bg-muted/30">
          <SectionHeader eyebrow="What We Do Best" title="Delivering reliable, efficient power" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Highlight title="On-time delivery" />
            <Highlight title="Transparent pricing" />
            <Highlight title="Optimized system design" />
            <Highlight title="Excellent workmanship" />
            <Highlight title="Responsive support" />
            <Highlight title="Proactive safety culture" />
          </div>
        </Section>

        {/* Picture Gallery */}
        <Section id="gallery">
          <SectionHeader eyebrow="Picture Gallery" title="Our projects and team" />
          <Gallery
            images={[
              {
                src: "/placeholder-vczq6.png",
                alt: "Rooftop solar panel installation",
              },
              {
                src: "/placeholder-kxn47.png",
                alt: "Electrical panel setup by technicians",
              },
              {
                src: "/placeholder-nwkjw.png",
                alt: "Ground-mounted solar array in open field",
              },
              {
                src: "/team-safety-briefing.png",
                alt: "Team safety briefing on site",
              },
              {
                src: "/inverter-battery-installation.png",
                alt: "Inverter and battery backup installation",
              },
              {
                src: "/clean-energy-sunrise-solar-panels.png",
                alt: "Sunrise over clean energy solar panels",
              },
            ]}
          />
        </Section>

        {/* Video Section */}
        <Section id="video" className="bg-muted/30">
          <SectionHeader eyebrow="In Action" title="See how we work" />
          <VideoCard
            title="Company in action"
            description="A quick look at our installation process and safety practices."
            // A generic public demo video (Big Buck Bunny) used as placeholder.
            youtubeId="aqz-KE-bpKQ"
          />
        </Section>

        {/* Contact */}
        <Section id="contact">
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

      <footer className="border-t bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row md:text-left md:px-6">
          <p className="text-sm text-muted-foreground">
            {"© "}
            {new Date().getFullYear()}
            {" PIZY LINKS RENEWABLE ENERGY & ELECTRICAL INSTALLATIONS LTD. All rights reserved."}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Leaf className="size-4 text-emerald-600" />
            Powered by clean energy principles
          </div>
        </div>
      </footer>
    </div>
  )
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 size-4 text-emerald-600" />
      <span>{children}</span>
    </li>
  )
}

function ValueCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {title} is at the core of how we work and what we deliver.
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function Highlight({ title }: { title: string }) {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700">
          <Sparkles className="size-3.5" />
          Featured
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
    </Card>
  )
}
