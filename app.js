// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/convocation2025', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Setup EJS and middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    course: String,
    registrationDate: {
        type: Date,
        default: Date.now
    }
});

const Student = mongoose.model('Student', studentSchema);

// Course and student data
const coursesData = [
    "MSC-AG", "LLM-CAL", "LLM-CCL", "LLM-CFL", "LLB", 
    "MBA", "MBA-IBM", "BBA", "BBA-IBM", "B.COM(HONS)", 
    "MCA", "BCA", "BCA-IBM", "DIPLOMA-CSE", "BA-ENGLISH", 
    "BSC-PHYSICS", "BAJMC"
];

const studentsData = {
    "MSC-AG": ["DEEPSHIKHA",
                "KM. MAHIMA BARANWAL",
                "TANISHKA SAHU",
                "VINAY SINGH YADAV",
                "ANUJ KUSHWAHA",
                "VIVEK SINGH",
                "SHUBHAM PANDEY",
                "RITESH KUMAR TIWARI",
                "ASHISH KUMAR"],

    "LLM-CAL": [
                    "JYOTSANA SINGH",
                    "ABHISHEK KUMAR SINGH",
                    "ABHISHEK KUMAR SINGH"
                ],
    "LLM-CCL": [
                    "KHUSHBOO SINGH",
                    "SAUMYA TIWARI",
                    "ABHISHEK PRAJAPATI",
                    "SADHANA SINGH",
                    "NIHARIKA NARAIN",
                    "NEETU",
                    "SHIVAM VERMA",
                    "NIZAM",
                    "AHMED RAZA"
                ],
    "LLM-CFL": [
                    "SAI SHAMBHAVI SINGH",
                    "SHARAD KUMAR",
                    "SHUBHAM VERMA",
                    "ADITYA MISHRA",
                    "SYED SHANAWAR",
                    "RAJESH KUMAR VISHWAKARMA"
                ],
    "LLB": [
                    "AADARSH PANDEY",
                    "ANSHIT SRIVASTAVA",
                    "KARTIK SHUKLA"
                ],
                "MBA": [
                    "SARA ASIF",
                    "SHWETA SINGH",
                    "VIRENDRA PANDEY",
                    "ADARSH DWIVEDI",
                    "MASHA KHAN",
                    "ALZABISH RAFIQ FAROOQUI",
                    "AKHIL SINGH",
                    "AFSHA PERVEEN",
                    "YATHARTH SHUKLA",
                    "JOWAIRIA AKHTAR",
                    "PANDEY MADHULIKA RAMESH KUMAR",
                    "KRITIKA SINGH",
                    "ROSHNI SINGH",
                    "DEEPANSHU RAJPUT",
                    "DIKSHA CHAKRAWARTI",
                    "SNEHA TRIPATHI",
                    "SAMAR KANT PANDEY",
                    "ABHAY KESARWANI",
                    "KUSHAGRA KUMAR PANDEY",
                    "KM RIYA KHARE",
                    "SNEHA GUPTA",
                    "VIVEK PANDEY",
                    "SHWETA YADAV",
                    "MOHAMMAD ANAS",
                    "SHREYA JAISWAL",
                    "ADITYA TIWARI",
                    "RAJNISH KUMAR SHUKLA",
                    "KISHAN GUPTA",
                    "ANKIT",
                    "PRADUMYA PATEL",
                    "RAHUL MISHRA",
                    "TUSHAR KADAM",
                    "KM. KIRAN YADAV",
                    "RITIKA CHAURASIA",
                    "ANKUR YADAV",
                    "SUBHASH SINGH JADAUN",
                    "AKASH MISHRA",
                    "VISHESH SHARMA",
                    "RITIK NISHAD",
                    "MOHD FARAZ ANSARI",
                    "NABEEL AHMED SIDDIQUI",
                    "MOHD SAHIL",
                    "MISHRA SHREYA LALITKUMAR",
                    "MAYUR RAWAT"
                ],
                "MBA-IBM": [
                    "ANMOL AGRAHARI",
                    "AISHWARYA SINGH",
                    "GAURAV SRIVASTAVA",
                    "KHURRAM ABBAS",
                    "HAMZA ALI",
                    "SHREYA SRIVASTAVA",
                    "ARSH MADHWAR",
                    "MANISHA SINGH",
                    "VIBHAV MISHRA",
                    "PARUL SINGH",
                    "PRABAL SRIVASTAVA",
                    "SURYANSH VERMA",
                    "HAMZA RESHAD",
                    "RISHABH AGRAWAL",
                    "AYUSHI YADAV",
                    "SHASHIKANT PANDEY",
                    "KM SAKSHI SAXENA",
                    "HARSH CHADDHA",
                    "PIYUSH KESARWANI",
                    "ARYA BHATT",
                    "KM PRAGYA PANDEY",
                    "SAHIL SINGH",
                    "AMAN SRIVASTAVA",
                    "HIMANSHU DUBEY",
                    "ADITYA MISHRA",
                    "SATYAM TIWARI",
                    "VASU SINGH",
                    "TANUJ SHUKLA"
                ],
                "BBA": [
                    "SANA PRAVEEN",
                    "MOHD ASAD",
                    "ANUBHAV SINGH",
                    "ASHUTOSH MISHRA",
                    "RICHA MISHRA",
                    "RANI YADAV",
                    "HARSH RAJ SINGH",
                    "AKSHAT KESARWANI",
                    "RIYA KESARWANI",
                    "ASHUTOSH VARMA",
                    "SHRESTHA GUPTA",
                    "ANMOL VERMA",
                    "SHASHANK KESERWANI",
                    "ANIKET PANDEY",
                    "PRATEEK SINGH",
                    "ADITYA KUMAR SINGH",
                    "TANYA RANJAN",
                    "VASHISTHA NARAYAN RANA",
                    "AKHILESH MISHRA",
                    "AYUSH NISHAD",
                    "PRATEEK SRIVASTAVA",
                    "ARYAN YADAV",
                    "UTKARSH KESARWANI",
                    "PRIYANSHU SHARMA",
                    "SOUMYA",
                    "KASFUL HASAN",
                    "DEVANSH RASTOGI",
                    "PRABHAT SINGH",
                    "MOHD ALTAMAS",
                    "VAIBHAV SHUKLA",
                    "ABHISHEK GUPTA"
                ],
                "BBA-IBM": [
                    "PRANJAL RASTOGI",
                    "SHUCHI RASTOGI",
                    "VISHAL DUBEY",
                    "JYOTSNA SRIVASTAVA",
                    "SATWIK SINGH",
                    "AYUSHI SINGH",
                    "VRINDA RASTOGI",
                    "RIMJHIM KESARWANI",
                    "ARPIT SHRIVASTAVA",
                    "SABIKA ZEHRA",
                    "HARSHIT TRIPATHI",
                    "MOHD SHARIQ",
                    "RAJ ARYAN PANDEY",
                    "SANSKAR PANDEY",
                    "SAKSHI MISHRA",
                    "MANYA KAPOOR",
                    "ASHUTOSH SHUKLA",
                    "ADARSH KUMAR PRAJAPATI",
                    "KRITIKA SINGH",
                    "HIMANSHI SRIVASTAVA",
                    "JAYANT KUMAR",
                    "SHIVANAND TRIPATHI",
                    "PRAFULL RAI",
                    "ANUSH KAUSHIK",
                    "POONYA PRATAP SINGH"
                ],
                "B.COM(HONS)": [
                    "NEHA SHIVHARE",
                    "DEEPIKA DWIVEDI",
                    "KUNAL KUMAR SINGH",
                    "ABHIJEET PANDA",
                    "MOHIT MOHAN MISHRA",
                    "ANURAG KUMAR YADAV",
                    "SAURAV PANDEY",
                    "RAUNAK JAHAN",
                    "ANUSHKA SINGH",
                    "HARSH DUBEY",
                    "ASTHA UPADHYAY",
                    "SNEHIL RAJ",
                    "PRANAV GOYAL",
                    "HASAN RAZA",
                    "ANUJ KUMAR",
                    "ASHISH KUMAR",
                    "SANCHIT RASTOGI",
                    "SHUBHAM SAROJ",
                    "AYUSH SINGH",
                    "SHASHWAT PANDEY",
                    "SUMIT BOSE",
                    "ARUN KUMAR PANDEY",
                    "PRANJUL SHUKLA",
                    "ANSHIKA SRIVASTAVA",
                    "ADITI SINGH",
                    "AMAN MISHRA",
                    "PARITOSH",
                    "VISHWASH KUSHWAHA"
                ],
                "MCA": [
                    "SAGAR CHAURASIYA",
                    "SAKSHI SINGH",
                    "ISHA TRIPATHI",
                    "AVINASH TIWARI",
                    "PARWATI",
                    "ARBIYA SABRI",
                    "SINGH ABHAY PRATAP AMAR",
                    "SARTHAK KESARWANI",
                    "NIKHIL KUMAR SAHU",
                    "AVIRAL SRIVASTAVA",
                    "SHIVAM GUPTA",
                    "TRYAMBKESHWAR TRIPATHI",
                    "KM. SUPRIYA MAURYA",
                    "AROHI MISHRA",
                    "SHIKHAR SRIVASTAVA",
                    "HIMANSHU SINGH",
                    "SACHIN PANDEY",
                    "DHIRAJ KUMAR KUSHWAHA",
                    "AVINASH SINGH PATEL",
                    "SAURABH KUMAR",
                    "PRANAV MISHRA",
                    "NISHAD GUDDU SHYAMBIHARI",
                    "RAKESH BIND",
                    "HARSH GUPTA"
                ],
                "BCA": [
                    "KUNAL PATEL",
                    "ADITI DWIVEDI",
                    "TIWARI AAZAD PRAMOD",
                    "RITESH KUMAR",
                    "SUJEET KUMAR",
                    "TANISH KUMARI",
                    "HADIYA AKHTAR",
                    "PRANJALI PANDEY",
                    "JYOTI KUMARI",
                    "MOHD INZIMAM SHAHID",
                    "KUNAL PANDEY",
                    "MOHAMMAD ASJAD KHAN",
                    "SHAKSHI SINGH",
                    "GAURAV KUMAR",
                    "MOHAMMAD ARBAZ",
                    "ARSHAN ALVI",
                    "ZARGHAM ULLAH",
                    "RUCHI KUSHWAHA",
                    "AYUSH KUMAR KUSHWAHA",
                    "RIYA MISHRA",
                    "MANSI SAINI",
                    "SAURABH VISHWAKARMA",
                    "GULAM MOHD NIYAZI",
                    "SHIVAM KUMAR SINGH",
                    "FAHAD AHMAD",
                    "PRANJAL SHUKLA",
                    "NIKHIL KUMAR PATEL",
                    "ADITYA SINGH",
                    "ANUJ KUSHWAHA",
                    "DIVYANSHU KASAUDHAN",
                    "HAMZA JAVED",
                    "AMAN KUMAR SINGH",
                    "RANJEET YADAV",
                    "AYUSH KUMAR GAUTAM",
                    "SHASHANK",
                    "ANIMESH GUPTA",
                    "VINEET SINGH",
                    "ANISH MISHRA",
                    "MOHIT GUPTA",
                    "SHIV PRAKASH OJHA",
                    "SYED IRTAZA HASNAIN",
                    "SHANE ALI QURESHI",
                    "PRAVIN KUMAR",
                    "RITESH MISHRA",
                    "VICKY KUMAR SINGH",
                    "SIDHDARTH KUSHWAHA",
                    "GHANSHYAM SINGH",
                    "AMAN JAISWAL",
                    "PRIYAM YADAV",
                    "SUDHANSHU KASAUDHAN",
                    "MAYANK PATHAK",
                    "AMRIT SINGH GAUTAM",
                    "ADARSH KUMAR",
                    "SHIVANSH KATIYAR",
                    "HARSHIT MISHRA",
                    "AVINASH MAURYA",
                    "MADAN MOHAN PANDEY",
                    "VIVEK TIWARI",
                    "VIKAS GUPTA",
                    "NAYAN PRADHAN"
                ],
                "BCA-IBM": [
                    "VISHESH SRIVASTAVA",
                    "BISHAL KUMAR GUPTA",
                    "UNNATI AGRAWAL",
                    "ABHAY MISHRA",
                    "CHAHAK MEHROTRA",
                    "ABHISHEK YADAV",
                    "HIMANSHU MADNANI",
                    "HARSHIT SRIVASTAVA",
                    "ABDUL AHAD SIDDIQUI",
                    "SUMIT KUMAR KUSHWAHA",
                    "TUSHAR TIWARI",
                    "MOHAMMAD SHARIQ",
                    "SHREY RAJWANSH",
                    "AZAAN KHAN",
                    "ANKIT TIWARI",
                    "BHAVESH TRIPATHI",
                    "SARVESH SINGH",
                    "PRAVEEN KUMAR MISHRA",
                    "ANAND RAJ SINGH",
                    "SUDHANSH UPADHYAY",
                    "MOHD ASHHAD ALI",
                    "ADITYA KUMAR CHAUHAN",
                    "ADVAYA PATHAK",
                    "EKLAVYA SINGH",
                    "SARTHAK SRIVASTAVA",
                    "CHANDRAKANT PAL",
                    "VIKASH KUSHWAHA"
                ],
                "DIPLOMA-CSE": [
                    "NIDHI VERMA",
                    "SHABEEH MOHAMMAD ABIDI",
                    "SACHIN MISHRA",
                    "TUSHAR TRIPATHI",
                    "DHRUV TRIPATHI",
                    "JAYBABU PANDEY",
                    "ADARSH TIWARI",
                    "ADITYA DEV"
                ],
                "BA-ENGLISH": [
                    "MILI GUPTA",
                    "SATYA PRAKASH PRAJAPATI",
                    "BHUMI MEHROTRA",
                    "SHAH MOHAMMAD ABULLAIS",
                    "NITYA PANDEY"
                ],
               "BSC-PHYSICS": [
                    "UTKARSH NARAYAN MISHRA",
                    "ARUN KUMAR YADAV"
                ],
                "BAJMC": [
                    "ADITI DUBEY",
                    "AMAN TIWARI",
                    "JANHAVI SINGH",
                    "YASHI KESARWANI",
                    "ARYAN SINGH",
                    "HARSHITA TIWARI",
                    "KHUSHI SINGH",
                    "KHUSHI MISHRA",
                    "SANSKAR GUPTA"
                
                ]

    // Add other course-student mappings
};

// Routes
app.get('/', (req, res) => {
    res.render('index', { courses: coursesData });
});

app.get('/api/courses', (req, res) => {
    const search = req.query.search.toLowerCase();
    const filteredCourses = coursesData.filter(course => 
        course.toLowerCase().includes(search)
    );
    res.json(filteredCourses);
});

app.get('/api/students', (req, res) => {
    const course = req.query.course;
    const search = req.query.search.toLowerCase();
    
    if (!studentsData[course]) {
        return res.json([]);
    }

    const filteredStudents = studentsData[course].filter(student =>
        student.toLowerCase().includes(search)
    );
    res.json(filteredStudents);
});

app.post('/register', async (req, res) => {
    try {
        const { name, course } = req.body;
        const student = new Student({ name, course });
        await student.save();
        res.json({ success: true, message: 'Registration successful!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Registration failed!' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});