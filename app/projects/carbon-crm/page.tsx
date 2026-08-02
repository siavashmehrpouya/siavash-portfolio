import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import Section from "@/components/case-study/Section";
import StatCard from "@/components/case-study/StatCard";
import TechStack from "@/components/case-study/TechStack";
import Timeline from "@/components/case-study/Timeline";
import ResultsGrid from "@/components/case-study/ResultsGrid";
import NextProject from "@/components/case-study/NextProject";
import RoleCards from "@/components/case-study/RoleCards";
import DecisionCards from "@/components/case-study/DecisionCards";
import Lessons from "@/components/case-study/Lessons";

export default function CarbonCRMPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-zinc-50 text-zinc-900 pt-24">
        <CaseStudyHero
          eyebrow="Case Study"
          title="Carbon CRM Transformation"
          description="Leading CRM implementation and enterprise software delivery by aligning engineering, QA, product, and business teams to deliver high-impact digital initiatives."
          tags={[
            "Technical Project Manager",
            "CRM",
            "Agile",
            "Jira",
            "Azure DevOps",
          ]}
        />

        <section className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatCard title="Role" value="Technical Project Manager" />
            <StatCard title="Industry" value="Enterprise Software" />
            <StatCard title="Methodology" value="Agile Scrum" />
            <StatCard title="Focus" value="CRM Delivery" />
          </div>
        </section>

        <Section title="Overview">
          <p>
            Carbon was modernizing its CRM platform to improve internal
            workflows, increase visibility across teams, and support future
            digital initiatives. As the Technical Project Manager, I worked
            closely with engineering, QA, product, and business stakeholders
            to coordinate delivery, remove blockers, and keep projects aligned
            with business objectives.
          </p>
        </Section>

        <Section title="My Role">
          <RoleCards
            items={[
              {
                title: "Project Planning",
                description:
                  "Defined project scope, coordinated delivery plans, prioritized work with stakeholders, and kept execution aligned with business objectives.",
              },
              {
                title: "Agile Delivery",
                description:
                  "Facilitated sprint planning, tracked progress, removed blockers, and supported engineering and QA throughout delivery.",
              },
              {
                title: "Stakeholder Management",
                description:
                  "Maintained clear communication between engineering, product, business, and leadership teams to ensure transparency.",
              },
              {
                title: "Release Coordination",
                description:
                  "Supported release planning, risk management, dependency tracking, and successful production deployments.",
              },
            ]}
          />
        </Section>

        <Section title="Key Decisions">
          <DecisionCards
            items={[
              {
                title: "Prioritized Business Value",
                description:
                  "Worked with stakeholders to continuously prioritize features that delivered the highest value while balancing technical constraints.",
              },
              {
                title: "Removed Delivery Blockers",
                description:
                  "Identified dependencies early, coordinated across teams, and resolved issues before they affected sprint commitments.",
              },
              {
                title: "Improved Team Alignment",
                description:
                  "Established consistent communication across engineering, QA, product, and business teams to reduce ambiguity.",
              },
              {
                title: "Managed Release Risks",
                description:
                  "Monitored delivery risks throughout the project lifecycle and coordinated mitigation plans before production releases.",
              },
            ]}
          />
        </Section>

        <Section title="Technology Stack">
          <TechStack
            items={[
              "Jira",
              "Azure DevOps",
              "Agile Scrum",
              "CRM",
              "Confluence",
              "Git",
              "Cross-functional Teams",
              "Stakeholder Management",
            ]}
          />
        </Section>

        <Section title="Business Challenge">
          <p>
            Multiple stakeholders, evolving business priorities, and ongoing
            product enhancements required structured planning and continuous
            communication. My responsibility was to maintain alignment across
            engineering, QA, product, and business teams while ensuring
            delivery remained predictable and transparent.
          </p>
        </Section>

        <Section title="Project Timeline">
          <Timeline
            items={[
              {
                title: "Discovery & Planning",
                description:
                  "Worked with stakeholders to understand business objectives, define priorities, and build an actionable delivery roadmap.",
              },
              {
                title: "Sprint Execution",
                description:
                  "Coordinated engineering, QA, and product teams through Agile ceremonies while tracking progress and removing blockers.",
              },
              {
                title: "Delivery & Release",
                description:
                  "Managed release readiness, stakeholder communication, and successful deployment of CRM improvements.",
              },
              {
                title: "Continuous Improvement",
                description:
                  "Collected feedback, refined workflows, and supported future iterations to improve delivery efficiency.",
              },
            ]}
          />
        </Section>

        <Section title="Results">
          <ResultsGrid
            items={[
              {
                title: "Better Visibility",
                description:
                  "Created greater transparency across engineering, QA, product, and business stakeholders throughout the project lifecycle.",
              },
              {
                title: "Predictable Delivery",
                description:
                  "Improved sprint planning, prioritization, and release coordination through structured Agile practices.",
              },
              {
                title: "Cross-functional Alignment",
                description:
                  "Strengthened collaboration between technical and business teams, enabling faster decision-making and smoother delivery.",
              },
            ]}
          />
        </Section>

        <Section title="Lessons Learned">
          <Lessons
            items={[
              {
                title: "Communication Drives Delivery",
                description:
                  "Successful software projects depend as much on clear communication as on technical execution. Maintaining alignment across teams reduced uncertainty and improved delivery confidence.",
              },
              {
                title: "Transparency Builds Trust",
                description:
                  "Providing consistent project visibility enabled stakeholders to make faster decisions and helped the team identify risks before they became blockers.",
              },
              {
                title: "People First",
                description:
                  "Processes and tools support delivery, but strong collaboration, ownership, and shared goals are what ultimately make projects successful.",
              },
            ]}
          />
        </Section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <NextProject
            href="/projects/enterprise-software"
            title="Enterprise Software Delivery"
            description="Explore how enterprise software initiatives were delivered across engineering, QA, product, and business teams."
          />
        </section>
      </main>

      <Footer />
    </>
  );
}