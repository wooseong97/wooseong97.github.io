---
layout: page
permalink: /publications/
title: publications
description: Under-review manuscripts first, followed by accepted publications in reverse chronological order. (* denotes equal contribution.)
nav: true
nav_order: 4
---

{% include bib_search.liquid %}

<h2 class="year">Manuscripts Under Review</h2>
<div class="publications">
{% bibliography --file under_review --group_by none %}
</div>

<h2 class="year">Accepted Publications</h2>
<div class="publications">
{% bibliography %}
</div>
