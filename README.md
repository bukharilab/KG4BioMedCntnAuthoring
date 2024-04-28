# Enhancing Biomedical Knowledge Representation Through Knowledge Graphs
Even considering the significant enhancements by the social-technical and personalized approaches, there were still some flaws left unaddressed in the current methodology. Firstly, annotation recommendations were isolated to separate community posts and direct collaboration with personalized experts. This leads to difficulty in accessing the most up to date information on the most optimal annotation recommendations immediately. Previously, Semantically stored its data in a tabular format in MySQL. Due to this, the data lacks machine-readability and the meanings behind different entities (Questions, replies, ontologies, vote tally etc.) and their relationships is obscured. With these shortcomings in mind, we propose to further extend the methodology by integrating a Knowledge Graph based recommendaiton system that provides an environment for exploring the most optimal annotation recommendations retrieved in the form of a knowledge graph. 

## Abstract
The rise in online biomedical information has led to challenges in data retrieval, primarily due to insufficient semantic metadata. While semantic annotators have advanced in addressing this problem, they still lack accuracy, speed, and, most importantly, dynamic knowledge representation—an essential aspect of AI that enables human-like reasoning. Several techniques to achieve knowledge representation, such as Knowledge Graphs, have been introduced to improve current systems in many domains, including the biomedical domain. Knowledge Graphs, recognized for their semantic richness, show promise in enhancing the biomedical semantic annotation process. We propose a knowledge graph-based recommendation system, augmented with NLP for search queries, designed for the Semantically biomedical content annotation platform. This system aims to provide quick and easy access to optimal, machine-readable recommendations and graphically visualize recommendations in a knowledge graph format. Still, to build the knowledge graph and the interface, we had to address challenges and issues with the current system. Semantically uses a relational schema for data storage, which does not support machine-readable content that would allow search engines to understand and suggest annotations easily. Inherent differences in the sequential query language and cipher language mean that the backend for data manipulation must be rewritten entirely to support Neo4j operations. A knowledge graph interface with graph visualizations was also needed to present optimal recommendations to users. Our approach to these challenges is to migrate the MySQL database to a Neo4j database to create a knowledge graph database. Then, we rewrote the backend to connect to Neo4j and support cipher language queries. Using data visualization JavaScript libraries like D3.js, we wrote a knowledge graph interface that returns a graph visualization of annotation recommendations obtained from the knowledge graph. We verify the effectiveness of the knowledge graph through an evaluation survey taken by 20 people, testing its ability to represent knowledge dynamically. The results show a mostly positive reception for all positive and negative system characteristics, with crucial metrics such as speed, precision, and clarity with agreement percentages of 100%, 95%, and 95%, respectively.  A demo of the knowledge graph-based recommendation system is available at (https://github.com/bukharilab/KG4BioMedCntnAuthoring/tree/neo4j_setup). 

## Methodology

### Figure 2.1 Semantically+Dynamic Knowledge Graph Representation and Interface
![alt-text](https://github.com/SebC750/SebC750.github.io/blob/1b378e8297c78b594c6c2aee1308ec6b559232cb/media/images/KG_Semantically_Workflow_bg.png)
### Figure 2.2 Dynamic Knowledge Graph Recommendation System and Functionality
![alt-text](https://github.com/SebC750/SebC750.github.io/blob/1b378e8297c78b594c6c2aee1308ec6b559232cb/media/images/KG_Development_Process_bg.png)
### Figure 2.3 Results of a Neo4j domain expert cypher query
![image](https://github.com/bukharilab/KG4BioMedCntnAuthoring/assets/75767177/62ea2823-3cad-4398-816d-5b563edefbf3)
### Figure 2.4 Results of a search query for the term “sleep paralysis”
![image](https://github.com/bukharilab/KG4BioMedCntnAuthoring/assets/75767177/54ab0313-0a32-4984-9d63-f932468a1241)
### Figure 2.5 Recommendation Rankings for "Sleep paralysis"
![alt-text](https://github.com/bukharilab/KG4BioMedCntnAuthoring/assets/75767177/f90bc5bb-91b7-4ca8-af38-9e05383934b0)
### Figure 2.6 Breakdown of the Wilson score formula
![image](https://github.com/bukharilab/KG4BioMedCntnAuthoring/assets/75767177/3b7d24b8-ea4d-430c-9151-aad7a3a4945a)

## Results
### Figure 3.1 Distribution of Responses Bar Chart
![image](https://github.com/bukharilab/KG4BioMedCntnAuthoring/assets/75767177/e044bf36-f866-4a52-abe2-9fd3136852ae)

### Figure 3.2 Distribution of Responses Tab
![image](https://github.com/bukharilab/KG4BioMedCntnAuthoring/assets/75767177/9fec22b5-b9e3-49d8-9d06-c7d4ef2f858e)

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

## Related Research Papers and Literature

| Authors                                                                       | Title                                                                                                                                 | Paper Link                                                                                               |   Year |
|:------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------|-------:|
| N. Fiorini, D. J. Lipman, Z. Lu                                               | Towards PubMed 2.0                                                                                                                    | https://doi.org/10.7554/eLife.28801                                                                      |   2017 |
| E. W. Sayers et al.                                                           | Database resources of the National Center for Biotechnology Information.                                                              | https://doi.org/10.1093/nar/gkaa892                                                                      |   2021 |
| R. Davis, H. Shrobe, P. Szolovits                                             | What Is a Knowledge Representation?                                                                                                   | https://ojs.aaai.org/aimagazine/index.php/aimagazine/article/view/1029                                   |   1993 |
| J. P. Delgrande, B. Glimm, T. Meyer, M. Truszczynski, F. Wolter               | Current and Future Challenges in Knowledge Representation and Reasoning                                                               | http://arxiv.org/abs/2308.04161                                                                          |   2023 |
| R. Chandra, S. Tiwari, S. Agarwal, N. Singh                                   | Semantic web-based diagnosis and treatment of vector-borne diseases using SWRL rules                                                  | https://doi.org/10.1016/j.knosys.2023.110645                                                             |   2023 |
| Y. Shen, C. Guo, H. Li, J. Chen, Y. Guo, X. Qiu                               | Financial Feature Embedding with Knowledge Representation Learning for Financial Statement Fraud Detection                            | https://doi.org/10.1016/j.procs.2021.04.110                                                              |   2021 |
| M. Waibel et al.                                                              | RoboEarth                                                                                                                             | https://doi.org/10.1109/MRA.2011.941632                                                                  |   2011 |
| A. Ait-Mlouk, L. Jiang                                                        | KBot: A Knowledge Graph Based ChatBot for Natural Language Understanding Over Linked Data                                             | https://doi.org/10.1109/ACCESS.2020.3016142                                                              |   2020 |
| E. Tseytlin, K. Mitchell, E. Legowski, J. Corrigan, G. Chavan, R. S. Jacobson | NOBLE – Flexible concept recognition for large-scale biomedical natural language processing                                           | https://doi.org/10.1186/s12859-015-0871-y                                                                |   2016 |
| D. Campos, S. Matos, J. L. Oliveira                                           | A modular framework for biomedical concept recognition                                                                                | https://doi.org/10.1186/1471-2105-14-281                                                                 |   2013 |
| N. H. Shah, N. Bhatia, C. Jonquet, D. Rubin, A. P. Chiang, M. A. Musen        | Comparison of concept recognizers for building the Open Biomedical Annotator.                                                         | https://doi.org/10.1186/1471-2105-10-S9-S14                                                              |   2009 |
| C. Jonquet, N. H. Shah, C. H. Youn, M. A. Musen, C. Callendar, M.-A. Storey   | NCBO Annotator: Semantic Annotation of Biomedical Data                                                                                | https://www.researchgate.net/publication/228837476_NCBO_Annotator_Semantic_Annotation_of_Biomedical_Data |   2009 |
| A. R. Aronson                                                                 | Effective mapping of biomedical text to the UMLS Metathesaurus: the MetaMap program.                                                  | https://pubmed.ncbi.nlm.nih.gov/11825149/                                                                |   2001 |
| A. Rossanez, J. C. dos Reis, R. da S. Torres, H. de Ribaupierre               | KGen: a knowledge graph generator from biomedical scientific literature                                                               | https://doi.org/10.1186/s12911-020-01341-5                                                               |   2020 |
| T. Ruan, Y. Huang, X. Liu, Y. Xia, J. Gao                                     | QAnalysis: A question-answer driven analytic tool on knowledge graphs for leveraging electronic medical records for clinical research | https://doi.org/10.1186/s12911-019-0798-8                                                                |   2019 |
| D. Domingo-Fernández et al.                                                   | Multimodal mechanistic signatures for neurodegenerative diseases (NeuroMMSig): a web server for mechanism enrichment                  | https://doi.org/10.1093/bioinformatics/btx399                                                            |   2017 |
| X. He et al.                                                                  | ALOHA: developing an interactive graph-based visualization for dietary supplement knowledge graph through user-centered design.       | https://doi.org/10.1186/s12911-019-0857-1                                                                |   2019 |
| R. Wang, Z. Yang                                                              | SQL vs NoSQL: A Performance Comparison                                                                                                | https://www.cs.rochester.edu/courses/261/fall2017/termpaper/submissions/06/Paper.pdf                     |   2017 |
| W. Khan, W. Ahmad, B. Luo, E. Ahmed                                           | SQL Database with physical database tuning technique and NoSQL graph database comparisons                                             | https://doi.org/10.1109/ITNEC.2019.8729264                                                               |   2019 |
| L. Stanescu                                                                   | A Comparison between a Relational and a Graph Database in the Context of a Recommendation System                                      | https://doi.org/10.15439/2021f33                                                                         |   2021 |
| D. Ringler, H. Paulheim                                                       | One Knowledge Graph to Rule Them All? Analyzing the Differences Between DBpedia, YAGO, Wikidata & co.                                 | https://doi.org/10.1007/978-3-319-67190-1_33                                                             |   2017 |
| J. D’Souza, A. P. K., D. S., C. Fernandes, K. M. Kavitha, C. Naik             | Knowledge-Based Scene Graph Generation in Medical Field                                                                               | https://doi.org/10.1109/DISCOVER58830.2023.10316715                                                      |   2023 |
| G. Gawriljuk, A. Harth, C. A. Knoblock, P. Szekely                            | A Scalable Approach to Incrementally Building Knowledge Graphs                                                                        | https://doi.org/10.1007/978-3-319-43997-6_15                                                             |   2016 |
| V. V. Nigam, S. Paul, A. P. Agrawal, R. Bansal                                | A Review Paper On The Application Of Knowledge Graph On Various Service Providing Platforms                                           | https://doi.org/10.1109/Confluence47617.2020.9058298                                                     |   2020 |
| A. Abbas, M. Khalid, S. Chalarca, F. Keshtkar, S. A. C. Bukhari               | Enhancing Biomedical Semantic Annotations through a Knowledge Graph-Based Approach                                                    | https://doi.org/10.32473/flairs.36.133253                                                                |   2023 |
| A. Abbas, S. Mbouadeu, T. Hameed, S. Bukhari                                  | Personalized Semantic Annotation Recommendations on Biomedical Content Through an Expanded Socio-Technical Approach                   | https://doi.org/10.5220/0011926700003414                                                                 |   2023 |
| A. Abbas, T. Hameed, F. Keshtkar, S. Kadry, S. A. C. Bukhari                  | A socio-technical approach to trustworthy semantic biomedical content generation and sharing                                          | https://doi.org/10.1016/j.ins.2024.120441                                                                |   2024 |
| E. B. Wilson                                                                  | Probable Inference, the Law of Succession, and Statistical Inference                                                                  | https://doi.org/10.1080/01621459.1927.10502953                                                           |   1927 |

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

  The demo page for the Knowledge Graph based Recommendation System is now live at: (https://sebc750.github.io/). You may look at the provided media to evaluate the current system and provide feedback through the survey below the page. The demo page and survey is translatable to both English and Spanish.

# Semantically Editor Demo Click to watch
[![Demo CountPages alpha](https://github.com/bukharilab/Semantically/blob/master/landing/src/demo_img.png)](https://gosemantically.com/)

# Project Log
![alt text](https://github.com/ahmadchan/Semantically/blob/master/logo.png)

# A project by:

![alt text](http://bukharilab.org/wp-content/uploads/2021/05/bukharilab-removebg-preview-1.png)

