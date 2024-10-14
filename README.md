# Northcoders Launchpad - Museum Curator Project
Hosted Site : [Click Here](https://ollie-launchpad.netlify.app/)
## Table of Contents
- [Project Brief](#project-brief)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [API Documentation](#api-documentation)
## Project Brief

__Project Brief :__
"*Users of the platform can enter key terms or choose from presets which will
provide them with a list of artworks to select from. The selected artworks will then
be added to a personalised exhibition. When viewed, the exhibition should
include images and information associated each curated them. Users can
navigate between different artworks, and should be provided with links where
they can find out more information, and where they can see the artwork in
person.*"

__MVP Specification :__ 
- A user can provide some search criteria to filter and sort artworks : ✅
- The artworks can then be saved into a temporary collection, which can be
viewed and expanded : ✅
- Images and core information about the artwork are displayed when a user
interacts with a thumbnail or other indicator of an artwork from the
exhibition : ✅
- The user can select which artworks they want to include in an exhibition
they are creating which persists for the duration of their session : ✅

__Wishlist Specification :__
- Permanence of exhibitions through a user profile and a non-relational BE
to save favourite search combinations : ✅
- Unique shareable links : ✅
- Both a website and a mobile app : ❌
- Social media integration : ❌
- Multiple search and filter criteria : ✅

## Technology Stack

To build this project I used the technologies below. This stack provided a good mix between technology I have used before & that I'm comfortable with and technologies that I haven't used as much but are currently learning (C# & AWS Serverless) providing me with a great learning opportunity.
- Frontend :
	- React.js
	- Bootstrap
	- Vanilla CSS 
- Backend : 
	- C#
	- AWS Lambdas
	- AWS API Gateway 
- Database :
	- DynamoDB 
- Hosting :
	- Netlify 
- Other notable libraries/frameworks :
	- AWS Cloudwatch

## Project Structure

```mermaid 
graph TD A[main.jsx] --> B[HomePage.jsx] A --> C[MyExhibitions.jsx] A --> D[ExploreExhibitions.jsx] A --> E[ExhibitionPage.jsx] A --> F[LikedItemsProvider] B --> G[TopBar] B --> H[SearchResultWrapper] B --> I[PublicExhibitions] B --> J[UserExhibs_SI] B --> K[UserExhibs_SO] H --> L[SearchContainer] H --> M[ResultContainer] L --> N[SearchBuilder] N --> O[SearchButton] M --> P[ItemCard] C --> Q[ExploreUserExhibitions] D --> R[ExplorePubExhibs] E --> S[ItemCardExhib] F --> T[LikedItemsContext] subgraph Components G H I J K L M N O P Q R S end subgraph Context F T end subgraph External APIs API1[/itemSearch Lambda/] API2[/userExhibitions Lambda/] API3[/publicExhibitions Lambda/] API4[/createExhibit Lambda/] API5[/loadExhibit Lambda/] end subgraph Databases DB1[(PublicExhibitions)] DB2[(PrivateExhibitions)] end subgraph External Services ES1[External API 1] ES2[External API 2] end O -->|POST| API1 J -->|GET| API2 I -->|GET| API3 P -->|POST| API4 E -->|GET| API5 Q -->|GET| API2 R -->|GET| API3 API1 -->|Call| ES1 API1 -->|Call| ES2 API2 -->|Read| DB1 API2 -->|Read| DB2 API3 -->|Read| DB1 API4 -->|Write| DB1 API4 -->|Write| DB2 API5 -->|Read| DB1 API5 -->|Read| DB2 style Components fill:#f9f,stroke:#333,stroke-width:2px style Context fill:#bbf,stroke:#333,stroke-width:2px style External APIs fill:#bfb,stroke:#333,stroke-width:2px style Databases fill:#ff9,stroke:#333,stroke-width:2px style External Services fill:#f96,stroke:#333,stroke-width:2px
```

## Features

__Auth Protected Sign In / Sign Out__
- Using Clerk for authentication allowed me to include session persistant exhibitions as I could create & retrieve a unique userID upon sign in allowing me to use it as a key for the DynamoDB tables.

__Search Builder__
- Building the search functionality was fun & ended up being more challenging than orignally thought. Due to different APIs requiring different URL params for their search endpoints, API Gateway having a maximum 30s execution time and the source APIs having different logic methods it meant I had to find solutions to each of these & more which was really enjoyable.

__Exhibition Viewing__
- Having two different  DynamoDB tables allowed me to easily build the 'Public' & 'Private' exhibition viewing galleries. Although I could have built this using one table & checked whether an exibition was public or private when building the response object in the lambda this way felt easier as there was less processing needed.

__Exhibition Creation__
- The ability to save an exhibition is locked behind the Clerk authentication but the ability to view your current liked items is availble to all users. The exhibition creation is handled through a modal with the aim of keeping as much of the process on one page as possible to ensure the user experience is as fluid as possible.

## API Documentation
Part of the core specification for this project was the usage of atleast two free APIs to pull data off of. I used the two APIs listed below due to how the API aggregation Lambda is written however it would be quite trivial to expand this to add new APIs if required / desired.

__Harvard API__
- [Website](https://harvardartmuseums.org/) 
- [Documentation](*https://github.com/harvardartmuseums/api-docs) 

__MET API__
- [Website](https://www.metmuseum.org/) 
- [Documentation](https://metmuseum.github.io/) 
