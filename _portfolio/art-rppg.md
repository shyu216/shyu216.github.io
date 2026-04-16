---
title: "Art-rPPG: Real-time Heartbeat-Driven Visual Pipeline"
excerpt: "A real-time rPPG pipeline that estimates heart rate from face video and drives interactive TouchDesigner visuals via OSC and NDI."
collection: portfolio
date: 2026-3-7
links:
  - name: Demo
    url: https://youtu.be/dgdbvwgccpI
  - name: Code
    url: https://github.com/shyu216/art-rppg
teaser: "portfolio-disgram/touchdesigner.png"
---

![Art-rPPG TouchDesigner Demo]({{ '/images/portfolio-disgram/touchdesigner.png' | relative_url }})

- [Demo Video](https://youtu.be/dgdbvwgccpI)
- [Code Repository (coming soon)](https://github.com/shyu216/art-rppg)


This project explores real-time remote photoplethysmography (rPPG) for interactive media. The system estimates heart-rate-related signals from a live camera stream, then maps physiological features to visual effects in TouchDesigner[[1]](#ref-1).

The pipeline combines YOLO[[2]](#ref-2) based face region tracking and RhythmFormer[[3]](#ref-3)-based waveform extraction, and outputs three BPM streams (chunk-level, sliding-window, and Kalman-smoothed). To support stable live performance, he implemented asynchronous OSC messaging for BPM and waveform transmission, and NDI streaming for face-video monitoring.

He also conducted rapid validation across multiple public rPPG datasets, including UBFC-rPPG[[4]](#ref-4), UBFC-Phys[[5]](#ref-5), VV-small[[6]](#ref-6), MMPD[[7]](#ref-7) dataset, comparing Rhythmformer and Chrom[[8]](#ref-8) under the rPPG-Toolbox[[9]](#ref-9) framework.

## References

1. <a id="ref-1"></a>Derivative. (2025). *TouchDesigner* (Version 2025.32460) [Software]. https://derivative.ca/
2. <a id="ref-2"></a>Redmon, J., Divvala, S., Girshick, R., & Farhadi, A. (2016). *You Only Look Once: Unified, Real-Time Object Detection*. CVPR 2016. https://arxiv.org/abs/1506.02640
3. <a id="ref-3"></a>Zou, B., Guo, Z., Chen, J., Zhuo, J., Huang, W., & Ma, H. (2024). *RhythmFormer: Extracting rPPG Signals Based on Hierarchical Temporal Periodic Transformer*. arXiv:2402.12788. https://arxiv.org/abs/2402.12788
4. <a id="ref-4"></a>Bobbia, S., Macwan, R., Benezeth, Y., Mansouri, A., & Dubois, J. (2019). *Unsupervised skin tissue segmentation for remote photoplethysmography*. Pattern Recognition Letters, 124, 82–90. https://sites.google.com/view/ybenezeth/ubfcrppg
5. <a id="ref-5"></a>Meziati Sabour, R., Benezeth, Y., De Oliveira, P., Chappé, J., & Yang, F. (2021). *UBFC-Phys: A Multimodal Database For Psychophysiological Studies Of Social Stress*. IEEE Transactions on Affective Computing. https://doi.org/10.1109/TAFFC.2021.3056960
6. <a id="ref-6"></a>Toye, P.-J., et al. (2023). *Vital Videos: A Public Dataset of Videos with PPG and BP Ground Truths*. arXiv:2306.11891. https://arxiv.org/abs/2306.11891
7. <a id="ref-7"></a>Tang, J., Chen, K., Wang, Y., Shi, Y., Patel, S., McDuff, D., & Liu, X. (2023). *MMPD: Multi-Domain Mobile Video Physiology Dataset*. EMBC 2023. https://doi.org/10.1109/EMBC40787.2023.10340857
8. <a id="ref-8"></a>de Haan, G., & Jeanne, V. (2013). *Robust Pulse Rate from Chrominance-Based rPPG*. IEEE Transactions on Biomedical Engineering, 60(10), 2878–2886. https://pubmed.ncbi.nlm.nih.gov/23744659/
9. <a id="ref-9"></a>Liu, X., Narayanswamy, G., Paruchuri, A., Zhang, X., Tang, J., Zhang, Y., Wang, Y., Sengupta, S., Patel, S., & McDuff, D. (2022). *rPPG-Toolbox: Deep Remote PPG Toolbox*. arXiv:2210.00716. https://arxiv.org/abs/2210.00716
