import { Col, Container, Row } from "react-bootstrap";
import ProjectsShowcaseCard from "./ProjectsShowcaseCard";

const ProjectsShowcase: React.FC = () => {
  return (
    <>
    <hr style={{width:"80%", textAlign:"center", margin: "0 auto", paddingTop: "50px",}}></hr>
    <h2 className="text-center" id="project-navigation"
      style=
      {{
        fontWeight: "bold",
        fontSize: "4.5rem",
      }}>
      PROJECTS
    </h2>
        <h1
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", 
            color: "#FF5252",
            fontSize: "4rem",
            textAlign: "center",
            marginTop: "-20px",
          }}
              >____________________
        </h1>
        <Container className="py-4">
  <Row gap={4}>
    {/* Left Column: Project Card */}
    <Col xs={12} md={8} lg={6}>
    <div className="card-hover" onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.025)";
            e.currentTarget.style.border = "5px solid rgba(255, 82, 82, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1.0)";
            e.currentTarget.style.border = "2px solid rgba(155, 155, 155, 0.5)";
          }}
          
          style={{borderRadius: "8px",}}
          
          >
      <ProjectsShowcaseCard
        imageSrc={"https://picsum.photos/seed/picsum/900/500"}
        imageAlt={"Placeholder image"}
        title={"MOVIES STORE"}
        description={"A showcase of a full-stack movie store application using Django."}
        projectLink={"https://github.com/thatrobotdev/moviesstore"}
        processLink={
          "https://thatrobotdev.pythonanywhere.com/"
        }
      />
    </div>
      <div style={{padding: "10px"}}></div>

      <div style={{border: "solid 2px #aaa", borderRadius: "8px", padding: "20px", }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.025)";
          e.currentTarget.style.border = "5px solid rgba(255, 82, 82, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1.0)";
          e.currentTarget.style.border = "2px solid rgba(155, 155, 155, 0.5)";
        }}
      >
        {/* VIDEO GOES HERE */}
        {/* VIDEO GOES HERE */}
        {/* VIDEO GOES HERE */}
      </div>
    </Col>

    {/* Right Column: Explanation Text */}
    <Col xs={12} md={8} lg={6} >
      <div >
        <div style={{border: "solid 2px #aaa", borderRadius: "8px", padding: "20px"}}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.025)";
            e.currentTarget.style.border = "5px solid rgba(255, 82, 82, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1.0)";
            e.currentTarget.style.border = "2px solid rgba(155, 155, 155, 0.5)";
          }}
        >
        <u style={{fontSize:"30px"}} className="colored-underline fw-bold"><h3 className="black-text">ABOUT</h3></u>
          <p>
          This project is a full stack movie store application.
          </p>
          <div style={{marginLeft: "20px", }}>
          <p style={{ margin: "4px 0" }}>
            - GT Movies Store is a web application that allows users to access information about movies
            and place orders to purchase them.
          </p>
          <p style={{ margin: "4px 0" }}>
            - Users will also be able to list, create, edit, and delete movie reviews.
          </p>
          <p style={{ margin: "4px 0" }}>
            - Provides users with information about each movie, such as its name, price, description, and a cover image.
          </p>
          </div>
        </div>
        <div style={{padding: "10px"}}></div>
        <div style={{border: "solid 2px #aaa", borderRadius: "8px", padding: "20px"}}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.025)";
            e.currentTarget.style.border = "5px solid rgba(255, 82, 82, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1.0)";
            e.currentTarget.style.border = "2px solid rgba(155, 155, 155, 0.5)";
          }}
        
        >
        <u style={{fontSize:"30px"}} className="colored-underline fw-bold"><h3 className="black-text">TECHNICALS</h3></u>
          <div style={{marginLeft: "20px"}}>
            <p style={{ margin: "4px 0" }}>
              - This application is built using Django and Python, with database features from SQL.
            </p>
            <p style={{ margin: "4px 0" }}>
              - All front-end features are built with HTML and CSS.
            </p>
          </div>
        </div>

        <div style={{padding: "10px"}}></div>
        <div className="card-hover" style={{border: "solid 2px #aaa", borderRadius: "8px", padding: "20px"}}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.border = "5px solid rgba(255, 82, 82, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1.0)";
            e.currentTarget.style.border = "2px solid rgba(155, 155, 155, 0.5)";
          }}
        >
        <u style={{fontSize:"30px", paddingBottom: "10px"}} className="colored-underline fw-bold"><h3 className="black-text">SCRUM PROCESS</h3></u>
          <div >
            <p style={{ margin: "4px 0", paddingBottom: "10px", paddingTop: "10px" }}>
              <b>1. Product Backlog:</b> Using <span><a href="https://trello.com/b/dMDI5bpG/cs-2340-project" className="text-link-style">Trello</a></span> we created an extensive
              product backlog for designating tasks by priority, roles, categories, and order. In this backlog we sorted each individual user story
              as a task, undergoing a pipeline till it is classified as a finished task. 
            </p>
            <p style={{ margin: "4px 0", paddingBottom: "10px" }}>
              <b>2. Sprint Planning:</b> We collaborated to create a <span><a href="https://trello.com/b/dMDI5bpG/cs-2340-project" className="text-link-style">Sprint Planning Document</a> </span>
              to help us to start the project, organize responsibilities, create designated meeting times, and more. The sprint planning document was incredibly helpful, as it
              laid the groundwork we needed to get started!
            </p>
            <p style={{ margin: "4px 0", paddingBottom: "10px" }}>
              <b>3. Sprint Execution:</b> We began development! We each begun working on tasks on the Trello Board in chronological order, to maintain an organized workflow. 
              For collaborative programming, we used <span><a href="https://trello.com/b/dMDI5bpG/cs-2340-project" className="text-link-style">GitHub</a></span>. GitHub&apos;s version control 
              and collaborative design made working together a seamless experience, without a worry of messing up previously implemented code. Our progress was documented
              in our team discord chat under Stand-Up Summaries to keep tabs on progress and ensuring daily progress by team memebers.
            </p>

            <p style={{ margin: "4px 0", paddingBottom: "10px" }}>
              <b>4. Sprint Demo:</b> The Sprint Demo was our trial showcasing of the movie store site to our client. We demonstrated each of the features and recieved feedback
              for improvement. In this step, our client suggested we display the reviews to the users in addition to just the review database, to add
              text if the user searches a movie that was not found in the site, and a few other minor features, however, overall our client was extremely impressed with our 
              progress. 
            </p>

            <p style={{ margin: "4px 0", paddingBottom: "10px" }}>
              <b>5. Sprint 2:</b> This phase includes any revisions needed to be implemented from Sprint 1 Demo. Since we were able to complete the vast majority of 
              tasks in the first sprint, we were able to take a step back from the project, and manually create an elegant team webpage to illustrate our progress 
              in this project.
            </p>
          </div>
        </div>
      </div>
    </Col>
  </Row>
</Container>
    
    </>
  );
};

export default ProjectsShowcase;
