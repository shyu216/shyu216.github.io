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

He recently completed his Master's degree at the School of Computing and Information Systems, the University of Melbourne, co‑supervised by <a href="https://binchen.me/" target="_blank">Dr. Bin Chen</a> and <a href="https://lyruan.com/" target="_blank">Dr. Lingyan Ruan</a>. His research focused on image‑based biosensing technologies in real-time scenarios.

Prior to that, he earned his Bachelor's in Computer Science and Engineering at <a href="https://www.na.cuhk.edu.hk/" target="_blank">New Asia College</a>, the Chinese University of Hong Kong. There, he worked on his final‑year project in street‑scene 3D object detection under the supervision of <a href="https://www.cse.cuhk.edu.hk/~byu/index.html" target="_blank">Prof. Bei Yu</a>, <a href="https://jiaya.me" target="_blank">Prof. Jiaya Jia</a>, and Dr. Zetong Yang. He also spent a summer researching real‑time wireless streaming systems under <a href="https://www.cse.cuhk.edu.hk/~shao" target="_blank">Prof. Zili Shao</a>.

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

You can visit his blog [here](/knownoevil/) and find his resume [here](/shyu-resume/).