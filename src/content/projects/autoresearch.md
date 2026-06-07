---
title: "Auto Research"
shortDescription: "A CPIL-led project building LLM-agent systems that automate stages of the research lifecycle — from literature search and ideation to experiment design, execution, and analysis."
longDescription: "Auto Research explores how large language model agents can act as research collaborators, accelerating and partially automating the scientific research process while keeping human researchers in control of direction, judgment, and validation."
leaders:
  - Bowei He
members:
  - Arina Kharlamova
  - Jikun Kang
  - Imran Turganov (UG Student)
tags:
  - Auto Research
  - LLM Agents
  - Autonomous Research
  - AI for Science
  - Research Automation
  - Agentic Workflows
  - Reproducible Research
image: "/images/projects/autoresearch.png"
links:
  - label: "Project Repository (TODO)"
    url: "https://github.com/"
publications: []
impactHolders:
  - name: "AI researchers and research teams"
    role: "Primary research user community"
    summary: "The project targets researchers who want to offload repetitive research tasks — literature review, experiment scaffolding, code generation, and result analysis — to reliable, inspectable AI agents."
  - name: "CPIL research throughput"
    role: "Internal research infrastructure"
    summary: "The project aims to increase the lab's research velocity by turning agentic research workflows into reusable tooling that supports ongoing projects."
  - name: "Open science and reproducibility communities"
    role: "Broader impact communities"
    summary: "The project explores how agent-driven research can improve transparency, reproducibility, and the reuse of code, data, and experimental setups across studies."
status: "active"
featured: true
order: 2
---

## Motivation

Modern AI research involves many repetitive and time-consuming steps: surveying prior work, identifying open problems, designing experiments, writing and debugging code, running and tracking experiments, and interpreting results. Large language model agents are now capable enough to assist with — and in some cases automate — several of these steps.

Auto Research investigates how to build reliable agentic systems that accelerate the research lifecycle while keeping researchers firmly in control of direction, judgment, and validation. Rather than aiming to replace researchers, the project treats agents as collaborators whose actions remain transparent, inspectable, and correctable.

## Project Goals

- Build agentic pipelines that automate discrete research tasks such as literature review, idea generation, experiment scaffolding, code generation, and result analysis.
- Keep humans in the loop through transparent, inspectable, and easily correctable agent actions.
- Identify where automation genuinely helps and where human judgment remains essential.
- Develop reusable tooling and evaluation methods that can support other CPIL projects.
- Connect with related CPIL work on LLM-assisted code and dataset discovery across papers.
- Prepare findings for relevant AI, NLP, and scientific-tooling venues.

## Current Technical Direction

The project is in an early solution-iteration phase, with the core pipeline and component boundaries still being refined.

### Agentic research pipeline

The team is designing an end-to-end pipeline that decomposes a research goal into stages — problem framing, related-work retrieval, hypothesis or idea generation, experiment design, code generation, execution, and analysis — and assigns each stage to specialized agent roles with explicit human checkpoints.

### Literature and idea grounding

To reduce hallucinated or shallow proposals, the project is exploring retrieval-grounded ideation: agents ground their suggestions in retrieved papers, code, and datasets so that proposed directions are traceable to concrete prior work.

### Experiment execution and reproducibility

The project is investigating sandboxed, containerized execution so that agent-generated code can be run, logged, and reproduced safely. The aim is for every experiment to produce an inspectable record of code, configuration, and results.

### Evaluation

A central open question is how to measure whether agent-driven research is actually useful. The team is developing evaluation criteria that go beyond "did it run" to capture novelty, correctness, reproducibility, and the amount of human correction required.

## Recent Progress

### 2026-06-03

The team focused on iterating the pipeline design, tightening the boundaries between agent roles and clarifying where human checkpoints are most valuable. Discussion centered on reducing low-quality or ungrounded agent proposals and on making intermediate outputs easier to inspect.

### 2026-05-20

The group prototyped initial components of the research pipeline and tested them on a small internal example. Early results highlighted the importance of retrieval grounding and reproducible execution, which shaped the current technical direction.

### 2026-05-06

Project kickoff. The team scoped the problem, surveyed existing approaches to autonomous and agent-assisted research, and agreed on an initial framing: build a human-in-the-loop agentic pipeline rather than a fully autonomous system.

## Near-Term Milestones

- Stabilize the end-to-end pipeline and run it on one or two concrete AI research tasks.
- Define and pilot an evaluation protocol for agent-generated research outputs.
- Build a reproducible, containerized experiment-execution harness.
- Connect the literature and code-grounding component with related CPIL work.
- Draft a publication plan for AI, NLP, or scientific-tooling venues.
