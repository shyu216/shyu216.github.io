---
title: "Breath Tracking for XV Scanner Workflow"
excerpt: "A real-time depth-based breath tracking system for clinical workflow automation, improving respiratory signal quality through motion magnification."
collection: portfolio
date: 2025-11-03
links:
  - name: Paper
    url: /files/CIS-Project-Breath-Tracking.pdf
  - name: Demo
    url: https://www.youtube.com/watch?v=p7o28IXwsrs&feature=youtu.be
  - name: Code
    url: https://github.com/shyu216/Unity-Quest3-EVM
teaser: "portfolio-disgram/breathtracking_flask.png"
---

![Breath Tracking Flask Interface]({{ '/images/portfolio-disgram/breathtracking_flask.png' | relative_url }})

- [His Master Thesis]({{ '/files/CIS-Project-Breath-Tracking.pdf' | relative_url }})
- [Demo Video](https://www.youtube.com/watch?v=p7o28IXwsrs&feature=youtu.be)
- [Code Repository (coming soon)](https://github.com/shyu216/Unity-Quest3-EVM)

This project was one major part of his master's thesis and focused on real-time respiratory tracking for the 4DMedical XV Scanner workflow.

This project originated from a collaboration with 4DMedical, which needed a real-time respiratory tracking system for its XV Scanner to meet clinical triggering requirements. 

Compared to directly using raw depth maps for histogram coloring and filtering only the singly parsed BPM, signal amplification based on pixels of specific frequencies and parallel filtering of the entire image proved to be more robust.

He first analyzed the existing MATLAB Eulerian Video Magnification (EVM)[[1]](#ref-1) algorithm and found that its principle was well-suited to our needs—it could effectively amplify subtle respiratory motion signals. 

However, MATLAB’s computational efficiency and integration capability could not meet the requirements of a real-time system. Therefore, he decided to rewrite the entire algorithm stack in Python, optimizing it with OpenCV and NumPy while retaining the core advantages of the EVM algorithm. 

During implementation, he designed a dynamic ROI (Region of Interest) mechanism to reduce unnecessary computational load and optimized the parameters of the Laplacian pyramid and Butterworth filter.

He observed that breathing is non-rigid, while body movements (artifacts such as shaking and leaning forward) are rigid. The movement amplitudes near the collarbone and the chest wall are different. Thus, he attempted to use a differential ROI fusion technology of two signals, which improved the stability of respiratory signals when motion artifacts present.

Another challenges resolved was training YOLOv11n for pose and segmentation detection on depth maps, using RGB-D image pairs.

Tests on three respiratory datasets showed that this method increased the motion scene correlation from 0.16 to 0.66, while reducing the MSE by 59.1%.

After 9 months of development, he successfully built a real-time respiratory tracking pipeline that achieved 24.7 FPS and 40ms latency on the GPU, meeting the strict requirements of clinical applications.

Finally, he developed a demo webpage using Flask, with a 150ms latency of rendering.

## References

1. <a id="ref-1"></a>Wu, H.-Y., Rubinstein, M., Shih, E., Guttag, J., Durand, F., & Freeman, W. T. (2012). **Eulerian Video Magnification for Revealing Subtle Changes in the World*. ACM Transactions on Graphics (Proc. SIGGRAPH 2012), 31(4), 65:1–65:8. https://people.csail.mit.edu/mrub/evm/