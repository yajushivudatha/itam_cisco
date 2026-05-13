// raw-datasets.ts

export const contractsCSV = `Publisher,Software Title,Category,Consumption %,Utilisation %,Contract Start,Contract End,ACV (USD),TCV (USD),Contract Owner,Key Stakeholders
Microsoft,Microsoft 365 E5,Productivity,94,78,2025-01-01,2028-12-31,1850000,5550000,IT Operations,All Departments
Microsoft,Azure Enterprise Agreement,Cloud Infrastructure,88,71,2025-04-01,2028-03-31,3200000,9600000,Cloud Operations,Engineering / DevOps / IT
Microsoft,GitHub Enterprise,Developer Tools,72,65,2025-07-01,2027-06-30,480000,960000,Engineering,Engineering / DevOps
Microsoft,Power BI Premium,Analytics,61,44,2025-01-01,2027-12-31,320000,640000,Finance,Finance / Strategy / PMO
Microsoft,Microsoft Visio,Diagramming,38,22,2025-03-01,2027-02-28,180000,180000,PMO,PMO / Architecture
Salesforce,Salesforce CRM,CRM,91,83,2025-07-01,2027-06-30,920000,2760000,Sales Operations,Sales / Marketing / CS
Salesforce,Salesforce Marketing Cloud,Marketing Automation,67,51,2025-01-01,2027-12-31,540000,1080000,Marketing,Marketing / Digital
Salesforce,Tableau Desktop,Analytics,58,41,2025-10-01,2027-09-30,540000,1080000,Finance,Finance / Sales / Strategy
ServiceNow,ServiceNow ITSM,IT Service Management,97,91,2025-01-01,2029-12-31,1450000,7250000,IT Director,IT / HR / Facilities
ServiceNow,ServiceNow HRSD,HR Service Delivery,74,62,2025-04-01,2027-03-31,680000,1360000,HR Director,HR / People Operations
Workday,Workday HCM,HR Platform,96,89,2024-06-01,2029-05-31,2100000,10500000,CHRO,HR / Finance / Legal
Workday,Workday Financials,Finance Platform,93,87,2024-06-01,2029-05-31,1800000,9000000,CFO,Finance / Accounting / Audit
Splunk,Splunk Enterprise,Security & Observability,98,94,2025-03-01,2027-02-28,2100000,6300000,CISO,IT Security / NOC / Engineering
CrowdStrike,CrowdStrike Falcon,Endpoint Security,99,97,2025-01-01,2028-12-31,950000,2850000,CISO,IT Security / All Endpoints
Okta,Okta SSO,Identity & Access,99,96,2025-01-01,2028-12-31,420000,1260000,IT Operations,All Departments
Palo Alto Networks,Prisma Cloud,Cloud Security,81,73,2025-06-01,2027-05-31,780000,1560000,CISO,Cloud / DevSecOps / Engineering
Zoom,Zoom Workplace,Collaboration,87,69,2025-01-01,2027-12-31,380000,760000,IT Operations,All Departments
Cisco,Webex Suite,Collaboration,71,54,2025-09-01,2027-08-31,280000,560000,IT Operations,IT / Sales / Customer Success
Atlassian,Jira Software,Project Management,89,82,2025-01-01,2027-12-31,180000,360000,Engineering,Engineering / PMO / QA
Atlassian,Confluence,Knowledge Management,76,58,2025-01-01,2027-12-31,120000,240000,IT Operations,All Departments
Oracle,NetSuite ERP,ERP,95,91,2024-01-01,2029-12-31,3200000,19200000,CFO,Finance / Operations / Supply Chain
SAP,SAP Concur,Travel & Expense,82,74,2025-07-01,2027-06-30,480000,1440000,Finance,Finance / HR / All Travelers
Adobe,Adobe Creative Cloud,Design & Creative,64,48,2025-01-01,2027-12-31,280000,560000,Marketing,Marketing / Design / Communications
Slack,Slack Business+,Messaging,91,84,2025-01-01,2027-06-30,220000,330000,Engineering,Engineering / Product / Sales
DocuSign,DocuSign CLM,Contract Management,77,61,2025-03-01,2027-02-28,240000,480000,Legal,Legal / Sales / Finance
Zendesk,Zendesk Suite,Customer Support,88,79,2025-10-01,2027-09-30,520000,1040000,CS Director,Customer Success / Support
Miro,Miro Enterprise,Visual Collaboration,56,39,2025-01-01,2027-12-31,140000,280000,Strategy,Strategy / Product / PMO
Asana,Asana Business,Work Management,48,31,2025-06-01,2027-05-31,160000,320000,Marketing,Marketing / Operations / PMO
Snyk,Snyk Enterprise,Developer Security,73,67,2025-04-01,2027-03-31,360000,720000,Engineering,Engineering / DevSecOps
HashiCorp,Terraform Enterprise,Infrastructure as Code,79,72,2025-01-01,2027-12-31,420000,840000,Cloud Operations,Engineering / DevOps / Cloud
Datadog,Datadog Pro,Monitoring & APM,86,81,2025-03-01,2027-02-28,680000,1360000,Engineering,Engineering / SRE / NOC
PagerDuty,PagerDuty Business,Incident Management,84,78,2025-01-01,2027-12-31,240000,480000,IT Operations,IT / Engineering / NOC
Elastic,Elastic Enterprise,Search & Analytics,69,55,2025-07-01,2027-06-30,380000,760000,Engineering,Engineering / Data / IT Security
Lucid,Lucidchart Enterprise,Diagramming,44,28,2025-01-01,2027-12-31,120000,240000,PMO,PMO / Architecture / Engineering
Veracode,Veracode Platform,Application Security,66,52,2025-04-01,2027-03-31,280000,560000,CISO,Engineering / DevSecOps / QA`;

export const incidentsCSV = `Ticket ID,Category,Priority,Department,Assigned Team,Created Date,Resolved Date,SLA Hours,Actual Hours,Status,Repeat Issue,Root Cause
INC0012841,Network Outage,P1,Finance,Network Ops,2025-01-06,2025-01-06,4,6,Closed,Yes,Firewall rule misconfiguration
INC0012842,Application Down,P1,Sales,App Support,2025-01-07,2025-01-07,4,3,Closed,No,Database connection timeout
INC0012843,VPN Access,P2,HR,IT Helpdesk,2025-01-08,2025-01-09,8,14,Closed,Yes,Certificate expiry
INC0012844,Laptop Performance,P3,Marketing,IT Helpdesk,2025-01-09,2025-01-12,24,58,Closed,No,Insufficient RAM
INC0012845,Email Delivery Failure,P2,All Departments,Email Ops,2025-01-10,2025-01-10,8,5,Closed,No,SMTP relay misconfiguration
INC0012846,Printer Offline,P4,Finance,IT Helpdesk,2025-01-13,2025-01-15,48,52,Closed,Yes,Driver conflict
INC0012847,Network Outage,P1,Engineering,Network Ops,2025-01-14,2025-01-14,4,4,Closed,Yes,Firewall rule misconfiguration
INC0012848,Software License Error,P2,Finance,IT Helpdesk,2025-01-15,2025-01-16,8,18,Closed,No,License count exceeded
INC0012849,Phishing Attempt,P1,HR,IT Security,2025-01-16,2025-01-16,4,2,Closed,No,User training gap
INC0012850,Application Down,P1,Finance,App Support,2025-01-17,2025-01-18,4,22,Closed,Yes,Database connection timeout
INC0012851,VPN Access,P2,Sales,IT Helpdesk,2025-01-20,2025-01-21,8,12,Closed,Yes,Certificate expiry
INC0012852,Storage Full,P2,Engineering,Infra Ops,2025-01-21,2025-01-21,8,6,Closed,No,Log files not purged
INC0012853,Network Outage,P1,Sales,Network Ops,2025-01-22,2025-01-22,4,5,Closed,Yes,Firewall rule misconfiguration
INC0012854,Access Request,P3,Finance,IT Helpdesk,2025-01-23,2025-01-28,24,96,Closed,No,Approval chain delay
INC0012855,Laptop Performance,P3,Engineering,IT Helpdesk,2025-01-24,2025-01-27,24,62,Closed,No,Disk fragmentation
INC0012856,Email Delivery Failure,P2,Sales,Email Ops,2025-02-03,2025-02-03,8,4,Closed,Yes,SMTP relay misconfiguration
INC0012857,Application Down,P1,HR,App Support,2025-02-04,2025-02-04,4,3,Closed,No,Memory leak patched
INC0012858,Phishing Attempt,P1,Finance,IT Security,2025-02-05,2025-02-05,4,1,Closed,Yes,User training gap
INC0012859,VPN Access,P2,Marketing,IT Helpdesk,2025-02-06,2025-02-07,8,16,Closed,Yes,Certificate expiry
INC0012860,Network Outage,P1,All Departments,Network Ops,2025-02-10,2025-02-10,4,7,Closed,Yes,Firewall rule misconfiguration
INC0012861,Software License Error,P2,Engineering,IT Helpdesk,2025-02-11,2025-02-12,8,20,Closed,Yes,License count exceeded
INC0012862,Storage Full,P2,Finance,Infra Ops,2025-02-12,2025-02-13,8,9,Closed,No,Backup job misconfigured
INC0012863,Access Request,P3,HR,IT Helpdesk,2025-02-13,2025-02-20,24,144,Closed,No,Approval chain delay
INC0012864,Printer Offline,P4,Marketing,IT Helpdesk,2025-02-14,2025-02-17,48,66,Closed,Yes,Driver conflict
INC0012865,Application Down,P1,Finance,App Support,2025-02-18,2025-02-18,4,4,Closed,Yes,Database connection timeout
INC0012866,Phishing Attempt,P1,All Departments,IT Security,2025-02-19,2025-02-19,4,2,Closed,Yes,User training gap
INC0012867,Network Outage,P1,Finance,Network Ops,2025-02-24,2025-02-24,4,8,Closed,Yes,Firewall rule misconfiguration
INC0012868,VPN Access,P2,Engineering,IT Helpdesk,2025-02-25,2025-02-26,8,11,Closed,Yes,Certificate expiry
INC0012869,Laptop Performance,P3,HR,IT Helpdesk,2025-02-26,2025-03-01,24,54,Closed,No,Insufficient RAM
INC0012870,Software License Error,P2,Marketing,IT Helpdesk,2025-02-27,2025-02-28,8,14,Closed,Yes,License count exceeded
INC0012871,Network Outage,P1,Engineering,Network Ops,2025-03-03,2025-03-03,4,5,Closed,Yes,Firewall rule misconfiguration
INC0012872,Application Down,P1,Sales,App Support,2025-03-04,2025-03-05,4,18,Closed,Yes,Database connection timeout
INC0012873,Phishing Attempt,P1,Finance,IT Security,2025-03-05,2025-03-05,4,1,Closed,Yes,User training gap
INC0012874,Access Request,P3,Sales,IT Helpdesk,2025-03-06,2025-03-13,24,132,Closed,No,Approval chain delay
INC0012875,Storage Full,P2,All Departments,Infra Ops,2025-03-10,2025-03-10,8,7,Closed,No,Log files not purged
INC0012876,VPN Access,P2,Finance,IT Helpdesk,2025-03-11,2025-03-12,8,13,Closed,Yes,Certificate expiry
INC0012877,Network Outage,P1,HR,Network Ops,2025-03-12,2025-03-12,4,6,Closed,Yes,Firewall rule misconfiguration
INC0012878,Email Delivery Failure,P2,Engineering,Email Ops,2025-03-13,2025-03-13,8,3,Closed,No,SMTP relay misconfiguration
INC0012879,Application Down,P1,Finance,App Support,2025-03-17,2025-03-18,4,26,Closed,Yes,Database connection timeout
INC0012880,Software License Error,P2,Finance,IT Helpdesk,2025-03-18,2025-03-19,8,22,Closed,Yes,License count exceeded
INC0012881,Phishing Attempt,P1,Sales,IT Security,2025-03-19,2025-03-19,4,2,Closed,Yes,User training gap
INC0012882,Network Outage,P1,Finance,Network Ops,2025-03-24,2025-03-24,4,9,Closed,Yes,Firewall rule misconfiguration
INC0012883,VPN Access,P2,All Departments,IT Helpdesk,2025-03-25,2025-03-27,8,19,Closed,Yes,Certificate expiry
INC0012884,Access Request,P3,Engineering,IT Helpdesk,2025-03-26,2025-04-02,24,148,Open,No,Approval chain delay
INC0012885,Application Down,P1,HR,App Support,2025-03-31,2025-03-31,4,3,Closed,No,Patch applied
INC0012886,Network Outage,P1,Sales,Network Ops,2025-04-01,2025-04-01,4,5,Closed,Yes,Firewall rule misconfiguration
INC0012887,Phishing Attempt,P1,Finance,IT Security,2025-04-02,2025-04-02,4,1,Closed,Yes,User training gap
INC0012888,Software License Error,P2,HR,IT Helpdesk,2025-04-03,,8,,Open,Yes,License count exceeded
INC0012889,VPN Access,P2,Marketing,IT Helpdesk,2025-04-07,,8,,Open,Yes,Certificate expiry
INC0012890,Network Outage,P1,Finance,Network Ops,2025-04-08,,4,,Open,Yes,Firewall rule misconfiguration`;

export const softwareCSV = `Software Name,Vendor,Department,Owner,Last Used Date,Annual Cost,Licensed Count,Installed Count,Contract Renewal
Microsoft 365 E5,Microsoft,All Departments,IT Operations,2025-04-01,185000,250,247,2025-09-01
Salesforce CRM,Salesforce,Sales,Sales Ops,2025-03-28,92000,80,78,2025-12-01
ServiceNow ITSM,ServiceNow,IT Operations,IT Director,2025-04-01,145000,100,100,2026-01-15
Zoom Workplace,Zoom,All Departments,IT Operations,2025-04-01,38000,250,231,2025-11-01
Adobe Creative Cloud,Adobe,Marketing,Marketing Director,2024-11-15,28000,30,33,2025-08-01
Tableau Desktop,Salesforce,Finance,Finance Director,2024-09-12,54000,25,28,2025-10-01
Workday HCM,Workday,HR,HR Director,2025-03-20,210000,500,500,2026-03-01
Slack Business+,Slack,Engineering,Eng Director,2025-04-01,22000,120,118,2025-07-01
GitHub Enterprise,Microsoft,Engineering,Eng Director,2025-03-15,48000,90,94,2025-09-15
Jira Software,Atlassian,Engineering,Eng Director,2025-04-01,18000,90,92,2025-12-01
Confluence,Atlassian,All Departments,IT Operations,2025-02-10,12000,150,145,2025-12-01
Splunk Enterprise,Splunk,IT Security,CISO,2025-04-01,210000,20,20,2026-02-01
CrowdStrike Falcon,CrowdStrike,IT Security,CISO,2025-04-01,95000,500,487,2026-01-01
Okta SSO,Okta,IT Operations,IT Director,2025-04-01,42000,500,498,2025-10-01
DocuSign,DocuSign,Legal,General Counsel,2024-08-05,24000,40,40,2025-08-05
AutoCAD LT,Autodesk,Engineering,Eng Director,2024-10-18,36000,15,15,2025-10-18
Microsoft Visio,Microsoft,PMO,PMO Director,2024-11-02,18000,20,22,2025-11-02
Power BI Premium,Microsoft,Finance,Finance Director,2024-10-30,32000,30,34,2025-10-30
Miro,Miro,Strategy,Strategy VP,2024-11-20,14000,40,38,2025-11-20
SAP Concur,SAP,Finance,Finance Director,2024-07-14,48000,200,200,2025-07-14
Asana Business,Asana,Marketing,Marketing Director,2025-01-08,16000,50,49,2025-06-01
Webex Suite,Cisco,IT Operations,IT Director,2024-09-03,28000,100,82,2025-09-03
Snagit,TechSmith,Marketing,Marketing Director,2024-10-01,6000,20,18,2025-10-01
NetSuite ERP,Oracle,Finance,CFO,2025-04-01,320000,75,75,2026-04-01
Zendesk Suite,Zendesk,Customer Success,CS Director,2025-03-25,52000,60,58,2025-09-01`;

export const assetsData = [
  { Asset: "AST0050", Type: "Laptop", Department: "Customer Success", User: "Vivaan Rao", Age: 64, Repairs: 5, Risk: 100 },
  { Asset: "AST0029", Type: "Router", Department: "Customer Success", User: "Vivaan Rao", Age: 62, Repairs: 5, Risk: 100 },
  { Asset: "AST0008", Type: "Router", Department: "Finance", User: "Arjun Kapoor", Age: 66, Repairs: 3, Risk: 99.7 },
  { Asset: "AST0068", Type: "Monitor", Department: "Customer Success", User: "Vivaan Rao", Age: 51, Repairs: 4, Risk: 99.7 },
  { Asset: "AST0014", Type: "Firewall", Department: "IT Operations", User: "Karan Verma", Age: 35, Repairs: 5, Risk: 99.5 },
  { Asset: "AST0086", Type: "Tablet", Department: "HR", User: "Rohan Gupta", Age: 59, Repairs: 3, Risk: 99.4 },
  { Asset: "AST0034", Type: "Monitor", Department: "Sales", User: "Anika Nair", Age: 69, Repairs: 2, Risk: 99.1 },
  { Asset: "AST0031", Type: "Tablet", Department: "IT Operations", User: "Sana Ali", Age: 43, Repairs: 4, Risk: 99.0 },
  { Asset: "AST0052", Type: "Desktop", Department: "IT Operations", User: "Neha Reddy", Age: 66, Repairs: 2, Risk: 98.7 },
  { Asset: "AST0011", Type: "Desktop", Department: "Engineering", User: "Ishita Jain", Age: 40, Repairs: 4, Risk: 98.6 },
  { Asset: "AST0044", Type: "Router", Department: "Customer Success", User: "Aarav Shah", Age: 65, Repairs: 2, Risk: 98.5 },
  { Asset: "AST0040", Type: "Firewall", Department: "Finance", User: "Aarav Shah", Age: 64, Repairs: 2, Risk: 98.3 },
  { Asset: "AST0092", Type: "Laptop", Department: "Marketing", User: "Vivaan Rao", Age: 38, Repairs: 4, Risk: 98.2 }
];
