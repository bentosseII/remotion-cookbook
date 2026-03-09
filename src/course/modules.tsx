// All 17 module videos for "Build Your AI Agent" course
// Each ~30s (900 frames @ 30fps), 4 scenes each

import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import {
  TitleCard,
  ConceptCard,
  PrimitivesDiagram,
  CodeBlock,
  FlowDiagram,
  TakeawayCard,
  CenterLayout,
  SplitLayout,
  SectionTitle,
  FadeSlideIn,
  StatCounter,
  COLORS,
} from "./shared";

// ─── Helpers ──────────────────────────────────────────
const S = 30; // frames per second shorthand
const scene = (from: number, dur: number) => ({ from: from * S, durationInFrames: dur * S });

// ═══════════════════════════════════════════════════════
// MODULE 1: What You're Actually Building
// ═══════════════════════════════════════════════════════
export const Module01: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={1}
        level="Foundation"
        title="What You're Actually Building"
        subtitle="From chatbot to personal AI agent"
      />
    </Sequence>
    <Sequence {...scene(7, 8)}>
      <CenterLayout gap={40}>
        <SectionTitle text="Most people use AI like this" />
        <FlowDiagram
          steps={[
            { icon: "❓", label: "Ask question" },
            { icon: "💬", label: "Get answer" },
            { icon: "👋", label: "Close tab" },
          ]}
        />
        <FadeSlideIn delay={50}>
          <div style={{ color: COLORS.muted, fontSize: 28, marginTop: 20 }}>
            That's a search engine with extra steps.
          </div>
        </FadeSlideIn>
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(15, 8)}>
      <CenterLayout gap={28}>
        <SectionTitle text="Every agent has 5 primitives" />
        <PrimitivesDiagram />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text="You're not learning a tool. You're building a system."
        subtext="Same 5 primitives. Any platform. Let's build."
      />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 2: Identity
// ═══════════════════════════════════════════════════════
export const Module02: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={2}
        level="Foundation"
        title="Identity"
        subtitle="Teaching your agent who you are"
      />
    </Sequence>
    <Sequence {...scene(7, 8)}>
      <SplitLayout
        left={
          <div>
            <FadeSlideIn>
              <div style={{ color: COLORS.accent, fontSize: 22, fontWeight: 700, marginBottom: 12 }}>USER.md</div>
            </FadeSlideIn>
            <CodeBlock
              lines={[
                "# About Me",
                "Name: Ben Tossell",
                "Role: Newsletter + Fund",
                "Tone: Direct, casual",
                'Sign-off: "Best, Ben"',
                "Always flag: investor emails",
              ]}
            />
          </div>
        }
        right={
          <div>
            <FadeSlideIn delay={15}>
              <div style={{ color: COLORS.accent, fontSize: 22, fontWeight: 700, marginBottom: 12 }}>SOUL.md</div>
            </FadeSlideIn>
            <CodeBlock
              lines={[
                "# Agent Identity",
                "Name: Bites",
                "Role: Personal COO",
                "Style: Concise, opinionated",
                "Rule: Never send without approval",
                "Rule: Have opinions",
              ]}
            />
          </div>
        }
      />
    </Sequence>
    <Sequence {...scene(15, 8)}>
      <CenterLayout>
        <SectionTitle text="Same model. Different context." />
        <FlowDiagram
          steps={[
            { icon: "🤖", label: "Generic AI" },
            { icon: "📄", label: "+ Your files" },
            { icon: "🧠", label: "YOUR agent" },
          ]}
        />
        <FadeSlideIn delay={45}>
          <div style={{ color: COLORS.muted, fontSize: 26, marginTop: 24 }}>
            Context is the only difference between useful and useless.
          </div>
        </FadeSlideIn>
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text="Two files. That's it. Your agent's entire personality lives in USER.md and SOUL.md."
        subtext="Primitive unlocked: 🪪 Identity"
      />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 3: Memory
// ═══════════════════════════════════════════════════════
export const Module03: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={3}
        level="Foundation"
        title="Memory"
        subtitle="Making your agent remember"
      />
    </Sequence>
    <Sequence {...scene(7, 8)}>
      <CenterLayout gap={24}>
        <SectionTitle text="Not a database. Just files." />
        <CodeBlock
          title="~/my-agent/"
          lines={[
            "├── USER.md",
            "├── SOUL.md",
            "├── TODO.md",
            "├── MEMORY.md",
            "└── memory/",
            "    ├── 2026-02-06.md  ← today",
            "    ├── 2026-02-05.md  ← yesterday",
            "    └── INDEX.md       ← key facts",
          ]}
        />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(15, 8)}>
      <CenterLayout gap={20}>
        <SectionTitle text="Why text files beat everything" />
        <ConceptCard icon="👁️" title="Transparent" body="You can read exactly what your agent remembers" index={0} />
        <ConceptCard icon="✏️" title="Editable" body="Wrong memory? Delete the line." index={1} />
        <ConceptCard icon="🔍" title="Searchable" body="Cmd+F beats any AI memory feature" index={2} />
        <ConceptCard icon="📦" title="Portable" body="Switch tools anytime. Take your files." index={3} />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text="Daily logs are the most powerful pattern in this course. Your agent reads today + yesterday. Instant context."
        subtext="Primitive unlocked: 🧠 Memory"
      />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 4: Email (First Real Job)
// ═══════════════════════════════════════════════════════
export const Module04: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={4}
        level="Foundation"
        title="Your Agent's First Real Job"
        subtitle="Email triage that actually works"
      />
    </Sequence>
    <Sequence {...scene(7, 8)}>
      <CenterLayout gap={20}>
        <SectionTitle text="Not prompts. A system." />
        <CodeBlock
          title="EMAIL_RULES.md"
          lines={[
            "# Categories",
            "Respond — needs my personal reply",
            "Delegate — forward to someone",
            "FYI — no action needed",
            "Archive — noise",
            "",
            "# VIPs: always flag",
            "# Cold pitches: archive",
          ]}
        />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(15, 8)}>
      <CenterLayout gap={24}>
        <SectionTitle text="The Morning Briefing" />
        <FlowDiagram
          steps={[
            { icon: "📧", label: "Inbox" },
            { icon: "📋", label: "Rules" },
            { icon: "✅", label: "Triaged" },
            { icon: "☕", label: "Briefing" },
          ]}
        />
        <FadeSlideIn delay={60}>
          <div style={{ color: COLORS.muted, fontSize: 24, marginTop: 16 }}>
            Email triaged before you finish your coffee.
          </div>
        </FadeSlideIn>
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text="The prompt is almost irrelevant. The context does the work."
        subtext="Your agent has its first job."
      />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 5: Meeting Prep
// ═══════════════════════════════════════════════════════
export const Module05: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={5}
        level="Foundation"
        title="Meeting Prep & Calendar"
        subtitle="Never walk in blind again"
      />
    </Sequence>
    <Sequence {...scene(7, 9)}>
      <CenterLayout gap={20}>
        <SectionTitle text="Before → During → After" />
        <ConceptCard icon="📋" title="Pre-Brief" body="Who, last context, agenda, what you want out of it" index={0} />
        <ConceptCard icon="📝" title="Capture" body="Dump notes or transcript → agent logs it" index={1} />
        <ConceptCard icon="🔄" title="Follow-Up" body="Updates MEETINGS.md, adds TODOs, preps next time" index={2} />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(16, 7)}>
      <CenterLayout>
        <FadeSlideIn>
          <div style={{ color: COLORS.muted, fontSize: 26, textAlign: "center" }}>
            "You have a meeting with Sarah tomorrow.
          </div>
        </FadeSlideIn>
        <FadeSlideIn delay={20}>
          <div style={{ color: COLORS.text, fontSize: 32, fontWeight: 700, textAlign: "center" }}>
            You still haven't sent her the Q1 numbers."
          </div>
        </FadeSlideIn>
        <FadeSlideIn delay={40}>
          <div style={{ color: COLORS.accent, fontSize: 24, marginTop: 20 }}>
            That's not magic. That's files + context + a good model.
          </div>
        </FadeSlideIn>
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text="Your agent cross-references calendar + memory + tasks. You just show up prepared."
      />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 6: Decision-Making
// ═══════════════════════════════════════════════════════
export const Module06: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={6}
        level="Foundation"
        title="Thinking Partner"
        subtitle="Decisions, reviews, and rubber ducks"
      />
    </Sequence>
    <Sequence {...scene(7, 8)}>
      <CenterLayout gap={20}>
        <SectionTitle text="Three thinking modes" />
        <ConceptCard icon="⚖️" title="Decision Framework" body='"What am I not seeing?" — forces the agent past your framing' index={0} />
        <ConceptCard icon="💀" title="Pre-Mortem" body='"Imagine this failed. What went wrong?" — surfaces risks you avoid' index={1} />
        <ConceptCard icon="🦆" title="Rubber Duck" body='"Just listen and push back." — you talk, it asks the hard questions' index={2} />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(15, 8)}>
      <CenterLayout gap={24}>
        <SectionTitle text="The Weekly Review" />
        <CodeBlock
          lines={[
            "Every Sunday at 6pm:",
            "1. What did I accomplish?",
            "2. What didn't get done? Why?",
            "3. What patterns do I notice?",
            "4. Next week's priorities?",
            "5. What am I avoiding?",
          ]}
        />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text="Tools change. The ability to think clearly with an AI partner is a permanent skill."
        subtext="Level 1 complete. Your agent has identity, memory, and real jobs."
      />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 7: Architecture
// ═══════════════════════════════════════════════════════
export const Module07: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={7}
        level="Builder"
        title="From Chatbot to Agent"
        subtitle="The architecture that makes it real"
      />
    </Sequence>
    <Sequence {...scene(7, 8)}>
      <CenterLayout gap={16}>
        <SectionTitle text="A chatbot needs you to open a tab" />
        <FadeSlideIn delay={15}>
          <div style={{ color: COLORS.muted, fontSize: 28, marginBottom: 20, textAlign: "center" }}>
            An agent needs these:
          </div>
        </FadeSlideIn>
        <PrimitivesDiagram />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(15, 8)}>
      <CenterLayout gap={16}>
        <SectionTitle text="The flow" />
        <FlowDiagram
          steps={[
            { icon: "📱", label: "You\n(phone)" },
            { icon: "💬", label: "Telegram" },
            { icon: "🖥️", label: "Gateway\n(your machine)" },
            { icon: "🤖", label: "Agent\n(Claude/GPT)" },
            { icon: "📂", label: "Files &\nTools" },
          ]}
        />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text="Text your agent from your phone. It runs on your computer. It reads files, writes code, and responds."
        subtext="Welcome to Level 2."
      />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 8: Setup (OpenClaw)
// ═══════════════════════════════════════════════════════
export const Module08: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={8}
        level="Builder"
        title="Setting Up Your Agent"
        subtitle="From zero to running in 10 minutes"
      />
    </Sequence>
    <Sequence {...scene(7, 8)}>
      <CenterLayout gap={24}>
        <SectionTitle text="Three commands" />
        <CodeBlock
          lines={[
            "$ npm install -g openclaw",
            "",
            "$ openclaw onboard",
            "  → Choose model (Opus 4.6 / Sonnet 4)",
            "  → Paste API key",
            "  → Connect Telegram via @BotFather",
            "",
            "$ openclaw start",
          ]}
        />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(15, 8)}>
      <CenterLayout gap={24}>
        <SectionTitle text="Move your Level 1 files in" />
        <CodeBlock
          title="~/my-agent/"
          lines={[
            "├── CLAUDE.md    ← agent instructions",
            "├── USER.md      ← about you",
            "├── SOUL.md      ← agent personality",
            "├── TODO.md      ← your tasks",
            "├── MEMORY.md    ← long-term facts",
            "└── memory/      ← daily logs",
          ]}
        />
        <FadeSlideIn delay={50}>
          <div style={{ color: COLORS.green, fontSize: 24, textAlign: "center" }}>
            Everything from Level 1 carries forward ✓
          </div>
        </FadeSlideIn>
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text="Close your laptop. Send a Telegram message. Your agent responds. That's the moment."
        subtext="4 of 5 primitives unlocked."
      />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 9: Tools
// ═══════════════════════════════════════════════════════
export const Module09: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={9}
        level="Builder"
        title="Tools"
        subtitle="Giving your agent hands"
      />
    </Sequence>
    <Sequence {...scene(7, 8)}>
      <CenterLayout gap={20}>
        <SectionTitle text="Expand access gradually" />
        <ConceptCard icon="📂" title="Week 1: Files" body="Read/write your workspace. Get comfortable." index={0} />
        <ConceptCard icon="🌐" title="Week 2: Web" body="Browse and search. See what it finds useful." index={1} />
        <ConceptCard icon="📧" title="Week 3: Email" body="Read-only first. Then drafting. Then sending." index={2} />
        <ConceptCard icon="📅" title="Week 4: Calendar" body="Read events. Suggest new ones. Check conflicts." index={3} />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(15, 8)}>
      <CenterLayout gap={16}>
        <SectionTitle text="Your agent extends itself" />
        <FlowDiagram
          steps={[
            { icon: "💬", label: '"Build me\na HN scraper"' },
            { icon: "⚡", label: "Agent writes\nthe script" },
            { icon: "🔧", label: "New tool\ncreated" },
          ]}
        />
        <FadeSlideIn delay={50}>
          <div style={{ color: COLORS.muted, fontSize: 24, marginTop: 16, textAlign: "center" }}>
            You don't need to code. You need to know what you want.
          </div>
        </FadeSlideIn>
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text="Tools create feedback loops. Without them: you do the thing. With them: your agent does the thing."
        subtext="Primitive unlocked: 🔧 Tools"
      />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 10: Schedules
// ═══════════════════════════════════════════════════════
export const Module10: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={10}
        level="Builder"
        title="Schedules"
        subtitle="Making your agent proactive"
      />
    </Sequence>
    <Sequence {...scene(7, 8)}>
      <CenterLayout gap={20}>
        <SectionTitle text="The daily rhythm" />
        <ConceptCard icon="☀️" title="7am: Morning Briefing" body="Email triage + calendar + overdue tasks → Telegram" index={0} />
        <ConceptCard icon="🔕" title="12pm: Silent Check" body="Heartbeat runs. Only alerts if something needs you." index={1} />
        <ConceptCard icon="🌙" title="9pm: Tomorrow Prep" body="Pre-brief meetings, update priorities, queue overnight work" index={2} />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(15, 8)}>
      <CenterLayout gap={24}>
        <SectionTitle text="Heartbeat config" />
        <CodeBlock
          lines={[
            "heartbeat:",
            "  interval: 30m",
            "  instructions: |",
            "    Check if anything needs attention.",
            "    If nothing: go back to sleep.",
            "    If something: message Telegram.",
          ]}
        />
        <FadeSlideIn delay={50}>
          <div style={{ color: COLORS.amber, fontSize: 22, textAlign: "center" }}>
            Key phrase: "If nothing, go back to sleep." Without it → spam.
          </div>
        </FadeSlideIn>
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text="Your agent's value is proportional to how well its schedule matches your rhythm."
        subtext="All 5 primitives unlocked: 🪪 🧠 🔧 ⏰ 🛡️"
      />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 11: Overnight Work
// ═══════════════════════════════════════════════════════
export const Module11: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={11}
        level="Operator"
        title="Overnight Work"
        subtitle="The compound machine"
      />
    </Sequence>
    <Sequence {...scene(7, 8)}>
      <CenterLayout gap={16}>
        <SectionTitle text="The loop" />
        <FlowDiagram
          steps={[
            { icon: "📝", label: "9pm:\nSet queue" },
            { icon: "🌙", label: "11pm:\nAgent works" },
            { icon: "✅", label: "Results\nto files" },
            { icon: "☀️", label: "7am:\nYou review" },
          ]}
        />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(15, 8)}>
      <CenterLayout gap={20}>
        <SectionTitle text="What it can build overnight" />
        <ConceptCard icon="📰" title="Content" body="Newsletter drafts, blog posts, research briefings" index={0} />
        <ConceptCard icon="💻" title="Code" body="Features from specs, bug fixes, scripts" index={1} />
        <ConceptCard icon="🔎" title="Research" body="Competitive analysis, due diligence, market intel" index={2} />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text="Night 1: saves 3 hours. Night 30: it's learned your patterns. Month 3: it ships work that took you days."
        subtext="This compounds."
      />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 12: Multi-Channel
// ═══════════════════════════════════════════════════════
export const Module12: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={12}
        level="Operator"
        title="Multi-Channel"
        subtitle="Meet your agent everywhere"
      />
    </Sequence>
    <Sequence {...scene(7, 9)}>
      <CenterLayout gap={16}>
        <SectionTitle text="Hub and spoke" />
        <FlowDiagram
          steps={[
            { icon: "📱", label: "Telegram\n(mobile)" },
            { icon: "🖥️", label: "Terminal\n(deep work)" },
            { icon: "🌐", label: "Web UI\n(dashboard)" },
            { icon: "🎤", label: "Voice\n(hands-free)" },
          ]}
        />
        <FadeSlideIn delay={60}>
          <div style={{ color: COLORS.muted, fontSize: 26, marginTop: 20, textAlign: "center" }}>
            Same brain. Same memory. Different interfaces.
          </div>
        </FadeSlideIn>
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(16, 7)}>
      <CenterLayout gap={20}>
        <SectionTitle text="Match channel to use case" />
        <ConceptCard icon="📱" title="Telegram" body="Quick messages, alerts, approvals. Phone buzzes." index={0} />
        <ConceptCard icon="⌨️" title="Terminal" body="Deep work, coding, long conversations. You're already there." index={1} />
        <ConceptCard icon="🎤" title="Voice" body="Hands-free thinking. Voice notes while walking." index={2} />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard text="Your agent adapts to where you are, not the other way around." />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 13: Trust & Autonomy
// ═══════════════════════════════════════════════════════
export const Module13: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={13}
        level="Operator"
        title="Trust & Autonomy"
        subtitle="The hardest module. Not technically — emotionally."
      />
    </Sequence>
    <Sequence {...scene(7, 8)}>
      <CenterLayout gap={20}>
        <SectionTitle text="The Trust Ladder" />
        <ConceptCard icon="0️⃣" title="Level 0" body='"Do nothing without asking me"' index={0} />
        <ConceptCard icon="1️⃣" title="Level 1" body='"Do routine things, ask for new/risky ones"' index={1} />
        <ConceptCard icon="2️⃣" title="Level 2" body='"Handle most things, tell me what you did"' index={2} />
        <ConceptCard icon="3️⃣" title="Level 3" body='"Handle everything, flag exceptions only"' index={3} />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(15, 8)}>
      <CenterLayout gap={24}>
        <SectionTitle text="Climb per action, not globally" />
        <CodeBlock
          lines={[
            "# Email autonomy progression:",
            "Week 1: Draft only, you send",
            "Week 3: Send routine, draft important",
            "Week 6: Handle all except VIPs",
            "Month 3: Handle everything, CC on novel",
          ]}
        />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text="Your agent will mess up. Plan for it. The fix: regular reviews + honest feedback loops."
        subtext="Trust is earned, not configured."
      />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 14: Knowledge System
// ═══════════════════════════════════════════════════════
export const Module14: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={14}
        level="Operator"
        title="The Knowledge System"
        subtitle="Never lose a thought again"
      />
    </Sequence>
    <Sequence {...scene(7, 8)}>
      <CenterLayout gap={20}>
        <SectionTitle text="Three eras of notes" />
        <ConceptCard icon="📁" title="Era 1: Filing Cabinet" body="Evernote, folders, tags. You organize. You never find it." index={0} />
        <ConceptCard icon="🔗" title="Era 2: Interconnected" body="Roam, Obsidian. Beautiful. More time organizing than thinking." index={1} />
        <ConceptCard icon="🤖" title="Era 3: Agent-Managed" body="Dump everything in. Agent organizes. You never look at notes." index={2} />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(15, 8)}>
      <CenterLayout gap={16}>
        <SectionTitle text="The capture pattern" />
        <FlowDiagram
          steps={[
            { icon: "💬", label: "Text\nyour agent" },
            { icon: "📝", label: "Agent\nlogs it" },
            { icon: "🗂️", label: "Auto\ncategorized" },
            { icon: "🔍", label: "Surfaces\nwhen relevant" },
          ]}
        />
        <FadeSlideIn delay={60}>
          <div style={{ color: COLORS.accent, fontSize: 24, marginTop: 16, textAlign: "center" }}>
            Capture everything. Organize nothing. Your agent organizes.
          </div>
        </FadeSlideIn>
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text={`"I never want to look at my notes. If he can surface the information for me, I don't need to."`}
        subtext="— Nat Elias"
      />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 15: Dedicated Hardware
// ═══════════════════════════════════════════════════════
export const Module15: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={15}
        level="Operator"
        title="Your Agent Gets a Home"
        subtitle="Dedicated hardware — always on"
      />
    </Sequence>
    <Sequence {...scene(7, 8)}>
      <CenterLayout gap={20}>
        <SectionTitle text="Mac Mini setup" />
        <div style={{ display: "flex", gap: 40, justifyContent: "center" }}>
          <StatCounter value="$599" label="One-time cost" delay={5} />
          <StatCounter value="$5/mo" label="Electricity" delay={15} />
          <StatCounter value="24/7" label="Always on" delay={25} />
        </div>
        <FadeSlideIn delay={40}>
          <div style={{ color: COLORS.muted, fontSize: 24, textAlign: "center", marginTop: 16 }}>
            Your agent works while you sleep. Literally.
          </div>
        </FadeSlideIn>
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(15, 8)}>
      <CenterLayout gap={24}>
        <SectionTitle text="Access from anywhere" />
        <FlowDiagram
          steps={[
            { icon: "📱", label: "Your\nphone" },
            { icon: "🔒", label: "Tailscale\n(encrypted)" },
            { icon: "🖥️", label: "Mac Mini\nat home" },
            { icon: "🤖", label: "Your\nagent" },
          ]}
        />
        <FadeSlideIn delay={60}>
          <div style={{ color: COLORS.green, fontSize: 22, textAlign: "center", marginTop: 12 }}>
            Free. Secure. No port forwarding. Works from anywhere.
          </div>
        </FadeSlideIn>
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text="For ~$200/month total, you have a 24/7 AI agent. As Nat put it: 'Some of the most insane ROI imaginable.'"
      />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 16: Security
// ═══════════════════════════════════════════════════════
export const Module16: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={16}
        level="Operator"
        title="Security"
        subtitle="Not getting hacked"
      />
    </Sequence>
    <Sequence {...scene(7, 8)}>
      <CenterLayout gap={20}>
        <SectionTitle text="Four defense layers" />
        <ConceptCard icon="🔑" title="Authentication" body="Whitelist your Telegram ID. Only you can message your agent." index={0} />
        <ConceptCard icon="🛡️" title="Injection Resistance" body="External text = DATA, not instructions. Better models = safer." index={1} />
        <ConceptCard icon="🔐" title="Access Control" body="Own accounts for agent. Read-only where write isn't needed." index={2} />
        <ConceptCard icon="👁️" title="Monitoring" body="Review logs weekly. Watch for unexpected actions." index={3} />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(15, 8)}>
      <CenterLayout>
        <FadeSlideIn>
          <div style={{
            background: `${COLORS.red}15`,
            border: `2px solid ${COLORS.red}`,
            borderRadius: 16,
            padding: "32px 48px",
            maxWidth: 800,
          }}>
            <div style={{ color: COLORS.red, fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
              ⚠️ Common Mistakes
            </div>
            <div style={{ color: COLORS.muted, fontSize: 22, lineHeight: 1.8 }}>
              • Adding bot to public groups{"\n"}
              • Storing API keys in workspace files{"\n"}
              • Using cheap models for important tasks{"\n"}
              • Zero → full access on day one
            </div>
          </div>
        </FadeSlideIn>
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text="Expand access gradually. Week by week. Your agent earns trust through track record, not promises."
      />
    </Sequence>
  </AbsoluteFill>
);

// ═══════════════════════════════════════════════════════
// MODULE 17: Making It Yours
// ═══════════════════════════════════════════════════════
export const Module17: React.FC = () => (
  <AbsoluteFill>
    <Sequence {...scene(0, 7)}>
      <TitleCard
        moduleNum={17}
        level="Operator"
        title="Making It Yours"
        subtitle="The infinite build"
      />
    </Sequence>
    <Sequence {...scene(7, 8)}>
      <CenterLayout gap={20}>
        <SectionTitle text="Real setups from real people" />
        <ConceptCard icon="👔" title="Brandon (non-technical)" body="Nanny tracking, Amazon ordering, date night booking, morning briefs" index={0} />
        <ConceptCard icon="🧑‍💻" title="Nat (technical)" body="Autonomous Twitter, overnight coding, own bank account" index={1} />
        <ConceptCard icon="📰" title="Ben (newsletter + fund)" body="Email triage, overnight builds, deal flow tracking, agent-to-agent comms" index={2} />
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(15, 8)}>
      <CenterLayout gap={16}>
        <SectionTitle text="The build loop — forever" />
        <FlowDiagram
          steps={[
            { icon: "👀", label: "Notice\nsomething\ntedious" },
            { icon: "💬", label: "Describe it\nto agent" },
            { icon: "⚡", label: "Agent\nbuilds it" },
            { icon: "🔄", label: "Feedback\n+ improve" },
          ]}
        />
        <FadeSlideIn delay={60}>
          <div style={{ color: COLORS.accent, fontSize: 24, marginTop: 16, textAlign: "center" }}>
            Each loop makes the next loop faster.
          </div>
        </FadeSlideIn>
      </CenterLayout>
    </Sequence>
    <Sequence {...scene(23, 7)}>
      <TakeawayCard
        text="You're not learning a tool. You're building a practice. The software is replaceable. The architecture isn't."
        subtext="Now go build. 🚀"
      />
    </Sequence>
  </AbsoluteFill>
);
