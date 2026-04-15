---
title: "BioVis: Mixed Reality Biosensing on Meta Quest 3"
excerpt: "A real-time MR biosensing prototype on Meta Quest 3, from concept to functional demo, for both wearer and external subjects."
collection: portfolio
date: 2025-11-03
links:
  - name: Paper
    url: /files/CIS-Project-Breath-Tracking.pdf
  - name: Demo
    url: https://youtu.be/zOPQXXpSRbg
  - name: Code
    url: https://github.com/shyu216/Unity-Quest3-EVM
teaser: "portfolio-disgram/assembly.png"
---

![Meta Sense Assembly]({{ '/images/portfolio-disgram/assembly.png' | relative_url }})

- [His Master Thesis]({{ '/files/CIS-Project-Breath-Tracking.pdf' | relative_url }})
- [Demo Video](https://youtu.be/zOPQXXpSRbg)
- [Main Project Repository (coming soon)](https://github.com/shyu216/Unity-Quest3-EVM)
- [Supporting Calibration Toolkit](https://github.com/shyu216/meta-sense-calib)

This project was the second main part of his master’s thesis. It focused on mixed reality (MR) biosensing using the Meta Quest 3.

In May, his supervisor gave him a concept. He quickly made a simple demo using only the Eulerian Video Magnification (EVM)[[1]](#ref-1) algorithm. He moved the EVM pipeline from MATLAB to C# and used ComputeShader to ensure it ran in real time on the Quest 3.

This demo was submitted to SIGGRAPH Asia XR (he was the second co-author). The submission was rejected in July, but the feedback helped guide the system’s further improvements.

Then, from July to November, he worked on his thesis while continuing to develop the project. He tried to integrate spatial perception through YOLO and advanced remote photoplethysmography (rPPG) techniques.

As the system grew more complex, the biggest challenge became running heavy biosensing algorithms on the Meta Quest 3—a mobile XR device with limited resources. He added YOLOv11n and tried optimizing it, but using the model led to performance bottlenecks.

Later, he delved into rPPG technology. Unlike regular rPPG setups, the headset’s camera moves with the user, which creates more motion noise and makes it harder to select regions of interest (ROI).

To solve the performance issues, he used a RealSense D415 to collect data, which he then sent to both the Meta Quest 3 and a PC. This setup allowed the heavy computational tasks to run on the PC, enabling the system to track biosignals for 3 to 4 people simultaneously.

To test the system, he recorded videos with the headset and evaluated its performance on the UBFC-rPPG dataset[[1]](#ref-2). It achieved an HR MAE of 3.75 BPM and a BR MAE of 2.45 BPM, proving it works in real-world scenarios.

In the thesis, he also envisioned using the Quest 3's camera rig to perform ballistocardiography (BCG) to detect the wearer’s signal.



## References

1. <a id="ref-1"></a>Wu, H.-Y., Rubinstein, M., Shih, E., Guttag, J., Durand, F., & Freeman, W. T. (2012). **Eulerian Video Magnification for Revealing Subtle Changes in the World*. ACM Transactions on Graphics (Proc. SIGGRAPH 2012), 31(4), 65:1–65:8. https://people.csail.mit.edu/mrub/evm/
2. <a id="ref-2"></a>Bobbia, S., Macwan, R., Benezeth, Y., Mansouri, A., & Dubois, J. (2019). *Unsupervised skin tissue segmentation for remote photoplethysmography*. Pattern Recognition Letters, 124, 82–90. https://sites.google.com/view/ybenezeth/ubfcrppg
