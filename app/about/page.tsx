import type React from "react"
import { Section, SectionHeader } from "@/components/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Shield, Target, Sparkles, Lightbulb, HeartHandshake } from "lucide-react"
import Timeline, { type TimelineItem } from "@/components/timeline"

export default function AboutPage() {
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
    <main className="flex-1">
      {/* Overview */}
      <Section>
        <SectionHeader
          eyebrow="About Us"
          title="PIZY LINKS RENEWABLE ENERGY & ELECTRICAL INSTALLATIONS LTD."
          subtitle="At PIZY LINKS, we are committed to delivering high-quality services with expertise and dedication."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="size-5 text-emerald-600" /> Sustainable
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
                <Shield className="size-5 text-sky-600" /> Safe & Compliant
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
                <Target className="size-5 text-yellow-600" /> Results-Driven
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
      <Section className="bg-muted/30">
        <SectionHeader eyebrow="History" title="Our journey" subtitle="Milestones that shaped our expertise." />
        <div className="mx-auto mt-8 max-w-3xl">
          {/** Timeline items here */}
          <Timeline items={timeline} />
        </div>
      </Section>

      {/* Vision & Values */}
      <Section>
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
    </main>
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
