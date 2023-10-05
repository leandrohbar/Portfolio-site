/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

import pythonIcon from "../images/languages/python.svg";
import pytorchicon from "../images/languages/pytorch.svg";
import tensorflowicon from "../images/languages/tensorflow.svg";
import opencv from "../images/languages/opencv.svg";

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
import image from "../images/apple-1868496_1920.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Sobre Mim\n" +
  "Bem-vindo ao meu portfólio em constante evolução! Estou em uma emocionante jornada de transição de carreira, explorando o emocionante mundo da AI & Machine Learning, enquanto desenvolvo habilidades sólidas em Python e C# .NET Development.\n\n" +
  "Minha Jornada\n" +
  "Minha paixão por tecnologia sempre esteve presente, e agora estou comprometido em transformar esse interesse em uma carreira promissora. Meus estudos e projetos me permitiram adquirir um entendimento sólido desses campos empolgantes, mas estou ansioso para aplicar meu conhecimento em desafios do mundo real.\n\n";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  {
    title: "Versionamento de Código:",
    topics: [
      "Conhecimento em sistemas de controle de versão, como Git e GitHub.",
      "Familiaridade com o uso de Git para colaboração em projetos.",
      "Colaboração eficaz em equipes distribuídas usando ferramentas de controle de versão.",
    ],
  },
  {
    title: "Desenvolvimento em C#:",
    topics: [
      "Experiência em desenvolvimento de aplicativos e projetos simples com C#.",
      "Projetos iniciais que demonstram minhas habilidades em C#.",
      "Ampla experiência no desenvolvimento de aplicativos e sistemas utilizando C#",
    ],
  },
  {
    title: "Desenvolvimento Ágil:",
    topics: [
      "Conhecimento de metodologias ágeis, como Scrum e Kanban.",
      "Disposição para se adaptar a mudanças e aprender com experiências anteriores.",
      "Aprendizado contínuo sobre o Scrum e sua implementação.",
    ],
  },
  {
    title: "Integração de APIs:",
    topics: [
      "Experiência com integração de APIs básicas em projetos pequenos.",
      "Disposição para explorar e aprender mais sobre integração de APIs.",
    ],
  },
  {
    title: "Teste e Depuração:",
    topics: [
      "Noções de teste de unidade, teste de integração e depuração de código.",
      "Foco em melhorar a qualidade do código com a prática.",
    ],
  },
  {
    title: "Colaboração em Equipe:",
    topics: [
      "Habilidade de trabalhar bem em equipes e aprender com colegas mais experientes.",
      "Comunicação eficaz e disposição para colaborar.",
    ],
  },
  {
    title: "Autoaprendizado e Desenvolvimento Contínuo:",
    topics: [
      "Compromisso em continuar aprendendo e aprimorando habilidades.",
      "Exploração de cursos e recursos educacionais disponíveis.",
    ],
  },
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "AI & Machine Learning\n" +
  "Minha fascinação pela Inteligência Artificial e Aprendizado de Máquina é o motor que impulsiona meu aprendizado. Estou dedicando tempo para dominar algoritmos, criar modelos preditivos e explorar as possibilidades infinitas que a AI oferece.\n\n" +
  "Desenvolvimento em Python e C# .NET\n" +
  "Tornar-me proficiente em Python e C# .NET é uma parte vital da minha jornada. Essas linguagens versáteis e poderosas são ferramentas essenciais para transformar minhas ideias em soluções práticas.\n\n" +
  "Este portfólio é um reflexo do meu compromisso com a aprendizagem contínua e com a busca de oportunidades para aplicar meu conhecimento em projetos desafiadores. Se você compartilha minha paixão por tecnologia e está em busca de colaboradores ou mentores, entre em contato. Estou animado para explorar novos horizontes e contribuir para o mundo da tecnologia.\n\n" +
  "Junte-se a mim nesta jornada de transformação e descoberta. O futuro está à nossa espera!";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          letterSpacing: "0.02em",
          color: "#fff",
          fontSize: "20px",
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
            fontSize: "17px",
            lineHeight: "1.6",
            fontWeight: 500,
            fontFamily: "Materialiconsround, sans-serif",
            textAlign: "left",
            columns: 2,
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill, index) => (
            <li
            key={index}
            style={{
              marginBottom: "2rem",
              listStyleImage: `url('src/images/languages/rocket-svgrepo-com.svg')`,
            }}>
              <strong>{skill.title}</strong>
              {skill.topics && skill.topics.length > 0 && (
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {skill.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <hr />
        <p
          style={{
            letterSpacing: "0.02em",
            color: "#fff",
            fontSize: "20px",
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
          {pytorchicon && (
            <a href={`https://pytorch.org/`} target="_blank" rel="noopener noreferrer">
              <img
                src={pytorchicon}
                alt="pytorch"
                className="socialIcon"
                style={{ height: "70px", width: "50px" }}
              />
            </a>
          )}
          {tensorflowicon && (
            <a href={`https://www.tensorflow.org/`} target="_blank" rel="noopener noreferrer">
              <img
                src={tensorflowicon}
                alt="tensorflow"
                className="socialIcon"
                style={{ height: "70px", width: "50px" }}
              />
            </a>
          )}
          {opencv && (
            <a href={`https://opencv.org/`} target="_blank" rel="noopener noreferrer">
              <img
                src={opencv}
                alt="opencv"
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
