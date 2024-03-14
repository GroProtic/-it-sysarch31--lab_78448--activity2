import Student from "./Student";
import tae from './assets/tae.jpg'
import yuy from './assets/yuy.jpg'
import oats from './assets/oats.jpg'
import asdads from './assets/asdasd.jpg'
const students = [
    {id: 1, name: "Joseph Hepa", image: tae, email:"hepajoe123@gmail.com"},
    {id: 2, name: "Bidenes Jose", image: yuy, email:"joebi@gmail.com"},
    {id: 3, name: "Anna Nina", image: oats, email:"annanina12@gmail.com"},
    {id: 4, name: "Ali Wang", image: asdads, email:"awang123@yahoo.com"},
    {id: 5, name: "Anita Wang", image: asdads, email:"anitamaxwin123@gmail.com"},
  ];
export default function List(){
        return(
            <div className="card-container">
                {students.map(student => (
                    <Student key={student.id} student={student} />
                ))}
            </div>
        );
}