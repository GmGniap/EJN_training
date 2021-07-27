(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),r=(n(0),n(87)),o={sidebar_label:"Hands On Course",title:" "},s={unversionedId:"04-HandsOnCourse",id:"04-HandsOnCourse",isDocsHomePage:!1,title:" ",description:"Data Engineering Course: Building A Data Platform",source:"@site/docs/04-HandsOnCourse.md",slug:"/04-HandsOnCourse",permalink:"/EJN_training/docs/04-HandsOnCourse",version:"current",sidebar_label:"Hands On Course",sidebar:"projectsSidebar",previous:{title:" ",permalink:"/EJN_training/docs/03-AdvancedSkills"},next:{title:" ",permalink:"/EJN_training/docs/05-CaseStudies"}},c=[{value:"Contents",id:"contents",children:[]},{value:"What We Want To Do",id:"what-we-want-to-do",children:[]},{value:"Thoughts On Choosing A Development Environment",id:"thoughts-on-choosing-a-development-environment",children:[]},{value:"A Look Into the Twitter API",id:"a-look-into-the-twitter-api",children:[]},{value:"Ingesting Tweets with Apache Nifi",id:"ingesting-tweets-with-apache-nifi",children:[]},{value:"Writing from Nifi to Apache Kafka",id:"writing-from-nifi-to-apache-kafka",children:[]},{value:"Apache Zeppelin",id:"apache-zeppelin",children:[{value:"Install and Ingest Kafka Topic",id:"install-and-ingest-kafka-topic",children:[]},{value:"Processing Messages with Spark and SparkSQL",id:"processing-messages-with-spark-and-sparksql",children:[]},{value:"Visualizing Data",id:"visualizing-data",children:[]}]},{value:"Switch Processing from Zeppelin to Spark",id:"switch-processing-from-zeppelin-to-spark",children:[{value:"Install Spark",id:"install-spark",children:[]},{value:"Ingest Messages from Kafka",id:"ingest-messages-from-kafka",children:[]},{value:"Writing from Spark to Kafka",id:"writing-from-spark-to-kafka",children:[]},{value:"Move Zeppelin Code to Spark",id:"move-zeppelin-code-to-spark",children:[]}]}],p={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"data-engineering-course-building-a-data-platform"},"Data Engineering Course: Building A Data Platform"),Object(r.b)("h2",{id:"contents"},"Contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/EJN_training/docs/04-HandsOnCourse#what-we-want-to-do"},"What We Want To Do")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/EJN_training/docs/04-HandsOnCourse#thoughts-on-choosing-a-development-environment"},"Thoughts On Choosing A Development Environment")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/EJN_training/docs/04-HandsOnCourse#a-look-into-the-twiiter-api"},"A Look Into the Twitter API")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/EJN_training/docs/04-HandsOnCourse#ingesting-tweets-with-apache-nifi"},"Ingesting Tweets with Apache Nifi")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/EJN_training/docs/04-HandsOnCourse#writing-from-nifi-to-kafka"},"Writing from Nifi to Apache Kafka")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/EJN_training/docs/04-HandsOnCourse#apache-zeppelin"},"Apache Zeppelin"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/EJN_training/docs/04-HandsOnCourse#install-and-ingest-kafka-topic"},"Install and Ingest Kafka Topic")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/EJN_training/docs/04-HandsOnCourse#processing-messages-with-spark-and-sparksql"},"Processing Messages with Spark & SparkSQL")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/EJN_training/docs/04-HandsOnCourse#visualizing-data"},"Visualizing Data")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/EJN_training/docs/04-HandsOnCourse#switch-processing-from-zeppelin-to-spark"},"Switch Processing from Zeppelin to Spark"))),Object(r.b)("h2",{id:"what-we-want-to-do"},"What We Want To Do"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Twitter data to predict best time to post using the hashtag\ndatascience or ai")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Find top tweets for the day")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Top users")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Analyze sentiment and keywords"))),Object(r.b)("h2",{id:"thoughts-on-choosing-a-development-environment"},"Thoughts On Choosing A Development Environment"),Object(r.b)("p",null,"For a local environment you need a good PC. I thought a bit about a\nbudget build around 1.000 Dollars or Euros."),Object(r.b)("p",null,"| Podcast Episode: #068 How to Build a Budget Data Science PC\n|------------------|\n|In this podcast we look into con\ufb01guring a sub 1000 dollar PC for data engineering and machine learning.\n| ",Object(r.b)("a",{parentName:"p",href:"https://youtu.be/00NWR-II6ek"},"Watch on YouTube")," \\ ",Object(r.b)("a",{parentName:"p",href:"https://anchor.fm/andreaskayy/episodes/068-A-Budget-Data-Science-PC-Build-e45inh"},"Listen on Anchor"),"|"),Object(r.b)("h2",{id:"a-look-into-the-twitter-api"},"A Look Into the Twitter API"),Object(r.b)("p",null,"| Podcast Episode: #081 Twitter API Research\n|------------------|\n|In this podcast we were looking into how the Twitter API works and how you get access to it.\n| ",Object(r.b)("a",{parentName:"p",href:"https://youtu.be/UnAXKxeIlyg"},"Watch on YouTube")),Object(r.b)("h2",{id:"ingesting-tweets-with-apache-nifi"},"Ingesting Tweets with Apache Nifi"),Object(r.b)("p",null,"| Podcast Episode: #082 Reading Tweets With Apache Ni\ufb01 & IaaS vs PaaS vs SaaS\n|------------------|\n|In this podcast we are trying to read Twitter Data with Ni\ufb01.\n| ",Object(r.b)("a",{parentName:"p",href:"https://youtu.be/pWuT4UAocUY"},"Watch on YouTube")),Object(r.b)("p",null,"| Podcast Episode: #085 Trying to read Tweets with Ni\ufb01 Part 2\n|------------------|\n|We are looking into the Big Data landscape chart and we are trying to read Twitter Data with Ni\ufb01 again.\n| ",Object(r.b)("a",{parentName:"p",href:"https://youtu.be/OLUwXr8-gAk"},"Watch on YouTube")),Object(r.b)("h2",{id:"writing-from-nifi-to-apache-kafka"},"Writing from Nifi to Apache Kafka"),Object(r.b)("p",null,"| Podcast Episode: #086 How to Write from Ni\ufb01 to Kafka Part 1\n|------------------|\n|I\u2019ve been working a lot on the cookbook, because it\u2019s so much fun. I gotta tell you what I added. Then we are trying to write the Tweets from Apache Ni\ufb01 into Kafka. Also talk about Kafka basics.\n| ",Object(r.b)("a",{parentName:"p",href:"https://youtu.be/F7Y-ygnyJMg"},"Watch on YouTube")),Object(r.b)("p",null,"| Podcast Episode: #088 How to Write from Ni\ufb01 to Kafka Part 2\n|------------------|\n|In this podcast we \ufb01nally \ufb01gure out how to write to Kafka from Ni\ufb01. The problem was the network con\ufb01guration of the Docker containers.\n| ",Object(r.b)("a",{parentName:"p",href:"https://youtu.be/pJbRnBQmoCs"},"Watch on YouTube")),Object(r.b)("h2",{id:"apache-zeppelin"},"Apache Zeppelin"),Object(r.b)("h3",{id:"install-and-ingest-kafka-topic"},"Install and Ingest Kafka Topic"),Object(r.b)("p",null,"Start the container:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"docker run -d -p 8081:8080 --rm \\\n-v /Users/xxxx/Documents/DockerFiles/logs:/logs \\\n-v /Users/xxxx/Documents/DockerFiles/Notebooks:/notebook \\\n-e ZEPPELIN_LOG_DIR='/logs' \\\n-e ZEPPELIN_NOTEBOOK_DIR='/notebook' \\\n--network app-tier --name zeppelin apache/zeppelin:0.7.3\n")),Object(r.b)("h3",{id:"processing-messages-with-spark-and-sparksql"},"Processing Messages with Spark and SparkSQL"),Object(r.b)("h3",{id:"visualizing-data"},"Visualizing Data"),Object(r.b)("h2",{id:"switch-processing-from-zeppelin-to-spark"},"Switch Processing from Zeppelin to Spark"),Object(r.b)("h3",{id:"install-spark"},"Install Spark"),Object(r.b)("h3",{id:"ingest-messages-from-kafka"},"Ingest Messages from Kafka"),Object(r.b)("h3",{id:"writing-from-spark-to-kafka"},"Writing from Spark to Kafka"),Object(r.b)("h3",{id:"move-zeppelin-code-to-spark"},"Move Zeppelin Code to Spark"))}l.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?i.a.createElement(h,s(s({ref:t},p),{},{components:n})):i.a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);