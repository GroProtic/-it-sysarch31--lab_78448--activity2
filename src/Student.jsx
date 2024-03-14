import profilePic from './assets/biot.jpg'

function Student({ student }){
    return(
        <div className="student">
            <img className="student-biot"src={student.image}></img>
            <h2 className="student-title">{student.name}</h2>
            <p>{student.email}</p>
        </div>
           

    );
}

export default Student