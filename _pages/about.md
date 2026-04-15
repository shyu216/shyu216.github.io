---
permalink: /
title: "Hi there,"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

This is the personal website of Sihong YU.

He currently holds a working visa, allowing him to live and work in Australia until February 2028. He is open to both academic and industry opportunities.

He recently completed his Master's degree at the School of Computing and Information Systems, the University of Melbourne, co‑supervised by [Dr. Lingyan Ruan](https://lyruan.com/) and [Dr. Bin Chen](https://binchen.me/). His research focused on image‑based biosensing technologies in mixed reality platforms.

Prior to that, he earned his Bachelor's in Computer Science and Engineering at [New Asia College](https://www.na.cuhk.edu.hk/), the Chinese University of Hong Kong. There, he worked on his final‑year project in street‑scene 3D object detection under the supervision of [Prof. Bei Yu](https://www.cse.cuhk.edu.hk/~byu/index.html), [Prof. Jiaya Jia](https://jiaya.me), and Dr. Zetong Yang. He also spent a summer researching real‑time wireless streaming systems under [Prof. Zili Shao](https://www.cse.cuhk.edu.hk/~shao).

His interests include Computer Vision, Computer Graphics, and Human‑Computer Interaction, with a passion for building useful applications in computer.

## His Education {#his-education}

<img src="https://raw.githubusercontent.com/shyu216/shyu216/refs/heads/main/journey-map.svg" alt="His Journey" />

- **MSc. Computer Science**, The University of Melbourne, 2025
- **BSc. Computer Science**, The Chinese University of Hong Kong, 2023
- Hainan Middle School, 2019

## His Portfolio {#his-portfolio}

{% assign sorted_portfolio = site.portfolio | sort: "date" | reverse %}
{% for post in sorted_portfolio %}
  {% include sihong-portfolio-card.html %}
{% endfor %}

## More About Him {#more-about-him}

You can visit his blog [here](/knownoevil/) and find his CV [here](/shyu-resume/).