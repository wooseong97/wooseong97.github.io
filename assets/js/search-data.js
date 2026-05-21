// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order. (* denotes equal contribution.)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-our-paper-quantifying-task-priority-for-multi-task-optimization-has-been-accepted-to-cvpr-2024",
          title: 'Our paper, “Quantifying Task Priority for Multi-Task Optimization”, has been accepted to CVPR...',
          description: "",
          section: "News",},{id: "news-our-paper-multi-view-3d-scene-abstraction-from-drone-captured-rgb-images-has-been-published-in-ieee-access",
          title: 'Our paper, “Multi-View 3D Scene Abstraction From Drone-Captured RGB Images”, has been published...',
          description: "",
          section: "News",},{id: "news-our-paper-selective-task-group-updates-for-multi-task-optimization-has-been-accepted-to-iclr-2025",
          title: 'Our paper, “Selective Task Group Updates for Multi-Task Optimization”, has been accepted to...',
          description: "",
          section: "News",},{id: "news-our-paper-dc-tta-divide-and-conquer-framework-for-test-time-adaptation-of-interactive-segmentation-has-been-accepted-to-iccv-2025",
          title: 'Our paper, “DC-TTA: Divide-and-Conquer Framework for Test-Time Adaptation of Interactive Segmentation”, has been...',
          description: "",
          section: "News",},{id: "news-excited-to-announce-that-4-of-our-papers-have-been-accepted-to-iccv-2025",
          title: 'Excited to announce that 4 of our papers have been accepted to ICCV...',
          description: "",
          section: "News",},{id: "news-our-paper-interaction-merged-motion-planning-effectively-leveraging-diverse-motion-datasets-for-robust-planning-has-been-accepted-to-iccv-2025",
          title: 'Our paper, “Interaction-Merged Motion Planning: Effectively Leveraging Diverse Motion Datasets for Robust Planning”,...',
          description: "",
          section: "News",},{id: "news-our-paper-resolving-token-space-gradient-conflicts-token-space-manipulation-for-transformer-based-multi-task-learning-has-been-accepted-to-iccv-2025",
          title: 'Our paper, “Resolving Token-Space Gradient Conflicts: Token Space Manipulation for Transformer-Based Multi-Task Learning”,...',
          description: "",
          section: "News",},{id: "news-our-paper-synchronizing-task-behavior-aligning-multiple-tasks-during-test-time-training-has-been-accepted-to-iccv-2025",
          title: 'Our paper, “Synchronizing Task Behavior: Aligning Multiple Tasks during Test-Time Training”, has been...',
          description: "",
          section: "News",},{id: "news-our-paper-interaction-merged-motion-planning-effectively-leveraging-diverse-motion-datasets-for-robust-planning-has-been-accepted-to-iccv-2025-as-a-highlight-presentation",
          title: 'Our paper, “Interaction-Merged Motion Planning: Effectively Leveraging Diverse Motion Datasets for Robust Planning”,...',
          description: "",
          section: "News",},{id: "news-our-paper-stabilizing-multi-task-latent-spaces-recursive-refinement-with-coordinators-in-partially-labeled-learning-has-been-published-in-ieee-access",
          title: 'Our paper, “Stabilizing Multi-Task Latent Spaces: Recursive Refinement with Coordinators in Partially Labeled...',
          description: "",
          section: "News",},{id: "news-our-paper-label-free-cross-task-lora-merging-with-null-space-compression-has-been-accepted-to-cvpr-2026",
          title: 'Our paper, “Label-Free Cross-Task LoRA Merging with Null-Space Compression”, has been accepted to...',
          description: "",
          section: "News",},{id: "news-our-paper-preference-aligned-lora-merging-preserving-subspace-coverage-and-addressing-directional-anisotropy-has-been-accepted-to-cvpr-2026",
          title: 'Our paper, “Preference-Aligned LoRA Merging: Preserving Subspace Coverage and Addressing Directional Anisotropy”, has...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%74%6B%31%34%35%37%30@%6B%61%69%73%74.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/wooseong97", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/wooseongjeong", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=o3eMeC8AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
