---
title: "3D Object Detection based on Densified Point Cloud"
excerpt: "His final-year undergraduate project in 3D object detection reproduced SOTA models on KITTI using OpenPCDet with minor optimizations for sparse point clouds."
collection: portfolio
date: 2023-4-24
links:
  - name: Paper
    url: /files/LJ2202.pdf
  - name: Slides
    url: /files/LJ2202-term2slides.pdf
  - name: Code
    url: https://github.com/shyu216/DPC
teaser: "portfolio-disgram/3dod-dpc.png"
---

![3D Object Detection Results]({{ '/images/portfolio-disgram/3dod-dpc.png' | relative_url }})

- [His Bachelor Thesis](/files/LJ2202.pdf)
- [Its Presentation Slides](/files/LJ2202-term2slides.pdf)
- [Its Code](https://github.com/shyu216/DPC)

This was his undergraduate final year project, focusing on SOTA models in the field of 3D object detection. Leveraging the OpenPCDet[[1]](#ref-1) framework and the KITTI[[2]](#ref-2) dataset, the project aimed to predict 3D bounding boxes for three target categories: cars, bicycles, and pedestrians. Key technical areas involved point cloud feature extraction and depth completion.

Back then, he had a rather naive observation: some ground truth  bounding boxes contained only a small number of internal point cloud points. He wondered if increasing the number of points within these boxes could assist the model’s prediction—later, he realized this idea aligned with the SOTA SFD[[3]](#ref-3) approach at the time! However, without fancy innovative insights, his work mainly consisted of minor tweaks and refinements on top of existing methods.

He fully reproduced the core methodologies of several SOTA papers along with their open-source implementations, systematically organized the entire experimental pipeline, and gained hands-on experience with many implicit implementation details that weren’t explicitly documented in the original papers or repositories.

There were no grand algorithmic innovations—instead, he made small adjustments and tests to the existing codebase, plus some visualization work. Compared to proposing new methods, this experience was more about thoroughly understanding the underlying design logic of the model, familiarizing himself with classic domain-specific modeling ideas, and mastering practical implementation details. It was essentially a solid, complete exercise in translating academic papers into functional code.

## References

1. <a id="ref-1"></a>OpenPCDet Development Team. (2020). *OpenPCDet: An Open-source Toolbox for 3D Object Detection from Point Clouds*. https://github.com/open-mmlab/OpenPCDet
2. <a id="ref-2"></a>Geiger, A., Lenz, P., & Urtasun, R. (2012). *Are we ready for Autonomous Driving? The KITTI Vision Benchmark Suite*. Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR).
3. <a id="ref-3"></a>Wu, X., Peng, L., Yang, H., Xie, L., Huang, C., Deng, C., Liu, H., & Cai, D. (2022). *Sparse Fuse Dense: Towards High Quality 3D Detection with Depth Completion*. CVPR 2022, 5418-5427.