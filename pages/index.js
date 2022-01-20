import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default class Home extends React.Component {
  state = {
    message: "",
    name: "",
    email: "",
  };

  sendMessage = async () => {
    let { message, name, email } = this.state;

    const messageData = {
      service_id: process.env.REACT_APP_SERVICE_ID,
      template_id: process.env.REACT_APP_TEMPLATE_ID,
      user_id: process.env.REACT_APP_USER_ID,
      template_params: {
        from_email: email.trim(),
        from_name: name.trim(),
        message: message.trim(),
      },
    };

    const options = {
      method: "POST",
      body: JSON.stringify(messageData),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    };

    let valid =
      message.trim() != "" ||
      name.trim() != "" ||
      email.trim() != "" ||
      email.includes("@") ||
      email.includes(".com");

    if (valid) {
      await fetch(`https://api.emailjs.com/api/v1.0/email/send`, options)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          alert("We have received your message. Thank you");
        });

      // alert("correct input received");
      // console.log(valid);
    } else {
      alert("Wrong input received");
    }
  };
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Sinapari</title>
          <meta
            name="description"
            content="Official website of Sinapari Limited"
          />
          <link rel="icon" href="/sinafavi.png" />
        </Head>

        <div className={styles.container}>
          <div className={styles.bannerContactContainer}>
            <p className={styles.bannerContact}>Phone: +233540182786</p>
            <p className={styles.bannerContact}>Email: info@sinapari.com</p>
          </div>
          <div className={styles.banner}>
            <img
              src="/sinalogo.png"
              alt="Sinapari Logo"
              height={135}
              width={492}
            />
            <h3 className={styles.bannerTextMain}>
              Transport Your Wealth Safely
              <br /> With <span className={styles.sinapari}>Sinapari</span>
            </h3>
            <div className={styles.bannerCtaContainer}>
              <a
                href="https://sinapari.herokuapp.com"
                className={styles.bannerCta1}
              >
                Request Trucks
              </a>
              <button
                onClick={() => {
                  alert("Give us a call at 0540182786 and we will set you up");
                }}
                className={styles.bannerCta2}
              >
                Become a Transporter
              </button>
            </div>
          </div>
        </div>

        <div className={styles.aboutContainer}>
          <div className={styles.aboutUs}>
            <div className={styles.contentContainer}>
              <h3 className={styles.aboutHeader}>Who Are We?</h3>
              <p className={styles.aboutContent}>
                Sinapri Limited is an indigenous Ghanaian Tech Logistics startup
                that seeks to bridge the gap between people and trucks. Yes,
                between people and trucks. We wil also help in the fight against
                Global Warming.
              </p>
            </div>
            <div className={styles.contentContainer}>
              <h3 className={styles.aboutHeader}>Our Solution</h3>
              <p className={styles.aboutContent}>
                We have developed a Web Solution that can be used by companies
                and individuals to easily request trucks and track the progress
                of their goods on the road.
              </p>
            </div>
          </div>
          <div className={styles.aboutDrivers}>
            <p className={styles.driverContent}>
              Drivers and Transporters who work with Sinapari make more money
              while spending lesser time on the road with empty loads. At
              Sinapari every mileage counts.
            </p>
          </div>
        </div>
        <div className={styles.sectionThree}>
          <p className={styles.s3para}>
            Keep track of your goods using our cloud platform,
            <br />
            it has never been this easy.
          </p>
          <a href="https://sinapari.herokuapp.com" className={styles.s3button}>
            Sign Up
          </a>
        </div>

        <div className={styles.sectionFour}>
          <p className={styles.s4para}>
            Make more money as driver than you have ever made,
            <br />
            using even less fuel.
          </p>
          <button
            onClick={() => {
              alert("Give us a call at 0540182786 and we will set you up");
            }}
            className={styles.s4button}
          >
            Join Us
          </button>
        </div>

        <div className={styles.team}>
          <h3 className={styles.teamHeading}>The Brains Behind The Scenes</h3>
          <div className={styles.personelContainer}>
            <div className={styles.personelCard}>
              <img className={styles.personnelImg} src="/team1.png" />
              <div className={styles.personelDetails}>
                <p className={styles.personelName}>Hamdu Napari Salifu</p>
                <p className={styles.personelRole}>Co-Founder & Tech Lead</p>
              </div>
            </div>
            <div className={styles.personelCard}>
              <img className={styles.personnelImg} src="/team2.png" />
              <div className={styles.personelDetails}>
                <p className={styles.personelName}>Ibrahim Usman</p>
                <p className={styles.personelRole}>
                  Co-Founder & Operations Manager
                </p>
              </div>
            </div>
            <div className={styles.personelCard}>
              <img className={styles.personnelImg} src="/team3.png" />
              <div className={styles.personelDetails}>
                <p className={styles.personelName}>Mamudu Sina Salifu</p>
                <p className={styles.personelRole}>
                  Co-Founder & Business Lead
                </p>
              </div>
            </div>
            <div className={styles.personelCard}>
              <img className={styles.personnelImg} src="/team4.png" />
              <div className={styles.personelDetails}>
                <p className={styles.personelName}>Mohammad Habib</p>
                <p className={styles.personelRole}>Graphics Engineer</p>
              </div>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.contactContainer}>
            <h3 className={styles.footerHeader}>Talk To Us</h3>
            <div>
              <textarea
                className={styles.message}
                placeholder="Your Message To Us"
                value={this.state.message}
                onChange={(e) => {
                  this.setState({ message: e.target.value });
                }}
              ></textarea>
              <div className={styles.senderDetContainer}>
                <input
                  className={styles.shortInput}
                  placeholder="Your Name"
                  type="text"
                  value={this.state.name}
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                />
                <input
                  className={styles.shortInput}
                  placeholder="Your Email"
                  type="text"
                  value={this.state.email}
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              <button
                onClick={() => {
                  this.sendMessage();
                }}
                className={styles.sendButton}
              >
                Fire Away
              </button>
            </div>
          </div>
          <div className={styles.copyrightContainer}>
            <p style={{ textAlign: "center" }}>
              Copyright &copy;
              {new Date().getFullYear()} All rights reserved | This Website is
              powered by Sinapari
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
