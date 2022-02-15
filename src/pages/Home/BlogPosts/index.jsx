import React from "react";
import moreProducts from "../../../assets/icons/more-products.svg";
import thumbnail from "../../../assets/images/thumbnail.jpg";
import middleBlog from "../../../assets/images/blog-middle.jpg";

const BlogPosts = () => {
  const backGroundImage = {
    width: "469px",
    height: "400px",
    borderRadius: "12px",
    backgroundImage: `url(${thumbnail})`,
    backgroundSize: "auto",
  };
  return (
    <section className="read-blog">
      <div className="read-blog-top">
        <h3 className="heading" style={{ marginBottom: "37px" }}>
          Read our Blog posts
        </h3>
        <div className="btn-flex">
          <p>Go to Blog</p>
          <a href="#">
            <img src={moreProducts} />
          </a>
        </div>
      </div>
      <div className="read-blog-bottom">
        <div className="blog-left" style={backGroundImage}>
          <div className="blog-thumbnail">
            <img
              src=""
              alt=""
              style={{ width: "469px", height: "195px", opacity: 0 }}
            />
            <div
              className="text-small"
              style={{
                width: "80px",
                height: "18px",
                backgroundColor: "#F4F8EC",
                borderRadius: "12px",
              }}
            >
              <p
                className="text"
                style={{
                  fontSize: "12px",
                  color: " #6A983C",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                }}
              >
                Dinner tips
              </p>
            </div>
          </div>
          <div className="blog-content">
            <h4 className="heading">
              Our chef tips for a great and tasty dinner ready in 20 minutes
            </h4>
            <div className="blog-info">
              <div className="avatar">
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Author"
                  style={{ width: "32px", height: "32px", borderRadius: "50%" }}
                />
              </div>
              <p className="name">Author</p>
              <p className="post-create-at">17.6.2020</p>
            </div>
          </div>
        </div>

        <div className="blog-middle">
          <div className="blog-middle-left">
            <div
              className="thumbail"
              style={{
                width: "269px",
                height: "180px",
                borderRadius: "12px",
                backgroundColor: "#F5F5F5",
                marginBottom: "24px",
              }}
            >
              <a href="#">
                <img src={middleBlog} alt="" />
              </a>
            </div>
            <div className="middle-content">
              <div
                className="text-small"
                style={{
                  width: "80px",
                  height: "18px",
                  backgroundColor: "#F4F8EC",
                  borderRadius: "12px",
                }}
              >
                <p
                  className="text"
                  style={{
                    fontSize: "12px",
                    color: " #6A983C",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                  }}
                >
                  Vagetable
                </p>
              </div>
              <a href="#">
                <h3
                  className="heading"
                  style={{ width: "289px", marginTop: "8px" }}
                >
                  Which vegetable your family will love and want's eat each day
                </h3>
              </a>

              <div className="blog-info --middle">
                <p className="name">Author</p>
                <p className="post-create-at">17.6.2020</p>
              </div>
            </div>
          </div>
          <div className="blog-middle-right">
            <div className="blog__item-wrap">
              <div className="blog__item">
                <div className="blog-heading">
                  <a href="#">
                    <h3 className="heading">
                      Salat is kinda good start to your morning routines
                    </h3>
                  </a>
                </div>
                <div className="blog-info --middle">
                  <p className="name">Author</p>
                  <p className="post-create-at">17.6.2020</p>
                </div>
              </div>
              <div className="blog__item">
                <div className="blog-heading">
                  <a href="#">
                    <h3 className="heading">
                      Salat is kinda good start to your morning routines
                    </h3>
                  </a>
                </div>
                <div className="blog-info --middle">
                  <p className="name">Author</p>
                  <p className="post-create-at">17.6.2020</p>
                </div>
              </div>
              <div className="blog__item">
                <div className="blog-heading">
                  <a href="#">
                    <h3 className="heading">
                      Salat is kinda good start to your morning routines
                    </h3>
                  </a>
                </div>
                <div className="blog-info --middle">
                  <p className="name">Author</p>
                  <p className="post-create-at">17.6.2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-right" style={{ marginLeft: "140px" }}>
          <div className="blog-right-list">
            <div className="blog-right-item">
              <a href="#">
                {" "}
                <img
                  src="https://media.istockphoto.com/photos/guinea-pigs-on-orange-chair-picture-id1302667734?b=1&k=20&m=1302667734&s=170667a&w=0&h=luoxfZshUn0H_Cya_wLk0-Ay6JYa7B4Q6brg0iG7BjM="
                  alt=""
                />
              </a>
            </div>
            <div className="blog-right-item">
              <a href="#">
                {" "}
                <img
                  src="https://media.istockphoto.com/photos/guinea-pigs-on-orange-chair-picture-id1302667734?b=1&k=20&m=1302667734&s=170667a&w=0&h=luoxfZshUn0H_Cya_wLk0-Ay6JYa7B4Q6brg0iG7BjM="
                  alt=""
                />
              </a>
            </div>
            <div className="blog-right-item">
              <a href="#">
                {" "}
                <img
                  src="https://media.istockphoto.com/photos/guinea-pigs-on-orange-chair-picture-id1302667734?b=1&k=20&m=1302667734&s=170667a&w=0&h=luoxfZshUn0H_Cya_wLk0-Ay6JYa7B4Q6brg0iG7BjM="
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
