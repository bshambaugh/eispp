To better illustrate the original parts of EISPP I chose 4 categories: User Interface, Data Layer, Transport Layer, and Real World Production. This may not be what it is needed when it is fully built out, but perhaps it is a start.

One part of EISPP is a discovery tool. There needs to be a way to find information about products and people and how they collaborate. EISPP as it was envisioned would falls with having the most utilized data stored locally, with access to remote data containing more information about products, people, and their collaboration as needed. It was thought that a natural language query interface fitting in the the User interface and Data Layer Categories would be the best way to access this information with no prior knowledge of the data's structure. The query interface based on PowerAqua would utilize semantic web technologies allowing for data composibility and enhanced query results utilizing and returning ontologies as well as instances thereof for a dynamic marketplace.

Ontologies utilized for the data can be used to further comb through the data once the ontologies are known. Enrico Franconi et al. introduced an ontology browser that can perform this feature. SPARQL, while possibly not a good choice if nothing is known about the underlying data being perused, is included to extend the query result. It is expected that as a consequence of using semantic web technologies that the data will be represented as linked data that will be discoverable within and bridging between remote and local data. This leads to interest in a linked data browser. The fenfire project from SIMILE seemed like a good example. Faceted browsing allows for refinement of the data results based on certain triple patterns in the graph.

Next comes stylizing the data because it is not always easy to read. This, like the previous things mentioned. It fits in the User Interface and Data Layer Categories. OPM, or Object Process Methodology, is possibly the most advanced stylization. OPM creates a layer on top of the data that is both machine and human understandable. GSS URI SPARQL and FRESNEL GSS both use graph stylesheets to stylize the presentation of the data by means of things like shapes and colors. Preferences allows for further refinement by changing the layout alogorithm, modifying the graph stylesheet, and adding further customizations.

Data describing products and people and organizations might be done automatically or semi-automatically today using AI with ActiveGenLink as a possible example, but editing with less automation may also be important. Methods include adding a second file with graph data, of course NLP Edit with ActiveGenLink we already talked about, manual editing of triples, and VRM. VRM is the most advanced and functions as a place to collect query data and save it locally, access and see an overview of local data, merge data graphs with different algorithms if desired, load badges which could be verifiable credentials if extended with cryptography and possibly a ledger, load profiles and groups, modify access control for data, use a wallet to transact with data objects, and add additional data like for issuance, certificates, and supporting parties.

I know that this could be done better. While this is not expected to be exhaustive, more thought needs to be put into merging aggregation of data with the querying of data sections. Deterministic mappings between subgraphs could be considered with applied category theory. Migration to content addressable data over location addressable data could be considered for greater data persistence. Property graph traversal languages like Gremlin could be further explored. Object based access control over list based access control could be considered. Didcomm could be addressed for the IoT/BotQueue section for secure communication.

EISSP WIREFRAMES:

http://bshambaugh.org/eispp/
The narrated animations, or wireframe videos, are also available on YouTube:
https://www.youtube.com/playlist?list=PLbVZNfQhcZ3eG_nbgKbC1KKtMXlIjnEsd

Natural Language Query:

8) Mathieu d'Aquin et al., Watson: Supporting Next Generation Semantic Web Applications, Knowledge Media Institute, The Open University, Milton Keynes, UK, http://watson.kmi.open.ac.uk/DownloadsAndPublications_files/www-int07.pdf

https://web.archive.org/web/20160528122350/http://watson.kmi.open.ac.uk/DownloadsAndPublications_files/www-int07.pdf

https://github.com/mdaquin/Watson-Indexer-

9) Vanessa Lopez et al., PowerMap: Mapping the Real Semantic Web on the Fly, Knowledge Media Institute, The Open University, Milton Keynes, UK, http://technologies.kmi.open.ac.uk/aqualog/powerMap-iswc06-camera-ready.pdf

10) Vanessa Lopez, PowerAqua: Open Question Answering on the Semantic Web, Thesis, Semantic Web and Knowledge Services, 2011, The Open University, Milton Keynes, UK, http://technologies.kmi.open.ac.uk/poweraqua/thesis-master-viva.pdf

11) Miriam Fernandez Sanchez, Semantically enhanced Information Retrieval: an ontology-based approach, Dissertation, 2009, Universidad Autonoma, Madrid,
https://repositorio.uam.es/bitstream/handle/10486/2734/19454_fernandez_sanchez_miriam.pdf?sequence=1&isAllowed=y


Ontology Browser:

https://ceur-ws.org/Vol-565/paper3.pdf


LD Browser:


http://richard.cyganiak.de/2008/papers/fenfire-ldow2008.pdf

https://github.com/tuukka/fenfire-hs

https://github.com/fenfire-org/fenfire-org.github.io


Faceted Browsing:

https://github.com/bshambaugh/longwell-2

https://www.w3.org/2001/sw/wiki/Longwell


OPM:

https://www.cs.uic.edu/~ifc/SWDB/papers/Dori.pdf


GSS URI SPARQL and FRESNEL GSS:

https://inria.hal.science/file/index/docid/56132/filename/fresnel.pdf

https://www.w3.org/2001/11/IsaViz/gss/gssmanual.html


NLP Edit:

http://vldb.org/pvldb/vol5/p1638_robertisele_vldb2012.pdf (ActiveGenLink)


INGA:


https://cs.vu.nl/~frankh/postscript/JWS05.pdf Bibster used by INGA
https://web.archive.org/web/20111227061605/http://bibster.semanticweb.org/

SWARMLINDA:
https://www.mi.fu-berlin.de/inf/research/publications/techreports/tr2008/B-08-06/index.html[Implementation and Evaluation of a SWARMLINDA System]
Generative communication in Linda [https://dl.acm.org/doi/10.1145/2363.2433]


SEMANTIC WEB REASONING BY SWARM INTELLIGENCE:
Kathrin Dentler et al., Semantic Web Reasoning by Swarm Intelligence, Department of Artificial Intelligence, Vrije Universiteit Amsterdam, The Netherlands,
https://web.archive.org/web/20140207185135/http://www.few.vu.nl/~kdr250/publications/Reasoning-by-Swarm-Intelligence.pdf

Dentler uses AgentScape:
https://core.ac.uk/download/pdf/15452862.pdf
https://www.distributed-systems.net/my-data/papers/2002.dke.pdf





