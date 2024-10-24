
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="profile">
          <Image
            src="/Screenshot (22).jpg"
            alt="Profile picture of John"
            width={200}
            height={200}
            className="profile-img"
          />
          <h1>Hi, I am John,
            <br></br> Creative Technologist</h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="download-btn">Download Resume</button>
        </div>
        <nav className="nav" >
          <a href="#">Works</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#">Blog</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Recent Posts Section */}
      <section className="recent-posts">
        <div className="section-header">
          <h2>Recent Post</h2>
          <a href="#" className="view-all">View all</a>
        </div>
        <div className="post-grid">
          <div className="post-card">
            <h3 className="post-title">Making a design system from scratch</h3>
            <p className="post-date">12 Feb 2020 | Design, Pattern</p>
            <p className="post-p">Amet minim mollit non deserunt ullamco est sit<br></br> aliqua dolor do amet sint.
               Velit officia consequat <br></br>duis enim velit mollit. 
               Exercitation veniam <br></br>consequat sunt nostrud amet.</p>
          </div>
          <div className="post-card">
            <h3 className="post-title">Making a design system from scratch</h3>
            <p className="post-date">12 Feb 2020 | Design, Pattern</p>
            <p className="post-p">Amet minim mollit non deserunt ullamco est sit<br></br> aliqua dolor do amet sint.
               Velit officia consequat<br></br> duis enim velit mollit.
                Exercitation veniam<br></br> consequat sunt nostrud amet.</p>
          </div>
        </div>
      </section>

      <div className="featured-works">
  <h2>Featured works</h2>
  <div className="work-card">
    <img src="assign-pic2.jpg" alt="Designing Dashboards" />
    <div className="work-details">
      <h3>Designing Dashboards</h3>
      <p>2020 Dashboard</p>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
    </div>
  </div>
  <div className="work-card">
    <img src="assign-pic3.jpg" alt="Designing Dashboards" />
    <div className="work-details">
      <h3>Designing Dashboards</h3>
      <p>2020 Dashboard</p>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
    </div>
  </div>
  <div className="work-card">
    <img src="Screenshot (12).jpg" alt="Designing Dashboards" />
    <div className="work-details">
      <h3>Designing Dashboards</h3>
      <p> 2020 Dashboard</p>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
    </div>
  </div>
</div>


      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2020 All rights reserved</p>
        <div className="social-icons">
          <a href="#"><img src="social-3.jpg" alt="Facebook" /></a>
          <a href="#"><img src="social-2.jpg" alt="Instagram" /></a>
          <a href="#"><img src="social-1.jpg" alt="LinkedIn" /></a>
        </div>
      </footer>
    </div>
  );
}
