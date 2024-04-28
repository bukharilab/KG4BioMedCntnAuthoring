# Enhancing Biomedical Knowledge Representation Through Knowledge Graphs
Even considering the significant enhancements by the social-technical and personalized approaches, there were still some flaws left unaddressed in the current methodology. Firstly, annotation recommendations were isolated to separate community posts and direct collaboration with personalized experts. This leads to difficulty in accessing the most up to date information on the most optimal annotation recommendations immediately. Previously, Semantically stored its data in a tabular format in MySQL. Due to this, the data lacks machine-readability and the meanings behind different entities (Questions, replies, ontologies, vote tally etc.) and their relationships is obscured. With these shortcomings in mind, we propose to further extend the methodology by integrating a Knowledge Graph based recommendaiton system that provides an environment for exploring the most optimal annotation recommendations retrieved in the form of a knowledge graph. 

## Abstract
The rise in online biomedical information has led to challenges in data retrieval, primarily due to insufficient semantic metadata. While semantic annotators have advanced in addressing this problem, they still lack accuracy, speed, and, most importantly, dynamic knowledge representation—an essential aspect of AI that enables human-like reasoning. Several techniques to achieve knowledge representation, such as Knowledge Graphs, have been introduced to improve current systems in many domains, including the biomedical domain. Knowledge Graphs, recognized for their semantic richness, show promise in enhancing the biomedical semantic annotation process. We propose a knowledge graph-based recommendation system, augmented with NLP for search queries, designed for the Semantically biomedical content annotation platform. This system aims to provide quick and easy access to optimal, machine-readable recommendations and graphically visualize recommendations in a knowledge graph format. Still, to build the knowledge graph and the interface, we had to address challenges and issues with the current system. Semantically uses a relational schema for data storage, which does not support machine-readable content that would allow search engines to understand and suggest annotations easily. Inherent differences in the sequential query language and cipher language mean that the backend for data manipulation must be rewritten entirely to support Neo4j operations. A knowledge graph interface with graph visualizations was also needed to present optimal recommendations to users. Our approach to these challenges is to migrate the MySQL database to a Neo4j database to create a knowledge graph database. Then, we rewrote the backend to connect to Neo4j and support cipher language queries. Using data visualization JavaScript libraries like D3.js, we wrote a knowledge graph interface that returns a graph visualization of annotation recommendations obtained from the knowledge graph. We verify the effectiveness of the knowledge graph through an evaluation survey taken by 20 people, testing its ability to represent knowledge dynamically. The results show a mostly positive reception for all positive and negative system characteristics, with crucial metrics such as speed, precision, and clarity with agreement percentages of 100%, 95%, and 95%, respectively.  A demo of the knowledge graph-based recommendation system is available at https://github.com/bukharilab/KG4BioMedCntnAuthoring/tree/neo4j_setup). 

## Project Demo Materials

### Use-Case Scenario for Medical Term "Virus-Replication-Cycle"
(https://github.com/SebC750/SebC750.github.io/blob/9987f555ec09dee86a7608b140ab2d573ecaebd8/media/Knowledge-graph-result.mp4)

### User Knowledge Graph Example
(https://github.com/SebC750/SebC750.github.io/blob/9987f555ec09dee86a7608b140ab2d573ecaebd8/media/User-KG-result.mp4)

### Medical Term Knowledge Graph Example
(https://github.com/SebC750/SebC750.github.io/blob/9987f555ec09dee86a7608b140ab2d573ecaebd8/media/medical_term-KG-result.mp4)

### Ontology Knowledge Graph Example
(https://github.com/SebC750/SebC750.github.io/blob/9987f555ec09dee86a7608b140ab2d573ecaebd8/media/Ontology-KG-result1.mp4)

## 🛠 Technologies
### Front End
HTML, CSS, javascript bootstrap, jquery

### Backend
PHP and Python

### Framework
React Js, Flask


## Project Team
- [Sebastian Chalarca](https://www.linkedin.com/in/sebastian-chalarca-603939201/)
- [Dr.Syed Ahmad Chan Bukhari (PI)](https://www.stjohns.edu/academics/faculty/syed-ahmad-chan-bukhari)
- [Asim Abbas](https://www.linkedin.com/in/asim-abbas-b2891ab8/)
- [Mutahira Khalid](https://www.linkedin.com/in/mutahira-khalid-9b3327221/)
- [Dr,Fazel Keshtkar](https://www.stjohns.edu/academics/faculty/fazel-keshtkar)

## Published Related Research Papers

| Authors | Title | Paper Link | Year|
| --- | --- | --- | --- |
| [Asim Abbas et al.](https://scholar.google.com/citations?hl=en&user=gNtO-mYAAAAJ&view_op=list_works&sortby=pubdate) | Enhancing Biomedical Semantic Annotations through a Knowledge Graph-Based Approach | [Paper Link](https://www.researchgate.net/publication/370619237_Enhancing_Biomedical_Semantic_Annotations_through_a_Knowledge_Graph-Based_Approach) | 2023 |
| [Asim Abbas et al.](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gNtO-mYAAAAJ&sortby=pubdate&citation_for_view=gNtO-mYAAAAJ:mVmsd5A6BfQC) | Personalized Semantic Annotation Recommendations on Biomedical Content Through an Expanded Socio-Technical Approach | [Paper Link](https://www.researchgate.net/publication/369015366_Personalized_Semantic_Annotation_Recommendations_on_Biomedical_Content_Through_an_Expanded_Socio-Technical_Approach) | 2023 |
| [Asim Abbas et al.](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gNtO-mYAAAAJ&sortby=pubdate&citation_for_view=gNtO-mYAAAAJ:qxL8FJ1GzNcC) | Proficient Annotation Recommendation in a Biomedical Content Authoring Environment | [Paper Link](https://www.researchgate.net/publication/365351492_Proficient_Annotation_Recommendation_in_a_Biomedical_Content_Authoring_Environment) | 2022 |
| [Asim Abbas et al.](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gNtO-mYAAAAJ&sortby=pubdate&citation_for_view=gNtO-mYAAAAJ:4DMP91E08xMC) | A Decentralized Environment for Biomedical Semantic Content Authoring and Publishing | [Paper Link](https://www.researchgate.net/publication/367975893_A_Decentralized_Environment_for_Biomedical_Semantic_Content_Authoring_and_Publishing) | 2022 |
| [Asim Abbas et al.](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gNtO-mYAAAAJ&sortby=pubdate&citation_for_view=gNtO-mYAAAAJ:Zph67rFs4hoC) | Biomedical scholarly article editing and sharing using holistic semantic uplifting approach | [Paper Link](https://www.researchgate.net/publication/360382563_Biomedical_Scholarly_Article_Editing_and_Sharing_using_Holistic_Semantic_Uplifting_Approach) | 2022 |
| [Asim Abbas et al.](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gNtO-mYAAAAJ&sortby=pubdate&citation_for_view=gNtO-mYAAAAJ:aqlVkmm33-oC) | Optimizing Semantic Enrichment of Biomedical Content through Knowledge Sharing | [Paper Link](https://www.researchgate.net/publication/366177701_Optimizing_Semantic_Enrichment_of_Biomedical_Content_through_Knowledge_Sharing) | 2022 |
| [Steve Mbouadeu et al.](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gNtO-mYAAAAJ&sortby=pubdate&citation_for_view=gNtO-mYAAAAJ:KlAtU1dfN6UC) | A Sociotechnical Framework for Semantic Biomedical Content Authoring and Publishing | [Paper Link](https://www.researchgate.net/publication/360380925_A_Sociotechnical_Framework_for_Semantic_Biomedical_Content_Authoring_and_Publishing) | 2022 |
| [Steve Mbouadeu et al.](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gNtO-mYAAAAJ&sortby=pubdate&citation_for_view=gNtO-mYAAAAJ:kNdYIx-mwKoC) | Towards Structured Biomedical Content Authoring and Publishing | [Paper Link](https://www.researchgate.net/publication/359427284_Towards_Structured_Biomedical_Content_Authoring_and_Publishing) | 2022 |

# Installation and Deployment
## Database setup
```bash
  1. Download and install Xampp or Wamp on your system 
  2. Connect to the Neo4j Aura database by accessing the database.php file and replace the the ClientBuilder driver credentials with the following:

   -  Connection_URL: neo4j+s://9b2ba3a3.databases.neo4j.io
   -  Password: Rs6ohkABtkf3O-l4w73N5n_DRpwRqVosjSyQxT6sABE
   *The code should look as follows: $client = ClientBuilder::create()
    ->withDriver('bolt', 'neo4j+s://9b2ba3a3.databases.neo4j.io', Authenticate::basic('neo4j', 'Rs6ohkABtkf3O-l4w73N5n_DRpwRqVosjSyQxT6sABE'))
    ->build();
  4. Open 'Semantically => api => config'  folder then 'database.php' file and setup database path
  5. Open 'Semantically => src' folder then 'appinfo.js' and setup php folder path 
```
## Run Semantically
```bash
  1. npm start
```
# Knowledge Graph Based Recommendation System Demo Page
```
  The demo page for the Knowledge Graph based Recommendation System is now live at: https://sebc750.github.io/. You may look at the provided media to evaluate the current system and provide feedback through the survey below the page. The demo page and survey is translatable to both English and Spanish.
```
# Semantically Editor Demo Click to watch
[![Demo CountPages alpha](https://github.com/bukharilab/Semantically/blob/master/landing/src/demo_img.png)](https://gosemantically.com/)

# Project Log
![alt text](https://github.com/ahmadchan/Semantically/blob/master/logo.png)

# A project by:

![alt text](http://bukharilab.org/wp-content/uploads/2021/05/bukharilab-removebg-preview-1.png)

