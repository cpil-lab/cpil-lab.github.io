---
title: "Evidence Dynamic AI Papers"
shortDescription: "A CPIL-led collaboration to integrate AI-field papers into Evidence through interactive, executable, and MyST-compatible dynamic paper experiences."
longDescription: "This project explores how Evidence can support interactive AI papers by combining MyST-native publishing, PreTeXt-style computational layout, containerized demos, and LLM-assisted code and dataset discovery."
leaders:
  - Dun Yuan
members:
  - Yongjun (Richard) Du
  - Changjiang Han
tags:
  - Dynamic Papers
  - AI for Scientific Publishing
  - MyST
  - Interactive Papers
  - Reproducible Research
  - LLM Agents
image: "/images/projects/evidence-logo.svg"
links:
  - label: "Evidence"
    url: "https://evidencepub.io/"
  - label: "KAN Evidence Demo"
    url: "https://github.com/SSRand/kan-evidence-demo"
  - label: "MyST Guide"
    url: "https://mystmd.org/guide"
  - label: "MyST Article Theme"
    url: "https://github.com/myst-templates/article-theme"
publications: []
impactHolders:
  - name: "Evidence publishing platform"
    role: "Scientific publishing infrastructure"
    url: "https://evidencepub.io/"
    summary: "The project aims to improve Evidence as a dynamic publishing environment for interactive, executable, and reusable scientific papers."
  - name: "AI paper authors and readers"
    role: "Primary research user community"
    summary: "The project targets AI researchers who want papers to expose code, data, figures, and evaluation workflows beyond static PDF artifacts."
  - name: "Scientific publishing, HCI, and education communities"
    role: "Broader impact communities"
    summary: "The project explores how dynamic papers can support reproducibility, inspection, learning, and communication across technical audiences."
status: "active"
featured: true
order: 1
---

## Motivation

Evidence is a beta dynamic publishing platform for online-executable scientific papers. CPIL is exploring how AI research papers can become first-class Evidence papers: interactive, reproducible, computationally inspectable, and easier to connect with code, datasets, and follow-up experiments.

The project focuses on AI-field papers because they often include runnable training pipelines, datasets, visualizations, model components, and evaluation loops that can be exposed as dynamic paper interactions instead of static PDF artifacts.

## Project Goals

- Build AI paper demonstrations that can run inside or alongside the Evidence format.
- Improve the Evidence authoring experience for MyST-based papers.
- Explore PreTeXt-style computational layout and animation inside MyST/Evidence papers.
- Support page-level interaction modes where figures, text, code, and computations can respond to each other.
- Investigate LLM-assisted workflows for finding, connecting, and reusing code and datasets across related papers.
- Prepare the work for possible HCI, education, and scientific publishing venues.

## Current Technical Direction

### MyST-native interactive rendering

The team is moving from manual DOM cloning toward MyST engine-level structured data. The goal is to preserve MyST-native document components while adding a separate canvas or computational rendering path for dynamic interaction.

### Page-level computational mode

Rather than limiting interaction to isolated animation panels, the project is exploring a page-level mode, similar in spirit to a dark/light mode toggle. This mode would let an Evidence paper become computationally manipulable while preserving the original reading experience.

### AI paper demonstrations

Changjiang has been developing a modular dashboard-like reconstruction of an AI paper, with interactive modules, page splits, iframe-style integration, and Docker/UV containerization. The current direction is to make this deployable as an Evidence-compatible proof of concept.

Richard has been prototyping MyST-to-PreTeXt-style interactions, including draggable figures and nearby text that reacts dynamically. The next step is to move the prototype away from fragile rendered-DOM manipulation and toward structured document data.

## Candidate AI Paper Directions

The team is evaluating AI papers whose core methods can be shown interactively with modest compute. Candidate directions include:

- **Kolmogorov-Arnold Networks (KAN):** a lightweight, visually interpretable architecture where users can adjust spline/grid settings and observe changes in fitting behavior.
- **Mamba and selective state space models:** a sequence modeling direction where users could compare scaling and behavior under different sequence lengths or state dimensions.
- **3D Gaussian Splatting:** a visual synthesis direction where users can inspect optimization dynamics and rendering changes from sparse views or simplified scenes.

## Recent Progress

### 2026-05-28

Richard demonstrated a MyST-to-PreTeXt-style prototype that can clone a MyST article, create draggable images, and make nearby text react dynamically. The group identified formatting bugs, layout inconsistencies, and the fragility of manipulating rendered DOM content.

Agah suggested moving the work into the MyST engine and TypeScript layer, using structured document data and opening a separate canvas rendering path. The group agreed that a better MyST-compatible demo with PreTeXt-style interaction and an AI paper example could be ready after another focused iteration.

Evidentron containerization is mostly ready. For OHBM, the near-term target is to demonstrate Evidentron on a suitable paper, while the MyST/PreTeXt integration continues as a longer-term technical path.

### 2026-05-14

The meeting focused on integrating PreTeXt-like computational layout and animation capabilities with MyST/Evidence papers. The team clarified that the long-term target is modular page-level integration, not a one-off animation panel.

Changjiang showed strong progress on a deployable proof of concept: the paper was reconstructed into a modular dashboard-like structure, split into pages, connected through interactive modules, and containerized with Docker/UV.

### 2026-04-16

The group reviewed the MyST article theme, the MyST documentation, and a sample Evidence paper using MyST. The discussion centered on how to build PreTeXt-style features inside the MyST authoring and rendering stack.

### 2026-03-19

The team identified AI paper examples that could work well in Evidence because their core training or visualization loops can be rerun quickly. The discussion also introduced an LLM direction: helping users search for code and datasets across papers and compose code from multiple papers into a new experiment.

### 2026-03-05

The project started with two practical questions: which AI-domain paper could be tested in Evidence format, and how LLMs could help search across paper code and datasets.

## Near-Term Milestones

- Build a cleaner MyST-compatible demo with a concrete AI paper example.
- Run Changjiang's paper demo and share it with the broader team.
- Select a paper for an Evidentron OHBM demonstration.
- Explore an architecture for a separate MyST-to-canvas rendering path.
- Draft a publication plan for HCI, education, and scientific publishing venues.
