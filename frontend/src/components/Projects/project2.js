const Project2 = () => {
  return (
    <div className="projectContainer">
      <h1>Sk8 Status</h1>
      <p>Sk8 Status is a full stack web application that I developed during a 14 day sprint for my capstone project while at devCodeCamp. The application was designed for skateboarders to connect with one another.</p>
      <p>Technologies used: JavaScript, React.js, Express.js, Node.js, MongoDB, HTML, CSS, Mongoose, Postman, Git, Google Maps API, Axios, JSON Web Token, Bootstrap</p>
     <p>Application features include:</p>
     <ul>
   
     <li>-User account registration, login, and logout (Authentication & JWT)
</li>
     <li>-Edit user profile including Name, About Me, and Stance
</li>
     <li>-Individual skatepark pages, displaying skatepark info and reviews section allowing to write and view reviews
</li>
     <li>-Integrated react-google-maps/api to display maps of skatepark location
</li>
     <li>-Friends page allowing to accept/deny/send/cancel friend requests
</li>
     <li>-Set a “Skate Status” so friends can see which skatepark your skating at and for how long
</li>

     </ul>

     
      <img className="projectImg" src={require("./imgProjects/Sk8Status.png")} />
    </div>
  );
};

export default Project2;
