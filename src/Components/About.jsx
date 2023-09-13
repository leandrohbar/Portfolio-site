/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

import pythonIcon from "../images/languages/python.svg";
import cplusplusIcon from "../images/languages/cplusplus.svg";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a dedicated AI & Machine Learning enthusiast with a passion for crafting innovative and elegant solutions that harness the power of data-driven intelligence. My goal is to merge the complexity of AI algorithms with the simplicity of user experiences, creating cutting-edge applications that empower users through seamless, intelligent interactions.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python Expertise",
  "Machine Learning Frameworks",
  "Natural Language Processing (NLP)",
  "Computer Vision",
  "Deep Learning",
  "Production Projects",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "-Proficiency in Python for AI and Machine Learning solutions development.\n" +
  "-Experience with TensorFlow, PyTorch, and Scikit-Learn for building ML models.\n" +
  "-Practical applications of NLP in text analysis projects and chatbots.\n" +
  "-Working with CNNs and object detection in images using OpenCV.\n" +
  "-Implementing deep neural networks for classification and regression tasks.\n" +
  "-Developing and deploying ML models in production to solve real-world problems.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          letterSpacing: "0.02em",
          color: "#fff",
          fontSize: "24px",
          lineHeight: "1.3",
          fontWeight: 500,
          fontFamily: "Materialiconsround, sans-serif",
          backgroundColor: "black",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            letterSpacing: "0.02em",
            color: "#fff",
            fontSize: "20px",
            lineHeight: "1.6",
            fontWeight: 500,
            fontFamily: "Materialiconsround, sans-serif",
            textAlign: "left",
            columns: 2,
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p
          style={{
            letterSpacing: "0.02em",
            color: "#fff",
            fontSize: "24px",
            lineHeight: "1.5",
            fontWeight: 500,
            fontFamily: "Materialiconsround, sans-serif",
            padding: "1rem 3rem 0",
            textAlign: "left",
          }}
        >
          {detailOrQuote.split("\n").map((item, key) => {
            return (
              <span key={key}>
                {item}
                <br />
              </span>
            );
          })}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {pythonIcon && (
            <a href={`https://www.python.org/`} target="_blank" rel="noopener noreferrer">
              <img
                src={pythonIcon}
                alt="Python"
                className="socialIcon"
                style={{ height: "70px", width: "50px" }}
              />
            </a>
          )}
          {cplusplusIcon && (
            <a href={`https://www.python.org/`} target="_blank" rel="noopener noreferrer">
              <img
                src={cplusplusIcon}
                alt="CPlusPlus"
                className="socialIcon"
                style={{ height: "70px", width: "50px" }}
              />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
