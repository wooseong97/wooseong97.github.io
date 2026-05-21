---
layout: page
permalink: /publications/
title: publications
description: Publications in reversed chronological order. (* denotes equal contribution.)
nav: true
nav_order: 4
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

<h2 class="year">Manuscripts Under Review</h2>

<div class="publications">

{% bibliography --file under_review --group_by none %}

</div>

<h2 class="year">In Preparation</h2>

<div class="publications">

{% bibliography --file in_preparation --group_by none %}

</div>
