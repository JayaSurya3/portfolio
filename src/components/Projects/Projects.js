import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Human-Centric AI"
              description="Developed a framework focused on enhancing user experiences through personalized AI solutions. Leveraged advanced machine learning algorithms to create human-centered applications for tasks such as sentiment analysis, user preference modeling, and adaptive learning systems."
           />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Data Hiding Using Steganography Tool"
              description="Built a steganography tool that uses deep learning techniques to securely hide and retrieve sensitive data within multimedia files such as images and audio. This project provides a novel approach to data protection, ensuring high levels of security and robustness."
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Real-Time Speed Bump Detection"
              description="Designed a real-time speed bump detection system using convolutional neural networks (CNNs) and computer vision techniques. The model processes live video streams from vehicle cameras to identify speed bumps, enhancing safety and improving driver assistance systems."
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Road Anomaly Detection Using AI"
              description="Created an AI-powered system to detect road anomalies such as potholes, cracks, and other hazards. The solution utilizes deep learning models trained on diverse datasets, enabling accurate anomaly detection and aiding in road maintenance planning."
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Cyber Security AI"
              description="Developed an AI-based solution for detecting and mitigating cybersecurity threats, including phishing attempts, malware, and unauthorized access. The system integrates natural language processing (NLP) for email analysis and anomaly detection techniques to strengthen organizational security."
            
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
