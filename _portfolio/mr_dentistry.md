---
title: "MR‑Guided Orthodontic Mini‑Screw Placement"
excerpt: "Exploring extended reality for real‑time markless teeth pose estimation via keypoint matching on HoloLens 2."
collection: portfolio
date: 2026-8-16
links:
  - name: Demo
    url: https://youtu.be/XVS0L4rJ2Es
  - name: Code
    url: https://github.com/CGUOM/MR-Dentistry
teaser: "portfolio-disgram/mrdentistry.png"
---

![MR Dentistry Demo]({{ '/images/portfolio-disgram/mrdentistry.png' | relative_url }})

- [Demo Video](https://youtu.be/XVS0L4rJ2Es)
- [Code Repository](https://github.com/CGUOM/MR-Dentistry)
- [Raw Recorded Video](https://www.youtube.com/watch?v=Lxs7WFvDDcM)

Orthodontics is a high-demand dental specialty, and mini‑screw insertion is a routine procedure. To minimize the risk of root damage, the ideal approach uses a 3D‑printed surgical guide to indicate the correct insertion trajectory. In practice, however, the procedure is often performed freehand. Mixed Reality (MR) offers a promising alternative: with a reliable mesh aligned to the patient's anatomy in real time, clinicians can visualize, annotate, and adjust the planned trajectory digitally without the need for physical consumables. MR also holds great potential as a training tool, reducing the learning curve for novice clinicians.

Sihong picked up [Ross](https://www.linkedin.com/in/ross-goldbaum-8b8643307)'s prototype and built it into a full pipeline. The system generates multi‑view references from CBCT‑based 3D models to match real perspective distortion. He tuned XFeat [[1]](#ref-1), LightGlue, and PnP for accuracy and speed, calibrated the HoloLens 2 PV camera extrinsics to Unity, tackled HL2SS camera configs (shutter, framerate, intrinsics), and set up multiprocessing + TCP streaming between the PC and HL2. Finally he achieved 22 Hz teeth pose estimation with an 80 ms end‑to‑end latency from video frame capture to pose update in the Unity HoloLens app.

After two months of intensive development, Sihong and supervisor Bin demonstrated the HoloLens 2 system at the University of Melbourne Open Day 2026. Moving forward, they will continue collaborating with researchers at the Dental School to further refine and validate the system.

## References

1. <a id="ref-1"></a>Potje, G., Cadar, F., Araujo, A., Martins, R., & Nascimento, E. R. (2024). XFeat: Accelerated features for lightweight image matching. In 2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) (pp. 2682–2691). IEEE. https://doi.org/10.1109/CVPR52733.2024.00259