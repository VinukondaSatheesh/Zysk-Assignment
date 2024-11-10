import React from 'react';
import './BlogSection.css'; 

const BlogSection = () => {


  return (

    <div class="blog-section">
        <div class="blog-header">
            <h2>Lastest blog posts</h2>
            <p>Tools and strategies modern teams need to help their companies grow.</p>
            <a class="view-all" >View all posts</a>
        </div>

        <div class="blog-grid">
            <div class="blog-card">
                <div class="blog-image">
                <img src="https://res.cloudinary.com/dsxcwafcw/image/upload/v1731214292/896aad9fd5981c841633a846ddb6994b_eesp69.png" alt=""/>

                </div>               
                <div class="blog-content">
                    <span class="blog-tag">Design</span>
                    <div class="blog-title">
                        <a href="#">UX review presentations</a>
                        <span>↗</span>
                    </div>
                    <p class="blog-description">
                        How do you create compelling presentations that wow your colleagues and impress your managers?
                    </p>
                    <div class="blog-footer">
                        <div class="author-image"><img src="https://res.cloudinary.com/dsxcwafcw/image/upload/v1731214456/5cb712a39a846f3d49443b8283852dca_ssojhr.png" alt=""/></div>
                        <div>Olivia Rhye • 20 Jan 2024</div>
                    </div>
                </div>
            </div>

            <div class="blog-card">
                <div class="blog-image">
                    <img src="https://res.cloudinary.com/dsxcwafcw/image/upload/v1731214055/a3c522719b54dd45b1795921034a3f00_tw1ito.png" alt=""/>
                </div>
                <div class="blog-content">
                    <span class="blog-tag">Product</span>
                    <div class="blog-title">
                        <a href="#">Migrating to Linear 101</a>
                        <span>↗</span>
                    </div>
                    <p class="blog-description">
                        Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.
                    </p>
                    <div class="blog-footer">
                        <div class="author-image"><img src="https://res.cloudinary.com/dsxcwafcw/image/upload/v1731214723/5d4f6c2c6c7caf725e2ec6d6ed6aca1d_rjjldw.png" alt=""/></div>
                        <div>Phoenix Baker • 19 Jan 2024</div>
                    </div>
                </div>
            </div>

            <div class="blog-card">
                <div class="blog-image">
                    <img src="https://res.cloudinary.com/dsxcwafcw/image/upload/v1731214258/1dbd591c5182a37dfedc9ff110ae94d9_hp2qru.png" alt=""/>
                </div>
                <div class="blog-content">
                    <span class="blog-tag">Software Engineering</span>
                    <div class="blog-title">
                        <a href="#">Building your API stack</a>
                        <span>↗</span>
                    </div>
                    <p class="blog-description">
                        The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
                    </p>
                    <div class="blog-footer">
                        <div class="author-image"><img src="https://res.cloudinary.com/dsxcwafcw/image/upload/v1731214810/892ca2df6e032e2c3c86f59b0f2caa70_qowyyy.png" alt=""/></div>
                        <div>Lana Steiner • 18 Jan 2024</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default BlogSection;
