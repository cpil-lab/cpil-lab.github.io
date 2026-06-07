---
title: "Agent Security: Hacking and Defending Autonomous Skill-Based Agents"
shortDescription: "A CPIL-led red-team/blue-team effort to systematically attack and defend OpenClaw-like autonomous agents, with a focus on their skills, tools, and high-privilege execution surfaces."
longDescription: "This project studies the security of self-hosted, skill-extensible autonomous agents in the style of OpenClaw. It pairs offensive research (prompt injection, skill poisoning, sandbox escape, and exfiltration) with defensive research (sandboxing, permission models, guardrails, and runtime monitoring), supported by a reproducible agent environment and a curated attack-defense dataset."
leaders:
  - Bowei He
members:
  - Tao Ni (KAUST)
  - Yankai Chen
  - Kuiyi Gao (UGRIP Intern)
  - Sachhyam Shrestha (UGRIP Intern)
tags:
  - Agent Security
  - Autonomous Agents
  - OpenClaw
  - Red Teaming
  - Prompt Injection
  - Skill Supply Chain Security
  - Sandboxing and Defense
  - LLM Agents
image: "/images/projects/agentsecurity.png"
links:
  - label: "OpenClaw"
    url: "https://github.com/openclaw/openclaw"
  - label: "ClawHub Skill Registry"
    url: "https://clawhub.ai/"
  - label: "Snyk ToxicSkills Study"
    url: "https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/"
  - label: "Running OpenClaw Safely (Microsoft)"
    url: "https://www.microsoft.com/en-us/security/blog/2026/02/19/running-openclaw-safely-identity-isolation-runtime-risk/"
publications: []
impactHolders:
  - name: "Autonomous agent frameworks (OpenClaw and similar)"
    role: "Agentic AI infrastructure"
    url: "https://github.com/openclaw/openclaw"
    summary: "The project aims to surface and help mitigate security weaknesses in self-hosted, skill-extensible agent frameworks before they are exploited at scale."
  - name: "Agent developers, operators, and skill authors"
    role: "Primary deployment community"
    summary: "The project targets the people who build, deploy, and extend autonomous agents and need practical guidance on safe configuration, permissioning, and skill vetting."
  - name: "AI safety and security research communities"
    role: "Broader impact communities"
    summary: "The project contributes a reproducible environment, an attack-defense dataset, and red-team/blue-team findings to the study of agentic AI security."
status: "active"
featured: true
order: 2
---

## Motivation

Self-hosted autonomous agents have moved from research demos to mass deployment. Frameworks like OpenClaw run continuously on a user's own hardware, read and write files, execute shell commands, drive browsers, manage containers, and act through everyday messaging channels — often proactively, without a human in the loop. This combination of persistent memory, broad tool access, and an open ecosystem of installable "skills" gives these agents enormous capability, and an equally enormous attack surface.

CPIL is launching a focused red-team/blue-team effort to understand that attack surface. The project treats an OpenClaw-like agent as both a target to be broken and a system to be hardened: we study how an adversary can hijack an agent through its inputs, skills, and environment, and how a defender can contain the blast radius without destroying the agent's usefulness.

We focus on OpenClaw-style agents because they concentrate the hardest problems in agentic security into a single system: indirect prompt injection from untrusted content, a skill supply chain that downloads and runs third-party code, high-privilege local execution, and long-lived memory that can be quietly poisoned over time.

## Project Goals

- Build a reproducible, sandboxed environment for running and instrumenting OpenClaw-like agents safely.
- Construct an attack-defense dataset covering injection payloads, malicious and vulnerable skills, and benign baselines.
- Develop a red-team methodology that maps the agent's full attack surface, from prompt-level manipulation to environmental exploitation.
- Develop and evaluate blue-team defenses: sandboxing, permission/allowlist models, input/output guardrails, and runtime monitoring.
- Quantify the trade-off between agent capability and security under different defensive configurations.
- Prepare the work for AI security, systems, and machine-learning venues.

## Current Technical Direction

### Agent sandbox and evaluation environment

The team is standing up a controlled environment in which an OpenClaw-like agent can be run, attacked, and observed without risk to real systems or data. The environment isolates the agent's local execution surfaces (shell, filesystem, browser, and containers) and instruments its inputs, tool calls, and memory so that every attacker action and agent response can be logged and replayed. Reproducibility is a first-class requirement: experiments are containerized and rerunnable across the team.

### Attack-defense dataset construction

In parallel, the team is assembling a dataset that pairs adversarial inputs with the agent behaviors they induce. This spans direct and indirect prompt-injection payloads delivered through emails, web content, and skill documentation; poisoned and vulnerable skills drawn from realistic supply-chain scenarios; and a matched set of benign tasks used to measure false positives and capability loss. The dataset is designed to support both offensive evaluation and defensive training and testing.

### Red-team (offensive) track

The offensive track systematically probes three classes of attack: direct prompt manipulation, indirect injection from untrusted external content, and environmental exploitation such as sandbox escape, credential and secret exfiltration, and persistence. A central theme is the "confused deputy" pattern, in which injected instructions coerce the agent into misusing its own legitimate tool access.

### Blue-team (defensive) track

The defensive track designs and evaluates containment strategies: strict tool allowlists and capability scoping, sandbox and isolation boundaries, skill vetting and supply-chain scanning, input/output filtering and guardrails, and runtime monitoring that can detect and interrupt anomalous tool-call chains. Each defense is measured against the red-team attacks and scored on how much security it adds relative to the capability it removes.

## Candidate Attack–Defense Directions

The team is prioritizing attack-defense pairs that are both high-impact and tractable in a sandboxed setting:

- **Indirect prompt injection via untrusted content:** adversarial instructions hidden in emails, scraped pages, or skill documentation that drive unintended tool calls and data exfiltration — paired with content provenance and instruction-isolation defenses.
- **Skill supply-chain poisoning:** typosquatted or backdoored skills carrying reverse shells, credential-exfiltration webhooks, or malicious "setup" commands — paired with skill scanning, signing, and allowlisting.
- **Sandbox escape and privilege escalation:** abuse of shell, filesystem, and container access to break isolation or establish persistence — paired with stronger isolation and least-privilege execution.
- **Memory and configuration poisoning:** manipulation of long-lived memory or workspace configuration files to alter agent behavior over time — paired with integrity checks and memory hygiene.

## Recent Progress

### 2026-06-05

The team began building the sandboxed agent environment and drafting the schema for the attack-defense dataset, including categories for injection payloads, skill-based attacks, and benign baselines. Early discussion focused on how to instrument the agent's tool calls and memory so that attacks are observable and reproducible.

### 2026-06-02

The project kicked off with a scoping discussion of the OpenClaw-like attack surface and a split into red-team and blue-team tracks. The group agreed to begin with environment setup and dataset construction before running structured attack-defense experiments.

## Near-Term Milestones

- Finalize the sandboxed agent environment with full input, tool-call, and memory instrumentation.
- Complete a first version of the attack-defense dataset with injection, skill-poisoning, and benign categories.
- Run an initial red-team pass mapping the agent's attack surface end to end.
- Implement and evaluate a baseline set of blue-team defenses against that red-team pass.
- Draft a publication plan for AI security and machine-learning venues.
