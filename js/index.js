const teachers=[
    {
        name:"Jason Fernandes",
        image:"assets/teachers/teacher1.jpeg",
        subjects:["Crypto", "Tokenomics", "NFTs", "Fintech"],
        linkedin:"https://www.linkedin.com/in/thejasonfernandes/",
        // experience:"10 years of Experience"
    },
    {
        name:"Dr Manish Jain",
        image:"assets/teachers/ManishJ1.jpg",
        subjects:["Data Science", "Deep Learning", "Machine Learning"],
        linkedin:"https://www.linkedin.com/in/dr-manish-kumar-jain-5719b986/",
        // experience:"10 years of Experience"
        
    },
    {
        name:"Ashish Kumar",
        image:"assets/teachers/Ashishk_2.jpg",
        subjects:['Solidity', 'web3.js', 'Etherium', 'Supply Chain Management'],
        linkedin:"https://www.linkedin.com/in/ashishk74/",
        // experience:"10 years of Experience"
    },
    {
        name:"Sanjay Bhargava",
        image:"assets/teachers/Sanja_Bhargava_2.jpeg",
        subjects:['Rust', 'Golang', 'Etherium'],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"Ambalavanan Bharanidharan",
        image:"assets/teachers/A_Bharanidharan.jpeg",
        subjects:['Full Stack Web Development',  'Java', 'PHP', 'Linux', 'Blockchain'],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"G Kishore Babu",
        image:"assets/teachers/G_Kishore_Babu.png",
        subjects:['Cloud', 'AI', 'RPA', 'Virtual Agents (Chatbots)', 'Hyperledger'],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"Tridib Ghosh",
        image:"assets/teachers/Tridib_Ghosh.png",
        subjects:['Design Thinking', 'AI Design'],
        linkedin:"https://www.linkedin.com/in/tridibghosh/",
        // experience:"10 years of Experience"
    },
    {
        name:"Abhishek Singh",
        image:"assets/teachers/Abhishek_Singh.png",
        subjects:['Blockchain', 'DeFi', 'DAO'],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"Chirag Rajput",
        image:"assets/teachers/Chirag_Rajput.png",
        subjects:['Chai & Mocha', 'Web3 APIs', 'MEAN'],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"Akshat Shah",
        image:"assets/teachers/akshat_shah.png",
        subjects:['MERN', 'Swift', 'Hyperledger Fabric'],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"Adhitya Iyer",
        image:"assets/teachers/Adhitya_Iyer.png",
        subjects:['Content Strategy', 'Marketing', 'WEB 3.0'],
        linkedin:"https://www.linkedin.com/in/adhityaiyer/",
        // experience:"10 years of Experience"
    },
    {
        name:"Pranshu Rastogi",
        image:"assets/teachers/Pranshu Rastogi.png",
        subjects:['Blockchain', 'Substrate, DeFi', 'Etherium'],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"Bala Saicharan",
        image:"assets/teachers/BalaSaicharan.png",
        subjects:['Product Management', 'AWS', 'Blockchain'],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"Rashmi",
        image:"assets/teachers/Rashmi.png",
        subjects:['UX Design', 'Product Management', 'Computational Design'],
        linkedin:"https://www.linkedin.com/in/rashmi-malik-4821159b/",
        // experience:"10 years of Experience"
    },
    {
        name:"Shreya Malhotra",
        image:"assets/teachers/Shreya_Malhotra.png",
        subjects:['UI Design', 'Figma', 'Wireframing'],
        linkedin:"https://www.linkedin.com/in/shreyamalhotra2193/",
        // experience:"10 years of Experience"
    },
    {
        name:"Anant Verma",
        image:"assets/teachers/Anant_Verma.png",
        subjects:["Robotics", "IoT", "Python"],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"Akansha Rajput",
        image:"assets/teachers/Akansha_Rajput.png",
        subjects:["Robotics", "IoT", "C"],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"N Vidya Rani",
        image:"assets/teachers/N_Vidya_Rani.png",
        subjects:["Block Coding"],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"Jaykishan Singh",
        image:"assets/teachers/Jaykishan Singh.png",
        subjects:['Robotics', 'IoT', 'Full Stack Web Development', 'VLSI'],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"Shubhranil Kundu",
        image:"assets/teachers/Shubhranil_Kundu.png",
        subjects:['Programming & Software Development', 'MATLAB', 'Image Processing', 'Communication Systems'],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"J Scott Christianson",
        image:"assets/teachers/J_Christianson_Scott.png",
        subjects:['Blockchain', 'Web3.0'],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"Kashif Hussain",
        image:"assets/teachers/Kashif_Hussain.png",
        subjects:['J2EE', 'DSA', 'Big Data', 'C++'],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"Diptabroto",
        image:"assets/teachers/Diptabroto.png",
        subjects:['Wordpress', 'Web Development'],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"Maitrish",
        image:"assets/teachers/Maitrish.png",
        subjects:["Game Development"],
        linkedin:"",
        // experience:"10 years of Experience"
    },
    {
        name:"Pradipto Chatterjee",
        image:"assets/teachers/Pradipto_Chatterjee.png",
        subjects:['Python', 'Java', 'C', 'C++', 'React', 'SQL'],
        linkedin:"",
        // experience:"10 years of Experience"
    },
]


var modalWrapper=null;
localStorage.setItem('courseName', '');
const showModal=(tecaherObj)=>{
    if(modalWrapper!==null){
        modalWrapper.remove();
    }
    const  teacher=teachers.find(item=>{
        return item.name===tecaherObj.name
    })
    modalWrapper=document.createElement("div");
    modalWrapper.innerHTML=`
        <div class="modal fade" id="teachermodal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div  class="modal-content rounded-0 border-0 p-4">
                <div class="modal-header border-0">
                    <h3>Teacher Details</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div style="display: flex;flex-direction: column;align-items: center;" >
                    <img style="width:150px;border-radius:50%" src=${teacher.image} alt="teacher">
                    <div class="col-md-12 mb-5" style="margin-top:25px;" >
                        <div >
                            <h3>${teacher.name}</h3>
                        </div>
                            <h4 class="mb-4" style="margin-top:15px;" >Subjects</h4>
                            <ul class="list-unstyled row" style="margin-top:-15px;" >
                                ${
                                    teacher.subjects.map((item)=>{
                                        return `<li  style="margin-left:15px;">${item}</li>`
                                    })
                                }
                            </ul>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    `;
    document.body.append(modalWrapper);
    var modal=new bootstrap.Modal(modalWrapper.querySelector('.modal'));
    modal.show();
}

const setSelectedData=(courserName)=>{
    localStorage.setItem("courseName",courserName);
    window.location.href = "course-single.html";
}

function showHideTeacher(){
    let allTeachers=document.getElementById("allTeachers");
    let button=document.getElementById("button_text");
    if (allTeachers.style.display === "none") {
        allTeachers.style.display='flex'
        button.innerHTML="Show Less"
    } else {
        allTeachers.style.display='none'
        button.innerHTML="Show More"
    }
}