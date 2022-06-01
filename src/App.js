// import logo from './logo.svg';
import './App.css';

function App() {
  //JS starts
  const time = 30;
  const names = ["Mayuri", "Nupur", "Omkar","Rushi"];
  const Info = [
    {
      Name: "Mayuri",
      pic: "https://3dvkarts.com/wp-content/uploads/2020/04/Pretty-Girl-Drawing.png"
    },
    { 
      Name: "Abhay", 
      pic: "https://htdraw.com/wp-content/uploads/2021/01/How-to-Draw-a-Boy-with-earphones-with-Pencil-Easy.jpg" 
    },
    { 
      Name: "Tuffy", 
      pic: "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn" }
    ]
  //JS Ends
  //JSX starts
  return (
    <div className="App">
      {/* <Message name="Mayuri" pic="https://3dvkarts.com/wp-content/uploads/2020/04/Pretty-Girl-Drawing.png" />
      <Message name="Abhay" pic="https://htdraw.com/wp-content/uploads/2021/01/How-to-Draw-a-Boy-with-earphones-with-Pencil-Easy.jpg" />
      <Message name="Tuffy" pic="https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn" /> */}

      {Info.map(student => <Message name={student.Name} pic={student.pic} />)} 
      {/* returning component for each object of an array */}

      {names.map(nm => <Welcome name={nm} />)}

      <p>Time to complete {4 * time} mins.</p>
    </div>
  );
  //JSX ends
}
export default App;

//Component -> Logic + View
function Message({name,pic}) {  //object destructring
  return (
    // React Fragment
    <>
      <img src={pic} className="profile-pic" alt={name} />
      <h1>Hello , {name} </h1>
    </>
  )
}

function Welcome(props) {
  return (
    <>
      {console.log(props)}
      <h1>Hello , {props.name} </h1>
    </>
  )
}