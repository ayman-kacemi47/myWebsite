import React, { useEffect } from "react";
import ProjectsCard from "./ProjectsCard";
import ReactLaravel from "../images/icons/reactAndLaravel.png";
import ReactLaravelWeb from "../images/icons/reactandlaravelWeb.webp";
import HtmlCssJs from "../images/icons/htmlCssJs.png";
import HtmlCssJsWeb from "../images/icons/htmlCssJsWeb.webp";
import Mern from "../images/icons/Mern.png";
import MernWeb from "../images/icons/mernWeb.webp";
import flutter from "../images/icons/flutter.png";
import flutterWeb from "../images/icons/flutterWeb.webp";
import flutterAndLaravel from "../images/icons/flutterAndLaravel.png";
import flutterAndLaravelWeb from "../images/icons/flutterAndLaravelWeb.webp";
import nextJs from "../images/icons/nextJs.png";
import nextJsWeb from "../images/icons/nextJsWeb.webp";
import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";

const Projects = () => {
  const [t, i18n] = useTranslation();
  const dir = i18n.dir() === "rtl" ? -1 : 1; //si right to left on doit changes la logique de Js
  console.log(" dir rtl = -1  else -1  ::::  ", dir);
  useEffect(() => {
    const projectsList = document.querySelector(".projects-wrapper");
    const slideButtons = document.querySelectorAll(
      ".projects-section .slide-btn"
    );
    const maxScrollLeft = projectsList.scrollWidth - projectsList.clientWidth;
    console.log("max ", maxScrollLeft);

    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "arrowLeft" ? -1 : 1;
        const scrollAmount = (250 + projectsList.clientWidth * 0.1) * direction;
        projectsList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });

    const handleHideArrow = () => {
      if (dir === -1) {
        // dir === -1  donc c'est l'arabe
        slideButtons[0].style.display =
          projectsList.scrollLeft >= 0 ? "none" : "block";
        slideButtons[1].style.display =
          projectsList.scrollLeft <= maxScrollLeft * dir + 10 // + 10  c'est comme incertitude , + parceque la valeur est negatif
            ? "none"
            : "block";
      } else {
        slideButtons[0].style.display =
          projectsList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display =
          projectsList.scrollLeft >= maxScrollLeft - 10 ? "none" : "block";
      }
    };

    projectsList.addEventListener("scroll", () => {
      handleHideArrow();
    });
  });

  return (
    <section className="projects-section" id="projects">
      <h2>{t("projectsSectionTitle")}</h2>
      <p className="h6ClickLogo" style={{ textAlign: "center" }}>
        {t("ClickLogoText")}
      </p>
      <div
        id={dir === 1 ? "arrowLeft" : "arrowRight"}
        className=" slide-btn"
        style={{ display: "none" }}
      ></div>
      <div
        id={dir === 1 ? "arrowRight" : "arrowLeft"}
        className=" slide-btn"
      ></div>
      <div className="projects-wrapper">
        <ProjectsCard
          title={t("ThisProjectTitle")}
          description={t("ThisProjectDesc")}
          icon={
            <a href={window.location.href}>
              <i
                className="fa-brands fa-react"
                style={{ color: "white", scale: "3.5", opacity: "0.9" }}
              />
            </a>
          }
          id={1}
        />
        <ProjectsCard
          title={t("PFETitle")}
          description={
            <Trans i18nKey="PFEDesc">
              0
              <span
                style={{
                  color: "#fcd018",
                  textAlign: "center",
                  display: "block",
                }}
              >
                1
              </span>
            </Trans>
          }
          icon={
            <a
              href="https://youtu.be/HzMYFqQHZbg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source type="image/webp" srcSet={ReactLaravelWeb} />
                <img
                  alt="React and laravel logos"
                  src={ReactLaravel}
                  style={{ height: "83px", margin: "auto", opacity: "0.8" }}
                />
              </picture>
            </a>
          }
        />
        <ProjectsCard
          title={t("ToDoTitle")}
          description={t("ToDoDesc")}
          icon={
            <a
              href="https://ayman-to-do-list.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source type="image/webp" srcSet={HtmlCssJsWeb} />
                <img
                  alt=" html,css an JavaScript logos"
                  src={HtmlCssJs}
                  style={{ height: "83px", margin: "auto", opacity: "0.8" }}
                />
              </picture>
            </a>
          }
        />
        <ProjectsCard
          title={t("DevConnecterTitle")}
          description={t("DevConnecterDesc")}
          icon={
            <a
              href="https://ayman-mern-brad.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source type="image/webp" srcSet={MernWeb} />

                <img
                  alt="Mern Logo"
                  src={Mern}
                  style={{ height: "100px", margin: "auto", opacity: "0.8" }}
                />
              </picture>
            </a>
          }
        />
        <ProjectsCard
          title={t("WeatherAppTitle")}
          description={t("WeatherAppDesc")}
          icon={
            <a
              href="https://ak-47-weather-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-brands fa-react"
                style={{ color: "white", scale: "3.5", opacity: "0.9" }}
              />
            </a>
          }
        />
        <ProjectsCard
          title={t("Projects.CashBackApp.title")}
          description={t("Projects.CashBackApp.desc")}
          icon={
            <a
              href="https://www.m3aounin.ma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source type="image/webp" srcSet={flutterWeb} />

                <img
                  alt="Flutter Logo"
                  src={flutter}
                  style={{ height: "100px", margin: "auto", opacity: "0.8" }}
                />
              </picture>
            </a>
          }
        />
        <ProjectsCard
          title={t("Projects.InsuranceBrokerClientApp.title")}
          description={t("Projects.InsuranceBrokerClientApp.desc")}
          hoverMessage={t("linkHoverMessage")}
          icon={
            <picture>
              <source type="image/webp" srcSet={flutterAndLaravelWeb} />

              <img
                alt="Flutter and Laravel Logo"
                src={flutterAndLaravel}
                style={{ height: "100px", margin: "auto", opacity: "0.8" }}
              />
            </picture>
          }
          disabled={true}
        />
        <ProjectsCard
          title={t("Projects.RentalAdmin.title")}
          description={t("Projects.RentalAdmin.desc")}
          hoverMessage={t("linkHoverMessage")}
          icon={
            <i
              className="fa-brands fa-react"
              style={{ color: "white", scale: "3.5", opacity: "0.9" }}
            />
          }
          disabled={true}
        />
        <ProjectsCard
          title={t("Projects.RentalClient.title")}
          description={t("Projects.RentalClient.desc")}
          icon={
            <a
              href="https://www.rental365.ma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source type="image/webp" srcSet={nextJsWeb} />

                <img
                  alt="NextJs Logo"
                  src={nextJs}
                  style={{ height: "100px", margin: "auto", opacity: "0.8" }}
                />
              </picture>
            </a>
          }
        />
      </div>
    </section>
  );
};

export default Projects;
