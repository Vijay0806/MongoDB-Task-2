// Design database for Zen class programme
// users
// codekata
// attendance
// topics
// tasks
// company_drives
// mentors


// Find all the topics and tasks which are thought in the month of October
// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
// Find all the company drives and students who are appeared for the placement.
// Find the number of problems solved by the user in codekata
// Find all the mentors with who has the mentee's count more than 15
// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

//create a database:

db.createCollection("zenclass")


db.zenclass.insertMany([
    {
      "user":"Vijay",
      "codekata":270,
      "attendance":"Present",
      "topics":"ReactJs",
      "topic_date":new Date("<2020-10-05>"),
      "task_date": new Date("<2020-10-10>"),
      "tasks":"movie_app",
      "company_drives":"ZOHO",
      "company_drives_date":new Date("<2020-10-20>"),
      "placement":"Appeared",
      "mentors":"Manikandan"
    },
    {
        "user":"Saranya",
        "codekata":250,
        "attendance":"Present",
        "topics":"MongoDB",
        "topic_date":new Date("<2020-10-15>"),
        "task_date": new Date("<2020-10-16>"),
        "tasks":"Database_commands",
        "company_drives":"HCL",
        "company_drives_date":new Date("<2020-10-25>"),
        "placement":"Appeared",
        "mentors":"Manikandan"
      },
      {
        "user":"Victor",
        "codekata":150,
        "attendance":"Present",
        "topics":"NodeJs",
        "topic_date":new Date("<2020-10-20>"),
        "task_date": new Date("<2020-10-21>"),
        "tasks":"create_app",
        "company_drives":"TCS",
        "company_drives_date":new Date("<2020-10-26>"),
        "placement":"Appeared",
        "mentors":"Manikandan"
      },
      {
        "user":"Mani",
        "codekata":100,
        "attendance":"Present",
        "topics":"HTML",
        "topic_date":new Date("<2020-10-07>"),
        "task_date": new Date("<2020-10-08>"),
        "tasks":"calc_app",
        "company_drives":"CTS",
        "company_drives_date":new Date("<2020-10-22>"),
        "placement":"Appeared",
        "mentors":"Raghav"
      },
      {
        "user":"Viji",
        "codekata":120,
        "attendance":"Present",
        "topics":"CSS",
        "topic_date":new Date("<2020-10-12>"),
        "task_date": new Date("<2020-10-13>"),
        "tasks":"responsive_web_design",
        "company_drives":"WIPRO",
        "company_drives_date":new Date("<2020-10-21>"),
        "placement":"Appeared",
        "mentors":"Manikandan"
      },
      {
        "user":"Viji",
        "codekata":66,
        "attendance":"Absent",
        "topics":"Javascript",
        "topic_date":new Date("<2020-10-19>"),
        "task_date": new Date("<2020-10-23>"),
        "tasks":"functions",
        "company_drives":"CTS",
        "company_drives_date":new Date("<2020-10-31>"),
        "placement":"Not_Appeared",
        "mentors":"Sibi"
      },
      {
        "user":"Karthick",
        "codekata":180,
        "attendance":"Present",
        "topics":"ReactJs",
        "topic_date":new Date("<2020-10-05>"),
        "task_date": new Date("<2020-10-16>"),
        "tasks":"movie_app",
        "company_drives":"HCL",
        "company_drives_date":new Date("<2020-10-20>"),
        "placement":"Appeared",
        "mentors":"Raghav"
      },
      {
        "user" : "Malar",
        "codekata" : 122,
        "attendance" : "Present",
        "topics" : "CSS",
        "topic_date" : new Date("<2020-10-12>"),
        "task_date" : new Date("<2020-10-20>"),
        "tasks" : "responsive_web_design",
        "company_drives" : "TCS",
        "company_drives_date" : new Date("<2020-10-25>"),
        "placement": "Appeared",
        "mentors" : "Sibi"
    },  {
        "user" : "Fashil",
        "codekata" : 167,
        "attendance" : "Present",
        "topics" : "NodeJs",
        "topic_date" : new Date("<2020-10-20>"),
        "task_date" : new Date("<2020-10-21>"),
        "tasks" : "create_api",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-28>"),
        "placement": "Appeared",
        "mentors" : "Manikandan"
    },
    {
        "user" : "Sundar",
        "codekata" : 55,
        "attendance" : "Present",
        "topics" : "MongoDB",
        "topic_date" : new Date("<2020-10-15>"),
        "task_date" : new Date("<2020-10-19>"),
        "tasks" : "Database_commands",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-20>"),
        "placement": "Appeared",
        "mentors" : "Manikandan"
    },    
    {
        "user" : "GokulaPriya",
        "codekata" : 68,
        "attendance" : "Present",
        "topics" : "ReactJs",
        "topic_date" : new Date("<2020-10-05>"),
        "task_date" : new Date("<2020-10-16>"),
        "tasks" : "movie_app",
        "company_drives" : "ZOHO",
        "company_drives_date" : new Date("<2020-10-28>"),
        "placement": "Not_appeared",
        "mentors" : "Manikandan"
    }, 
    {
        "user" : "Sarathy",
        "codekata" : 260,
        "attendance" : "Absent",
        "topics" : "JavaScript",
        "topic_date" : new Date("<2020-10-19>"),
        "task_date" : new Date("<2020-10-23>"),
        "tasks" : "functions",
        "company_drives" : "Cognizant",
        "company_drives_date" : new Date("<2020-10-31>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },   
     {
        "user" : "Laskshmi",
        "codekata" : 85,
        "attendance" : "Present",
        "topics" : "HTML",
        "topic_date" : new Date("<2020-10-07>"),
        "task_date" : new Date("<2020-10-09>"),
        "tasks" : "responsive_web_design",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-20>"),
        "placement": "Not_appeared",
        "mentors" : "Sibi"
    },
    {
        "user" : "Sumithran",
        "codekata" : 200,
        "attendance" : "Present",
        "topics" : "NodeJs",
        "topic_date" : new Date("<2020-10-20>"),
        "task_date" : new Date("<2020-10-25>"),
        "tasks" : "create_api",
        "company_drives" : "WIPRO",
        "company_drives_date" : new Date("<2020-10-22>"),
        "placement": "Appeared",
        "mentors" : "Manikandan"
    },    
    {
        "user" : "Dhanalakshmi",
        "codekata" : 175,
        "attendance" : "Present",
        "topics" : "MongoDB",
        "topic_date" : new Date("<2020-10-15>"),
        "task_date" : new Date("<2020-10-20>"),
        "tasks" : "Database_commands",
        "company_drives" : "Cognizant",
        "company_drives_date" : new Date("<2020-10-31>"),
        "placement": "Appeared",
        "mentors" : "Manikandan"
    },
    {
        "user" : "Varun",
        "codekata" : 105,
        "attendance" : "Absent",
        "topics" : "React",
        "topic_date" : new Date("<2020-10-05>"),
        "task_date" : new Date("<2020-10-22>"),
        "tasks" : "movie_app",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-20>"),
        "placement": "Appeared",
        "mentors" : "Manikandan"
    },    
    {
        "user" : "Aswini",
        "codekata" : 265,
        "attendance" : "Present",
        "topics" : "HTML",
        "topic_date" : new Date("<2020-10-07>"),
        "task_date" : new Date("<2020-10-11>"),
        "tasks" : "responsive_web_design",
        "company_drives" : "WIPRO",
        "company_drives_date" : new Date("<2020-10-22>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    }, 
    {
        "user" : "Siva",
        "codekata" : 288,
        "attendance" : "Present",
        "topics" : "JavaScript",
        "topic_date" : new Date("<2020-10-19>"),
        "task_date" : new Date("<2020-10-29>"),
        "tasks" : "functions",
        "company_drives" : "CTS",
        "company_drives_date" : new Date("<2020-10-31>"),
        "placement": "Appeared",
        "mentors" : "Sibi"
    },
    {
        "user" : "Dhanush",
        "codekata" : 130,
        "attendance" : "Absent",
        "topics" : "CSS",
        "topic_date" : new Date("<2020-10-12>"),
        "task_date" : new Date("<2020-10-16>"),
        "tasks" : "responsive_web_design",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-20>"),
        "placement": "Appeared",
        "mentors" : "Manikandan"
    },
    {
        "user" : "Suthesh",
        "codekata" : 177,
        "attendance" : "Present",
        "topics" : "MongoDB",
        "topic_date" : new Date("<2020-10-15>"),
        "task_date" : new Date("<2020-10-17>"),
        "tasks" : "Database_commands",
        "company_drives" : "TCS",
        "company_drives_date" : new Date("<2020-10-25>"),
        "placement": "Not_appeared",
        "mentors" : "Raghav"
    },    
    {
        "user" : "Surya",
        "codekata" : 145,
        "attendance" : "Present",
        "topics" : "ReactJs",
        "topic_date" : new Date("<2020-10-05>"),
        "task_date" : new Date("<2020-10-11>"),
        "tasks" : "movie_app",
        "company_drives" : "ZOHO",
        "company_drives_date" : new Date("<2020-10-28>"),
        "placement": "Appeared",
        "mentors" : "Manikandan"
    },
    {
        "user" : "Barath",
        "codekata" : 222,
        "attendance" : "Absent",
        "topics" : "NodeJs",
        "topic_date" : new Date("<2020-10-20>"),
        "task_date" : new Date("<2020-10-22>"),
        "tasks" : "create_api",
        "company_drives" : "WIPRO",
        "company_drives_date" : new Date("<2020-10-22>"),
        "placement": "Appeared",
        "mentors" : "Manikandan"
    },    
    {
        "user" : "Asif",
        "codekata" : 50,
        "attendance" : "Absent",
        "topics" : "HTML",
        "topic_date" : new Date("<2020-10-07>"),
        "task_date" : new Date("<2020-10-09>"),
        "tasks" : "responsive_web_design",
        "company_drives" : "CTS",
        "company_drives_date" : new Date("<2020-10-31>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    }, 
    {
        "user" : "Naaveen",
        "codekata" : 250,
        "attendance" : "Present",
        "topics" : "NodeJs",
        "topic_date" : new Date("<2020-10-20>"),
        "task_date" : new Date("<2020-10-25>"),
        "tasks" : "create_api",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-28>"),
        "placement": "Appeared",
        "mentors" : "Manikandan"
    },
    {
        "user" : "Aarthi",
        "codekata" : 88,
        "attendance" : "Present",
        "topics" : "ReactJs",
        "topic_date" : new Date("<2020-10-05>"),
        "task_date" : new Date("<2020-10-15>"),
        "tasks" : "movie_app",
        "company_drives" : "WIPRO",
        "company_drives_date" : new Date("<2020-10-22>"),
        "placement": "Not_appeared",
        "mentors" : "Manikandan"
    },
    {
        "user" : "Abishek",
        "codekata" : 189,
        "attendance" : "Present",
        "topics" : "JavaScript",
        "topic_date" : new Date("<2020-10-19>"),
        "task_date" : new Date("<2020-10-25>"),
        "tasks" : "functions",
        "company_drives" : "CTS",
        "company_drives_date" : new Date("<2020-10-31>"),
        "placement": "Appeared",
        "mentors" : "Sibi"
    },
    {
        "user" : "Velmurugan",
        "codekata" : 159,
        "attendance" : "Absent",
        "topics" : "MongoDB",
        "topic_date" : new Date("<2020-10-15>"),
        "task_date" : new Date("<2020-10-21>"),
        "tasks" : "Database_commands",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-25>"),
        "placement": "Appeared",
        "mentors" : "Manikandan"
    },
    {
        "user" : "Saravanan",
        "codekata" : 259,
        "attendance" : "Absent",
        "topics" : "Javascript",
        "topic_date" : new Date("<2020-10-19>"),
        "task_date" : new Date("<2020-10-20>"),
        "tasks" : "functions",
        "company_drives" : "INFOSYS",
        "company_drives_date" : new Date("<2020-10-23>"),
        "placement": "Appeared",
        "mentors" : "Sibi"
    },
]);

//Find all the topics and tasks which are thought in the month of October


db.zenclass.find({$or: [{topic_date: {$gte : new Date("<2020-10-01>"), $lte: new Date("<2020-10-31>")}},{task_date: {$gte : new Date("<2020-10-01>"), $lte: new Date("<2020-10-31>")}}]},{topics: 1, tasks: 1}).toArray();

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.zenclass.find({company_drives_date: {$gte : new Date("<2020-10-15>"), $lte: new Date("<2020-10-31>")}},{company_drives: 1}).toArray();

// Find all the company drives and students who are appeared for the placement.
db.zenclass.find({placement: "Appeared"},{ _id: 0,user: 1, company_drives: 1}).toArray();

// Find the number of problems solved by the user in codekata
db.zenclass.find({},{_id: 0,user: 1, codekata: 1}).toArray();

// Find all the mentors with who has the mentee's count more than 15
db.zenclass.aggregate([
    {$group: {_id: "$mentors", count: {$sum: 1}}},
    {$match: {_id: {$ne: null}, count: {$gt: 15}}}
]);
db.zenclass.find({mentors: "Manikandan"},{user: 1, mentors: 1});

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.zenclass.find({$or: [{attendance: "Absent"}, {task_date: {$not: {$gte: new Date("<2020-10-15>"), $lte: new Date("<2020-10-31>")}}}]});