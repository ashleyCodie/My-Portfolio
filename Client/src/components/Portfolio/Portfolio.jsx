import weddingsbydesign7 from "../../assets/images/weddingsbydesign7.jpg";
import weddingsbydesign2 from "../../assets/images/weddingsbydesign2.JPG";
import weddingsbydesign3 from "../../assets/images/weddingsbydesign3.JPG";
import weddingsbydesign4 from "../../assets/images/weddingsbydesign4.JPG";
import weddingsbydesign5 from "../../assets/images/weddingsbydesign5.JPG";
import weddingsbydesign6 from "../../assets/images/weddingsbydesign6.JPG";
import loantracker1 from "../../assets/images/loantracker1.jpg";
import loantracker2 from "../../assets/images/loantracker2.jpg";
import loantracker3 from "../../assets/images/loantracker3.jpg";
import loantracker4 from "../../assets/images/loantracker4.jpg";
import loantracker5 from "../../assets/images/loantracker5.jpg";
import loantracker6 from "../../assets/images/loantracker6.jpg";
import loantracker7 from "../../assets/images/loantracker7.jpg";
import loantracker8 from "../../assets/images/loantracker8.jpg";
import realestate1 from "../../assets/images/realestate1.jpg";
import realestate2 from "../../assets/images/realestate2.jpg";
import realestate3 from "../../assets/images/realestate3.jpg";
import realestate4 from "../../assets/images/realestate4.jpg";
import realestate5 from "../../assets/images/realestate5.jpg";
import realestate6 from "../../assets/images/realestate6.jpg";
import realestate7 from "../../assets/images/realestate7.jpg";
import realestate8 from "../../assets/images/realestate8.jpg";
import furbaby1 from "../../assets/images/furbaby1.jpg";
import furbaby2 from "../../assets/images/furbaby2.jpg";
import furbaby3 from "../../assets/images/furbaby3.jpg";
import furbaby4 from "../../assets/images/furbaby4.jpg";
import furbaby5 from "../../assets/images/furbaby5.jpg";
import furbaby6 from "../../assets/images/furbaby6.jpg";
import furbaby7 from "../../assets/images/furbaby7.jpg";
import furbaby8 from "../../assets/images/furbaby8.jpg";
import sobermeets from "../../assets/images/sobermeets.PNG";
import sobermeets2 from "../../assets/images/sobermeets2.PNG";
import sobermeets3 from "../../assets/images/sobermeets3.PNG";
import sobermeets5 from "../../assets/images/sobermeets5.PNG";
import starbrands1 from "../../assets/images/starbrands1.PNG";
import starbrands2 from "../../assets/images/starbrands2.PNG";
import starbrands3 from "../../assets/images/starbrands3.PNG";
import starbrands4 from "../../assets/images/starbrands4.PNG";
import starbrands5 from "../../assets/images/starbrands5.jpg";
import starbrands6 from "../../assets/images/starbrands6.jpg";
import starbrands7 from "../../assets/images/starbrands7.jpg";
import starbrands8 from "../../assets/images/starbrands8.jpg";
import sparklingclean from "../../assets/images/sparklingclean.PNG";
import sparklingclean2 from "../../assets/images/sparklingclean2.PNG";
import sparklingclean3 from "../../assets/images/sparklingclean3.PNG";
import sparklingclean4 from "../../assets/images/sparklingclean4.PNG";
import aiimagecreator from "../../assets/images/aiimagecreator.png";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.jpg";
import rpsgame2 from "../../assets/images/rpsgame2.PNG";
import rpsgame from "../../assets/images/rpsgame.PNG";

const Portfolio = () => {
  return (
    <div>
      <div className="myPortfolioWrapper">
        <nav>
          <ul className="returnHome">
            <a href="./" style={{ color: "white" }}>
              Return To Home Page
            </a>
          </ul>
        </nav>
        <h1 className="myPortfolio">Portfolio</h1>
        <br />
      </div>

      <div className="mainWrapper2">
        <div className="techWrapper">
          <div className="aboutTech">
            <h4 className="project1">Weddings By Design</h4>
            <br />
            <p>
              <span>Full Stack Web Application</span>
              <br />
              <span>Description:</span> Weddings By Design, is a MERN Full Stack
              Web Application. This website was created for a company who
              specializes in Planning Theme Weddings. The offer special packages
              that include different services to fits the needs of their
              customers. Vendors are able to login to the application and see if
              tasks have been assigned to them. Customers can contact then via
              the Contact Us tab. Project Managers can login and see what the
              status is of the project, see what tasks are pending, add new
              projects, and add new users/vendors from the dashboard.
              <br />
              <br />
              <span>Libraries/Tech used:</span> React, React State Management,
              Vite, Redux, RTK, Argon2, JavaScript, TailwindCSS, Mongoose,
              Express, Cors, Axios, Faker
            </p>
            <br />
            <p>
              <img
                src={weddingsbydesign7}
                alt="weddingsbydesign7"
                className="sobermeets"
              />
              <img
                src={weddingsbydesign2}
                alt="weddingsbydesign2"
                className="sobermeets2"
              />
              <img
                src={weddingsbydesign3}
                alt="weddingsbydesign3"
                className="sobermeets3"
              />
              <img
                src={weddingsbydesign4}
                alt="weddingsbydesign4"
                className="sobermeets5"
              />
              <img
                src={weddingsbydesign5}
                alt="weddingsbydesign5"
                className="sobermeets3"
              />
              <img
                src={weddingsbydesign6}
                alt="weddingsbydesign6"
                className="sobermeets5"
              />
            </p>
            <p>
              You can view this complete application:{" "}
              <span className="link">
                http://gitlab.perryville.perseverenow.org/abrooks/weddings-by-design
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mainWrapper2">
        <div className="techWrapper">
          <div className="aboutTech">
            <h4 className="project1">Loan Tracker</h4>
            <br />
            <p>
              <span>Full Stack Web Application</span>
              <br />
              <span>Description:</span> Loan Tracker, is a MERN Full Stack Web
              Application. The Mortgage Loan Tracker, is a software tool
              designed to manage and monitor your team at various stages of
              mortgage loan processing, from origination to closing. It helps
              lenders and loan officers keep track of loan production, status,
              and the teams involved in post-production activities. The Loan
              Tracker is a must have software tool to enhance production,
              communication of your team, and to easily review the status of the
              loans your team is working on. Make sure processing is done
              effectively and scheduled closing deadlines are met. Email
              capabilities available through employees, and a closing calander
              with all scheduled closing dates. The search bar provides quick
              easy serach for the borrowers name to locate a file quickly.
              <br />
              <br />
              <span>Libraries/Tech used:</span> React, Vite, TailwindCSS, Redux,
              RTK, Recharts, JavaScript, Mongoose, Express, Cors, Axios, Faker,
              JWT, Argon2
            </p>
            <br />
            <p>
              <img
                src={loantracker1}
                alt="loantracker1"
                className="sobermeets"
              />
              <img
                src={loantracker2}
                alt="loantracker2"
                className="sobermeets2"
              />
              <img
                src={loantracker3}
                alt="loantracker3"
                className="sobermeets3"
              />
              <img
                src={loantracker4}
                alt="loantracker4"
                className="sobermeets5"
              />
              <img
                src={loantracker5}
                alt="loantracker5"
                className="sobermeets3"
              />
              <img
                src={loantracker6}
                alt="loantracker6"
                className="sobermeets5"
              />
              <img
                src={loantracker7}
                alt="loantracker7"
                className="sobermeets3"
              />
              <img
                src={loantracker8}
                alt="loantracker8"
                className="sobermeets5"
              />
            </p>
            <p>
              You can view this complete application:{" "}
              <span className="link">
                http://gitlab.perryville.perseverenow.org/abrooks/mortgage-loan-tracker
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mainWrapper2">
        <div className="techWrapper">
          <div className="aboutTech">
            <h4 className="project1">Queen Creek Real Estate</h4>
            <br />
            <p>
              <span>Full Stack Web Application</span>
              <br />
              <span>Description:</span> Queen Creek Real Estate, is a MERN Full
              Stack Web Application. This website was created for a Real Estate
              firm to be able to display the properties they have for sale or
              rent. Real estate agents can log in to manage their listings. You
              can use the search bar on the home page to search for a specific
              city or state. Customers can get Pre-Approved or contact a Real
              Estate agent. On each listing theres a contact agent button that
              will contact that specific agent directly.
              <br />
              <br />
              <span>Libraries/Tech used:</span> React, Vite, TailwindCSS,
              JavaScript, Mongoose, Express, Crypto, Cors, Axios, Faker
            </p>
            <br />
            <p>
              <img src={realestate1} alt="realestate1" className="sobermeets" />
              <img
                src={realestate2}
                alt="realestate2"
                className="sobermeets2"
              />
              <img
                src={realestate3}
                alt="realestate3"
                className="sobermeets3"
              />
              <img
                src={realestate4}
                alt="realestate4"
                className="sobermeets5"
              />
              <img
                src={realestate5}
                alt="realestate5"
                className="sobermeets3"
              />
              <img
                src={realestate6}
                alt="realestate6"
                className="sobermeets5"
              />
              <img
                src={realestate7}
                alt="realestate7"
                className="sobermeets3"
              />
              <img
                src={realestate8}
                alt="realestate8"
                className="sobermeets5"
              />
            </p>
            <p>
              You can view this complete application:{" "}
              <span className="link">
                http://gitlab.perryville.perseverenow.org/abrooks/queen-creek-real-estate
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mainWrapper2">
        <div className="techWrapper">
          <div className="aboutTech">
            <h4 className="project1">Fur Baby Rescue</h4>
            <br />
            <p>
              <span>Full Stack Web Application</span>
              <br />
              <span>Description:</span> Fur Baby Rescue, is a MERN Full Stack
              Web Application. This website was created for a non-profit pet
              adoption rescue service. View recently listed pets, get details
              about a specific pet, use the search bar on top to search for a
              specific pet type to see whats available, or create an account to
              list your pet for adoption and be able to update your listing.
              Customers can contact the owner directly with question and
              adoption process.
              <br />
              <br />
              <span>Libraries/Tech used:</span> React, Vite, TailwindCSS,
              json-server, Redux, JavaScript, Mongoose, Express, Crypto, JWT,
              Cors, Axios, and Passport
            </p>
            <br />
            <p>
              <img src={furbaby1} alt="furbaby1" className="sobermeets" />
              <img src={furbaby2} alt="furbaby2" className="sobermeets2" />
              <img src={furbaby3} alt="furbaby3" className="sobermeets3" />
              <img src={furbaby4} alt="furbaby4" className="sobermeets5" />
              <img src={furbaby5} alt="furbaby5" className="sobermeets3" />
              <img src={furbaby6} alt="furbaby6" className="sobermeets5" />
              <img src={furbaby7} alt="furbaby7" className="sobermeets3" />
              <img src={furbaby8} alt="furbaby8" className="sobermeets5" />
            </p>

            <p>
              You can view this complete application:{" "}
              <span className="link">
                http://gitlab.perryville.perseverenow.org/abrooks/fur-baby-rescue
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mainWrapper2">
        <div className="techWrapper">
          <div className="aboutTech">
            <h4 className="project1">SOBERmeets</h4>
            <br />
            <p>
              <span>Full Stack Web Application</span>
              <br />
              <span>Description:</span> SOBERmeets, is a MERN Full Stack Web
              Application. This website was created for a non-profit
              organization to connect sober individuals and to help them through
              their recovery. The Meetings section list different meeting option
              in their area offered each day of the week. The Events section is
              a list of different sober events they can participate in through
              out the year. You can click on any of the Registration buttons
              through the site to register for that event. The Donations section
              allows people to donate for different events. Theres a Vendors
              Login section for vendors to sign up and post events they may be
              hosting for the sober community. The Contact Us section offers a
              24 Hour support help hotline for people battling addiction.
              <br />
              <br />
              <span>Libraries/Tech used:</span> React, React State Management,
              Redux, JavaScript, Bootstrap, Bootstrap Icons, Mongoose, Express,
              Cors, Axios
            </p>
            <br />
            <p>
              <img src={sobermeets} alt="sobermeets" className="sobermeets" />
              <img
                src={sobermeets2}
                alt="sobermeets2"
                className="sobermeets2"
              />
              <img
                src={sobermeets3}
                alt="sobermeets3"
                className="sobermeets3"
              />
              <img
                src={sobermeets5}
                alt="sobermeets5"
                className="sobermeets5"
              />
            </p>

            <p>
              You can view this complete application:{" "}
              <span className="link">
                http://gitlab.perryville.perseverenow.org/abrooks/sober-meets
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mainWrapper2">
        <div className="techWrapper">
          <div className="aboutTech">
            <h4 className="project1">Star Brands Boutique</h4>
            <br />
            <p>
              <span>Full Stack Web Application</span>
              <br />
              <span>Description:</span> Star Brands Boutique, is a MERN Full
              Stack Web Application. This Shopping App is a thrift store based
              company. You can create an account, sign up for SMS/email
              notifications, write reviews on products, update your dashboard
              with shipping information for easy checkout, and pay for products
              online. You search all products or search by a specific brand
              name. The sign up and long in are created with a Jwt web token and
              Redux for a secure login every time. The styling was created using
              TailwindCSS.
              <br />
              <br />
              <span>Libraries/Tech used:</span> JavaScript, React, React State
              Management, JWT, Redux, TailwindCSS, Bootstrap Icons, Mongoose,
              Express, Cors, Axios
            </p>
            <br />
            <p>
              <img
                src={starbrands1}
                alt="starbrands1"
                className="starbrands1"
              />
              <img
                src={starbrands2}
                alt="starbrands2"
                className="starbrands2"
              />
              <img
                src={starbrands3}
                alt="starbrands3"
                className="starbrands3"
              />
              <img
                src={starbrands4}
                alt="starbrands4"
                className="starbrands4"
              />
              <img
                src={starbrands5}
                alt="starbrands5"
                className="starbrands1"
              />
              <img
                src={starbrands6}
                alt="starbrands6"
                className="starbrands2"
              />
              <img
                src={starbrands7}
                alt="starbrands7"
                className="starbrands3"
              />
              <img
                src={starbrands8}
                alt="starbrands8"
                className="starbrands4"
              />
            </p>

            <p>
              You can view this complete application:{" "}
              <span className="link">
                http://gitlab.perryville.perseverenow.org/abrooks/star-brands-boutique
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mainWrapper2">
        <div className="techWrapper">
          <div className="aboutTech">
            <h4 className="project2">Sparkling Clean Cleaning Services</h4>
            <br />
            <p>
              <span>Front End Web Application</span>
              <br />
              <span>Description:</span> Sparkling Clean Home Cleaning Services,
              in a Front End Web Application designed for the company to be able
              to advertise and communicate with their clients. Sparkling Clean
              is a company that offers cleaning services. This website was
              designed so customers can view the services, pricing, packages,
              schedule a cleaning directly online, or contact their customer
              service team. This website is 100% reactive to the screen size the
              viewer is using whether its a phone, tablet or full size computer.
              <br />
              <br />
              <span>Libraries/Tech used:</span> React, React State Management,
              Bootstrap, Bootstrap Icons, and Eslint.
            </p>
            <br />
            <p>
              <img
                src={sparklingclean}
                alt="sparklingclean"
                className="sparklingclean"
              />
              <img
                src={sparklingclean2}
                alt="sparklingclean2"
                className="sparklingclean2"
              />
              <img
                src={sparklingclean3}
                alt="sparklingclean3"
                className="sparklingclean3"
              />
              <img
                src={sparklingclean4}
                alt="sparklingclean3"
                className="sparklingclean4"
              />
            </p>
            <p>
              You can view this complete application:{" "}
              <span className="link">
                http://gitlab.perryville.perseverenow.org/abrooks/sparkling-clean-cleaning-service
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mainWrapper2">
        <div className="techWrapper">
          <div className="aboutTech">
            <h4 className="project3">AI Image Creator</h4>
            <br />
            <p>
              <span>Front End Web Application</span>
              <br />
              <span>Description:</span> AI Image Creator, was designed to
              generate photos in a classroom setting where we did not have
              access to the internet, using AI Technology. We could generate
              photos to use on our projects. In the Inputs text are you describe
              what photos you are looking for in detail. In the Negative Prompts
              input are you put what you dont want in the photo such as blurry,
              canvas, painting, distorted, etc. In the Guidance Scale you enter
              the photo scale your are looking for. Click Get Image and the
              photo is generated. Changing prompts to create the right image
              outcome with AI technology.
              <br />
              <br />
              <span>Libraries/Tech used:</span> React, React State Management,
              HuggingFace.js, Axios, and Cors.
            </p>
            <br />
            <p>
              <img
                src={aiimagecreator}
                alt="aiimagecreator"
                className="aiimagecreator"
              />
            </p>
            <p>
              You can view this complete application:{" "}
              <span className="link">
                http://gitlab.perryville.perseverenow.org/abrooks/ai-image-creator
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mainWrapper2">
        <div className="techWrapper">
          <div className="aboutTech">
            <h4 className="project1">codeOnTheBlog</h4>
            <br />
            <p>
              <span>Full Stack Web Application</span>
              <br />
              <span>Description:</span> codeOnTheBlog, is a MERN Full Stack Web
              Application. This application was created so Web Developers can
              ask question and blog about new things they have learned. You can
              add new blogs, the owner of the blog can edit or delete the blog.
              They provide a date and time stamp so you can see when the blog
              was posted and who posted it.
              <br />
              <br />
              <span>Libraries/Tech used:</span> React, React State Management,
              Vite, TailwindCSS, JavaScript, Mongoose, Express, Cors, and Axios.
            </p>
            <br />
            <p>
              <img src={blog1} alt="blog1" className="sobermeets" />
              <img src={blog2} alt="blog2" className="sobermeets2" />
              <img src={blog3} alt="blog3" className="sobermeets3" />
              <img src={blog4} alt="blog4" className="sobermeets5" />
            </p>

            <p>
              You can view this complete application:{" "}
              <span className="link">
                http://gitlab.perryville.perseverenow.org/abrooks/blog
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mainWrapper2">
        <div className="techWrapper">
          <div className="aboutTech">
            <h4 className="project4">Rock, Paper, Scissors Game</h4>
            <br />
            <p>
              <span>Front End Web Application</span>
              <br />
              <span>Description:</span> My Rock, Paper, Scissors Game, in a
              Front End Web Application designed to for children to play. You
              choose which object you want to play then you have a count down
              while the computer choose which object it wants to play. You can
              keep track of your score at the top of the screen.
              <br />
              <br />
              <span>Libraries/Tech used:</span> React, React State Management,
              HTML, and CSS.
            </p>

            <br />
            <p>
              <img src={rpsgame} alt="rpsgame" className="rpsgame" />
              <img src={rpsgame2} alt="rpsgame2" className="rpsgame2" />
            </p>
            <p>
              You can view this complete application:{" "}
              <span className="link">
                http://gitlab.perryville.perseverenow.org/abrooks/rock-paper-scissors-game
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;