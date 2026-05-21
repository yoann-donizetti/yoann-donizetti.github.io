import agritechHome from "../assets/agritech/home.png";
import agritechPrediction from "../assets/agritech/prediction.png";
import agritechRecommendation from "../assets/agritech/recommendation.png";

import padmonitoring from "../assets/pad/monitoring.png";

export const projectsIntro = {
  section: "Projets",

  title:
    "Des projets orientés données, IA et problématiques métier.",

  description:
    "Une sélection de projets réalisés autour du Machine Learning, du MLOps, des systèmes de recommandation, du RAG et de l’intelligence artificielle appliquée à des problématiques concrètes."
};

/* ========================================
   FEATURED PROJECTS
======================================== */

export const featuredProjects = [

  {
    title:
      "Agritech — Système de recommandation agricole",

    category:
      "Machine Learning • API • Monitoring",

    description:
      "Plateforme de recommandation agricole basée sur l’analyse de données climatiques et agronomiques, avec API de prédiction et monitoring temps réel.",

    stack: [
      "Python",
      "Scikit-learn",
      "FastAPI",
      "Pandas",
      "Hugging Face",
      "Monitoring",
      "CI/CD"
    ],

    previews: [
      agritechHome,
      agritechPrediction,
      agritechRecommendation
    ],

    highlights: [
      "Fusion de multiples datasets agricoles",
      "Système de recommandation orienté métier",
      "API de prédiction déployée",
      "Monitoring des performances",
      "Architecture orientée MLOps"
    ],

    github:
      "https://github.com/yoann-donizetti/agritech-answers",

    demo:
      "https://huggingface.co/spaces/donizetti-yoann/agritech-front",

    api:
      "https://huggingface.co/spaces/donizetti-yoann/agritech-api",

    monitoring:
      "https://huggingface.co/spaces/donizetti-yoann/agritech-monitoring"
  },

  {
    title:
      "Prêt-à-dépenser — Pipeline MLOps de scoring crédit",

    category:
      "MLOps • Machine Learning • API",

    description:
      "Développement et industrialisation d’un pipeline de scoring crédit intégrant entraînement, tracking MLflow, monitoring, API de prédiction et CI/CD.",

    stack: [
      "Python",
      "MLflow",
      "LightGBM",
      "FastAPI",
      "GitHub Actions",
      "Docker",
      "Monitoring"
    ],

    highlights: [
      "Tracking des expérimentations avec MLflow",
      "Pipeline d’entraînement structuré",
      "CI/CD automatisé",
      "API de scoring déployée",
      "Monitoring du modèle et optimisation métier du seuil"
    ],

    previews: [
      padmonitoring
    ],

    github:
      "https://github.com/yoann-donizetti/pret_a_depenser",

    api:
      "https://huggingface.co/spaces/donizetti-yoann/pret-a-depenser-api",

    monitoring:
      "https://huggingface.co/spaces/donizetti-yoann/pret_a_depenser_monitoring"
  },

  {
    title:
      "Puls Events — Système RAG événementiel",

    category:
      "RAG • NLP • IA générative",

    description:
      "Conception d’un assistant conversationnel basé sur un système RAG permettant de rechercher et recommander des événements culturels à partir de données OpenAgenda.",

    stack: [
      "Python",
      "LangChain",
      "FAISS",
      "Mistral AI",
      "RAGAS",
      "FastAPI"
    ],

    highlights: [
      "Pipeline RAG complet avec recherche vectorielle",
      "Évaluation automatisée via RAGAS",
      "Optimisation du retrieval",
      "Approche orientée recommandation utilisateur"
    ],

    github:
      "https://github.com/yoann-donizetti/puls-events-rag"
  },

  {
    title:
      "SportSee — Évaluation de performances de LLM",

    category:
      "LLM • IA générative • Évaluation",

    description:
      "Analyse et évaluation des performances de modèles de langage avec mise en place de métriques de qualité, d’évaluation automatisée et d’analyse de réponses IA.",

    stack: [
      "Python",
      "LLM",
      "RAGAS",
      "NLP",
      "Evaluation",
      "Machine Learning"
    ],

    highlights: [
      "Évaluation de réponses IA",
      "Analyse de qualité des générations",
      "Métriques d’évaluation automatisées",
      "Approche orientée performance et fiabilité"
    ],

    github:
      "https://github.com/yoann-donizetti/sportsee"
  }
];

/* ========================================
   OTHER PROJECTS
======================================== */

export const otherProjects = [

  {
    title:
      "Seattle Energy — Analyse des besoins énergétiques des bâtiments",

    description:
      "Prédiction de consommation énergétique et analyse des facteurs d’émissions carbone des bâtiments non résidentiels.",

    github:
      "https://github.com/yoann-donizetti/seattle-energy"
  },

  {
    title:
      "TechNova — Analyse des causes de démission",

    description:
      "Analyse RH et modélisation prédictive visant à identifier les facteurs influençant le départ des employés et à réduire le turnover.",

    github:
      "https://github.com/yoann-donizetti/technova-attrition-analysis"
  },

  {
    title:
      "Academy — Analyse de systèmes éducatifs",

    description:
      "Analyse exploratoire de données éducatives internationales afin d’identifier les pays à fort potentiel pour une stratégie d’expansion EdTech.",

    github:
      "https://github.com/yoann-donizetti/academy"
  },

{
  title:
    "BrainScanAI — Imagerie médicale semi-supervisée",

  description:
    "Pipeline de Computer Vision appliqué à la détection de tumeurs cérébrales via deep learning, clustering et apprentissage semi-supervisé.",

  github:
    "https://github.com/yoann-donizetti/brainscanai-medical-imaging"
},

  {
    title:
      "TechNova ML API — Déploiement de modèle",

    description:
      "POC de mise en production d’un modèle Machine Learning via une API FastAPI, avec tests unitaires Pytest et gestion de version Git.",

    github:
      "https://github.com/yoann-donizetti/technova-ml-api"
  },

  {
  title:
    "Fashion Insta — Cadrage stratégique d’un projet IA",

  description:
    "Conception d’un cadrage Data & IA pour une application de recommandation mode incluant system design, roadmap produit, estimation des coûts, gouvernance des profils Data et projection du ROI.",

  

  slides:
    "/slides/fashioninsta-strategy.pdf"
}
];

/* ========================================
   PERSONAL PROJECTS
======================================== */

export const personalProjects = [

  {
    title:
      "CollectionLens",

    description:
      "Projet personnel orienté data et recommandation intelligente autour de la gestion de collections mangas, comics et jeux vidéo.",

    status:
      "En développement",

    github: "https://github.com/yoann-donizetti/collectionlens",
  }
];