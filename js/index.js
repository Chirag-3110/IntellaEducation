const teachers=[
    {
        name:"Jason Fernandes",
        image:"assets/teachers/teacher1.jpeg",
        subjects:["Crypto","Tokenomics",],
        expertize:"Chief Bussiness Officer NFT Tech",
        experience:"10 years of Experience"
    },
    {
        name:"John Wick",
        image:"images/teachers/teacher-1.jpg",
        subjects:["Computer Networking","Computer Security","Human Computer Interfacing"],
        expertize:"History",
        experience:"10 years of Experience"
        
    },
    {
        name:"Tom Elish",
        image:"images/teachers/teacher-1.jpg",
        subjects:["Computer Networking","Computer Security","Human Computer Interfacing"],
        expertize:"Computer Science",
        experience:"10 years of Experience"
    },
    {
        name:"John Doe",
        image:"images/teachers/teacher-1.jpg",
        subjects:["Computer Networking","Computer Security","Human Computer Interfacing"],
        expertize:"Computer Science",
        experience:"10 years of Experience"
    },
    {
        name:"Tom Holland",
        image:"images/teachers/teacher-1.jpg",
        subjects:["Computer Networking","Computer Security","Human Computer Interfacing"],
        expertize:"Spider Man",
        experience:"10 years of Experience"
    },
    {
        name:"Tony Stark",
        image:"images/teachers/teacher-1.jpg",
        subjects:["Computer Networking","Human Computer Interfacing"],
        expertize:"Iron Man",
        experience:"10 years of Experience"
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
                            <h6 class="text-color" >${teacher.expertize}</h6>
                            <h6 class="text-color" >${teacher.experience}</h6>
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