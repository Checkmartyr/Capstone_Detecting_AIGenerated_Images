# Capstone Project: Detecting AI-Generated Images

## Overview
The rapid advancements in artificial intelligence (AI) today have created increasingly realistic images, presenting a challenge in distinguishing between human-generated and AI-generated images. This project explores the application of deep learning, neural networks, and machine learning to differentiate between human-generated and AI-generated images accurately and effectively.

## Abstract
Our research presents a comprehensive analysis of various deep learning architectures, including traditional machine learning methods. By training models on diverse datasets of human-generated and AI-generated images, we assess performance based on accuracy, precision, recall, and F1 score. Notably, feature extraction using the Gray Level Co-occurrence Matrix (GLCM), combined with traditional machine learning methods, achieves high accuracy in differentiating between the two types of images, with performance comparable to or exceeding that of deep learning. Additionally, we discuss the implications of our findings for digital content and AI ethics, underscoring the potential of AI tools in maintaining the integrity of visual media in an era where AI plays an increasingly significant role.

## Keywords
- AI-generated images
- Gray Level Co-occurrence Matrix (GLCM)
- Image Classification
- Deep Learning
- Machine Learning

## Table of Contents
1. [Introduction](#introduction)
2. [Methodology](#methodology)
   - Data Collection
   - Feature Extraction
   - Model Training
3. [Results](#results)
4. [Discussion](#discussion)
5. [Conclusion](#conclusion)
6. [Future Work](#future-work)
7. [References](#references)

## Introduction
This project aims to address the challenge of distinguishing between human-generated and AI-generated images by leveraging advanced machine learning techniques. The increasing realism of AI-generated images necessitates robust methods to ensure the integrity of visual media.

## Methodology
### Data Collection
Data set This study develops and evaluates different methods using deep learning and learning techniques for the experience between human-generated images and artificial intelligence-generated images, especially by Modeling operations on the set include both human-generated and artificial intelligence-generated images that can be collected from the Hugging Face visibly and used to further understand.
 - A total of 75,000 artificial intelligence-generated images from the [“Dalle3 1 million+ High Quality Captions”](https://huggingface.co/datasets/ProGamerGov/synthetic-dataset-1m-dalle3-high-quality-captions) dataset Some of the images, in particular, were generated from various websites. Focusing on in-depth content, the majority of DALL-E 3 includes a wide selection of imagery powered by other advanced artificial intelligence systems such as Stable Diffusion and Midjourney.
 - A total of 75,000 human-generated images from the dataset.  [“Pixiv-yandere”](https://huggingface.co/datasets/haor/pixiv-yandere) to provide human-generated images on Pixiv.com is also based on DALL-E 3. Images are eaten by other advanced artificial intelligence systems such as Stable Diffusion and Midjourney.
 - Dataset For ML
    - [Train](https://drive.google.com/file/d/1-Xu8c8i3ZNbvX3kAthpGJ_0QOnR91joN/view?usp=drive_link)
    - [Test](https://drive.google.com/file/d/1joPc_WUAGdMnRf98d2vri_Joq4XrL16_/view?usp=drive_link)

### Feature Extraction
Feature extraction was performed using the Gray Level Co-occurrence Matrix (GLCM), which captures texture information from images.

### Model Training
We employed various deep learning architectures and traditional machine learning methods to train models on the extracted features. Performance metrics such as accuracy, precision, recall, and F1 score were used to evaluate the models.

## Results
Our experimental results demonstrate that traditional machine learning methods, combined with GLCM feature extraction, can achieve high accuracy in differentiating between human-generated and AI-generated images. The performance of these methods is comparable to, or exceeds, that of deep learning approaches.

## Discussion
The findings highlight the effectiveness of GLCM-based feature extraction and traditional machine learning methods in image classification tasks. We also discuss the ethical implications of AI-generated content and the importance of maintaining the integrity of digital media.

## Conclusion
This research underscores the potential of AI tools in distinguishing between human-generated and AI-generated images, contributing to the preservation of visual media integrity in an era of rapid AI advancements.

## Future Work
Future research could explore the integration of additional feature extraction techniques and the development of more sophisticated models to further improve classification accuracy.

## References
For detailed references, please refer to the documentation within the repository.

---

For more information, please visit the [repository](https://github.com/Checkmartyr/Capstone_Detecting_AIGenerated_Images.git).
Welcome to the this project project! This repository contains the code and resources for detecting AI-generated images using machine learning techniques.
