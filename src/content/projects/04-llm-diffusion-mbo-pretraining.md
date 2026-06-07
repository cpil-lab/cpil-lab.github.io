---
title: "LLM: Diffusion, MBO, and LLM Pretraining"
shortDescription: "A CPIL research theme bringing diffusion/generative models and offline model-based optimization (MBO) to large language models, including an LLM-oriented Design-Bench 2.0."
longDescription: "This theme studies the intersection of diffusion and flow-based generative models, offline black-box / model-based optimization (MBO), and LLM pretraining. A current focus is Design-Bench 2.0, an LLM-oriented benchmark that adapts offline MBO algorithms to LLM-related tasks, alongside diffusion- and flow-based methods for black-box and multi-objective optimization."
leaders:
  - Ye Yuan
members:
  - Can Chen
  - Dheeraj
  - Linfeng Du
  - Zipeng Sun
  - Weixu Zhang
  - Xiuyuan Hu
  - Yonghan (Harry) Yang
  - Haolun Wu
tags:
  - Large Language Models
  - Diffusion Models
  - Offline Model-Based Optimization
  - Black-Box Optimization
  - LLM Pretraining
  - Generative Models
image: "/images/projects/04-llm-diffusion-mbo-pretraining.png"
links: []
publications:
  - title: "Support-Proximity Augmented Diffusion Estimation for Offline Black-Box Optimization"
    authors: "Yonghan Yang, Ye Yuan, Zipeng Sun, Linfeng Du, Bowei He, Haolun Wu, Can Chen, Xue Liu"
    venue: "ICML 2026"
    year: 2026
    url: "https://arxiv.org/abs/2605.11246"
  - title: "Training Diffusion Language Models for Black-Box Optimization"
    authors: "Zipeng Sun, Can Chen, Ye Yuan, Haolun Wu, Jiayao Gu, Christopher Pal, Xue Liu"
    venue: "ICML 2026 (Spotlight)"
    year: 2026
    url: "https://arxiv.org/abs/2603.17919"
  - title: "Diffusion Large Language Models for Black-Box Optimization"
    authors: "Ye Yuan, Can Chen, Zipeng Sun, Dinghuai Zhang, Christopher Pal, Xue Liu"
    venue: "arXiv preprint"
    year: 2026
    url: "https://arxiv.org/abs/2601.14446"
  - title: "Design Editing for Offline Model-based Optimization"
    authors: "Ye Yuan, Youyuan Zhang, Can Chen, Haolun Wu, Zixuan Li, Jianmo Li, James J. Clark, Xue Liu"
    venue: "TMLR"
    year: 2025
    url: "https://arxiv.org/abs/2405.13964"
  - title: "ParetoFlow: Guided Flows in Multi-Objective Optimization"
    authors: "Ye Yuan, Can Chen, Christopher Pal, Xue Liu"
    venue: "ICLR 2025"
    year: 2025
    url: "https://proceedings.iclr.cc/paper_files/paper/2025/file/b4a9d138ff496b3fe2f386dcf278f10c-Paper-Conference.pdf"
  - title: "Importance-aware Co-teaching for Offline Model-based Optimization"
    authors: "Ye Yuan, Can Chen, Zixuan Liu, Willie Neiswanger, Xue Liu"
    venue: "NeurIPS 2023"
    year: 2023
    url: "https://proceedings.neurips.cc/paper_files/paper/2023/file/ae8b0b5838ba510daff1198474e7b984-Paper-Conference.pdf"
impactHolders: []
status: "active"
featured: true
order: 1
---

## Motivation

This theme sits at the intersection of three lines of work that increasingly reinforce one another: diffusion and flow-based generative modeling, offline model-based optimization (MBO), and large language model pretraining. Offline MBO methods learn to propose high-performing designs purely from a static dataset of past evaluations, and diffusion/flow models have proven to be powerful tools for representing and editing those design distributions. The theme explores how these optimization ideas transfer to the LLM setting, where the "design space" becomes language- and sequence-structured.

## Project Goals

- Develop diffusion- and flow-based estimators and samplers for offline black-box and multi-objective optimization.
- Bridge offline MBO algorithms with LLM-related tasks, treating language and sequence generation as an optimization problem.
- Build an LLM-oriented benchmark that standardizes evaluation of these methods.

## Recent Progress

The team has started an LLM-oriented **Design-Bench 2.0**, with the goal of adapting offline MBO algorithms to LLM-related tasks. This extends the classic offline black-box optimization benchmarking setup toward language-model settings, providing a common ground to test diffusion-, flow-, and optimization-based methods on LLM tasks.

Recent published results span diffusion estimation for offline black-box optimization (SPADE, ICML 2026), training diffusion language models directly for black-box optimization (ICML 2026 Spotlight), and a preprint on diffusion large language models for black-box optimization, building on earlier work in design editing (TMLR), guided flows for multi-objective optimization (ICLR 2025), and importance-aware co-teaching (NeurIPS 2023). See the publications list above for details.
